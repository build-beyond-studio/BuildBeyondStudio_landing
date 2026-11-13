'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AlertCircle, ArrowLeft, ArrowRight, Building2, Check, CheckCircle2, Loader2, Lock, Mail, Phone, ShieldCheck, Sparkles, User } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { getAgencyMargin, getSessionId, isEnvironmentPlaceholder, normalizePhoneNumber, parseAttribution, persistAttribution, readStoredAttribution, sanitizeText } from '@/lib/lead-utils';

export type LeadSegment = 'agency' | 'business' | 'talent' | 'other';

type QuestionStep = {
  id: string;
  type: 'single' | 'multi' | 'text';
  title: string;
  subtitle?: string;
  options: string[];
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    __bbsMetaInitialized?: boolean;
  }
}

function trackFunnelEvent(type: string, segment?: LeadSegment | null, step?: string, meta: Record<string, string | number | boolean> = {}) {
  if (typeof window === 'undefined') return;
  const sessionId = window.sessionStorage.getItem('bbs-lead-session-id');
  if (!sessionId) return;
  const eventId = window.crypto.randomUUID();
  if (type === 'PageView') {
    window.fbq?.('track', 'PageView', {}, { eventID: eventId });
  } else if (['SegmentSelected', 'CalcStarted', 'CalcCompleted'].includes(type)) {
    window.fbq?.('trackCustom', type, {}, { eventID: eventId });
  }
  fetch('/api/leads/event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type,
      segment: segment || undefined,
      step,
      sessionId,
      eventId,
      variant: readStoredAttribution().landingVariant || segment || undefined,
      meta,
    }),
    keepalive: true,
  }).catch((error) => console.error('Lead funnel event failed', { type, errorName: error?.name || 'unknown' }));
}

function trackBrowserEvent(name: string, eventId: string, custom = false) {
  if (typeof window !== 'undefined') {
    window.fbq?.(custom ? 'trackCustom' : 'track', name, {}, { eventID: eventId });
  }
}

const SEGMENTS: Record<LeadSegment, { title: string; subtitle: string }> = {
  agency: { title: 'I Run An Agency', subtitle: 'I want a white-label dev partner.' },
  business: { title: 'I Own A Business', subtitle: 'I want to grow online.' },
  talent: { title: 'Looking For Work Or Collaboration', subtitle: 'Editor, designer, developer, freelancer, etc.' },
  other: { title: 'Something Else', subtitle: 'Tell us what you need.' },
};

const AGENCY_FLOW: QuestionStep[] = [
  { id: 'projectVolume', type: 'single', title: 'How many client projects do you handle per month?', options: ['1–2', '3–5', '6–10', '10+', 'Not started yet'] },
  { id: 'currentBuilder', type: 'single', title: 'Who builds the projects currently?', options: ['In-house', 'Freelancers', 'Another agency', 'Nobody yet'] },
];

const REMOVED_AGENCY_ANSWERS = new Set(['agencyNeeds', 'avgPrice', 'startTimeline']);

const REMOVED_BUSINESS_ANSWERS = new Set(['enquiries', 'customerValue', 'currentAssets', 'startTimeline', 'budget']);

const BUSINESS_FLOW: QuestionStep[] = [
  { id: 'businessType', type: 'single', title: 'What type of business do you run?', options: ['Retail / E-commerce', 'Restaurant / Café', 'Clinic / Healthcare', 'Education / Coaching', 'Real estate', 'Local services', 'Manufacturing / B2B', 'Other'] },
  { id: 'needs', type: 'multi', title: 'What help are you looking for?', options: ['Website', 'Mobile app', 'Social media', 'Performance marketing / Ads', 'Creatives & content', 'Complete package', 'Not sure'] },
];

const TALENT_FLOW: QuestionStep[] = [
  { id: 'role', type: 'single', title: 'Role', options: ['Video editor', 'Graphic designer', 'Developer', 'Social media / Content', 'Sales / Calling', 'Other'] },
];

const OTHER_FLOW: QuestionStep[] = [
  { id: 'otherDetails', type: 'text', title: 'Tell us what you need', subtitle: 'A short description helps us direct your enquiry.', options: [] },
];

const STORAGE_KEY = 'bbs-leads-progress-v1';

function getFlowForSegment(segment: LeadSegment | null): QuestionStep[] {
  if (segment === 'agency') return AGENCY_FLOW;
  if (segment === 'business') return BUSINESS_FLOW;
  if (segment === 'talent') return TALENT_FLOW;
  if (segment === 'other') return OTHER_FLOW;
  return [];
}

const cn = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(' ');

export default function LeadFunnel({ defaultSegment }: { defaultSegment?: LeadSegment | null }) {
  const router = useRouter();
  const params = useSearchParams();
  const prefersReducedMotion = useReducedMotion();
  const [segment, setSegment] = useState<LeadSegment | null>(defaultSegment ?? null);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState(1);

  useEffect(() => {
    setIsHydrated(true);
    const stored = typeof window !== 'undefined' ? window.sessionStorage.getItem(STORAGE_KEY) : null;
    let savedProgress: { segment?: LeadSegment; stepIndex?: number; answers?: Record<string, any> } | null = null;
    if (stored) {
      try {
        savedProgress = JSON.parse(stored);
      } catch {
        window.sessionStorage.removeItem(STORAGE_KEY);
      }
    }

    if (defaultSegment) {
      setSegment(defaultSegment);
      if (savedProgress?.segment === defaultSegment) {
        const flowLength = getFlowForSegment(defaultSegment).length;
        setStepIndex(typeof savedProgress.stepIndex === 'number' ? Math.min(savedProgress.stepIndex, flowLength) : 0);
        const removedAnswers = defaultSegment === 'agency'
          ? REMOVED_AGENCY_ANSWERS
          : defaultSegment === 'business'
            ? REMOVED_BUSINESS_ANSWERS
            : null;
        const cleanedAnswers = removedAnswers
          ? Object.fromEntries(Object.entries(savedProgress.answers || {}).filter(([key]) => !removedAnswers.has(key)))
          : savedProgress.answers || {};
        setAnswers(cleanedAnswers);
        if (defaultSegment === 'business' && Object.keys(cleanedAnswers).length !== Object.keys(savedProgress.answers || {}).length) {
          window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
            ...savedProgress,
            answers: cleanedAnswers,
          }));
        }
      } else {
        setStepIndex(0);
        setAnswers({});
      }
    } else {
      setSegment(null);
      setStepIndex(0);
    }

    const segParam = params?.get('seg');
    if (!defaultSegment && (segParam === 'agency' || segParam === 'business' || segParam === 'talent' || segParam === 'other')) {
      setSegment(null);
    }
  }, [defaultSegment, params]);

  useEffect(() => {
    if (!isHydrated || typeof window === 'undefined') return;
    if (segment) window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ segment, stepIndex, answers }));
  }, [segment, stepIndex, answers, isHydrated]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const attribution = parseAttribution(new URLSearchParams(window.location.search));
    const stored = readStoredAttribution();
    const currentAttribution = Object.fromEntries(Object.entries(attribution).filter(([, value]) => value !== undefined));
    const merged = { ...stored, ...currentAttribution, landingVariant: segment || stored?.landingVariant || attribution.landingVariant };
    if (!stored?.sessionId || !stored?.landingUrl) {
      persistAttribution(merged);
    }
    if (!window.sessionStorage.getItem('bbs-lead-session-id')) {
      window.sessionStorage.setItem('bbs-lead-session-id', getSessionId());
    }
  }, [segment]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const measurement = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    const clarity = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    if (!isEnvironmentPlaceholder(measurement)) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurement}`;
      document.head.appendChild(script);
      const gtag = document.createElement('script');
      gtag.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${measurement}');`;
      document.head.appendChild(gtag);
    }
    if (!isEnvironmentPlaceholder(clarity)) {
      const clarityScript = document.createElement('script');
      clarityScript.innerHTML = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, 'clarity', 'script', '${clarity}');`;
      document.head.appendChild(clarityScript);
    }
    if (!isEnvironmentPlaceholder(pixelId) && !window.__bbsMetaInitialized) {
      const pixelScript = document.createElement('script');
      pixelScript.innerHTML = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');`;
      document.head.appendChild(pixelScript);
      window.fbq?.('init', pixelId);
      window.__bbsMetaInitialized = true;
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    trackFunnelEvent('PageView', segment, undefined, { route: window.location.pathname });
  }, [isHydrated, segment]);

  const flow = useMemo(() => getFlowForSegment(segment), [segment]);
  const currentStep = flow[stepIndex] || null;
  const isSelectionScreen = !segment;
  const isFinalScreen = segment && stepIndex >= flow.length;

  useEffect(() => {
    if (!isHydrated || !segment) return;
    if (isFinalScreen) {
      trackFunnelEvent('CalcCompleted', segment, 'contact_details');
      return;
    }
    if (currentStep) trackFunnelEvent('step_viewed', segment, currentStep.id);
  }, [isHydrated, segment, currentStep?.id, isFinalScreen]);

  const handleSegmentSelect = (nextSegment: LeadSegment) => {
    setTransitionDirection(1);
    setError('');
    if (typeof window !== 'undefined') {
      const currentAttribution = parseAttribution(new URLSearchParams(window.location.search));
      const attribution = {
        ...readStoredAttribution(),
        ...Object.fromEntries(Object.entries(currentAttribution).filter(([, value]) => value !== undefined)),
      };
      persistAttribution({ ...attribution, landingVariant: nextSegment });
      const storedProgress = window.sessionStorage.getItem(STORAGE_KEY);
      let existingProgress = null;
      try {
        existingProgress = storedProgress ? JSON.parse(storedProgress) : null;
      } catch {
        existingProgress = null;
      }
      if (existingProgress?.segment !== nextSegment) {
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
          segment: nextSegment,
          stepIndex: 0,
          answers: {},
        }));
      }
      trackFunnelEvent('SegmentSelected', nextSegment, 'segment_selection');
      trackFunnelEvent('CalcStarted', nextSegment, 'questionnaire_started');

      const query = window.location.search;
      router.push(`/leads/${nextSegment}${query}`);
      return;
    }

    router.push(`/leads/${nextSegment}`);
  };

  const handleBack = () => {
    if (!segment) {
      router.push('/');
      return;
    }
    if (stepIndex === 0) {
      if (defaultSegment) {
        const query = typeof window !== 'undefined' ? window.location.search : '';
        router.push(`/leads${query}`);
        return;
      }
      setTransitionDirection(-1);
      setSegment(null);
      setStepIndex(0);
      return;
    }
    setTransitionDirection(-1);
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleOptionSelect = (option: string) => {
    if (!segment || !currentStep) return;
    const nextAnswers = { ...answers };
    if (currentStep.type === 'single') {
      setTransitionDirection(1);
      nextAnswers[currentStep.id] = option;
      setAnswers(nextAnswers);
      trackFunnelEvent('step_completed', segment, currentStep.id);
      setTimeout(() => setStepIndex((prev) => Math.min(prev + 1, flow.length)), 80);
      return;
    }

    const currentSelection = Array.isArray(nextAnswers[currentStep.id]) ? nextAnswers[currentStep.id] : [];
    let nextSelection = currentSelection.includes(option)
      ? currentSelection.filter((item: string) => item !== option)
      : [...currentSelection, option];
    nextAnswers[currentStep.id] = nextSelection;
    setAnswers(nextAnswers);
  };

  const handleMultiContinue = () => {
    if (!segment || !currentStep) return;
    const selected = Array.isArray(answers[currentStep.id]) ? answers[currentStep.id] : [];
    if (selected.length === 0) {
      setError('Please choose at least one option to continue.');
      return;
    }
    setError('');
    setTransitionDirection(1);
    trackFunnelEvent('step_completed', segment, currentStep.id);
    setStepIndex((prev) => Math.min(prev + 1, flow.length));
  };

  const handleTextContinue = () => {
    if (!segment || !currentStep) return;
    const value = sanitizeText(answers[currentStep.id] || '', 1200);
    if (value.length < 3) {
      setError('Please add a little more detail to continue.');
      return;
    }
    setError('');
    trackFunnelEvent('step_completed', segment, currentStep.id);
    setTransitionDirection(1);
    setStepIndex((prev) => Math.min(prev + 1, flow.length));
  };

  const submitLead = async () => {
    if (!segment) return;
    const trimmedName = sanitizeText(answers.name || '', 60);
    const businessName = sanitizeText(answers.businessName || '', 120);
    const whatsapp = sanitizeText(answers.whatsapp || '', 30);
    const email = sanitizeText(answers.email || '', 160).toLowerCase();
    const consent = Boolean(answers.consent);
    if (trimmedName.length < 2 || trimmedName.length > 60) {
      setError('Please enter a name between 2 and 60 characters.');
      return;
    }
    if (['agency', 'business'].includes(segment) && businessName.length < 2) {
      setError('Please enter your business name.');
      return;
    }
    if (whatsapp && !normalizePhoneNumber(whatsapp, '+91')) {
      setError('Please add a valid 10-digit Indian WhatsApp number.');
      return;
    }
    if (['agency', 'business'].includes(segment) && !whatsapp) {
      setError('WhatsApp is required for this enquiry.');
      return;
    }
    if (['talent', 'other'].includes(segment) && !whatsapp && !email) {
      setError('Please add a WhatsApp number or email so we can contact you.');
      return;
    }
    if (['agency', 'business'].includes(segment) && !consent) {
      setError('Consent is required before submitting.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const firstTouch = readStoredAttribution();
      const currentAttribution = parseAttribution(new URLSearchParams(window.location.search));
      const lastTouch = {
        ...firstTouch,
        ...Object.fromEntries(Object.entries(currentAttribution).filter(([, value]) => value !== undefined)),
        landingVariant: firstTouch.landingVariant || currentAttribution.landingVariant || segment,
      };
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          segment,
          name: trimmedName,
          ...(['agency', 'business'].includes(segment) ? { businessName } : {}),
          whatsapp,
          email,
          consent,
          answers: segment === 'agency'
            ? Object.fromEntries(Object.entries(answers).filter(([key]) => !REMOVED_AGENCY_ANSWERS.has(key)))
            : segment === 'business'
              ? Object.fromEntries(Object.entries(answers).filter(([key]) => !REMOVED_BUSINESS_ANSWERS.has(key)))
              : answers,
          website_hp: answers.website_hp || '',
          sessionId: window.sessionStorage.getItem('bbs-lead-session-id') || undefined,
          eventId: `lead-${window.crypto.randomUUID()}`,
          attribution: { ...lastTouch, firstTouch, lastTouch },
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'Submission failed');
      }
      const ref = data.leadRef || 'L-UNKNOWN';
      window.sessionStorage.setItem('bbs-last-lead-ref', ref);
      window.sessionStorage.setItem('bbs-last-lead-name', trimmedName);
      if (data.updateToken) window.sessionStorage.setItem('bbs-last-lead-update-token', data.updateToken);
      if (data.eventIds?.lead && ['agency', 'business'].includes(segment)) {
        trackBrowserEvent('Lead', data.eventIds.lead);
        if (data.eventIds.qualified) trackBrowserEvent('QualifiedLead', data.eventIds.qualified, true);
      }
      router.push(`/leads/thanks?ref=${encodeURIComponent(ref)}&segment=${encodeURIComponent(segment)}`);
    } catch (submitError: any) {
      setError(submitError?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const finalStep = (
    <div className="relative overflow-hidden rounded-[28px] border border-[#d8c49d]/70 bg-gradient-to-b from-white/95 via-white/90 to-[#fdfbf7]/90 p-6 shadow-[0_24px_70px_-12px_rgba(42,33,18,0.12),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-2xl sm:p-9 md:p-10 transition-all">
      {/* Decorative subtle ambient glow in header corner */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br from-[#f8ecd4]/50 to-transparent blur-2xl" />

      <div className="relative">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e8d5b0]/90 bg-gradient-to-r from-[#fffbf2] to-[#fffdf7] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#956408] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
          <Sparkles className="h-3 w-3 text-[#c8860a]" />
          {segment === 'agency' ? 'Agency Partnership' : segment === 'business' ? 'Business Growth' : 'Contact Details'}
        </span>
        <h2 className="mt-3.5 text-2xl font-bold tracking-tight text-[#1f1e1a] sm:text-[1.85rem]">
          {['agency', 'business'].includes(segment || '') ? "Let's Build Your Digital Infrastructure" : "Where can we reach you?"}
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-[#716d63]">
          {['agency', 'business'].includes(segment || '')
            ? "Share your details below and our team will get in touch to discuss next steps."
            : "Share your contact details and our team will follow up about your enquiry."}
        </p>
      </div>

      {segment === 'agency' && answers.projectVolume ? (
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-[#d8c49d]/70 bg-gradient-to-br from-[#fffdf8] via-[#faf4e8] to-[#f5ebd7]/60 p-4 sm:p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_8px_rgba(42,33,18,0.04)]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#956408]">Your Estimated Margin / Month</p>
              <p className="text-xs text-[#756b5b] mt-0.5">Based on your project volume</p>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-extrabold tracking-tight text-[#241c10]">
                ₹60,000
              </span>
              <span className="text-xs font-semibold text-[#756b5b]">/month</span>
            </div>
          </div>
        </div>
      ) : null}

      {segment === 'business' ? (
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-[#d8c49d]/70 bg-gradient-to-br from-[#fffdf8] via-[#fbf6ed] to-[#f5ebd7]/50 p-4 sm:p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_8px_rgba(42,33,18,0.04)]">
          <p className="text-sm font-medium leading-6 text-[#453e34] sm:text-base">
            You&apos;re Leaving <span className="font-bold text-[#1f1e1a] bg-[#faedd2] px-2 py-0.5 rounded-md border border-[#e2cf9f]">80k /Month</span> Money On The Table
          </p>
          <p className="mt-1 text-xs font-medium tracking-wide text-[#756b5b]">By staying offline and without digital infrastructure.</p>
        </div>
      ) : null}

      <div className="mt-7 space-y-4 sm:space-y-5">
        {/* Full Name Field */}
        <div className="space-y-1.5">
          <label htmlFor="lead-name" className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#635c50]">
            <span>Your name{['agency', 'business'].includes(segment || '') ? <span className="text-[#a06a00] font-bold"> *</span> : ''}</span>
          </label>
          <div className="group relative flex items-center rounded-xl border border-[#dcd4c6] bg-[#faf8f5]/90 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200 focus-within:border-[#c8860a] focus-within:bg-white focus-within:shadow-[0_4px_18px_rgba(200,134,10,0.12)] focus-within:ring-4 focus-within:ring-[#c8860a]/10 hover:border-[#c9bead] hover:bg-white">
            <div className="pointer-events-none pl-3.5 pr-2.5 text-[#9a9182] transition-colors group-focus-within:text-[#c8860a]">
              <User className="h-[18px] w-[18px]" />
            </div>
            <input
              id="lead-name"
              autoComplete="name"
              required={['agency', 'business'].includes(segment || '')}
              value={answers.name || ''}
              onChange={(e) => setAnswers((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full bg-transparent py-3.5 pr-4 text-sm sm:text-base font-medium text-[#241c10] outline-none placeholder:text-[#9e9688] placeholder:font-normal"
              placeholder="Enter your name"
            />
          </div>
        </div>

        {/* Business Name Field */}
        {['agency', 'business'].includes(segment || '') ? (
          <div className="space-y-1.5">
            <label htmlFor="lead-business-name" className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#635c50]">
              <span>Business name<span className="text-[#a06a00] font-bold"> *</span></span>
            </label>
            <div className="group relative flex items-center rounded-xl border border-[#dcd4c6] bg-[#faf8f5]/90 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200 focus-within:border-[#c8860a] focus-within:bg-white focus-within:shadow-[0_4px_18px_rgba(200,134,10,0.12)] focus-within:ring-4 focus-within:ring-[#c8860a]/10 hover:border-[#c9bead] hover:bg-white">
              <div className="pointer-events-none pl-3.5 pr-2.5 text-[#9a9182] transition-colors group-focus-within:text-[#c8860a]">
                <Building2 className="h-[18px] w-[18px]" />
              </div>
              <input
                id="lead-business-name"
                autoComplete="organization"
                required
                value={answers.businessName || ''}
                onChange={(e) => setAnswers((prev) => ({ ...prev, businessName: e.target.value }))}
                className="w-full bg-transparent py-3.5 pr-4 text-sm sm:text-base font-medium text-[#241c10] outline-none placeholder:text-[#9e9688] placeholder:font-normal"
                placeholder="Enter your business name"
              />
            </div>
          </div>
        ) : null}

        {/* WhatsApp Phone Field */}
        <div className="space-y-1.5">
          <label htmlFor="lead-whatsapp" className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#635c50]">
            <span>WhatsApp number{['agency', 'business'].includes(segment || '') ? <span className="text-[#a06a00] font-bold"> *</span> : ''}</span>
          </label>
          <div className="group relative flex items-center overflow-hidden rounded-xl border border-[#dcd4c6] bg-[#faf8f5]/90 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200 focus-within:border-[#c8860a] focus-within:bg-white focus-within:shadow-[0_4px_18px_rgba(200,134,10,0.12)] focus-within:ring-4 focus-within:ring-[#c8860a]/10 hover:border-[#c9bead] hover:bg-white">
            <div className="flex items-center gap-1.5 border-r border-[#dcd4c6] bg-[#f2ecdf]/75 px-3.5 py-3.5 text-xs font-bold tracking-wide text-[#5c5446] select-none">
              <Phone className="h-3.5 w-3.5 text-[#9a9182] transition-colors group-focus-within:text-[#c8860a]" />
              <span>+91</span>
            </div>
            <input
              id="lead-whatsapp"
              type="tel"
              autoComplete="tel-national"
              inputMode="numeric"
              required={['agency', 'business'].includes(segment || '')}
              value={answers.whatsapp || ''}
              onChange={(e) => setAnswers((prev) => ({ ...prev, whatsapp: e.target.value.replace(/\D/g, '').slice(0, 10) }))}
              className="w-full bg-transparent px-3.5 py-3.5 text-sm sm:text-base font-medium tracking-wide text-[#241c10] outline-none placeholder:text-[#9e9688] placeholder:font-normal placeholder:tracking-normal"
              placeholder="98765 43210"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#635c50]">
            <label htmlFor="lead-email">
              Email
            </label>
            <span className="text-[11px] font-normal normal-case text-[#8a8172]">
              {['agency', 'business'].includes(segment || '') ? 'Optional' : segment === 'other' ? 'WhatsApp or email required' : ''}
            </span>
          </div>
          <div className="group relative flex items-center rounded-xl border border-[#dcd4c6] bg-[#faf8f5]/90 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200 focus-within:border-[#c8860a] focus-within:bg-white focus-within:shadow-[0_4px_18px_rgba(200,134,10,0.12)] focus-within:ring-4 focus-within:ring-[#c8860a]/10 hover:border-[#c9bead] hover:bg-white">
            <div className="pointer-events-none pl-3.5 pr-2.5 text-[#9a9182] transition-colors group-focus-within:text-[#c8860a]">
              <Mail className="h-[18px] w-[18px]" />
            </div>
            <input
              id="lead-email"
              type="email"
              autoComplete="email"
              value={answers.email || ''}
              onChange={(e) => setAnswers((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full bg-transparent py-3.5 pr-4 text-sm sm:text-base font-medium text-[#241c10] outline-none placeholder:text-[#9e9688] placeholder:font-normal"
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Consent Checkbox */}
        {['agency', 'business'].includes(segment || '') ? (
          <label htmlFor="consent" className="group flex items-start gap-3 rounded-xl border border-[#ded7cb]/80 bg-[#faf8f4]/80 p-3.5 sm:p-4 transition-all hover:border-[#cbbfae] hover:bg-[#faf7f2] cursor-pointer select-none">
            <div className="relative flex items-center justify-center mt-0.5">
              <input
                id="consent"
                type="checkbox"
                checked={Boolean(answers.consent)}
                onChange={(e) => setAnswers((prev) => ({ ...prev, consent: e.target.checked }))}
                className="peer h-4 w-4 shrink-0 rounded border-[#c4b59d] text-[#a06a00] accent-[#a06a00] focus:ring-[#c8860a] cursor-pointer"
              />
            </div>
            <span className="cursor-pointer text-xs sm:text-[13px] leading-relaxed text-[#5c5446]">
              I agree to be contacted about this enquiry and understand that my information will be used for service discussions.
            </span>
          </label>
        ) : null}

        <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
          <label htmlFor="lead-website">Leave this field empty</label>
          <input id="lead-website" type="text" tabIndex={-1} autoComplete="off" value={answers.website_hp || ''} onChange={(e) => setAnswers((prev) => ({ ...prev, website_hp: e.target.value }))} />
        </div>

        {error && (
          <div role="alert" className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50/90 p-3.5 text-sm text-red-700 shadow-sm">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
            <span>{error}</span>
          </div>
        )}

        {/* Premium CTA Button */}
        <button
          type="button"
          onClick={submitLead}
          disabled={loading}
          className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-[#c8860a] via-[#b87905] to-[#a06a00] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(200,134,10,0.28)] transition-all duration-200 hover:shadow-[0_16px_36px_rgba(200,134,10,0.38)] hover:brightness-105 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#c8860a]/30 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Submitting enquiry...</span>
            </>
          ) : (
            <>
              <span>Submit enquiry</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>

        {/* Security / Trust Badge */}
        <div className="flex items-center justify-center gap-2 pt-1 text-xs text-[#716d63]">
          <ShieldCheck className="h-4 w-4 text-[#a06a00]" />
          <span>Your details are kept private &amp; encrypted. No spam, ever.</span>
        </div>
      </div>
    </div>
  );

  if (isSelectionScreen) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="segment-selection"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#f7f5f0] px-4 py-10 text-[#29241a] sm:px-6 sm:py-14 lg:px-8">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              <span className="absolute -left-40 top-8 h-[28rem] w-[28rem] rounded-full bg-white/80 blur-3xl" />
              <span className="absolute -right-36 top-1/4 h-[25rem] w-[25rem] rounded-full bg-[#e8d7b4]/25 blur-3xl" />
              <span className="absolute bottom-[-14rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[#eee5d3]/65 blur-3xl" />
            </div>
            <div className="relative z-10 mx-auto w-full max-w-5xl -translate-y-5">
              <div className="mx-auto max-w-4xl">
                <div className="mb-8 text-center sm:mb-10">
                  <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#956408]">Build Beyond Studio</p>
                  <h1 className="text-3xl font-medium tracking-[-0.045em] text-[#241c10] sm:text-[2.75rem]">How can we help?</h1>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  {(Object.keys(SEGMENTS) as LeadSegment[]).map((key, index) => {
                    const direction = index % 2 === 0 ? -56 : 56;
                    return (
                      <motion.button
                        key={key}
                        type="button"
                        onClick={() => handleSegmentSelect(key)}
                        initial={prefersReducedMotion ? false : { opacity: 0, x: direction }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: prefersReducedMotion ? 0 : 0.72,
                          delay: prefersReducedMotion ? 0 : Math.floor(index / 2) * 0.14,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.006 }}
                        whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
                        className="group relative isolate flex min-h-[148px] w-full flex-col overflow-hidden rounded-[22px] border border-[#d8c49d]/55 bg-[linear-gradient(135deg,rgba(255,255,255,0.74),rgba(255,251,242,0.58))] p-5 text-left text-[#2c2417] shadow-[0_10px_28px_rgba(73,53,18,0.055),inset_0_1px_0_rgba(255,255,255,0.9)] outline-none backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 hover:border-[#c89b48]/60 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(255,248,232,0.72))] hover:shadow-[0_16px_34px_rgba(73,53,18,0.09),inset_0_1px_0_rgba(255,255,255,0.95)] focus-visible:ring-4 focus-visible:ring-[#C8860A]/20 sm:min-h-[156px] sm:p-6"
                      >
                        <span aria-hidden="true" className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[#c8860a]/40 to-transparent" />
                        <span aria-hidden="true" className="pointer-events-none absolute -right-12 -top-16 -z-10 h-36 w-36 rounded-full bg-[#e7c98e]/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />
                        <span className="mb-1.5 text-base font-semibold tracking-tight text-[#2a2115] sm:text-lg">{SEGMENTS[key].title}</span>
                        <span className="max-w-[28rem] text-[13px] leading-5 text-[#756b5b] sm:text-sm">{SEGMENTS[key].subtitle}</span>
                        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[13px] font-semibold text-[#805300]">
                          Get started
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#c8860a]/25 bg-[#fffaf0]/75 text-[#956408] shadow-sm transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#c8860a]/45 group-hover:bg-white">
                            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                          </span>
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key="lead-flow"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative isolate flex min-h-screen flex-col justify-center overflow-x-hidden overflow-y-auto bg-[#f7f5f0] px-4 pt-16 pb-20 text-[#292822] sm:px-6 sm:pt-12 sm:pb-24 lg:px-8">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <span className="absolute -right-36 top-12 h-[26rem] w-[26rem] rounded-full bg-white/80 blur-3xl" />
            <span className="absolute -left-40 top-1/2 h-[28rem] w-[28rem] rounded-full bg-[#e8d7b4]/25 blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto my-auto flex w-full max-w-2xl flex-col">
            <div className="fixed top-4 left-4 z-40 sm:static sm:top-auto sm:left-auto sm:z-auto sm:mb-6">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-medium text-[#555249] shadow-sm backdrop-blur-lg transition-all duration-200 hover:bg-white hover:text-[#241c10] hover:shadow cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
            </div>

            <div>
              <AnimatePresence mode="wait" initial={false} custom={transitionDirection}>
                <motion.div
                  key={isFinalScreen ? 'contact-details' : currentStep?.id || 'empty-step'}
                  custom={transitionDirection}
                  variants={{
                    enter: (direction: number) => ({
                      opacity: 0,
                      x: prefersReducedMotion ? 0 : direction * 24,
                      y: prefersReducedMotion ? 0 : 8,
                    }),
                    center: { opacity: 1, x: 0, y: 0 },
                    exit: (direction: number) => ({
                      opacity: 0,
                      x: prefersReducedMotion ? 0 : direction * -18,
                      y: prefersReducedMotion ? 0 : -5,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
                >
                  {isFinalScreen ? finalStep : currentStep ? (
                    <>
                      <div className="space-y-2">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#956408]">Question {stepIndex + 1}</p>
                        <h2 className="text-2xl font-medium tracking-[-0.035em] text-[#2a2115] sm:text-[2rem]">{currentStep.title}</h2>
                        {currentStep.subtitle && <p className="text-sm leading-6 text-[#756b5b]">{currentStep.subtitle}</p>}
                      </div>

                      {currentStep.type === 'text' ? (
                        <textarea
                          id={`lead-question-${currentStep.id}`}
                          value={answers[currentStep.id] || ''}
                          onChange={(e) => setAnswers((prev) => ({ ...prev, [currentStep.id]: e.target.value.slice(0, 1200) }))}
                          maxLength={1200}
                          rows={4}
                          className="w-full rounded-2xl border border-white/80 bg-white/55 px-4 py-4 text-base text-[#292822] shadow-[0_10px_28px_rgba(37,34,27,0.05)] outline-none backdrop-blur-lg transition placeholder:text-[#8b877d] focus:border-[#a69c85] focus:bg-white/75 focus:ring-4 focus:ring-black/5"
                          placeholder="Describe your enquiry"
                        />
                      ) : (
                        <div className="grid gap-3 sm:grid-cols-2">
                          {currentStep.options.map((option) => {
                            const selected = currentStep.type === 'multi' ? (Array.isArray(answers[currentStep.id]) ? answers[currentStep.id].includes(option) : false) : answers[currentStep.id] === option;
                            return (
                              <motion.button
                                key={option}
                                type="button"
                                aria-pressed={selected}
                                onClick={() => handleOptionSelect(option)}
                                initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: prefersReducedMotion ? 0 : 0.24, delay: prefersReducedMotion ? 0 : Math.min(currentStep.options.indexOf(option) * 0.035, 0.18) }}
                                whileHover={prefersReducedMotion ? undefined : { y: -1 }}
                                whileTap={prefersReducedMotion ? undefined : { scale: 0.995 }}
                                className={cn(
                                  'group relative flex min-h-[76px] w-full items-center justify-center rounded-xl border px-5 py-4 text-center text-sm font-medium outline-none backdrop-blur-md transition-[background-color,border-color,box-shadow,color,transform] duration-200 focus-visible:ring-4 focus-visible:ring-[#C8860A]/15 sm:min-h-[82px] sm:text-base',
                                  selected
                                    ? 'border-[#b88019]/65 bg-[#fff9eb]/85 text-[#6f4908] shadow-[0_5px_16px_rgba(137,94,22,0.08)]'
                                    : 'border-[#dfd8ca]/80 bg-white/70 text-[#504a3f] shadow-[0_3px_12px_rgba(63,52,32,0.035)] hover:-translate-y-0.5 hover:border-[#c9ad76]/70 hover:bg-white/90 hover:shadow-[0_8px_20px_rgba(63,52,32,0.07)]'
                                )}
                              >
                                <span>{option}</span>
                                {currentStep.type === 'multi' ? (
                                  <span className={cn(
                                    'absolute right-3 top-3 flex h-[18px] w-[18px] items-center justify-center rounded-[5px] border transition-colors',
                                    selected ? 'border-[#a06a00] bg-[#a06a00] text-white' : 'border-[#c9c2b5] bg-white/70 text-transparent group-hover:border-[#b88019]'
                                  )}>
                                    {selected ? <Check className="h-3 w-3" strokeWidth={2.5} /> : null}
                                  </span>
                                ) : null}
                              </motion.button>
                            );
                          })}
                        </div>
                      )}

                      {error && <div role="alert" className="flex items-start gap-2 rounded-2xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"><AlertCircle className="mt-0.5 h-4 w-4" /> {error}</div>}

                      {currentStep.type === 'multi' || currentStep.type === 'text' ? (
                        <div className="sticky bottom-3 mt-6 rounded-2xl border border-white/80 bg-white/65 p-3 shadow-[0_10px_30px_rgba(37,34,27,0.08)] backdrop-blur-xl">
                          <button type="button" onClick={currentStep.type === 'text' ? handleTextContinue : handleMultiContinue} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#A06A00] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(160,106,0,0.18)] transition hover:bg-[#8C5D00] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C8860A]/25">Continue <ArrowRight className="h-4 w-4" /></button>
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {!isFinalScreen && (
            <div className="fixed bottom-6 inset-x-0 z-30 flex justify-center pointer-events-none">
              <div className="flex items-center gap-2.5 pointer-events-auto" role="group" aria-label={`Step ${Math.min(stepIndex + 1, flow.length + 1)} of ${flow.length + 1}`}>
                {Array.from({ length: flow.length + 1 }, (_, index) => {
                  const active = index === stepIndex;
                  const completed = index < stepIndex;
                  return (
                    <button
                      key={index}
                      type="button"
                      disabled={index >= stepIndex}
                      onClick={() => {
                        if (completed) {
                          setTransitionDirection(-1);
                          setStepIndex(index);
                        }
                      }}
                      aria-current={active ? 'step' : undefined}
                      aria-label={`Step ${index + 1}${completed ? ', completed (click to go back)' : active ? ', current' : ''}`}
                      className={cn(
                        'h-2 rounded-full transition-all duration-300 outline-none',
                        active
                          ? 'w-7 bg-[#a06a00] cursor-default'
                          : completed
                            ? 'w-2 bg-[#c8860a]/65 hover:bg-[#c8860a] hover:scale-125 cursor-pointer'
                            : 'w-2 bg-[#b7ad9a]/45 cursor-default'
                      )}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
