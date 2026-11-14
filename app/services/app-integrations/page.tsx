import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = buildMetadata(
  '/services/app-integrations',
  'White Label App Integrations for Agencies | BBS',
  'White label API and app integration services for agency clients. We connect CRMs, payments, databases, and third-party tools under your brand.'
)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'White Label App Integrations',
  serviceType: 'App Integrations',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'White label API and app integration services for agency clients. We connect CRMs, payments, databases, and third-party tools under your brand.',
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'App Integrations', path: '/services/app-integrations' },
])

const included = [
  'Custom REST and GraphQL API integration and webhook pipeline setup',
  'Payment gateway connections (Stripe, Razorpay, Cashfree, PayPal)',
  'CRM synchronization (HubSpot, Salesforce, Zoho, ActiveCampaign)',
  'Third-party ERP, inventory, and logistics API connections',
  'Error handling, rate limiting, and automated retry mechanisms',
  'Complete endpoint documentation and API credential security handover',
]

const whatYouReceive = [
  'Tested and verified webhook and API integration scripts',
  'Data field transformation mapping documentation',
  'Staging test environment verifying bidirectional data sync',
  '100% code ownership and secure credential handover',
]

const process = [
  { step: '01', title: 'API & Data Audit', desc: 'We review API documentation, rate limits, authentication protocols, and data payloads.' },
  { step: '02', title: 'Data Transformation Mapping', desc: 'We map source fields to destination properties, defining validation rules and error fallbacks.' },
  { step: '03', title: 'Webhook & Middleware Build', desc: 'We engineer secure serverless or server-based middleware to handle real-time sync.' },
  { step: '04', title: 'Payload & Failure Testing', desc: 'We simulate network timeouts, payload spikes, and invalid data to ensure resilient handling.' },
  { step: '05', title: 'Production Launch & Handover', desc: 'Live deployment with log monitoring and transfer of code and documentation.' },
]

const faqs: FAQItem[] = [
  {
    question: 'What types of systems can BBS integrate for agency clients?',
    answer: 'We connect marketing sites and web apps to CRMs, payment gateways, marketing automation platforms, accounting tools, ERPs, and custom internal APIs.',
  },
  {
    question: 'Can you build custom API integrations without pre-made plugins?',
    answer: 'Yes. We specialize in custom API middleware using Node.js, Express, or Next.js API routes when off-the-shelf plugins do not satisfy client requirements.',
  },
  {
    question: 'How do you handle API rate limits and security?',
    answer: 'We implement secure server-side environment variables, authentication headers, rate-limiting handlers, and queueing logic to protect data integrity.',
  },
  {
    question: 'Who owns the integration scripts and credentials?',
    answer: 'You receive 100% of the integration code, deployment scripts, and architectural documentation upon project completion.',
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

export default function AppIntegrationsPage() {
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
          <span className='text-[#C8860A] font-medium'>App Integrations</span>
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-white/70 mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>Additional Capability</span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-black text-black mb-4 leading-tight'>
          White Label App Integrations for Agencies
        </h1>
        <p className='text-lg text-gray-600 font-light mb-8'>
          Connect client websites, stores, and software to CRMs, payment gateways, and business tools under your agency brand.
        </p>

        <div className='bg-white border-l-4 border-[#C8860A] p-5 sm:p-6 rounded-r-xl border-y border-r border-[rgba(200,134,10,0.15)] mb-10 shadow-sm'>
          <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-normal'>
            BBS integrates agency client websites, stores, and portals with third-party software tools, payment gateways, and CRM platforms. We build reliable middleware and webhook pipelines so data flows accurately without manual handling.
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

          {/* What You Receive */}
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

          {/* Included */}
          <div>
            <h2 className='text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-2'>
              Scope
            </h2>
            <h3 className='text-2xl sm:text-3xl font-bold text-black mb-4'>
              Included Integration Services
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
              Execution Flow
            </h2>
            <h3 className='text-2xl sm:text-3xl font-bold text-black mb-4'>
              How We Build &amp; Deploy Integrations
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
              <Link href='/services/website-development' className='text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors'>
                Website Development →
              </Link>
              <Link href='/services/online-store-development' className='text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors'>
                Online Store Development →
              </Link>
              <Link href='/services/tracking-conversion-setup' className='text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors'>
                Tracking &amp; Conversion Setup →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Single Merged FAQ */}
      <FAQSection faqs={faqs} title="App Integrations FAQs" />
      <Footer />
    </main>
  )
}
