import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata = buildMetadata(
  '/services/seo-aeo-geo',
  'Technical SEO and GEO Support for Agencies | BBS',
  'Technical SEO and GEO support for agency client sites, including schema, speed, tracking, crawl fixes, and approved content implementation.'
)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Technical SEO, AEO & GEO Support',
  serviceType: 'SEO, AEO & GEO',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'Technical SEO and GEO support for agency client sites, including schema, speed, tracking, crawl fixes, and approved content implementation.',
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'SEO, AEO & GEO', path: '/services/seo-aeo-geo' },
])

const included = [
  'Technical site crawl audit and Core Web Vitals performance tuning',
  'JSON-LD structured data implementation (Organization, Product, FAQPage, Article)',
  'XML sitemaps, canonical tags, and robots.txt indexation configuration',
  'Answer engine optimization (AEO) formatting for featured snippets',
  'Generative engine optimization (GEO) structuring for AI citations',
  'Verification reports and indexation handover documentation',
]

const whatYouReceive = [
  'Pre-and-post technical SEO audit report',
  'Validated JSON-LD schema code injected into client templates',
  'Core Web Vitals diagnostic benchmark before and after tuning',
  'Handover documentation with recommendations for content teams',
]

const process = [
  { step: '01', title: 'Technical Crawl & Audit', desc: 'We inspect crawl errors, indexing blocks, duplicate canonicals, and Core Web Vitals metrics.' },
  { step: '02', title: 'Schema & Architecture Mapping', desc: 'We design the structured data model and content hierarchy supporting both search engines and AI engines.' },
  { step: '03', title: 'Code-Level Implementation', desc: 'We implement schema, fix heading hierarchies, clean internal linking, and optimize page load speed.' },
  { step: '04', title: 'Validation & Testing', desc: 'We test schema with Google Rich Results Tool and verify search engine bot accessibility.' },
  { step: '05', title: 'Reporting & Handover', desc: 'We deliver verification reports under your agency’s brand with zero third-party disclosure.' },
]

const faqs: FAQItem[] = [
  {
    question: 'What is the difference between SEO, AEO, and GEO?',
    answer: 'SEO optimizes for traditional search ranking in Google. AEO formats concise answer blocks for search engine rich snippets and voice search. GEO structures data and brand citations so LLMs (ChatGPT, Gemini, Perplexity) cite your client’s content in generative responses.',
  },
  {
    question: 'Do you provide keyword research or technical implementation?',
    answer: 'We focus on technical SEO, schema implementation, performance tuning, and crawlability to support your agency’s ongoing SEO and content strategies.',
  },
  {
    question: 'Can you pair technical SEO with a new website build?',
    answer: 'Yes. Every website built by BBS comes with foundational technical SEO, clean semantic hierarchy, and schema markup built-in.',
  },
  {
    question: 'Who owns the technical deliverables?',
    answer: 'Your agency or client receives 100% of all code changes, schema configurations, and documentation with zero proprietary lock-in.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
}

export default function SeoAeoGeoPage() {
  return (
    <main className='min-h-screen bg-[#F5F2EC] text-black'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <section className='max-w-4xl mx-auto pt-24 pb-8 px-4 sm:px-6'>
        <div className='mb-4 text-xs text-gray-500 flex items-center gap-2'>
          <Link href='/' className='hover:text-black transition-colors'>Home</Link>
          <span>/</span>
          <Link href='/services' className='hover:text-black transition-colors'>Services</Link>
          <span>/</span>
          <span className='text-[#C8860A] font-medium'>SEO, AEO &amp; GEO</span>
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-white/70 mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>Additional Capability</span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-black text-black mb-4 leading-tight'>
          Technical SEO, AEO &amp; GEO Support for Agencies
        </h1>
        <p className='text-lg text-gray-600 font-light mb-8'>
          Schema markup, performance tuning, crawl diagnostics, and AI answer engine readiness under your agency brand.
        </p>

        <div className='bg-white border-l-4 border-[#C8860A] p-5 sm:p-6 rounded-r-xl border-y border-r border-[rgba(200,134,10,0.15)] mb-10 shadow-sm'>
          <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-normal'>
            BBS supports marketing agencies with code-level technical SEO, structured data schemas, and generative search readiness. We fix technical barriers and tune site performance so client content ranks higher in traditional search and gets cited in AI discovery engines.
          </p>
        </div>

        <div className='mb-12'>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300'
            style={{
              background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)',
              boxShadow: '0 4px 18px rgba(200,134,10,0.32)',
            }}
          >
            <span>Send a Project Brief</span>
            <ArrowRight className='w-4 h-4' />
          </Link>
        </div>
      </section>

      <section className='max-w-4xl mx-auto pb-20 px-4 sm:px-6'>
        <div className='space-y-12 text-gray-700'>

          {/* Deliverables */}
          <div className='bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(200,134,10,0.18)] shadow-sm'>
            <h2 className='text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-2'>
              Deliverables
            </h2>
            <h3 className='text-xl sm:text-2xl font-bold text-black mb-4'>
              What Your Agency Receives
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm'>
              {whatYouReceive.map((item, idx) => (
                <div key={idx} className='flex items-start gap-2.5'>
                  <CheckCircle2 className='w-5 h-5 text-[#C8860A] shrink-0 mt-0.5' />
                  <span className='text-gray-800'>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Three pillars visual */}
          <div className='bg-[#FAF8F4] border border-[rgba(200,134,10,0.15)] rounded-2xl p-6 shadow-sm'>
            <h2 className='font-bold text-black mb-4 text-lg'>The Three Search Discovery Surfaces</h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 text-center'>
              <div className='bg-white p-4 rounded-xl border border-black/5'>
                <div className='font-bold text-black text-base mb-1'>SEO</div>
                <div className='text-gray-500 text-xs mb-2'>Traditional Search Engine Optimization</div>
                <div className='text-xs font-semibold text-[#C8860A]'>Google Organic SERP Rankings</div>
              </div>
              <div className='bg-white p-4 rounded-xl border border-black/5'>
                <div className='font-bold text-black text-base mb-1'>AEO</div>
                <div className='text-gray-500 text-xs mb-2'>Answer Engine Optimization</div>
                <div className='text-xs font-semibold text-[#C8860A]'>Featured Snippets &amp; Voice Search</div>
              </div>
              <div className='bg-white p-4 rounded-xl border border-black/5'>
                <div className='font-bold text-black text-base mb-1'>GEO</div>
                <div className='text-gray-500 text-xs mb-2'>Generative Engine Optimization</div>
                <div className='text-xs font-semibold text-[#C8860A]'>ChatGPT, Perplexity &amp; Gemini Citations</div>
              </div>
            </div>
          </div>

          {/* Included */}
          <div>
            <h2 className='text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-2'>
              Technical Scope
            </h2>
            <h3 className='text-2xl sm:text-3xl font-bold text-black mb-4'>
              Included in Technical Support
            </h3>
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              {included.map((item, i) => (
                <li key={i} className='flex gap-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed bg-white p-3.5 rounded-xl border border-black/5'>
                  <span className='text-[#C8860A] font-bold shrink-0'>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div>
            <h2 className='text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-2'>
              Execution Methodology
            </h2>
            <h3 className='text-2xl sm:text-3xl font-bold text-black mb-4'>
              Our Implementation Workflow
            </h3>
            <div className='space-y-3'>
              {process.map((item) => (
                <div key={item.step} className='flex gap-4 p-4 sm:p-5 rounded-xl bg-white border border-[rgba(200,134,10,0.12)] shadow-sm'>
                  <span className='text-[#C8860A] font-mono text-sm pt-0.5 shrink-0 font-bold'>{item.step}</span>
                  <div>
                    <h4 className='font-bold text-black mb-1 text-sm sm:text-base'>{item.title}</h4>
                    <p className='text-gray-600 text-xs sm:text-sm leading-relaxed'>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related services */}
          <div>
            <h2 className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-3'>
              Related Services
            </h2>
            <div className='flex flex-wrap gap-3'>
              <Link href='/services/tracking-conversion-setup' className='text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors'>
                Tracking &amp; Conversion Setup →
              </Link>
              <Link href='/services/website-development' className='text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors'>
                Website Development →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Single Merged FAQ */}
      <FAQSection faqs={faqs} title="Technical SEO &amp; GEO FAQs" />
      <Footer />
    </main>
  )
}
