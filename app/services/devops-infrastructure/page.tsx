import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = buildMetadata(
  '/services/devops-infrastructure',
  'Infrastructure & Hosting Management for Agencies | BBS',
  'White label server, hosting, and infrastructure management. Zero downtime, monitored uptime, and support your agency can resell.'
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Auto-Scaling Cloud & DevOps",
  "serviceType": "Auto-Scaling Cloud & DevOps",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio"
  },
  "areaServed": "IN",
  "description": "Ensure your clients' sites never crash during high-traffic ad launches. Protect their ad spend and your reputation."
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'Auto-Scaling Cloud & DevOps', path: '/services/devops-infrastructure' },
]);


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does infrastructure management include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It may include hosting setup, server configuration, deployment support, monitoring, backups, security-related checks, performance improvements, and general infrastructure maintenance."
      }
    },
    {
      "@type": "Question",
      "name": "Can you manage infrastructure for multiple client websites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We can discuss a suitable process for agencies managing several client websites or applications. The scope depends on the number of environments and the level of support required."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help if a client's website keeps going down?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We can review the hosting, server resources, application errors, traffic patterns, and deployment process to identify likely causes and recommend fixes."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide managed hosting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Managed hosting or infrastructure support can be discussed based on the project requirements. We first need to understand the hosting provider, application, traffic, and support expectations."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help migrate a website or application to a new server?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Migration planning and execution can be included when the required access and technical information are available."
      }
    },
    {
      "@type": "Question",
      "name": "Is infrastructure support available after the website launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Ongoing infrastructure support can be arranged for monitoring, updates, troubleshooting, and maintenance."
      }
    }
  ]
};

const pageSpecificFaqs = [
  {
    "question": "What does infrastructure management include?",
    "answer": "It may include hosting setup, server configuration, deployment support, monitoring, backups, security-related checks, performance improvements, and general infrastructure maintenance."
  },
  {
    "question": "Can you manage infrastructure for multiple client websites?",
    "answer": "Yes. We can discuss a suitable process for agencies managing several client websites or applications. The scope depends on the number of environments and the level of support required."
  },
  {
    "question": "Can you help if a client's website keeps going down?",
    "answer": "Yes. We can review the hosting, server resources, application errors, traffic patterns, and deployment process to identify likely causes and recommend fixes."
  },
  {
    "question": "Do you provide managed hosting?",
    "answer": "Managed hosting or infrastructure support can be discussed based on the project requirements. We first need to understand the hosting provider, application, traffic, and support expectations."
  },
  {
    "question": "Can you help migrate a website or application to a new server?",
    "answer": "Yes. Migration planning and execution can be included when the required access and technical information are available."
  },
  {
    "question": "Is infrastructure support available after the website launch?",
    "answer": "Yes. Ongoing infrastructure support can be arranged for monitoring, updates, troubleshooting, and maintenance."
  }
];

export default function DevOpsInfrastructurePage() {
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
        <div className="mb-4 text-sm text-gray-500">Home → Services → Auto-Scaling Cloud & DevOps</div>

        {/* 1. Hero Section (Business Outcome) */}
        <h1 className="text-3xl sm:text-5xl font-bold text-black mb-6">
          Infrastructure Management Built for Agency-Hosted Client Sites
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
          Ensure your clients' sites never crash during high-traffic ad launches.
          Protect their ad spend and your reputation.
        </p>
        <div className="text-center sm:text-left mb-16">
          <TrackedLink
            href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20an%20Auto-Scaling%20Cloud%20%26%20DevOps%20brief%20with%20Build%20Beyond%20Studio."
            eventName="whatsapp_click"
            eventParams={{ button_location: 'service_page_devops_infrastructure' }}
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
              When a site goes down during a major campaign, the agency takes the blame for wasted ad spend. Pitching robust infrastructure acts as an insurance policy for your campaigns, ensuring maximum ROI for the client and protecting your agency's credibility.
            </p>
          </div>

          {/* 3. The Invisible Process */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">The Invisible Process</h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Traffic & Load Analysis', desc: 'We analyze expected campaign traffic and historical bottlenecks.' },
                { step: '02', title: 'Architecture Design', desc: 'We design an auto-scaling infrastructure tailored to the demand.' },
                { step: '03', title: 'Implementation & Testing', desc: 'We deploy the solution and run stress tests behind the scenes.' },
                { step: '04', title: 'Monitoring & Maintenance', desc: 'Continuous monitoring ensures uptime while you manage the campaign.' },
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
                { tech: 'Docker & Kubernetes', benefit: 'Provides stability and isolated environments.' },
                { tech: 'CI/CD Pipelines', benefit: 'Enables rapid, error-free updates without downtime.' },
                { tech: 'Cloud Deployment', benefit: 'Ensures flexible scaling during traffic spikes.' },
                { tech: 'Load Balancing', benefit: 'Distributes traffic to maintain speed and reliability.' },
              ].map((item) => (
                <li key={item.tech} className="flex flex-col gap-1 text-sm text-gray-600">
                  <div className="font-semibold text-black"><span className="text-[#C8860A] mr-2">✓</span> {item.tech}</div>
                  <div className="ml-5">{item.benefit}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Client Success Stories */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">Client Results</h2>
            <Link
              href="/case-studies/shivora-media"
              className="flex items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-white border border-[rgba(200,134,10,0.12)] hover:border-[#C8860A] transition-colors group"
              style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}
            >
              <div>
                <div className="font-semibold text-black text-[13px] sm:text-sm group-hover:text-[#C8860A] transition-colors">Shivora Media</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Bhopal</div>
              </div>
              <span className="text-[#C8860A] text-[13px] sm:text-sm font-bold whitespace-nowrap">+40% Capacity →</span>
            </Link>
          </div>

        </div>
      </section>
      <FAQSection faqs={pageSpecificFaqs} />
      <Footer />
    </main>
  )
}
