'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const VISITOR_STORAGE_KEY = 'bbs_v_id';
const SESSION_STORAGE_KEY = 'bbs_s_id';
const LAST_ACTIVE_KEY = 'bbs_last_active';
const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes

type AnalyticsPayload = {
  type: 'pageview' | 'interaction' | 'heartbeat';
  path: string;
  visitorId: string;
  sessionId: string;
  [key: string]: string | number | undefined;
};

function getOrCreateVisitorId() {
  if (typeof window === 'undefined') return '';
  try {
    let vid = localStorage.getItem(VISITOR_STORAGE_KEY);
    if (!vid || vid.length < 10) {
      vid = 'v_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
      localStorage.setItem(VISITOR_STORAGE_KEY, vid);
    }
    return vid;
  } catch {
    return 'v_temp_' + Math.random().toString(36).slice(2);
  }
}

function getOrCreateSessionId(visitorId: string): string {
  if (typeof window === 'undefined') return '';
  const now = Date.now();
  try {
    const lastActive = parseInt(sessionStorage.getItem(LAST_ACTIVE_KEY) || '0', 10);
    let sid = sessionStorage.getItem(SESSION_STORAGE_KEY);

    if (!sid || (lastActive && now - lastActive > SESSION_TIMEOUT_MS)) {
      sid = 's_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
      sessionStorage.setItem(SESSION_STORAGE_KEY, sid);
    }
    sessionStorage.setItem(LAST_ACTIVE_KEY, now.toString());
    return sid;
  } catch {
    return 's_' + visitorId.slice(2);
  }
}

function sendAnalytics(payload: AnalyticsPayload): void {
  if (typeof window === 'undefined') return;
  const endpoint = '/api/analytics/collect';
  const data = JSON.stringify(payload);

  if (navigator.sendBeacon) {
    try {
      const blob = new Blob([data], { type: 'application/json' });
      const ok = navigator.sendBeacon(endpoint, blob);
      if (ok) return;
    } catch {
      // Fallback to fetch
    }
  }

  fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
    keepalive: true,
  }).catch(() => {});
}

export default function VisitorAnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedPath = useRef('');
  const activeTimeSec = useRef(0);
  const scrollMilestones = useRef(new Set());

  // 1. Automatic SPA & Initial Pageview Tracker
  useEffect(() => {
    if (!pathname || pathname.startsWith('/panel') || pathname.startsWith('/api')) {
      return;
    }

    const currentFullPath = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    if (lastTrackedPath.current === currentFullPath) {
      return;
    }
    lastTrackedPath.current = currentFullPath;
    scrollMilestones.current.clear();

    const vid = getOrCreateVisitorId();
    const sid = getOrCreateSessionId(vid);

    // Read attribution params if present
    const utmSource = searchParams?.get('utm_source') || '';
    const utmMedium = searchParams?.get('utm_medium') || '';
    const utmCampaign = searchParams?.get('utm_campaign') || '';
    const utmContent = searchParams?.get('utm_content') || '';
    const utmTerm = searchParams?.get('utm_term') || '';

    // Defer slightly so document.title updates to route metadata
    const timer = setTimeout(() => {
      sendAnalytics({
        type: 'pageview',
        path: pathname,
        pageTitle: document.title || 'Build Beyond Studio',
        referrer: document.referrer || '',
        visitorId: vid,
        sessionId: sid,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        utm_content: utmContent,
        utm_term: utmTerm,
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  // 2. Global Delegated Click & Interaction Listener
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleClick = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      const targetEl = e.target.closest<HTMLElement>('[data-track-category], a, button');
      if (!targetEl) return;

      const vid = getOrCreateVisitorId();
      const sid = getOrCreateSessionId(vid);

      const explicitCategory = targetEl.getAttribute('data-track-category');
      const explicitTarget = targetEl.getAttribute('data-track-target');
      const href = targetEl.getAttribute('href') || '';
      const text = (targetEl.innerText || targetEl.getAttribute('aria-label') || '').slice(0, 100).trim();

      let category = explicitCategory;
      let target = explicitTarget || text;

      if (!category) {
        // Auto-detect high value interactions
        if (href.startsWith('https://wa.me') || href.includes('whatsapp.com')) {
          category = 'whatsapp_click';
          target = 'WhatsApp Direct';
        } else if (href.startsWith('mailto:')) {
          category = 'email_click';
          target = href.replace('mailto:', '');
        } else if (href.startsWith('tel:')) {
          category = 'phone_click';
          target = href.replace('tel:', '');
        } else if (href.startsWith('/services/') || href === '/services') {
          category = 'service_click';
          target = text || href.split('/').pop() || href;
        } else if (href.startsWith('/case-studies/')) {
          category = 'portfolio_click';
          target = text || href.split('/').pop() || href;
        } else if (href === '/contact' || href.includes('/leads')) {
          category = 'cta_click';
          target = text || 'Get in Touch';
        }
      }

      if (category) {
        sendAnalytics({
          type: 'interaction',
          category,
          target: target || 'Unknown Item',
          elementText: text,
          href,
          path: window.location.pathname,
          visitorId: vid,
          sessionId: sid,
        });
      }
    };

    document.addEventListener('click', handleClick, { passive: true, capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, []);

  // 3. Scroll Depth & Engagement Tracker
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let scrollThrottle = false;
    const handleScroll = () => {
      if (scrollThrottle) return;
      scrollThrottle = true;
      setTimeout(() => { scrollThrottle = false; }, 300);

      const scrollTop = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScrollable = docHeight - winHeight;

      if (totalScrollable <= 0) return;
      const percent = Math.round((scrollTop / totalScrollable) * 100);

      const milestones = [25, 50, 75, 90];
      for (const m of milestones) {
        if (percent >= m && !scrollMilestones.current.has(m)) {
          scrollMilestones.current.add(m);
          const vid = getOrCreateVisitorId();
          const sid = getOrCreateSessionId(vid);

          sendAnalytics({
            type: 'interaction',
            category: 'scroll_depth',
            target: `${m}%`,
            path: window.location.pathname,
            visitorId: vid,
            sessionId: sid,
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // 4. Lightweight Heartbeat & Active Time
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const interval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        activeTimeSec.current += 15;
        const vid = getOrCreateVisitorId();
        const sid = getOrCreateSessionId(vid);

        sendAnalytics({
          type: 'heartbeat',
          path: window.location.pathname,
          durationSec: activeTimeSec.current,
          visitorId: vid,
          sessionId: sid,
        });
      }
    }, 15000); // 15-second heartbeat ping

    return () => clearInterval(interval);
  }, []);

  return null;
}
