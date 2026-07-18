import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata(
  '/services/devops-infrastructure',
  'Auto-Scaling Cloud & DevOps',
  "Protect your client's ad spend. We setup auto-scaling AWS/GCP pipelines and Docker setups to campaign-proof high-traffic launches."
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
      <Header />
      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">Home → Services → Auto-Scaling Cloud & DevOps</div>

        {/* 1. Hero Section (Business Outcome) */}
        <h1 className="text-5xl font-bold text-black mb-6">
          Auto-Scaling Cloud & DevOps. Campaign-Proof Architecture.
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Ensure your clients' sites never crash during high-traffic ad launches. 
          Protect their ad spend and your reputation.
        </p>
        <TrackedLink
          href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20an%20Auto-Scaling%20Cloud%20%26%20DevOps%20brief%20with%20Build%20Beyond%20Studio."
          eventName="whatsapp_click"
          eventParams={{ button_location: 'service_page_devops_infrastructure' }}
          className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold mb-16"
          style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
        >
          Partner With Us
        </TrackedLink>

        <div className="space-y-12 text-gray-700">
          
          {/* 2. Why Pitch This? */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Why Pitch This?</h2>
            <p className="leading-relaxed mb-4">
              When a site goes down during a major campaign, the agency takes the blame for wasted ad spend. Pitching robust infrastructure acts as an insurance policy for your campaigns, ensuring maximum ROI for the client and protecting your agency's credibility.
            </p>
          </div>

          {/* 3. The Invisible Process */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">The Invisible Process</h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Traffic & Load Analysis', desc: 'We analyze expected campaign traffic and historical bottlenecks.' },
                { step: '02', title: 'Architecture Design', desc: 'We design an auto-scaling infrastructure tailored to the demand.' },
                { step: '03', title: 'Implementation & Testing', desc: 'We deploy the solution and run stress tests behind the scenes.' },
                { step: '04', title: 'Monitoring & Maintenance', desc: 'Continuous monitoring ensures uptime while you manage the campaign.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 rounded-lg bg-white border border-[rgba(200,134,10,0.12)]" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
                  <span className="text-[#C8860A] font-mono text-sm pt-1">{item.step}</span>
                  <div>
                    <div className="font-semibold text-black mb-1">{item.title}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. The Tech Stack (Translated) */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">The Tech Stack</h2>
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
            <h2 className="text-2xl font-semibold text-black mb-4">Client Results</h2>
            <Link
              href="/case-studies/shivora-media"
              className="flex items-center justify-between gap-4 p-4 rounded-lg bg-white border border-[rgba(200,134,10,0.12)] hover:border-[#C8860A] transition-colors group"
              style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}
            >
              <div>
                <div className="font-semibold text-black text-sm group-hover:text-[#C8860A] transition-colors">Shivora Media</div>
                <div className="text-xs text-gray-400">Bhopal</div>
              </div>
              <span className="text-[#C8860A] text-sm font-bold whitespace-nowrap">+40% Capacity →</span>
            </Link>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  )
}
