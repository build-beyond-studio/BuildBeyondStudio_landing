import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Dynamic SEO | Build Beyond Studio',
  description:
    'Advanced SEO systems for modern web applications with dynamic metadata, server-side rendering, schema integration, and scalable indexing strategies.',
  keywords: [
    'dynamic SEO',
    'dynamic metadata',
    'structured schema markup',
    'server-side SEO',
    'Next.js SEO',
    'search index optimization',
    'advanced SEO systems',
  ],
  alternates: {
    canonical: 'https://buildbeyondstudio.com/services/dynamic-seo',
  },
  openGraph: {
    title: 'Dynamic SEO | Build Beyond Studio',
    description:
      'Advanced SEO systems for modern web applications with dynamic metadata, server-side rendering, schema integration, and scalable indexing strategies.',
    url: 'https://buildbeyondstudio.com/services/dynamic-seo',
    siteName: 'Build Beyond Studio',
    images: [
      {
        url: 'https://buildbeyondstudio.com/og-dynamic-seo.png',
        width: 1200,
        height: 630,
        alt: 'Dynamic SEO | Build Beyond Studio',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dynamic SEO',
  serviceType: 'Dynamic Search Engine Optimization',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'India',
  description:
    'Advanced SEO systems for modern web applications with dynamic metadata, server-side rendering, schema integration, and scalable indexing strategies.',
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
    { '@type': 'ListItem', position: 3, name: 'Dynamic SEO', item: 'https://buildbeyondstudio.com/services/dynamic-seo' },
  ],
}

export default function DynamicSeoPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">Home → Services → Dynamic SEO</div>

        <h1 className="text-5xl font-bold text-black mb-6">
          Dynamic SEO
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Advanced SEO systems for modern web applications with dynamic metadata, server-side rendering, schema integration, and scalable indexing strategies.
        </p>
        <a href="/#contact" className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold mb-16" style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}>
          Start Optimization
        </a>

        <div className="space-y-12 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">What We Offer</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Dynamic Metadata Generation',
                'Open Graph Optimization',
                'Structured Schema Markup',
                'Server-Side SEO',
                'Next.js SEO Optimization',
                'Dynamic Sitemap Generation',
                'Robots.txt Management',
                'Search Index Optimization',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#C8860A]">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Best For</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'SaaS Platforms',
                'Large Dynamic Websites',
                'E-commerce Platforms',
                'AI Platforms',
                'Web Applications',
                'Content Platforms',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#C8860A]">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Workflow</h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'SEO Architecture Planning', desc: 'We design the URL structure, routing maps, and metadata strategies suited for a scalable web application.' },
                { step: '02', title: 'Technical Integration', desc: 'We implement server-side rendering, dynamic open graph generation, and structured schema markup within your application.' },
                { step: '03', title: 'Search Optimization', desc: 'We configure dynamic sitemaps, advanced robots.txt rules, and canonical tags to prevent duplicate content.' },
                { step: '04', title: 'Performance Tuning', desc: 'We optimize the application payload, rendering strategies, and caching for optimal indexing speeds.' },
                { step: '05', title: 'Continuous Monitoring', desc: 'We continuously test against indexing API changes and adjust the server-side logic as your application evolves.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 rounded-lg bg-white border border-[rgba(200,134,10,0.12)]" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
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

        <div className="mt-16 p-8 rounded-xl bg-white border border-[rgba(200,134,10,0.16)]" style={{ boxShadow: '0 4px 20px rgba(200,134,10,0.10)' }}>
          <h2 className="text-2xl font-semibold text-black mb-3">Need scalable SEO for your web platform?</h2>
          <p className="text-gray-600 mb-6">Tell us what you need. We'll give you a clear estimate and timeline within 24 hours.</p>
          <a href="/#contact" className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold" style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}>
            Get a Free Estimate
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
