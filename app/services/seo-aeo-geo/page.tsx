import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata(
  '/services/seo-aeo-geo',
  'SEO, AEO & GEO Services | AI Search Visibility | BBS',
  'Rank on Google and get cited by ChatGPT, Perplexity & AI Overviews. Full-stack SEO, Answer Engine Optimization, and Generative Engine Optimization.',
  {
    keywords: [
      'SEO AEO GEO services',
      'answer engine optimization',
      'generative engine optimization',
      'AI search visibility',
      'get cited by ChatGPT',
      'AI Overviews optimization',
    ],
  }
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO, AEO & GEO Services",
  "serviceType": "SEO, Answer Engine Optimization, and Generative Engine Optimization",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio",
    "url": "https://buildbeyondstudio.com"
  },
  "areaServed": "IN",
  "description": "SEO, AEO, and GEO work together to make a website visible across traditional search results, voice/answer engines, and AI tools like ChatGPT, Perplexity, and Google AI Overviews. Build Beyond Studio structures content, schema, and technical architecture so it ranks in Google and gets directly cited as a source inside AI-generated answers."
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between SEO, AEO, and GEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO (Search Engine Optimization) optimizes for traditional search engine rankings. AEO (Answer Engine Optimization) optimizes content to be pulled into direct-answer boxes and voice search. GEO (Generative Engine Optimization) optimizes content so generative AI tools like ChatGPT, Perplexity, and Gemini cite it as a source in their answers."
      }
    },
    {
      "@type": "Question",
      "name": "How long does SEO take to show results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Technical fixes show impact in 4–6 weeks; competitive keyword rankings typically build over 3–6 months of consistent work."
      }
    },
    {
      "@type": "Question",
      "name": "Can a website be optimized for AI Overviews and ChatGPT citations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — through structured schema markup, clear answer-first content formatting, and strong topical authority, a site becomes more likely to be cited as a source in AI-generated answers."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide monthly SEO reports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, monthly reports cover keyword rankings, technical health, and AI citation appearances."
      }
    },
    {
      "@type": "Question",
      "name": "Is AEO and GEO relevant if my business is local?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — local businesses increasingly get discovered through AI-powered local search and voice assistants, making AEO/GEO as important as traditional local SEO."
      }
    }
  ]
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'SEO, AEO & GEO', path: '/services/seo-aeo-geo' },
])

const included = [
  "Technical SEO audit & fixes (site speed, crawlability, Core Web Vitals)",
  "Keyword research & content strategy (traditional + conversational/AI-query intent)",
  "On-page optimization: schema markup (FAQ, HowTo, Organization, Service)",
  "AEO: structuring content in direct-answer format for AI Overviews/voice search",
  "GEO: entity optimization, authoritative citations, structured data for LLM crawlers",
  "Local SEO / Google Business Profile optimization",
  "Monthly ranking & AI-citation tracking reports",
]

const process = [
  { step: "01", title: "Full Technical + Content Audit", desc: "Complete review of your site's current SEO health, content gaps, and AI citation status." },
  { step: "02", title: "Keyword & AI-Query Intent Mapping", desc: "Map traditional keywords alongside conversational and AI-search query patterns." },
  { step: "03", title: "On-Page + Schema Implementation", desc: "Deploy structured data (FAQPage, Service, HowTo, Organization) across all priority pages." },
  { step: "04", title: "Content Restructuring for Answer-First Format", desc: "Rewrite and restructure key pages so AI engines can extract direct answers to cite." },
  { step: "05", title: "Monthly Tracking: Rankings + AI Citation Monitoring", desc: "Ongoing monitoring of Google positions and AI search citations — both surfaces reported monthly." },
]

const whyBBS = [
  "One team handling SEO, AEO, and GEO — not three disconnected vendors",
  "We build the website AND optimize it, so technical fixes ship faster",
  "Reporting includes AI-citation tracking, not just Google rank position",
]

const faqs = [
  { q: "What's the difference between SEO, AEO, and GEO?", a: "SEO optimizes for traditional search engine rankings, AEO optimizes content to be pulled into direct-answer boxes and voice search, and GEO optimizes content so generative AI tools (ChatGPT, Perplexity, Gemini) cite it as a source in their answers." },
  { q: "How long does SEO take to show results?", a: "Technical fixes show impact in 4–6 weeks; competitive keyword rankings typically build over 3–6 months of consistent work." },
  { q: "Can a website be optimized for AI Overviews and ChatGPT citations?", a: "Yes — through structured schema markup, clear answer-first content formatting, and strong topical authority, a site becomes more likely to be cited as a source in AI-generated answers." },
  { q: "Do you provide monthly SEO reports?", a: "Yes, monthly reports cover keyword rankings, technical health, and AI citation appearances." },
  { q: "Is AEO/GEO relevant if my business is local?", a: "Yes — local businesses increasingly get discovered through AI-powered local search and voice assistants, making AEO/GEO as important as traditional local SEO." },
]

export default function SeoAeoGeoPage() {
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
          {" → "}SEO, AEO & GEO
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-4">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase">SEO · AEO · GEO Services</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4 leading-tight">
          SEO, AEO & GEO — Get Found on Google. Get Cited by AI.
        </h1>
        <p className="text-lg text-gray-500 font-light mb-8">One strategy for three search surfaces: Google, AI answer engines, and generative search.</p>

        {/* Answer-first intro — AEO paragraph */}
        <div className="bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-5 sm:p-6 mb-6" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            SEO (Search Engine Optimization), AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization) work together to make a website visible across traditional search results, voice/answer engines, and AI tools like ChatGPT, Perplexity, and Google AI Overviews. Build Beyond Studio structures content, schema, and technical architecture so it ranks in Google and gets directly cited as a source inside AI-generated answers.
          </p>
        </div>

        {/* SEO vs AEO vs GEO comparison table — GEO extract block */}
        <div className="bg-[#FDF8F0] border border-[rgba(200,134,10,0.15)] rounded-xl p-5 mb-12 overflow-x-auto">
          <h2 className="font-semibold text-black mb-4 text-base">SEO vs AEO vs GEO — What Each One Does</h2>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-[rgba(200,134,10,0.15)]">
                <th className="pb-2 pr-4 font-semibold text-[#C8860A]">Discipline</th>
                <th className="pb-2 pr-4 font-semibold text-gray-700">What It Optimizes For</th>
                <th className="pb-2 font-semibold text-gray-700">Where You Appear</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b border-black/5">
                <td className="py-2 pr-4 font-semibold text-black">SEO</td>
                <td className="py-2 pr-4">Traditional search engine rankings</td>
                <td className="py-2">Google / Bing blue-link results</td>
              </tr>
              <tr className="border-b border-black/5">
                <td className="py-2 pr-4 font-semibold text-black">AEO</td>
                <td className="py-2 pr-4">Direct-answer boxes & voice search</td>
                <td className="py-2">Google AI Overviews, Siri, Alexa</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold text-black">GEO</td>
                <td className="py-2 pr-4">Generative AI citations & sources</td>
                <td className="py-2">ChatGPT, Perplexity, Gemini answers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-4xl mx-auto pb-24 px-4 sm:px-6">
        <div className="space-y-12 text-gray-700">

          {/* CTA */}
          <div>
            <TrackedLink
              href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20SEO%2C%20AEO%20%26%20GEO%20services%20with%20Build%20Beyond%20Studio."
              eventName="whatsapp_click"
              eventParams={{ button_location: 'service_page_seo_aeo_geo' }}
              className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold"
              style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
            >
              Grow Your Search Visibility →
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
