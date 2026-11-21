import { NextResponse } from 'next/server';

function getRedirectResponse(request) {
  const response = NextResponse.redirect(new URL('/panel/login', request.url));
  response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return response;
}

function decodeBase64Url(value) {
  if (!/^[\w-]+$/.test(value)) return null;
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64 + '='.repeat((4 - base64.length % 4) % 4);
  return Uint8Array.from(atob(padded), (character) => character.charCodeAt(0));
}

async function hasValidPanelToken(token) {
  const [encodedHeader, encodedPayload, encodedSignature, ...extra] = token.split('.');
  if (!encodedHeader || !encodedPayload || !encodedSignature || extra.length) return false;

  const headerBytes = decodeBase64Url(encodedHeader);
  const payloadBytes = decodeBase64Url(encodedPayload);
  const signature = decodeBase64Url(encodedSignature);
  if (!headerBytes || !payloadBytes || !signature) return false;

  let header;
  let payload;
  try {
    const decoder = new TextDecoder();
    header = JSON.parse(decoder.decode(headerBytes));
    payload = JSON.parse(decoder.decode(payloadBytes));
  } catch {
    return false;
  }
  if (header.alg !== 'HS256' || typeof payload.exp !== 'number' || payload.exp <= Date.now() / 1000) {
    return false;
  }
  if (!['admin', 'sales'].includes(payload.role)) return false;

  const secret =
    process.env.JWT_SECRET ||
    process.env.NEXTAUTH_SECRET ||
    (process.env.NODE_ENV === 'production' ? '' : 'bbs-local-dev-secret');
  if (!secret) {
    console.error('Panel authentication requires JWT_SECRET or NEXTAUTH_SECRET in production.');
    return false;
  }

  try {
    const key = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );
    return await crypto.subtle.verify(
      'HMAC',
      key,
      signature,
      new TextEncoder().encode(`${encodedHeader}.${encodedPayload}`)
    );
  } catch (error) {
    console.error('Panel token verification failed:', error);
    return false;
  }
}

function getCanonicalHostRedirect(request) {
  const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0].trim();
  const forwardedProtocol = request.headers.get('x-forwarded-proto')?.split(',')[0].trim().toLowerCase();
  if (!forwardedHost || !forwardedProtocol || !['http', 'https'].includes(forwardedProtocol)) {
    return null;
  }

  let hostname;
  try {
    hostname = new URL(`http://${forwardedHost}`).hostname.toLowerCase();
  } catch {
    return null;
  }
  if (!['buildbeyondstudio.com', 'www.buildbeyondstudio.com'].includes(hostname)) return null;
  if (hostname === 'buildbeyondstudio.com' && forwardedProtocol === 'https') return null;

  const destination = new URL(
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
    'https://buildbeyondstudio.com'
  );
  return NextResponse.redirect(destination, 308);
}

export async function proxy(request) {
  const canonicalHostRedirect = getCanonicalHostRedirect(request);
  if (canonicalHostRedirect) return canonicalHostRedirect;

  const { pathname } = request.nextUrl;
  if (!pathname.startsWith('/panel')) {
    return NextResponse.next();
  }

  const token = request.cookies.get('bbs_admin_token')?.value;
  const response = pathname !== '/panel/login' && !(await hasValidPanelToken(token || ''))
    ? getRedirectResponse(request)
    : NextResponse.next();

  response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return response;
}

export const config = {
  matcher: ['/:path*'],
};
