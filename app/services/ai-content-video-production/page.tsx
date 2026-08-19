import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata(
  '/services/ai-content-video-production',
  'AI Content & Video Production Services | Build Beyond Studio',
  'Studio-grade product photos, videos, and marketing content generated with advanced AI models — faster and cheaper than traditional shoots.',
  {
    keywords: [
      'AI content and video production',
      'AI video production services',
      'AI product photography',
      'generative AI marketing content',
      'AI content creation agency',
    ],
  }
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Content & Video Production Services",
  "serviceType": "AI-Generated Content and Video Production",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio",
    "url": "https://buildbeyondstudio.com"
  },
  "areaServed": "IN",
  "description": "Build Beyond Studio produces product photography, marketing videos, and ad creatives using advanced generative AI models — delivering studio-quality visual content at a fraction of the cost and turnaround time of traditional photo/video shoots."
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is AI-generated content different from a real photoshoot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI generation uses advanced models to create studio-quality visuals from product images and briefs, skipping physical shoot logistics — turnaround is measured in days instead of weeks, at lower cost."
      }
    },
    {
      "@type": "Question",
      "name": "Can AI video be used for paid ad campaigns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, AI-generated video and images are delivered in ad-ready formats for Meta and Google campaigns."
      }
    },
    {
      "@type": "Question",
      "name": "How many revisions are included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Revision rounds are scoped during the brief stage based on the package; additional variants for A/B testing can be generated as needed."
      }
    },
    {
      "@type": "Question",
      "name": "Do you need my product to be physically shipped anywhere?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — generation typically works from existing product images or briefs, removing the need for physical shipping or studio time."
      }
    },
    {
      "@type": "Question",
      "name": "Can this be combined with your ads or social media services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, content produced here feeds directly into Google & Meta Ads and Social Media Management for a single connected pipeline."
      }
    }
  ]
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'AI Content & Video Production', path: '/services/ai-content-video-production' },
])

const included = [
  "AI-generated product photography (multiple angles, backgrounds, lifestyle scenes)",
  "AI-generated marketing and ad videos (short-form, product demos)",
  "Brand-consistent visual style guides for AI generation",
  "Revisions and variant generation for A/B testing ad creatives",
  "Source files delivered in ad-ready formats (Reels, Stories, Shopping ads)",
]

const process = [
  { step: "01", title: "Brand Brief & Reference Collection", desc: "We gather brand guidelines, existing product images, and reference styles before generating anything." },
  { step: "02", title: "AI-Generated Concept Drafts for Approval", desc: "Initial concepts generated and shared — you pick the direction before we go deep." },
  { step: "03", title: "Refinement Rounds Based on Feedback", desc: "Iterate on angles, backgrounds, and styling until the output matches your vision." },
  { step: "04", title: "Final Asset Delivery in Required Formats", desc: "All files delivered in platform-specific ad-ready dimensions (Reels, Stories, Shopping)." },
  { step: "05", title: "Optional: Direct Handoff into Ads or Social Media", desc: "Assets handed directly into your running campaigns or social calendar — zero re-briefing." },
]

const whyBBS = [
  "Days, not weeks — no studio scheduling or reshoot delays",
  "Multiple creative variants generated for cheap A/B testing",
  "Fully integrated with our Ads and Social Media services for one content pipeline",
]

const faqs = [
  { q: "How is AI-generated content different from a real photoshoot?", a: "AI generation uses advanced models to create studio-quality visuals from product images and briefs, skipping physical shoot logistics — turnaround is measured in days instead of weeks, at lower cost." },
  { q: "Can AI video be used for paid ad campaigns?", a: "Yes, AI-generated video and images are delivered in ad-ready formats for Meta and Google campaigns." },
  { q: "How many revisions are included?", a: "Revision rounds are scoped during the brief stage based on the package; additional variants for A/B testing can be generated as needed." },
  { q: "Do you need my product to be physically shipped anywhere?", a: "No — generation typically works from existing product images or briefs, removing the need for physical shipping or studio time." },
  { q: "Can this be combined with your ads or social media services?", a: "Yes, content produced here feeds directly into Google & Meta Ads and Social Media Management for a single connected pipeline." },
]

export default function AiContentVideoProductionPage() {
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
          {" → "}AI Content & Video Production
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-4">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase">AI Content & Video Production</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4 leading-tight">
          Studio-Grade Content, Generated — Not Shot
        </h1>
        <p className="text-lg text-gray-500 font-light mb-8">Product photos, marketing videos, and ad creatives, built with AI models.</p>

        {/* Answer-first intro */}
        <div className="bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-5 sm:p-6 mb-6" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Build Beyond Studio produces product photography, marketing videos, and ad creatives using advanced generative AI models — delivering studio-quality visual content at a fraction of the cost and turnaround time of traditional photo/video shoots.
          </p>
        </div>

        {/* How AI content generation works — GEO explainer */}
        <div className="bg-[#FDF8F0] border border-[rgba(200,134,10,0.15)] rounded-xl p-5 mb-12">
          <h2 className="font-semibold text-black mb-3 text-base">How AI Content Generation Works</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            AI content generation uses trained generative models (diffusion models, video generation models) to create studio-quality images and videos from text prompts, reference images, and brand guidelines — without physical sets, lighting rigs, or cameras. The output is indistinguishable from traditional photography for most commercial use cases, delivered in days rather than weeks, with unlimited variant generation for A/B testing at near-zero marginal cost.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto pb-24 px-4 sm:px-6">
        <div className="space-y-12 text-gray-700">

          {/* CTA */}
          <div>
            <TrackedLink
              href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20AI%20Content%20%26%20Video%20Production%20with%20Build%20Beyond%20Studio."
              eventName="whatsapp_click"
              eventParams={{ button_location: 'service_page_ai_content_video' }}
              className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold"
              style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
            >
              Generate Your Content →
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
            <Link href="/services/social-media-management" className="text-[13px] text-[#C8860A] hover:underline">Social Media Management →</Link>
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
