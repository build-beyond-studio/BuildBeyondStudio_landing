import { NextResponse } from 'next/server';
import { getMongoDb } from '@/lib/mongodb';
import { requirePanelAuth } from '@/lib/panel-auth';

export async function GET(request) {
  const auth = await requirePanelAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const db = await getMongoDb();
    const leads = await db.collection('leads').find({}).sort({ createdAt: -1 }).toArray();

    const queue = {
      newLeads: leads.filter((lead) => lead.status === 'new'),
      hotLeads: leads.filter((lead) => lead.temperature === 'hot'),
      dueToday: leads.filter((lead) => {
        if (!lead.nextFollowUpAt) return false;
        return new Date(lead.nextFollowUpAt).toDateString() === new Date().toDateString();
      }),
      overdue: leads.filter((lead) => {
        if (!lead.nextFollowUpAt) return false;
        return new Date(lead.nextFollowUpAt) < new Date();
      }),
      callsScheduled: leads.filter((lead) => lead.status === 'call_booked'),
      recentlyContacted: leads.filter((lead) => lead.status === 'contacted' || lead.status === 'qualified'),
    };

    return NextResponse.json(queue);
  } catch (error) {
    console.error('queue failed', error);
    return NextResponse.json({ error: 'Failed to load queue' }, { status: 500 });
  }
}
