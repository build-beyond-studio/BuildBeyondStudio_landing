import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata(
  '/services/aeo-geo',
  'AI-Era Search Visibility (SEO, AEO & GEO)',
  "Optimize your client's code to rank on Google and get cited as a top authority in AI answers like ChatGPT Search, Claude, and Perplexity.",
  {
    keywords: [
      'AEO optimization',
      'GEO optimization',
      'Answer Engine Optimization',
      'Generative Engine Optimization',
      'AI search visibility',
      'ChatGPT Search citations',
      'Perplexity SEO',
      'LLM citations',
    ],
  }
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI-Era Search Visibility (SEO, AEO & GEO)",
  "serviceType": "AI-Era Search Visibility (SEO, AEO & GEO)",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio"
  },
  "areaServed": "IN",
  "description": "Optimize your web code and content to rank in traditional search engines (Google) and be cited as a top-tier source by AI-powered search engines (ChatGPT Search, Perplexity, Google Gemini, Claude)."
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'AI-Era Search Visibility (SEO, AEO & GEO)', path: '/services/aeo-geo' },
]);

export default function AeoGeoPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">Home → Services → AI-Era Search Visibility (SEO, AEO & GEO)</div>

        {/* 1. Hero Section (Business Outcome) */}
        <h1 className="text-5xl font-bold text-black mb-6">
          AI-Era Search Visibility (SEO, AEO & GEO). Future-Proof Traffic.
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Optimize your web code and content to rank in traditional search engines (Google) and be cited as a top-tier source by AI-powered search engines (ChatGPT Search, Perplexity, Google Gemini, Claude).
        </p>
        <a href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20an%20AI-Era%20Search%20Visibility%20brief%20with%20Build%20Beyond%20Studio." className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold mb-16" style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}>
          Grow Your AI Visibility
        </a>

        <div className="space-y-12 text-gray-700">
          
          {/* 2. Why Pitch This? */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Why Pitch This?</h2>
            <p className="leading-relaxed mb-4 font-light">
              Traditional SEO is no longer enough. Buyers are switching to AI search engines to find solutions. By offering AEO and GEO, you position your agency at the absolute cutting edge, helping clients secure high-value brand citations where purchase decisions are actually being made.
            </p>
          </div>

          {/* 3. The Invisible Process */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">The Invisible Process</h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'LLM Citation Audit', desc: 'We map out how AI engines currently perceive and cite your client\'s brand, identifying missing mentions and context gaps.' },
                { step: '02', title: 'Schema & Entity Injecting', desc: 'We implement hyper-structured JSON-LD schemas to feed AI scrapers structured knowledge and clear brand relationships.' },
                { step: '03', title: 'Answer Engine Optimization', desc: 'We restructure key content assets into precise, citation-friendly formats optimized for LLM retrievers and vector databases.' },
                { step: '04', title: 'Continuous Tracking', desc: 'We monitor AI search result references and update structured context maps to ensure persistent citation dominance.' },
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
            <h2 className="text-2xl font-semibold text-black mb-4">The Optimization Framework</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { tech: 'Schema.org Structured Data', benefit: 'Feeding AI models unambiguous entity relationships.' },
                { tech: 'JSON-LD Schema Injectors', benefit: 'Integrating machine-readable metadata into page templates.' },
                { tech: 'LLM Context Citations', benefit: 'Structuring copy for Retrieval-Augmented Generation (RAG) systems.' },
                { tech: 'Core Web Vitals & Clean DOM', benefit: 'Ensuring lightning-fast indexation by AI crawlers and bots.' },
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
