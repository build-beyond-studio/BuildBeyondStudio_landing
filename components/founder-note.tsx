import React from 'react';

export default function FounderNote() {
  return (
    <section className="bg-white py-16 md:py-24 px-6 border-t border-black/5">
      <div className="max-w-[980px] mx-auto">
        <div className="bg-[#0A0A0A] rounded-[32px] p-8 md:px-14 md:py-10 text-white relative overflow-hidden shadow-2xl border border-white/5">
          {/* Premium Background Glow */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#C8860A] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.12] pointer-events-none" />
          
          <h2 className="text-3xl md:text-[40px] font-bold mb-6 md:mb-8 text-white tracking-tight relative z-10">
            A Message from the Founder
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start relative z-10">
            {/* Premium Photo Wrapper */}
            <div className="w-full max-w-[200px] md:max-w-[260px] aspect-[4/5] rounded-[24px] flex-shrink-0 flex items-center justify-center overflow-hidden border border-[#C8860A]/60 shadow-[0_16px_40px_rgba(200,134,10,0.15)] relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 pointer-events-none" />
              <img
                src="/founder.jpeg"
                alt="Ankush Kumar Gupta — Founder, BBS"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Premium Text Content */}
            <div className="flex-1 mt-1">
              <p className="text-[#E0E0E0] text-base md:text-[17px] leading-[1.8] mb-5 font-light">
                "When I started Build Beyond Studio, I noticed a recurring problem: marketing agencies were incredible at closing deals, but struggled to find reliable technical partners who wouldn't steal their clients or deliver subpar code.
              </p>
              <p className="text-[#E0E0E0] text-base md:text-[17px] leading-[1.8] mb-8 font-light">
                I built BBS to be the invisible technical backbone for your agency. We handle the complex web apps, the DevOps, and the infrastructure. You own the client relationship, the brand, and 100% of the margin. It's a true strategic partnership."
              </p>
              
              <div className="mt-auto">
                <p className="text-[#C8860A] font-bold text-xl md:text-[22px] mb-1 tracking-wide">Ankush Kumar Gupta</p>
                <p className="text-[#888888] font-bold text-[11px] md:text-xs tracking-widest uppercase">Founder & CEO, Build Beyond Studio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
