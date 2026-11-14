import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = buildMetadata(
  '/services/ui-ux-design',
  'White Label UI UX Design for Agencies | BBS',
  'White label UI UX design for agencies and studios. User flows, wireframes, design systems, prototypes, and developer ready screens.'
)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'White Label UI / UX Design',
  serviceType: 'UI / UX Design',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'White label UI UX design for agencies and studios. User flows, wireframes, design systems, prototypes, and developer ready screens.',
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'UI / UX Design', path: '/services/ui-ux-design' },
])

const included = [
  'User journey mapping, information architecture, and wireframes',
  'High-fidelity responsive UI mockups for desktop and mobile',
  'Interactive clickable prototypes in Figma for client review',
  'Comprehensive design tokens, typography scale, and UI kit',
  'Developer-ready handoff specs with assets, states, and spacing guides',
  'Design review alignment calls with your engineering team',
]

const whatYouReceive = [
  'Organized Figma project file with full component library',
  'Interactive review prototype shareable with your clients',
  'Design system stylesheet (typography, color palette, icons)',
  'Complete design ownership transfer upon final project delivery',
]

const process = [
  { step: '01', title: 'UX Discovery & Strategy', desc: 'We review user personas, business objectives, and conversion goals to structure clear interaction paths.' },
  { step: '02', title: 'Information Architecture & Wireframes', desc: 'Low-fidelity layout blueprints establishing visual hierarchy and content placement.' },
  { step: '03', title: 'High-Fidelity Interface Design', desc: 'Full-color UI execution in Figma incorporating typography, modern aesthetics, and design tokens.' },
  { step: '04', title: 'Interactive Prototyping & Review', desc: 'Clickable prototype for agency and client feedback rounds.' },
  { step: '05', title: 'Figma Handoff & IP Transfer', desc: '100% transfer of source Figma files, components, and exportable assets directly to your team.' },
]

const faqs: FAQItem[] = [
  {
    question: 'What do your white-label UI/UX design services include?',
    answer: 'We cover information architecture, wireframing, user flows, design system creation, high-fidelity responsive mockups, and interactive Figma prototypes.',
  },
  {
    question: 'Who owns the Figma files upon completion?',
    answer: 'Your agency receives 100% ownership and editing rights to the master Figma file and all associated assets upon project completion and payment.',
  },
  {
    question: 'Can BBS also build the websites or apps designed in this service?',
    answer: 'Yes. Having BBS handle both design and development ensures zero friction between UI/UX intent and frontend implementation under one unified white-label workflow.',
  },
  {
    question: 'How do client reviews work?',
    answer: 'All Figma presentation files and prototype links are white-labeled without BBS branding, allowing your team to present them directly to your clients.',
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

export default function UiUxDesignPage() {
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
          <span className='text-[#C8860A] font-medium'>UI / UX Design</span>
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-white/70 mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>Additional Capability</span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-black text-black mb-4 leading-tight'>
          White Label UI / UX Design for Agencies
        </h1>
        <p className='text-lg text-gray-600 font-light mb-8'>
          User flows, wireframes, design systems, prototypes, and developer-ready screens delivered under your agency brand.
        </p>

        <div className='bg-white border-l-4 border-[#C8860A] p-5 sm:p-6 rounded-r-xl border-y border-r border-[rgba(200,134,10,0.15)] mb-10 shadow-sm'>
          <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-normal'>
            BBS creates conversion-focused product flows, responsive website designs, and design systems for agency client projects. We deliver developer-ready Figma assets, user flows, and interactive prototypes ready for client presentation.
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
              Design Scope
            </h2>
            <h3 className='text-2xl sm:text-3xl font-bold text-black mb-4'>
              Included in UI / UX Engagements
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
              Methodology
            </h2>
            <h3 className='text-2xl sm:text-3xl font-bold text-black mb-4'>
              Our UI / UX Design Process
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
              <Link href='/services/mobile-app-development' className='text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors'>
                Mobile App Development →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Single Merged FAQ */}
      <FAQSection faqs={faqs} title="UI / UX Design FAQs" />
      <Footer />
    </main>
  )
}
