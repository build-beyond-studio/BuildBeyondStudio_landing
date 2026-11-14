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
    const query = {
      $or: [
        { segment: 'talent' },
        { 'answers.role': { $exists: true, $ne: '' } },
        { 'firstTouch.landingVariant': 'talent' },
      ],
    };
    const leads = await db.collection('leads').find(query).sort({ createdAt: -1 }).toArray();
    return NextResponse.json({ items: leads });
  } catch (error) {
    console.error('talent failed', error);
    return NextResponse.json({ error: 'Failed to load talent leads' }, { status: 500 });
  }
}
