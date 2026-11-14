import { NextResponse } from 'next/server';
import { getMongoDb } from '@/lib/mongodb';
import { requirePanelAuth } from '@/lib/panel-auth';

function sanitizeCsv(str) {
  if (typeof str !== 'string') return String(str ?? '');
  let cleaned = str.replace(/"/g, '""');
  // Prevent CSV injection (=, +, -, @)
  if (/^[=+\-@]/.test(cleaned)) {
    cleaned = "'" + cleaned;
  }
  return `"${cleaned}"`;
}

export const dynamic = 'force-dynamic';

export async function GET(request) {
  const auth = await requirePanelAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'pages';
    const db = await getMongoDb();

    let csvContent = '';
    let filename = `visitor-analytics-${type}-${new Date().toISOString().slice(0, 10)}.csv`;

    if (type === 'pages') {
      const pageviews = await db.collection('website_pageviews').aggregate([
        {
          $group: {
            _id: '$path',
            pageTitle: { $last: '$pageTitle' },
            views: { $sum: 1 },
            visitors: { $addToSet: '$visitorId' },
            sessions: { $addToSet: '$sessionId' },
          },
        },
        { $sort: { views: -1 } },
        { $limit: 1000 },
      ]).toArray();

      csvContent = 'Page URL,Page Title,Total Views,Unique Visitors,Sessions\n';
      pageviews.forEach((p) => {
        csvContent += `${sanitizeCsv(p._id)},${sanitizeCsv(p.pageTitle || p._id)},${p.views},${p.visitors.length},${p.sessions.length}\n`;
      });
    } else if (type === 'interactions') {
      const interactions = await db.collection('website_interactions').aggregate([
        {
          $group: {
            _id: { category: '$category', target: '$target' },
            clicks: { $sum: 1 },
            visitors: { $addToSet: '$visitorId' },
            lastPath: { $last: '$path' },
            lastHref: { $last: '$href' },
          },
        },
        { $sort: { clicks: -1 } },
        { $limit: 1000 },
      ]).toArray();

      csvContent = 'Category,Item / Target,Total Clicks,Unique Visitors,Path,Destination\n';
      interactions.forEach((i) => {
        csvContent += `${sanitizeCsv(i._id.category)},${sanitizeCsv(i._id.target)},${i.clicks},${i.visitors.length},${sanitizeCsv(i.lastPath)},${sanitizeCsv(i.lastHref)}\n`;
      });
    } else {
      const sessions = await db.collection('website_sessions')
        .find({})
        .sort({ startedAt: -1 })
        .limit(1000)
        .toArray();

      csvContent = 'Session ID,Visitor ID,Entry Page,Exit Page,Pageviews,Duration (s),Source,Device,Browser,Timestamp\n';
      sessions.forEach((s) => {
        csvContent += `${sanitizeCsv(s.sessionId)},${sanitizeCsv(s.visitorId)},${sanitizeCsv(s.entryPage)},${sanitizeCsv(s.exitPage)},${s.pageViews || 1},${s.duration || 0},${sanitizeCsv(s.source || 'Direct')},${sanitizeCsv(s.device || 'desktop')},${sanitizeCsv(s.browser || 'Other')},${sanitizeCsv(s.startedAt ? new Date(s.startedAt).toISOString() : '')}\n`;
      });
    }

    return new Response(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error('Export error', error);
    return NextResponse.json({ error: 'Failed to export CSV' }, { status: 500 });
  }
}

