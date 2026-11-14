import { NextResponse } from 'next/server';
import { getMongoDb } from '@/lib/mongodb';
import { requirePanelAuth } from '@/lib/panel-auth';

export async function GET(request, { params }) {
  const auth = await requirePanelAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { leadRef } = await params;
    const db = await getMongoDb();
    const leads = db.collection('leads');
    const lead = await leads.findOne({ leadRef: decodeURIComponent(leadRef) });
    if (!lead) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    const events = await db.collection('lead_events').find({ leadRef: lead.leadRef }).sort({ at: 1 }).toArray();
    const calls = await db.collection('calls').find({ leadRef: lead.leadRef }).sort({ createdAt: -1 }).toArray();

    return NextResponse.json({
      lead,
      activity: events,
      calls,
      touches: lead.touches || [],
    });
  } catch (error) {
    console.error('lead detail failed', error);
    return NextResponse.json({ error: 'Failed to load lead detail' }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  const auth = await requirePanelAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { leadRef } = await params;
    const body = await request.json();
    const db = await getMongoDb();
    const leads = db.collection('leads');

    const update = {
      ...body,
      updatedAt: new Date(),
    };

    delete update._id;
    delete update.leadRef;

    await leads.updateOne({ leadRef: decodeURIComponent(leadRef) }, { $set: update });
    await db.collection('lead_events').insertOne({
      leadRef: decodeURIComponent(leadRef),
      type: 'lead_updated',
      step: 'panel_update',
      meta: body,
      at: new Date(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('lead update failed', error);
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 });
  }
}
