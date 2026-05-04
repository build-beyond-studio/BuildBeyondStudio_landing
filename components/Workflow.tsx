"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Partner With Us",
    body: "Join our white-label program completely free. We stay totally invisible while you remain the face of everything.",
    cue: "Free to start",
    accent: "#C8860A",
  },
  {
    num: "02",
    title: "Share Client Requirements",
    body: "Drop us your client's brief, scope doc, wireframes, or just a voice note. We ask the right technical questions and give you a firm proposal.",
    cue: "5-min handoff",
    accent: "#6d28d9",
  },
  {
    num: "03",
    title: "We Build Everything",
    body: "Design, full-stack development, QA, and deployment. Our senior engineers handle 100% of the technical execution.",
    cue: "Full-stack ownership",
    accent: "#0891b2",
  },
  {
    num: "04",
    title: "You Deliver & Bill",
    body: "Ship the final product under your agency brand. You present it to the client, you invoice them, and you keep the full margin.",
    cue: "Your brand & margins",
    accent: "#059669",
  },
  {
    num: "05",
    title: "Earn Extra Money Without Handling Tech",
    body: "Scale your revenue without hiring a single developer or managing any technical headaches. Bring the client, we do the heavy lifting.",
    cue: "Zero tech headaches",
    accent: "#b45309",
  },
];

const CYCLE_MS = 2800;

export default function Workflow() {
  const [active, setActive] = useState(0);
  const [prog, setProg] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cycleRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number>(0);
  const hoverRef = useRef(false);

  /* ── 1. Scroll animations for falling cards ── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // Start tracking when the section is further up the screen (starts later)
    // End tracking when the section hits the upper third of the screen
    offset: ["start 85%", "start 25%"],
  });

  // A very heavy, fluid spring for cinematic momentum
  const smoothY = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 18,
    mass: 1.2,
    restDelta: 0.001,
  });

  /* ── 2. Auto-cycle logic (only starts after scroll entrance finishes) ── */
  const kick = useCallback((idx: number) => {
    if (cycleRef.current) clearTimeout(cycleRef.current);
    cancelAnimationFrame(rafRef.current);
    setProg(0);
    const t0 = performance.now();
    const frame = (now: number) => {
      const p = Math.min(((now - t0) / CYCLE_MS) * 100, 100);
      setProg(p);
      if (p < 100) rafRef.current = requestAnimationFrame(frame);
    };
    rafRef.current = requestAnimationFrame(frame);
    cycleRef.current = setTimeout(() => {
      if (!hoverRef.current) setActive((idx + 1) % STEPS.length);
    }, CYCLE_MS);
  }, []);

  const [canAutoPlay, setCanAutoPlay] = useState(false);

  // Monitor the scroll progress; once it hits 1 (cards settled), unlock auto-play
  useEffect(() => {
    const unsub = smoothY.on("change", (v) => {
      if (v > 0.98 && !canAutoPlay) {
        setCanAutoPlay(true);
      }
    });
    return () => unsub();
  }, [smoothY, canAutoPlay]);

  useEffect(() => {
    if (canAutoPlay) kick(active);
    return () => {
      if (cycleRef.current) clearTimeout(cycleRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [active, canAutoPlay, kick]);

  const select = (i: number) => {
    if (!canAutoPlay) return;
    setActive(i);
    kick(i);
  };

  return (
    <>
      <style>{`
        /* ── section ─────────────────────────────────────────────── */
        .wf-section {
          background: #F5F2EC;
          /* Taller top padding because cards "fall" into here from above */
          padding-top: 80px;
          padding-bottom: 120px;
          position: relative;
          z-index: 20; /* Keep above hero if they overlap */
          overflow-x: hidden; /* Prevent horizontal scroll while letting cards bleed out top */
          overflow-y: visible;
          margin-top: -100px; /* Pull it up into the hero section slightly */
          transition: background-color 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s;
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        @media (max-width: 767px) {
           .wf-section { padding-top: 60px; padding-bottom: 80px; margin-top: -50px; }
        }

        /* ── bg glow ─────────────────────────────────────────────── */
        .wf-glow {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background-image: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,134,10,0.07) 0%, transparent 68%);
          pointer-events: none; z-index: 0;
        }

        /* ── text block ──────────────────────────────────────────── */
        .wf-header-wrap {
          position: relative; z-index: 10;
          margin-bottom: 80px;
        }

        .wf-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 5px 14px 5px 10px; border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.05);
          background: rgba(0,0,0,0.02);
          font-size: 11.5px; font-weight: 500; color: #475569;
          letter-spacing: .03em; backdrop-filter: blur(8px);
          box-shadow: 0 1px 4px rgba(0,0,0,.02);
        }
        .wf-live {
          width: 6px; height: 6px; border-radius: 50%;
          background: #C8860A;
          animation: wfpulse 2s ease-in-out infinite;
          box-shadow: 0 0 0 3px rgba(37,99,235,.2);
        }
        @keyframes wfpulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(37,99,235,.18); }
          50%      { box-shadow: 0 0 0 7px rgba(37,99,235,0); }
        }

        /* ── desktop accordion container ────────────────────────── */
        .wf-accord {
          display: flex; gap: 6px; height: 320px;
          position: relative; z-index: 30;
          /* perspective for 3D falling */
          perspective: 1000px;
        }
        @media (max-width: 767px) { .wf-accord { display: none; } }

        /* ── panel base (framer motion controls translation/rotation) */
        .wf-panel {
          position: relative; overflow: hidden;
          border-radius: 16px; cursor: pointer; flex-shrink: 0;
          flex-grow: 1;
          border: 1px solid rgba(200,134,10,0.12);
          background: #FFFDF8;
          box-shadow: 0 8px 32px rgba(200,134,10,0.10), 0 0 0 1px rgba(200,134,10,0.06);
          transition:
            flex-grow .45s cubic-bezier(.65,0,.35,1),
            border-color .35s ease,
            box-shadow .35s ease;
          will-change: flex-grow, transform, opacity;
          transform-origin: center bottom;
        }

        .wf-panel.is-active {
          flex-grow: 4.8;
          border-color: rgba(200,134,10,0.28);
          box-shadow: 0 20px 60px rgba(200,134,10,0.18), 0 0 0 1px rgba(200,134,10,0.16);
        }

        /* ── inactive face ────────────────────────────────────────── */
        .wf-idle {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          transition: opacity .3s ease;
        }
        .wf-panel.is-active .wf-idle { opacity: 0; pointer-events: none; }

        .wf-idle-n {
          font-size: 38px; font-weight: 900;
          letter-spacing: -0.055em; line-height: 1; color: rgba(0,0,0,0.05);
          transition: color .25s ease, transform .3s cubic-bezier(.22,1,.36,1);
        }
        .wf-panel:hover:not(.is-active) .wf-idle-n {
          color: rgba(0,0,0,0.08); transform: scale(1.08);
        }

        /* ── active content mask ──────────────────────────────────── */
        .wf-body {
          position: absolute; inset: 0;
          padding: 24px 26px;
          display: flex; flex-direction: column; justify-content: space-between;
          pointer-events: none;
        }
        .wf-panel.is-active .wf-body { pointer-events: auto; }

        .wf-cue-wrap { overflow: hidden; height: 16px; }
        .wf-cue {
          font-size: 10.5px; font-weight: 800;
          letter-spacing: 0.1em; text-transform: uppercase;
          transform: translateY(16px);
          transition: transform .4s cubic-bezier(.22,1,.36,1) .05s;
          display: block; line-height: 16px;
        }
        .wf-panel.is-active .wf-cue { transform: translateY(0); }

        .wf-title-clip {
          clip-path: inset(0 100% 0 0);
          transition: clip-path .45s cubic-bezier(.22,1,.36,1) .12s;
        }
        .wf-panel.is-active .wf-title-clip { clip-path: inset(0 0% 0 0); }
        .wf-title {
          font-size: clamp(16px, 1.5vw, 19px);
          font-weight: 800; color: #000;
          letter-spacing: -0.025em; line-height: 1.2;
          margin-top: 6px;
        }

        .wf-div {
          height: 1px; transform-origin: left; transform: scaleX(0);
          transition: transform .45s cubic-bezier(.22,1,.36,1) .22s;
        }
        .wf-panel.is-active .wf-div { transform: scaleX(1); }

        .wf-desc {
          font-size: 13px; color: #475569; line-height: 1.72;
          opacity: 0; transform: translateY(8px);
          transition: opacity .45s cubic-bezier(.22,1,.36,1) .28s,
                      transform .45s cubic-bezier(.22,1,.36,1) .28s;
        }
        .wf-panel.is-active .wf-desc { opacity: 1; transform: none; }

        .wf-ghost {
          position: absolute; bottom: -8px; right: 8px;
          font-size: 90px; font-weight: 900;
          letter-spacing: -0.06em; line-height: 1;
          opacity: 0; transform: scale(0.7) translateY(12px);
          pointer-events: none; user-select: none;
          transition: opacity .45s cubic-bezier(.22,1,.36,1) .06s,
                      transform .45s cubic-bezier(.22,1,.36,1) .06s;
        }
        .wf-panel.is-active .wf-ghost { opacity: 0.035; transform: none; }

        .wf-bar {
          position: absolute; bottom: 0; left: 0; right: 0; height: 2.5px;
          background: transparent; border-radius: 0 0 16px 16px; overflow: hidden;
          opacity: 0; transition: opacity .2s ease;
        }
        .wf-panel.is-active .wf-bar { opacity: 1; }
        .wf-bar-fill {
          height: 100%; border-radius: inherit;
          transition: width .08s linear;
        }

        /* ── pips nav ────────────────────────────────────────────── */
        .wf-pip {
          cursor: pointer; height: 3px; border-radius: 99px;
          background: rgba(0,0,0,0.05); flex: 1;
          transition: background .3s ease, transform .35s cubic-bezier(.22,1,.36,1);
        }
        .wf-pip.is-active { transform: scaleY(1.6); }

        /* ── mobile fallback ─────────────────────────────────────── */
        .wf-mob { display: none; flex-direction: column; gap: 4px; }
        @media (max-width: 767px) { .wf-mob { display: flex; } }

        .wf-mob-card {
          border-radius: 13px; overflow: hidden;
          background: #FFFDF8; border: 1px solid rgba(200,134,10,0.12);
          box-shadow: 0 4px 14px rgba(200,134,10,0.08);
          transition: border-color .28s, box-shadow .28s;
        }
        .wf-mob-card.is-active {
          border-color: rgba(200,134,10,0.28);
          box-shadow: 0 6px 22px rgba(200,134,10,0.16);
        }
        .wf-mob-row {
          display: flex; align-items: center; gap: 13px;
          padding: 14px 16px; cursor: pointer;
        }
        .wf-mob-ring {
          width: 30px; height: 30px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 10.5px; font-weight: 800; flex-shrink: 0;
          background: rgba(200,134,10,0.10); color: #C8860A;
          border: 1px solid rgba(37,99,235,0.14);
          transition: background .28s, color .28s, border-color .28s;
        }
        .wf-mob-card.is-active .wf-mob-ring {
          background: #C8860A; color: #fff; border-color: transparent;
        }
        .wf-mob-expand {
          display: grid; grid-template-rows: 0fr;
          transition: grid-template-rows .4s cubic-bezier(.22,1,.36,1);
        }
        .wf-mob-expand.open { grid-template-rows: 1fr; }
        .wf-mob-inner { overflow: hidden; }

      `}</style>

      <section
        ref={sectionRef}
        id="how-we-work"
        className="wf-section overflow-hidden max-w-[100vw] overflow-x-hidden"
      >
        <div className="wf-glow" />

        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* ── Text block (simple CSS entrance tracking the same scroll progress) ── */}
          <motion.div
            className="wf-header-wrap flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
            style={{
              opacity: useTransform(smoothY, [0, 0.4], [0, 1]),
              y: useTransform(smoothY, [0, 0.4], [40, 0]),
            }}
          >
            <div className="flex flex-col gap-3">
              <div>
                <span className="wf-pill">
                  <span className="wf-live" />
                  How It Works
                </span>
              </div>
              <h2 className="text-[1.8rem] sm:text-[2.2rem] font-black text-black leading-[1.06] tracking-[-0.034em]">
                How We Work.{" "}
                <span
                  style={{
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  With Agencies .
                </span>
              </h2>
            </div>
            <p className="text-[13.5px] text-gray-600 leading-[1.8] max-w-[240px] sm:text-right">
              A 5-step process from
              <br />
              handshake to pure profit.
            </p>
          </motion.div>

          {/* ── Simplified Workflow – Steps Overview ── */}
          <motion.div
            className="mb-16"
            style={{
              opacity: useTransform(smoothY, [0, 0.4], [0, 1]),
              y: useTransform(smoothY, [0, 0.4], [40, 0]),
            }}
          >
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[rgba(200,134,10,0.2)] via-[rgba(200,134,10,0.4)] to-[rgba(200,134,10,0.2)] z-0"></div>

              <div className="grid md:grid-cols-5 gap-4 relative z-10">
                {[
                  {
                    step: "1",
                    title: "Agency Closes Client",
                    description: "You land a deal requiring web development.",
                  },
                  {
                    step: "2",
                    title: "Share Scope",
                    description:
                      "Send us detailed requirements, wireframes, or brief.",
                  },
                  {
                    step: "3",
                    title: "Estimate & Timeline",
                    description:
                      "We provide clear estimate, timeline, and roadmap.",
                  },
                  {
                    step: "4",
                    title: "Development & Staging",
                    description:
                      "Weekly updates, dedicated staging environment for review.",
                  },
                  {
                    step: "5",
                    title: "Deployment & Support",
                    description:
                      "Clean handover, production deployment, ongoing support.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg" style={{background:'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)'}}>
                      {item.step}
                    </div>
                    <h4 className="font-bold text-black text-sm">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Desktop Falling Cards Accordion ── */}
          <div
            ref={containerRef}
            className="wf-accord"
            style={{ perspective: "1500px" }}
          >
            {STEPS.map((step, i) => {
              const isActive = active === i;

              const offsetMultiplier = i - 2; // -2, -1, 0, 1, 2

              // Extreme fall: start from off-screen top (hero section), spin heavily
              const startY = -1200 - Math.abs(offsetMultiplier) * 200;
              const startX = offsetMultiplier * 160;
              const startRotZ = offsetMultiplier * 45; // extreme tilt
              const startRotY = offsetMultiplier * -30; // heavy 3D swing
              const startRotX = 80; // almost flat
              const startScale = 0.3; // tiny up high
              const startOpacity = 0;

              // Center arrives first, edges float in later
              const startDomain = 0.0;
              const endDomain = 0.7 + Math.abs(offsetMultiplier) * 0.15; // Staggered landings up to 1.0

              const cardY = useTransform(
                smoothY,
                [startDomain, endDomain],
                [startY, 0],
              );
              const cardX = useTransform(
                smoothY,
                [startDomain, endDomain],
                [startX, 0],
              );
              const cardRotZ = useTransform(
                smoothY,
                [startDomain, endDomain],
                [startRotZ, 0],
              );
              const cardRotY = useTransform(
                smoothY,
                [startDomain, endDomain],
                [startRotY, 0],
              );
              const cardRotX = useTransform(
                smoothY,
                [startDomain, endDomain],
                [startRotX, 0],
              );
              const cardScale = useTransform(
                smoothY,
                [startDomain, endDomain],
                [startScale, 1],
              );
              const cardOpacity = useTransform(
                smoothY,
                [startDomain, endDomain],
                [startOpacity, 1],
              );

              return (
                <motion.div
                  key={step.num}
                  className={`wf-panel ${isActive ? "is-active" : ""}`}
                  onClick={() => select(i)}
                  onMouseEnter={() => {
                    hoverRef.current = true;
                    select(i);
                  }}
                  onMouseLeave={() => {
                    hoverRef.current = false;
                  }}
                  style={{
                    y: cardY,
                    x: cardX,
                    rotateZ: cardRotZ,
                    rotateY: cardRotY,
                    rotateX: cardRotX,
                    scale: cardScale,
                    opacity: cardOpacity,
                    // Subtle drop shadow matching the height
                    boxShadow: useTransform(
                      smoothY,
                      [startDomain, endDomain],
                      [
                        "0 100px 100px -20px rgba(0,0,0,0.3)",
                        "0 12px 40px rgba(0,0,0,0.08)",
                      ],
                    ),
                  }}
                >
                  <span className="wf-ghost" style={{ color: step.accent }}>
                    {step.num}
                  </span>

                  <div className="wf-idle">
                    <span
                      className="wf-idle-n"
                      style={{
                        color: isActive ? step.accent + "22" : undefined,
                      }}
                    >
                      {step.num}
                    </span>
                  </div>

                  <div className="wf-body">
                    <div>
                      <div className="wf-cue-wrap">
                        <span className="wf-cue" style={{ color: step.accent }}>
                          {step.num} · {step.cue}
                        </span>
                      </div>
                      <div className="wf-title-clip">
                        <h3 className="wf-title">{step.title}</h3>
                      </div>
                    </div>
                    <div
                      className="wf-div"
                      style={{
                        background: `linear-gradient(90deg, ${step.accent}55, transparent)`,
                      }}
                    />
                    <p className="wf-desc">{step.body}</p>
                  </div>

                  <div className="wf-bar">
                    <div
                      className="wf-bar-fill"
                      style={{
                        width: isActive ? `${prog}%` : "0%",
                        background: `linear-gradient(90deg, ${step.accent}, ${step.accent}88)`,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Pip nav (also fades in via scroll) ── */}
          <motion.div
            className="hidden md:flex items-center gap-2 mt-5"
            style={{ opacity: useTransform(smoothY, [0.8, 1], [0, 1]) }}
          >
            {STEPS.map((step, i) => (
              <button
                key={i}
                className={`wf-pip ${active === i ? "is-active" : ""}`}
                style={{ background: active === i ? step.accent : undefined }}
                onClick={() => select(i)}
                aria-label={`Step ${i + 1}`}
              />
            ))}
          </motion.div>

          {/* ── Mobile fallback (standard entrance) ── */}
          <div className="wf-mob mt-4">
            {/* Simple fade-in sequence for mobile so it's not messy */}
            {STEPS.map((step, i) => {
              const isActive = active === i;
              return (
                <motion.div
                  key={step.num}
                  className={`wf-mob-card ${isActive ? "is-active" : ""}`}
                  style={{
                    opacity: useTransform(
                      smoothY,
                      [0.2 + i * 0.1, 0.4 + i * 0.1],
                      [0, 1],
                    ),
                    y: useTransform(
                      smoothY,
                      [0.2 + i * 0.1, 0.4 + i * 0.1],
                      [20, 0],
                    ),
                  }}
                >
                  <div className="wf-mob-row" onClick={() => select(i)}>
                    <span className="wf-mob-ring">{step.num}</span>
                    <div className="flex-1 min-w-0">
                      <div
                        style={{
                          fontSize: 13.5,
                          fontWeight: 800,
                          color: "#000",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {step.title}
                      </div>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{
                        flexShrink: 0,
                        color: "#64748b",
                        transition: "transform .35s",
                        transform: isActive ? "rotate(180deg)" : "none",
                      }}
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className={`wf-mob-expand ${isActive ? "open" : ""}`}>
                    <div className="wf-mob-inner">
                      <p
                        style={{
                          padding: "2px 16px 16px",
                          fontSize: 13,
                          color: "#475569",
                          lineHeight: 1.72,
                        }}
                      >
                        {step.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
