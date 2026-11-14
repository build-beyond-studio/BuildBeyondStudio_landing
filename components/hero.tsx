"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ShieldCheck, FileCode, Receipt } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mainRaf = useRef<number>(0);

  /* entrance refs */
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const trustStripRef = useRef<HTMLDivElement>(null);

  /* ── Staggered entrance ─────────────────────────────────────────── */
  useEffect(() => {
    const items = [
      { el: eyebrowRef.current, delay: 0 },
      { el: titleRef.current, delay: 80 },
      { el: subheadRef.current, delay: 200 },
      { el: buttonsRef.current, delay: 320 },
      { el: trustStripRef.current, delay: 440 },
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
        const sy = window.scrollY;
        const prog = Math.min(sy / (H * 0.8), 1);
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${sy * 0.15}px)`;
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

  const handleCtaClick = (label: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "cta_click", {
        page_location: window.location.pathname,
        cta_label: label,
      });
    }
  };

  return (
    <>
      <style>{`
        /* ── section ───────────────────────────────────────── */
        .hero-section {
          position: relative;
          background: #e3dbc8;
          overflow: hidden;
          min-height: 100vh;
          padding-top: 12px;
          padding-bottom: 40px;
        }

        .hero-video-bg {
          position: absolute;
          bottom: 18%;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center bottom;
          z-index: 0;
          pointer-events: none;
          mix-blend-mode: darken;
        }

        @media (min-width: 1024px) {
          .hero-video-bg {
            bottom: 5%;
          }
        }

        @media (min-width: 768px) {
          .hero-section {
            min-height: 105vh;
            padding-top: 56px;
            padding-bottom: 110px;
          }
        }

        /* ── Subtle warm ambient glow ───────────────────────── */
        .hero-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 50% -10%, rgba(200, 134, 10, 0.14) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 85% 90%, rgba(200, 134, 10, 0.07) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── entrance ──────────────────────────────────────── */
        .hero-pre {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }
        .hero-pre.hero-enter {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── shimmer gradient on headline ──────────────────── */
        .gradient-text {
          background: linear-gradient(130deg,
            #A06A00 0%, #C8860A 25%, #E8A020 50%, #C8860A 75%, #A06A00 100%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 7s linear infinite;
        }
        @keyframes shimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 250% center; }
        }

        /* ── eyebrow pill ──────────────────────────────────── */
        .eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px 6px 12px;
          border-radius: 999px;
          border: 1px solid rgba(200, 134, 10, 0.25);
          background: rgba(255, 255, 255, 0.65);
          font-size: 9.5px;
          font-weight: 700;
          color: #7A5200;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          backdrop-filter: blur(8px);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
          max-width: 94vw;
          line-height: 1.3;
          text-align: center;
        }

        @media (min-width: 640px) {
          .eyebrow-pill {
            font-size: 11.5px;
            padding: 6px 16px 6px 14px;
            gap: 9px;
            letter-spacing: 0.04em;
          }
        }
        .live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          flex-shrink: 0;
          margin-left: 3px;
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.25);
          animation: livePulse 2s ease-in-out infinite;
        }
        @keyframes livePulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.25); }
          50%      { box-shadow: 0 0 0 7px rgba(34, 197, 94, 0); }
        }

        /* ── CTA primary ───────────────────────────────────── */
        .btn-primary {
          background: linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%);
          box-shadow: 0 4px 20px rgba(200, 134, 10, 0.38);
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .btn-primary:hover {
          box-shadow: 0 8px 30px rgba(200, 134, 10, 0.52);
          transform: translateY(-2px);
        }

        /* ── Trust strip card ──────────────────────────────── */
        .hero-trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(200, 134, 10, 0.2);
          border-radius: 12px;
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
          font-size: 12px;
          font-weight: 600;
          color: #2D251A;
          text-align: left;
        }

        @media (min-width: 640px) {
          .hero-trust-item {
            gap: 10px;
            padding: 10px 18px;
            font-size: 13px;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="hero-section relative flex flex-col w-screen max-w-[100%]"
      >
        <video
          className="hero-video-bg"
          autoPlay
          muted
          playsInline
        >
          <source src="https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/certificates/WhatsApp%20Video%202026-09-06%20at%201.16.14%20AM.mp4" />
        </video>

        {/* ── Centered content ── */}
        <div
          ref={contentRef}
          className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8
                     flex flex-col items-center text-center gap-4 sm:gap-7
                     will-change-[transform,opacity]"
        >
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="hero-pre">
            <span className="eyebrow-pill">
              <span className="live-dot" />
              White-label engineering partner for marketing agencies
            </span>
          </div>

          {/* Headline (Single H1) */}
          <h1
            ref={titleRef}
            className="hero-pre text-[2rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.2rem]
                       font-black text-black leading-[1.08] tracking-[-0.038em] text-center max-w-4xl"
          >
            White-Label Development Partner for{" "}
            <span className="gradient-text">Marketing Agencies</span>
          </h1>

          {/* Subheading */}
          <p
            ref={subheadRef}
            className="hero-pre text-[12.5px] sm:text-[14px] md:text-[15px] text-[#1c1917] font-semibold max-w-[295px] sm:max-w-[340px] md:max-w-[390px] mx-auto leading-tight sm:leading-relaxed -mt-1 sm:mt-0"
          >
            BBS is the invisible engineering team behind your agency. We build custom websites, stores and web apps, and handle DevOps and tracking, under your brand at fixed partner prices.
          </p>

          {/* CTAs */}
          <div
            ref={buttonsRef}
            className="hero-pre flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3.5 w-full sm:w-auto -mt-1 sm:mt-2"
          >
            <Link
              href="/contact"
              onClick={() => handleCtaClick("Hero - Send a Project Brief")}
              className="btn-primary text-white px-7 sm:px-8 py-2.5 sm:py-3.5 rounded-xl font-bold text-[13.5px] sm:text-[14px] w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              Send a Project Brief
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/how-we-partner"
              onClick={() => handleCtaClick("Hero - See How It Works")}
              className="border border-black/15 text-gray-800 px-7 sm:px-8 py-2.5 sm:py-3.5
                         rounded-xl font-bold text-[13.5px] sm:text-[14px] w-full sm:w-auto
                         bg-white/90 hover:border-black/25 hover:bg-white
                         shadow-[0_2px_8px_rgba(0,0,0,0.05)]
                         hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]
                         transition-all duration-300 inline-flex items-center justify-center"
            >
              See How It Works
            </Link>
          </div>

          {/* Trust Strip — exactly three items */}
          <div
            ref={trustStripRef}
            className="hero-pre grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-3 w-full max-w-3xl -mt-1 sm:mt-4 pt-0 sm:pt-4 border-t-0 sm:border-t border-black/10"
          >
            <div className="hero-trust-item">
              <ShieldCheck className="w-5 h-5 text-[#C8860A] shrink-0" />
              <span>NDA before project details</span>
            </div>
            <div className="hero-trust-item">
              <FileCode className="w-5 h-5 text-[#C8860A] shrink-0" />
              <span>Code and IP handed over</span>
            </div>
            <div className="hero-trust-item">
              <Receipt className="w-5 h-5 text-[#C8860A] shrink-0" />
              <span>Fixed quote for your approved scope</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
