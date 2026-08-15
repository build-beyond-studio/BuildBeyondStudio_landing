"use client";

export default function SkillDevelopmentFundBanner() {
  return (
    <>
      <style>{`
        .rhb-container {
          background: linear-gradient(135deg, #241a0f 0%, #120c06 100%);
          border: 1px solid rgba(227, 194, 124, 0.3);
          border-radius: 12px;
          padding: 20px 28px;
          margin-bottom: 32px;
          position: relative;
          color: #d1d5db;
          box-shadow: 0 0 40px rgba(227, 194, 124, 0.25), 0 10px 30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05);
          overflow: hidden;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          transition: all 0.4s ease;
          cursor: default;
        }

        .rhb-container:hover {
          box-shadow: 0 0 60px rgba(227, 194, 124, 0.45), 0 15px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.1);
          border-color: rgba(227, 194, 124, 0.5);
          transform: translateY(-2px);
        }

        .rhb-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .rhb-title {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.25em;
          color: #E3C27C;
          text-transform: uppercase;
        }

        .rhb-pill {
          font-size: 11px;
          color: #bfa163;
          border: 1px solid rgba(191, 161, 99, 0.3);
          padding: 4px 12px;
          border-radius: 999px;
          letter-spacing: 0.03em;
          background: rgba(191, 161, 99, 0.05);
          transition: all 0.3s ease;
        }

        .rhb-container:hover .rhb-pill {
          background: rgba(191, 161, 99, 0.15);
          border-color: rgba(191, 161, 99, 0.6);
          color: #E3C27C;
        }

        .rhb-grid {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 16px 28px;
          align-items: center;
        }

        .rhb-circle-wrap {
          grid-row: 1 / 3;
        }

        .rhb-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 2px solid rgba(227, 194, 124, 0.8);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: radial-gradient(circle, rgba(227, 194, 124, 0.05) 0%, transparent 70%);
          box-shadow: 0 0 30px rgba(227, 194, 124, 0.25), 0 0 10px rgba(227, 194, 124, 0.4), inset 0 0 20px rgba(227, 194, 124, 0.1);
          transition: all 0.4s ease;
        }

        .rhb-container:hover .rhb-circle {
          box-shadow: 0 0 45px rgba(227, 194, 124, 0.4), 0 0 15px rgba(227, 194, 124, 0.6), inset 0 0 25px rgba(227, 194, 124, 0.2);
          border-color: #F0D070;
        }

        .rhb-circle-num {
          font-size: 28px;
          font-weight: 700;
          font-family: "Playfair Display", Georgia, serif;
          color: #E3C27C;
          line-height: 1;
          margin-bottom: 4px;
        }

        .rhb-circle-text {
          font-size: 7px;
          letter-spacing: 0.15em;
          color: #bfa163;
          text-transform: uppercase;
        }

        .rhb-paragraph {
          font-size: 14px;
          line-height: 1.45;
          color: #d1d5db;
          grid-column: 2;
        }

        .rhb-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          grid-column: 2;
        }

        .rhb-stat-col {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .rhb-stat-label {
          font-size: 11px;
          color: #9ca3af;
        }

        .rhb-stat-val {
          font-size: 18px;
          font-weight: 700;
          font-family: "Playfair Display", Georgia, serif;
          color: #E3C27C;
          line-height: 1.2;
        }

        .rhb-footer {
          margin-top: 16px;
          font-size: 12px;
          color: #9ca3af;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 12px;
          text-align: left;
        }

        @media (max-width: 850px) {
          .rhb-container {
            padding: 24px 20px;
          }
          .rhb-top-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 24px;
          }
          .rhb-grid {
            grid-template-columns: auto 1fr;
            gap: 24px 16px;
            align-items: start;
          }
          .rhb-circle-wrap {
            grid-row: 1;
            grid-column: 1;
          }
          .rhb-paragraph {
            grid-row: 1;
            grid-column: 2;
            font-size: 13px;
          }
          .rhb-stats-row {
            grid-row: 2;
            grid-column: 1 / 3;
            grid-template-columns: 1fr 1fr;
            gap: 20px 16px;
          }
          .rhb-stat-col:nth-child(3) {
            grid-column: 1 / 3;
          }
        }
      `}</style>

      <div className="rhb-container max-w-5xl mx-auto">
        <div className="rhb-top-row">
          <div className="rhb-title">SKILL DEVELOPMENT FUND</div>
          <div className="rhb-pill">Credited within 7 working days</div>
        </div>

        <div className="rhb-grid">
          <div className="rhb-circle-wrap">
            <div className="rhb-circle">
              <div className="rhb-circle-num">30%</div>
              <div className="rhb-circle-text">OF REVENUE</div>
            </div>
          </div>

          <div className="rhb-paragraph">
            Nearly a third of every rupee students pay goes straight into your institution's own account — no strings attached. Use it for scholarships, lab upgrades, or placement cell activities.
          </div>

          <div className="rhb-stats-row">
            <div className="rhb-stat-col">
              <span className="rhb-stat-label">Per student</span>
              <span className="rhb-stat-val">₹1,200 –<br />₹3,600</span>
            </div>
            <div className="rhb-stat-col">
              <span className="rhb-stat-label">Per batch of 30</span>
              <span className="rhb-stat-val">Up to<br />₹1,07,991</span>
            </div>
            <div className="rhb-stat-col">
              <span className="rhb-stat-label">Paid to you</span>
              <span className="rhb-stat-val">Directly, no<br />invoicing</span>
            </div>
          </div>
        </div>

        <div className="rhb-footer">
          Credited to your institution's account automatically on batch confirmation — no paperwork required from your side.
        </div>
      </div>
    </>
  );
}
