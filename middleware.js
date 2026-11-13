import { NextResponse } from 'next/server';

function getRedirectResponse(request, pathname) {
  const response = NextResponse.redirect(new URL('/panel/login', request.url));
  response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return response;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith('/panel')) {
    return NextResponse.next();
  }

  const response = (!request.cookies.get('bbs_admin_token')?.value && pathname !== '/panel/login')
    ? getRedirectResponse(request, pathname)
    : NextResponse.next();

  response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return response;
}

export const config = {
  matcher: ['/panel/:path*'],
};
