import { NextResponse } from 'next/server';
import { getMongoDb } from '@/lib/mongodb';
import { requirePanelAuth } from '@/lib/panel-auth';

export async function GET(request) {
  const auth = await requirePanelAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const db = await getMongoDb();
    const calls = db.collection('calls');
    const leadRef = searchParams.get('leadRef');
    const outcome = searchParams.get('outcome');
    const from = searchParams.get('from');
    const to = searchParams.get('to');

    const query = {};
    if (leadRef) query.leadRef = leadRef;
    if (outcome && outcome !== 'all') query.outcome = outcome;
    if (from || to) {
      query.createdAt = {};
      if (from) query.createdAt.$gte = new Date(from);
      if (to) query.createdAt.$lte = new Date(new Date(to).setHours(23, 59, 59, 999));
    }

    const items = await calls.find(query).sort({ createdAt: -1 }).toArray();
    return NextResponse.json({ items });
  } catch (error) {
    console.error('calls failed', error);
    return NextResponse.json({ error: 'Failed to load calls' }, { status: 500 });
  }
}

export async function POST(request) {
  const auth = await requirePanelAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const db = await getMongoDb();

    const callDoc = {
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    if (body.nextActionDate) {
      callDoc.nextActionDate = new Date(body.nextActionDate);
    }

    const result = await db.collection('calls').insertOne(callDoc);

    // If linked to a leadRef, sync callback to lead's nextFollowUpAt and log lead event
    if (body.leadRef) {
      const cleanRef = String(body.leadRef).trim();
      const updateData = { updatedAt: new Date() };

      if (body.nextActionDate) {
        updateData.nextFollowUpAt = new Date(body.nextActionDate);
      }
      if (body.outcome === 'interested' || body.outcome === 'meeting_booked') {
        updateData.status = body.outcome === 'meeting_booked' ? 'call_booked' : 'qualified';
      }

      await db.collection('leads').updateOne(
        { leadRef: cleanRef },
        { $set: updateData }
      );

      await db.collection('lead_events').insertOne({
        leadRef: cleanRef,
        type: 'call_logged',
        step: 'cold_call',
        meta: {
          outcome: body.outcome,
          notes: body.notes,
          nextActionDate: body.nextActionDate || null,
        },
        at: new Date(),
      });
    }

    return NextResponse.json({ ok: true, id: result.insertedId });
  } catch (error) {
    console.error('call create failed', error);
    return NextResponse.json({ error: 'Failed to create call record' }, { status: 500 });
  }
}
