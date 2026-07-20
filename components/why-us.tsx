"use client";

import { useEffect, useRef } from "react";
import { Users, Briefcase, ShieldCheck, Layers } from "lucide-react";

const differentiators = [
  {
    icon: <Users className="w-6 h-6 text-[#C8860A]" />,
    title: "No Need to Hire Developers",
    description:
      "Offer full-scale digital services without building or managing an in-house technical team. We act as your dedicated execution partner.",
    metric: "Scale Without Hiring",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#C8860A]" />,
    title: "You Close the Client. We Deliver.",
    description:
      "Focus on strategy, sales, and client relationships while we handle the complete technical build — seamlessly and professionally.",
    metric: "Execution Partner",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#C8860A]" />,
    title: "NDA-first, always confidential",
    description:
      "We sign an NDA before every project starts. No BBS branding on deliverables. No client data retained. Your partnership stays invisible.",
    metric: "Complete protection",
  },
  {
    icon: <Layers className="w-6 h-6 text-[#C8860A]" />,
    title: "White-Label & Long-Term Support",
    description:
      "Deliver under your brand with confidence. We support your agency behind the scenes — not just for one project, but for long-term growth.",
    metric: "Built for Partnership",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add("animate-slide-in-up");
            } else {
              setTimeout(
                () => {
                  entry.target.classList.add("animate-slide-in-up");
                },
                (index - 1) * 150,
              );
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    if (titleRef.current) observer.observe(titleRef.current);
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why" className="bg-[#F5F2EC] pt-10 pb-24 md:pt-16 md:pb-32 px-6 border-t border-black/5" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="opacity-0 text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-3 md:mb-4">
            The Invisible Partner Guarantee
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            We're your silent tech partner. You own the brand, the clients, and the profits.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2 md:gap-8 mb-6 sm:mb-16">
          {differentiators.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="opacity-0 group h-full"
            >
              <div className="bg-white p-4 sm:px-6 sm:py-6 md:p-10 rounded-2xl border border-[rgba(200,134,10,0.13)] hover:border-[rgba(200,134,10,0.35)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(200,134,10,0.15)] hover:-translate-y-1 h-full flex flex-col justify-between" style={{ boxShadow: '0 2px 10px rgba(200,134,10,0.04)' }}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-4 sm:mb-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 bg-[#FDF8F0] rounded-lg sm:rounded-xl border border-[rgba(200,134,10,0.15)] group-hover:scale-110 transition-transform duration-300 mb-2 sm:mb-0" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.10)' }}>
                    <div className="scale-75 sm:scale-100 flex items-center justify-center">{item.icon}</div>
                  </div>
                  <div className="bg-[#FDF8F0] text-[#A06A00] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-xs font-bold w-fit">
                    {item.metric}
                  </div>
                </div>
                <h3 className="text-[13px] sm:text-[17px] md:text-2xl font-bold text-black mb-2 sm:mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[10px] sm:text-[13px] md:text-base leading-relaxed hidden sm:block mt-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white border border-[rgba(200,134,10,0.16)] rounded-xl sm:rounded-2xl p-3 sm:p-8 md:p-12 text-black mb-6 sm:mb-16" style={{ boxShadow: '0 4px 20px rgba(200,134,10,0.10)' }}>
          <h3 className="text-[14px] sm:text-2xl md:text-3xl font-bold mb-3 md:mb-8 text-center">
            Our Guarantee
          </h3>
          <div className="grid grid-cols-3 gap-1 sm:gap-6 md:gap-8 text-center">
            <div>
              <div className="text-[15px] sm:text-3xl md:text-4xl font-bold mb-0.5 md:mb-2 text-[#C8860A]">24-48h</div>
              <p className="text-[8px] sm:text-[12px] md:text-base text-[#6B4F2A] leading-tight">Response time</p>
            </div>
            <div>
              <div className="text-[15px] sm:text-3xl md:text-4xl font-bold mb-0.5 md:mb-2 text-[#C8860A]">100%</div>
              <p className="text-[8px] sm:text-[12px] md:text-base text-[#6B4F2A] leading-tight">Code ownership</p>
            </div>
            <div>
              <div className="text-[15px] sm:text-3xl md:text-4xl font-bold mb-0.5 md:mb-2 text-[#C8860A]">∞</div>
              <p className="text-[8px] sm:text-[12px] md:text-base text-[#6B4F2A] leading-tight">Support & maintenance</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-white border border-[rgba(200,134,10,0.16)] rounded-xl sm:rounded-2xl p-4 sm:p-8 md:p-12 text-center" style={{ boxShadow: '0 4px 20px rgba(200,134,10,0.10)' }}>
          <h3 className="text-[15.5px] sm:text-2xl font-bold text-black mb-3 md:mb-4">
            Ready to Partner With Us?
          </h3>
          <p className="hidden sm:block text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto px-2">
            We're not just developers. We're your extension team, committed to
            delivering production-ready solutions that make your clients happy.
          </p>
          <button
            className="px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-lg font-bold text-[12.5px] sm:text-base text-white transition-all hover:shadow-lg w-full sm:w-auto"
            style={{
              background: "linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)",
              boxShadow: "0 4px 16px rgba(200,134,10,0.30)",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 28px rgba(200,134,10,0.45)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(200,134,10,0.30)")}
          >
            <a href="#contact" className="block w-full">Book a Consultation</a>
          </button>
        </div>
      </div>
    </section>
  );
}
