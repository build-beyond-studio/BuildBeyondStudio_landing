import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = buildMetadata(
  '/services/ai-chatbots-assistants',
  'White Label AI Chatbot Development for Agencies | BBS',
  'White label AI chatbot development for agency client sites and WhatsApp, with approved support, qualification, routing, and lead capture flows.'
)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'White Label AI Chatbot Development',
  serviceType: 'AI Chatbots & Assistants',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'White label AI chatbot development for agency client sites and WhatsApp, with approved support, qualification, routing, and lead capture flows.',
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'AI Chatbots & Assistants', path: '/services/ai-chatbots-assistants' },
])

const included = [
  'Custom chat interface embedding directly into client websites',
  'Rule-based and LLM-powered qualification and routing logic',
  'Seamless human-handoff escalation workflows when operators are available',
  'CRM and spreadsheet lead synchronization via webhooks',
  'Conversation transcript storage and performance analytics',
  'Pre-launch conversational testing and error boundary handling',
]

const whatYouReceive = [
  'Configured chatbot widget code or webhook integration endpoints',
  'Structured intent map and conversation flow documentation',
  'CRM routing and notification test logs',
  'Handover documentation for ongoing knowledge base updates',
]

const process = [
  { step: '01', title: 'Conversation Mapping', desc: 'We identify key lead qualification questions, knowledge base resources, and routing destinations.' },
  { step: '02', title: 'Prompt & Flow Design', desc: 'We define the interaction logic, guardrails, fallback boundaries, and human escalation triggers.' },
  { step: '03', title: 'Integration & Development', desc: 'We build the bot, embed the widget on the staging site, and connect CRM endpoints.' },
  { step: '04', title: 'Conversational QA', desc: 'We test dialogue edge cases, qualification accuracy, and handoff triggers.' },
  { step: '05', title: 'Deployment & Handover', desc: 'Live deployment under your agency brand with complete access and documentation.' },
]

const faqs: FAQItem[] = [
  {
    question: 'What can an AI chatbot do for an agency client?',
    answer: 'It handles routine product inquiries, qualifies inbound leads, collects contact details, and routes qualified prospects into the agency client’s CRM or email inbox 24/7.',
  },
  {
    question: 'How does human handoff work?',
    answer: 'When a user requests a human representative or asks a query outside the approved knowledge base, the bot escalates the conversation via email, live chat routing, or CRM alert.',
  },
  {
    question: 'Can the bot integrate with CRM tools?',
    answer: 'Yes. We connect chatbots to HubSpot, Zoho, Google Sheets, or custom webhook endpoints to log conversations and lead records in real time.',
  },
  {
    question: 'Who owns the bot configuration and data?',
    answer: 'Your agency or your client retains 100% ownership of all conversation prompts, knowledge base documents, and integration credentials.',
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

export default function AiChatbotsAssistantsPage() {
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
          <span className='text-[#C8860A] font-medium'>AI Chatbots &amp; Assistants</span>
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-white/70 mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>Additional Capability</span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-black text-black mb-4 leading-tight'>
          White Label AI Chatbot Development for Agencies
        </h1>
        <p className='text-lg text-gray-600 font-light mb-8'>
          AI chatbots and customer assistants with human handoff for agency client sites and lead workflows.
        </p>

        <div className='bg-white border-l-4 border-[#C8860A] p-5 sm:p-6 rounded-r-xl border-y border-r border-[rgba(200,134,10,0.15)] mb-10 shadow-sm'>
          <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-normal'>
            BBS builds conversational assistants for agency client projects. We structure knowledge bases, configure qualification flows, set up human-handoff triggers, and connect conversations directly to client CRMs.
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
              Included in Chatbot Engagements
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
              Delivery Workflow
            </h2>
            <h3 className='text-2xl sm:text-3xl font-bold text-black mb-4'>
              How We Build &amp; Train Chatbots
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
              <Link href='/services/app-integrations' className='text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors'>
                App Integrations →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Single Merged FAQ */}
      <FAQSection faqs={faqs} title="AI Chatbot FAQs" />
      <Footer />
    </main>
  )
}
