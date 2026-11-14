"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface PartnerProof {
  agency: string;
  founder?: string;
  city?: string;
  whatBbsBuilt: string;
  outcome: string;
  quote: string;
  caseStudyHref: string;
  initials: string;
  photoPath?: string;
}

const PARTNERS: PartnerProof[] = [
  {
    agency: "TechTasteFood & FranFirst",
    founder: "Sarthak",
    city: "New Delhi",
    whatBbsBuilt: "Custom client dashboards, scalable web assets, and integrated CRM portals under strict NDA.",
    outcome: "+₹75,000/month net profit in retainer margin as reported by Sarthak.",
    quote: "BBS became our reliable technical partner from day one. Their team consistently delivers high-quality work on time, allowing us to focus on client acquisition and scaling our business with confidence.",
    caseStudyHref: "/case-studies/techtastefood",
    initials: "ST",
    photoPath: "https://res.cloudinary.com/ds6jbzjy0/image/upload/f_auto,q_auto/v1784111689/WhatsApp_Image_2026-07-15_at_3.52.04_PM_z1hve2.jpg",
  },
  {
    agency: "BVFX Digify",
    founder: "Aayushman",
    city: "Bhilai, Durg",
    whatBbsBuilt: "Sprint-aligned white-label web development integrating directly with the agency's client commitments.",
    outcome: "3× faster project delivery within the first quarter without internal hiring.",
    quote: "Working with BBS has significantly improved our project delivery speed. Their development team feels like an extension of our own, helping us deliver quality work faster while maintaining excellent client satisfaction.",
    caseStudyHref: "/case-studies/bvfx-digify",
    initials: "AY",
    photoPath: "https://res.cloudinary.com/ds6jbzjy0/image/upload/f_auto,q_auto/v1784111690/WhatsApp_Image_2026-07-15_at_3.52.05_PM_mpolbe.jpg",
  },
  {
    agency: "Shivora Media",
    founder: "Mahi",
    city: "Bhopal",
    whatBbsBuilt: "Complete end-to-end technical execution, deployment pipelines, and post-launch maintenance.",
    outcome: "+40% agency client capacity by removing technical debugging overhead.",
    quote: "BBS has helped us scale without the hassle of building an in-house development team. Their consistency, communication, and technical expertise have made them a trusted long-term partner for our agency.",
    caseStudyHref: "/case-studies/shivora-media",
    initials: "MH",
    photoPath: "https://res.cloudinary.com/ds6jbzjy0/image/upload/f_auto,q_auto/v1784111688/WhatsApp_Image_2026-07-15_at_3.52.05_PM_2_dakvlf.jpg",
  },
  {
    agency: "Clocked Agency",
    founder: "Aastha",
    city: "Delhi",
    whatBbsBuilt: "High-performance brand websites and responsive web interfaces matching bespoke designs.",
    outcome: "Expanded agency services to include full custom web development retainers.",
    quote: "BBS has been instrumental in helping us deliver premium websites without expanding our internal team. Their professionalism, timely communication, and consistent quality have strengthened both our operations and client trust.",
    caseStudyHref: "/case-studies/clocked-agency",
    initials: "AS",
    photoPath: "https://res.cloudinary.com/ds6jbzjy0/image/upload/f_auto,q_auto/v1784111689/WhatsApp_Image_2026-07-15_at_3.52.05_PM_1_p0hpg2.jpg",
  },
];

export default function Testimonials() {
  const cards = [...PARTNERS, ...PARTNERS];

  return (
    <section id="proof" className="bg-[#F5F2EC] py-20 sm:py-24 px-5 sm:px-8 border-t border-black/5 overflow-hidden">
      <style>{`
        @keyframes proofMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .proof-track {
          display: flex;
          width: max-content;
          animation: proofMarquee 40s linear infinite;
        }
        .proof-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#C8860A] bg-[#FDF8F0] px-4 py-1.5 rounded-full border border-[rgba(200,134,10,0.2)] inline-block mb-3">
            Agency Proof
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black tracking-[-0.03em] mb-4">
            Proof From Agency Partners
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Real agency partnerships. Reliable execution. Complete brand protection.
          </p>
        </div>

        {/* Infinite Carousel Container */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="proof-track gap-6 py-4">
            {cards.map((partner, index) => (
              <div
                key={`${partner.agency}-${index}`}
                className="w-[340px] sm:w-[420px] md:w-[460px] shrink-0 bg-white border border-[rgba(200,134,10,0.16)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(200,134,10,0.12)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#A06A00] to-[#E8A020]" />

                <div>
                  {/* Agency / Founder Header */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3.5">
                      {partner.photoPath ? (
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[rgba(200,134,10,0.4)] shadow-sm shrink-0 bg-[#FDF8F0]">
                          <Image
                            src={partner.photoPath}
                            alt={`${partner.founder || "Founder"} — ${partner.agency}`}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-[#FDF8F0] border border-[rgba(200,134,10,0.3)] flex items-center justify-center font-bold text-[#C8860A] text-sm shrink-0">
                          {partner.initials}
                        </div>
                      )}
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-black leading-snug">
                          {partner.agency}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium">
                          {partner.founder ? `${partner.founder}, Founder` : "Founder"}
                          {partner.city ? ` • ${partner.city}` : ""}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* What BBS Built */}
                  <div className="mb-4 bg-[#FAF8F4] p-3.5 rounded-xl border border-[rgba(200,134,10,0.12)]">
                    <p className="text-xs font-semibold text-[#8C6314] uppercase tracking-wider mb-1">
                      What BBS Built
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {partner.whatBbsBuilt}
                    </p>
                  </div>

                  {/* Attributed Outcome */}
                  <div className="mb-4">
                    <span className="inline-block bg-[rgba(200,134,10,0.1)] text-[#7A5200] border border-[rgba(200,134,10,0.25)] px-3 py-1 rounded-md text-xs font-bold">
                      Result: {partner.outcome}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xs sm:text-sm text-gray-600 leading-relaxed italic border-l-2 border-[#C8860A]/40 pl-3 my-4">
                    "{partner.quote}"
                  </blockquote>
                </div>

                {/* Case Study Link */}
                <div className="pt-4 border-t border-black/5 mt-2">
                  <Link
                    href={partner.caseStudyHref}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#C8860A] hover:text-[#A06A00] transition-colors"
                  >
                    <span>Read case study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory Consent Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm font-medium text-gray-500">
            Agencies named here approved publication. We never name their clients.
          </p>
        </div>
      </div>
    </section>
  );
}
