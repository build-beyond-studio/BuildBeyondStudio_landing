import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = buildMetadata(
  '/services/website-app-maintenance',
  'White Label Website Maintenance for Agencies | BBS',
  'White label maintenance for agency client websites and apps, covering monitoring, updates, fixes, deployment support, and technical care.'
)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'White Label Website & App Maintenance',
  serviceType: 'Website & App Maintenance',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'White label maintenance for agency client websites and apps, covering monitoring, updates, fixes, deployment support, and technical care.',
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Website & App Maintenance', path: '/services/website-app-maintenance' },
])

const included = [
  'Routine bug fixes and technical troubleshooting under agreed scope',
  'Core web and framework dependency updates (Next.js, React, Node.js)',
  'CMS and plugin security patches and regression checks',
  'Hosting and server environment care (Vercel, AWS, GCP, Hostinger)',
  'Scheduled database backups and restore procedure verification',
  'Uptime and technical error monitoring with prompt issue response',
]

const whatYouReceive = [
  'Monthly maintenance summary covering completed patches and updates',
  'Dedicated ticketing channel for triage and issue resolution',
  'Deployment verification log for all production releases',
  'Clear escalation paths for critical incidents within agreed business hours',
]

const faqs: FAQItem[] = [
  {
    question: 'What does website and app maintenance include?',
    answer: 'It includes dependency updates, security patches, bug fixes, hosting care, technical monitoring, and priority issue resolution under an agreed scope of work.'
  },
  {
    question: 'Why do marketing agencies need ongoing maintenance retainers?',
    answer: 'Without proactive maintenance, client websites face broken plugins, dependency incompatibilities, security vulnerabilities, or performance degradations that compromise live campaigns.'
  },
  {
    question: 'Do you offer unlimited support?',
    answer: 'No. To ensure high engineering quality and predictable delivery, maintenance operates under a structured monthly scope of work. Scope expansions are quoted and approved in writing.'
  },
  {
    question: 'Do you support hosting and server care?',
    answer: 'Yes. We manage hosting setups, deployment pipelines, server configurations, domain configurations, and SSL certificates across Vercel, AWS, GCP, and other platforms.'
  },
  {
    question: 'Can you handle urgent fixes during active client campaigns?',
    answer: 'Yes. Critical issues affecting live campaigns or transactions receive priority triage and resolution within the agreed working hours and maintenance tier.'
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

export default function WebsiteAndAppMaintenancePage() {
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
          <span className='text-[#C8860A] font-medium'>Website &amp; App Maintenance</span>
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-white/70 mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>Core Service</span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-black text-black mb-4 leading-tight'>
          White Label Website and App Maintenance for Agencies
        </h1>
        <p className='text-lg text-gray-600 font-light mb-8'>
          Ongoing technical care for client websites and applications under your agency brand.
        </p>

        <div className='bg-white border-l-4 border-[#C8860A] p-5 sm:p-6 rounded-r-xl border-y border-r border-[rgba(200,134,10,0.15)] mb-10 shadow-sm'>
          <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-normal'>
            BBS maintains agency client websites and applications within an agreed support scope. The plan covers monitoring, security patches, dependency updates, backups, bug fixes, deployment checks, and performance care under your brand.
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
              Scope of Coverage
            </h2>
            <h3 className='text-2xl sm:text-3xl font-bold text-black mb-4'>
              Included Maintenance Activities
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

          {/* Relevant Partner Proof */}
          <div className='bg-[#FAF8F4] p-6 rounded-2xl border border-[rgba(200,134,10,0.18)]'>
            <span className='text-xs font-bold text-[#A06A00] uppercase tracking-widest block mb-1'>
              Agency Case Study
            </span>
            <h3 className='text-lg font-bold text-black mb-2'>
              Shivora Media Technical Offloading
            </h3>
            <p className='text-xs sm:text-sm text-gray-600 leading-relaxed mb-4'>
              BBS took 100% ownership of project execution, deployments, and post-launch maintenance under strict NDA, allowing Shivora Media to increase client capacity by 40% in Bhopal.
            </p>
            <Link
              href='/case-studies/shivora-media'
              className='inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#C8860A] hover:text-[#A06A00]'
            >
              <span>Read the full case study</span>
              <ArrowRight className='w-3.5 h-3.5' />
            </Link>
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
              <Link href='/services/dedicated-development-pod' className='text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors'>
                Dedicated Development Pod →
              </Link>
              <Link href='/services/app-integrations' className='text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors'>
                App Integrations →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Single Merged FAQ */}
      <FAQSection faqs={faqs} title="Maintenance FAQs" />
      <Footer />
    </main>
  )
}
