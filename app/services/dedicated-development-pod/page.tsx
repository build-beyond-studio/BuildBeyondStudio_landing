import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata = {
  title: 'Dedicated Development Team for Agencies | BBS',
  description: 'A managed development pod for agencies with ongoing client work, shared priorities, regular demos, quality checks, and delivery under your brand.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dedicated Development Pod Services',
  serviceType: 'Dedicated Development Pod',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'A managed development pod for agencies with ongoing client work, shared priorities, regular demos, quality checks, and delivery under your brand.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a dedicated development pod?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A dedicated development pod is a managed technical team assigned to ongoing agency work. It follows the agency backlog, delivery process, communication rules, and review cycle instead of being hired for one isolated task.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the pod part of our agency team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The pod works as an extension of your agency for the agreed delivery scope. Your agency owns the client relationship, priorities, approvals, and commercial decisions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What work can the pod handle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The pod can support websites, web applications, ecommerce work, integrations, tracking implementation, maintenance, technical fixes, deployment, testing, and documentation within the agreed skills and scope.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do we assign priorities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your agency maintains the approved backlog and identifies the next priorities. BBS reviews each request for scope, dependencies, access, and acceptance criteria before placing it into the delivery cycle.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do we see progress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BBS provides progress updates, working demonstrations, and completed item summaries through the agreed channel. Your team can review the work and record feedback before the next priorities begin.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the pod speak directly with our clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only when your agency requests it. The default arrangement keeps your agency as the client lead while BBS communicates with your team and delivers under your brand.',
      },
    },
  ],
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Dedicated Development Pod', path: '/services/dedicated-development-pod' },
])

const faqs = [
  {
    q: 'What is a dedicated development pod?',
    a: 'A dedicated development pod is a managed technical team assigned to ongoing agency work. It follows the agency backlog, delivery process, communication rules, and review cycle instead of being hired for one isolated task.',
  },
  {
    q: 'Is the pod part of our agency team?',
    a: 'The pod works as an extension of your agency for the agreed delivery scope. Your agency owns the client relationship, priorities, approvals, and commercial decisions.',
  },
  {
    q: 'What work can the pod handle?',
    a: 'The pod can support websites, web applications, ecommerce work, integrations, tracking implementation, maintenance, technical fixes, deployment, testing, and documentation within the agreed skills and scope.',
  },
  {
    q: 'How do we assign priorities?',
    a: 'Your agency maintains the approved backlog and identifies the next priorities. BBS reviews each request for scope, dependencies, access, and acceptance criteria before placing it into the delivery cycle.',
  },
  {
    q: 'How do we see progress?',
    a: 'BBS provides progress updates, working demonstrations, and completed item summaries through the agreed channel. Your team can review the work and record feedback before the next priorities begin.',
  },
  {
    q: 'Will the pod speak directly with our clients?',
    a: 'Only when your agency requests it. The default arrangement keeps your agency as the client lead while BBS communicates with your team and delivers under your brand.',
  },
]

export default function DedicatedDevelopmentPodPage() {
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
          {' → '}Dedicated Development Pod
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>Dedicated Development Pod</span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-bold text-black mb-4 leading-tight'>
          A Dedicated Development Pod for Your Agency
        </h1>
        <p className='text-lg text-gray-500 font-light mb-8'>
          Add dependable development capacity for steady client work without building another internal department. BBS provides a managed pod that works from your approved priorities and delivers under your agency brand.
        </p>

        <div>
          <TrackedLink
            href='https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20want%20to%20discuss%20a%20Dedicated%20Development%20Pod%20with%20Build%20Beyond%20Studio.'
            eventName='whatsapp_click'
            eventParams={{ button_location: 'service_page_dedicated_development_pod' }}
            className='inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold'
            style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
          >
            Get a Fixed-Price Quote →
          </TrackedLink>
        </div>
      </section>

      <section className='max-w-4xl mx-auto pb-24 px-4 sm:px-6'>
        <div className='space-y-10 text-gray-700'>
          
          {/* Section 1 */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-6 sm:p-7' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-3'>When a Development Pod Fits</h2>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-light'>
              A pod fits agencies with ongoing website work, feature requests, landing pages, integrations, maintenance, or several client projects moving at the same time. It gives the agency a consistent technical team and a clear delivery rhythm.
            </p>
          </div>

          {/* Section 2 */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-6 sm:p-7' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-3'>What the Pod Can Handle</h2>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-light'>
              The pod can support website development, web applications, ecommerce work, integrations, tracking implementation, technical fixes, maintenance, quality checks, deployment, and documentation. The exact responsibilities are agreed before work begins.<br className='hidden' />
            </p>
          </div>

          {/* Section 3 */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-6 sm:p-7' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-3'>How Work Is Prioritised</h2>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-light'>
              Your agency maintains the approved backlog and decides what matters next. BBS reviews each request, identifies dependencies, confirms acceptance criteria, and plans the work into the agreed delivery cycle. New requests are assessed before they enter active development.
            </p>
          </div>

          {/* Section 4 */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-6 sm:p-7' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-3'>Delivery and Review Rhythm</h2>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-light'>
              The pod provides regular progress updates and working demonstrations through the agreed channel. Your team reviews completed work, records feedback, and approves the next priorities. This keeps delivery visible without adding daily management work for the agency.
            </p>
          </div>

          {/* Section 5 */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-6 sm:p-7' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-3'>Quality and Handover</h2>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-light'>
              Every completed item follows the agreed review and testing process. BBS records relevant setup details, deployment notes, known limitations, and handover information so your agency is not dependent on undocumented knowledge.
            </p>
          </div>

          {/* Section 6 */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-6 sm:p-7' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-3'>Client Protection</h2>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-light'>
              Your agency remains the client lead. BBS works under your brand, follows the agreed communication rules, and does not approach the client outside the approved project workflow. Client access and confidential material are limited to the work that requires them.
            </p>
          </div>

          {/* Section 7 */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-6 sm:p-7' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-3'>Starting the Pod</h2>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-light'>
              Begin with the current backlog, active platforms, access requirements, review process, and expected delivery rhythm. BBS uses that information to define the pod responsibilities, working method, and first set of priorities.
            </p>
          </div>

          {/* Section 8 */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-6 sm:p-7' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-3'>Call to Action</h2>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-6'>
              Share the type of client work your agency handles each month and the backlog you want to move forward. BBS will review the requirements and outline a suitable pod structure.
            </p>
            <TrackedLink
              href='https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20want%20to%20discuss%20a%20Dedicated%20Development%20Pod%20with%20Build%20Beyond%20Studio.'
              eventName='whatsapp_click'
              eventParams={{ button_location: 'service_page_dedicated_development_pod_cta_section' }}
              className='inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold'
              style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
            >
              Get a Fixed-Price Quote →
            </TrackedLink>
          </div>

          {/* Internal navigation links */}
          <div className='flex flex-wrap gap-3 pt-2'>
            <Link href='/services/custom-software-development' className='text-[13px] text-[#C8860A] hover:underline'>Custom Software Development →</Link>
            <Link href='/services/website-app-maintenance' className='text-[13px] text-[#C8860A] hover:underline'>Website & App Maintenance →</Link>
          </div>

          {/* FAQ Section */}
          <div className='pt-4'>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-6'>Frequently Asked Questions</h2>
            <div className='space-y-4'>
              {faqs.map((faq, i) => (
                <div key={i} className='p-5 sm:p-6 rounded-xl bg-white border border-[rgba(200,134,10,0.12)]' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
                  <h3 className='font-semibold text-black mb-2 text-base sm:text-lg'>{faq.q}</h3>
                  <p className='text-gray-600 text-sm sm:text-base leading-relaxed'>{faq.a}</p>
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
