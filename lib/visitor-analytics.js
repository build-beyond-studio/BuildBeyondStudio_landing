import crypto from 'node:crypto';
import { getMongoDb } from './mongodb.js';

const KNOWN_BOT_PATTERNS = [
  /bot/i,
  /crawl/i,
  /spider/i,
  /slurp/i,
  /facebookexternalhit/i,
  /whatsapp/i,
  /lighthouse/i,
  /google-inspectiontool/i,
  /bytespider/i,
  /yandex/i,
  /bingbot/i,
  /headlesschrome/i,
  /petalbot/i,
  /semrush/i,
  /ahrefs/i,
  /mj12bot/i,
  /dotbot/i,
];

export function isBot(userAgent = '') {
  if (!userAgent || typeof userAgent !== 'string') return false;
  return KNOWN_BOT_PATTERNS.some((pattern) => pattern.test(userAgent));
}

export function sanitizePath(inputPath) {
  if (typeof inputPath !== 'string') return '/';
  let path = inputPath.trim().split('?')[0].split('#')[0];
  if (!path.startsWith('/')) path = '/' + path;
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
  return path.slice(0, 500);
}

export function isExcludedPath(path) {
  if (!path) return true;
  return (
    path.startsWith('/panel') ||
    path.startsWith('/api') ||
    path.startsWith('/_next') ||
    path.startsWith('/favicon') ||
    path.includes('.') && !path.endsWith('.html')
  );
}

export function generateEventId() {
  return 'evt_' + crypto.randomUUID().replace(/-/g, '');
}

export function getClientIp(request) {
  const forwarded = request?.headers?.get?.('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  const realIp = request?.headers?.get?.('x-real-ip');
  if (realIp) return realIp.trim();
  return request?.ip || '127.0.0.1';
}

export function createVisitorFingerprint(ip, userAgent) {
  const salt = process.env.JWT_SECRET || 'bbs-salt-v1';
  return 'v_' + crypto.createHash('sha256').update(`${ip}-${userAgent}-${salt}`).digest('hex').slice(0, 16);
}

export function parseUserAgent(ua = '') {
  if (!ua || typeof ua !== 'string') {
    return { device: 'desktop', browser: 'Other', os: 'Other' };
  }

  let device = 'desktop';
  if (/mobile/i.test(ua) && !/ipad|tablet/i.test(ua)) device = 'mobile';
  else if (/tablet|ipad/i.test(ua)) device = 'tablet';

  let browser = 'Other';
  if (/edg/i.test(ua)) browser = 'Edge';
  else if (/chrome|crios/i.test(ua)) browser = 'Chrome';
  else if (/firefox|fxios/i.test(ua)) browser = 'Firefox';
  else if (/safari/i.test(ua) && !/chrome/i.test(ua)) browser = 'Safari';
  else if (/opera|opr/i.test(ua)) browser = 'Opera';

  let os = 'Other';
  if (/windows/i.test(ua)) os = 'Windows';
  else if (/macintosh|mac os x/i.test(ua)) os = 'macOS';
  else if (/android/i.test(ua)) os = 'Android';
  else if (/iphone|ipad|ipod/i.test(ua)) os = 'iOS';
  else if (/linux/i.test(ua)) os = 'Linux';

  return { device, browser, os };
}

export function classifyTrafficSource(referrer = '', utmSource = '', utmMedium = '') {
  if (utmSource || utmMedium) {
    const medium = (utmMedium || '').toLowerCase();
    const source = (utmSource || '').toLowerCase();

    if (medium === 'cpc' || medium === 'paid' || medium === 'ads' || /meta|facebook|adwords|google-ads/i.test(source)) {
      if (/facebook|instagram|linkedin|twitter|tiktok/i.test(source)) return 'Paid Social';
      return 'Paid Search';
    }
    if (medium === 'social' || /facebook|instagram|linkedin|twitter|t.co|youtube/i.test(source)) {
      return 'Social';
    }
    if (medium === 'email' || /newsletter|mail/i.test(source)) {
      return 'Email';
    }
    return 'Campaign';
  }

  if (!referrer || referrer === 'direct') {
    return 'Direct';
  }

  try {
    const host = new URL(referrer).hostname.toLowerCase();
    if (host.includes('google') || host.includes('bing') || host.includes('yahoo') || host.includes('duckduckgo')) {
      return 'Organic Search';
    }
    if (host.includes('facebook') || host.includes('instagram') || host.includes('linkedin') || host.includes('twitter') || host.includes('t.co') || host.includes('youtube')) {
      return 'Social';
    }
    if (host.includes('buildbeyondstudio.com') || host.includes('localhost')) {
      return 'Internal';
    }
    return 'Referral';
  } catch {
    return 'Referral';
  }
}

export async function ensureVisitorAnalyticsIndexes() {
  if (globalThis._mongoVisitorIndexesReady) return true;

  try {
    const db = await getMongoDb();

    // 1. website_pageviews
    const pageviews = db.collection('website_pageviews');
    await Promise.all([
      pageviews.createIndex({ timestamp: -1 }),
      pageviews.createIndex({ path: 1, timestamp: -1 }),
      pageviews.createIndex({ sessionId: 1 }),
      pageviews.createIndex({ visitorId: 1 }),
      pageviews.createIndex({ eventId: 1 }, { unique: true, sparse: true }),
    ]);

    // 2. website_interactions
    const interactions = db.collection('website_interactions');
    await Promise.all([
      interactions.createIndex({ timestamp: -1 }),
      interactions.createIndex({ category: 1, target: 1 }),
      interactions.createIndex({ path: 1 }),
      interactions.createIndex({ sessionId: 1 }),
      interactions.createIndex({ eventId: 1 }, { unique: true, sparse: true }),
    ]);

    // 3. website_sessions
    const sessions = db.collection('website_sessions');
    await Promise.all([
      sessions.createIndex({ sessionId: 1 }, { unique: true }),
      sessions.createIndex({ startedAt: -1 }),
      sessions.createIndex({ lastActivityAt: -1 }),
      sessions.createIndex({ visitorId: 1 }),
      sessions.createIndex({ source: 1 }),
    ]);

    // 4. website_live_visitors (TTL index: documents expire after 5 minutes of inactivity)
    const liveVisitors = db.collection('website_live_visitors');
    await Promise.all([
      liveVisitors.createIndex({ sessionId: 1 }, { unique: true }),
      liveVisitors.createIndex({ lastPing: 1 }, { expireAfterSeconds: 300, name: 'ttl_live_visitors' }),
    ]);

    globalThis._mongoVisitorIndexesReady = true;
    return true;
  } catch (error) {
    console.error('Failed to create visitor analytics indexes', error);
    return false;
  }
}

