import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata(
  '/services/tracking-funnels',
  'E-Comm Funnel Audits & Conversion Tracking',
  'Resolve checkout drop-offs and track attribution with server-side Meta Conversions API (CAPI) and GA4 custom event tracking setup.',
  {
    keywords: [
      'GA4 Event Mapping',
      'Meta Conversions API',
      'Conversions API (CAPI)',
      'Server-side tracking',
      'Funnel Audits',
      'E-Comm Analytics',
      'Attribution setup',
    ],
  }
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "E-Comm Funnel Audits & Conversion Tracking",
  "serviceType": "E-Comm Funnel Audits & Conversion Tracking",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio"
  },
  "areaServed": "IN",
  "description": "End-to-end GA4 event mapping, Meta Pixel server-side API setups, and funnel audits to isolate and resolve drop-offs."
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'E-Comm Funnel Audits & Conversion Tracking', path: '/services/tracking-funnels' },
]);

export default function TrackingFunnelsPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">Home → Services → E-Comm Funnel Audits & Conversion Tracking</div>

        {/* 1. Hero Section (Business Outcome) */}
        <h1 className="text-5xl font-bold text-black mb-6">
          Conversion Tracking. Decrypted Funnels.
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          End-to-end GA4 event mapping, Meta Pixel server-side API setups, and funnel audits to isolate and resolve drop-offs.
        </p>
        <a href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20an%20E-Comm%20Tracking%20and%20Funnels%20brief%20with%20Build%20Beyond%20Studio." className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold mb-16" style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}>
          Fix Your Tracking & Funnels
        </a>

        <div className="space-y-12 text-gray-700">
          
          {/* 2. Why Pitch This? */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Why Pitch This?</h2>
            <p className="leading-relaxed mb-4 font-light">
              iOS 14+ destroyed standard browser-based cookie tracking. Without server-side tracking, your clients are flying blind and wasting ad spend due to misattributed conversions. Offering precise Conversions API setup and funnel audits makes your agency invaluable, proving exact ROI to stakeholders.
            </p>
          </div>

          {/* 3. The Invisible Process */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">The Invisible Process</h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Funnel Mapping & Audit', desc: 'We map out every stage of the customer journey, identifying drop-off points, leaky checkout fields, and broken steps.' },
                { step: '02', title: 'Server-Side API Integration', desc: 'We set up cloud-native server containers to deploy Meta Conversions API (CAPI) and GA4, bypassing browser limits.' },
                { step: '03', title: 'Event Configuration & Validation', desc: 'We build custom triggers and variables for purchases, checkouts, and custom interactions to ensure data precision.' },
                { step: '04', title: 'Attribution Dashboards', desc: 'We deliver clear reporting dashboards that showcase accurate customer acquisition costs and source-level attribution.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 rounded-lg bg-white border border-[rgba(200,134,10,0.12)]" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
                  <span className="text-[#C8860A] font-mono text-sm pt-1">{item.step}</span>
                  <div>
                    <div className="font-semibold text-black mb-1">{item.title}</div>
                    <div className="text-gray-600 text-sm leading-relaxed font-light">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. The Tech Stack (Translated) */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Tech Stack & Infrastructure</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { tech: 'Google Analytics 4 (GA4)', benefit: 'Advanced user journey mapping and custom event triggers.' },
                { tech: 'Meta Conversions API (CAPI)', benefit: 'Server-side tracking that bypasses ad-blockers and iOS privacy.' },
                { tech: 'Google Tag Manager Server Container', benefit: 'Secure, low-latency tracking tag script optimization.' },
                { tech: 'Multi-Touch Attribution Reports', benefit: 'True ROI calculations for multi-channel acquisition.' },
              ].map((item) => (
                <li key={item.tech} className="flex flex-col gap-1 text-sm text-gray-600">
                  <div className="font-semibold text-black"><span className="text-[#C8860A] mr-2">✓</span> {item.tech}</div>
                  <div className="ml-5 font-light">{item.benefit}</div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  )
}
