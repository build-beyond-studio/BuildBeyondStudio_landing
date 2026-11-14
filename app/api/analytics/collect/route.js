import { NextResponse } from 'next/server';
import { getMongoDb } from '@/lib/mongodb';
import {
  isBot,
  sanitizePath,
  isExcludedPath,
  getClientIp,
  createVisitorFingerprint,
  parseUserAgent,
  classifyTrafficSource,
  ensureVisitorAnalyticsIndexes,
} from '@/lib/visitor-analytics';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const ua = request.headers.get('user-agent') || '';
    if (isBot(ua)) {
      return NextResponse.json({ ok: true, ignored: 'bot' }, { status: 200 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
    }

    const { type, events = [] } = body || {};
    const eventsList = Array.isArray(events) && events.length > 0 ? events : body ? [body] : [];

    if (eventsList.length === 0) {
      return NextResponse.json({ ok: true, count: 0 }, { status: 200 });
    }

    const ip = getClientIp(request);
    const serverVisitorFingerprint = createVisitorFingerprint(ip, ua);
    const { device, browser, os } = parseUserAgent(ua);
    const now = new Date();

    // Ensure database and indexes are ready without blocking
    ensureVisitorAnalyticsIndexes().catch(() => {});
    const db = await getMongoDb();

    const pageviewsCol = db.collection('website_pageviews');
    const interactionsCol = db.collection('website_interactions');
    const sessionsCol = db.collection('website_sessions');
    const liveCol = db.collection('website_live_visitors');

    for (const evt of eventsList.slice(0, 20)) {
      const rawPath = evt.path || '/';
      const cleanPath = sanitizePath(rawPath);

      if (isExcludedPath(cleanPath)) {
        continue;
      }

      const visitorId = (evt.visitorId && typeof evt.visitorId === 'string' && evt.visitorId.length <= 64)
        ? evt.visitorId
        : serverVisitorFingerprint;

      const sessionId = (evt.sessionId && typeof evt.sessionId === 'string' && evt.sessionId.length <= 64)
        ? evt.sessionId
        : 's_' + serverVisitorFingerprint;

      const eventId = (evt.eventId && typeof evt.eventId === 'string')
        ? evt.eventId.slice(0, 64)
        : 'evt_' + Math.random().toString(36).slice(2);

      const evtType = evt.type || type || 'pageview';

      if (evtType === 'pageview') {
        const referrer = typeof evt.referrer === 'string' ? evt.referrer.slice(0, 1000) : '';
        const utmSource = typeof evt.utm_source === 'string' ? evt.utm_source.slice(0, 100) : '';
        const utmMedium = typeof evt.utm_medium === 'string' ? evt.utm_medium.slice(0, 100) : '';
        const utmCampaign = typeof evt.utm_campaign === 'string' ? evt.utm_campaign.slice(0, 100) : '';
        const utmContent = typeof evt.utm_content === 'string' ? evt.utm_content.slice(0, 100) : '';
        const utmTerm = typeof evt.utm_term === 'string' ? evt.utm_term.slice(0, 100) : '';
        const pageTitle = typeof evt.pageTitle === 'string' ? evt.pageTitle.slice(0, 250) : '';
        const source = classifyTrafficSource(referrer, utmSource, utmMedium);

        // 1. Insert pageview document
        await pageviewsCol.updateOne(
          { eventId },
          {
            $setOnInsert: {
              eventId,
              visitorId,
              sessionId,
              path: cleanPath,
              pageTitle,
              referrer,
              source,
              utm_source: utmSource || undefined,
              utm_medium: utmMedium || undefined,
              utm_campaign: utmCampaign || undefined,
              utm_content: utmContent || undefined,
              utm_term: utmTerm || undefined,
              device: evt.device || device,
              browser: evt.browser || browser,
              os: evt.os || os,
              timestamp: now,
            },
          },
          { upsert: true }
        );

        // 2. Upsert session record
        await sessionsCol.updateOne(
          { sessionId },
          {
            $setOnInsert: {
              sessionId,
              visitorId,
              entryPage: cleanPath,
              startedAt: now,
              source,
              utm_source: utmSource || undefined,
              utm_medium: utmMedium || undefined,
              utm_campaign: utmCampaign || undefined,
              device: evt.device || device,
              browser: evt.browser || browser,
              os: evt.os || os,
              bounceStatus: true,
            },
            $set: {
              exitPage: cleanPath,
              lastActivityAt: now,
            },
            $inc: {
              pageViews: 1,
            },
          },
          { upsert: true }
        );

        // 3. Update live visitor ping
        await liveCol.updateOne(
          { sessionId },
          {
            $set: {
              sessionId,
              visitorId,
              currentPath: cleanPath,
              lastPing: now,
              device: evt.device || device,
              browser: evt.browser || browser,
            },
          },
          { upsert: true }
        );
      } else if (evtType === 'interaction' || evtType === 'cta_click' || evtType === 'service_click' || evtType === 'portfolio_click' || evtType === 'scroll') {
        const category = typeof evt.category === 'string' ? evt.category.slice(0, 80) : evtType;
        const target = typeof evt.target === 'string' ? evt.target.slice(0, 200) : '';
        const elementText = typeof evt.elementText === 'string' ? evt.elementText.slice(0, 200) : '';
        const href = typeof evt.href === 'string' ? evt.href.slice(0, 500) : '';

        // Record interaction
        await interactionsCol.updateOne(
          { eventId },
          {
            $setOnInsert: {
              eventId,
              visitorId,
              sessionId,
              path: cleanPath,
              category,
              target,
              elementText,
              href,
              metadata: typeof evt.metadata === 'object' && evt.metadata !== null ? evt.metadata : undefined,
              timestamp: now,
            },
          },
          { upsert: true }
        );

        // Keep session alive
        await sessionsCol.updateOne(
          { sessionId },
          {
            $set: {
              lastActivityAt: now,
              bounceStatus: false,
            },
            $setOnInsert: {
              sessionId,
              visitorId,
              entryPage: cleanPath,
              startedAt: now,
              source: 'Direct',
              pageViews: 1,
            },
          },
          { upsert: true }
        );

        // Update live visitor
        await liveCol.updateOne(
          { sessionId },
          {
            $set: {
              sessionId,
              visitorId,
              currentPath: cleanPath,
              lastPing: now,
            },
          },
          { upsert: true }
        );
      } else if (evtType === 'heartbeat') {
        const durationSec = typeof evt.durationSec === 'number' ? Math.min(Math.max(evt.durationSec, 0), 7200) : 0;
        await sessionsCol.updateOne(
          { sessionId },
          {
            $set: {
              lastActivityAt: now,
              duration: durationSec,
              ...(durationSec > 15 ? { bounceStatus: false } : {}),
            },
          }
        );

        await liveCol.updateOne(
          { sessionId },
          {
            $set: {
              currentPath: cleanPath,
              lastPing: now,
            },
          }
        );
      }
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Analytics collect error', error);
    return NextResponse.json({ ok: false, error: 'Internal collection error' }, { status: 500 });
  }
}

