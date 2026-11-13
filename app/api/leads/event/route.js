import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getMongoDb, ensureLeadIndexes } from '@/lib/mongodb';
import { checkLeadRateLimit } from '@/lib/lead-rate-limit';

const eventSchema = z.object({
  sessionId: z.string().min(1).max(128),
  type: z.enum([
    'PageView',
    'SegmentSelected',
    'CalcStarted',
    'CalcCompleted',
    'Contact',
    'step_viewed',
    'step_completed',
  ]),
  step: z.string().max(100).optional(),
  segment: z.enum(['agency', 'business', 'talent', 'other']).optional(),
  variant: z.string().max(100).optional(),
  eventId: z.string().min(8).max(120).regex(/^[A-Za-z0-9._:-]+$/).optional(),
  meta: z.record(z.union([z.string().max(1000), z.number(), z.boolean()])).optional(),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = eventSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid event payload' }, { status: 400 });
    }

    const payload = parsed.data;
    const db = await getMongoDb();
    await ensureLeadIndexes();
    const allowed = await checkLeadRateLimit(db, {
      scope: 'lead_event',
      key: payload.sessionId,
      limit: 60,
      windowMs: 60 * 1000,
    });
    if (!allowed) return NextResponse.json({ error: 'Too many events.' }, { status: 429 });

    const userAgent = request.headers.get('user-agent') || 'unknown';
    await db.collection('lead_events').insertOne({
      ...(payload.eventId ? { eventId: payload.eventId } : {}),
      sessionId: payload.sessionId,
      type: payload.type,
      step: payload.step || null,
      segment: payload.segment || null,
      variant: payload.variant || null,
      meta: payload.meta || {},
      userAgent,
      at: new Date(),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Lead event insert failed', { errorName: error?.name || 'unknown', code: error?.code || 'unknown' });
    return NextResponse.json({ error: 'Failed to record event' }, { status: 500 });
  }
}
