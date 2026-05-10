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
    <section id="why" className="bg-[#F5F2EC] py-24 md:py-32 px-6 border-t border-black/5" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="opacity-0 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Why marketing agencies choose BBS
          </h2>
          <p className="text-lg text-gray-600">
            We're not a subcontractor. We're your silent tech partner — invested in your growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="opacity-0 group"
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-[rgba(200,134,10,0.13)] hover:border-[rgba(200,134,10,0.35)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(200,134,10,0.15)] hover:-translate-y-1" style={{ boxShadow: '0 4px 16px rgba(200,134,10,0.08)' }}>
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FDF8F0] rounded-xl border border-[rgba(200,134,10,0.15)] group-hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.10)' }}>
                    <div className="text-3xl">{item.icon}</div>
                  </div>
                  <div className="bg-[#FDF8F0] text-[#A06A00] px-3 py-1 rounded-full text-xs font-bold">
                    {item.metric}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white border border-[rgba(200,134,10,0.16)] rounded-2xl p-8 md:p-12 text-black mb-16" style={{ boxShadow: '0 4px 20px rgba(200,134,10,0.10)' }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Our Guarantee
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-[#C8860A]">24-48h</div>
              <p className="text-[#6B4F2A]">Response time on critical issues</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-[#C8860A]">100%</div>
              <p className="text-[#6B4F2A]">Code ownership & documentation</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-[#C8860A]">∞</div>
              <p className="text-[#6B4F2A]">Support & maintenance partnership</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-white border border-[rgba(200,134,10,0.16)] rounded-2xl p-8 md:p-12 text-center" style={{ boxShadow: '0 4px 20px rgba(200,134,10,0.10)' }}>
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to Partner With Us?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're not just developers. We're your extension team, committed to
            delivering production-ready solutions that make your clients happy.
          </p>
          <button
            className="px-8 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)",
              boxShadow: "0 4px 16px rgba(200,134,10,0.30)",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 28px rgba(200,134,10,0.45)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(200,134,10,0.30)")}
          >
            <a href="#contact">Book a Consultation</a>
          </button>
        </div>
      </div>
    </section>
  );
}
