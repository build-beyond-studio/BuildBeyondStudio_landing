"use client";

import { useEffect, useRef, useCallback } from "react";

const EMAIL = "buildbeyondstudio@gmail.com";
const BALL_COUNT = 120;

/* Colorful palette with matching glow colors */
const PALETTE = [
  { fill: "#60a5fa", glow: "rgba(96,165,250,0.7)" },
  { fill: "#a78bfa", glow: "rgba(167,139,250,0.7)" },
  { fill: "#34d399", glow: "rgba(52,211,153,0.7)" },
  { fill: "#f472b6", glow: "rgba(244,114,182,0.7)" },
  { fill: "#38bdf8", glow: "rgba(56,189,248,0.7)" },
  { fill: "#fb923c", glow: "rgba(251,146,60,0.7)" },
  { fill: "#818cf8", glow: "rgba(129,140,248,0.7)" },
  { fill: "#4ade80", glow: "rgba(74,222,128,0.7)" },
  { fill: "#e879f9", glow: "rgba(232,121,249,0.7)" },
  { fill: "#2dd4bf", glow: "rgba(45,212,191,0.7)" },
  { fill: "#facc15", glow: "rgba(250,204,21,0.7)" },
  { fill: "#f87171", glow: "rgba(248,113,113,0.7)" },
];

const CRICKET_BAT_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg transform='rotate(-35 16 16)'%3E%3Crect x='11' y='2' width='10' height='18' rx='3' fill='%23c8860a' stroke='%237a4f00' stroke-width='1'/%3E%3Crect x='13' y='19' width='6' height='11' rx='1.5' fill='%23f5e6c8' stroke='%237a4f00' stroke-width='0.8'/%3E%3Crect x='14.5' y='8' width='3' height='8' rx='1' fill='%23a06a00' opacity='0.5'/%3E%3C/g%3E%3C/svg%3E") 4 4, auto`;

interface Ball {
  x: number;
  y: number; // 0–1 fractions of section size
  vx: number;
  vy: number; // current velocity px/frame
  angle: number; // current natural flight direction (radians)
  angleSpeed: number; // how fast direction slowly rotates
  speed: number; // cruise speed px/frame
  r: number; // radius px
  fill: string;
  glow: string;
}

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
  const particleEls = useRef<(HTMLSpanElement | null)[]>([]);
  const balls = useRef<Ball[]>([]);
  const cursorX = useRef(-9999);
  const cursorY = useRef(-9999);
  const mainRaf = useRef<number>(0);

  /* entrance refs */
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
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
      { el: subtitleRef.current, delay: 340 },
      { el: badgesRef.current, delay: 460 },
      { el: buttonsRef.current, delay: 560 },
      { el: emailRef.current, delay: 650 },
      { el: scrollRef.current, delay: 760 },
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

  /* ── Physics simulation ─────────────────────────────────────────── */
  useEffect(() => {
    /* 1. Initialise balls — all start at y ≈ 0 (navbar top) and fall in */
    balls.current = Array.from({ length: BALL_COUNT }, (_, i) => {
      const c = PALETTE[i % PALETTE.length];
      const angle = Math.random() * Math.PI * 2; // random start direction
      const speed = 0.15 + Math.random() * 0.2; // gentle cruise 0.15–0.35 px/frame
      return {
        x: 0.03 + Math.random() * 0.94, // wide horizontal spread
        y: -0.04 - Math.random() * 0.08, // start just above navbar
        vx: (Math.random() - 0.5) * 2.8, // wide horizontal scatter
        vy: 3.5 + Math.random() * 3.0, // fast fall into section
        angle,
        angleSpeed:
          (Math.random() < 0.5 ? 1 : -1) * // clockwise or counter
          (0.001 + Math.random() * 0.002), //   0.001–0.003 rad/frame (slower turn)
        speed,
        r: 1.5 + Math.random() * 1.5,
        fill: c.fill,
        glow: c.glow,
      };
    });

    /* 2. Style DOM elements */
    balls.current.forEach((ball, i) => {
      const el = particleEls.current[i];
      if (!el) return;
      const d = ball.r * 2;
      el.style.width = `${d}px`;
      el.style.height = `${d}px`;
      el.style.marginLeft = `-${ball.r}px`;
      el.style.marginTop = `-${ball.r}px`;
      el.style.background = ball.fill;
      el.style.boxShadow =
        `0 0 ${ball.r * 3}px ${ball.r * 1.5}px ${ball.glow},` +
        `0 0 ${ball.r * 7}px ${ball.r}px ${ball.glow.replace("0.7", "0.25")}`;
    });

    /* 3. Mouse tracking */
    const onMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      cursorX.current = e.clientX - rect.left;
      cursorY.current = e.clientY - rect.top;
    };
    const onLeave = () => {
      cursorX.current = -9999;
      cursorY.current = -9999;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave, { passive: true });

    /* 4. Physics rAF loop */
    const REPEL_R = 110; // repulsion radius px
    const REPEL_F = 3.8; // repulsion acceleration
    const STEER = 0.018; // how strongly ball steers toward cruise direction
    const RESTITUT = 0.75; // wall bounce energy retention
    const MAX_SPD = 9; // max speed during repulsion

    const loop = () => {
      const section = sectionRef.current;
      if (section) {
        const { width: W, height: H } = section.getBoundingClientRect();
        const cx = cursorX.current;
        const cy = cursorY.current;

        balls.current.forEach((ball, i) => {
          /* ─ Slowly rotate cruise direction (bird-like drift) */
          ball.angle += ball.angleSpeed;
          const cruiseVx = Math.cos(ball.angle) * ball.speed;
          const cruiseVy = Math.sin(ball.angle) * ball.speed;

          /* ─ Gently steer toward cruise velocity */
          ball.vx += (cruiseVx - ball.vx) * STEER;
          ball.vy += (cruiseVy - ball.vy) * STEER;

          /* ─ Cursor repulsion — pushes hard, then steer naturally undoes it */
          const px = ball.x * W;
          const py = ball.y * H;
          const dx = px - cx;
          const dy = py - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < REPEL_R && dist > 1) {
            const f = (1 - dist / REPEL_R) * REPEL_F;
            ball.vx += (dx / dist) * f;
            ball.vy += (dy / dist) * f;
          }

          /* ─ Speed cap (only clamp if exceeding max) */
          const spd = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
          if (spd > MAX_SPD) {
            ball.vx = (ball.vx / spd) * MAX_SPD;
            ball.vy = (ball.vy / spd) * MAX_SPD;
          }

          /* ─ Update position */
          ball.x += ball.vx / W;
          ball.y += ball.vy / H;

          /* ─ Wall bounce — also reflect angle so bird turns naturally */
          const rW = ball.r / W;
          const rH = ball.r / H;
          if (ball.x < rW) {
            ball.x = rW;
            ball.vx = Math.abs(ball.vx) * RESTITUT;
            ball.angle = Math.PI - ball.angle;
          }
          if (ball.x > 1 - rW) {
            ball.x = 1 - rW;
            ball.vx = -Math.abs(ball.vx) * RESTITUT;
            ball.angle = Math.PI - ball.angle;
          }
          if (ball.y < rH) {
            ball.y = rH;
            ball.vy = Math.abs(ball.vy) * RESTITUT;
            ball.angle = -ball.angle;
          }
          if (ball.y > 1 - rH) {
            ball.y = 1 - rH;
            ball.vy = -Math.abs(ball.vy) * RESTITUT;
            ball.angle = -ball.angle;
          }

          /* ─ Push to DOM */
          const el = particleEls.current[i];
          if (el)
            el.style.transform = `translate(${ball.x * W}px,${ball.y * H}px)`;
        });

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
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <style>{`
        /* ── section ───────────────────────────────────────── */
        .hero-section {
          background: #F5F2EC;
          overflow: hidden;
          min-height: 105vh;
          padding-top:20px;
        }

        /* ── tiny glow balls ───────────────────────────────── */
        .orb-ball {
          position: absolute; top: 0; left: 0;
          border-radius: 50%;
          pointer-events: none; user-select: none;
          will-change: transform;
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
        {/* ── Physics balls — distributed across entire section ── */}
        {Array.from({ length: BALL_COUNT }).map((_, i) => (
          <span
            key={`ball-${i}`}
            ref={(el) => {
              particleEls.current[i] = el;
            }}
            className="orb-ball"
            aria-hidden
          />
        ))}

        {/* ── Centered content ── */}
        <div
          ref={contentRef}
          className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-10
                     flex flex-col items-center text-center gap-5 sm:gap-5
                     will-change-[transform,opacity] pt-2 pb-40"
        >
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="hero-pre">
            <div className="eyebrow-pill">
              <span className="live-dot" />
              Trusted by Agencies Worldwide
            </div>
          </div>

          {/* Headline */}
          <div className="flex flex-col items-center gap-1.5">
            <h1
              ref={titleRef}
              className="hero-pre text-[2.5rem] sm:text-[3rem] md:text-[3.6rem] lg:text-[4rem]
                         font-black text-black leading-[1.04] tracking-[-0.042em]"
            >
              Build Beyond Studio
            </h1>
            <span
              ref={line2Ref}
              className="hero-pre gradient-text text-[1.6rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[3rem]
                         font-black leading-[1.1] tracking-[-0.032em] block"
            >
              The invisible web team for marketing agencies.
            </span>
          </div>

          {/* Divider */}
          <div
            className="hero-pre hero-divider"
            style={{ transitionDelay: "300ms" }}
          />

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="hero-pre text-[13.5px] sm:text-[14.5px] text-gray-400
                       max-w-[480px] leading-[1.75]"
          >
            Your clients bring you web projects. We build them — fully under your brand.{" "}
            <span className="font-semibold text-gray-900">
              No developer salaries. No team management.
            </span>{" "}
            Just pure margin.
          </p>

          {/* Service highlights */}
          <div
            ref={badgesRef}
            className="hero-pre flex items-center justify-center gap-2 flex-wrap"
          >
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
              },
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
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 13px",
                  borderRadius: "999px",
                  background: bg,
                  border: `1px solid ${border}`,
                  fontSize: "11.5px",
                  fontWeight: 600,
                  color: accent,
                  letterSpacing: ".02em",
                  backdropFilter: "blur(6px)",
                }}
              >
                <span style={{ fontSize: "11px", opacity: 0.9 }}>{icon}</span>
                {label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            ref={buttonsRef}
            className="hero-pre flex flex-col sm:flex-row items-center justify-center gap-3
                       w-full sm:w-auto"
          >
            <button
              ref={mag1.ref}
              onMouseMove={mag1.onMove}
              onMouseLeave={mag1.onLeave}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mag-btn btn-primary text-white px-9 py-3.5 rounded-xl
                         font-bold text-[13.5px] w-full sm:w-auto"
            >
              Book a Call →
            </button>

            <button
              ref={mag2.ref}
              onMouseMove={mag2.onMove}
              onMouseLeave={mag2.onLeave}
              onClick={() =>
                document
                  .getElementById("cases")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mag-btn border border-black/10 text-gray-900 px-9 py-3.5
                         rounded-xl font-bold text-[13.5px] w-full sm:w-auto
                         bg-white hover:border-black/20 hover:bg-gray-50
                         shadow-[0_2px_8px_rgba(0,0,0,0.05)]
                         hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            >
              See Our Work
            </button>
          </div>

          {/* Stat pills */}
          <div
            className="hero-pre flex items-center flex-wrap justify-center gap-2"
            style={{ transitionDelay: "610ms" }}
          >
            {[
              { icon: "⚡", label: "Fast Delivery" },
              { icon: "🔒", label: "100% Ownership" },
              { icon: "♾️", label: "Ongoing Support" },
            ].map((s) => (
              <span key={s.label} className="stat-pill">
                <span>{s.icon}</span>
                {s.label}
              </span>
            ))}
          </div>

          {/* Email */}
          <div ref={emailRef} className="hero-pre text-[12.5px] text-gray-400">
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
