"use client";

import Link from "next/link";
import { Shield, UserCheck, FileCheck, FileText, ArrowRight } from "lucide-react";

const TRUST_POINTS = [
  {
    icon: Shield,
    title: "NDA before project details",
    description: "We sign an NDA before receiving any client or project specifics.",
  },
  {
    icon: UserCheck,
    title: "We do not contact your clients unless you ask us to",
    description: "Your agency maintains complete control of all client relationships and communications.",
  },
  {
    icon: FileCheck,
    title: "You receive 100% of the source code and IP when development is complete",
    description: "Full intellectual property rights and code ownership are completely transferred to you.",
  },
  {
    icon: FileText,
    title: "Scope changes are priced and approved in writing before work starts",
    description: "No hidden charges or unexpected invoices. Every scope adjustment is agreed in writing.",
  },
];

export default function WhyUs() {
  return (
    <section id="trust" className="bg-[#FAF9F6] py-20 sm:py-24 px-5 sm:px-8 border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#C8860A] bg-[#FDF8F0] px-4 py-1.5 rounded-full border border-[rgba(200,134,10,0.2)] inline-block mb-3">
            Protected By Design
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black tracking-[-0.03em] mb-4">
            Protected by design
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Four structural guarantees that keep your agency secure, confidential, and in control.
          </p>
        </div>

        {/* 4 Points Grid - 2 cols on mobile and desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3.5 sm:gap-6 md:gap-8 mb-12">
          {TRUST_POINTS.map((pt, index) => {
            const Icon = pt.icon;
            return (
              <div
                key={index}
                className="bg-white p-4 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl border border-[rgba(200,134,10,0.16)] hover:border-[rgba(200,134,10,0.35)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(200,134,10,0.10)] hover:-translate-y-1 flex flex-col justify-between"
                style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}
              >
                <div>
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#FDF8F0] border border-[rgba(200,134,10,0.25)] flex items-center justify-center text-[#C8860A] mb-3 sm:mb-5">
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold text-black mb-1.5 sm:mb-2 leading-snug">
                    {pt.title}
                  </h3>
                  <p className="text-gray-600 text-[11px] sm:text-xs md:text-sm leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Destination Link */}
        <div className="text-center">
          <Link
            href="/trust"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#C8860A] hover:text-[#A06A00] transition-colors"
          >
            Learn how we protect your agency
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
