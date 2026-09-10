import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata = {
  title: 'Custom Software Development Services | Build Beyond Studio',
  description: 'Business tools, dashboards, and web apps built around how your team works — custom software that saves time and reduces manual work.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Software Development Services',
  serviceType: 'Custom Software Development',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'Build Beyond Studio creates custom internal tools, business dashboards, client portals, and workflow automation systems for teams that need software designed around their actual process.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What kinds of custom software do you build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build internal dashboards, CRM tools, workflow systems, booking tools, lead management software, reporting apps, and custom web platforms tailored to your operations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is custom software different from a normal website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A website is customer-facing. Custom software is operational. It manages tasks, automates work, organizes data, and connects multiple steps into one structured system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you work with our existing tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We can connect your system with CRMs, spreadsheets, payment tools, WhatsApp, APIs, and other business software you already use.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer a fixed quote?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We scope the workflow, provide a clear build plan, and quote on a fixed-price basis before development begins, so there are no surprise hourly costs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can this be launched in phases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We often launch an MVP quickly, gather usage data, and then add modules or automations once the workflow is proven in the real world.',
      },
    },
  ],
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Custom Software Development', path: '/services/custom-software-development' },
])

const included = [
  'Workflow mapping and requirement discovery with your team',
  'Custom dashboards, admin panels, and internal tools',
  'Role-based access, approval flows, and data logic',
  'API integrations with CRMs, payments, and business tools',
  'Scalable frontend and backend architecture',
  'Deployment, testing, and post-launch support',
]

const process = [
  { step: '01', title: 'Process Review', desc: 'We identify the repetitive work, bottlenecks, and system gaps that need software to fix them.' },
  { step: '02', title: 'Workflow Design', desc: 'We map the exact tasks, roles, approvals, and data flows before any code is written.' },
  { step: '03', title: 'Build & Integrate', desc: 'We develop the dashboard, business logic, and integrations in a controlled sprint-based workflow.' },
  { step: '04', title: 'Test & Validate', desc: 'We validate real assignments, permissions, and automation behaviors before launch.' },
  { step: '05', title: 'Launch & Optimize', desc: 'We deploy the app and support changes as your operational needs grow.' },
]

const whyBBS = [
  'Built around your actual work, not generic templates or off-the-shelf tools',
  'Clear fixed-price planning so budgets stay predictable',
  'Fast deployment with clean architecture that can scale as your process evolves',
]

const faqs = [
  { q: 'What kinds of custom software do you build?', a: 'We build internal dashboards, CRM tools, workflow systems, booking tools, lead management software, reporting apps, and custom web platforms tailored to your operations.' },
  { q: 'How is custom software different from a normal website?', a: 'A website is customer-facing. Custom software is operational. It manages tasks, automates work, organizes data, and connects multiple steps into one structured system.' },
  { q: 'Can you work with our existing tools?', a: 'Yes. We can connect your system with CRMs, spreadsheets, payment tools, WhatsApp, APIs, and other business software you already use.' },
  { q: 'Do you offer a fixed quote?', a: 'Yes. We scope the workflow, provide a clear build plan, and quote on a fixed-price basis before development begins, so there are no surprise hourly costs.' },
  { q: 'Can this be launched in phases?', a: 'Absolutely. We often launch an MVP quickly, gather usage data, and then add modules or automations once the workflow is proven in the real world.' },
]

export default function CustomSoftwareDevelopmentPage() {
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
          {' → '}Custom Software Development
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>Custom Software Development Services</span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-bold text-black mb-4 leading-tight'>Business software built around how your team actually works.</h1>
        <p className='text-lg text-gray-500 font-light mb-8'>From dashboards and portals to workflow automation and internal tools.</p>

        <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-5 sm:p-6 mb-12' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
          <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
            Build Beyond Studio creates custom software systems that eliminate spreadsheet chaos, manual admin work, and disconnected tools. We design tools around your operating model so information flows clearly, approvals move quickly, and your team can focus on higher-value work instead of repetitive admin.
          </p>
        </div>
      </section>

      <section className='max-w-4xl mx-auto pb-24 px-4 sm:px-6'>
        <div className='space-y-12 text-gray-700'>
          <div>
            <TrackedLink
              href='https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20want%20to%20discuss%20a%20Custom%20Software%20Development%20project%20with%20Build%20Beyond%20Studio.'
              eventName='whatsapp_click'
              eventParams={{ button_location: 'service_page_custom_software_development' }}
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
