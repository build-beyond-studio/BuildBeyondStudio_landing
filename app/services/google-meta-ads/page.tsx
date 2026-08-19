import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata(
  '/services/google-meta-ads',
  'Google & Meta Ads Management Services | Build Beyond Studio',
  'Performance-driven Google Ads and Meta (Facebook/Instagram) Ads management. Conversion-focused campaigns, tracked and optimized for ROI.',
  {
    keywords: [
      'Google and Meta Ads management',
      'Facebook Instagram ads management',
      'Google Ads agency',
      'performance marketing services',
      'PPC management India',
    ],
  }
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Google & Meta Ads Management Services",
  "serviceType": "Performance Marketing — Google Ads and Meta Ads",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio",
    "url": "https://buildbeyondstudio.com"
  },
  "areaServed": "IN",
  "description": "Build Beyond Studio manages Google Ads (Search, Shopping, Performance Max) and Meta Ads (Facebook & Instagram) campaigns end-to-end — from account setup and conversion tracking to ad creative, bidding strategy, and weekly optimization — focused on cost-per-acquisition, not just impressions."
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the minimum ad budget to start?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend a minimum test budget to gather enough data for optimization; exact figures depend on industry and goals — discussed during the account audit."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle both Google Ads and Meta Ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we run both channels together so budget can shift toward whichever platform is performing better."
      }
    },
    {
      "@type": "Question",
      "name": "How is conversion tracking set up?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We implement GA4 conversion events and Meta Conversions API (server-side) for more accurate tracking than pixel-only setups, which are increasingly blocked by browsers."
      }
    },
    {
      "@type": "Question",
      "name": "How often do you optimize campaigns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Weekly, based on performance data — bid adjustments, audience refinement, and creative rotation."
      }
    },
    {
      "@type": "Question",
      "name": "Do you write the ad creative too?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, ad copywriting and creative direction are included; for video/image production, our AI Content & Video Production service can also be paired in."
      }
    }
  ]
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Google & Meta Ads', path: '/services/google-meta-ads' },
])

const included = [
  "Google Ads: Search, Shopping, Performance Max, YouTube campaigns",
  "Meta Ads: Facebook & Instagram campaign setup and management",
  "Conversion tracking setup (GA4, Meta Pixel/Conversions API)",
  "Ad copywriting and creative direction",
  "Audience research & targeting/retargeting strategy",
  "Weekly bid optimization and budget reallocation",
  "Monthly performance reporting (CPA, ROAS, CTR)",
]

const process = [
  { step: "01", title: "Account Audit / Fresh Account Setup", desc: "Audit existing accounts for waste and structural issues, or build a clean new account structure from scratch." },
  { step: "02", title: "Conversion Tracking Implementation", desc: "Critical first step before any spend — GA4 events + Meta Conversions API server-side wired correctly." },
  { step: "03", title: "Campaign Structure + Creative Build", desc: "Write ad copy, direct creative, build audiences, and structure campaigns for maximum quality score." },
  { step: "04", title: "Launch with Controlled Test Budget", desc: "Start with a test budget to validate assumptions before scaling." },
  { step: "05", title: "Weekly Optimization Cycles", desc: "Weekly bid adjustments, audience pruning, and creative rotation based on real conversion data." },
]

const whyBBS = [
  "We set up tracking correctly first — most agencies skip this and waste ad spend on bad data",
  "Same team that builds your website also wires up your pixels — no data gaps between site and ads",
  "Transparent reporting: real numbers, no vanity metrics",
]

const glossary = [
  { term: "CPA", def: "Cost Per Acquisition — how much you spend to win one paying customer." },
  { term: "ROAS", def: "Return on Ad Spend — revenue earned for every rupee spent on ads." },
  { term: "CTR", def: "Click-Through Rate — percentage of people who see an ad and click it." },
]

const faqs = [
  { q: "What's the minimum ad budget to start?", a: "We recommend a minimum test budget to gather enough data for optimization; exact figures depend on industry and goals — discussed during the account audit." },
  { q: "Do you handle both Google Ads and Meta Ads?", a: "Yes, we run both channels together so budget can shift toward whichever platform is performing better." },
  { q: "How is conversion tracking set up?", a: "We implement GA4 conversion events and Meta Conversions API (server-side) for more accurate tracking than pixel-only setups, which are increasingly blocked by browsers." },
  { q: "How often do you optimize campaigns?", a: "Weekly, based on performance data — bid adjustments, audience refinement, and creative rotation." },
  { q: "Do you write the ad creative too?", a: "Yes, ad copywriting and creative direction are included; for video/image production, our AI Content & Video Production service can also be paired in." },
]

export default function GoogleMetaAdsPage() {
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
          {" → "}Google & Meta Ads
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-4">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase">Performance Marketing Services</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4 leading-tight">
          Google & Meta Ads That Are Built to Convert, Not Just Spend
        </h1>
        <p className="text-lg text-gray-500 font-light mb-8">Direct-response ad campaigns, tracked to the rupee.</p>

        {/* Answer-first intro */}
        <div className="bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-5 sm:p-6 mb-6" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Build Beyond Studio manages Google Ads (Search, Shopping, Performance Max) and Meta Ads (Facebook & Instagram) campaigns end-to-end — from account setup and conversion tracking to ad creative, bidding strategy, and weekly optimization — focused on cost-per-acquisition, not just impressions.
          </p>
        </div>

        {/* Glossary — GEO extract block */}
        <div className="bg-[#FDF8F0] border border-[rgba(200,134,10,0.15)] rounded-xl p-5 mb-12">
          <h2 className="font-semibold text-black mb-3 text-base">Ad Metrics Glossary</h2>
          <div className="space-y-2">
            {glossary.map((g) => (
              <div key={g.term} className="flex gap-3 text-sm">
                <span className="font-semibold text-[#C8860A] shrink-0 w-12">{g.term}</span>
                <span className="text-gray-600">{g.def}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto pb-24 px-4 sm:px-6">
        <div className="space-y-12 text-gray-700">

          {/* CTA */}
          <div>
            <TrackedLink
              href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20Google%20%26%20Meta%20Ads%20management%20with%20Build%20Beyond%20Studio."
              eventName="whatsapp_click"
              eventParams={{ button_location: 'service_page_google_meta_ads' }}
              className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold"
              style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
            >
              Start Running Better Ads →
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
            <Link href="/services/seo-aeo-geo" className="text-[13px] text-[#C8860A] hover:underline">SEO, AEO & GEO →</Link>
            <Link href="/services/social-media-management" className="text-[13px] text-[#C8860A] hover:underline">Social Media Management →</Link>
            <Link href="/services/ai-content-video-production" className="text-[13px] text-[#C8860A] hover:underline">AI Content & Video Production →</Link>
            <Link href="/services/analytics-tracking" className="text-[13px] text-[#C8860A] hover:underline">Analytics & Tracking →</Link>
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
