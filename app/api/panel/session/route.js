import { NextResponse } from 'next/server';
import { requirePanelAuth } from '@/lib/panel-auth';

export async function GET(request) {
  const auth = await requirePanelAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({
    authenticated: true,
    user: {
      email: auth.user.email,
      name: auth.user.name,
      role: auth.user.role,
    },
  });
}
