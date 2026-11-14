import { NextResponse } from 'next/server';
import { getMongoDb } from '@/lib/mongodb';
import { requirePanelAuth } from '@/lib/panel-auth';

function getSafeDate(value) {
  const d = new Date(value || Date.now());
  return Number.isNaN(d.getTime()) ? new Date() : d;
}

export async function GET(request) {
  const auth = await requirePanelAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const db = await getMongoDb();
    const leads = await db.collection('leads').find({}).sort({ createdAt: -1 }).toArray();

    const totalLeads = leads.length;
    const newLeads = leads.filter((lead) => lead.status === 'new').length;
    const hotLeads = leads.filter((lead) => lead.temperature === 'hot').length;
    const warmLeads = leads.filter((lead) => lead.temperature === 'warm').length;
    const coldLeads = leads.filter((lead) => lead.temperature === 'cold').length;
    const qualifiedLeads = leads.filter((lead) => ['qualified', 'call_booked', 'call_done', 'proposal', 'pilot', 'won'].includes(lead.status)).length;
    const callsBooked = leads.filter((lead) => ['call_booked', 'call_done'].includes(lead.status)).length;
    const wonLeads = leads.filter((lead) => lead.status === 'won').length;

    const days = Array.from({ length: 7 }, (_, index) => {
      const d = new Date();
      d.setDate(d.getDate() - (6 - index));
      return d.toISOString().slice(0, 10);
    });

    const leadsOverTime = days.map((date) => ({
      date,
      count: leads.filter((lead) => {
        const createdDate = getSafeDate(lead.createdAt).toISOString().slice(0, 10);
        return createdDate === date;
      }).length,
    }));

    const segmentMap = {};
    const temperatureMap = {};
    const sourceMap = {};

    leads.forEach((lead) => {
      const segment = lead.segment || 'other';
      segmentMap[segment] = (segmentMap[segment] || 0) + 1;

      const temp = lead.temperature || 'cold';
      temperatureMap[temp] = (temperatureMap[temp] || 0) + 1;

      const source = lead.firstTouch?.utm_source || lead.firstTouch?.src || lead.attribution?.utm_source || 'direct';
      sourceMap[source] = (sourceMap[source] || 0) + 1;
    });

    const recentLeads = leads.slice(0, 8).map((lead) => ({
      leadRef: lead.leadRef,
      name: lead.name,
      segment: lead.segment,
      email: lead.email,
      whatsapp: lead.whatsapp,
      temperature: lead.temperature,
      score: lead.score || 0,
      status: lead.status,
      createdAt: lead.createdAt,
      source: lead.firstTouch?.utm_source || lead.firstTouch?.src || 'direct',
    }));

    const today = new Date();
    const followUpSummary = leads.filter((lead) => {
      if (!lead.nextFollowUpAt) return false;
      const nextDate = new Date(lead.nextFollowUpAt);
      return nextDate.toDateString() === today.toDateString();
    }).map((lead) => ({
      leadRef: lead.leadRef,
      name: lead.name,
      status: lead.status,
      nextFollowUpAt: lead.nextFollowUpAt,
    }));

    return NextResponse.json({
      metrics: {
        totalLeads,
        newLeads,
        hotLeads,
        warmLeads,
        coldLeads,
        qualifiedLeads,
        callsBooked,
        wonLeads,
      },
      charts: {
        overTime: leadsOverTime,
        bySegment: Object.entries(segmentMap).map(([label, value]) => ({ label, value })),
        byTemperature: Object.entries(temperatureMap).map(([label, value]) => ({ label, value })),
        sourceOverview: Object.entries(sourceMap).map(([label, value]) => ({ label, value })),
      },
      recentLeads,
      followUpSummary,
    });
  } catch (error) {
    console.error('overview failed', error);
    return NextResponse.json({ error: 'Failed to load overview' }, { status: 500 });
  }
}
