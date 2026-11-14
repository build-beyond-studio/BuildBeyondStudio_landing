import { NextResponse } from 'next/server';
import { ensureDefaultAdminUser, findUserByEmail, signAdminToken, verifyPassword, checkLoginRateLimit } from '@/lib/panel-auth';

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }

    checkLoginRateLimit(request);
    await ensureDefaultAdminUser();

    const user = await findUserByEmail(email);
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
    }

    const valid = await verifyPassword(password, user.passwordHash);
    if (!valid) {
      return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
    }

    const token = signAdminToken(user);
    const response = NextResponse.json({
      ok: true,
      user: {
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });

    response.cookies.set('bbs_admin_token', token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 8,
    });

    return response;
  } catch (error) {
    console.error('Panel login failed', error);

    const message = error instanceof Error ? error.message : '';
    if (message.includes('Too many login attempts')) {
      return NextResponse.json({ error: message }, { status: 429 });
    }

    if (message.includes('PANEL_ADMIN_EMAIL') || message.includes('PANEL_ADMIN_PASSWORD')) {
      return NextResponse.json({ error: message }, { status: 503 });
    }

    if (message.includes('SSL alert') || message.includes('MongoServerSelectionError')) {
      return NextResponse.json(
        { error: 'Cannot connect to MongoDB. Check the Atlas connection string and allow this machine’s IP address in Network Access.' },
        { status: 503 }
      );
    }

    return NextResponse.json({ error: 'Login is temporarily unavailable. Check the server logs.' }, { status: 500 });
  }
}
