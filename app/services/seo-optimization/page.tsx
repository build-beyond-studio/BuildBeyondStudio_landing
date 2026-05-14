import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'SEO Optimization | Build Beyond Studio',
  description:
    'Improve your Google rankings, organic traffic, and online visibility with modern search engine optimization strategies built for long-term growth.',
  keywords: [
    'SEO optimization',
    'search engine optimization',
    'technical SEO',
    'on-page SEO',
    'organic growth',
    'local SEO',
    'core web vitals optimization',
  ],
  alternates: {
    canonical: 'https://buildbeyondstudio.com/services/seo-optimization',
  },
  openGraph: {
    title: 'SEO Optimization | Build Beyond Studio',
    description:
      'Improve your Google rankings, organic traffic, and online visibility with modern search engine optimization strategies built for long-term growth.',
    url: 'https://buildbeyondstudio.com/services/seo-optimization',
    siteName: 'Build Beyond Studio',
    images: [
      {
        url: 'https://buildbeyondstudio.com/og-seo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Optimization | Build Beyond Studio',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Optimization',
  serviceType: 'Search Engine Optimization',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'India',
  description:
    'Improve your Google rankings, organic traffic, and online visibility with modern search engine optimization strategies built for long-term growth.',
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
    { '@type': 'ListItem', position: 3, name: 'SEO Optimization', item: 'https://buildbeyondstudio.com/services/seo-optimization' },
  ],
}

export default function SeoOptimizationPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">Home → Services → SEO Optimization</div>

        <h1 className="text-5xl font-bold text-black mb-6">
          SEO Optimization
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Improve your Google rankings, organic traffic, and online visibility with modern search engine optimization strategies built for long-term growth.
        </p>
        <a href="/#contact" className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold mb-16" style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}>
          Grow Your Traffic
        </a>

        <div className="space-y-12 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">What We Offer</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Technical SEO Audits',
                'On-Page SEO Optimization',
                'Keyword Research',
                'Website Performance Optimization',
                'Mobile SEO',
                'Local SEO',
                'SEO Content Structure',
                'Core Web Vitals Optimization',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#C8860A]">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Our SEO Process</h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Website Audit', desc: 'We conduct a comprehensive analysis of your current website, identifying technical issues, speed bottlenecks, and structural improvements.' },
                { step: '02', title: 'Keyword Research', desc: 'We identify high-value search terms that your target audience is actively using to find services like yours.' },
                { step: '03', title: 'On-Page Optimization', desc: 'We optimize metadata, headings, content structure, and internal linking to align with best practices.' },
                { step: '04', title: 'Technical Improvements', desc: 'We resolve core web vitals, mobile usability issues, and indexing problems to ensure search engines can easily crawl your site.' },
                { step: '05', title: 'Monitoring & Reporting', desc: 'We provide continuous monitoring of your search visibility, ranking changes, and organic traffic growth.' },
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
          <h2 className="text-2xl font-semibold text-black mb-3">Ready to grow your website traffic organically?</h2>
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
