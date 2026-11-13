import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = buildMetadata(
  '/services/tracking-conversion-setup',
  'White Label Conversion Tracking Setup for Agencies | BBS',
  'White label GA4, tag management, Meta Conversions API, server side tracking, ecommerce events, testing, and handover for agency clients.'
)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'White Label Conversion Tracking Setup',
  serviceType: 'Tracking & Conversion Setup',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'White label GA4, tag management, Meta Conversions API, server side tracking, ecommerce events, testing, and handover for agency clients.',
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Tracking & Conversion Setup', path: '/services/tracking-conversion-setup' },
])

const whatYouReceive = [
  'Fully implemented GTM web and server container configuration',
  'Verified GA4 data stream with customized conversion events',
  'Meta Conversions API (CAPI) server-side event routing setup',
  'Comprehensive event mapping spreadsheet and handover checklist',
]

const faqs: FAQItem[] = [
  {
    question: 'What is conversion tracking setup?',
    answer: 'Conversion tracking setup connects important actions such as form submissions, purchases, calls, bookings, and qualified leads with analytics and advertising platforms so your agency can accurately measure campaign ROI.',
  },
  {
    question: 'Can BBS work with an existing GA4 and Tag Manager account?',
    answer: 'Yes. BBS audits and fixes existing setups or builds a clean new structure. Access requirements and account permissions are agreed before work begins.',
  },
  {
    question: 'Do you support Meta Conversions API and server-side tracking?',
    answer: 'Yes. BBS implements Meta Conversions API and server-side tagging (via Stape or custom GCP/AWS containers) when the client platform and consent framework support it.',
  },
  {
    question: 'Can you track ecommerce events?',
    answer: 'Yes. The scope includes product views, cart actions, checkout steps, purchases, currency handling, and transaction values with deduplicated browser and server events.',
  },
  {
    question: 'How do you check that the data is accurate?',
    answer: 'BBS tests the complete customer journey using browser debuggers, Meta Pixel Helper, GA4 DebugView, and controlled test purchases. Handover notes verify all event firing.',
  },
  {
    question: 'Will BBS communicate directly with our client?',
    answer: 'Only when your agency specifically requests it. Our default model keeps your agency as the client lead while BBS handles the technical configuration behind the scenes.',
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

export default function TrackingConversionSetupPage() {
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
          <span className='text-[#C8860A] font-medium'>Tracking & Conversion Setup</span>
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-white/70 mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>Core Service</span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-black text-black mb-4 leading-tight'>
          White Label Conversion Tracking Setup for Agencies
        </h1>
        <p className='text-lg text-gray-600 font-light mb-8'>
          Give your agency reliable measurement across client websites, landing pages, and ecommerce stores. BBS implements the approved tracking plan, tests the data, and hands over clear documentation under your brand.
        </p>

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
              What You Receive Upon Handover
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

          {/* Section 1: When this service fits */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-2xl p-6 sm:p-7 shadow-sm'>
            <h2 className='text-xl sm:text-2xl font-bold text-black mb-3'>When This Service Fits</h2>
            <p className='text-sm sm:text-base text-gray-700 leading-relaxed font-light'>
              Use this service when an agency client is launching a new site, scaling paid ad campaigns, moving platforms, or experiencing data discrepancies between ad platforms and analytics. BBS handles the technical tagging, container architecture, and server-side webhooks while your agency leads measurement strategy and campaign reporting.
            </p>
          </div>

          {/* Section 2: What BBS Implements */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-2xl p-6 sm:p-7 shadow-sm'>
            <h2 className='text-xl sm:text-2xl font-bold text-black mb-3'>What BBS Implements</h2>
            <p className='text-sm sm:text-base text-gray-700 leading-relaxed font-light mb-4'>
              The scope includes GA4 custom event tracking, Google Tag Manager container setup, Meta Pixel, Meta Conversions API (server-side tracking), ecommerce purchase pipelines, form submissions, phone call click tracking, and consent mode parameters.
            </p>
            <div className='bg-[#FAF8F4] p-4 rounded-xl border border-[rgba(200,134,10,0.15)] text-xs text-gray-600 leading-relaxed'>
              <strong className='text-black'>Consent &amp; Privacy:</strong> When user consent banners (e.g. Cookiebot, OneTrust) are present, tracking triggers are aligned to respect consent choices and Google Consent Mode v2 standards.
            </div>
          </div>

          {/* Section 3: Event & Data Mapping */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-2xl p-6 sm:p-7 shadow-sm'>
            <h2 className='text-xl sm:text-2xl font-bold text-black mb-3'>Event and Data Mapping</h2>
            <p className='text-sm sm:text-base text-gray-700 leading-relaxed font-light'>
              Before writing any code, we document the commercial actions that matter: event triggers, data layer variables, destination platforms, and testing parameters. This structured map prevents duplicate firing, inconsistent nomenclature, and inaccurate reporting.
            </p>
          </div>

          {/* Related Services */}
          <div>
            <h2 className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-3'>
              Related Services
            </h2>
            <div className='flex flex-wrap gap-3'>
              <Link href='/services/online-store-development' className='text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors'>
                Online Store Development →
              </Link>
              <Link href='/services/website-development' className='text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors'>
                Website Development →
              </Link>
              <Link href='/services/seo-aeo-geo' className='text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors'>
                Technical SEO, AEO &amp; GEO →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Single Unified FAQ */}
      <FAQSection faqs={faqs} title="Conversion Tracking FAQs" />
      <Footer />
    </main>
  )
}
