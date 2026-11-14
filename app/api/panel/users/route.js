import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { getMongoDb } from '@/lib/mongodb';
import { requirePanelAuth } from '@/lib/panel-auth';

export async function GET(request) {
  const auth = await requirePanelAuth(request, ['admin']);
  if (!auth.authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const db = await getMongoDb();
    const users = await db.collection('users').find({}, { projection: { passwordHash: 0 } }).sort({ createdAt: -1 }).toArray();
    return NextResponse.json({ users });
  } catch (error) {
    console.error('user listing failed', error);
    return NextResponse.json({ error: 'Failed to load users' }, { status: 500 });
  }
}

export async function POST(request) {
  const auth = await requirePanelAuth(request, ['admin']);
  if (!auth.authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '').trim();
    const role = body.role === 'sales' ? 'sales' : 'admin';
    const name = String(body.name || 'New User').trim();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }

    const db = await getMongoDb();
    const users = db.collection('users');
    const existing = await users.findOne({ email });
    if (existing) {
      return NextResponse.json({ error: 'User already exists.' }, { status: 409 });
    }

    await users.insertOne({
      email,
      name,
      role,
      passwordHash: await bcrypt.hash(password, 12),
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('user create failed', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}

export async function PATCH(request) {
  const auth = await requirePanelAuth(request, ['admin']);
  if (!auth.authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const email = String(body.email || '').trim().toLowerCase();
    if (!email) {
      return NextResponse.json({ error: 'User email is required' }, { status: 400 });
    }

    const db = await getMongoDb();
    const users = db.collection('users');
    const user = await users.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const updateFields = { updatedAt: new Date() };

    // Prevent changing role of the primary environment admin
    const defaultAdminEmail = (process.env.PANEL_ADMIN_EMAIL || '').trim().toLowerCase();
    if (email === defaultAdminEmail && body.role && body.role !== 'admin') {
      return NextResponse.json({ error: 'Cannot demote primary root administrator' }, { status: 400 });
    }

    if (body.role && ['admin', 'sales'].includes(body.role)) {
      updateFields.role = body.role;
    }

    if (body.status && ['active', 'inactive'].includes(body.status)) {
      if (email === defaultAdminEmail && body.status === 'inactive') {
        return NextResponse.json({ error: 'Cannot deactivate primary root administrator' }, { status: 400 });
      }
      updateFields.status = body.status;
    }

    if (body.name) {
      updateFields.name = String(body.name).trim();
    }

    // Password reset / update
    if (body.password) {
      const pwd = String(body.password).trim();
      if (pwd.length < 6) {
        return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 });
      }
      updateFields.passwordHash = await bcrypt.hash(pwd, 12);
    }

    await users.updateOne({ email }, { $set: updateFields });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('user update failed', error);
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}
