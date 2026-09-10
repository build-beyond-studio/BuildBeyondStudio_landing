import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata = {
  title: 'App Integrations Services | Build Beyond Studio',
  description: 'Connect your website or software to payment gateways, CRMs, automation tools, and other systems you already rely on.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'App Integrations Services',
  serviceType: 'App Integrations',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'Build Beyond Studio integrates websites, dashboards, and software with payment gateways, CRM platforms, automation tools, and internal systems to keep information moving automatically.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of systems can you connect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can connect CRMs, payment gateways, email tools, analytics, WhatsApp, internal databases, and custom APIs depending on the system you already use.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build custom API integrations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If a tool has an API or webhook, we can connect it. If it does not, we can still design a practical integration path around the data you need to move.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do integrations help us?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Integrations reduce manual work, keep records accurate, make handoffs faster, and help your team act on data in real time instead of copying it between tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will this affect our current systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We scope the integration carefully and test all data transfer paths before launch so you can upgrade without creating operational downtime or broken flows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can this be phased in?' ,
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We usually launch the highest-value connection first, then add more integrations as the workflow becomes more automated and stable.',
      },
    },
  ],
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'App Integrations', path: '/services/app-integrations' },
])

const included = [
  'API and webhook integrations for your apps and tools',
  'CRM, payment, and automation platform connections',
  'Data syncing between your website, app, and internal systems',
  'Custom forms and workflow triggers for leads, payments, and reports',
  'Monitoring and testing for stable data flow',
  'Support for new automation features and expansion',
]

const process = [
  { step: '01', title: 'System Review', desc: 'We map the tools, data points, and workflows that need to connect.' },
  { step: '02', title: 'Integration Plan', desc: 'We define the data flow, triggers, and API logic before any build starts.' },
  { step: '03', title: 'Build & Connect', desc: 'We develop the integrations and validate each data path using real-world scenarios.' },
  { step: '04', title: 'Testing & QA', desc: 'We check edge cases, duplicate prevention, error handling, and monitoring before launch.' },
  { step: '05', title: 'Launch & Optimize', desc: 'We monitor the flow and refine the setup as your tools and processes evolve.' },
]

const whyBBS = [
  'Clean, reliable data flow between the tools you already depend on',
  'Custom API design and automation logic without forcing a platform switch',
  'Less manual work, fewer mistakes, and faster decision-making across your system stack',
]

const faqs = [
  { q: 'What types of systems can you connect?', a: 'We can connect CRMs, payment gateways, email tools, analytics, WhatsApp, internal databases, and custom APIs depending on the system you already use.' },
  { q: 'Can you build custom API integrations?', a: 'Yes. If a tool has an API or webhook, we can connect it. If it does not, we can still design a practical integration path around the data you need to move.' },
  { q: 'How do integrations help us?', a: 'Integrations reduce manual work, keep records accurate, make handoffs faster, and help your team act on data in real time instead of copying it between tools.' },
  { q: 'Will this affect our current systems?', a: 'We scope the integration carefully and test all data transfer paths before launch so you can upgrade without creating operational downtime or broken flows.' },
  { q: 'Can this be phased in?', a: 'Yes. We usually launch the highest-value connection first, then add more integrations as the workflow becomes more automated and stable.' },
]

export default function AppIntegrationsPage() {
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
          {' → '}App Integrations
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>App Integrations Services</span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-bold text-black mb-4 leading-tight'>Connect the tools your business already depends on.</h1>
        <p className='text-lg text-gray-500 font-light mb-8'>Build the links between your website, software, CRM, payments, and operations.</p>

        <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-5 sm:p-6 mb-12' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
          <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
            Modern businesses lose time when data sits in silos. We connect your website, CRM, payments, customer support flow, and internal tools so the information moves where it needs to go without manual re-entry or missed steps.
          </p>
        </div>
      </section>

      <section className='max-w-4xl mx-auto pb-24 px-4 sm:px-6'>
        <div className='space-y-12 text-gray-700'>
          <div>
            <TrackedLink
              href='https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20want%20to%20discuss%20App%20Integration%20work%20with%20Build%20Beyond%20Studio.'
              eventName='whatsapp_click'
              eventParams={{ button_location: 'service_page_app_integrations' }}
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
            <Link href='/services/online-store-development' className='text-[13px] text-[#C8860A] hover:underline'>Online Store Development →</Link>
            <Link href='/services/website-app-maintenance' className='text-[13px] text-[#C8860A] hover:underline'>Website & App Maintenance →</Link>
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
