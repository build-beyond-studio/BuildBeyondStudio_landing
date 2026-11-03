import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import Header from '@/components/header';
import Footer from '@/components/footer';
import FAQSection from '@/components/FAQSection';
import { PRICING, PRICING_NOTE, formatCurrency } from '@/config/pricing';

export const metadata: Metadata = buildMetadata(
  '/white-label-web-development-india',
  'White Label Web Dev Partner for Indian Agencies | BBS',
  'BBS is the white-label development team for marketing agencies in India. Fixed quotes in 24 hours. INR pricing. Based in Ambikapur, Chhattisgarh.'
);

const indiaFaqs = [
  {
    question: "Are you based in India?",
    answer: "Yes. BBS is based in Ambikapur, Chhattisgarh. We work entirely in IST, matching your business hours.",
  },
  {
    question: "Do you quote in INR?",
    answer: "Yes. All quotes for Indian agencies are in Indian rupees (INR) with zero currency conversion friction.",
  },
  {
    question: "How quickly can you start?",
    answer: "We aim to send a fixed quote within 24 hours of receiving a clear brief. Once approved, development kicks off immediately.",
  },
  {
    question: "Will you ever contact our client?",
    answer: "Never. We work only with your agency team behind the scenes. Your client relationship stays entirely with you under strict NDA.",
  },
  {
    question: "Can you support multiple agency projects at once?",
    answer: "Yes. We work with 20+ agencies across India. Each project is handled separately with dedicated dev capacity.",
  },
  {
    question: "Is there a minimum project size?",
    answer: "No. The Proof Sprint is specifically designed for small, scoped requirements starting from ₹25,000. Start there.",
  },
];

export default function WhiteLabelWebDevelopmentIndiaPage() {
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
          India Focus · Same Time Zone (IST)
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-black tracking-tight mb-6 leading-tight">
          White Label Web Development for Indian Marketing Agencies
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          BBS is based in Ambikapur, Chhattisgarh. We work in IST — the exact same time zone as your agency. Fixed quote in 24 hours. Your brand, your client, our build.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/#contact"
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
              🇮🇳
            </div>
            <h3 className="font-bold text-black text-lg mb-2">Same Time Zone</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              We work in IST. No 3 AM messages or cross-continental lag. Real-time updates during your regular workday.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FDF8F0] border border-[rgba(200,134,10,0.2)] flex items-center justify-center text-lg mb-4">
              ₹
            </div>
            <h3 className="font-bold text-black text-lg mb-2">INR Pricing</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Transparent, fixed INR rates without forex fees or payment processor deductions. Simple domestic transfers.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FDF8F0] border border-[rgba(200,134,10,0.2)] flex items-center justify-center text-lg mb-4">
              🔒
            </div>
            <h3 className="font-bold text-black text-lg mb-2">100% Invisible</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              We operate strictly under your agency brand. Weekly Loom walkthroughs, full code IP handover, and strict NDA.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section (INR only) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-6 pb-4 border-b border-gray-100">
            <div>
              <h2 className="text-xl font-bold text-black">Starting Rates for Indian Agencies</h2>
              <p className="text-gray-500 text-xs mt-0.5">{PRICING_NOTE}</p>
            </div>
            <span className="text-xs font-bold text-[#C8860A] bg-[#FDF8F0] px-3 py-1 rounded-full border border-[rgba(200,134,10,0.2)] self-start sm:self-auto">
              Currency: INR (₹)
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
                    {formatCurrency(item.prices.INR, 'INR')}
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

      <FAQSection faqs={indiaFaqs} />
      <Footer />
    </main>
  );
}

