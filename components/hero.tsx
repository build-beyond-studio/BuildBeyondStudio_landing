"use client";

import { useEffect, useRef, useCallback } from "react";
import BestQuotationBadge from "@/components/BestQuotationBadge";

const EMAIL = "admin@buildbeyondstudio.com";

const CRICKET_BAT_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg transform='rotate(-35 16 16)'%3E%3Crect x='11' y='2' width='10' height='18' rx='3' fill='%23c8860a' stroke='%237a4f00' stroke-width='1'/%3E%3Crect x='13' y='19' width='6' height='11' rx='1.5' fill='%23f5e6c8' stroke='%237a4f00' stroke-width='0.8'/%3E%3Crect x='14.5' y='8' width='3' height='8' rx='1' fill='%23a06a00' opacity='0.5'/%3E%3C/g%3E%3C/svg%3E") 4 4, auto`;

/* ── Magnetic button ──────────────────────────────────────────────── */
function useMagnetic(s = 0.38) {
  const ref = useRef<HTMLButtonElement>(null);
  const onMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * s}px,${(e.clientY - r.top - r.height / 2) * s}px)`;
    },
    [s],
  );
  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "";
  }, []);
  return { ref, onMove, onLeave };
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mainRaf = useRef<number>(0);

  /* entrance refs */
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const mag1 = useMagnetic(0.42);
  const mag2 = useMagnetic(0.42);

  /* ── Staggered entrance ─────────────────────────────────────────── */
  useEffect(() => {
    const items = [
      { el: eyebrowRef.current, delay: 0 },
      { el: titleRef.current, delay: 80 },
      { el: line2Ref.current, delay: 200 },
      { el: subheadRef.current, delay: 260 },
      { el: subtitleRef.current, delay: 360 },
      { el: badgesRef.current, delay: 480 },
      { el: buttonsRef.current, delay: 580 },
      { el: emailRef.current, delay: 670 },
      { el: scrollRef.current, delay: 780 },
    ];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const item = items.find((i) => i.el === entry.target);
          if (!item) return;
          setTimeout(
            () => (entry.target as HTMLElement).classList.add("hero-enter"),
            item.delay,
          );
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.05 },
    );
    items.forEach(({ el }) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* ── Parallax on scroll ─────────────────────────────────────────── */
  useEffect(() => {
    const loop = () => {
      const section = sectionRef.current;
      if (section) {
        const { height: H } = section.getBoundingClientRect();

        /* ─ Scroll parallax on content */
        const sy = window.scrollY;
        const prog = Math.min(sy / (H * 0.8), 1);
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${sy * 0.2}px)`;
          contentRef.current.style.opacity = `${1 - prog}`;
        }
      }
      mainRaf.current = requestAnimationFrame(loop);
    };
    mainRaf.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(mainRaf.current);
    };
  }, []);

  return (
    <>
      <style>{`
        /* ── section ───────────────────────────────────────── */
        .hero-section {
          position: relative;
          background: #e3dbc8ff;
          overflow: hidden;
          min-height: 105vh;
          padding-top: 20px;
        }

        .hero-video-bg {
          position: absolute;
          bottom: 22%; /* Shifted up slightly for mobile */
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center bottom;
          z-index: 0;
          pointer-events: none;
          mix-blend-mode: darken; /* Blends the video background seamlessly */
        }
        
        @media (min-width: 1024px) {
          .hero-video-bg {
            bottom: 5%; /* Shift down for desktop */
          }
        }


        /* ── entrance ──────────────────────────────────────── */
        .hero-pre {
          opacity: 0; transform: translateY(22px);
          transition: opacity .9s cubic-bezier(.22,1,.36,1),
                      transform .9s cubic-bezier(.22,1,.36,1);
          will-change: opacity, transform;
        }
        .hero-pre.hero-enter { opacity: 1; transform: translateY(0); }

        /* ── shimmer gradient on headline ──────────────────── */
        .gradient-text {
          background: linear-gradient(130deg,
            #A06A00 0%, #C8860A 25%, #E8A020 50%, #C8860A 75%, #A06A00 100%);
          background-size: 250% auto;
          -webkit-background-clip: text; background-clip: text;
          color: transparent;
          animation: shimmer 6s linear infinite;
        }
        @keyframes shimmer {
          0%   { background-position:   0% center; }
          100% { background-position: 250% center; }
        }

        /* ── gradient divider ──────────────────────────────── */
        .hero-divider {
          width: 52px; height: 2px; border-radius: 99px;
          background: linear-gradient(90deg,#C8860A,#E8A020);
        }

        /* ── badge ─────────────────────────────────────────── */
        .badge-sep { width:1px; height:13px; background:#e2e8f0; flex-shrink:0; }
        .badge-item {
          display:flex; align-items:center; gap:6px;
          font-size:12px; font-weight:600; color:#374151;
        }

        /* ── eyebrow pill ──────────────────────────────────── */
        .eyebrow-pill {
          display:inline-flex; align-items:center; gap:8px;
          padding:5px 14px 5px 8px; border-radius:999px;
          border:1px solid rgba(0,0,0,0.08);
          background:rgba(0,0,0,0.02);
          font-size:11.5px; font-weight:500; color:#4b5563;
          letter-spacing:.03em; backdrop-filter:blur(8px);
          box-shadow:0 1px 4px rgba(0,0,0,.03);
        }
        .live-dot {
          width:6px; height:6px; border-radius:50%;
          background:#22c55e; flex-shrink:0;
          animation:livePulse 2s ease-in-out infinite;
          box-shadow:0 0 0 3px rgba(34,197,94,.2);
        }
        @keyframes livePulse{
          0%,100%{box-shadow:0 0 0 3px rgba(34,197,94,.25);}
          50%    {box-shadow:0 0 0 7px rgba(34,197,94,0);}
        }

        /* ── stat pill ─────────────────────────────────────── */
        .stat-pill {
          display:inline-flex; align-items:center; gap:5px;
          padding:4px 11px; border-radius:999px;
          background:rgba(0,0,0,0.02);
          border:1px solid rgba(0,0,0,0.08);
          font-size:11px; font-weight:600; color:#4b5563;
          backdrop-filter:blur(6px);
          box-shadow:0 1px 3px rgba(0,0,0,.02);
        }

        /* ── CTA primary ───────────────────────────────────── */
        .btn-primary {
          background: linear-gradient(135deg,#A06A00 0%,#C8860A 60%,#E8A020 100%);
          box-shadow: 0 4px 20px rgba(200,134,10,0.38);
          transition: box-shadow .25s ease, transform .3s cubic-bezier(.22,1,.36,1);
        }
        .btn-primary:hover { box-shadow:0 8px 36px rgba(200,134,10,0.55); }

        /* ── mag button ────────────────────────────────────── */
        .mag-btn {
          will-change:transform;
          transition:transform .3s cubic-bezier(.22,1,.36,1),
                     box-shadow .25s ease, background .18s ease, border-color .18s ease;
        }

        /* ── Revenue Model button ───────────────────────────── */
        .btn-revenue {
          background: #fff;
          color: #C8860A;
          border: 2px solid rgba(200,134,10,0.45);
          box-shadow: 0 0 0 4px rgba(200,134,10,0.10), 0 4px 20px rgba(200,134,10,0.15);
          animation: revBtnPulse 2.8s ease-in-out infinite;
        }
        .btn-revenue:hover {
          background: rgba(200,134,10,0.04);
          border-color: rgba(200,134,10,0.7);
          box-shadow: 0 0 0 6px rgba(200,134,10,0.08), 0 6px 28px rgba(200,134,10,0.25);
        }
        @keyframes revBtnPulse {
          0%,100% { box-shadow: 0 0 0 4px rgba(200,134,10,0.10), 0 4px 20px rgba(200,134,10,0.15); }
          50%      { box-shadow: 0 0 0 8px rgba(200,134,10,0.06), 0 4px 28px rgba(200,134,10,0.22); }
        }

        /* ── scroll caret ──────────────────────────────────── */
        @keyframes caretDrop {
          0%,100%{transform:translateY(0);opacity:.35;}
          55%    {transform:translateY(8px);opacity:.9;}
        }
        .scroll-caret { animation:caretDrop 2.1s ease-in-out infinite; }
      `}</style>

      <section
        ref={sectionRef}
        className="hero-section relative flex flex-col w-screen max-w-[100%]"
        style={{ cursor: CRICKET_BAT_CURSOR }}
      >
        <video
          className="hero-video-bg"
          autoPlay
          muted
          playsInline
        >
          <source src="https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/certificates/WhatsApp%20Video%202026-09-06%20at%201.16.14%20AM.mp4"/>
        </video>

        {/* ── Centered content ── */}
        <div
          ref={contentRef}
          className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-10
                     flex flex-col items-center text-center gap-5 sm:gap-5
                     will-change-[transform,opacity] pt-6 sm:pt-8 pb-40"
        >


          {/* Headline */}
          <div className="flex flex-col items-center gap-3">
            <h1
              ref={titleRef}
              className="hero-pre text-[1.95rem] sm:text-[2.8rem] md:text-[3.1rem] lg:text-[3.4rem]
                         font-black text-black leading-[1.08] tracking-[-0.038em] text-center"
            >
              Outsource High-Ticket Services With Us —{" "}
              <span
                ref={line2Ref}
                className="hero-pre gradient-text"
                style={{ display: "inline" }}
              >
                and Expand Your Client Base at Zero Additional Cost.
              </span>
            </h1>
            <p
              ref={subheadRef}
              className="hero-pre text-[17px] sm:text-[19px] font-semibold"
              style={{
                color: '#C8860A',
                letterSpacing: '0.01em',
                transitionDelay: '260ms',
              }}
            >
              Strategic Technical Growth Partner for Marketing Agencies
            </p>
          </div>
          {/* Service highlights */}
          <div
            ref={badgesRef}
            className="hero-pre flex flex-row md:flex-col items-center justify-center gap-[6px] md:gap-3 mt-3 md:mt-7 flex-nowrap"
          >
            <div className="flex items-center justify-center gap-[6px] md:gap-2 flex-nowrap">
              {[
                {
                  label: "Development",
                  icon: "</>",
                  accent: "#C8860A",
                  bg: "rgba(200,134,10,0.07)",
                  border: "rgba(200,134,10,0.18)",
                },
                {
                  label: "Deployment",
                  icon: "⬆",
                  accent: "#A06A00",
                  bg: "rgba(160,106,0,0.07)",
                  border: "rgba(160,106,0,0.18)",
                }
              ].map(({ label, icon, accent, bg, border }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-[3px] md:gap-[8px] px-[8px] md:px-[20px] py-[3px] md:py-[8px] rounded-full text-[9px] md:text-[14px] font-bold tracking-[.02em] backdrop-blur-md whitespace-nowrap"
                  style={{
                    background: bg,
                    border: `1px solid ${border}`,
                    color: accent,
                  }}
                >
                  <span className="text-[8px] md:text-[13px] opacity-90">{icon}</span>
                  {label}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-center gap-[6px] md:gap-2 flex-nowrap">
              {[
                {
                  label: "Maintenance",
                  icon: "⚙",
                  accent: "#E8A020",
                  bg: "rgba(232,160,32,0.07)",
                  border: "rgba(232,160,32,0.18)",
                },
              ].map(({ label, icon, accent, bg, border }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-[3px] md:gap-[8px] px-[8px] md:px-[20px] py-[3px] md:py-[8px] rounded-full text-[9px] md:text-[14px] font-bold tracking-[.02em] backdrop-blur-md whitespace-nowrap"
                  style={{
                    background: bg,
                    border: `1px solid ${border}`,
                    color: accent,
                  }}
                >
                  <span className="text-[8px] md:text-[13px] opacity-90">{icon}</span>
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div
            ref={buttonsRef}
            className="hero-pre flex flex-col sm:flex-row items-center justify-center gap-3
                       w-full sm:w-auto"
          >


            {/* Revenue Model — highlighted primary with pulse */}
            <button
              ref={mag2.ref}
              onMouseMove={mag2.onMove}
              onMouseLeave={mag2.onLeave}
              onClick={() =>
                document
                  .getElementById("revenue")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mag-btn btn-primary text-white px-9 py-3.5 rounded-xl font-bold text-[13.5px] w-full sm:w-auto"
            >
              Revenue Model →
            </button>

            {/* Book a Call — plain secondary */}
            <button
              ref={mag1.ref}
              onMouseMove={mag1.onMove}
              onMouseLeave={mag1.onLeave}
              onClick={() => {
                window.gtag?.('event', 'whatsapp_click', { button_location: 'hero' });
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mag-btn border border-black/12 text-gray-800 px-9 py-3.5 md:px-5
                         rounded-xl font-bold text-[13.5px] w-full sm:w-auto
                         bg-white hover:border-black/20 hover:bg-gray-50
                         shadow-[0_2px_8px_rgba(0,0,0,0.05)]
                         hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            >
              Book a Strategy Call
            </button>
          </div>

          {/* Email */}
          <div ref={emailRef} className="hero-pre text-[12.5px] text-gray-400 !mt-2 md:!mt-7">
            Prefer email?{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="font-semibold text-[#C8860A] hover:text-[#A06A00] transition-colors
                         underline underline-offset-2 decoration-[rgba(200,134,10,0.3)] hover:decoration-[rgba(200,134,10,0.6)]"
            >
              {EMAIL}
            </a>
          </div>
        </div>


      </section>
    </>
  );
}
