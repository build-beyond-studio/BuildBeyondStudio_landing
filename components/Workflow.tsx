"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { XCircle, UserX, TrendingDown, AlertTriangle } from "lucide-react";

const PROBLEMS = [
  {
    title: "Projects you turn down",
    body: "You say no to custom builds because you lack developers. That revenue goes to full-service competitors.",
    Icon: XCircle,
  },
  {
    title: "Freelancers who disappear",
    body: "Missed deadlines and unreviewed code from unvetted contractors put your client relationship at risk.",
    Icon: UserX,
  },
  {
    title: "Margins that shrink",
    body: "A full-time developer is a fixed cost whether or not projects arrive. Project-based partner pricing keeps your cost tied to revenue.",
    Icon: TrendingDown,
  },
  {
    title: "Launches that go wrong",
    body: "A site that fails during a paid campaign hurts your client and your reputation. BBS tests, deploys and hands over with documentation.",
    Icon: AlertTriangle,
  },
];

export default function Workflow() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === headerRef.current) {
            setHeaderVisible(true);
          } else {
            const idx = cardsRef.current.indexOf(entry.target as HTMLDivElement);
            if (idx >= 0) {
              setVisibleCards((prev) => new Set([...prev, idx]));
            }
          }
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .wf-section {
          background: #F5F2EC;
          padding: 88px 0 72px;
          position: relative;
          z-index: 20;
          overflow: hidden;
        }
        @media (max-width: 767px) {
          .wf-section { padding: 60px 0 48px; }
        }

        .wf-glow {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 50% 0%, rgba(200,134,10,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 20% 80%, rgba(200,134,10,0.03) 0%, transparent 50%);
          pointer-events: none; z-index: 0;
        }

        /* Entrance */
        .wf-fade {
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1),
                      transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .wf-fade.wf-visible { opacity: 1; transform: translateY(0); }
        .wf-card-0 { transition-delay: 0.06s; }
        .wf-card-1 { transition-delay: 0.16s; }
        .wf-card-2 { transition-delay: 0.26s; }
        .wf-card-3 { transition-delay: 0.36s; }

        /* Pill */
        .wf-pill {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 14px 5px 8px; border-radius: 999px;
          border: 1px solid rgba(200,134,10,0.22);
          background: rgba(255,255,255,0.7);
          font-size: 11px; font-weight: 700; color: #7A5200;
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

        /* Card uniform style */
        .wf-card {
          position: relative;
          background: #fff;
          border: 1px solid rgba(200,134,10,0.14);
          border-radius: 20px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s cubic-bezier(0.22,1,0.36,1);
          box-shadow: 0 2px 14px rgba(0,0,0,0.04);
        }
        .wf-card:hover {
          border-color: rgba(200,134,10,0.32);
          box-shadow: 0 16px 40px rgba(200,134,10,0.12);
          transform: translateY(-4px);
        }

        .wf-icon-wrap {
          width: 48px; height: 48px; border-radius: 12px;
          background: rgba(200,134,10,0.08);
          border: 1px solid rgba(200,134,10,0.18);
          display: flex; align-items: center; justify-content: center;
          color: #C8860A;
          margin-bottom: 20px;
        }

        .wf-card-title {
          font-size: 18px; font-weight: 800; color: #111;
          letter-spacing: -0.02em; line-height: 1.3;
          margin-bottom: 10px;
        }

        .wf-card-body {
          font-size: 13.5px; color: #555;
          line-height: 1.65;
          margin-top: auto;
        }
      `}</style>

      <section ref={sectionRef} id="challenges" className="wf-section border-t border-black/5">
        <div className="wf-glow" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          {/* Header */}
          <div
            ref={headerRef}
            className={`wf-fade text-center mb-12 sm:mb-14 ${headerVisible ? "wf-visible" : ""}`}
          >
            <div className="mb-4">
              <span className="wf-pill">
                <span className="wf-dot" />
                Where Agency Delivery Breaks
              </span>
            </div>
            <h2 className="text-2xl sm:text-[2.2rem] md:text-[2.6rem] font-black text-black leading-[1.12] tracking-[-0.032em] mb-3 max-w-3xl mx-auto">
              You Built a Marketing Agency.<br className="hidden sm:inline" />Don't Let Technical Bottlenecks Cap Your Growth.
            </h2>
            <p className="text-[14px] sm:text-[15px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Managing clients and campaigns is your business. When technical delivery stumbles, it hurts client trust and cuts into your margins.
            </p>
          </div>

          {/* Four Uniform Problem Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROBLEMS.map((problem, i) => (
              <div
                key={problem.title}
                ref={(el) => { cardsRef.current[i] = el; }}
                className={`wf-fade wf-card-${i} wf-card ${visibleCards.has(i) ? "wf-visible" : ""}`}
              >
                <div className="wf-icon-wrap">
                  <problem.Icon className="w-6 h-6" />
                </div>
                <h3 className="wf-card-title">{problem.title}</h3>
                <p className="wf-card-body">{problem.body}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA to how we partner */}
          <div className="mt-12 text-center">
            <Link
              href="/how-we-partner"
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#C8860A] hover:text-[#A06A00] transition-colors"
            >
              See how BBS solves these delivery risks
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
