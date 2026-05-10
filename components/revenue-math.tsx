"use client";

import Link from "next/link";

export default function RevenueMath() {
  return (
    <section className="bg-[#050505] py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          What a ₹1 Lakh project looks like — with and without BBS
        </h2>

        {/* Two-column comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Column 1: WITHOUT BBS */}
          <div className="bg-[#0c0c0e] border border-red-500/20 rounded-xl p-10">
            <h3 className="text-xl font-bold text-red-400 mb-6 uppercase tracking-widest text-sm">
              WITHOUT BBS
            </h3>

            <div className="space-y-4 text-gray-300">
              <div className="flex justify-between items-center pb-3 border-b border-red-500/10">
                <span className="text-gray-400">Revenue:</span>
                <span className="font-semibold text-white">₹1,00,000</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-red-500/10">
                <span className="text-gray-400">Developer salary:</span>
                <span className="font-semibold text-red-400">−₹40,000 to −₹80,000</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-red-500/10">
                <span className="text-gray-400">Tools & overhead:</span>
                <span className="font-semibold text-red-400">−₹10,000</span>
              </div>

              <div className="flex justify-between items-center pt-4 bg-red-500/5 px-4 py-3 rounded-lg border border-red-500/10">
                <span className="text-gray-300 font-semibold">Your take-home:</span>
                <span className="font-bold text-red-400 text-lg">₹10,000 – ₹50,000</span>
              </div>
            </div>
          </div>

          {/* Column 2: WITH BBS */}
          <div className="bg-[#0c0c0e] border border-green-500/20 rounded-xl p-10">
            <h3 className="text-xl font-bold text-green-400 mb-6 uppercase tracking-widest text-sm">
              WITH BBS
            </h3>

            <div className="space-y-4 text-gray-300">
              <div className="flex justify-between items-center pb-3 border-b border-green-500/10">
                <span className="text-gray-400">Revenue:</span>
                <span className="font-semibold text-white">₹1,00,000</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-green-500/10">
                <span className="text-gray-400">BBS share (50%):</span>
                <span className="font-semibold text-green-400">−₹50,000</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-green-500/10">
                <span className="text-gray-400">Zero fixed overhead:</span>
                <span className="font-semibold text-green-400">₹0</span>
              </div>

              <div className="flex justify-between items-center pt-4 bg-green-500/5 px-4 py-3 rounded-lg border border-green-500/10">
                <span className="text-gray-300 font-semibold">Your take-home:</span>
                <span className="font-bold text-green-400 text-lg">₹50,000 (guaranteed)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-note */}
        <p className="text-center text-gray-400 mb-8 text-lg">
          No developer? No problem. The next project nets you ₹50K too.
        </p>

        {/* CTA Link */}
        <div className="flex justify-center">
          <Link
            href="/#partners"
            className="text-blue-400 hover:text-blue-300 transition-colors font-semibold text-base"
          >
            See how the partnership works →
          </Link>
        </div>
      </div>
    </section>
  );
}
