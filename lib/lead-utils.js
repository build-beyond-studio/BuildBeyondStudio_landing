export const BUSINESS_SERVICE_OPTIONS = ['Website', 'App', 'Social', 'Ads', 'Creatives'];

export const AGENCY_SERVICE_OPTIONS = [
  'Website',
  'Custom web app / portal',
  'Mobile app',
  'E-commerce store',
  'Maintenance & support',
  'Not sure',
];

export const CONFIG = {
  agencyMarginPerProject: 40000,
  agencyHoursPerProject: null,
  leadUpdateTTLMinutes: 30,
  businessGrowthBanner: 'Growth Partner',
  whatsappNumber: process.env.NEXT_PUBLIC_BBS_WHATSAPP_NUMBER || '919876543210',
  bookingUrl: process.env.BBS_CALENDAR_URL || 'https://calendly.com/',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://buildbeyondstudio.com',
};

export function sanitizeText(value, maxLength = 2000) {
  if (typeof value !== 'string') return '';
  return value.replace(/[\u0000-\u001F\u007F]+/g, ' ').trim().slice(0, maxLength);
}

export function safeParseJson(value, fallback) {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

export function generateLeadRef() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let ref = 'L-';
  for (let i = 0; i < 7; i += 1) {
    ref += chars[Math.floor(Math.random() * chars.length)];
  }
  return ref;
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function roundToNearest(value, nearest) {
  return Math.round(value / nearest) * nearest;
}

export function normalizePhoneNumber(input, defaultCountryCode = '+91') {
  if (typeof input !== 'string') return '';
  const digits = input.replace(/\D/g, '');
  const national = digits.startsWith('91') && digits.length === 12 ? digits.slice(2) : digits;
  if (!/^[6-9]\d{9}$/.test(national)) return '';
  return `${defaultCountryCode}${national}`;
}

export function getCurrentDevice() {
  if (typeof navigator === 'undefined') return 'unknown';
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  if (/Android/i.test(ua)) return 'android';
  if (/Windows/i.test(ua)) return 'desktop';
  return 'desktop';
}

export function parseAttribution(searchParams) {
  const params = searchParams instanceof URLSearchParams
    ? searchParams
    : new URLSearchParams(Object.entries(searchParams || {}).filter(([, value]) => value !== undefined).map(([key, value]) => [key, value]));
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_content: params.get('utm_content') || undefined,
    utm_term: params.get('utm_term') || undefined,
    fbclid: params.get('fbclid') || undefined,
    fbp: params.get('fbp') || undefined,
    fbc: params.get('fbc') || undefined,
    src: params.get('src') || undefined,
    cid: params.get('cid') || undefined,
    landingUrl: typeof window !== 'undefined' ? window.location.href : undefined,
    referrer: typeof document !== 'undefined' ? document.referrer || undefined : undefined,
    sessionId: typeof window !== 'undefined' ? (window.sessionStorage.getItem('bbs-lead-session-id') || '') : undefined,
    device: getCurrentDevice(),
    landingVariant: params.get('seg') || undefined,
  };
}

export function readStoredAttribution() {
  if (typeof window === 'undefined') return {};
  return safeParseJson(window.sessionStorage.getItem('bbs-attribution'), {});
}

export function persistAttribution(attribution) {
  if (typeof window === 'undefined') return;
  const existing = readStoredAttribution();
  const merged = { ...existing, ...attribution };
  window.sessionStorage.setItem('bbs-attribution', JSON.stringify(merged));
}

export function getSessionId() {
  if (typeof window === 'undefined') return 'server';
  let id = window.sessionStorage.getItem('bbs-lead-session-id');
  if (!id) {
    const randomBytes = new Uint8Array(16);
    window.crypto.getRandomValues(randomBytes);
    id = `bbs-${Array.from(randomBytes, (byte) => byte.toString(16).padStart(2, '0')).join('')}`;
    window.sessionStorage.setItem('bbs-lead-session-id', id);
  }
  return id;
}

export function isEnvironmentPlaceholder(value) {
  if (!value) return true;
  return /YOUR_|example|placeholder|xxxxx|undefined|\*\*\*\*/i.test(value) || value.includes('******');
}

export function getAgencyScore(answers) {
  const volume = answers.projectVolume;
  const volumeMap = {
    '1–2': 1,
    '3–5': 2,
    '6–10': 3,
    '10+': 4,
    'Not started yet': 0,
  };
  const score = volumeMap[volume || ''];
  const reasons = volume ? [`Volume: ${volume}`] : [];
  return { score: Math.min(score, 8), reasons };
}

export function getAgencyMargin(answers) {
  const volume = answers?.projectVolume;
  switch (volume) {
    case '1–2':
    case '1-2':
      return '₹60,000';
    case '3–5':
    case '3-5':
      return '₹1,00,000';
    case '6–10':
    case '6-10':
      return '₹1,50,000';
    case '10+':
      return '₹2,00,000+';
    case 'Not started yet':
      return '₹40,000';
    default:
      return '₹60,000';
  }
}

export function getBusinessOpportunity(answers) {
  const needs = Array.isArray(answers?.needs) ? answers.needs : [];
  if (needs.includes('Complete package')) {
    return '2L+ /Month';
  }
  const count = needs.length;
  if (count <= 1) {
    return '80k /Month';
  }
  if (count === 2) {
    return '1L+ /Month';
  }
  if (count === 3) {
    return '1.5L /Month';
  }
  if (count === 4) {
    return '1.8L /Month';
  }
  return '2L+ /Month';
}

export function getBusinessScore(answers) {
  let score = 0;
  const reasons = [];

  // 1. Business Name provided indicates established brand / verified business
  if (answers.businessName && answers.businessName.trim().length >= 2) {
    score += 1;
    reasons.push('Named business entity');
  }

  // 2. High-value industry sector qualification
  const highValueSectors = ['Clinic / Healthcare', 'Real estate', 'Manufacturing / B2B', 'Education / Coaching'];
  if (answers.businessType && highValueSectors.includes(answers.businessType)) {
    score += 2;
    reasons.push(`High-value industry: ${answers.businessType}`);
  } else if (answers.businessType && answers.businessType !== 'Other') {
    score += 1;
    reasons.push(`Industry: ${answers.businessType}`);
  }

  // 3. Project scope / Needs evaluation
  const needs = Array.isArray(answers.needs) ? answers.needs : [];
  if (needs.includes('Complete package')) {
    score += 3;
    reasons.push('Requested full-stack complete package');
  } else {
    if (needs.includes('Mobile app') || needs.includes('Website')) {
      score += 2;
      reasons.push('Custom software / Web/App development need');
    }
    if (needs.includes('Performance marketing / Ads') || needs.includes('Social media')) {
      score += 1;
      reasons.push('Growth marketing / Ads need');
    }
    if (needs.length >= 3) {
      score += 1;
      reasons.push(`Multi-service requirement (${needs.length} services)`);
    }
  }

  return { score: Math.min(score, 8), reasons };
}

export function getTemperatureFromScore(segment, score) {
  if (segment === 'agency' || segment === 'business') {
    if (score >= 5) return 'hot';
    if (score >= 3) return 'warm';
    return 'cold';
  }
  return null;
}

export function getLeadStatusFromTemperature(temp) {
  if (temp === 'hot') return 'new';
  if (temp === 'warm') return 'contacted';
  if (temp === 'cold') return 'cold';
  return 'new';
}

export function getLeadScore(segment, answers) {
  if (segment === 'agency') {
    return getAgencyScore({
      projectVolume: answers?.projectVolume,
    });
  }
  if (segment === 'business') {
    return getBusinessScore({
      businessType: answers?.businessType,
      needs: answers?.needs,
      businessName: answers?.businessName,
    });
  }
  return { score: null, reasons: [] };
}

export function getLeadWhastappLink(name, leadRef, number) {
  const target = (number || CONFIG.whatsappNumber || '919876543210').replace(/\D/g, '');
  const message = encodeURIComponent(`Hi BBS, I’m ${name}. Ref ${leadRef} number.`);
  return `https://wa.me/${target}?text=${message}`;
}

export function getLeadIntentCopy(segment) {
  if (segment === 'agency') return 'I Run An Agency';
  if (segment === 'business') return 'I Own A Business';
  if (segment === 'talent') return 'Looking For Work Or Collaboration';
  return 'Something Else';
}
