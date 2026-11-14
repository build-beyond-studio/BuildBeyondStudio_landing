import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

import { buildMetadata } from '@/lib/metadata'
import { CASE_STUDIES } from '../case-studies/data'
import SuccessStoryCard from './SuccessStoryCard'
import SuccessStoriesCarousel from './SuccessStoriesCarousel'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: "Agency Partner Case Studies | White Label Results | BBS",
  description: "Case studies from agencies that use BBS as their white-label engineering partner: what was built, how delivery worked, and what changed for the agency.",
  alternates: {
    canonical: "https://buildbeyondstudio.com/success-stories",
  },
  openGraph: {
    title: "Agency Partner Case Studies | White Label Results | BBS",
    description: "Case studies from agencies that use BBS as their white-label engineering partner: what was built, how delivery worked, and what changed for the agency.",
    url: "https://buildbeyondstudio.com/success-stories",
    type: "website",
  },
}

const pageSpecificFaqs = [
  {
    question: "How does a technical partner help an agency grow?",
    answer: "It allows the agency to accept more complex web development projects without hiring every specialist in-house. The agency focuses on sales, strategy, and client management while BBS handles technical execution."
  },
  {
    question: "Can white-label delivery improve our agency's margins?",
    answer: "Yes. Agencies avoid fixed developer payroll, recruitment fees, and bench overhead. You charge your client your standard retail rate and pay BBS an agreed fixed project fee, keeping the gross margin."
  },
  {
    question: "Do you support agencies with recurring work?",
    answer: "Yes. We offer ongoing delivery through dedicated development pods and monthly maintenance retainers for agencies needing continuous engineering support."
  },
  {
    question: "Can BBS help us offer services we currently do not provide?",
    answer: "Yes. If your agency receives briefs for custom React / Next.js builds, complex Shopify setups, or server-side conversion tracking, BBS can deliver them under your brand."
  },
  {
    question: "How quickly can we start a project?",
    answer: "Following brief submission and NDA execution, we respond within 24 hours with an itemised quote. Sprints can usually begin within 3–5 business days once scope is approved."
  },
  {
    question: "What makes your partnership different from hiring a freelancer?",
    answer: "Structure and accountability. BBS provides multi-developer redundancy, code review, structured QA, and formal project coordination, eliminating single-freelancer dependency and communication blackouts."
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
      "name": "Success Stories",
      "item": "https://buildbeyondstudio.com/success-stories"
    }
  ]
};

export default function SuccessStoriesPage() {
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
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 border-b border-black/5 bg-[#F5F2EC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#C8860A]">
            Agency Partner Case Studies
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">
            Agency Partner Case Studies
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-light mb-6">
            Case studies from marketing agencies that use BBS as their white-label engineering partner. See what was built, how delivery worked, and how agencies expanded their capacity without in-house payroll.
          </p>

          <div className="inline-block bg-white/80 border border-gray-200 px-4 py-2 rounded-full text-xs text-gray-600 font-medium">
            Agencies named here approved publication. We never name their clients.
          </div>
        </div>
      </section>

      {/* Case Studies Grid (Mobile & Tablet) */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:hidden">
        <div className="grid grid-cols-1 gap-12">
          {CASE_STUDIES.map((study) => (
            <SuccessStoryCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      {/* Case Studies Carousel (Desktop) */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 hidden lg:block relative">
        <SuccessStoriesCarousel studies={CASE_STUDIES} />
      </section>

      {/* Partner Alignment Note */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
        <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 text-center text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
          <p>
            * Outcome metrics shown above are based on documented partner feedback and reported revenue figures from the agency founders. Delivery times and gross margins vary depending on client scope, agency pricing structure, and project complexity.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-white border-t border-black/5 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Partner with BBS</span>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mt-2 mb-4">
            Deliver Reliable Engineering Under Your Agency Brand
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            We work behind the scenes in your communication channels, sprint workflows, and staging pipelines. Let's discuss a project brief or capacity model.
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
              href="/pricing-model"
              className="inline-block bg-white text-[#C8860A] border border-[rgba(200,134,10,0.3)] hover:bg-[#FDF8F0] px-8 py-3.5 rounded-lg transition-all font-semibold text-sm"
            >
              See Partner Pricing Model
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={pageSpecificFaqs} />
      <Footer />
    </main>
  )
}
