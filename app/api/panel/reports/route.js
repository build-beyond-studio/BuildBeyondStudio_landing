import { NextResponse } from 'next/server';
import { getMongoDb } from '@/lib/mongodb';
import { requirePanelAuth } from '@/lib/panel-auth';

function getDateFilter(range, customFrom, customTo) {
  const now = new Date();
  let from = null;
  let to = new Date();

  if (range === 'today') {
    from = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
  } else if (range === '7d') {
    from = new Date();
    from.setDate(from.getDate() - 7);
  } else if (range === '30d') {
    from = new Date();
    from.setDate(from.getDate() - 30);
  } else if (range === 'this_month') {
    from = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
  } else if (range === 'custom') {
    if (customFrom) from = new Date(customFrom);
    if (customTo) to = new Date(new Date(customTo).setHours(23, 59, 59, 999));
  }

  return { from, to };
}

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
    const leadsCollection = db.collection('leads');
    const eventsCollection = db.collection('lead_events');

    const leadQuery = {};
    if (from || to) {
      leadQuery.createdAt = {};
      if (from) leadQuery.createdAt.$gte = from;
      if (to) leadQuery.createdAt.$lte = to;
    }

    const leads = await leadsCollection.find(leadQuery).sort({ createdAt: -1 }).toArray();

    // 1. High-level counts
    const totalLeads = leads.length;
    const hotLeads = leads.filter((l) => l.temperature === 'hot').length;
    const qualifiedLeads = leads.filter((l) =>
      ['qualified', 'call_booked', 'call_done', 'proposal', 'pilot', 'won'].includes(l.status) ||
      l.temperature === 'hot' || l.temperature === 'warm'
    ).length;
    const callsBooked = leads.filter((l) => ['call_booked', 'call_done'].includes(l.status)).length;
    const wonLeads = leads.filter((l) => l.status === 'won').length;
    const lostLeads = leads.filter((l) => l.status === 'lost').length;

    // Conversion rates
    const leadToQualifiedRate = totalLeads ? Number(((qualifiedLeads / totalLeads) * 100).toFixed(1)) : 0;
    const qualifiedToCallRate = qualifiedLeads ? Number(((callsBooked / qualifiedLeads) * 100).toFixed(1)) : 0;
    const callToWonRate = callsBooked ? Number(((wonLeads / callsBooked) * 100).toFixed(1)) : 0;
    const overallWinRate = totalLeads ? Number(((wonLeads / totalLeads) * 100).toFixed(1)) : 0;

    // 2. Segment performance
    const segments = ['agency', 'business', 'talent', 'other'];
    const segmentPerformance = segments.map((seg) => {
      const segLeads = leads.filter((l) => (l.segment || 'other') === seg);
      const sTotal = segLeads.length;
      const sQualified = segLeads.filter((l) =>
        ['qualified', 'call_booked', 'call_done', 'proposal', 'pilot', 'won'].includes(l.status) ||
        l.temperature === 'hot' || l.temperature === 'warm'
      ).length;
      const sWon = segLeads.filter((l) => l.status === 'won').length;
      return {
        segment: seg,
        total: sTotal,
        qualified: sQualified,
        won: sWon,
        conversionRate: sTotal ? Number(((sQualified / sTotal) * 100).toFixed(1)) : 0,
      };
    });

    // 3. Status breakdown
    const statusMap = {};
    leads.forEach((l) => {
      const st = l.status || 'new';
      statusMap[st] = (statusMap[st] || 0) + 1;
    });

    // 4. Source breakdown
    const sourceMap = {};
    leads.forEach((l) => {
      const src = l.firstTouch?.utm_source || l.firstTouch?.src || l.attribution?.utm_source || 'direct';
      sourceMap[src] = (sourceMap[src] || 0) + 1;
    });

    // 5. Daily trend chart
    const days = 14;
    const trendMap = {};
    for (let i = days - 1; i >= 0; i -= 1) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      trendMap[key] = 0;
    }
    leads.forEach((l) => {
      if (l.createdAt) {
        const key = new Date(l.createdAt).toISOString().slice(0, 10);
        if (trendMap[key] !== undefined) {
          trendMap[key] += 1;
        }
      }
    });

    // 6. Segment-specific funnel drop-off analysis from lead_events
    const eventQuery = {};
    if (from || to) {
      eventQuery.at = {};
      if (from) eventQuery.at.$gte = from;
      if (to) eventQuery.at.$lte = to;
    }
    const events = await eventsCollection.find(eventQuery).toArray();

    const standardSteps = ['PageView', 'CalcCompleted', 'Lead', 'QualifiedLead', 'Contact'];

    const getFunnelForSegment = (seg) => {
      const segEvents = events.filter((e) => !seg || e.segment === seg);
      const counts = {};
      standardSteps.forEach((s) => { counts[s] = 0; });

      segEvents.forEach((e) => {
        const type = e.type || e.step;
        if (counts[type] !== undefined) {
          counts[type] += 1;
        }
      });

      return standardSteps.map((step, idx) => {
        const count = counts[step] || 0;
        const prevCount = idx > 0 ? (counts[standardSteps[idx - 1]] || 0) : count;
        const dropOffCount = prevCount > count ? prevCount - count : 0;
        const dropOffPercent = prevCount > 0 ? Number(((dropOffCount / prevCount) * 100).toFixed(1)) : 0;

        return {
          step,
          count,
          dropOffCount,
          dropOffPercent,
        };
      });
    };

    const funnels = {
      overall: getFunnelForSegment(null),
      agency: getFunnelForSegment('agency'),
      business: getFunnelForSegment('business'),
      talent: getFunnelForSegment('talent'),
      other: getFunnelForSegment('other'),
    };

    // 7. Questionnaire Answer Distribution Analytics
    const QUESTIONNAIRE_DEFINITIONS = {
      agency: [
        {
          id: 'projectVolume',
          type: 'single',
          title: 'How many client projects do you handle per month?',
          options: ['1–2', '3–5', '6–10', '10+', 'Not started yet'],
        },
        {
          id: 'currentBuilder',
          type: 'single',
          title: 'Who builds the projects currently?',
          options: ['In-house', 'Freelancers', 'Another agency', 'Nobody yet'],
        },
      ],
      business: [
        {
          id: 'businessType',
          type: 'single',
          title: 'What type of business do you run?',
          options: [
            'Retail / E-commerce',
            'Restaurant / Café',
            'Clinic / Healthcare',
            'Education / Coaching',
            'Real estate',
            'Local services',
            'Manufacturing / B2B',
            'Other',
          ],
        },
        {
          id: 'needs',
          type: 'multi',
          title: 'What help are you looking for?',
          options: [
            'Website',
            'Mobile app',
            'Social media',
            'Performance marketing / Ads',
            'Creatives & content',
            'Complete package',
            'Not sure',
          ],
        },
      ],
      talent: [
        {
          id: 'role',
          type: 'single',
          title: 'Role',
          options: [
            'Video editor',
            'Graphic designer',
            'Developer',
            'Social media / Content',
            'Sales / Calling',
            'Other',
          ],
        },
      ],
      other: [
        {
          id: 'otherDetails',
          type: 'text',
          title: 'Tell us what you need',
          options: [],
        },
      ],
    };

    // Deduplication & Aggregation Pipeline:
    // Build a map of latest answers per (sessionId + questionId)
    // 1. Incorporate event stream answers (latest event per session + question)
    const sessionAnswerMap = new Map(); // key: `${segment}_${sessionId}_${questionId}` -> { answer, at, isSubmitted: false }

    // Sort events ascending so later events overwrite earlier ones
    const sortedAnswerEvents = events
      .filter((e) => e.type === 'step_completed' && e.meta?.questionId)
      .sort((a, b) => new Date(a.at || 0) - new Date(b.at || 0));

    sortedAnswerEvents.forEach((evt) => {
      const qId = evt.meta.questionId;
      const seg = evt.segment || 'other';
      const sId = evt.sessionId;
      const key = `${seg}_${sId}_${qId}`;
      sessionAnswerMap.set(key, {
        segment: seg,
        sessionId: sId,
        questionId: qId,
        selectedAnswer: evt.meta.selectedAnswer ?? (evt.meta.hasAnswer ? true : null),
        at: evt.at,
        isSubmitted: false,
      });
    });

    // 2. Incorporate submitted leads: Lead submissions take absolute precedence over intermediate events
    leads.forEach((lead) => {
      const seg = lead.segment || 'other';
      const sId = lead.firstTouch?.sessionId || lead.sessionId || lead.leadRef;
      const answers = lead.answers || {};

      Object.entries(answers).forEach(([qId, val]) => {
        if (['name', 'whatsapp', 'email', 'consent', 'website_hp', 'businessName'].includes(qId)) {
          return;
        }
        const key = `${seg}_${sId}_${qId}`;
        sessionAnswerMap.set(key, {
          segment: seg,
          sessionId: sId,
          questionId: qId,
          selectedAnswer: val,
          at: lead.createdAt,
          isSubmitted: true,
        });
      });
    });

    // 3. Compute question-wise distribution per segment
    const questionnaireAnalytics = {};

    Object.entries(QUESTIONNAIRE_DEFINITIONS).forEach(([segKey, questions]) => {
      questionnaireAnalytics[segKey] = questions.map((q) => {
        // Collect all unique user entries for this segment & question
        const responsesForQuestion = [];
        for (const [key, item] of sessionAnswerMap.entries()) {
          if (item.segment === segKey && item.questionId === q.id && item.selectedAnswer !== null && item.selectedAnswer !== undefined) {
            responsesForQuestion.push(item);
          }
        }

        const totalRespondents = responsesForQuestion.length;

        if (q.type === 'text') {
          return {
            id: q.id,
            title: q.title,
            type: q.type,
            totalRespondents,
            options: [],
          };
        }

        const optionCounts = {};
        q.options.forEach((opt) => {
          optionCounts[opt] = 0;
        });

        responsesForQuestion.forEach((resp) => {
          const val = resp.selectedAnswer;
          if (Array.isArray(val)) {
            val.forEach((chosen) => {
              if (optionCounts[chosen] !== undefined) {
                optionCounts[chosen] += 1;
              }
            });
          } else if (typeof val === 'string') {
            // Handle possible character variance like '1-2' vs '1–2'
            const matched = q.options.find(
              (opt) => opt === val || opt.replace(/–/g, '-') === val.replace(/–/g, '-')
            );
            if (matched && optionCounts[matched] !== undefined) {
              optionCounts[matched] += 1;
            } else if (optionCounts[val] !== undefined) {
              optionCounts[val] += 1;
            }
          }
        });

        const optionsStats = q.options.map((opt) => {
          const count = optionCounts[opt] || 0;
          const percentage = totalRespondents > 0
            ? Number(((count / totalRespondents) * 100).toFixed(1))
            : 0;
          return {
            option: opt,
            count,
            percentage,
          };
        });

        return {
          id: q.id,
          title: q.title,
          type: q.type,
          totalRespondents,
          options: optionsStats,
        };
      });
    });

    return NextResponse.json({
      metrics: {
        totalLeads,
        qualifiedLeads,
        hotLeads,
        callsBooked,
        wonLeads,
        lostLeads,
        leadToQualifiedRate,
        qualifiedToCallRate,
        callToWonRate,
        overallWinRate,
      },
      segmentPerformance,
      statusDistribution: Object.entries(statusMap).map(([label, value]) => ({ label, value })),
      sourceDistribution: Object.entries(sourceMap).map(([label, value]) => ({ label, value })),
      trend: Object.entries(trendMap).map(([date, count]) => ({ date, count })),
      funnels,
      questionnaireAnalytics,
    });
  } catch (error) {
    console.error('reports failed', error);
    return NextResponse.json({ error: 'Failed to generate reports' }, { status: 500 });
  }
}

