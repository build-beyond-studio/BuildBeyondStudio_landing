import type { Metadata } from 'next';
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingQuickLinks from "@/components/FloatingQuickLinks";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import AppShowcaseSection from "@/components/portfolio/AppShowcaseSection";
import SeoShowcaseSection from "@/components/portfolio/SeoShowcaseSection";
import FAQSection from '@/components/FAQSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Selected Builds: Websites, Stores and Tracking | BBS",
  description: "Selected website, ecommerce and tracking work from Build Beyond Studio, the white-label engineering partner for marketing agencies.",
  alternates: {
    canonical: "https://buildbeyondstudio.com/our-work",
  },
  openGraph: {
    title: "Selected Builds: Websites, Stores and Tracking | BBS",
    description: "Selected website, ecommerce and tracking work from Build Beyond Studio, the white-label engineering partner for marketing agencies.",
    url: "https://buildbeyondstudio.com/our-work",
    type: "website",
  },
};

const pageSpecificFaqs = [
  {
    question: "What types of builds are shown in this portfolio?",
    answer: "Our portfolio showcases custom agency client builds across high-converting e-commerce stores, responsive brand websites, custom web applications, and analytics setups delivered under white-label partnerships."
  },
  {
    question: "Are these projects delivered behind partner agencies?",
    answer: "Yes. The vast majority of our engineering work is delivered under NDA behind partner agencies. Where client permissions allow, we showcase sanitized visual walkthroughs and technical architectures."
  },
  {
    question: "Can we see examples matching our client's industry?",
    answer: "Yes. Contact us with your client brief, industry, and required tech stack (Next.js, Shopify, WordPress, WooCommerce, custom backend), and we will share relevant approved staging demos."
  },
  {
    question: "Can our agency use these case studies when pitching clients?",
    answer: "Yes. Active agency partners can showcase relevant architectural demos under their own brand during client pitches, supported by BBS as their back-of-house technical team."
  },
  {
    question: "Do you handle redesigns and platform migrations?",
    answer: "Yes. In addition to net-new builds, we regularly execute Shopify migrations, WordPress-to-Next.js refactors, performance overhauls, and legacy database cleanups."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": pageSpecificFaqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://buildbeyondstudio.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Selected Builds",
      "item": "https://buildbeyondstudio.com/our-work"
    }
  ]
};

export default function OurWork() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FloatingWhatsApp />
      <FloatingQuickLinks />
      <Header />

      {/* Hero Header */}
      <section className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-18 border-b border-black/5 bg-[#F5F2EC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#C8860A]">
            Engineering Portfolio
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-black tracking-tight mb-6">
            Selected Builds
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-light mb-6">
            Custom websites, e-commerce stores, web applications, and conversion tracking pipelines engineered by Build Beyond Studio behind our partner marketing agencies.
          </p>
          <div className="inline-block bg-white/80 border border-gray-200 px-4 py-1.5 rounded-full text-xs text-gray-600 font-medium">
            Delivered under NDA. End-client brands respected.
          </div>
        </div>
      </section>

      {/* Category Nav Anchor Pills */}
      <div className="max-w-5xl mx-auto px-4 pt-10 flex flex-wrap justify-center gap-3">
        <a href="#websites-and-stores" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-800 hover:border-[#C8860A] transition-all">
          Websites & Stores ↓
        </a>
        <a href="#web-applications" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-800 hover:border-[#C8860A] transition-all">
          Web Applications & Portals ↓
        </a>
        <a href="#technical-seo-tracking" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-800 hover:border-[#C8860A] transition-all">
          Technical SEO & Tracking ↓
        </a>
      </div>

      {/* Section 1: Websites & Online Stores */}
      <div id="websites-and-stores">
        <PortfolioSection columns={3} />
      </div>

      {/* Section 2: Custom Web Applications & Portals */}
      <div id="web-applications">
        <AppShowcaseSection />
      </div>

      {/* Section 3: Technical SEO & Tracking Integration */}
      <div id="technical-seo-tracking">
        <SeoShowcaseSection />
      </div>

      {/* Bottom CTA */}
      <section className="bg-white border-t border-black/5 py-16 sm:py-20 px-4 sm:px-6 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Have an Upcoming Build?</span>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mt-2 mb-4">
            Need a Similar Build for an Agency Client?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Send us the Figma design or project brief. We respond within 24 hours with a guaranteed fixed quote and milestone timeline.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="inline-block text-white px-8 py-3.5 rounded-lg transition-all font-semibold shadow-md hover:shadow-lg text-sm"
              style={{
                background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)',
                boxShadow: '0 4px 16px rgba(200,134,10,0.30)'
              }}
            >
              Send a Project Brief →
            </Link>
            <Link
              href="/how-we-partner"
              className="inline-block bg-white text-[#C8860A] border border-[rgba(200,134,10,0.3)] hover:bg-[#FDF8F0] px-8 py-3.5 rounded-lg transition-all font-semibold text-sm"
            >
              How Delivery Works
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-12">
        <FAQSection faqs={pageSpecificFaqs} />
        <Footer />
      </div>
    </main>
  );
}
