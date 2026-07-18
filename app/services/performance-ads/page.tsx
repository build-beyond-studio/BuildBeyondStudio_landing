import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata(
  '/services/performance-ads',
  'Meta & Google Performance Ads',
  'Maximize advertising margins with direct-response paid traffic setup, high-intent keywords, high-converting copy, and bidding optimization.',
  {
    keywords: [
      'Meta Ads',
      'Google Ads',
      'Performance Ads',
      'Paid Traffic',
      'Conversion Copywriting',
      'Low Cost-Per-Acquisition',
      'ROI Bidding Optimization',
    ],
  }
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Meta & Google Performance Ads",
  "serviceType": "Meta & Google Performance Ads",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio"
  },
  "areaServed": "IN",
  "description": "Direct-response paid traffic setup, conversion copywriting, and bidding optimization geared for high-margin ROI and maximum lead/sales volume."
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'Meta & Google Performance Ads', path: '/services/performance-ads' },
]);

export default function PerformanceAdsPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">Home → Services → Meta & Google Performance Ads</div>

        {/* 1. Hero Section (Business Outcome) */}
        <h1 className="text-5xl font-bold text-black mb-6">
          Performance Ads. High-Margin Acquisition.
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Direct-response paid traffic setup, conversion copywriting, and bidding optimization geared for high-margin ROI and maximum lead/sales volume.
        </p>
        <a href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20a%20Performance%20Ads%20brief%20with%20Build%20Beyond%20Studio." className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold mb-16" style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}>
          Maximize Your Ad ROI
        </a>

        <div className="space-y-12 text-gray-700">
          
          {/* 2. Why Pitch This? */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Why Pitch This?</h2>
            <p className="leading-relaxed mb-4 font-light">
              Most ad agencies struggle with tech setup, tracking issues, and landing page drops. By partnering with us, you offer enterprise-grade ad configuration, optimized landing page funnels, and conversion-focused copy that maximizes ad spend efficiency and lowers acquisition costs.
            </p>
          </div>

          {/* 3. The Invisible Process */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">The Invisible Process</h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Ad Account Audit', desc: 'We review current campaigns, historical data, search terms, and tracking configurations to uncover easy optimization wins.' },
                { step: '02', title: 'Creative & Copy Development', desc: 'We craft high-intent, direct-response ad copy and structure custom creative layouts that grab attention and drive action.' },
                { step: '03', title: 'Funnel Setup & Launch', desc: 'We deploy fully-optimized landing pages and launch structured campaign hierarchies on Google and Meta.' },
                { step: '04', title: 'Bidding & Scaling Optimization', desc: 'We continuously optimize bids, targeting, search terms, and creatives to scale ROI while lowering acquisition cost.' },
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
            <h2 className="text-2xl font-semibold text-black mb-4">Platforms & Methodologies</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { tech: 'Meta Ads Manager', benefit: 'Hyper-targeted advertising across Facebook and Instagram.' },
                { tech: 'Google Ads Console', benefit: 'Intent-driven search and YouTube performance campaigns.' },
                { tech: 'Direct-Response Copywriting', benefit: 'Angles optimized for immediate buyer actions.' },
                { tech: 'A/B Testing Frameworks', benefit: 'Systematic testing of creatives, headings, and offers.' },
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
