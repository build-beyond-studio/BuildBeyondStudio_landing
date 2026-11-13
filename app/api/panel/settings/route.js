import { NextResponse } from 'next/server';
import { getMongoDb } from '@/lib/mongodb';
import { requirePanelAuth } from '@/lib/panel-auth';

export async function GET(request) {
  const auth = await requirePanelAuth(request, ['admin']);
  if (!auth.authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const db = await getMongoDb();
    const settings = await db.collection('settings').findOne({ _id: 'panel_settings' }) || { _id: 'panel_settings', values: {} };
    return NextResponse.json({ values: settings.values || {} });
  } catch (error) {
    console.error('settings load failed', error);
    return NextResponse.json({ error: 'Failed to load settings' }, { status: 500 });
  }
}

export async function POST(request) {
  const auth = await requirePanelAuth(request, ['admin']);
  if (!auth.authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const db = await getMongoDb();
    const settings = db.collection('settings');

    await settings.updateOne(
      { _id: 'panel_settings' },
      { $set: { values: body, updatedAt: new Date() } },
      { upsert: true }
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('settings save failed', error);
    return NextResponse.json({ error: 'Failed to save settings' }, { status: 500 });
  }
}
