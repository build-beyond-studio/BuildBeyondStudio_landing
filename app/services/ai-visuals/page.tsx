import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import TrackedLink from '@/components/TrackedLink'
import AIShowcaseSection from '@/components/portfolio/AIShowcaseSection'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata(
  '/services/ai-visuals',
  'AI-Powered Visual Production',
  'Generate high-converting, studio-grade product photos and marketing video assets dynamically using state-of-the-art generative AI.',
  {
    keywords: [
      'AI visual production',
      'AI product shoots',
      'generative AI photography',
      'AI video ads',
      'cost-effective visual assets',
      'high-converting video assets',
      'studio-less visual production',
    ],
  }
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI-Powered Visual Production",
  "serviceType": "AI-Powered Visual Production",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio"
  },
  "areaServed": "IN",
  "description": "Cost-effective, studio-grade product photo and video assets generated via advanced AI models. Refresh your marketing creatives instantly."
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'AI-Powered Visual Production', path: '/services/ai-visuals' },
]);

export default function AiVisualsPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <section className="max-w-4xl mx-auto pt-24 pb-8 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">Home → Services → AI-Powered Visual Production</div>

        <h1 className="text-3xl sm:text-5xl font-bold text-black mb-6">
          AI Visual Production. Studio-Grade Content.
        </h1>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Cost-effective, studio-grade product photo and video assets generated via advanced AI models. Refresh your marketing creatives instantly.
        </p>
      </section>

      <div className="mb-16">
        <AIShowcaseSection hideHeader className="py-8 bg-transparent" />
      </div>

      <section className="max-w-4xl mx-auto pb-24 px-4 sm:px-6">
        <div className="text-center sm:text-left mb-16">
          <TrackedLink
            href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20an%20AI%20Visual%20Production%20brief%20with%20Build%20Beyond%20Studio."
            eventName="whatsapp_click"
            eventParams={{ button_location: 'service_page_ai_visuals' }}
            className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold"
            style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
          >
            Launch Your AI Visual Project
          </TrackedLink>
        </div>


        <div className="space-y-12 text-gray-700">
          
          {/* 2. Why Pitch This? */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">Why Pitch This?</h2>
            <p className="leading-relaxed mb-4 font-light">
              Traditional studio shoots are slow, logistically exhausting, and expensive. AI-powered visual production delivers high-quality product images and video ads in a fraction of the time and cost, allowing your clients to refresh their marketing creatives constantly without breaking the bank.
            </p>
          </div>

          {/* 3. The Invisible Process */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">The Invisible Process</h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Asset Training', desc: 'We compile basic product reference images from you and train custom AI models to understand the physical product dimensions.' },
                { step: '02', title: 'Scene & Prompt Generation', desc: 'We build custom virtual scenes, control lighting directions, and structure premium environments matching the client\'s branding.' },
                { step: '03', title: 'High-Resolution Rendering', desc: 'We generate high-resolution, photorealistic product placements and export clean digital assets.' },
                { step: '04', title: 'Neural Video Animation', desc: 'We animate high-performing image concepts into short-form video ads optimized for social media feeds.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-white border border-[rgba(200,134,10,0.12)]" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
                  <span className="text-[#C8860A] font-mono text-[13px] sm:text-sm pt-0.5 sm:pt-1">{item.step}</span>
                  <div>
                    <div className="font-semibold text-black mb-1 text-sm sm:text-base">{item.title}</div>
                    <div className="text-gray-600 text-[13px] sm:text-sm leading-relaxed font-light">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. The Tech Stack (Translated) */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">Technologies & Models</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { tech: 'Generative Diffusion Models', benefit: 'Custom product replacement and seamless light blending.' },
                { tech: 'AI Upscaling & Post-Processing', benefit: 'Crisp 4K assets optimized for web, digital ads, and print.' },
                { tech: 'Neural Video Generation', benefit: 'Dynamic product rotations, cinematic motions, and cuts.' },
                { tech: 'Automated Color Matching', benefit: 'Ensures exact physical product color and branding integrity.' },
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
