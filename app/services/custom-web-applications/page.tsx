import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata(
  '/services/custom-web-applications',
  'Custom Web & Portal Development',
  'Scale your agency MERN stack offerings. We build customized, high-retention client portals, SaaS dashboards, and web apps under your brand.'
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Web & Portal Development",
  "serviceType": "Custom Web & Portal Development",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio"
  },
  "areaServed": "IN",
  "description": "Build highly-customized, high-retention web platforms and portals that keep your clients engaged and loyal."
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'Custom Web & Portal Development', path: '/services/custom-web-applications' },
]);

export default function CustomWebApplicationsPage() {
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
        <div className="mb-4 text-sm text-gray-500">Home → Services → Custom Web & Portal Development</div>

        {/* 1. Hero Section (Business Outcome) */}
        <h1 className="text-3xl sm:text-5xl font-bold text-black mb-6">
          High-Retention Web & Portal Development. Seamless Delivery.
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
          Build highly-customized, high-retention web platforms and portals that keep your clients engaged and loyal.
        </p>
        <div className="text-center sm:text-left mb-16">
          <TrackedLink
            href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20a%20Web%20%26%20Portal%20Development%20brief%20with%20Build%20Beyond%20Studio."
            eventName="whatsapp_click"
            eventParams={{ button_location: 'service_page_custom_web_applications' }}
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
              Stop turning down lucrative custom development requests. Offering robust web applications allows you to capture lost revenue and lock in clients with sticky digital assets they rely on every day.
            </p>
          </div>

          {/* 3. The Invisible Process */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">The Invisible Process</h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Scope & Proposal', desc: 'You share the brief, and we provide a fixed-price proposal under NDA.' },
                { step: '02', title: 'Architecture & Design', desc: 'We map out the user flow and technical requirements.' },
                { step: '03', title: 'Development & QA', desc: 'We build the application and rigorously test it for quality and security.' },
                { step: '04', title: 'Deployment & Handoff', desc: 'We deploy the app and transfer full IP ownership to you.' },
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
                { tech: 'React / Next.js', benefit: 'Delivers lightning-fast front-end experiences.' },
                { tech: 'Node.js / Express', benefit: 'Powers robust and scalable back-end logic.' },
                { tech: 'MongoDB / PostgreSQL', benefit: 'Ensures secure and flexible data management.' },
                { tech: 'Tailwind CSS', benefit: 'Provides beautiful and highly responsive interfaces.' },
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
            <div className="space-y-3">
              {[
                { slug: 'techtastefood', client: 'TechTasteFood & FranFirst', stat: '+₹75K/mo Profit', city: 'New Delhi' },
                { slug: 'bvfx-digify', client: 'BVFX Digify', stat: '3× Faster Delivery', city: 'Bhilai' },
                { slug: 'clocked-agency', client: 'Clocked Agency', stat: '+₹90K/mo Revenue', city: 'Delhi' },
              ].map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="flex items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-white border border-[rgba(200,134,10,0.12)] hover:border-[#C8860A] transition-colors group"
                  style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}
                >
                  <div>
                    <div className="font-semibold text-black text-[13px] sm:text-sm group-hover:text-[#C8860A] transition-colors">{cs.client}</div>
                    <div className="text-[10px] sm:text-xs text-gray-400">{cs.city}</div>
                  </div>
                  <span className="text-[#C8860A] text-[13px] sm:text-sm font-bold whitespace-nowrap">{cs.stat} →</span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  )
}
