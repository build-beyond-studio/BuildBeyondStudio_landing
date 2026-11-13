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
    const events = await db.collection('lead_events').find({}).sort({ at: -1 }).toArray();

    const funnel = ['PageView', 'SegmentSelected', 'CalcStarted', 'CalcCompleted', 'Lead', 'QualifiedLead', 'Contact'];
    const counts = {};
    funnel.forEach((event) => { counts[event] = 0; });

    events.forEach((event) => {
      const type = event.type || event.step;
      if (counts[type] !== undefined) {
        counts[type] += 1;
      }
    });

    const data = funnel.map((step) => ({
      label: step,
      count: counts[step] || 0,
      percent: counts['PageView'] ? Number(((counts[step] || 0) / counts['PageView']) * 100).toFixed(1) : 0,
    }));

    return NextResponse.json({ data });
  } catch (error) {
    console.error('funnel failed', error);
    return NextResponse.json({ error: 'Failed to load funnel analytics' }, { status: 500 });
  }
}
