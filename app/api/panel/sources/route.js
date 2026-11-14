import { NextResponse } from 'next/server';
import { getMongoDb } from '@/lib/mongodb';
import { requirePanelAuth } from '@/lib/panel-auth';

const QUALIFIED_STATUSES = new Set(['qualified', 'call_booked', 'call_done', 'proposal', 'pilot', 'won']);

export async function GET(request) {
  const auth = await requirePanelAuth(request);
  if (!auth.authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const db = await getMongoDb();
    const leads = await db.collection('leads').find({}).sort({ createdAt: -1 }).toArray();

    const sourceMap = {};
    const campaignMap = {};
    const mediumMap = {};
    const contentMap = {};
    const qualifiedCampaignMap = {};
    const hotCampaignMap = {};

    leads.forEach((lead) => {
      const source = lead.firstTouch?.utm_source || lead.firstTouch?.src || lead.attribution?.utm_source || 'direct';
      const campaign = lead.firstTouch?.utm_campaign || lead.attribution?.utm_campaign || 'Untagged';
      const medium = lead.firstTouch?.utm_medium || lead.attribution?.utm_medium || 'Untagged';
      const content = lead.firstTouch?.utm_content || lead.attribution?.utm_content || 'Untagged';

      sourceMap[source] = (sourceMap[source] || 0) + 1;
      campaignMap[campaign] = (campaignMap[campaign] || 0) + 1;
      mediumMap[medium] = (mediumMap[medium] || 0) + 1;
      contentMap[content] = (contentMap[content] || 0) + 1;

      const isQualified = QUALIFIED_STATUSES.has(lead.status) || lead.temperature === 'hot' || lead.temperature === 'warm';
      if (isQualified) {
        qualifiedCampaignMap[campaign] = (qualifiedCampaignMap[campaign] || 0) + 1;
      }

      if (lead.temperature === 'hot') {
        hotCampaignMap[campaign] = (hotCampaignMap[campaign] || 0) + 1;
      }
    });

    const toSortedArray = (map) =>
      Object.entries(map)
        .map(([label, value]) => ({ label, value }))
        .sort((a, b) => b.value - a.value);

    return NextResponse.json({
      bySource: toSortedArray(sourceMap),
      byCampaign: toSortedArray(campaignMap),
      byMedium: toSortedArray(mediumMap),
      byContent: toSortedArray(contentMap),
      qualifiedByCampaign: toSortedArray(qualifiedCampaignMap),
      hotByCampaign: toSortedArray(hotCampaignMap),
    });
  } catch (error) {
    console.error('sources failed', error);
    return NextResponse.json({ error: 'Failed to load source analytics' }, { status: 500 });
  }
}
