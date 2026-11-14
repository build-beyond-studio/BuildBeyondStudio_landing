import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = buildMetadata(
  '/services/custom-software-development',
  'White Label Custom Software Development for Agencies | BBS',
  'White label custom software for agency clients. We build dashboards, portals, and workflow tools with full IP handover and NDA-first delivery.'
)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'White Label Custom Software Development',
  serviceType: 'Custom Software Development',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'White label custom software for agency clients. We build dashboards, portals, and workflow tools with full IP handover and NDA-first delivery.',
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Custom Software Development', path: '/services/custom-software-development' },
])

const included = [
  'Role-based access control (RBAC), multi-tenant data architecture',
  'Interactive administrative dashboards, metrics, and report builders',
  'Custom business process automation and approval workflows',
  'Secure REST and GraphQL API integrations with legacy databases',
  'Containerized deployments on Docker, AWS, or Google Cloud Platform',
  'Comprehensive code documentation, API schemas, and IP handover',
]

const whatYouReceive = [
  'Full source code repository (frontend, backend, database migrations)',
  'Technical architecture diagrams and data schema documentation',
  'Staging environment access for agency review and client demos',
  '100% intellectual property rights assignment upon project completion',
]

const process = [
  { step: '01', title: 'System Architecture & Data Modeling', desc: 'We review user roles, permission structures, database schemas, and operational requirements.' },
  { step: '02', title: 'UI/UX & Workflow Wireframing', desc: 'Interactive prototypes of dashboard screens, tables, and management flows.' },
  { step: '03', title: 'Backend & Frontend Engineering', desc: 'Full-stack development using Node.js, Next.js, and secure SQL/NoSQL databases. You get a weekly progress update with a staging link.' },
  { step: '04', title: 'Security & QA Testing', desc: 'Data validation, session management, and cross-browser functional testing.' },
  { step: '05', title: 'Deployment & Full IP Handover', desc: 'Production launch with complete documentation and 100% source code transfer.' },
]

const faqs: FAQItem[] = [
  {
    question: 'What kinds of custom software does BBS build for agencies?',
    answer: 'We build internal operations dashboards, client portals, custom CRMs, reservation and booking engines, reporting interfaces, and multi-tenant web applications.',
  },
  {
    question: 'How is custom software different from a standard website build?',
    answer: 'A marketing website is designed for public brand discovery. Custom software handles operational logic, authentication, database transactions, background jobs, and business workflows.',
  },
  {
    question: 'Can you integrate with our client’s existing software?',
    answer: 'Yes. We connect custom software tools to existing ERPs, CRMs (HubSpot, Salesforce), payment processors, and proprietary internal databases.',
  },
  {
    question: 'Who owns the code upon completion?',
    answer: 'You receive 100% of the source code, database scripts, and intellectual property when development is complete. BBS retains zero proprietary claims.',
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

export default function CustomSoftwareDevelopmentPage() {
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
          <span className='text-[#C8860A] font-medium'>Custom Software Development</span>
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-white/70 mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>Additional Capability</span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-black text-black mb-4 leading-tight'>
          White Label Custom Software Development for Agencies
        </h1>
        <p className='text-lg text-gray-600 font-light mb-8'>
          Custom business tools, client portals, and administrative dashboards engineered under your agency brand.
        </p>

        <div className='bg-white border-l-4 border-[#C8860A] p-5 sm:p-6 rounded-r-xl border-y border-r border-[rgba(200,134,10,0.15)] mb-10 shadow-sm'>
          <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-normal'>
            BBS builds bespoke internal tools, workflow automation systems, and SaaS platforms for agency client engagements. We architect scalable databases, secure API endpoints, and clean dashboard interfaces delivered under your agency’s brand.
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
              Capabilities
            </h2>
            <h3 className='text-2xl sm:text-3xl font-bold text-black mb-4'>
              Included in Custom Software Builds
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
              Engineering Process
            </h2>
            <h3 className='text-2xl sm:text-3xl font-bold text-black mb-4'>
              How We Build Custom Software
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
      <FAQSection faqs={faqs} title="Custom Software FAQs" />
      <Footer />
    </main>
  )
}
