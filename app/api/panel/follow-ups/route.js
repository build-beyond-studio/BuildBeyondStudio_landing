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
    const leads = await db
      .collection('leads')
      .find({ nextFollowUpAt: { $ne: null, $exists: true } })
      .sort({ nextFollowUpAt: 1 })
      .toArray();

    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
    const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);

    const overdue = [];
    const dueToday = [];
    const upcoming = [];

    for (const lead of leads) {
      if (!lead.nextFollowUpAt) continue;
      const fDate = new Date(lead.nextFollowUpAt);
      if (Number.isNaN(fDate.getTime())) continue;

      if (fDate < startOfToday) {
        overdue.push(lead);
      } else if (fDate >= startOfToday && fDate <= endOfToday) {
        dueToday.push(lead);
      } else {
        upcoming.push(lead);
      }
    }

    return NextResponse.json({
      counts: {
        total: leads.length,
        overdue: overdue.length,
        dueToday: dueToday.length,
        upcoming: upcoming.length,
      },
      overdue,
      dueToday,
      upcoming,
    });
  } catch (error) {
    console.error('follow-ups failed', error);
    return NextResponse.json({ error: 'Failed to load follow-ups' }, { status: 500 });
  }
}

