"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function RevenueMath() {
  return (
    <section id="partner-economics" className="bg-[#0D0D0D] text-white py-20 sm:py-24 border-t border-white/10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(200,134,10,0.18)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] text-[#C8860A] uppercase bg-[rgba(200,134,10,0.12)] px-4 py-1.5 rounded-full border border-[rgba(200,134,10,0.25)] mb-3">
            Partner Economics
          </span>
          <h2 className="text-2xl sm:text-[2.2rem] md:text-[2.6rem] font-black text-white leading-[1.12] tracking-tight mb-4">
            Fixed partner pricing. You set the client price.
          </h2>
          <p className="text-[14px] sm:text-[16px] text-gray-400 max-w-xl mx-auto leading-relaxed">
            We provide a fixed engineering quote for the approved scope. You bill your client whatever you choose and keep 100% of the difference.
          </p>
        </div>

        {/* Static, SEO-readable Pricing Example Table */}
        <div className="bg-[#161616] border border-[#C8860A]/35 hover:border-[#E8A020]/75 rounded-2xl p-6 sm:p-10 shadow-[0_0_35px_rgba(200,134,10,0.18)] hover:shadow-[0_0_55px_rgba(232,160,32,0.35)] transition-all duration-300 max-w-3xl mx-auto group">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Engagement Line</th>
                  <th className="py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-wider">Amount (INR)</th>
                  <th className="py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-wider">Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-4 font-semibold text-white sm:text-lg">Your client pays you</td>
                  <td className="py-4 text-right font-bold text-white sm:text-lg">₹1,00,000</td>
                  <td className="py-4 text-right text-sm text-gray-400">100%</td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-gray-300 sm:text-lg">BBS partner price</td>
                  <td className="py-4 text-right font-bold text-gray-300 sm:text-lg">₹40,000</td>
                  <td className="py-4 text-right text-sm text-gray-400">40%</td>
                </tr>
                <tr className="bg-[rgba(200,134,10,0.08)]">
                  <td className="py-5 pl-3 sm:pl-4 font-bold text-[#E8A020] sm:text-xl">Your gross margin</td>
                  <td className="py-5 text-right font-extrabold text-[#E8A020] sm:text-2xl">₹60,000</td>
                  <td className="py-5 pr-3 sm:pr-4 text-right font-bold text-[#E8A020] text-sm sm:text-base">60%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-xs sm:text-sm text-gray-400 italic">
            Illustrative example. Your quote depends on scope.
          </p>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-[#C8860A] shrink-0" />
              <span>We never contact your client or disclose BBS pricing.</span>
            </div>
            <Link
              href="/pricing-model"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#E8A020] hover:text-[#C8860A] transition-colors whitespace-nowrap"
            >
              See how partner pricing works
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
