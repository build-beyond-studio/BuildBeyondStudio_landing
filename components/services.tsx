"use client";

import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// Icons — 24px outline, Tabler-style
// ─────────────────────────────────────────────────────────────────────────────
const Icons = {
  web: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="13" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
      <path d="M7 9l2 2-2 2M11 13h6"/>
    </svg>
  ),
  mobile: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="2"/>
      <circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none"/>
      <path d="M10 6h4"/>
    </svg>
  ),
  ux: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2"/>
      <path d="M8 8h8M8 12h8M8 16h5"/>
    </svg>
  ),
  seo: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="6"/>
      <path d="m16 16 5 5"/>
      <path d="M11 8v6M8 11h6"/>
    </svg>
  ),
  custom: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12"/>
      <path d="M8 8h8M8 12h8M8 16h5"/>
    </svg>
  ),
  chatbot: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 10h8M8 14h5"/>
      <rect x="3" y="5" width="18" height="12" rx="3"/>
      <path d="M8 19l-2 2 1-3"/>
    </svg>
  ),
  leadgen: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 18V8l5-4 5 4v10"/>
      <path d="M10 12h4M12 10v4"/>
    </svg>
  ),
  store: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9h16l-1.5 10.5A2 2 0 0 1 16.5 21h-9a2 2 0 0 1-2-1.5L4 9Z"/>
      <path d="M7 9V7a5 5 0 0 1 10 0v2"/>
    </svg>
  ),
  integrations: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 7h8v10H8z"/>
      <path d="M4 12h4M16 12h4M12 4v4M12 16v4"/>
    </svg>
  ),
  maintenance: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v4M12 17v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M3 12h4M17 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>
  ),
  arrow: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5l7 7-7 7"/>
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// Service data
// ─────────────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    title: "Website Development",
    desc: "Custom-built on React and Next.js — not templates. Fast, SEO-structured, and designed to convert visitors into clients.",
    href: "/services/website-development",
    icon: Icons.web,
  },
  {
    title: "UI / UX Design",
    desc: "Interface strategy, wireframes, and conversion-focused UX flows that make products easier to use and easier to trust.",
    href: "/services/ui-ux-design",
    icon: Icons.ux,
  },
  {
    title: "Mobile App Development",
    desc: "iOS and Android from a single codebase. From MVP scoping to App Store submission — one team handles it all.",
    href: "/services/mobile-app-development",
    icon: Icons.mobile,
  },
  {
    title: "SEO, AEO & GEO",
    desc: "Technical visibility and AI search optimization so your brand gets found, cited, and trusted across search surfaces.",
    href: "/services/seo-aeo-geo",
    icon: Icons.seo,
  },
  {
    title: "Custom Software Development",
    desc: "Business tools, dashboards, and web apps built around how you work.",
    href: "/services/custom-software-development",
    icon: Icons.custom,
  },
  {
    title: "AI Chatbots & Assistants",
    desc: "Smart chat and WhatsApp bots that answer customers and capture leads 24/7.",
    href: "/services/ai-chatbots-assistants",
    icon: Icons.chatbot,
  },
  {
    title: "LinkedIn Lead Generation & Automation",
    desc: "Automated outreach, connection requests, and follow-ups that fill your pipeline while you sleep.",
    href: "/services/linkedin-lead-generation-automation",
    icon: Icons.leadgen,
  },
  {
    title: "Online Store Development",
    desc: "Custom e-commerce stores built to sell, not just look good.",
    href: "/services/online-store-development",
    icon: Icons.store,
  },
  {
    title: "App Integrations",
    desc: "Connect your website or software to payment gateways, CRMs, and other tools you already use.",
    href: "/services/app-integrations",
    icon: Icons.integrations,
  },
  {
    title: "Website & App Maintenance",
    desc: "Ongoing fixes, updates, and hosting care so nothing breaks.",
    href: "/services/website-app-maintenance",
    icon: Icons.maintenance,
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Service card
// ─────────────────────────────────────────────────────────────────────────────
function ServiceCard({
  title,
  desc,
  href,
  icon,
}: {
  title: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col bg-white rounded-2xl border border-[#EDEAE3] overflow-hidden
        shadow-[0_2px_8px_rgba(0,0,0,0.05)]
        hover:shadow-[0_20px_48px_rgba(0,0,0,0.11)]
        hover:-translate-y-2
        hover:border-[rgba(200,134,10,0.28)]
        transition-all duration-300 ease-out
        p-7 sm:p-8
        min-h-[220px]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8860A]"
    >
      {/* Amber accent bar — slides down from above on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl
          bg-gradient-to-r from-[#A06A00] via-[#C8860A] to-[#E8A020]
          -translate-y-full group-hover:translate-y-0
          transition-transform duration-300 ease-out"
        aria-hidden="true"
      />

      {/* Icon container */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 flex-shrink-0
          bg-[#F5F1EA] text-[#8C8680]
          group-hover:bg-[rgba(200,134,10,0.1)] group-hover:text-[#C8860A]
          transition-all duration-300 ease-out"
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="text-[16px] sm:text-[17px] font-bold text-[#111111] leading-snug tracking-tight mb-3"
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-[13px] sm:text-[13.5px] text-[#6B6560] leading-[1.7] flex-1"
      >
        {desc}
      </p>

      {/* CTA row — slides up and fades in on hover */}
      <div
        className="mt-6 flex items-center gap-1.5
          text-[12px] font-semibold tracking-wide text-[#C8860A] uppercase
          opacity-0 translate-y-2
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300 ease-out delay-75"
        aria-hidden="true"
      >
        View service
        {Icons.arrow}
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CTA card (8th cell)
// ─────────────────────────────────────────────────────────────────────────────
function CtaCard() {
  return (
    <div
      className="group relative flex flex-col justify-between
        rounded-2xl border border-dashed border-[#D8D4CC]
        bg-[#FAF8F4]
        p-7 sm:p-8
        min-h-[220px]"
    >
      {/* Dot grid ornament */}
      <div className="grid grid-cols-5 gap-[7px] w-fit mb-auto" aria-hidden="true">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full bg-[#C8C3BB]"
          />
        ))}
      </div>

      {/* Body */}
      <div>
        <p className="text-[13px] text-[#8C8680] leading-relaxed mb-4">
          Explore the full scope of what Build Beyond Studio delivers — eight services, one accountable team.
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-[14px] font-bold text-[#C8860A] hover:text-[#A06A00] transition-colors duration-200 group/link"
        >
          View all services
          <span
            className="transition-transform duration-200 group-hover/link:translate-x-1"
            aria-hidden="true"
          >
            {Icons.arrow}
          </span>
        </Link>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main export
// ─────────────────────────────────────────────────────────────────────────────
export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#FAF9F6] border-t border-[#E8E4DC] py-20 sm:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] text-[#C8860A] uppercase mb-3">
              Services
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-[#0D0D0D] leading-[1.08] tracking-tight">
              What we build<span className="text-[#D4CEBC]">.</span>
            </h2>
          </div>

          <div className="lg:max-w-xs lg:text-right">
            <p className="text-[14px] text-[#6B6560] leading-relaxed mb-2">
              From code to campaigns — every service delivered under your brand.
            </p>
            <Link
              href="/white-label-web-development"
              className="text-[13px] font-semibold text-[#C8860A] hover:text-[#A06A00] hover:underline transition-colors duration-200"
            >
              White-label available →
            </Link>
          </div>
        </div>

        {/* ── Service grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.href} {...svc} />
          ))}
          <CtaCard />
        </div>

      </div>
    </section>
  );
}
