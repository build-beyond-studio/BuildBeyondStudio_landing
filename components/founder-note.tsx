"use client";

import React, { useState } from 'react';

export default function FounderNote() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-white py-16 md:py-24 px-6 border-t border-black/5">
      <div className="max-w-[980px] mx-auto">
        <div className="bg-[#0A0A0A] rounded-[24px] sm:rounded-[32px] p-4 sm:p-8 md:px-14 md:py-10 text-white relative overflow-hidden shadow-2xl border border-white/5">
          {/* Premium Background Glow */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#C8860A] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.12] pointer-events-none" />
          
          <h2 className="text-[20px] sm:text-3xl md:text-[40px] font-bold mb-4 md:mb-8 text-white tracking-tight relative z-10 text-center md:text-left">
            A Message from the Founder
          </h2>
          
          <div className="flex flex-col md:flex-row gap-5 md:gap-12 items-center md:items-start relative z-10">
            {/* Premium Photo Wrapper */}
            <div className="w-full max-w-[120px] md:max-w-[260px] aspect-[4/5] rounded-xl sm:rounded-[24px] flex-shrink-0 flex items-center justify-center overflow-hidden border border-[#C8860A]/60 shadow-[0_16px_40px_rgba(200,134,10,0.15)] relative mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 pointer-events-none" />
              <img
                src="/founder.jpeg"
                alt="Ankush Kumar Gupta — Founder, BBS"
                width={260}
                height={325}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Premium Text Content */}
            <div className="flex-1 mt-1 flex flex-col h-full">
              {/* Mobile Text view */}
              <div className="md:hidden text-center">
                {!expanded ? (
                  <>
                    <p className="text-[#E0E0E0] text-[13px] leading-[1.6] mb-1 font-light">
                      "When I started Build Beyond Studio, I noticed a recurring problem...
                    </p>
                    <button 
                      onClick={() => setExpanded(true)}
                      className="text-[#C8860A] font-bold text-[12px] mb-5 mx-auto flex items-center gap-1"
                    >
                      Read more &rarr;
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-[#E0E0E0] text-[13px] leading-[1.6] mb-3 font-light text-left">
                      "When I started Build Beyond Studio, I noticed a recurring problem: marketing agencies were incredible at closing deals, but struggled to find reliable technical partners who wouldn't steal their clients or deliver subpar code.
                    </p>
                    <p className="text-[#E0E0E0] text-[13px] leading-[1.6] mb-5 font-light text-left">
                      I built BBS to be the invisible technical backbone for your agency. We handle the complex web apps, the DevOps, and the infrastructure. You own the client relationship, the brand, and 100% of the margin. It's a true strategic partnership."
                    </p>
                  </>
                )}
              </div>

              {/* Desktop Text view */}
              <div className="hidden md:block">
                <p className="text-[#E0E0E0] text-[17px] leading-[1.8] mb-5 font-light">
                  "When I started Build Beyond Studio, I noticed a recurring problem: marketing agencies were incredible at closing deals, but struggled to find reliable technical partners who wouldn't steal their clients or deliver subpar code.
                </p>
                <p className="text-[#E0E0E0] text-[17px] leading-[1.8] mb-8 font-light">
                  I built BBS to be the invisible technical backbone for your agency. We handle the complex web apps, the DevOps, and the infrastructure. You own the client relationship, the brand, and 100% of the margin. It's a true strategic partnership."
                </p>
              </div>
              
              <div className="mt-auto text-center md:text-left">
                <p className="text-[#C8860A] font-bold text-[16px] sm:text-xl md:text-[22px] mb-0.5 md:mb-1 tracking-wide">Ankush Kumar Gupta</p>
                <p className="text-[#888888] font-bold text-[9px] sm:text-[11px] md:text-xs tracking-widest uppercase">Founder & CEO, Build Beyond Studio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
