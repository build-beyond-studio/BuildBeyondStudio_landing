"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FAQSection from "@/components/FAQSection";
import { PRICING, PRICING_NOTE, formatCurrency, type Currency } from "@/config/pricing";

const rateCardFaqs = [
  {
    question: "Are these fixed prices?",
    answer: "These are starting prices. Your final fixed quote follows a scope review. We quote based on your specific client requirement with a fixed price in 24 hours.",
  },
  {
    question: "What does the Proof Sprint include?",
    answer: "One client requirement — such as a landing page, a tracking fix, or a small feature. Fixed scope, fixed price, 7–10 days. No long contracts.",
  },
  {
    question: "Do prices include hosting and third-party tools?",
    answer: "No. Hosting, domain registration, and third-party SaaS tool subscriptions are paid directly by you or your client. We set them up.",
  },
  {
    question: "Can we get a quote in another currency?",
    answer: "Yes. We primarily quote in INR for Indian agencies, GBP for UK agencies, and USD internationally. Let us know your preferred currency when submitting your brief.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "No. Individual projects and Proof Sprints require zero long-term commitment. Dedicated Dev Pods run month-to-month.",
  },
];

export default function RateCardClient() {
  const [currency, setCurrency] = useState<Currency>("INR");

  useEffect(() => {
    const saved = localStorage.getItem("bbs_currency") as Currency | null;
    if (saved && ["INR", "GBP", "USD"].includes(saved)) {
      setCurrency(saved);
    }
  }, []);

  const handleCurrencyChange = (curr: Currency) => {
    setCurrency(curr);
    localStorage.setItem("bbs_currency", curr);
  };

  const servicesList = [
    PRICING.proofSprint,
    PRICING.website,
    PRICING.ecommerce,
    PRICING.customWebApp,
    PRICING.tracking,
    PRICING.dedicatedPod,
    PRICING.maintenance,
  ];

  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest inline-block mb-3">
          Agency Rate Card
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight mb-4">
          Starting Prices for Agencies
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Predictable, white-label delivery rates designed for marketing agencies. Quote your clients with certainty.
        </p>

        {/* Currency Switcher */}
        <div className="inline-flex items-center p-1.5 bg-white border border-black/10 rounded-xl shadow-xs gap-1">
          {(["INR", "GBP", "USD"] as Currency[]).map((curr) => (
            <button
              key={curr}
              onClick={() => handleCurrencyChange(curr)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                currency === curr
                  ? "bg-[#C8860A] text-white shadow-xs"
                  : "text-gray-600 hover:text-black hover:bg-gray-100"
              }`}
            >
              {curr === "INR" ? "₹ INR" : curr === "GBP" ? "£ GBP" : "$ USD"}
            </button>
          ))}
        </div>
      </section>

      {/* Pricing Cards / Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Featured Proof Sprint Card */}
          <div className="bg-white border-2 border-[#C8860A] rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden md:col-span-2 lg:col-span-1">
            <div className="absolute top-0 right-0 bg-[#C8860A] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-bl-lg">
              Low Friction Trial
            </div>
            <div>
              <div className="text-xs font-bold text-[#C8860A] uppercase tracking-wider mb-2">First Offer</div>
              <h2 className="text-xl font-bold text-black mb-2">{PRICING.proofSprint.name}</h2>
              <p className="text-gray-500 text-xs leading-relaxed mb-6">
                {PRICING.proofSprint.description}
              </p>
            </div>
            <div>
              <div className="text-3xl font-black text-black mb-1">
                {formatCurrency(PRICING.proofSprint.prices[currency], currency)}
              </div>
              <div className="text-[11px] text-gray-500 mb-6">Starting price · 7–10 days</div>
              <a
                href="/#contact"
                className="block text-center text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider"
                style={{
                  background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)',
                }}
              >
                Book a Proof Sprint →
              </a>
            </div>
          </div>

          {/* Dev Pod Card */}
          <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Monthly Retainer</div>
              <h2 className="text-xl font-bold text-black mb-2">{PRICING.dedicatedPod.name}</h2>
              <p className="text-gray-500 text-xs leading-relaxed mb-6">
                {PRICING.dedicatedPod.description}
              </p>
            </div>
            <div>
              <div className="text-3xl font-black text-black mb-1">
                {formatCurrency(PRICING.dedicatedPod.prices[currency], currency)}
                <span className="text-xs font-normal text-gray-500"> / month</span>
              </div>
              <div className="text-[11px] text-gray-500 mb-6">One managed developer</div>
              <a
                href="/#contact"
                className="block text-center bg-gray-900 hover:bg-black text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Inquire for Pod →
              </a>
            </div>
          </div>

          {/* Maintenance Card */}
          <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Ongoing Care</div>
              <h2 className="text-xl font-bold text-black mb-2">{PRICING.maintenance.name}</h2>
              <p className="text-gray-500 text-xs leading-relaxed mb-6">
                {PRICING.maintenance.description}
              </p>
            </div>
            <div>
              <div className="text-3xl font-black text-black mb-1">
                {formatCurrency(PRICING.maintenance.prices[currency], currency)}
                <span className="text-xs font-normal text-gray-500"> / site / mo</span>
              </div>
              <div className="text-[11px] text-gray-500 mb-6">Updates, security & uptime</div>
              <a
                href="/#contact"
                className="block text-center border border-black/20 hover:border-black text-black py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Add Maintenance →
              </a>
            </div>
          </div>
        </div>

        {/* Project Rates List */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 shadow-xs mb-8">
          <h2 className="text-xl font-bold text-black mb-6">Project-Based Development</h2>
          <div className="divide-y divide-gray-100">
            {servicesList
              .filter((s) => !["proof-sprint", "dedicated-dev-pod", "maintenance"].includes(s.id))
              .map((service) => (
                <div key={service.id} className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-black text-base">{service.name}</h3>
                    <p className="text-gray-500 text-xs mt-1 max-w-xl">{service.description}</p>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <div className="text-lg font-black text-black">
                      From {formatCurrency(service.prices[currency], currency)}
                    </div>
                    <div className="text-[11px] text-gray-400">Fixed quote in 24h</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Note / Disclaimer */}
        <div className="text-center text-xs text-gray-500 max-w-lg mx-auto mb-12">
          <p className="italic">{PRICING_NOTE}</p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-[#FDF8F0] border border-[rgba(200,134,10,0.2)] rounded-2xl p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-2">Have a live requirement?</h2>
          <p className="text-gray-600 text-sm mb-6">
            Send us the scope or brief. We will return a firm fixed quote within 24 hours.
          </p>
          <a
            href="/#contact"
            className="inline-block text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm"
            style={{
              background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)',
            }}
          >
            Get a fixed quote in 24h →
          </a>
        </div>
      </section>

      <FAQSection faqs={rateCardFaqs} />
      <Footer />
    </main>
  );
}

