"use client";

/* ── RevenueHighlightBanner ──────────────────────────────────
   High-visibility trust banner at the top of the Revenue section.
───────────────────────────────────────────────────────────── */
export default function RevenueHighlightBanner() {
  return (
    <>
      <style>{`
        @keyframes rhb-pulse-border {
          0%,100% { box-shadow: 0 0 0 0 rgba(212,160,23,0), 0 16px 48px rgba(212,160,23,0.22); }
          50%      { box-shadow: 0 0 0 6px rgba(212,160,23,0.08), 0 20px 60px rgba(212,160,23,0.36); }
        }
        @keyframes rhb-icon-spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .rhb-outer {
          background: linear-gradient(135deg, rgba(201,168,76,0.14) 0%, rgba(201,168,76,0.07) 60%, rgba(201,168,76,0.12) 100%);
          border: 1.5px solid rgba(201,168,76,0.55);
          border-radius: 20px;
          padding: 28px 32px;
          margin-bottom: 44px;
          position: relative;
          overflow: hidden;
          animation: rhb-pulse-border 3s ease-in-out infinite;
        }
        .rhb-outer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1.5px;
          background: linear-gradient(90deg, transparent 0%, rgba(212,160,23,0.9) 40%, #E8C84A 60%, transparent 100%);
        }
        .rhb-outer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 70% at 20% 50%, rgba(212,160,23,0.09) 0%, transparent 70%);
          pointer-events: none;
        }

        .rhb-inner {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .rhb-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: rgba(212,160,23,0.18);
          border: 1.5px solid rgba(212,160,23,0.5);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: #E8C84A;
          box-shadow: 0 0 20px rgba(212,160,23,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
        }

        .rhb-text-block {
          flex: 1;
          min-width: 200px;
        }

        .rhb-eyebrow {
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(212,160,23,0.65);
          margin-bottom: 5px;
        }

        .rhb-headline {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          font-weight: 900;
          letter-spacing: -0.025em;
          line-height: 1.2;
          color: #F0D070;
          text-shadow: 0 0 32px rgba(212,160,23,0.5), 0 2px 8px rgba(0,0,0,0.4);
          margin-bottom: 6px;
        }

        .rhb-headline span {
          color: #fff;
          text-shadow: 0 0 20px rgba(255,255,255,0.2);
        }

        .rhb-sub {
          font-size: 12px;
          color: rgba(255,255,255,0.5);
          line-height: 1.65;
          max-width: 500px;
        }
        .rhb-sub strong {
          color: rgba(240,208,112,0.85);
          font-weight: 700;
        }

        .rhb-badge {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          background: rgba(212,160,23,0.13);
          border: 1px solid rgba(212,160,23,0.4);
          border-radius: 14px;
          padding: 14px 20px;
          text-align: center;
        }

        .rhb-badge-num {
          font-size: 1.6rem;
          font-weight: 900;
          color: #F0D070;
          letter-spacing: -0.04em;
          line-height: 1;
          text-shadow: 0 0 24px rgba(212,160,23,0.6);
        }
        .rhb-badge-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(212,160,23,0.6);
          white-space: nowrap;
        }

        .rhb-divider {
          width: 1px;
          height: 48px;
          background: linear-gradient(180deg, transparent, rgba(212,160,23,0.35), transparent);
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .rhb-outer { padding: 20px 18px; }
          .rhb-badge { display: none; }
          .rhb-divider { display: none; }
          .rhb-icon-wrap { display: none; }
        }
      `}</style>

      <div className="rhb-outer" aria-label="Best Quotation Guarantee">
        <div className="rhb-inner">

          {/* Icon */}
          <div className="rhb-icon-wrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
              <path d="M16 2l2 2-2 2M8 2L6 4l2 2" />
            </svg>
          </div>

          {/* Main text */}
          <div className="rhb-text-block">
            <div className="rhb-eyebrow">★ Our Pricing Promise</div>
            <div className="rhb-headline">
              Best pricing in the market — {" "}
              <span>guaranteed. Quality, uncompromised.</span>
            </div>
            <p className="rhb-sub">
              Same quality of execution, support &amp; delivery speed —{" "}
              <strong>at the most competitive price available.</strong>{" "}
              You keep 100% of your margin.
            </p>
          </div>

          {/* Divider */}
          <div className="rhb-divider" />

          {/* Stat badge */}
          <div className="rhb-badge">
            <div className="rhb-badge-num">#1</div>
            <div className="rhb-badge-label">Market Price</div>
          </div>

        </div>
      </div>
    </>
  );
}
