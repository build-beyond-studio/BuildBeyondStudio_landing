import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import Header from '@/components/header';
import Footer from '@/components/footer';
import FAQSection from '@/components/FAQSection';
import { PRICING, PRICING_NOTE, formatCurrency } from '@/config/pricing';

export const metadata: Metadata = buildMetadata(
  '/white-label-web-development-uk',
  'White Label Web Development for UK Agencies | BBS',
  'BBS is the white-label dev team for UK marketing agencies. GBP pricing. Fixed quote in 24 hours. IST/GMT overlap arranged at kickoff.'
);

const ukFaqs = [
  {
    question: "Are you based in the UK?",
    answer: "No. BBS is based in India. We work with UK marketing agencies remotely and agree a daily call window at kickoff.",
  },
  {
    question: "Do you quote in GBP?",
    answer: "Yes. All quotes for UK agencies are provided in pounds sterling (£ GBP) with no conversion surprises.",
  },
  {
    question: "How do you handle the time zone difference?",
    answer: "We agree a daily overlap window at kickoff — typically your UK morning hours. You receive active responses during your working day.",
  },
  {
    question: "Will you contact our client?",
    answer: "Never. We work strictly behind your agency. All code, repos, and communications are fully white-labeled.",
  },
  {
    question: "Do you sign an NDA?",
    answer: "Yes. We sign a mutual NDA before receiving client briefs or accessing sensitive accounts.",
  },
  {
    question: "What is the Proof Sprint?",
    answer: "One defined client requirement — such as a landing page, tracking setup, or feature. Fixed scope, £590, 7–10 days.",
  },
];

export default function WhiteLabelWebDevelopmentUkPage() {
  const services = [
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

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest inline-block mb-3">
          UK Partner Focus · Overlap Hours
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-black tracking-tight mb-6 leading-tight">
          White Label Web Development for UK Marketing Agencies
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          BBS is based in India, working in your time zone. We agree a daily call window with you at kickoff. Fixed quote in 24 hours. Your brand, your client, our build.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:admin@buildbeyondstudio.com"
            className="w-full sm:w-auto text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider"
            style={{
              background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)',
            }}
          >
            Get a fixed quote in 24h →
          </a>
          <a
            href="/rate-card"
            className="w-full sm:w-auto bg-white border border-black/15 text-gray-800 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-gray-50"
          >
            View Full Rate Card
          </a>
        </div>
      </section>

      {/* 3 Value Pillars */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FDF8F0] border border-[rgba(200,134,10,0.2)] flex items-center justify-center text-lg mb-4">
              💷
            </div>
            <h3 className="font-bold text-black text-lg mb-2">GBP Pricing</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              All quotes provided in British Pounds (£). Clear margins for your agency with zero foreign exchange fees.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FDF8F0] border border-[rgba(200,134,10,0.2)] flex items-center justify-center text-lg mb-4">
              ⏱️
            </div>
            <h3 className="font-bold text-black text-lg mb-2">Daily Call Window</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              We agree a daily call window with you at kickoff. Async updates on Slack with weekly Loom video demos.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FDF8F0] border border-[rgba(200,134,10,0.2)] flex items-center justify-center text-lg mb-4">
              🛡️
            </div>
            <h3 className="font-bold text-black text-lg mb-2">Invisible Delivery</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Strict NDA upfront. BBS never contacts your clients. 100% intellectual property handover upon delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section (GBP only) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-6 pb-4 border-b border-gray-100">
            <div>
              <h2 className="text-xl font-bold text-black">Starting Rates for UK Agencies</h2>
              <p className="text-gray-500 text-xs mt-0.5">{PRICING_NOTE}</p>
            </div>
            <span className="text-xs font-bold text-[#C8860A] bg-[#FDF8F0] px-3 py-1 rounded-full border border-[rgba(200,134,10,0.2)] self-start sm:self-auto">
              Currency: GBP (£)
            </span>
          </div>

          <div className="divide-y divide-gray-100">
            {services.map((item) => (
              <div key={item.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-bold text-black text-sm">{item.name}</h3>
                  <p className="text-gray-500 text-xs mt-0.5">{item.description}</p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <div className="text-base font-black text-black">
                    {formatCurrency(item.prices.GBP, 'GBP')}
                  </div>
                  <div className="text-[10px] text-gray-400">
                    {item.unit ? item.unit : 'Starting price'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={ukFaqs} />
      <Footer />
    </main>
  );
}

