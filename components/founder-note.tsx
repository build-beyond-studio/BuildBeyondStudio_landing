"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function FounderNote() {
  return (
    <section className="bg-white py-16 md:py-24 px-5 sm:px-8 border-t border-black/5">
      <div className="max-w-[980px] mx-auto">
        <div className="bg-[#0A0A0A] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 md:p-12 text-white relative overflow-hidden shadow-2xl border border-white/5">
          {/* Background Glow */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#C8860A] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.14] pointer-events-none" />

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white tracking-tight relative z-10 text-center md:text-left">
            A Note From Our Founder
          </h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start relative z-10">
            {/* Founder Photograph */}
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-2xl flex-shrink-0 overflow-hidden border-2 border-[#C8860A]/60 shadow-[0_12px_32px_rgba(200,134,10,0.15)] relative">
              <Image
                src="/founder.jpeg"
                alt="Ankush Kumar Gupta — Founder & CEO, Build Beyond Studio"
                width={176}
                height={176}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content: Exactly 3 concise sentences */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-3 text-center md:text-left">
                <p className="text-[#E0E0E0] text-[14px] sm:text-[16px] md:text-[17px] leading-relaxed font-light">
                  "Marketing agencies excel at closing clients, but often struggle to find dependable developers who protect their margins and confidentiality.
                </p>
                <p className="text-[#E0E0E0] text-[14px] sm:text-[16px] md:text-[17px] leading-relaxed font-light">
                  I founded Build Beyond Studio to operate as your silent engineering team, handling custom builds, DevOps, and tracking under your brand.
                </p>
                <p className="text-[#E0E0E0] text-[14px] sm:text-[16px] md:text-[17px] leading-relaxed font-light">
                  You own the client relationship and 100% of the IP, while we deliver production-ready code with complete accountability."
                </p>
              </div>

              {/* Founder Meta & Links */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <p className="text-[#C8860A] font-bold text-base sm:text-lg tracking-wide">
                      Ankush Kumar Gupta
                    </p>
                    <a
                      href="https://www.linkedin.com/in/ankush-kumar-gupta-191b923b1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A66C2] hover:text-[#004182] transition-colors p-1"
                      aria-label="Ankush Kumar Gupta LinkedIn Profile"
                    >
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-[#888888] font-semibold text-xs tracking-wider uppercase">
                    Founder &amp; CEO, Build Beyond Studio
                  </p>
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E8A020] hover:text-[#C8860A] transition-colors"
                >
                  <span>Read more about BBS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
