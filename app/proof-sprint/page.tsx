import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import Header from '@/components/header';
import Footer from '@/components/footer';
import FAQSection from '@/components/FAQSection';
import { PRICING, PRICING_NOTE } from '@/config/pricing';

export const metadata: Metadata = buildMetadata(
  '/proof-sprint',
  'Proof Sprint — Start Small, Ship Fast | BBS',
  'One client requirement. Fixed scope, fixed price, 7–10 days. The Proof Sprint is how marketing agencies test BBS before committing to a monthly pod.'
);

const sprintFaqs = [
  {
    question: "What if the work exceeds the initial scope?",
    answer: "We scope requirements tightly before kickoff. If you request extra features or changes during the sprint, we review and quote the delta before proceeding.",
  },
  {
    question: "Can an agency run more than one Proof Sprint?",
    answer: "Yes. Many partner agencies test us on 2 or 3 separate client requirements before switching to a Dedicated Dev Pod.",
  },
  {
    question: "What is handed over at completion?",
    answer: "100% full source code ownership, clean repository commits, documentation, and deployment configurations.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "Zero long-term commitment. Each Proof Sprint is an independent, fixed-scope contract with a mutual NDA.",
  },
  {
    question: "Can a Proof Sprint convert into an ongoing Pod?",
    answer: "Yes. When you are confident in our code quality and communication, we seamlessly transition into a dedicated monthly pod.",
  },
];

export default function ProofSprintPage() {
  const sprint = PRICING.proofSprint;

  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest inline-block mb-3">
          Low-Friction Trial
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-black tracking-tight mb-6 leading-tight">
          Start with a Proof Sprint
        </h1>
        <p className="text-gray-600 text-base sm:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          One client requirement. Fixed scope, fixed price, 7–10 days. If you like the work, we move to a monthly pod. No long contracts.
        </p>

        {/* Pricing Pill Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <div className="bg-white border-2 border-[#C8860A] px-6 py-4 rounded-2xl shadow-xs">
            <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">India</span>
            <span className="text-2xl font-black text-black">₹25,000</span>
          </div>
          <div className="bg-white border border-black/10 px-6 py-4 rounded-2xl shadow-xs">
            <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">UK</span>
            <span className="text-2xl font-black text-black">£590</span>
          </div>
          <div className="bg-white border border-black/10 px-6 py-4 rounded-2xl shadow-xs">
            <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">International</span>
            <span className="text-2xl font-black text-black">$750</span>
          </div>
        </div>

        <a
          href="/#contact"
          className="inline-block text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-shadow"
          style={{
            background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)',
          }}
        >
          Book a Proof Sprint →
        </a>
      </section>

      {/* Examples of Proof Sprints */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-10 shadow-xs mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">What fits in a Proof Sprint?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Campaign Landing Page",
                desc: "High-speed Next.js or Webflow landing page with responsive layouts and pixel-perfect design accuracy.",
              },
              {
                title: "Tracking & Conversion Setup",
                desc: "Full GA4, Meta Conversions API (CAPI), and GTM server-side tracking setup with verification audit.",
              },
              {
                title: "Feature Addition or Bug Fix",
                desc: "A scoped interactive widget, custom calculator, API integration, or critical frontend fix.",
              },
              {
                title: "Store Customization",
                desc: "Custom Shopify Liquid or WooCommerce sections, cart flow optimization, or checkout adjustments.",
              },
              {
                title: "Core Web Vitals Boost",
                desc: "Performance optimization to pass mobile Google PageSpeed benchmarks with 90+ scores.",
              },
              {
                title: "CRM or Webhook Integration",
                desc: "Connecting form submissions to HubSpot, Make, Zapier, or client backend endpoints securely.",
              },
            ].map((ex, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#FDF8F0] border border-[rgba(200,134,10,0.15)]">
                <div className="font-bold text-black text-sm mb-1">{ex.title}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{ex.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6">
            <div className="w-10 h-10 rounded-full bg-black text-white font-mono text-sm font-bold flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="font-bold text-black text-base mb-2">Share the Brief</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Send your design file (Figma) or a 1-page spec sheet via our contact form or WhatsApp.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-10 h-10 rounded-full bg-black text-white font-mono text-sm font-bold flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="font-bold text-black text-base mb-2">Fixed Quote in 24h</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              We review the scope, verify deliverables, and confirm the exact fixed price and delivery date.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-10 h-10 rounded-full bg-black text-white font-mono text-sm font-bold flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="font-bold text-black text-base mb-2">Ship in 7–10 Days</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Weekly Loom demo walkthrough, staging link review, and clean final code handover.
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500">
          <p className="italic">{PRICING_NOTE}</p>
        </div>
      </section>

      <FAQSection faqs={sprintFaqs} />
      <Footer />
    </main>
  );
}

