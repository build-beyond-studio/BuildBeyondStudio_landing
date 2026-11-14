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
    const page = Number(searchParams.get('page') || '1');
    const limit = Number(searchParams.get('limit') || '20');
    const search = (searchParams.get('search') || '').trim();
    const segment = searchParams.get('segment');
    const temperature = searchParams.get('temperature');
    const status = searchParams.get('status');
    const campaign = searchParams.get('campaign');
    const from = searchParams.get('from');
    const to = searchParams.get('to');
    const sortField = searchParams.get('sortField') || 'createdAt';
    const sortDir = searchParams.get('sortDir') || 'desc';

    const db = await getMongoDb();
    const leads = db.collection('leads');

    const query = {};
    if (segment && segment !== 'all') query.segment = segment;
    if (temperature && temperature !== 'all') query.temperature = temperature;
    if (status && status !== 'all') query.status = status;
    if (campaign && campaign !== 'all') {
      query.$or = [
        { 'firstTouch.utm_campaign': campaign },
        { 'firstTouch.src': campaign },
        { 'firstTouch.utm_source': campaign },
      ];
    }
    if (from || to) {
      query.createdAt = {};
      if (from) query.createdAt.$gte = new Date(from);
      if (to) query.createdAt.$lte = new Date(new Date(to).setHours(23, 59, 59, 999));
    }
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { leadRef: { $regex: search, $options: 'i' } },
        { whatsapp: { $regex: search, $options: 'i' } },
      ];
    }

    if (searchParams.get('export') === 'csv') {
      const allMatching = await leads
        .find(query)
        .sort({ [sortField]: sortDir === 'asc' ? 1 : -1 })
        .toArray();

      const escapeCsvCell = (val) => {
        if (val === null || val === undefined) return '""';
        const str = String(val);
        return `"${str.replace(/"/g, '""')}"`;
      };

      const headers = [
        'Lead Ref',
        'Name',
        'Business Name',
        'Phone',
        'Email',
        'Segment',
        'Status',
        'Temperature',
        'Score',
        'Owner',
        'Created Date',
        'Next Follow-up',
        'UTM Source',
        'UTM Medium',
        'UTM Campaign',
        'UTM Content',
        'Device'
      ];

      const csvRows = [headers.join(',')];

      for (const lead of allMatching) {
        const row = [
          escapeCsvCell(lead.leadRef || ''),
          escapeCsvCell(lead.name || ''),
          escapeCsvCell(lead.businessName || lead.answers?.businessName || ''),
          escapeCsvCell(lead.whatsapp || ''),
          escapeCsvCell(lead.email || ''),
          escapeCsvCell(lead.segment || ''),
          escapeCsvCell(lead.status || ''),
          escapeCsvCell(lead.temperature || ''),
          escapeCsvCell(lead.score !== undefined ? lead.score : ''),
          escapeCsvCell(lead.owner || 'Unassigned'),
          escapeCsvCell(lead.createdAt ? new Date(lead.createdAt).toISOString() : ''),
          escapeCsvCell(lead.nextFollowUpAt ? new Date(lead.nextFollowUpAt).toISOString() : ''),
          escapeCsvCell(lead.firstTouch?.utm_source || lead.firstTouch?.src || lead.attribution?.utm_source || ''),
          escapeCsvCell(lead.firstTouch?.utm_medium || lead.attribution?.utm_medium || ''),
          escapeCsvCell(lead.firstTouch?.utm_campaign || lead.attribution?.utm_campaign || ''),
          escapeCsvCell(lead.firstTouch?.utm_content || lead.attribution?.utm_content || ''),
          escapeCsvCell(lead.firstTouch?.device || '')
        ];
        csvRows.push(row.join(','));
      }

      const csvContent = csvRows.join('\r\n');
      return new NextResponse(csvContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="bbs-leads-${new Date().toISOString().slice(0, 10)}.csv"`,
        },
      });
    }

    const total = await leads.countDocuments(query);
    const items = await leads
      .find(query)
      .sort({ [sortField]: sortDir === 'asc' ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      items,
      page,
      limit,
      total,
      totalPages: Math.max(1, Math.ceil(total / limit || 1)),
    });
  } catch (error) {
    console.error('lead listing failed', error);
    return NextResponse.json({ error: 'Failed to load leads' }, { status: 500 });
  }
}
