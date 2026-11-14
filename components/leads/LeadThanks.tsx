'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CalendarDays, CheckCircle2, MessageCircleMore, ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type LeadThanksProps = {
  bookingUrl: string | null;
};

function getWhatsAppNumber() {
  const digits = (process.env.NEXT_PUBLIC_BBS_WHATSAPP_NUMBER || '').replace(/\D/g, '');
  return digits.length >= 8 && digits.length <= 15 ? digits : '';
}

export default function LeadThanks({ bookingUrl }: LeadThanksProps) {
  const params = useSearchParams();
  const prefersReducedMotion = useReducedMotion();
  const leadRef = params.get('ref') || 'L-UNKNOWN';
  const segment = params.get('segment') || 'agency';
  const [leadName, setLeadName] = useState('');
  const [token, setToken] = useState('');
  const [profileFormAvailable, setProfileFormAvailable] = useState(false);
  const [form, setForm] = useState({ email: '', agencyName: '', website: '', businessName: '', instagram: '' });
  const [status, setStatus] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setLeadName(window.sessionStorage.getItem('bbs-last-lead-name') || '');
    const storedToken = window.sessionStorage.getItem('bbs-last-lead-update-token') || '';
    setToken(storedToken);
    setProfileFormAvailable(Boolean(storedToken));
  }, []);

  const whatsAppHref = useMemo(() => {
    const number = getWhatsAppNumber();
    if (!number) return '';
    const greeting = leadName ? `Hi BBS, I’m ${leadName}.` : 'Hi BBS,';
    const message = encodeURIComponent(`${greeting} I’m following up about my enquiry. Ref ${leadRef}.`);
    return `https://wa.me/${number}?text=${message}`;
  }, [leadName, leadRef]);

  const trackWhatsAppClick = () => {
    const sessionId = window.sessionStorage.getItem('bbs-lead-session-id');
    const eventId = window.crypto.randomUUID();
    if (sessionId) {
      fetch('/api/leads/event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'Contact',
          step: 'whatsapp_contact',
          segment: ['agency', 'business', 'talent', 'other'].includes(segment) ? segment : undefined,
          sessionId,
          eventId,
          meta: { channel: 'whatsapp' },
        }),
        keepalive: true,
      }).catch((error) => console.error('WhatsApp contact event failed', { errorName: error?.name || 'unknown' }));
    }
    window.fbq?.('track', 'Contact', {}, { eventID: eventId });
  };

  const handleSubmit = async () => {
    if (!token) {
      setStatus('Optional profile updates are unavailable for this enquiry.');
      return;
    }

    setSaving(true);
    setStatus('');
    try {
      const res = await fetch(`/api/leads/${encodeURIComponent(leadRef)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, ...form }),
      });
      if (!res.ok) throw new Error('Unable to update.');
      setStatus('Thanks — your optional information has been saved.');
    } catch {
      setStatus('We could not save the optional details right now.');
    } finally {
      setSaving(false);
    }
  };

  const canUpdateProfile = profileFormAvailable && ['agency', 'business'].includes(segment);

  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-x-hidden overflow-y-auto bg-[#f7f5f0] px-4 py-8 text-[#292822] sm:px-6 sm:py-14">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <span className="absolute -right-32 top-8 h-[28rem] w-[28rem] rounded-full bg-white/80 blur-3xl" />
        <span className="absolute -left-40 bottom-12 h-[28rem] w-[28rem] rounded-full bg-[#e8d7b4]/25 blur-3xl" />
      </div>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.48, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto my-auto w-full max-w-2xl"
      >
        <div className="rounded-[28px] border border-[#d8c49d]/60 bg-white/85 p-6 shadow-[0_20px_60px_-15px_rgba(42,33,18,0.08),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-2xl transition-all sm:p-10">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2.5">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/20 bg-emerald-50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-800 shadow-xs">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Enquiry received</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#e8d5b0]/80 bg-[#fffdf8] px-3 py-1 text-xs font-mono font-medium text-[#756b5b]">
              <span>Ref:</span>
              <span className="font-bold text-[#241c10]">{leadRef}</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-[#22211e] sm:text-4xl">
            {leadName ? `Thanks, ${leadName} — we’ve got your enquiry.` : 'Thanks — we’ve got your enquiry.'}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-[#6b6455] sm:text-base">
            Our team will review your enquiry and get back to you shortly. You can also connect with us directly or schedule a strategy call right now.
          </p>

          <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
            {whatsAppHref ? (
              <motion.a
                href={whatsAppHref}
                target="_blank"
                rel="noreferrer"
                onClick={trackWhatsAppClick}
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
                className="group flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-5 py-4 text-base font-semibold text-white shadow-[0_8px_20px_rgba(37,211,102,0.28)] transition-all duration-200 hover:bg-[#20bd5a] hover:shadow-[0_12px_28px_rgba(37,211,102,0.38)] cursor-pointer"
              >
                <MessageCircleMore className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                <span>WhatsApp us</span>
              </motion.a>
            ) : (
              <p className="flex items-center justify-center rounded-xl border border-[#ded7cb] bg-[#faf8f5]/80 px-5 py-4 text-center text-sm text-[#716d63]">
                WhatsApp contact is unavailable right now.
              </p>
            )}

            {bookingUrl ? (
              <motion.a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
                className="group flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#EAB308] to-[#D97706] px-5 py-4 text-base font-semibold text-white shadow-[0_8px_20px_rgba(234,179,8,0.32)] transition-all duration-200 hover:brightness-105 hover:shadow-[0_12px_28px_rgba(234,179,8,0.42)] cursor-pointer"
              >
                <CalendarDays className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                <span>Book a strategy call</span>
              </motion.a>
            ) : (
              <p className="flex items-center justify-center rounded-xl border border-[#ded7cb] bg-[#faf8f5]/80 px-5 py-4 text-center text-sm text-[#716d63]">
                Strategy call booking is unavailable right now.
              </p>
            )}
          </div>

          {canUpdateProfile ? (
            <div className="mt-8 rounded-2xl border border-[#e8dfd1] bg-[#faf8f5]/70 p-5 shadow-xs sm:p-6">
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#77746c]">
                <ShieldCheck className="h-4 w-4 text-[#a06a00]" />
                <span>Optional extra information</span>
              </div>
              {segment === 'agency' ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="Email"
                    className="rounded-xl border border-[#ded7cb] bg-white/90 px-4 py-3 text-sm text-[#241c10] shadow-2xs outline-none placeholder:text-[#9e9688] transition focus:border-[#c8860a] focus:bg-white focus:ring-4 focus:ring-[#c8860a]/10"
                  />
                  <input
                    value={form.agencyName}
                    onChange={(e) => setForm((p) => ({ ...p, agencyName: e.target.value }))}
                    placeholder="Agency name"
                    className="rounded-xl border border-[#ded7cb] bg-white/90 px-4 py-3 text-sm text-[#241c10] shadow-2xs outline-none placeholder:text-[#9e9688] transition focus:border-[#c8860a] focus:bg-white focus:ring-4 focus:ring-[#c8860a]/10"
                  />
                  <input
                    value={form.website}
                    onChange={(e) => setForm((p) => ({ ...p, website: e.target.value }))}
                    placeholder="Website"
                    className="rounded-xl border border-[#ded7cb] bg-white/90 px-4 py-3 text-sm text-[#241c10] shadow-2xs outline-none placeholder:text-[#9e9688] transition focus:border-[#c8860a] focus:bg-white focus:ring-4 focus:ring-[#c8860a]/10 sm:col-span-2"
                  />
                </div>
              ) : (
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="Email"
                    className="rounded-xl border border-[#ded7cb] bg-white/90 px-4 py-3 text-sm text-[#241c10] shadow-2xs outline-none placeholder:text-[#9e9688] transition focus:border-[#c8860a] focus:bg-white focus:ring-4 focus:ring-[#c8860a]/10"
                  />
                  <input
                    value={form.businessName}
                    onChange={(e) => setForm((p) => ({ ...p, businessName: e.target.value }))}
                    placeholder="Business name"
                    className="rounded-xl border border-[#ded7cb] bg-white/90 px-4 py-3 text-sm text-[#241c10] shadow-2xs outline-none placeholder:text-[#9e9688] transition focus:border-[#c8860a] focus:bg-white focus:ring-4 focus:ring-[#c8860a]/10"
                  />
                  <input
                    value={form.instagram}
                    onChange={(e) => setForm((p) => ({ ...p, instagram: e.target.value }))}
                    placeholder="Instagram or website"
                    className="rounded-xl border border-[#ded7cb] bg-white/90 px-4 py-3 text-sm text-[#241c10] shadow-2xs outline-none placeholder:text-[#9e9688] transition focus:border-[#c8860a] focus:bg-white focus:ring-4 focus:ring-[#c8860a]/10 sm:col-span-2"
                  />
                </div>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={saving}
                className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#c8860a] to-[#a06a00] px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(200,134,10,0.2)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
              >
                {saving ? 'Saving...' : 'Save details'}
              </button>
              {status ? <p role="status" className="mt-3 text-sm text-[#716d63]">{status}</p> : null}
            </div>
          ) : null}

          <div className="mt-8 flex justify-center border-t border-[#ded7cb]/50 pt-4">
            <Link
              href="/leads"
              className="text-sm font-medium text-[#6b6455] underline-offset-4 transition hover:text-[#22211e] hover:underline"
            >
              ← Start another enquiry
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
