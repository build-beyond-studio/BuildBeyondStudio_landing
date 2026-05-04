import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Technical Consulting Services | Build Beyond Studio',
  description:
    'Technical consulting for agencies and startups in India. Architecture review, tech stack selection, scalability planning. Based in Ambikapur, Chhattisgarh.',
  keywords: [
    'technical consulting India',
    'tech architecture consulting',
    'software consulting agency India',
    'technology consulting Ambikapur',
    'startup technical consulting India',
    'web architecture review',
  ],
  alternates: {
    canonical: 'https://buildbeyondstudio.com/services/consulting',
  },
  openGraph: {
    title: 'Technical Consulting Services | Build Beyond Studio',
    description:
      'Strategic guidance on architecture, technology selection, and scalability for agencies and startups across India.',
    url: 'https://buildbeyondstudio.com/services/consulting',
    siteName: 'Build Beyond Studio',
    images: [{ url: 'https://buildbeyondstudio.com/logo.png', width: 1200, height: 630 }],
    type: 'website',
    locale: 'en_IN',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Technical Consulting',
  serviceType: 'Technology Consulting',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'India',
  description:
    'Strategic technical consulting for agencies and startups. Architecture review, tech stack selection, scalability planning, and best practices guidance.',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    areaServed: 'IN',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://buildbeyondstudio.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://buildbeyondstudio.com/#services' },
    { '@type': 'ListItem', position: 3, name: 'Technical Consulting', item: 'https://buildbeyondstudio.com/services/consulting' },
  ],
}

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">Home → Services → Technical Consulting</div>

        <h1 className="text-5xl font-bold text-black mb-6">
          Technical Consulting for Agencies & Startups
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Strategic guidance on architecture, technology selection, and scalability. Make the right technical decisions before they become expensive mistakes.
        </p>
        <a href="/#contact" className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold mb-16" style={{background:'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow:'0 4px 16px rgba(200,134,10,0.30)'}}>
          Book a Consulting Call
        </a>

        <div className="space-y-12 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">What We Consult On</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Tech Stack Selection',
                'System Architecture Design',
                'Scalability Planning',
                'Code & Architecture Review',
                'Database Design & Optimization',
                'API Design Best Practices',
                'Security Audit & Review',
                'Performance Optimization',
                'Technology Roadmap Planning',
                'Vendor & Tool Selection',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#C8860A]">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Who This Is For</h2>
            <p className="leading-relaxed mb-4">
              Our technical consulting service is designed for marketing agencies who are growing into tech services, startups that need to validate their technical approach before building, and businesses that have existing systems and need an expert second opinion before scaling.
            </p>
            <p className="leading-relaxed">
              We've reviewed and advised on architecture decisions for e-commerce platforms, SaaS dashboards, data visualization systems, and multi-tenant applications. We give you honest, direct guidance — not a bloated consulting report.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">How a Consulting Engagement Works</h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Discovery call', desc: 'We understand your goals, current stack, constraints, and what decisions you need to make.' },
                { step: '02', title: 'Review & analysis', desc: 'We review your existing architecture, codebase, or plans and identify risks and opportunities.' },
                { step: '03', title: 'Recommendations', desc: 'Clear, actionable recommendations with reasoning — no fluff, no jargon.' },
                { step: '04', title: 'Ongoing support', desc: 'Optional ongoing advisory if you want a technical partner as you implement changes.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 rounded-lg bg-white border border-[rgba(200,134,10,0.12)]" style={{boxShadow:'0 2px 8px rgba(200,134,10,0.06)'}}>
                  <span className="text-[#C8860A] font-mono text-sm pt-1">{item.step}</span>
                  <div>
                    <div className="font-semibold text-black mb-1">{item.title}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 rounded-xl bg-white border border-[rgba(200,134,10,0.16)]" style={{boxShadow:'0 4px 20px rgba(200,134,10,0.10)'}}>
          <h2 className="text-2xl font-semibold text-black mb-3">Need a technical second opinion?</h2>
          <p className="text-gray-600 mb-6">Book a free 30-minute discovery call. No commitment, no sales pitch.</p>
          <a href="/#contact" className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold" style={{background:'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow:'0 4px 16px rgba(200,134,10,0.30)'}}>
            Book Free Discovery Call
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}