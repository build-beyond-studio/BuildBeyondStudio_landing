"use client";

import { useEffect, useRef, useState } from "react";

/* ── SVG Icons ── */
const IconInbox = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
  </svg>
);
const IconSliders = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/>
    <line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/>
    <line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/>
    <line x1="17" y1="16" x2="23" y2="16"/>
  </svg>
);
const IconTrend = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

const FLOW = [
  { label: "BBS quotes you", sub: "Fixed price, zero surprises", Icon: IconInbox, num: "01" },
  { label: "You set your price", sub: "Charge what you want", Icon: IconSliders, num: "02" },
  { label: "You keep it all", sub: "100% of the difference", Icon: IconTrend, num: "03" },
];

export default function RevenueMath() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);
  const [counted, setCounted] = useState(false);
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Count-up animation for profit number */
  useEffect(() => {
    if (!visible || counted) return;
    setCounted(true);
    const target = 60000;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3); // cubic ease-out
      setProfit(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    // Delay count-up until card enters
    setTimeout(() => requestAnimationFrame(tick), 600);
  }, [visible, counted]);

  const fmtINR = (n: number) =>
    "₹" + n.toLocaleString("en-IN");

  return (
    <>
      <style>{`
        .rm-section {
          background: #080808;
          padding: 80px 24px 88px;
          position: relative;
          overflow: hidden;
        }

        /* Animated grid */
        .rm-grid-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse 85% 75% at 50% 0%, black 0%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 85% 75% at 50% 0%, black 0%, transparent 80%);
          animation: rmGridDrift 20s ease-in-out infinite alternate;
        }
        @keyframes rmGridDrift {
          from { background-position: 0 0; }
          to   { background-position: 28px 28px; }
        }

        .rm-glow {
          position: absolute; top: -80px; left: 50%; transform: translateX(-50%);
          width: 800px; height: 360px;
          background: radial-gradient(ellipse 50% 50% at 50% 0%, rgba(201,168,76,0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Entrance */
        .rm-fade {
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .rm-fade.rm-on { opacity: 1; transform: none; }
        .rm-d1 { transition-delay: 0.06s; }
        .rm-d2 { transition-delay: 0.2s; }
        .rm-d3 { transition-delay: 0.34s; }

        /* Eyebrow */
        .rm-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10px; font-weight: 800; letter-spacing: 0.15em;
          text-transform: uppercase; color: rgba(201,168,76,0.8);
          padding: 5px 14px 5px 10px; border-radius: 999px;
          border: 1px solid rgba(201,168,76,0.2);
          background: rgba(201,168,76,0.07);
        }
        .rm-eyebrow-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #C9A84C;
          animation: rmDotPulse 2s ease-in-out infinite;
        }
        @keyframes rmDotPulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(201,168,76,0.2); }
          50%      { box-shadow: 0 0 0 6px rgba(201,168,76,0); }
        }

        /* ── Flow steps ── */
        .rm-flow {
          display: flex; align-items: stretch; gap: 0;
          position: relative;
        }

        .rm-step-wrap {
          flex: 1; position: relative;
        }

        /* Connecting line between steps */
        .rm-connector {
          position: absolute; top: 28px; right: -1px;
          width: 2px; height: 40px;
          background: linear-gradient(180deg, rgba(201,168,76,0.3) 0%, rgba(201,168,76,0.08) 100%);
          z-index: 1;
        }
        @media (min-width: 768px) {
          .rm-connector {
            top: 40px; right: 0;
            width: 100%; height: 2px;
            background: linear-gradient(90deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.45) 50%, rgba(201,168,76,0.12) 100%);
            position: absolute; top: 50%; left: auto; right: 0;
            transform: translateY(-50%);
            pointer-events: none;
          }
        }

        .rm-step {
          position: relative; z-index: 2;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,168,76,0.1);
          border-radius: 18px;
          padding: 28px 22px 24px;
          cursor: default;
          transition:
            background 0.35s ease,
            border-color 0.35s ease,
            transform 0.35s cubic-bezier(0.22,1,0.36,1),
            box-shadow 0.35s ease;
          overflow: hidden;
        }
        .rm-step::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent);
          opacity: 0; transition: opacity 0.35s ease;
        }
        .rm-step.rm-step-active {
          background: rgba(201,168,76,0.07);
          border-color: rgba(201,168,76,0.32);
          transform: translateY(-6px);
          box-shadow: 0 24px 56px rgba(201,168,76,0.18);
        }
        .rm-step.rm-step-active::before { opacity: 1; }

        .rm-step-num {
          font-size: 9px; font-weight: 900; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(201,168,76,0.5);
          margin-bottom: 14px;
        }

        .rm-step-icon {
          width: 48px; height: 48px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.15);
          color: #C9A84C; margin-bottom: 16px;
          transition: background 0.3s ease, border-color 0.3s ease,
                      transform 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .rm-step.rm-step-active .rm-step-icon {
          background: rgba(201,168,76,0.16);
          border-color: rgba(201,168,76,0.35);
          transform: scale(1.1) rotate(-4deg);
        }

        .rm-step-label {
          font-size: 15px; font-weight: 800; color: #fff;
          letter-spacing: -0.022em; line-height: 1.25; margin-bottom: 6px;
        }
        .rm-step-sub {
          font-size: 12px; color: rgba(255,255,255,0.35); line-height: 1.5;
        }

        /* ── Example card ── */
        .rm-example-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 22px;
          padding: 36px 40px;
          position: relative; overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .rm-example-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent 5%, rgba(201,168,76,0.55) 50%, transparent 95%);
        }
        .rm-example-card:hover {
          border-color: rgba(201,168,76,0.28);
          box-shadow: 0 32px 80px rgba(201,168,76,0.12);
        }

        /* Decorative "bg word" */
        .rm-card-bg-word {
          position: absolute; bottom: -20px; right: 20px;
          font-size: 120px; font-weight: 900; letter-spacing: -0.06em;
          color: rgba(201,168,76,0.04); line-height: 1;
          pointer-events: none; user-select: none;
          animation: rmWordFloat 6s ease-in-out infinite;
        }
        @keyframes rmWordFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }

        /* Row items in card */
        .rm-row {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px;
        }
        .rm-row-label { font-size: 13px; color: rgba(255,255,255,0.4); font-weight: 500; }
        .rm-row-val   { font-size: 15px; font-weight: 700; color: #fff; }
        .rm-divider   { height: 1px; background: rgba(255,255,255,0.05); margin: 4px 0; }

        .rm-profit-row {
          display: flex; align-items: flex-end; justify-content: space-between;
          gap: 16px; padding-top: 8px;
        }
        .rm-profit-label {
          font-size: 10px; font-weight: 800; letter-spacing: 0.14em;
          text-transform: uppercase; color: rgba(201,168,76,0.55); margin-bottom: 6px;
        }
        .rm-profit-val {
          font-size: 3rem; font-weight: 900; letter-spacing: -0.05em;
          color: #C9A84C; line-height: 1;
          animation: rmGlowPulse 3s ease-in-out infinite;
        }
        @keyframes rmGlowPulse {
          0%,100% { text-shadow: 0 0 20px rgba(201,168,76,0.3); }
          50%      { text-shadow: 0 0 40px rgba(201,168,76,0.6), 0 0 80px rgba(201,168,76,0.2); }
        }
        .rm-yours-badge {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 10px; font-weight: 800; letter-spacing: 0.08em;
          text-transform: uppercase; color: #C9A84C;
          padding: 7px 14px; border-radius: 999px;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.22);
          animation: rmBadgePulse 3s ease-in-out infinite;
        }
        @keyframes rmBadgePulse {
          0%,100% { border-color: rgba(201,168,76,0.22); box-shadow: 0 0 0 0 rgba(201,168,76,0); }
          50%      { border-color: rgba(201,168,76,0.4);  box-shadow: 0 0 12px rgba(201,168,76,0.2); }
        }

        /* Note below card */
        .rm-note {
          font-size: 11.5px; color: rgba(255,255,255,0.25);
          text-align: center; line-height: 1.7;
          max-width: 360px; margin: 20px auto 0;
        }

        @media (max-width: 640px) {
          .rm-flow { flex-direction: column; }
          .rm-connector { display: none; }
          .rm-example-card { padding: 26px 22px; }
          .rm-profit-val { font-size: 2.4rem; }
          .rm-card-bg-word { font-size: 80px; }
        }
      `}</style>

      <section ref={sectionRef} id="revenue" className="rm-section">
        <div className="rm-grid-bg" />
        <div className="rm-glow" />

        <div className="max-w-4xl mx-auto relative z-10">

          {/* Headline */}
          <div className={`rm-fade rm-d1 ${visible ? "rm-on" : ""} text-center mb-14`}>
            <div className="mb-5">
              <span className="rm-eyebrow">
                <span className="rm-eyebrow-dot" />
                Revenue Model
              </span>
            </div>
            <h2 className="text-[1.65rem] sm:text-[2.1rem] font-black text-white leading-[1.1] tracking-[-0.032em] mb-4">
              You Set the Price.{" "}
              <span style={{ color: "#C9A84C" }}>You Keep the Margin.</span>
            </h2>
            <p className="text-[12.5px] text-white/35 max-w-[340px] mx-auto leading-[1.8]">
              We quote you. You quote them. We never discuss pricing with your client — ever.
            </p>
          </div>

          {/* 3-Step Flow */}
          <div className={`rm-fade rm-d2 ${visible ? "rm-on" : ""} mb-12`}>
            <div className="rm-flow grid md:grid-cols-3 gap-4">
              {FLOW.map((s, i) => (
                <div
                  key={s.num}
                  className={`rm-step-wrap`}
                >
                  <div
                    className={`rm-step ${activeStep === i ? "rm-step-active" : ""}`}
                    onMouseEnter={() => setActiveStep(i)}
                    onMouseLeave={() => setActiveStep(-1)}
                  >
                    <div className="rm-step-num">Step {s.num}</div>
                    <div className="rm-step-icon"><s.Icon /></div>
                    <div className="rm-step-label">{s.label}</div>
                    <div className="rm-step-sub">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Example Card */}
          <div className={`rm-fade rm-d3 ${visible ? "rm-on" : ""}`}>
            <div className="rm-example-card">
              <span className="rm-card-bg-word">₹60K</span>

              <div className="grid sm:grid-cols-2 gap-8">
                {/* Left: breakdown */}
                <div className="flex flex-col gap-5">
                  <div>
                    <p style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '12px' }}>Live Example</p>
                    <div className="rm-row">
                      <span className="rm-row-label">BBS Price to You</span>
                      <span className="rm-row-val">₹40,000</span>
                    </div>
                    <div className="rm-divider mt-3 mb-3" />
                    <div className="rm-row">
                      <span className="rm-row-label">You Charge Client</span>
                      <span className="rm-row-val">₹1,00,000</span>
                    </div>
                  </div>
                </div>

                {/* Right: profit callout */}
                <div
                  className="flex flex-col justify-center items-start sm:items-end"
                  style={{ borderLeft: '1px solid rgba(201,168,76,0.1)', paddingLeft: '32px' }}
                >
                  <div className="rm-profit-row w-full sm:flex-col sm:items-end gap-3">
                    <div>
                      <div className="rm-profit-label">Your Profit</div>
                      <div className="rm-profit-val">{fmtINR(profit)}</div>
                    </div>
                    <span className="rm-yours-badge self-start sm:self-auto">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="#C9A84C"><circle cx="4" cy="4" r="4"/></svg>
                      fully yours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="rm-note">
              We never see what you invoice your client. We quote you once — you decide everything else.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
