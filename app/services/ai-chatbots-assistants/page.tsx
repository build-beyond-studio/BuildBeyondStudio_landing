import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata = {
  title: 'AI Chatbots & Assistants Services | Build Beyond Studio',
  description: 'Smart chat and WhatsApp bots that answer customers and capture leads 24/7 — built to automate conversations without losing the human feel.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Chatbots & Assistants Services',
  serviceType: 'AI Chatbots & Assistants',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'Build Beyond Studio builds AI chatbots and WhatsApp assistants that qualify leads, answer common questions, schedule calls, and automate repetitive conversations around the clock.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What can an AI chatbot do for us?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can answer product questions, qualify leads, capture contact details, route conversations, share pricing info, and connect users to the right next step without needing a person online at all times.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can it work on WhatsApp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build WhatsApp-based assistants for customer support, lead qualification, appointment booking, and routine communication flows that feel fast and natural.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does it replace our team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. It handles repetitive conversations and front-end qualification, while your team focuses on more complex or high-value interactions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can it connect to our systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We can connect the bot to your website, forms, CRM, spreadsheets, or internal tools so the conversation leads directly to a workflow.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can we launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most standard chatbot flows can be developed and tested in a matter of days to a few weeks, depending on complexity and required integrations.',
      },
    },
  ],
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'AI Chatbots & Assistants', path: '/services/ai-chatbots-assistants' },
])

const included = [
  'Conversation flow design for sales, support, and lead qualification',
  'WhatsApp and web chat bot setup with quick replies and handoff logic',
  'Lead capture, follow-up triggers, and CRM sync',
  'Basic knowledge-base responses and FAQs',
  'Human escalation paths for complex cases',
  'Launch-ready bot testing and iterations',
]

const process = [
  { step: '01', title: 'Conversation Mapping', desc: 'We review the most common customer conversations and define the script, funnel, and fallback logic.' },
  { step: '02', title: 'Bot Design', desc: 'We design the flow, tone, prompts, and database logic around real user intent.' },
  { step: '03', title: 'Build & Connect', desc: 'We connect the assistant to web chat, WhatsApp, or other channels and integrate your tools.' },
  { step: '04', title: 'QA & Training', desc: 'We test edge cases, incorrect user inputs, and qualification scenarios before launch.' },
  { step: '05', title: 'Launch & Improve', desc: 'We monitor usage and refine prompts and flows based on actual customer behavior.' },
]

const whyBBS = [
  'Built to feel useful, not robotic — fast answers with clear handoff when needed',
  'Works across your website, WhatsApp, and support workflows',
  'Leads and conversations are channelled into your existing systems instead of lost in chat threads',
]

const faqs = [
  { q: 'What can an AI chatbot do for us?', a: 'It can answer product questions, qualify leads, capture contact details, route conversations, share pricing info, and connect users to the right next step without needing a person online at all times.' },
  { q: 'Can it work on WhatsApp?', a: 'Yes. We build WhatsApp-based assistants for customer support, lead qualification, appointment booking, and routine communication flows that feel fast and natural.' },
  { q: 'Does it replace our team?', a: 'No. It handles repetitive conversations and front-end qualification, while your team focuses on more complex or high-value interactions.' },
  { q: 'Can it connect to our systems?', a: 'Yes. We can connect the bot to your website, forms, CRM, spreadsheets, or internal tools so the conversation leads directly to a workflow.' },
  { q: 'How quickly can we launch?', a: 'Most standard chatbot flows can be developed and tested in a matter of days to a few weeks, depending on complexity and required integrations.' },
]

export default function AIAssistantsPage() {
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
          {' → '}AI Chatbots & Assistants
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>AI Chatbots & Assistants Services</span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-bold text-black mb-4 leading-tight'>AI chatbots that answer questions and capture leads without slowing your team down.</h1>
        <p className='text-lg text-gray-500 font-light mb-8'>Built for web chat, WhatsApp, and customer journeys that never sleep.</p>

        <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-5 sm:p-6 mb-12' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
          <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
            A strong chatbot should not just reply — it should qualify, route, and convert. Build Beyond Studio designs AI assistants to handle the repetitive front end of your sales and support flows so users get immediate responses and your team only steps in when it matters.
          </p>
        </div>
      </section>

      <section className='max-w-4xl mx-auto pb-24 px-4 sm:px-6'>
        <div className='space-y-12 text-gray-700'>
          <div>
            <TrackedLink
              href='https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20want%20to%20discuss%20an%20AI%20Chatbot%20or%20Assistant%20with%20Build%20Beyond%20Studio.'
              eventName='whatsapp_click'
              eventParams={{ button_location: 'service_page_ai_chatbots_assistants' }}
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
            <Link href='/services/custom-software-development' className='text-[13px] text-[#C8860A] hover:underline'>Custom Software Development →</Link>
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
