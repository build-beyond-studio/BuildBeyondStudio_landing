import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata = {
  title: 'Website & App Maintenance Services | Build Beyond Studio',
  description: 'Ongoing fixes, updates, and hosting care so your website and app stay secure, stable, and running smoothly.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website & App Maintenance Services',
  serviceType: 'Website & App Maintenance',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'Build Beyond Studio provides ongoing website and app maintenance, performance monitoring, hosting support, bug fixes, and updates so your digital products keep working without surprises.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does website and app maintenance include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It includes regular updates, bug fixes, performance checks, hosting support, monitoring, plugin and dependency maintenance, and quick issue resolution.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do we need ongoing maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Without regular maintenance, apps and sites can slowly break due to dependency updates, expired hosting settings, slow performance, or security gaps that appear over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you support hosting as well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We can help with hosting setup, deployment checks, server configuration, monitoring, domain issues, and performance tuning as part of the support plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you handle emergency fixes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We can respond to urgent issues, recover broken functionality, and prioritize critical fixes when uptime or user experience is at risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it a monthly plan or project-based?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer support models based on your needs — from ongoing monthly care to fixed issue-based assistance for critical updates or maintenance windows.',
      },
    },
  ],
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Website & App Maintenance', path: '/services/website-app-maintenance' },
])

const included = [
  'Ongoing bug fix and troubleshooting support',
  'Core app and website updates and dependency maintenance',
  'Hosting, deployment, and server care',
  'Performance checks and optimization recommendations',
  'Security and uptime monitoring',
  'Priority support for issues affecting clients or sales',
]

const process = [
  { step: '01', title: 'Audit Current Setup', desc: 'We review the website or app, dependencies, hosting, and any recurring issues that need attention.' },
  { step: '02', title: 'Maintenance Scope', desc: 'We define what needs monitoring, what is covered in updates, and how communication works for support requests.' },
  { step: '03', title: 'Support Workflow', desc: 'We set up a simple process for issue reporting, fixes, and release management.' },
  { step: '04', title: 'Monitoring & Updates', desc: 'We keep the platform healthy by patching updates, reviewing performance, and fixing regressions quickly.' },
  { step: '05', title: 'Continuous Support', desc: 'We stay available for ongoing care so that small issues do not become bigger operational problems.' },
]

const whyBBS = [
  'Support that keeps your product stable without forcing an entire rebuild',
  'Clear process for bug triage, hosting care, and release updates',
  'A technical partner to catch issues early before they affect growth or customer trust',
]

const faqs = [
  { q: 'What does website and app maintenance include?', a: 'It includes regular updates, bug fixes, performance checks, hosting support, monitoring, plugin and dependency maintenance, and quick issue resolution.' },
  { q: 'Why do we need ongoing maintenance?', a: 'Without regular maintenance, apps and sites can slowly break due to dependency updates, expired hosting settings, slow performance, or security gaps that appear over time.' },
  { q: 'Do you support hosting as well?', a: 'Yes. We can help with hosting setup, deployment checks, server configuration, monitoring, domain issues, and performance tuning as part of the support plan.' },
  { q: 'Can you handle emergency fixes?', a: 'Yes. We can respond to urgent issues, recover broken functionality, and prioritize critical fixes when uptime or user experience is at risk.' },
  { q: 'Is it a monthly plan or project-based?', a: 'We offer support models based on your needs — from ongoing monthly care to fixed issue-based assistance for critical updates or maintenance windows.' },
]

export default function WebsiteAndAppMaintenancePage() {
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
          {' → '}Website & App Maintenance
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>Website & App Maintenance Services</span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-bold text-black mb-4 leading-tight'>Ongoing care to keep your digital products stable, fast, and dependable.</h1>
        <p className='text-lg text-gray-500 font-light mb-8'>Fixes, updates, and hosting support that prevent small issues from becoming business blockers.</p>

        <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-5 sm:p-6 mb-12' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
          <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
            A website or app is not a one-time build. It needs maintenance, monitoring, and periodic improvements to stay performant, secure, and reliable. Our support model keeps your product running while you focus on growth, sales, and operations.
          </p>
        </div>
      </section>

      <section className='max-w-4xl mx-auto pb-24 px-4 sm:px-6'>
        <div className='space-y-12 text-gray-700'>
          <div>
            <TrackedLink
              href='https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20need%20Website%20and%20App%20Maintenance%20support%20from%20Build%20Beyond%20Studio.'
              eventName='whatsapp_click'
              eventParams={{ button_location: 'service_page_website_app_maintenance' }}
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
            <Link href='/services/app-integrations' className='text-[13px] text-[#C8860A] hover:underline'>App Integrations →</Link>
            <Link href='/services/website-development' className='text-[13px] text-[#C8860A] hover:underline'>Website Development →</Link>
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
