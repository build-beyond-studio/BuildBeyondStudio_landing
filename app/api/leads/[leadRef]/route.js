import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getMongoDb } from '@/lib/mongodb';
import { verifyLeadUpdateToken } from '@/lib/lead-token';
import { sanitizeText } from '@/lib/lead-utils';

const patchSchema = z.object({
  email: z.string().email().max(160).optional().or(z.literal('')),
  agencyName: z.string().max(120).optional(),
  website: z.string().max(2048).optional().or(z.literal('')),
  businessName: z.string().max(120).optional(),
  instagram: z.string().max(180).optional(),
  company: z.string().max(120).optional(),
  token: z.string().min(10).max(500),
}).strict();

function isHttpUrl(value) {
  if (!value) return true;
  try {
    return ['http:', 'https:'].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}

export async function PATCH(request, { params }) {
  try {
    const { leadRef } = await params;
    const parsed = patchSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid update payload' }, { status: 400 });
    }

    const payload = parsed.data;
    if (!verifyLeadUpdateToken(payload.token, leadRef)) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }
    if (!isHttpUrl(payload.website || '')) {
      return NextResponse.json({ error: 'Website must be an HTTP or HTTPS URL.' }, { status: 400 });
    }

    const update = {};
    for (const field of ['email', 'agencyName', 'website', 'businessName', 'instagram', 'company']) {
      if (payload[field] !== undefined) {
        update[field] = field === 'email'
          ? sanitizeText(payload[field], 160).toLowerCase()
          : sanitizeText(payload[field], field === 'website' ? 2048 : field === 'instagram' ? 180 : 120);
      }
    }
    if (Object.keys(update).length === 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const result = await getMongoDb().then((db) => db.collection('leads').updateOne(
      { leadRef },
      { $set: { ...update, updatedAt: new Date() } }
    ));
    if (result.matchedCount === 0) return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Lead profile update failed', { errorName: error?.name || 'unknown', code: error?.code || 'unknown' });
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 });
  }
}
