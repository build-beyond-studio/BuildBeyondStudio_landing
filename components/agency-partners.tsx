'use client';

import { useEffect, useRef, useState } from 'react';

const PARTNERS = [
  { initials: 'PC', name: 'Pixel Craft',   city: 'Mumbai',    hue: '#E8A020' },
  { initials: 'GL', name: 'Growth Labs',   city: 'Delhi',     hue: '#4f9cf9' },
  { initials: 'BW', name: 'Brandwave',     city: 'Bangalore', hue: '#a78bfa' },
  { initials: 'SD', name: 'Surge Digital', city: 'Hyderabad', hue: '#34d399' },
  { initials: 'AC', name: 'Axis Creative', city: 'Pune',      hue: '#f472b6' },
  { initials: 'NM', name: 'Nexus Media',   city: 'Chennai',   hue: '#38bdf8' },
  { initials: 'VA', name: 'Velocity Ads',  city: 'Kolkata',   hue: '#fb923c' },
  { initials: 'PM', name: 'Prism Mktg',   city: 'Jaipur',    hue: '#2dd4bf' },
];

const COMMITMENTS = [
  {
    title: 'NDA Signed First',
    desc: 'Before a single line of work begins.',
    check: 'Every. Single. Time.',
    Icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <polyline points="9 15 11 17 15 13"/>
      </svg>
    ),
  },
  {
    title: 'Zero Client Contact',
    desc: 'We never speak to your clients directly.',
    check: 'Not once.',
    Icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="8" y1="10" x2="16" y2="10"/>
        <line x1="8" y1="13" x2="12" y2="13"/>
      </svg>
    ),
  },
  {
    title: 'Your Brand Only',
    desc: 'Zero BBS branding on any deliverable.',
    check: 'Invisible by design.',
    Icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    title: 'Data Wiped Always',
    desc: 'Client data deleted after handoff.',
    check: 'No trace left.',
    Icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    title: 'Full IP Yours',
    desc: 'All code & assets belong to you.',
    check: '100% ownership.',
    Icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    title: 'Price is Secret',
    desc: 'Our quote stays strictly between us.',
    check: 'Always confidential.',
    Icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
];

export default function AgencyPartners() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [activeCard, setActiveCard] = useState(-1);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.06 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cardsRef.current.indexOf(entry.target as HTMLDivElement);
            if (idx >= 0) {
              setTimeout(() => setVisibleCards((p) => new Set([...p, idx])), idx * 80);
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.06 }
    );
    cardsRef.current.forEach((c) => c && observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ─── Section wrapper ─── */
        .ap-section {
          background: #F5F2EC;
          padding: 96px 24px 104px;
          border-top: 1px solid rgba(0,0,0,0.05);
          overflow: hidden;
          position: relative;
        }

        /* ─── Entrance ─── */
        .ap-fade {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                      transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .ap-fade.ap-on { opacity: 1; transform: none; }
        .ap-d1 { transition-delay: 0.04s; }
        .ap-d2 { transition-delay: 0.18s; }

        /* ─── Section eyebrow label ─── */
        .ap-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10.5px; font-weight: 800; letter-spacing: 0.14em;
          text-transform: uppercase; color: #C8860A;
          padding: 5px 14px 5px 10px; border-radius: 999px;
          border: 1px solid rgba(200,134,10,0.2);
          background: rgba(200,134,10,0.06);
        }
        .ap-eyebrow-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #C8860A;
          animation: apDotPulse 2s ease-in-out infinite;
          box-shadow: 0 0 0 3px rgba(200,134,10,0.2);
        }
        @keyframes apDotPulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(200,134,10,0.2); }
          50%      { box-shadow: 0 0 0 6px rgba(200,134,10,0); }
        }

        /* ════════════════════════════════════════════
           MARQUEE STRIP  (full-bleed dark panel)
           ════════════════════════════════════════════ */
        .ap-marquee-panel {
          background: #0d0d0d;
          margin: 0 -24px;
          padding: 52px 0 56px;
          overflow: hidden;
          position: relative;
        }
        .ap-marquee-panel::before,
        .ap-marquee-panel::after {
          content: '';
          position: absolute; top: 0; bottom: 0;
          width: 120px; z-index: 2; pointer-events: none;
        }
        .ap-marquee-panel::before {
          left: 0;
          background: linear-gradient(90deg, #0d0d0d 0%, transparent 100%);
        }
        .ap-marquee-panel::after {
          right: 0;
          background: linear-gradient(90deg, transparent 0%, #0d0d0d 100%);
        }

        .ap-marquee-label {
          text-align: center; margin-bottom: 40px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; color: rgba(255,255,255,0.3);
          position: relative; z-index: 3;
        }

        /* The two scrolling rows */
        .ap-marquee-track {
          display: flex; gap: 24px; width: max-content;
          padding: 6px 0;
        }
        .ap-marquee-row1 { animation: marqLeft 34s linear infinite; }
        .ap-marquee-row2 { animation: marqRight 38s linear infinite; margin-top: 24px; }
        .ap-marquee-track:hover { animation-play-state: paused; }
        @keyframes marqLeft  { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marqRight { from { transform: translateX(-50%); } to { transform: translateX(0); } }

        /* Each partner chip */
        .ap-partner-chip {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 20px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          flex-shrink: 0;
          cursor: default;
          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            transform 0.35s cubic-bezier(0.22,1,0.36,1);
          position: relative; overflow: hidden;
        }
        .ap-partner-chip::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%);
          opacity: 0; transition: opacity 0.3s ease;
        }
        .ap-partner-chip:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-3px);
        }
        .ap-partner-chip:hover::before { opacity: 1; }

        /* Circle avatar inside chip */
        .ap-chip-avatar {
          width: 48px; height: 48px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; font-weight: 900; color: #fff;
          flex-shrink: 0; position: relative; overflow: hidden;
          border: 2px solid rgba(255,255,255,0.25);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease;
        }
        .ap-chip-avatar::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.28) 0%, transparent 55%);
        }
        .ap-partner-chip:hover .ap-chip-avatar {
          transform: scale(1.1);
        }
        .ap-chip-name {
          font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.9);
          letter-spacing: -0.01em; white-space: nowrap;
        }
        .ap-chip-city {
          font-size: 10px; font-weight: 600; color: rgba(255,255,255,0.35);
          letter-spacing: 0.06em; text-transform: uppercase;
        }

        /* ════════════════════════════════════════════
           COMMITMENT CARDS
           ════════════════════════════════════════════ */
        .ap-commit-header {
          text-align: center; margin-bottom: 36px;
        }
        .ap-commit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 768px) { .ap-commit-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .ap-commit-grid { grid-template-columns: 1fr 1fr; } }

        .ap-ccard {
          opacity: 0; transform: translateY(20px);
          transition:
            opacity 0.55s cubic-bezier(0.22,1,0.36,1),
            transform 0.55s cubic-bezier(0.22,1,0.36,1),
            border-color 0.28s ease,
            box-shadow 0.28s ease,
            background 0.28s ease;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 20px;
          padding: 26px 22px;
          cursor: default; position: relative; overflow: hidden;
        }
        .ap-ccard.ap-ccard-on { opacity: 1; transform: translateY(0); }

        /* Coloured left-border accent that grows on hover */
        .ap-ccard::after {
          content: '';
          position: absolute; top: 0; left: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #C8860A, #E8A020);
          border-radius: 99px;
          transform: scaleY(0);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
          transform-origin: bottom;
        }
        .ap-ccard.ap-ccard-active::after,
        .ap-ccard:hover::after { transform: scaleY(1); transform-origin: top; }

        .ap-ccard.ap-ccard-active,
        .ap-ccard:hover {
          background: #FFFDF8;
          border-color: rgba(200,134,10,0.22);
          box-shadow: 0 16px 48px rgba(200,134,10,0.14);
          transform: translateY(-5px) !important;
        }

        /* Icon ring */
        .ap-ccard-icon {
          width: 42px; height: 42px; border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(200,134,10,0.08);
          border: 1px solid rgba(200,134,10,0.14);
          color: #C8860A; margin-bottom: 16px;
          transition: background 0.28s ease, border-color 0.28s ease,
                      transform 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .ap-ccard:hover .ap-ccard-icon,
        .ap-ccard.ap-ccard-active .ap-ccard-icon {
          background: rgba(200,134,10,0.15);
          border-color: rgba(200,134,10,0.3);
          transform: scale(1.12) rotate(-5deg);
        }
        .ap-ccard-title {
          font-size: 13.5px; font-weight: 800; color: #111;
          letter-spacing: -0.018em; margin-bottom: 5px; line-height: 1.25;
        }
        .ap-ccard-desc {
          font-size: 12px; color: #6b7280; line-height: 1.65;
        }
        .ap-ccard-check {
          display: inline-flex; align-items: center; gap: 5px;
          margin-top: 12px;
          font-size: 10.5px; font-weight: 800; color: #C8860A;
          letter-spacing: 0.03em;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.28s ease, transform 0.28s ease;
        }
        .ap-ccard:hover .ap-ccard-check,
        .ap-ccard.ap-ccard-active .ap-ccard-check {
          opacity: 1; transform: translateY(0);
        }
      `}</style>

      <section id="partners" className="ap-section" ref={sectionRef}>
        <div className="max-w-5xl mx-auto relative z-10">

          {/* ─── Commitment Cards ─── */}
          <div className={`ap-fade ap-d1 ${visible ? 'ap-on' : ''}`}>
            <div className="ap-commit-header">
              <span className="ap-eyebrow">
                <span className="ap-eyebrow-dot" />
                Our Commitment to Your Confidentiality
              </span>
              <p className="text-[13px] text-gray-500 mt-4 max-w-sm mx-auto leading-[1.75]">
                We&apos;re your invisible partner. Here&apos;s the promise that makes that possible.
              </p>
            </div>

            <div className="ap-commit-grid">
              {COMMITMENTS.map((c, i) => (
                <div
                  key={c.title}
                  ref={(el) => { cardsRef.current[i] = el; }}
                  className={`ap-ccard ${visibleCards.has(i) ? 'ap-ccard-on' : ''} ${activeCard === i ? 'ap-ccard-active' : ''}`}
                  onMouseEnter={() => setActiveCard(i)}
                  onMouseLeave={() => setActiveCard(-1)}
                >
                  <div className="ap-ccard-icon"><c.Icon /></div>
                  <div className="ap-ccard-title">{c.title}</div>
                  <div className="ap-ccard-desc">{c.desc}</div>
                  <div className="ap-ccard-check">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="6" r="6" fill="#C8860A" opacity="0.15"/>
                      <polyline points="3.5,6 5.2,7.7 8.5,4.3" stroke="#C8860A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {c.check}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
