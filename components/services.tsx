"use client";

import Link from "next/link";
import { Globe, ShoppingBag, BarChart3, Users2, Wrench, ArrowRight } from "lucide-react";

const CORE_SERVICES = [
  {
    title: "White-Label Web & Web App Development",
    desc: "Custom websites, web portals and SaaS applications engineered on modern stacks under your agency's brand.",
    href: "/services/website-development",
    icon: Globe,
  },
  {
    title: "E-commerce & Headless Stores",
    desc: "Fast, custom online stores built on Shopify, WooCommerce or headless architectures designed to convert.",
    href: "/services/online-store-development",
    icon: ShoppingBag,
  },
  {
    title: "Tracking & Conversion Setup",
    desc: "Accurate server-side GA4, Google Tag Manager, Meta Pixel and ad conversion tracking fully tested and verified.",
    href: "/services/tracking-conversion-setup",
    icon: BarChart3,
  },
  {
    title: "Dedicated Development Pod",
    desc: "A managed, sprint-aligned developer pod dedicated to your ongoing client deliverables and high-volume needs.",
    href: "/services/dedicated-development-pod",
    icon: Users2,
  },
  {
    title: "Website & App Maintenance",
    desc: "Proactive security patching, bug fixes, updates and infrastructure maintenance to keep client sites running smoothly.",
    href: "/services/website-app-maintenance",
    icon: Wrench,
  },
] as const;

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#FAF9F6] border-t border-[#E8E4DC] py-20 sm:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] text-[#C8860A] uppercase mb-3">
              What BBS Delivers
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-black text-[#0D0D0D] leading-[1.08] tracking-tight">
              Five core engineering services<span className="text-[#C8860A]">.</span>
            </h2>
          </div>

          <div className="lg:max-w-md lg:text-right">
            <p className="text-[14px] text-[#6B6560] leading-relaxed">
              Every build, store, tracking setup and update delivered under your agency's brand at fixed partner pricing.
            </p>
          </div>
        </div>

        {/* ── Exactly 5 Service Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              className="group relative flex flex-col justify-between bg-white rounded-2xl border border-[#EDEAE3] p-7 sm:p-8
                         shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                         hover:shadow-[0_16px_40px_rgba(200,134,10,0.12)]
                         hover:-translate-y-1.5
                         hover:border-[rgba(200,134,10,0.32)]
                         transition-all duration-300 ease-out min-h-[240px]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8860A]"
            >
              {/* Subtle amber line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#A06A00] to-[#E8A020]
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />

              <div>
                <div className="w-12 h-12 rounded-xl bg-[rgba(200,134,10,0.08)] border border-[rgba(200,134,10,0.18)] flex items-center justify-center text-[#C8860A] mb-5 group-hover:scale-105 transition-transform duration-300">
                  <svc.icon className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] sm:text-[19px] font-bold text-[#0D0D0D] group-hover:text-[#A06A00] transition-colors leading-snug mb-3">
                  {svc.title}
                </h3>
                <p className="text-[13.5px] text-[#6B6560] leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-2 text-[13px] font-bold text-[#C8860A] group-hover:text-[#A06A00]">
                <span>Explore service</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}

          {/* CTA Link Box for 6th slot on 3-col grid */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-dashed border-[#D8D4CC] bg-[#FAF8F4] p-7 sm:p-8 min-h-[240px]">
            <div>
              <span className="inline-block text-[11px] font-bold tracking-wider text-[#A06A00] uppercase mb-2">
                All Capabilities
              </span>
              <h3 className="text-[19px] font-bold text-[#0D0D0D] mb-3 leading-snug">
                Need more technical capabilities?
              </h3>
              <p className="text-[13.5px] text-[#6B6560] leading-relaxed">
                Explore our full spectrum of specialized capabilities including AI chatbots, custom software, UI/UX and DevOps.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E8E4DC]">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[14px] font-bold text-[#C8860A] hover:text-[#A06A00] transition-colors"
              >
                See all services and additional capabilities
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Explicit requested text link below cards */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[15px] font-bold text-[#C8860A] hover:text-[#A06A00] hover:underline transition-colors"
          >
            See all services and additional capabilities
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
