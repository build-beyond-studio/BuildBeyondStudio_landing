import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata(
  '/services/website-development',
  'Website Development Services | Build Beyond Studio',
  'Custom, high-converting website development for businesses and agencies. Fast, SEO-ready, mobile-first builds delivered on fixed timelines.'
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Website Development Services",
  "serviceType": "Website Development",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio",
    "url": "https://buildbeyondstudio.com"
  },
  "areaServed": "IN",
  "description": "Build Beyond Studio builds custom business websites, e-commerce stores, and client portals using React, Next.js, and Node.js. Every website is mobile-first, loads in under 2 seconds, and is structured for both search engine ranking and AI answer engine visibility from day one."
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does website development take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard business website takes 2–3 weeks. A custom web application or portal takes 4–8 weeks depending on complexity."
      }
    },
    {
      "@type": "Question",
      "name": "What tech stack do you use for website development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build on the MERN stack (MongoDB, Express, React, Node.js) with Next.js for frontend, giving faster load times and better SEO than typical template-based sites."
      }
    },
    {
      "@type": "Question",
      "name": "Do I own the website after it's built?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. 100% of source code, design files, and documentation transfer to you on delivery. We retain nothing."
      }
    },
    {
      "@type": "Question",
      "name": "Can you redesign my existing website instead of building new?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — we offer full redesigns and migrations with zero downtime during the switch."
      }
    },
    {
      "@type": "Question",
      "name": "Is the website SEO-ready out of the box?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every site ships with schema markup, optimized meta data, sitemap, and Core Web Vitals tuning included, not as an add-on."
      }
    }
  ]
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Website Development', path: '/services/website-development' },
])

const included = [
  "Custom UI/UX design (no drag-and-drop templates)",
  "Responsive, mobile-first development (Next.js/React)",
  "On-page SEO foundation: schema markup, meta tags, sitemap, Core Web Vitals optimization",
  "CMS integration for easy content updates",
  "E-commerce builds (Shopify headless, custom cart/checkout)",
  "SSL, hosting setup, and deployment (Vercel/Hostinger/AWS)",
  "30-day post-launch bug-fix support included",
]

const process = [
  { step: "01", title: "Discovery Call", desc: "Goals, target audience, competitors — we map out exactly what the site needs to achieve." },
  { step: "02", title: "Wireframe & Design Approval", desc: "Full UI/UX wireframes built for your review and sign-off before development starts." },
  { step: "03", title: "Development Sprint", desc: "2–6 weeks depending on scope — clean, documented code on the MERN/Next.js stack." },
  { step: "04", title: "QA + Client Review", desc: "Rigorous cross-device testing and a client review round before launch." },
  { step: "05", title: "Launch + Handover", desc: "Full deployment with complete documentation and IP transfer." },
]

const whyBBS = [
  "Full IP and code ownership transferred on delivery — nothing held back",
  "Built on modern stack (MERN + Next.js), not outdated WordPress hacks",
  "Fixed-price quotes, no scope creep billing",
]

const faqs = [
  { q: "How long does website development take?", a: "A standard business website takes 2–3 weeks. A custom web application or portal takes 4–8 weeks depending on complexity." },
  { q: "What tech stack do you use for website development?", a: "We build on the MERN stack (MongoDB, Express, React, Node.js) with Next.js for frontend, giving faster load times and better SEO than typical template-based sites." },
  { q: "Do I own the website after it's built?", a: "Yes. 100% of source code, design files, and documentation transfer to you on delivery. We retain nothing." },
  { q: "Can you redesign my existing website instead of building new?", a: "Yes — we offer full redesigns and migrations with zero downtime during the switch." },
  { q: "Is the website SEO-ready out of the box?", a: "Yes. Every site ships with schema markup, optimized meta data, sitemap, and Core Web Vitals tuning included, not as an add-on." },
]

export default function WebsiteDevelopmentPage() {
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
          {" → "}Website Development
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-4">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase">Website Development Services</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4 leading-tight">
          Website Development That Converts Visitors Into Clients
        </h1>
        <p className="text-lg text-gray-500 font-light mb-8">Fast, custom-built, SEO-ready websites — not templates.</p>

        {/* Answer-first intro — AEO paragraph */}
        <div className="bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-5 sm:p-6 mb-12" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Build Beyond Studio builds custom business websites, e-commerce stores, and client portals using React, Next.js, and Node.js. Every website is mobile-first, loads in under 2 seconds, and is structured for both search engine ranking and AI answer engine visibility from day one — not bolted on after launch.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto pb-24 px-4 sm:px-6">
        <div className="space-y-12 text-gray-700">

          {/* CTA */}
          <div>
            <TrackedLink
              href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20a%20Website%20Development%20project%20with%20Build%20Beyond%20Studio."
              eventName="whatsapp_click"
              eventParams={{ button_location: 'service_page_website_development' }}
              className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold"
              style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
            >
              Get a Fixed-Price Quote →
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
            <Link href="/services/mobile-app-development" className="text-[13px] text-[#C8860A] hover:underline">Mobile App Development →</Link>
            <Link href="/services/seo-aeo-geo" className="text-[13px] text-[#C8860A] hover:underline">SEO, AEO & GEO →</Link>
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
