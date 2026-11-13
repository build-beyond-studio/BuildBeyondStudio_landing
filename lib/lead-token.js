import crypto from 'node:crypto';

const LEAD_UPDATE_TTL_MINUTES = 30;

export function createLeadUpdateToken(leadRef, secret) {
  const key = secret || process.env.LEAD_UPDATE_SECRET || process.env.NEXTAUTH_SECRET;
  if (!key || key.length < 32) return null;
  const expiresAt = Date.now() + (LEAD_UPDATE_TTL_MINUTES * 60 * 1000);
  const hash = crypto.createHmac('sha256', key).update(`${leadRef}:${expiresAt}`).digest('hex');
  return `${encodeURIComponent(leadRef)}.${expiresAt}.${hash}`;
}

export function verifyLeadUpdateToken(token, leadRef, secret) {
  if (!token) return false;
  const key = secret || process.env.LEAD_UPDATE_SECRET || process.env.NEXTAUTH_SECRET;
  if (!key || key.length < 32) return false;
  try {
    const [ref, expiresAt, hash] = token.split('.');
    if (!ref || !expiresAt || !hash || decodeURIComponent(ref) !== leadRef) return false;
    if (!/^\d+$/.test(expiresAt) || !/^[a-f0-9]{64}$/i.test(hash)) return false;
    const expected = crypto.createHmac('sha256', key).update(`${leadRef}:${expiresAt}`).digest();
    const supplied = Buffer.from(hash, 'hex');
    return supplied.length === expected.length
      && crypto.timingSafeEqual(supplied, expected)
      && Number(expiresAt) > Date.now();
  } catch {
    return false;
  }
}
