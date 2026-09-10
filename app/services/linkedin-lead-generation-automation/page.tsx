import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata = {
  title: 'LinkedIn Lead Generation & Automation Services | Build Beyond Studio',
  description: 'Automated outreach, connection requests, and follow-ups that fill your pipeline while you sleep — built for B2B lead generation and pipeline growth.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LinkedIn Lead Generation & Automation Services',
  serviceType: 'LinkedIn Lead Generation & Automation',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'Build Beyond Studio designs and automates LinkedIn-based lead generation systems that help businesses identify prospects, send connection requests, and maintain follow-ups consistently over time.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is included in LinkedIn lead automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We set up outreach workflows for profile targeting, connection requests, personalized messaging, follow-up sequences, and CRM capture so your pipeline continues growing even when you are offline.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this safe for LinkedIn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The system is designed to stay within realistic usage limits and human-like behavior patterns, with safeguards to reduce risk and keep outreach sustainable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can this sync with our CRM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We can sync leads and replies into your CRM or spreadsheet so sales follow-up stays organized and measurable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you create the messaging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We help define the offer, target audience, and outreach flow, then create messaging templates that feel personalized and relevant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can this be used for B2B sales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. This is especially effective for B2B lead generation where the goal is to consistently reach decision-makers and move them into a discovery conversation.',
      },
    },
  ],
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'LinkedIn Lead Generation & Automation', path: '/services/linkedin-lead-generation-automation' },
])

const included = [
  'Lead list building and ideal customer targeting',
  'Connection request and message workflow design',
  'Follow-up sequencing and lead nurturing automation',
  'CRM or spreadsheet syncing for new replies and leads',
  'Message testing and optimization for better conversions',
  'Performance tracking and weekly refinement',
]

const process = [
  { step: '01', title: 'Audience Mapping', desc: 'We define who you want to reach, which roles matter, and what value proposition gets attention.' },
  { step: '02', title: 'Outreach Design', desc: 'We create the message flow, trigger logic, and follow-up sequence for a realistic sales process.' },
  { step: '03', title: 'Automation Build', desc: 'We set up the LinkedIn outreach system, tags, and triggers for consistent execution.' },
  { step: '04', title: 'Lead Capture', desc: 'We route replies and new conversations into your CRM so sales has a clean pipeline to manage.' },
  { step: '05', title: 'Optimize & Scale', desc: 'We review response quality and improve messaging, targeting, and sequences over time.' },
]

const whyBBS = [
  'Sustainable, human-like outreach that is built to keep running without constant manual effort',
  'Clear sales process tied to actual pipeline management, not just vanity engagement',
  'A system that fills pipeline consistently while your team focuses on conversations and closing',
]

const faqs = [
  { q: 'What is included in LinkedIn lead automation?', a: 'We set up outreach workflows for profile targeting, connection requests, personalized messaging, follow-up sequences, and CRM capture so your pipeline continues growing even when you are offline.' },
  { q: 'Is this safe for LinkedIn?', a: 'The system is designed to stay within realistic usage limits and human-like behavior patterns, with safeguards to reduce risk and keep outreach sustainable.' },
  { q: 'Can this sync with our CRM?', a: 'Yes. We can sync leads and replies into your CRM or spreadsheet so sales follow-up stays organized and measurable.' },
  { q: 'Do you create the messaging?', a: 'Yes. We help define the offer, target audience, and outreach flow, then create messaging templates that feel personalized and relevant.' },
  { q: 'Can this be used for B2B sales?', a: 'Absolutely. This is especially effective for B2B lead generation where the goal is to consistently reach decision-makers and move them into a discovery conversation.' },
]

export default function LinkedInLeadGenerationAutomationPage() {
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
          {' → '}LinkedIn Lead Generation & Automation
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>LinkedIn Lead Generation & Automation</span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-bold text-black mb-4 leading-tight'>Automated outreach that turns LinkedIn into a consistent sales engine.</h1>
        <p className='text-lg text-gray-500 font-light mb-8'>Connection requests, follow-ups, and lead capture built to keep your pipeline moving.</p>

        <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-5 sm:p-6 mb-12' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
          <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
            The best outreach systems do not rely on manual follow-up. They combine targeting, message sequencing, and lead capture into one process that keeps prospects moving forward while your team spends time on the right conversations. Build Beyond Studio helps build that system.
          </p>
        </div>
      </section>

      <section className='max-w-4xl mx-auto pb-24 px-4 sm:px-6'>
        <div className='space-y-12 text-gray-700'>
          <div>
            <TrackedLink
              href='https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20want%20to%20discuss%20LinkedIn%20Lead%20Generation%20and%20Automation%20with%20Build%20Beyond%20Studio.'
              eventName='whatsapp_click'
              eventParams={{ button_location: 'service_page_linkedin_lead_generation_automation' }}
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
            <Link href='/services/ai-chatbots-assistants' className='text-[13px] text-[#C8860A] hover:underline'>AI Chatbots & Assistants →</Link>
            <Link href='/services/custom-software-development' className='text-[13px] text-[#C8860A] hover:underline'>Custom Software Development →</Link>
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
