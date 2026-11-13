"use client";

import Link from "next/link";
import { FileSignature, Calculator, Code2, Rocket, ArrowRight } from "lucide-react";

const STEPS = [
  {
    num: "01",
    heading: "Share the brief under NDA",
    description: "We sign an NDA before receiving your client details.",
    icon: FileSignature,
  },
  {
    num: "02",
    heading: "Receive a fixed quote",
    description: "We provide a fixed quote for the approved project scope.",
    icon: Calculator,
  },
  {
    num: "03",
    heading: "Build, test and review",
    description: "Your team receives a staging link and a weekly progress update. Every build is tested by our QA testers before delivery.",
    icon: Code2,
  },
  {
    num: "04",
    heading: "Launch and hand over",
    description: "We deliver the completed work with source code, documentation and IP handover. Post-launch support is available under a separate maintenance agreement.",
    icon: Rocket,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-[#F5F2EC] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] text-[#C8860A] uppercase bg-[rgba(200,134,10,0.08)] px-4 py-1.5 rounded-full border border-[rgba(200,134,10,0.2)] mb-3">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-[2.2rem] md:text-[2.6rem] font-black text-black leading-[1.12] tracking-[-0.032em] mb-4">
            Four Steps From Client Brief to Production
          </h2>
          <p className="text-[14px] sm:text-[16px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A clear, predictable delivery workflow built around agency needs. We respond within 24 hours.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-2xl border border-[rgba(200,134,10,0.14)] p-7 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(200,134,10,0.12)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Step watermarked number */}
                <div className="absolute top-2 right-4 text-[48px] font-black text-black/[0.04] select-none pointer-events-none">
                  {step.num}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[rgba(200,134,10,0.08)] border border-[rgba(200,134,10,0.18)] flex items-center justify-center text-[#C8860A] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-[11px] font-bold tracking-wider text-[#A06A00] uppercase mb-2">
                    Step {step.num}
                  </div>
                  <h3 className="text-[18px] font-bold text-black mb-3 leading-snug">
                    {step.heading}
                  </h3>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to /how-we-partner */}
        <div className="mt-12 text-center">
          <Link
            href="/how-we-partner"
            className="inline-flex items-center gap-2 text-[14px] font-bold text-[#C8860A] hover:text-[#A06A00] transition-colors"
          >
            Learn more about our partnership workflow
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

