import React from 'react';

export default function FounderNote() {
  return (
    <section className="bg-white py-16 md:py-24 px-6 border-t border-black/5">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#050505] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8860A] rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            A Message from the Founder
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            {/* Photo */}
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-[#C8860A] to-[#A06A00] flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-white/10 shadow-xl">
              <img
                src="/founder.jpeg"
                alt="Ankush Kumar Gupta — Founder, BBS"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                "When I started Build Beyond Studio, I noticed a recurring problem: marketing agencies were incredible at closing deals, but struggled to find reliable technical partners who wouldn't steal their clients or deliver subpar code.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                I built BBS to be the invisible technical backbone for your agency. We handle the complex web apps, the DevOps, and the infrastructure. You own the client relationship, the brand, and 100% of the margin. It's a true strategic partnership."
              </p>
              
              <div>
                <p className="text-[#C8860A] font-bold text-xl mb-1">Ankush Kumar Gupta</p>
                <p className="text-gray-400 font-medium text-sm tracking-wide uppercase">Founder & CEO, Build Beyond Studio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
