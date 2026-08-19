import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata(
  '/services/analytics-tracking',
  'Analytics & Tracking Setup Services | Build Beyond Studio',
  'GA4, Meta Pixel & Conversions API setup, funnel audits, and dashboard reporting — accurate tracking so every marketing rupee is measurable.',
  {
    keywords: [
      'analytics and tracking setup services',
      'GA4 setup agency',
      'Meta Pixel Conversions API setup',
      'marketing funnel audit',
      'e-commerce tracking setup',
    ],
  }
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Analytics & Tracking Setup Services",
  "serviceType": "Analytics Setup, GA4, Meta Pixel, Conversions API",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio",
    "url": "https://buildbeyondstudio.com"
  },
  "areaServed": "IN",
  "description": "Build Beyond Studio sets up and audits GA4 event tracking, Meta Pixel and Conversions API, and full marketing funnels — identifying and fixing tracking gaps so every ad rupee and every website visitor action is accurately measured and reportable."
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is accurate tracking important for ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Without accurate conversion tracking, ad platforms optimize toward the wrong signals, wasting budget on the wrong audiences — accurate tracking is the foundation performance marketing is built on."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Meta Pixel and Conversions API?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Meta Pixel tracks conversions via the browser, which is increasingly blocked; Conversions API sends the same data server-side, making tracking more resilient to ad blockers and browser privacy changes."
      }
    },
    {
      "@type": "Question",
      "name": "Can you fix tracking on an existing website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we audit existing GA4/Pixel setups, identify issues like duplicate event firing or missing conversions, and fix them without needing a site rebuild."
      }
    },
    {
      "@type": "Question",
      "name": "Do you set up custom dashboards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, custom GA4 or Looker Studio dashboards are set up for ongoing visibility into what's actually working."
      }
    },
    {
      "@type": "Question",
      "name": "Is this only for e-commerce sites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — tracking setup applies to any site or app that needs to measure lead generation, sign-ups, or other conversion actions, not just online stores."
      }
    }
  ]
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Analytics & Tracking', path: '/services/analytics-tracking' },
])

const included = [
  "GA4 setup with custom events (view_item, add_to_cart, begin_checkout, purchase)",
  "Meta Pixel + server-side Conversions API setup",
  "Funnel audits to identify and fix drop-off/data-loss points",
  "Cross-domain and headless-commerce tracking fixes",
  "Custom reporting dashboards (GA4/Looker Studio)",
  "Ongoing tracking health monitoring",
]

const process = [
  { step: "01", title: "Full Tracking Audit", desc: "Complete review of your current GA4/Pixel setup — duplicate events, missing conversions, and broken pixels identified." },
  { step: "02", title: "Gap Identification", desc: "We map exactly where tracking is breaking or firing incorrectly, with a clear fix list." },
  { step: "03", title: "Implementation of Corrected Event Tracking", desc: "Code-level fixes deployed across your site, app, or headless stack — not just plugin installs." },
  { step: "04", title: "Dashboard Setup for Ongoing Visibility", desc: "GA4 or Looker Studio dashboard configured so you always see what's working at a glance." },
  { step: "05", title: "Monthly Tracking Health Check", desc: "Ongoing monitoring to catch regressions before they silently waste ad spend." },
]

const whyBBS = [
  "We debug tracking at the code level (headless Shopify, Next.js, custom stacks) — not just plugin installs",
  "Same team that runs your ads can see exactly what the tracking data says — no handoff gaps",
  "Fixes duplicate/broken event firing that silently wastes ad budget",
]

const faqs = [
  { q: "Why is accurate tracking important for ads?", a: "Without accurate conversion tracking, ad platforms optimize toward the wrong signals, wasting budget on the wrong audiences — accurate tracking is the foundation performance marketing is built on." },
  { q: "What's the difference between Meta Pixel and Conversions API?", a: "Meta Pixel tracks conversions via the browser, which is increasingly blocked; Conversions API sends the same data server-side, making tracking more resilient to ad blockers and browser privacy changes." },
  { q: "Can you fix tracking on an existing website?", a: "Yes, we audit existing GA4/Pixel setups, identify issues like duplicate event firing or missing conversions, and fix them without needing a site rebuild." },
  { q: "Do you set up custom dashboards?", a: "Yes, custom GA4 or Looker Studio dashboards are set up for ongoing visibility into what's actually working." },
  { q: "Is this only for e-commerce sites?", a: "No — tracking setup applies to any site or app that needs to measure lead generation, sign-ups, or other conversion actions, not just online stores." },
]

export default function AnalyticsTrackingPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />

      <section className="max-w-4xl mx-auto pt-28 pb-8 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          {" → "}
          <Link href="/services" className="hover:text-black transition-colors">Services</Link>
          {" → "}Analytics & Tracking
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-4">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase">Analytics & Tracking Setup Services</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4 leading-tight">
          Analytics & Tracking — Know Exactly What's Working
        </h1>
        <p className="text-lg text-gray-500 font-light mb-8">GA4, Meta Pixel, and funnel audits done right, the first time.</p>

        {/* Answer-first intro */}
        <div className="bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-5 sm:p-6 mb-6" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Build Beyond Studio sets up and audits GA4 event tracking, Meta Pixel and Conversions API, and full marketing funnels — identifying and fixing tracking gaps so every ad rupee and every website visitor action is accurately measured and reportable.
          </p>
        </div>

        {/* Meta Pixel vs Conversions API — GEO technical depth block */}
        <div className="bg-[#FDF8F0] border border-[rgba(200,134,10,0.15)] rounded-xl p-5 mb-12">
          <h2 className="font-semibold text-black mb-3 text-base">Meta Pixel vs Conversions API — What's the Difference?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-semibold text-[#C8860A] mb-1">Meta Pixel (Browser-Side)</div>
              <ul className="text-gray-600 space-y-1">
                <li>→ JavaScript fires in the user's browser</li>
                <li>→ Blocked by ad blockers & iOS privacy</li>
                <li>→ Missing ~30–40% of conversions on average</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-1">Conversions API (Server-Side)</div>
              <ul className="text-gray-600 space-y-1">
                <li>→ Data sent directly from your server</li>
                <li>→ Not affected by browser blocks</li>
                <li>→ More accurate, more optimizable data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto pb-24 px-4 sm:px-6">
        <div className="space-y-12 text-gray-700">

          {/* CTA */}
          <div>
            <TrackedLink
              href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20Analytics%20%26%20Tracking%20setup%20with%20Build%20Beyond%20Studio."
              eventName="whatsapp_click"
              eventParams={{ button_location: 'service_page_analytics_tracking' }}
              className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold"
              style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
            >
              Fix My Tracking →
            </TrackedLink>
          </div>

          {/* What's included */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">What's Included</h2>
            <ul className="space-y-2">
              {included.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                  <span className="text-[#C8860A] shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Our process */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">Our Process</h2>
            <div className="space-y-3">
              {process.map((item) => (
                <div key={item.step} className="flex gap-4 p-4 rounded-xl bg-white border border-[rgba(200,134,10,0.12)]" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
                  <span className="text-[#C8860A] font-mono text-sm pt-0.5 shrink-0">{item.step}</span>
                  <div>
                    <div className="font-semibold text-black mb-1">{item.title}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why BBS */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">Why Build Beyond Studio</h2>
            <ul className="space-y-2">
              {whyBBS.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                  <span className="text-[#C8860A] shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Internal links */}
          <div className="flex flex-wrap gap-3">
            <Link href="/services/google-meta-ads" className="text-[13px] text-[#C8860A] hover:underline">Google & Meta Ads →</Link>
            <Link href="/services/ai-content-video-production" className="text-[13px] text-[#C8860A] hover:underline">AI Content & Video Production →</Link>
            <Link href="/services/website-development" className="text-[13px] text-[#C8860A] hover:underline">Website Development →</Link>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-4 sm:p-5 rounded-xl bg-white border border-[rgba(200,134,10,0.12)]" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
                  <h3 className="font-semibold text-black mb-2 text-sm sm:text-base">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
