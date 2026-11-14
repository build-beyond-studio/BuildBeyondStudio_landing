import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = buildMetadata(
  '/services/online-store-development',
  'White Label Ecommerce Development for Agencies | BBS',
  'White label ecommerce development for agencies, including Shopify, headless stores, integrations, tracking, testing, launch, and handover.'
)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'White Label Ecommerce Development',
  serviceType: 'Online Store Development',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'White label ecommerce development for agencies, including Shopify, headless stores, integrations, tracking, testing, launch, and handover.',
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Online Store Development', path: '/services/online-store-development' },
])

const included = [
  'Custom storefront design and responsive catalog hierarchy',
  'Product filtering, collection logic, and variant mapping',
  'Checkout logic, cart flow, and conversion optimization',
  'Payment gateway integrations (Stripe, Razorpay, Cashfree, PayPal)',
  'Shipping, tax, order notification, and logistics webhooks',
  'Mobile-first performance optimization and Core Web Vitals checks',
  'Server-side ecommerce event tracking integration',
  'Pre-launch transactional testing and IP handover checklist',
]

const whatYouReceive = [
  'Fully configured production store or headless frontend codebase',
  'Complete API integration and webhook documentation',
  'Payment gateway and shipping credentials verification report',
  'Pre-launch test purchase checklist and handover sign-off',
]

const process = [
  { step: '01', title: 'Store Strategy & Platform Choice', desc: 'We evaluate product catalog size, SKU complexity, and integrations to select between Shopify, WooCommerce, or headless commerce.' },
  { step: '02', title: 'UX & Catalog Design', desc: 'We structure the storefront layout, category taxonomy, and product experience around conversion.' },
  { step: '03', title: 'Development & Integrations', desc: 'We develop the store, connect payment gateways, ERP/inventory tools, and test every purchase journey.' },
  { step: '04', title: 'QA & End-to-End Testing', desc: 'We validate product discovery, cart operations, coupons, and gateway webhooks across devices.' },
  { step: '05', title: 'Launch & IP Handover', desc: 'We support live cutover, verify analytics tracking, and transfer complete administrative access and source code.' },
]

const faqs: FAQItem[] = [
  {
    question: 'Do you build Shopify and headless stores?',
    answer: 'Yes. BBS delivers Shopify custom theme setups, Liquid modifications, or headless storefronts (Next.js commerce). We recommend the approach based on catalog scale, performance needs, and ongoing maintenance.'
  },
  {
    question: 'Can you integrate payment gateways and shipping partners?',
    answer: 'Yes. We configure and test payment gateways (Stripe, Razorpay, Cashfree) and third-party logistics APIs according to your client’s approved operational stack.'
  },
  {
    question: 'Can you redesign or migrate an existing store?',
    answer: 'Yes. We manage store redesigns and catalog migrations with planned cutovers and product URL redirects to safeguard existing SEO rankings.'
  },
  {
    question: 'How do you handle ecommerce analytics and tracking?',
    answer: 'Every store build can be paired with our Tracking & Conversion Setup to ensure accurate purchase events, value tracking, and server-side conversion API events.'
  },
  {
    question: 'Who owns the store assets and code?',
    answer: 'Your agency or your client receives 100% ownership of theme files, code repositories, and store accounts upon project completion.'
  }
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

export default function OnlineStoreDevelopmentPage() {
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
          <span className='text-[#C8860A] font-medium'>Online Store Development</span>
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-white/70 mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>
            Core Service
          </span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-black text-black mb-4 leading-tight'>
          White Label Ecommerce Development for Agencies
        </h1>
        <p className='text-lg text-gray-600 font-light mb-8'>
          Shopify, WooCommerce, and headless commerce engineering delivered under your agency brand.
        </p>

        <div className='bg-white border-l-4 border-[#C8860A] p-5 sm:p-6 rounded-r-xl border-y border-r border-[rgba(200,134,10,0.15)] mb-10 shadow-sm'>
          <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-normal'>
            BBS engineers custom online stores and ecommerce systems for agency client projects. We handle theme development, product data architecture, checkout flows, payment gateway connections, shipping integrations, testing, and store handover under your agency's brand.
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
        <div className='space-y-14 text-gray-700'>

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

          {/* Architecture note */}
          <div className='bg-[#FAF8F4] p-6 rounded-2xl border border-[rgba(200,134,10,0.18)]'>
            <span className='text-xs font-bold text-[#A06A00] uppercase tracking-widest block mb-1'>
              Architecture &amp; Stacks
            </span>
            <h3 className='text-lg font-bold text-black mb-2'>
              Shopify, WooCommerce, and Headless Architectures
            </h3>
            <p className='text-xs sm:text-sm text-gray-600 leading-relaxed mb-3'>
              We architect stores based on operational requirements: Shopify for standard catalog management with robust app ecosystems, or Headless Next.js Commerce with Shopify/Medusa backend for bespoke UI/UX and lightning-fast page speeds.
            </p>
            <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
              All builds include structured product data schemas, multi-currency compatibility where approved, and automated order webhooks.
            </p>
          </div>

          {/* Included */}
          <div>
            <h2 className='text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-2'>
              Scope
            </h2>
            <h3 className='text-2xl sm:text-3xl font-bold text-black mb-4'>
              What's Included in Store Development
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
              Development Workflow
            </h2>
            <h3 className='text-2xl sm:text-3xl font-bold text-black mb-4'>
              How We Build &amp; Launch Stores
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

          {/* Related services with direct link to Tracking */}
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
              <Link href='/services/app-integrations' className='text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors'>
                App Integrations →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Single Unified FAQ */}
      <FAQSection faqs={faqs} title="Online Store Development FAQs" />
      <Footer />
    </main>
  )
}
