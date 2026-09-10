import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata = {
  title: 'SEO, AEO & GEO Services | Build Beyond Studio',
  description: 'Technical SEO, answer engine optimization, and GEO strategies that make your business visible across Google and AI discovery surfaces.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO, AEO & GEO Services',
  serviceType: 'SEO, AEO & GEO',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'Build Beyond Studio helps businesses improve search visibility, technical SEO, structured content, and AI answer engine readiness so they appear in search results and AI-powered discovery experiences.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between SEO, AEO, and GEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO helps you rank in traditional search results, AEO makes your content easier to answer directly in search features and voice results, and GEO helps AI systems find and cite your content when answering questions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle technical SEO and schema?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We cover technical structure, metadata, crawlability, schema, internal linking, and content architecture that supports both search engines and AI discovery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can this work for service businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We optimize for the questions, intent, and trust signals that matter most for service businesses, local visibility, and lead generation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does SEO take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Results build over time. We focus on foundational technical improvements and content strategy first, then improve rankings and visibility through sustained optimization, not quick hacks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you pair this with our website or app build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We can optimize the site from the start, including technical foundations, page structure, and content clarity so it is ready for both human search traffic and AI visibility.',
      },
    },
  ],
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'SEO, AEO & GEO', path: '/services/seo-aeo-geo' },
])

const included = [
  'Technical SEO audit & fixes (site speed, crawlability, Core Web Vitals)',
  'Keyword research & content strategy (traditional + conversational/AI-query intent)',
  'On-page optimization: schema markup (FAQ, HowTo, Organization, Service)',
  'AEO: structuring content in direct-answer format for AI Overviews/voice search',
  'GEO: entity optimization, authoritative citations, structured data for LLM crawlers',
  'Local SEO / Google Business Profile optimization',
  'Monthly ranking & AI-citation tracking reports',
]

const process = [
  { step: '01', title: 'Full Technical + Content Audit', desc: 'Complete review of your site\'s current SEO health, content gaps, and AI citation status.' },
  { step: '02', title: 'Keyword & AI-Query Intent Mapping', desc: 'Map traditional keywords alongside conversational and AI-search query patterns.' },
  { step: '03', title: 'On-Page + Schema Implementation', desc: 'Deploy structured data (FAQPage, Service, HowTo, Organization) across all priority pages.' },
  { step: '04', title: 'Content Restructuring for Answer-First Format', desc: 'Rewrite and restructure key pages so AI engines can extract direct answers to cite.' },
  { step: '05', title: 'Monthly Tracking: Rankings + AI Citation Monitoring', desc: 'Ongoing monitoring of Google positions and AI search citations — both surfaces reported monthly.' },
]

const whyBBS = [
  'One team handling SEO, AEO, and GEO — not three disconnected vendors',
  'We build the website AND optimize it, so technical fixes ship faster',
  'Reporting includes AI-citation tracking, not just Google rank position',
]

const faqs = [
  { q: 'What\'s the difference between SEO, AEO, and GEO?', a: 'SEO optimizes for traditional search engine rankings, AEO optimizes content to be pulled into direct-answer boxes and voice search, and GEO optimizes content so generative AI tools (ChatGPT, Perplexity, Gemini) cite it as a source in their answers.' },
  { q: 'How long does SEO take to show results?', a: 'Technical fixes show impact in 4–6 weeks; competitive keyword rankings typically build over 3–6 months of consistent work.' },
  { q: 'Can a website be optimized for AI Overviews and ChatGPT citations?', a: 'Yes — through structured schema markup, clear answer-first content formatting, and strong topical authority, a site becomes more likely to be cited as a source in AI-generated answers.' },
  { q: 'Do you provide monthly SEO reports?', a: 'Yes, monthly reports cover keyword rankings, technical health, and AI citation appearances.' },
  { q: 'Is AEO/GEO relevant if my business is local?', a: 'Yes — local businesses increasingly get discovered through AI-powered local search and voice assistants, making AEO/GEO as important as traditional local SEO.' },
]

export default function SeoAeoGeoPage() {
  return (
    <main className='min-h-screen bg-[#F5F2EC] text-black'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />

      <section className='max-w-4xl mx-auto pt-28 pb-8 px-4 sm:px-6'>
        <div className='mb-4 text-sm text-gray-500'>
          <Link href='/' className='hover:text-black transition-colors'>Home</Link>
          {' → '}
          <Link href='/services' className='hover:text-black transition-colors'>Services</Link>
          {' → '}SEO, AEO & GEO
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>SEO, AEO & GEO Services</span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-bold text-black mb-4 leading-tight'>White Label SEO, AEO & GEO Services for Agencies</h1>
        <p className='text-lg text-gray-500 font-light mb-8'>One strategy for three search surfaces: Google, AI answer engines, and generative search.</p>

        <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-5 sm:p-6 mb-12' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
          <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
            SEO (Search Engine Optimization), AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization) work together to make a website visible across traditional search results, voice/answer engines, and AI tools like ChatGPT, Perplexity, and Google AI Overviews. Build Beyond Studio structures content, schema, and technical architecture so it ranks in Google and gets directly cited as a source inside AI-generated answers.
          </p>
        </div>
      </section>

      <section className='max-w-4xl mx-auto pb-24 px-4 sm:px-6'>
        <div className='space-y-12 text-gray-700'>
          <div>
            <TrackedLink
              href='https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20want%20to%20discuss%20SEO%2C%20AEO%20and%20GEO%20services%20with%20Build%20Beyond%20Studio.'
              eventName='whatsapp_click'
              eventParams={{ button_location: 'service_page_seo_aeo_geo' }}
              className='inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold'
              style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
            >
              Get a Fixed-Price Quote →
            </TrackedLink>
          </div>

          <div>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-4'>SEO vs AEO vs GEO — What Each One Does</h2>
            <div className='grid gap-3 md:grid-cols-3'>
              <div className='rounded-xl bg-white p-4 border border-[rgba(200,134,10,0.12)]'>
                <div className='font-bold text-black mb-2'>SEO</div>
                <div className='text-gray-600 text-sm'>Traditional search engine rankings</div>
                <div className='mt-2 text-xs font-semibold uppercase tracking-wide text-[#C8860A]'>Google / Bing blue-link results</div>
              </div>
              <div className='rounded-xl bg-white p-4 border border-[rgba(200,134,10,0.12)]'>
                <div className='font-bold text-black mb-2'>AEO</div>
                <div className='text-gray-600 text-sm'>Direct-answer boxes & voice search</div>
                <div className='mt-2 text-xs font-semibold uppercase tracking-wide text-[#C8860A]'>Google AI Overviews, Siri, Alexa</div>
              </div>
              <div className='rounded-xl bg-white p-4 border border-[rgba(200,134,10,0.12)]'>
                <div className='font-bold text-black mb-2'>GEO</div>
                <div className='text-gray-600 text-sm'>Generative AI citations & sources</div>
                <div className='mt-2 text-xs font-semibold uppercase tracking-wide text-[#C8860A]'>ChatGPT, Perplexity, Gemini answers</div>
              </div>
            </div>
          </div>

          <div>
            <TrackedLink
              href='https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20SEO%2C%20AEO%20%26%20GEO%20services%20with%20Build%20Beyond%20Studio.'
              eventName='whatsapp_click'
              eventParams={{ button_location: 'service_page_seo_aeo_geo_cta' }}
              className='inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold'
              style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
            >
              Grow Your Search Visibility →
            </TrackedLink>
          </div>

          <div>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-4'>What&apos;s Included</h2>
            <ul className='space-y-2'>
              {included.map((item, i) => (
                <li key={i} className='flex gap-3 text-sm text-gray-600 leading-relaxed'>
                  <span className='text-[#C8860A] shrink-0 mt-0.5'>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-4'>Our Process</h2>
            <div className='space-y-3'>
              {process.map((item) => (
                <div key={item.step} className='flex gap-4 p-4 rounded-xl bg-white border border-[rgba(200,134,10,0.12)]' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
                  <span className='text-[#C8860A] font-mono text-sm pt-0.5 shrink-0'>{item.step}</span>
                  <div>
                    <div className='font-semibold text-black mb-1'>{item.title}</div>
                    <div className='text-gray-600 text-sm leading-relaxed'>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-4'>Why Build Beyond Studio</h2>
            <ul className='space-y-2'>
              {whyBBS.map((item, i) => (
                <li key={i} className='flex gap-3 text-sm text-gray-600 leading-relaxed'>
                  <span className='text-[#C8860A] shrink-0 mt-0.5'>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-wrap gap-3'>
            <Link href='/services/google-meta-ads' className='text-[13px] text-[#C8860A] hover:underline'>Google & Meta Ads →</Link>
            <Link href='/services/social-media-management' className='text-[13px] text-[#C8860A] hover:underline'>Social Media Management →</Link>
            <Link href='/services/analytics-tracking' className='text-[13px] text-[#C8860A] hover:underline'>Analytics & Tracking →</Link>
          </div>

          <div>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-6'>Frequently Asked Questions</h2>
            <div className='space-y-4'>
              {faqs.map((faq, i) => (
                <div key={i} className='p-4 sm:p-5 rounded-xl bg-white border border-[rgba(200,134,10,0.12)]' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
                  <h3 className='font-semibold text-black mb-2 text-sm sm:text-base'>{faq.q}</h3>
                  <p className='text-gray-600 text-sm leading-relaxed'>{faq.a}</p>
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
