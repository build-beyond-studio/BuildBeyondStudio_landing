import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getMongoDb } from './mongodb';

const JWT_SECRET = process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET || 'bbs-local-dev-secret';
const LOGIN_ATTEMPTS = {};

export function getLoginKey(request) {
  const forwarded = request?.headers?.get?.('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : request?.ip || 'local';
  return ip || 'local';
}

export function checkLoginRateLimit(request) {
  const key = getLoginKey(request);
  const now = Date.now();
  const attempts = LOGIN_ATTEMPTS[key] || [];
  const recent = attempts.filter((time) => now - time < 5 * 60 * 1000);

  if (recent.length >= 5) {
    throw new Error('Too many login attempts. Please wait a few minutes.');
  }

  recent.push(now);
  LOGIN_ATTEMPTS[key] = recent;
}

export async function ensureDefaultAdminUser() {
  const db = await getMongoDb();
  const users = db.collection('users');
  const email = (process.env.PANEL_ADMIN_EMAIL || '').trim().toLowerCase();
  const password = (process.env.PANEL_ADMIN_PASSWORD || '').trim();

  if (!email || !password) {
    throw new Error('PANEL_ADMIN_EMAIL and PANEL_ADMIN_PASSWORD must be set in the local environment.');
  }

  const existing = await users.findOne({ email });
  if (!existing) {
    const passwordHash = await bcrypt.hash(password, 12);
    await users.insertOne({
      email,
      name: 'System Admin',
      role: 'admin',
      passwordHash,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  return { email };
}

export async function findUserByEmail(email) {
  const db = await getMongoDb();
  const users = db.collection('users');
  return users.findOne({ email: String(email || '').trim().toLowerCase() });
}

export async function verifyPassword(inputPassword, hash) {
  return bcrypt.compare(String(inputPassword || ''), hash || '');
}

export function signAdminToken(user) {
  return jwt.sign(
    {
      sub: user._id?.toString?.() || user.email,
      email: user.email,
      role: user.role,
      name: user.name || 'Admin',
    },
    JWT_SECRET,
    { expiresIn: '8h' }
  );
}

export function verifyAdminToken(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export async function requirePanelAuth(request, allowedRoles = ['admin', 'sales']) {
  const authCookie = request?.cookies?.get?.('bbs_admin_token')?.value || request?.cookies?.get?.('bbs_admin_token');
  const token = typeof authCookie === 'string' ? authCookie : authCookie?.value;
  if (!token) {
    return { authorized: false, reason: 'Missing token' };
  }

  const payload = verifyAdminToken(token);
  if (!payload) {
    return { authorized: false, reason: 'Invalid token' };
  }

  if (allowedRoles.length && !allowedRoles.includes(payload.role)) {
    return { authorized: false, reason: 'Permission denied' };
  }

  return { authorized: true, user: payload };
}
