import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = buildMetadata(
  '/services/technical-consulting',
  'White Label Technical Consulting for Agencies | BBS',
  'Bring in senior technical expertise without hiring. White label consulting on architecture, platform choice, and project scoping.'
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fractional CTO & Tech Roadmap",
  "serviceType": "Fractional CTO & Tech Roadmap",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio"
  },
  "areaServed": "IN",
  "description": "Bring executive-level tech strategy to your clients without hiring a full-time CTO. We provide the roadmap, you bill for the strategy."
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'Fractional CTO & Tech Roadmap', path: '/services/technical-consulting' },
]);


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When should an agency bring in a technical consultant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is useful when a project has unclear requirements, complex integrations, performance issues, technology decisions, or risks that your internal team cannot confidently assess."
      }
    },
    {
      "@type": "Question",
      "name": "Can you review a client's existing technology setup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We can review the current website, application, hosting, integrations, or development approach and provide practical recommendations."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us choose the right technology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We consider the project's budget, functionality, performance, scalability, maintenance needs, and existing systems before making a recommendation."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help agencies estimate technical projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We can help break down features, identify technical dependencies, highlight risks, and prepare a more realistic development estimate."
      }
    },
    {
      "@type": "Question",
      "name": "Can you work with our existing developers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We can support your team with architecture reviews, technical decisions, troubleshooting, documentation, or specialist guidance."
      }
    },
    {
      "@type": "Question",
      "name": "Is technical consulting available as a one-time service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can request support for a specific decision, project review, technical audit, or scoping requirement without necessarily committing to a full development project."
      }
    }
  ]
};

const pageSpecificFaqs = [
  {
    "question": "When should an agency bring in a technical consultant?",
    "answer": "It is useful when a project has unclear requirements, complex integrations, performance issues, technology decisions, or risks that your internal team cannot confidently assess."
  },
  {
    "question": "Can you review a client's existing technology setup?",
    "answer": "Yes. We can review the current website, application, hosting, integrations, or development approach and provide practical recommendations."
  },
  {
    "question": "Can you help us choose the right technology?",
    "answer": "Yes. We consider the project's budget, functionality, performance, scalability, maintenance needs, and existing systems before making a recommendation."
  },
  {
    "question": "Do you help agencies estimate technical projects?",
    "answer": "Yes. We can help break down features, identify technical dependencies, highlight risks, and prepare a more realistic development estimate."
  },
  {
    "question": "Can you work with our existing developers?",
    "answer": "Yes. We can support your team with architecture reviews, technical decisions, troubleshooting, documentation, or specialist guidance."
  },
  {
    "question": "Is technical consulting available as a one-time service?",
    "answer": "Yes. You can request support for a specific decision, project review, technical audit, or scoping requirement without necessarily committing to a full development project."
  }
];

export default function TechnicalConsultingPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">Home → Services → Fractional CTO & Tech Roadmap</div>

        {/* 1. Hero Section (Business Outcome) */}
        <h1 className="text-3xl sm:text-5xl font-bold text-black mb-6">
          Technical Consulting for Agencies Without a CTO
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
          Bring executive-level tech strategy to your clients without hiring a full-time CTO. 
          We provide the roadmap, you bill for the strategy.
        </p>
        <div className="text-center sm:text-left mb-16">
          <TrackedLink
            href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20a%20Fractional%20CTO%20%26%20Tech%20Roadmap%20brief%20with%20Build%20Beyond%20Studio."
            eventName="whatsapp_click"
            eventParams={{ button_location: 'service_page_technical_consulting' }}
            className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold"
            style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
          >
            Partner With Us
          </TrackedLink>
        </div>

        <div className="space-y-12 text-gray-700">
          
          {/* 2. Why Pitch This? */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">Why Pitch This?</h2>
            <p className="leading-relaxed mb-4">
              Strategic consulting elevates your agency from a vendor to an indispensable partner. By offering CTO-level guidance, you unlock premium retainers and gain deeper integration into your client's business.
            </p>
          </div>

          {/* 3. The Invisible Process */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">The Invisible Process</h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Audit & Analysis', desc: 'We review the client\'s current tech stack and architecture behind the scenes.' },
                { step: '02', title: 'Strategy Formation', desc: 'We develop a comprehensive roadmap tailored to their business goals.' },
                { step: '03', title: 'White-Label Presentation', desc: 'We provide you with the documentation and insights to present to the client.' },
                { step: '04', title: 'Ongoing Advisory', desc: 'We remain available for continuous technical support and adjustments.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-white border border-[rgba(200,134,10,0.12)]" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
                  <span className="text-[#C8860A] font-mono text-[13px] sm:text-sm pt-0.5 sm:pt-1">{item.step}</span>
                  <div>
                    <div className="font-semibold text-black mb-1 text-sm sm:text-base">{item.title}</div>
                    <div className="text-gray-600 text-[13px] sm:text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. The Tech Stack (Translated) */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">The Tech Stack</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { tech: 'Architecture Review', benefit: 'Ensures stability and scalable foundations.' },
                { tech: 'Tech Stack Selection', benefit: 'Future-proofs the client\'s investments.' },
                { tech: 'Security Audits', benefit: 'Protects data and builds trust.' },
                { tech: 'Performance Optimization', benefit: 'Enhances speed and user experience.' },
              ].map((item) => (
                <li key={item.tech} className="flex flex-col gap-1 text-sm text-gray-600">
                  <div className="font-semibold text-black"><span className="text-[#C8860A] mr-2">✓</span> {item.tech}</div>
                  <div className="ml-5">{item.benefit}</div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
      <FAQSection faqs={pageSpecificFaqs} />
      <Footer />
    </main>
  )
}
