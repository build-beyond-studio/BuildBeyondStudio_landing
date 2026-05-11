"use client";

import { useEffect, useRef, useState } from "react";

/* ── SVG icons ── */
const IconHandshake = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
    <path d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3.02 0L12 11l.11.5a2.13 2.13 0 0 0 3.02 0h0a2.13 2.13 0 0 0 0-3z"/>
  </svg>
);
const IconSend = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const IconRocket = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);
const IconArrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);
const IconDollar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const STEPS = [
  {
    num: "01",
    title: "Partner With Us",
    body: "Join our white-label program — completely free. You stay the face of everything. We stay completely invisible.",
    Icon: IconHandshake,
    cta: "Free to start",
    revenueBtn: false,
  },
  {
    num: "02",
    title: "Give Us the Project",
    body: "Share your client's brief, scope, or just a voice note. We ask the right questions and send you a firm proposal within 24h.",
    Icon: IconSend,
    cta: "5-min handoff",
    revenueBtn: false,
  },
  {
    num: "03",
    title: "You Set the Price. You Keep the Margin.",
    body: "Invoice your client at your rate. We charge you our fixed cost. The difference is 100% yours — we never see your client's number.",
    Icon: IconDollar,
    cta: "Your pricing, always",
    revenueBtn: true,
  },
  {
    num: "04",
    title: "We Build & Maintain",
    body: "Design, development, QA, deployment — we handle it all under your brand. You deliver, invoice, and keep every rupee of margin.",
    Icon: IconRocket,
    cta: "Full ownership",
    revenueBtn: false,
  },
];

export default function Workflow() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(-1);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === headerRef.current) {
            setHeaderVisible(true);
          } else {
            const idx = stepsRef.current.indexOf(entry.target as HTMLDivElement);
            if (idx >= 0) {
              setVisibleSteps((prev) => new Set([...prev, idx]));
            }
          }
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    stepsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .wf-section {
          background: #F5F2EC;
          padding: 88px 0 100px;
          position: relative;
          z-index: 20;
          margin-top: -80px;
          overflow: hidden;
        }
        @media (max-width: 767px) {
          .wf-section { padding: 64px 0 72px; margin-top: -40px; }
        }

        /* Noise texture overlay */
        .wf-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.6;
        }

        .wf-glow {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 50% 0%, rgba(200,134,10,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 20% 80%, rgba(200,134,10,0.04) 0%, transparent 50%);
          pointer-events: none; z-index: 0;
        }

        /* Entrance */
        .wf-fade {
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                      transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .wf-fade.wf-visible { opacity: 1; transform: translateY(0); }
        .wf-step-0 { transition-delay: 0.08s; }
        .wf-step-1 { transition-delay: 0.2s; }
        .wf-step-2 { transition-delay: 0.32s; }
        .wf-step-3 { transition-delay: 0.44s; }

        /* Pill */
        .wf-pill {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 14px 5px 8px; border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.07);
          background: rgba(0,0,0,0.025);
          font-size: 11px; font-weight: 600; color: #6b7280;
          letter-spacing: .04em; text-transform: uppercase;
          backdrop-filter: blur(4px);
        }
        .wf-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #C8860A;
          box-shadow: 0 0 0 3px rgba(200,134,10,0.2);
          animation: wfDotPulse 2s ease-in-out infinite;
        }
        @keyframes wfDotPulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(200,134,10,0.2); }
          50%      { box-shadow: 0 0 0 6px rgba(200,134,10,0); }
        }

        /* Step card */
        .wf-card {
          position: relative;
          background: #fff;
          border: 1px solid rgba(200,134,10,0.12);
          border-radius: 22px;
          overflow: hidden;
          cursor: default;
          transition:
            border-color 0.35s ease,
            box-shadow 0.35s ease,
            transform 0.35s cubic-bezier(0.22,1,0.36,1),
            background 0.35s ease;
          box-shadow: 0 2px 16px rgba(200,134,10,0.06), 0 0 0 1px rgba(200,134,10,0.04);
        }

        /* Card corner accent */
        .wf-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent 10%, rgba(200,134,10,0.25) 50%, transparent 90%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .wf-card:hover,
        .wf-card.is-active {
          border-color: rgba(200,134,10,0.3);
          box-shadow: 0 20px 56px rgba(200,134,10,0.15), 0 0 0 1px rgba(200,134,10,0.12);
          transform: translateY(-6px);
        }
        .wf-card:hover::before,
        .wf-card.is-active::before { opacity: 1; }

        /* ── Golden highlight card (Step 3) ── */
        .wf-card-gold {
          background: linear-gradient(145deg, #A06A00 0%, #C8860A 55%, #E8A020 100%);
          border-color: transparent;
          cursor: pointer;
          box-shadow:
            0 8px 32px rgba(200,134,10,0.45),
            0 0 0 1px rgba(255,255,255,0.12) inset;
          text-decoration: none;
          display: block;
        }
        .wf-card-gold::before {
          background: linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.2) 50%, transparent 90%);
          opacity: 1;
        }
        .wf-card-gold:hover {
          border-color: transparent;
          box-shadow:
            0 20px 60px rgba(200,134,10,0.6),
            0 0 0 1px rgba(255,255,255,0.18) inset;
          transform: translateY(-8px);
        }
        .wf-card-gold .wf-ghost-num { color: rgba(255,255,255,0.12); }
        .wf-card-gold:hover .wf-ghost-num { color: rgba(255,255,255,0.2); }
        .wf-card-gold .wf-step-num-label { color: rgba(255,255,255,0.75); }
        .wf-card-gold .wf-step-num-label::after { background: rgba(255,255,255,0.25); }
        .wf-card-gold .wf-icon-wrap {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.3);
          color: #fff;
        }
        .wf-card-gold:hover .wf-icon-wrap {
          background: rgba(255,255,255,0.26);
          border-color: rgba(255,255,255,0.45);
        }
        .wf-card-gold .wf-card-title { color: #fff; }
        .wf-card-gold:hover .wf-card-title { color: #fff; }
        .wf-card-gold .wf-card-body { color: rgba(255,255,255,0.78); }
        .wf-card-gold .wf-cta-badge {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.3);
          color: #fff;
        }
        .wf-card-gold .wf-rev-btn { display: none; }

        /* Click-me pulse on gold card */
        @keyframes goldCardPulse {
          0%,100% { box-shadow: 0 8px 32px rgba(200,134,10,0.45), 0 0 0 1px rgba(255,255,255,0.12) inset; }
          50%      { box-shadow: 0 12px 48px rgba(200,134,10,0.65), 0 0 0 5px rgba(200,134,10,0.15), 0 0 0 1px rgba(255,255,255,0.12) inset; }
        }
        .wf-card-gold { animation: goldCardPulse 3s ease-in-out infinite; }

        /* Ghost number */
        .wf-ghost-num {
          position: absolute; top: -14px; right: 16px;
          font-size: 56px; font-weight: 900; letter-spacing: -0.06em;
          color: rgba(200,134,10,0.05);
          line-height: 1; pointer-events: none; user-select: none;
          transition: color 0.35s ease, transform 0.35s ease;
        }
        .wf-card:hover .wf-ghost-num { color: rgba(200,134,10,0.09); transform: scale(1.06); }

        /* Icon circle */
        .wf-icon-wrap {
          width: 40px; height: 40px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(200,134,10,0.08);
          border: 1px solid rgba(200,134,10,0.15);
          color: #C8860A;
          margin-bottom: 14px;
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .wf-card:hover .wf-icon-wrap {
          background: rgba(200,134,10,0.14);
          border-color: rgba(200,134,10,0.28);
          transform: scale(1.08) rotate(-3deg);
        }

        .wf-step-num-label {
          font-size: 10px; font-weight: 800; letter-spacing: 0.14em;
          text-transform: uppercase; color: #C8860A;
          margin-bottom: 8px;
          display: flex; align-items: center; gap: 6px;
        }
        .wf-step-num-label::after {
          content: '';
          display: block;
          flex: 1; height: 1px;
          background: rgba(200,134,10,0.2);
          border-radius: 99px;
        }

        .wf-card-title {
          font-size: 14.5px; font-weight: 800; color: #000;
          letter-spacing: -0.02em; line-height: 1.25;
          margin-bottom: 8px;
          transition: color 0.25s ease;
        }
        .wf-card:hover .wf-card-title { color: #111; }

        .wf-card-body {
          font-size: 12px; color: #6b7280; line-height: 1.7;
          margin-bottom: 14px;
        }

        /* Revenue button inside card — elegant text link style */
        .wf-rev-btn {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 4px;
          font-size: 11px; font-weight: 800; letter-spacing: 0.04em;
          text-transform: uppercase; color: #C8860A;
          text-decoration: none;
          padding: 5px 0;
          border-bottom: 1.5px solid rgba(200,134,10,0.3);
          transition: border-color 0.22s ease, color 0.22s ease;
        }
        .wf-rev-btn:hover {
          color: #A06A00;
          border-bottom-color: #C8860A;
        }
        .wf-rev-btn svg { transition: transform 0.22s ease; }
        .wf-rev-btn:hover svg { transform: translateX(3px); }

        .wf-cta-badge {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 10.5px; font-weight: 700; letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #C8860A;
          padding: 4px 10px;
          background: rgba(200,134,10,0.07);
          border: 1px solid rgba(200,134,10,0.14);
          border-radius: 999px;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .wf-card:hover .wf-cta-badge {
          background: rgba(200,134,10,0.12);
          border-color: rgba(200,134,10,0.25);
        }

        /* ── Steps row (single horizontal row) ── */
        .wf-steps-row {
          display: flex;
          gap: 16px;
          align-items: stretch;
        }
        .wf-card {
          flex: 1;
          min-width: 200px;
          padding: 24px 20px 20px;
        }
        @media (max-width: 767px) {
          .wf-steps-row {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-bottom: 8px;
          }
          .wf-steps-row::-webkit-scrollbar { display: none; }
          .wf-card { min-width: 230px; flex-shrink: 0; }
        }

        /* Bottom link */
        .wf-cta-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 700; color: #C8860A;
          text-decoration: none; letter-spacing: -0.01em;
          position: relative; padding-bottom: 2px;
        }
        .wf-cta-link::after {
          content: '';
          position: absolute; bottom: 0; left: 0;
          width: 0; height: 1.5px;
          background: #C8860A; border-radius: 99px;
          transition: width 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .wf-cta-link:hover::after { width: 100%; }
        .wf-cta-link svg { transition: transform 0.25s ease; }
        .wf-cta-link:hover svg { transform: translateX(3px); }
      `}</style>

      <section ref={sectionRef} id="how-we-work" className="wf-section">
        <div className="wf-glow" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 relative z-10">
          {/* Header */}
          <div
            ref={headerRef}
            className={`wf-fade text-center mb-12 ${headerVisible ? "wf-visible" : ""}`}
          >
            <div className="mb-4">
              <span className="wf-pill">
                <span className="wf-dot" />
                How it works
              </span>
            </div>
            <h2 className="text-[1.75rem] sm:text-[2.1rem] font-black text-black leading-[1.08] tracking-[-0.032em] mb-3">
              Four steps. Zero complexity.
            </h2>
            <p className="text-[13.5px] text-gray-500 max-w-[380px] mx-auto leading-[1.75]">
              From first hello to delivered product — your clients never know we were involved.
            </p>
          </div>

          {/* Steps */}
          <div className="wf-steps-row">
            {STEPS.map((step, i) => {
              const isGold = step.revenueBtn;
              const CardEl = isGold ? 'a' : 'div';
              return (
                <CardEl
                  key={step.num}
                  ref={(el: HTMLDivElement | null) => { stepsRef.current[i] = el; }}
                  className={`wf-fade wf-step-${i} wf-card ${isGold ? 'wf-card-gold' : ''} ${visibleSteps.has(i) ? 'wf-visible' : ''} ${activeStep === i ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(-1)}
                  {...(isGold ? {
                    href: '#revenue',
                    onClick: (e: React.MouseEvent) => {
                      e.preventDefault();
                      document.getElementById('revenue')?.scrollIntoView({ behavior: 'smooth' });
                    },
                  } : {})}
                >
                  <span className="wf-ghost-num">{step.num}</span>
                  <div className="wf-step-num-label">Step {step.num}</div>
                  <div className="wf-icon-wrap">
                    <step.Icon />
                  </div>
                  <h3 className="wf-card-title">{step.title}</h3>
                  <p className="wf-card-body">{step.body}</p>
                  <span className="wf-cta-badge">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="3"/></svg>
                    {step.cta}
                  </span>
                  {step.revenueBtn && (
                    <a
                      href="#revenue"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('revenue')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="wf-rev-btn"
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23"/>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                      See Revenue Model
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </a>
                  )}
                </CardEl>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <a href="/#contact" className="wf-cta-link">
              Start the conversation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
