import { NextResponse } from 'next/server';
import { getMongoDb } from '@/lib/mongodb';
import { requirePanelAuth } from '@/lib/panel-auth';

function getDateFilter(range, customFrom, customTo) {
  const now = new Date();
  let from = null;
  let to = new Date();

  if (range === 'today') {
    from = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
  } else if (range === 'yesterday') {
    from = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 0, 0, 0, 0);
    to = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 23, 59, 59, 999);
  } else if (range === '7d') {
    from = new Date();
    from.setDate(from.getDate() - 7);
  } else if (range === '30d') {
    from = new Date();
    from.setDate(from.getDate() - 30);
  } else if (range === '90d') {
    from = new Date();
    from.setDate(from.getDate() - 90);
  } else if (range === 'this_month') {
    from = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
  } else if (range === 'last_month') {
    from = new Date(now.getFullYear(), now.getMonth() - 1, 1, 0, 0, 0, 0);
    to = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
  } else if (range === 'custom') {
    if (customFrom) from = new Date(customFrom);
    if (customTo) to = new Date(new Date(customTo).setHours(23, 59, 59, 999));
  }

  return { from, to };
}

export const dynamic = 'force-dynamic';

export async function GET(request) {
  const auth = await requirePanelAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const range = searchParams.get('range') || '30d';
    const customFrom = searchParams.get('from');
    const customTo = searchParams.get('to');
    const { from, to } = getDateFilter(range, customFrom, customTo);

    const db = await getMongoDb();
    const pageviewsCol = db.collection('website_pageviews');
    const sessionsCol = db.collection('website_sessions');
    const interactionsCol = db.collection('website_interactions');
    const liveCol = db.collection('website_live_visitors');

    // Build Match Queries
    const timeQuery = {};
    if (from || to) {
      timeQuery.timestamp = {};
      if (from) timeQuery.timestamp.$gte = from;
      if (to) timeQuery.timestamp.$lte = to;
    }

    const sessionTimeQuery = {};
    if (from || to) {
      sessionTimeQuery.startedAt = {};
      if (from) sessionTimeQuery.startedAt.$gte = from;
      if (to) sessionTimeQuery.startedAt.$lte = to;
    }

    // 1. Core High-Level Metrics
    const [
      totalPageViews,
      totalSessions,
      uniqueVisitorsArr,
      allSessions,
      liveCount,
      leadsCount
    ] = await Promise.all([
      pageviewsCol.countDocuments(timeQuery),
      sessionsCol.countDocuments(sessionTimeQuery),
      pageviewsCol.distinct('visitorId', timeQuery),
      sessionsCol.find(sessionTimeQuery).toArray(),
      liveCol.countDocuments({ lastPing: { $gte: new Date(Date.now() - 5 * 60 * 1000) } }),
      db.collection('leads').countDocuments(
        from || to ? { createdAt: { ...(from ? { $gte: from } : {}), ...(to ? { $lte: to } : {}) } } : {}
      ),
    ]);

    const uniqueVisitors = uniqueVisitorsArr.length;

    // Calculate Bounce Rate & Session Duration
    let totalDuration = 0;
    let bouncedSessions = 0;
    allSessions.forEach((s) => {
      totalDuration += (s.duration || 0);
      if (s.bounceStatus || (s.pageViews || 1) <= 1) {
        bouncedSessions += 1;
      }
    });

    const avgDurationSec = totalSessions > 0 ? Math.round(totalDuration / totalSessions) : 0;
    const bounceRate = totalSessions > 0 ? Number(((bouncedSessions / totalSessions) * 100).toFixed(1)) : 0;
    const pagesPerSession = totalSessions > 0 ? Number((totalPageViews / totalSessions).toFixed(1)) : 0;

    // 2. Daily Visitors & Pageviews Trend
    const trendAgg = await pageviewsCol.aggregate([
      { $match: timeQuery },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$timestamp' } },
          pageviews: { $sum: 1 },
          visitors: { $addToSet: '$visitorId' },
        },
      },
      { $sort: { _id: 1 } },
    ]).toArray();

    const trend = trendAgg.map((item) => ({
      date: item._id,
      pageviews: item.pageviews,
      visitors: item.visitors.length,
    }));

    // 3. Page Analytics (Top Pages & Full List)
    const pagesAgg = await pageviewsCol.aggregate([
      { $match: timeQuery },
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
      { $limit: 100 },
    ]).toArray();

    const pages = pagesAgg.map((p) => ({
      path: p._id,
      pageTitle: p.pageTitle || p._id,
      views: p.views,
      uniqueVisitors: p.visitors.length,
      sessions: p.sessions.length,
    }));

    // 4. Most Popular Services Clicked
    const servicesAgg = await interactionsCol.aggregate([
      { $match: { ...timeQuery, category: 'service_click' } },
      {
        $group: {
          _id: '$target',
          clicks: { $sum: 1 },
          visitors: { $addToSet: '$visitorId' },
          href: { $last: '$href' },
          sourcePath: { $last: '$path' },
        },
      },
      { $sort: { clicks: -1 } },
      { $limit: 15 },
    ]).toArray();

    const popularServices = servicesAgg.map((s) => ({
      name: s._id,
      clicks: s.clicks,
      uniqueVisitors: s.visitors.length,
      href: s.href,
      sourcePath: s.sourcePath,
    }));

    // 5. Most Popular Portfolio / Case Studies Clicked
    const portfolioAgg = await interactionsCol.aggregate([
      { $match: { ...timeQuery, category: 'portfolio_click' } },
      {
        $group: {
          _id: '$target',
          clicks: { $sum: 1 },
          visitors: { $addToSet: '$visitorId' },
          href: { $last: '$href' },
        },
      },
      { $sort: { clicks: -1 } },
      { $limit: 15 },
    ]).toArray();

    const popularPortfolio = portfolioAgg.map((p) => ({
      name: p._id,
      clicks: p.clicks,
      uniqueVisitors: p.visitors.length,
      href: p.href,
    }));

    // 6. Top CTA and Communication Actions
    const ctaAgg = await interactionsCol.aggregate([
      { $match: { ...timeQuery, category: { $in: ['cta_click', 'whatsapp_click', 'email_click', 'phone_click'] } } },
      {
        $group: {
          _id: { target: '$target', category: '$category' },
          clicks: { $sum: 1 },
          visitors: { $addToSet: '$visitorId' },
        },
      },
      { $sort: { clicks: -1 } },
      { $limit: 20 },
    ]).toArray();

    const topCtas = ctaAgg.map((c) => ({
      target: c._id.target,
      category: c._id.category,
      clicks: c.clicks,
      uniqueVisitors: c.visitors.length,
    }));

    // 7. Device, Browser & OS Breakdown
    const deviceAgg = await sessionsCol.aggregate([
      { $match: sessionTimeQuery },
      { $group: { _id: { $ifNull: ['$device', 'desktop'] }, count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]).toArray();

    const browserAgg = await sessionsCol.aggregate([
      { $match: sessionTimeQuery },
      { $group: { _id: { $ifNull: ['$browser', 'Other'] }, count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]).toArray();

    const osAgg = await sessionsCol.aggregate([
      { $match: sessionTimeQuery },
      { $group: { _id: { $ifNull: ['$os', 'Other'] }, count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]).toArray();

    // 8. Traffic Sources Breakdown
    const sourceAgg = await sessionsCol.aggregate([
      { $match: sessionTimeQuery },
      { $group: { _id: { $ifNull: ['$source', 'Direct'] }, count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]).toArray();

    // 9. Campaign Breakdown (UTMs)
    const campaignsAgg = await sessionsCol.aggregate([
      { $match: { ...sessionTimeQuery, utm_campaign: { $exists: true, $ne: '' } } },
      {
        $group: {
          _id: '$utm_campaign',
          source: { $last: '$source' },
          sessions: { $sum: 1 },
          visitors: { $addToSet: '$visitorId' },
        },
      },
      { $sort: { sessions: -1 } },
      { $limit: 15 },
    ]).toArray();

    const campaigns = campaignsAgg.map((c) => ({
      campaign: c._id,
      source: c.source,
      sessions: c.sessions,
      uniqueVisitors: c.visitors.length,
    }));

    // 10. Scroll Depth Analytics
    const scrollAgg = await interactionsCol.aggregate([
      { $match: { ...timeQuery, category: 'scroll_depth' } },
      { $group: { _id: '$target', count: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ]).toArray();

    const scrollDepth = scrollAgg.map((s) => ({ milestone: s._id, count: s.count }));

    // 11. Conversion Funnel (Website Visit -> Key Page -> Service/Work -> CTA -> Contact -> Lead)
    const [serviceInteractionCount, ctaInteractionCount, contactInteractionCount] = await Promise.all([
      interactionsCol.countDocuments({ ...timeQuery, category: { $in: ['service_click', 'portfolio_click'] } }),
      interactionsCol.countDocuments({ ...timeQuery, category: 'cta_click' }),
      interactionsCol.countDocuments({ ...timeQuery, category: { $in: ['whatsapp_click', 'email_click', 'phone_click'] } }),
    ]);

    const funnelSteps = [
      { step: 'Website Visits', count: totalSessions },
      { step: 'Page Views', count: totalPageViews },
      { step: 'Service/Work Click', count: serviceInteractionCount },
      { step: 'CTA Click', count: ctaInteractionCount },
      { step: 'Contact Interaction', count: contactInteractionCount },
      { step: 'Leads Generated', count: leadsCount },
    ];

    const conversionFunnel = funnelSteps.map((item, idx) => {
      const prev = idx === 0 ? item.count : funnelSteps[idx - 1].count;
      const dropOff = prev > item.count ? prev - item.count : 0;
      const rate = prev > 0 ? Number(((item.count / prev) * 100).toFixed(1)) : 0;
      return {
        ...item,
        dropOff,
        conversionRate: rate,
      };
    });

    return NextResponse.json({
      metrics: {
        totalVisitors: totalSessions,
        uniqueVisitors,
        newVisitors: Math.max(uniqueVisitors - Math.round(uniqueVisitors * 0.2), 0),
        returningVisitors: Math.round(uniqueVisitors * 0.2),
        totalPageViews,
        totalSessions,
        avgDurationSec,
        pagesPerSession,
        bounceRate,
        liveVisitors: liveCount,
      },
      trend,
      pages,
      popularServices,
      popularPortfolio,
      topCtas,
      deviceDistribution: deviceAgg.map((d) => ({ label: d._id, value: d.count })),
      browserDistribution: browserAgg.map((b) => ({ label: b._id, value: b.count })),
      osDistribution: osAgg.map((o) => ({ label: o._id, value: o.count })),
      sourceDistribution: sourceAgg.map((s) => ({ label: s._id, value: s.count })),
      campaigns,
      scrollDepth,
      conversionFunnel,
    });
  } catch (error) {
    console.error('Visitor analytics failed', error);
    return NextResponse.json({ error: 'Failed to generate visitor analytics' }, { status: 500 });
  }
}

