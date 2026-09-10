import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata = {
  title: 'UI / UX Design Services | Build Beyond Studio',
  description: 'UI/UX strategy, wireframes, and product design systems that turn complex workflows into clean, conversion-focused experiences.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'UI / UX Design Services',
  serviceType: 'UI / UX Design',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'Build Beyond Studio designs user interfaces, information architecture, and conversion-focused product flows for websites, apps, dashboards, and internal tools.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What do your UI/UX design services include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We cover user research, competitor analysis, wireframes, user flows, design systems, high-fidelity mockups, and clickable prototypes for web and product experiences.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you design for websites and apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We design websites, landing pages, SaaS dashboards, mobile UX, and internal business tools with a focus on clarity, trust, and conversion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you work with an existing product team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We can plug into your team, refine weak journeys, create design systems, and deliver screens in a format that engineers can build efficiently.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide design only or also build the final product?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can handle either. We provide design systems and UI/UX direction, and we also build the final product if you want design and development under one roof.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a UI/UX project usually take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Small landing page or app flow projects usually take 1–3 weeks. Larger product or website redesigns typically range from 3–8 weeks depending on scope and review cycles.',
      },
    },
  ],
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'UI / UX Design', path: '/services/ui-ux-design' },
])

const included = [
  'UX strategy and user journey mapping',
  'Wireframes, click-through prototypes, and page flows',
  'High-fidelity interface design for web and mobile',
  'Design systems, colors, typography, and reusable components',
  'Conversion-focused landing page and funnel UX',
  'Design handoff with developer-ready specifications',
]

const process = [
  { step: '01', title: 'Research & Audit', desc: 'We examine user friction, business goals, and where conversions are being lost or delayed.' },
  { step: '02', title: 'User Flows & Wireframes', desc: 'We map the journey and define the structure before visual design begins.' },
  { step: '03', title: 'Visual Design', desc: 'We create screens, system styles, and reusable design patterns that feel premium and practical.' },
  { step: '04', title: 'Prototype & Review', desc: 'We validate the product experience with clickable flows and clear signs for iteration.' },
  { step: '05', title: 'Handoff & Build Support', desc: 'We prepare the design files and specs so development moves quickly without quality loss.' },
]

const whyBBS = [
  'Design decisions tied directly to conversion and business goals',
  'One team for UI/UX design and technical implementation',
  'Clear systems that scale as the product grows',
]

const faqs = [
  { q: 'What do your UI/UX design services include?', a: 'We cover user research, competitor analysis, wireframes, user flows, design systems, high-fidelity mockups, and clickable prototypes for web and product experiences.' },
  { q: 'Do you design for websites and apps?', a: 'Yes. We design websites, landing pages, SaaS dashboards, mobile UX, and internal business tools with a focus on clarity, trust, and conversion.' },
  { q: 'Can you work with an existing product team?', a: 'Yes. We can plug into your team, refine weak journeys, create design systems, and deliver screens in a format that engineers can build efficiently.' },
  { q: 'Do you provide design only or also build the final product?', a: 'We can handle either. We provide design systems and UI/UX direction, and we also build the final product if you want design and development under one roof.' },
  { q: 'How long does a UI/UX project usually take?', a: 'Small landing page or app flow projects usually take 1–3 weeks. Larger product or website redesigns typically range from 3–8 weeks depending on scope and review cycles.' },
]

export default function UiUxDesignPage() {
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
          {' → '}UI / UX Design
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>UI / UX Design Services</span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-bold text-black mb-4 leading-tight'>Design systems that make complex products feel effortless.</h1>
        <p className='text-lg text-gray-500 font-light mb-8'>Clear, conversion-focused UX strategy and interface design for modern websites, apps, and products.</p>

        <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-5 sm:p-6 mb-12' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
          <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
            Great products are not built by adding more features — they are built by removing friction. We design interfaces and product journeys that make the right next step obvious, reduce confusion, and turn attention into action.
          </p>
        </div>
      </section>

      <section className='max-w-4xl mx-auto pb-24 px-4 sm:px-6'>
        <div className='space-y-12 text-gray-700'>
          <div>
            <TrackedLink
              href='https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20want%20to%20discuss%20UI%20%2F%20UX%20design%20services%20with%20Build%20Beyond%20Studio.'
              eventName='whatsapp_click'
              eventParams={{ button_location: 'service_page_ui_ux_design' }}
              className='inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold'
              style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
            >
              Book a Design Consultation →
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
            <Link href='/services/mobile-app-development' className='text-[13px] text-[#C8860A] hover:underline'>Mobile App Development →</Link>
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
