"use client";

export default function RevenueHighlightBanner() {
  return (
    <>
      <style>{`
        .partner-econ-container {
          background: #120e0b;
          border: 1px solid rgba(227, 194, 124, 0.2);
          border-radius: 16px;
          padding: 20px 28px;
          margin-bottom: 32px;
          position: relative;
          overflow: hidden;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          display: flex;
          gap: 24px;
          box-shadow: 0 0 40px rgba(227, 194, 124, 0.25), 0 10px 30px rgba(0,0,0,0.6);
          align-items: center;
          transition: all 0.4s ease;
        }

        .partner-econ-container:hover {
          box-shadow: 0 0 60px rgba(227, 194, 124, 0.45), 0 15px 40px rgba(0,0,0,0.7);
          border-color: rgba(227, 194, 124, 0.4);
          transform: translateY(-2px);
        }

        /* Subtle radial glow on the right side */
        .partner-econ-container::after {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(227, 194, 124, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .pe-left {
          flex: 1.2;
          position: relative;
          z-index: 2;
        }

        .pe-right {
          flex: 0.8;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pe-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #E3C27C;
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
        }

        .pe-title {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 22px;
          font-weight: 500;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 8px;
        }

        .pe-desc {
          font-size: 13.5px;
          color: #9ca3af;
          line-height: 1.5;
          margin-bottom: 16px;
          max-width: 95%;
        }

        .pe-pills {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .pe-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
        }

        .pe-pill-gold {
          background: rgba(227, 194, 124, 0.05);
          border: 1px solid rgba(227, 194, 124, 0.4);
          color: #E3C27C;
        }

        .pe-pill-gold .pe-dot {
          width: 5px; height: 5px; border-radius: 50%; background: #E3C27C;
        }

        .pe-pill-dark {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #d1d5db;
        }

        .pe-pill-dark .pe-dot {
          width: 5px; height: 5px; border-radius: 50%; background: #9ca3af;
        }

        /* Right side bars */
        .pe-bar-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .pe-bar-label {
          width: 120px;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #9ca3af;
          text-transform: uppercase;
        }

        .pe-bar-container {
          flex: 1;
          height: 30px;
          background: #2a2219;
          border-radius: 6px;
          position: relative;
          display: flex;
          overflow: hidden;
        }

        .pe-bar-full {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 14px;
          font-size: 11px;
          font-weight: 700;
          color: #d1d5db;
        }

        .pe-bar-split-left {
          width: 50%;
          background: #dbb368;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
          color: #2a2219;
          position: relative;
        }

        /* dashed line separator in split bar */
        .pe-bar-split-left::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 1px;
          border-right: 1px dashed rgba(42, 34, 25, 0.3);
        }

        .pe-bar-split-right {
          width: 50%;
          background: #2a2219;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          color: #E3C27C;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Bottom stat area */
        .pe-bottom-stat {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 12px;
        }

        .pe-big-num {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 38px;
          font-style: italic;
          font-weight: 600;
          color: #E3C27C;
          line-height: 1;
        }

        .pe-stat-text {
          font-size: 12px;
          color: #9ca3af;
          line-height: 1.3;
          max-width: 140px;
        }

        @media (max-width: 900px) {
          .partner-econ-container {
            flex-direction: column;
            padding: 32px 24px;
            gap: 32px;
          }
          .pe-desc {
            max-width: 100%;
          }
          .pe-bar-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .pe-bar-label {
            width: auto;
          }
          .pe-bar-container {
            width: 100%;
          }
        }
      `}</style>
      
      <div className="partner-econ-container">
        <div className="pe-left">
          <span className="pe-eyebrow">PARTNER ECONOMICS — 01</span>
          <h2 className="pe-title">
            B2B Pricing That Lets You Charge 2X — Comfortably (50%+ profit Per Project To You)
          </h2>
          <p className="pe-desc">
            You bill your client at full market rate. We deliver at a cost that leaves you 50%+ margin — same enterprise standard, same support, same speed.
          </p>
          
          <div className="pe-pills">
            <div className="pe-pill pe-pill-gold">
              <span className="pe-dot"></span>
              50%+ margin per project
            </div>
            <div className="pe-pill pe-pill-dark">
              <span className="pe-dot"></span>
              Zero compromise on quality
            </div>
          </div>
        </div>

        <div className="pe-right">
          <div className="pe-bar-row">
            <div className="pe-bar-label">CLIENT PAYS YOU</div>
            <div className="pe-bar-container">
              <div className="pe-bar-full">100%</div>
            </div>
          </div>

          <div className="pe-bar-row">
            <div className="pe-bar-label">YOU PAY US</div>
            <div className="pe-bar-container">
              <div className="pe-bar-split-left">≤50%</div>
              <div className="pe-bar-split-right">YOUR MARGIN</div>
            </div>
          </div>

          <div className="pe-bottom-stat">
            <div className="pe-big-num">50%+</div>
            <div className="pe-stat-text">margin retained on every engagement</div>
          </div>
        </div>
      </div>
    </>
  );
}
