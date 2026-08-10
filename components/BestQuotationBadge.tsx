"use client";

export default function BestQuotationBadge() {
  return (
    <>
      <style>{`
        @keyframes bqb-glow-pulse {
          0%,100% {
            box-shadow:
              0 0 0 0 rgba(212,160,23,0),
              0 4px 16px rgba(212,160,23,0.18);
          }
          50% {
            box-shadow:
              0 0 0 6px rgba(212,160,23,0.07),
              0 6px 28px rgba(212,160,23,0.35);
          }
        }
        @keyframes bqb-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .bqb-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 11px 22px;
          border-radius: 999px;
          background: rgba(212,160,23,0.10);
          border: 1.5px solid rgba(212,160,23,0.45);
          font-size: 13.5px;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: #92400E;
          animation: bqb-glow-pulse 2.8s ease-in-out infinite;
          cursor: default;
          user-select: none;
          white-space: normal;
          text-align: center;
          line-height: 1.4;
          max-width: 100%;
        }
        @media (max-width: 640px) {
          .bqb-pill {
            padding: 8px 16px;
            font-size: 12px;
            border-radius: 20px;
          }
        }
        .bqb-spark {
          font-size: 15px;
          color: #C8860A;
          flex-shrink: 0;
        }
        .bqb-highlight {
          background: linear-gradient(
            100deg,
            #92400E 0%,
            #B45309 30%,
            #C8860A 50%,
            #B45309 70%,
            #92400E 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: bqb-shimmer 4s linear infinite;
          font-weight: 900;
        }
      `}</style>

      <div className="bqb-pill" role="note" aria-label="guaranteed. Quality, uncompromised.">
        <span className="bqb-spark"></span>
        {" "}
        <span className="bqb-highlight">Best pricing in the market — guaranteed. Quality, uncompromised.</span>
      </div>
    </>
  );
}
