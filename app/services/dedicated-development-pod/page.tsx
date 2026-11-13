import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = buildMetadata(
  '/services/dedicated-development-pod',
  'Dedicated Development Team for Agencies | BBS',
  'A managed development pod for agencies with ongoing client work, shared priorities, regular demos, quality checks, and delivery under your brand.'
)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dedicated Development Team for Agencies',
  serviceType: 'Dedicated Development Pod',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'A managed development pod for agencies with ongoing client work, shared priorities, regular demos, quality checks, and delivery under your brand.',
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Dedicated Development Pod', path: '/services/dedicated-development-pod' },
])

const whatYouReceive = [
  'Dedicated full-stack engineers aligned to your sprint cycles',
  'Weekly progress demos, staging links, and direct task coordination',
  'Codebase architecture reviews and QA testing before every release',
  '100% IP ownership, clear handover notes, and repository access',
]

const faqs: FAQItem[] = [
  {
    question: 'What is a dedicated development pod?',
    answer: 'A dedicated development pod is an agile engineering team assigned to ongoing agency work. The pod works on your agency’s backlog, communication channels, and review cycle without the payroll liability of direct hiring.',
  },
  {
    question: 'Is the pod part of our agency team?',
    answer: 'The pod works as an invisible extension of your agency. Your agency owns the client relationship, backlog priorities, approvals, and commercial terms.',
  },
  {
    question: 'What work can the pod handle?',
    answer: 'The pod handles custom websites, web applications, ecommerce builds, third-party integrations, tracking setups, bug fixes, deployment pipelines, and ongoing maintenance.',
  },
  {
    question: 'How do we assign priorities?',
    answer: 'Your agency maintains the sprint backlog. BBS reviews tickets for scope, dependencies, and acceptance criteria before moving them into development.',
  },
  {
    question: 'How do we review progress?',
    answer: 'BBS provides weekly progress updates, staging links, and working demos. Your team reviews completed features and approves priorities before releases.',
  },
  {
    question: 'Will the pod speak directly with our clients?',
    answer: 'Only when your agency specifically requests technical attendance. The default model keeps your agency as the sole client lead while BBS communicates with your internal team.',
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

export default function DedicatedDevelopmentPodPage() {
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
          <span className='text-[#C8860A] font-medium'>Dedicated Development Pod</span>
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-white/70 mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>Core Service</span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-black text-black mb-4 leading-tight'>
          Dedicated Development Team for Agencies
        </h1>
        <p className='text-lg text-gray-600 font-light mb-8'>
          A managed development pod for agencies with ongoing client work, shared priorities, regular demos, quality checks, and delivery under your brand.
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

          {/* Section 1 */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-2xl p-6 sm:p-7 shadow-sm'>
            <h2 className='text-xl sm:text-2xl font-bold text-black mb-3'>When This Service Fits</h2>
            <p className='text-sm sm:text-base text-gray-700 leading-relaxed font-light'>
              Use a dedicated development pod when your agency handles steady monthly web projects, client retainer requests, or iterative feature rollouts. The pod eliminates the overhead of sourcing, vetting, and managing developers internally while preserving your agency's gross margins.
            </p>
          </div>

          {/* Section 2 */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-2xl p-6 sm:p-7 shadow-sm'>
            <h2 className='text-xl sm:text-2xl font-bold text-black mb-3'>Delivery and Review Rhythm</h2>
            <p className='text-sm sm:text-base text-gray-700 leading-relaxed font-light mb-3'>
              The pod provides structured progress updates, staging environments, and working demos. Your team reviews completed features, records client feedback, and sets upcoming sprint priorities.
            </p>
            <p className='text-xs text-gray-500 italic'>
              * Pod sizing, roles, and minimum engagement periods are confirmed per agency volume. Contact us for custom pod configurations.
            </p>
          </div>

          {/* Relevant Partner Proof */}
          <div className='bg-[#FAF8F4] p-6 rounded-2xl border border-[rgba(200,134,10,0.18)]'>
            <span className='text-xs font-bold text-[#A06A00] uppercase tracking-widest block mb-1'>
              Partner Case Study
            </span>
            <h3 className='text-lg font-bold text-black mb-2'>
              BVFX Digify Sprint Integration
            </h3>
            <p className='text-xs sm:text-sm text-gray-600 leading-relaxed mb-4'>
              BBS integrated directly into BVFX Digify's workflow to deliver 3× faster project execution without adding internal headcount in Bhilai.
            </p>
            <Link
              href='/case-studies/bvfx-digify'
              className='inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#C8860A] hover:text-[#A06A00]'
            >
              <span>Read the full case study</span>
              <ArrowRight className='w-3.5 h-3.5' />
            </Link>
          </div>

          {/* Related services with direct link to Maintenance */}
          <div>
            <h2 className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-3'>
              Related Services
            </h2>
            <div className='flex flex-wrap gap-3'>
              <Link href='/services/website-app-maintenance' className='text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors'>
                Website &amp; App Maintenance →
              </Link>
              <Link href='/services/website-development' className='text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors'>
                Website Development →
              </Link>
              <Link href='/services/custom-software-development' className='text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors'>
                Custom Software Development →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Single Merged FAQ */}
      <FAQSection faqs={faqs} title="Dedicated Pod FAQs" />
      <Footer />
    </main>
  )
}
