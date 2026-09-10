import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata = {
  title: 'Online Store Development Services | Build Beyond Studio',
  description: 'Custom e-commerce stores built to sell, not just look good — designed for conversions, product flow, and a strong customer journey.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Online Store Development Services',
  serviceType: 'Online Store Development',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'Build Beyond Studio develops custom online stores for businesses that need better conversion flows, tailored catalog structure, and a storefront that supports growth instead of just a template layout.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you build custom stores or just themes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build custom storefronts and commerce flows from the ground up, with logic designed around your products, pricing, and buyer journey instead of a generic template.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you integrate payment and shipping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We can connect payment gateways, shipping workflows, order management, and third-party logistics or ERP tools depending on your stack.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you redesign an existing store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We can redesign and migrate your current store or replace an outdated storefront with a custom experience that supports conversion, reliability, and scale.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the store mobile-first?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We design for mobile-first browsing and fast checkout flows because most product discovery and convenient purchase behavior happens on phone devices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can it grow as my catalog grows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We architect the front end and product data model to handle growth in catalog size, filters, categories, and sales volume without a redesign cycle.',
      },
    },
  ],
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Online Store Development', path: '/services/online-store-development' },
])

const included = [
  'Custom storefront design and user journey mapping',
  'Product catalog structure, filters, and landing pages',
  'Checkout logic, cart flow, and conversion optimization',
  'Payment gateway and order management integrations',
  'Mobile-first layout and storefront performance tuning',
  'Launch, QA, and post-launch optimization support',
]

const process = [
  { step: '01', title: 'Store Strategy', desc: 'We review your products, audience, offers, and goals to map the best buying flow.' },
  { step: '02', title: 'UX & Catalog Design', desc: 'We create the storefront structure, category logic, and product experience around conversion.' },
  { step: '03', title: 'Build & Integrate', desc: 'We develop the store, connect payments and inventory tools, and test each checkout path.' },
  { step: '04', title: 'QA & Optimization', desc: 'We validate product discovery, checkout flow, and final user experience before launch.' },
  { step: '05', title: 'Launch & Improve', desc: 'We support launch and tune the storefront for sales, speed, and customer experience.' },
]

const whyBBS = [
  'Custom stores built around product flow and buying behavior, not generic demo templates',
  'Clean architecture that can scale with more products, variants, and traffic',
  'Conversion-focused design and ecommerce integrations that reduce drop-offs',
]

const faqs = [
  { q: 'Do you build custom stores or just themes?', a: 'We build custom storefronts and commerce flows from the ground up, with logic designed around your products, pricing, and buyer journey instead of a generic template.' },
  { q: 'Can you integrate payment and shipping?', a: 'Yes. We can connect payment gateways, shipping workflows, order management, and third-party logistics or ERP tools depending on your stack.' },
  { q: 'Can you redesign an existing store?', a: 'Yes. We can redesign and migrate your current store or replace an outdated storefront with a custom experience that supports conversion, reliability, and scale.' },
  { q: 'Is the store mobile-first?', a: 'Yes. We design for mobile-first browsing and fast checkout flows because most product discovery and convenient purchase behavior happens on phone devices.' },
  { q: 'Can it grow as my catalog grows?', a: 'Yes. We architect the front end and product data model to handle growth in catalog size, filters, categories, and sales volume without a redesign cycle.' },
]

export default function OnlineStoreDevelopmentPage() {
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
          {' → '}Online Store Development
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>Online Store Development Services</span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-bold text-black mb-4 leading-tight'>Online stores designed to sell — not just to look polished.</h1>
        <p className='text-lg text-gray-500 font-light mb-8'>Custom storefronts built for conversion, product clarity, and repeatability.</p>

        <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-5 sm:p-6 mb-12' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
          <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
            Your store should make the purchase decision feel easy. Build Beyond Studio designs and develops custom e-commerce experiences around your products, customer journey, and operational setup so people can discover the right item, trust the offer, and complete checkout without friction.
          </p>
        </div>
      </section>

      <section className='max-w-4xl mx-auto pb-24 px-4 sm:px-6'>
        <div className='space-y-12 text-gray-700'>
          <div>
            <TrackedLink
              href='https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20want%20to%20discuss%20an%20Online%20Store%20Development%20project%20with%20Build%20Beyond%20Studio.'
              eventName='whatsapp_click'
              eventParams={{ button_location: 'service_page_online_store_development' }}
              className='inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold'
              style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
            >
              Get a Fixed-Price Quote →
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
            <Link href='/services/website-development' className='text-[13px] text-[#C8860A] hover:underline'>Website Development →</Link>
            <Link href='/services/app-integrations' className='text-[13px] text-[#C8860A] hover:underline'>App Integrations →</Link>
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
