import crypto from 'node:crypto';
import { ensureLeadIndexes } from '@/lib/mongodb';

function getHashKey() {
  const secret = process.env.LEAD_UPDATE_SECRET || process.env.NEXTAUTH_SECRET || process.env.MONGODB_URI;
  if (!secret) throw new Error('A server secret is required for lead rate limiting');
  return secret;
}

function hashKey(value) {
  return crypto.createHmac('sha256', getHashKey()).update(String(value)).digest('hex');
}

export function getClientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() || request.headers.get('x-real-ip')?.trim();
  return ip || 'unknown';
}

export async function checkLeadRateLimit(db, { scope, key, limit, windowMs, now = Date.now() }) {
  await ensureLeadIndexes();
  const bucketId = `${scope}:${hashKey(key)}`;
  const cutoff = new Date(now - windowMs);
  const currentTime = new Date(now);
  const expiresAt = new Date(now + windowMs);
  const rateLimits = db.collection('rate_limits');

  await rateLimits.updateOne(
    { _id: bucketId },
    [
      {
        $set: {
          hits: {
            $filter: {
              input: { $ifNull: ['$hits', []] },
              as: 'hit',
              cond: { $gt: ['$$hit', cutoff] },
            },
          },
        },
      },
      {
        $set: {
          allowed: { $lt: [{ $size: '$hits' }, limit] },
          hits: {
            $cond: [
              { $lt: [{ $size: '$hits' }, limit] },
              { $concatArrays: ['$hits', [currentTime]] },
              '$hits',
            ],
          },
          expiresAt,
        },
      },
    ],
    { upsert: true }
  );
  const bucket = await rateLimits.findOne({ _id: bucketId }, { projection: { allowed: 1 } });
  return Boolean(bucket?.allowed);
}
