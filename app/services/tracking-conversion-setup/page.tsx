import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata = {
  title: 'Conversion Tracking Setup for Agencies | BBS',
  description: 'White label GA4, tag management, Meta Conversions API, server side tracking, ecommerce events, testing, and handover for agency clients.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tracking & Conversion Setup Services',
  serviceType: 'Tracking & Conversion Setup',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'IN',
  description: 'White label GA4, tag management, Meta Conversions API, server side tracking, ecommerce events, testing, and handover for agency clients.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is conversion tracking setup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Conversion tracking setup connects important actions such as form submissions, purchases, calls, bookings, and qualified leads with analytics and advertising platforms so the agency can measure what happened after a visit or campaign click.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can BBS work with an existing GA4 and Tag Manager account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. BBS can audit and improve an existing setup or implement a new structure. Access requirements and account ownership are agreed before work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you support Meta Conversions API and server side tracking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. BBS can implement Meta Conversions API and server side tracking when the client platform, consent setup, hosting, and approved data flow support the required connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you track ecommerce events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The scope can include product views, cart actions, checkout steps, purchases, refunds, values, currencies, and item data. The exact event set depends on the store platform and reporting plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you check that the data is correct?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BBS tests the complete journey using browser tools, platform diagnostics, analytics reports, and controlled test actions. The handover records what was tested and any remaining platform limitation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will BBS communicate directly with our client?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only when your agency requests it. The default model keeps your agency as the client lead while BBS handles technical implementation and reports progress through the agreed channel.',
      },
    },
  ],
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Tracking & Conversion Setup', path: '/services/tracking-conversion-setup' },
])

const faqs = [
  {
    q: 'What is conversion tracking setup?',
    a: 'Conversion tracking setup connects important actions such as form submissions, purchases, calls, bookings, and qualified leads with analytics and advertising platforms so the agency can measure what happened after a visit or campaign click.',
  },
  {
    q: 'Can BBS work with an existing GA4 and Tag Manager account?',
    a: 'Yes. BBS can audit and improve an existing setup or implement a new structure. Access requirements and account ownership are agreed before work begins.',
  },
  {
    q: 'Do you support Meta Conversions API and server side tracking?',
    a: 'Yes. BBS can implement Meta Conversions API and server side tracking when the client platform, consent setup, hosting, and approved data flow support the required connection.',
  },
  {
    q: 'Can you track ecommerce events?',
    a: 'Yes. The scope can include product views, cart actions, checkout steps, purchases, refunds, values, currencies, and item data. The exact event set depends on the store platform and reporting plan.',
  },
  {
    q: 'How do you check that the data is correct?',
    a: 'BBS tests the complete journey using browser tools, platform diagnostics, analytics reports, and controlled test actions. The handover records what was tested and any remaining platform limitation.',
  },
  {
    q: 'Will BBS communicate directly with our client?',
    a: 'Only when your agency requests it. The default model keeps your agency as the client lead while BBS handles technical implementation and reports progress through the agreed channel.',
  },
]

export default function TrackingConversionSetupPage() {
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
          {' → '}Tracking & Conversion Setup
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-4'>
          <span className='text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase'>Tracking & Conversion Setup</span>
        </div>

        <h1 className='text-3xl sm:text-5xl font-bold text-black mb-4 leading-tight'>
          White Label Tracking and Conversion Setup for Agencies
        </h1>
        <p className='text-lg text-gray-500 font-light mb-8'>
          Give your agency reliable measurement across client websites, landing pages, and ecommerce stores. BBS implements the approved tracking plan, tests the data, and hands over clear documentation under your brand.
        </p>

        <div>
          <TrackedLink
            href='https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20want%20to%20discuss%20Tracking%20and%20Conversion%20Setup%20with%20Build%20Beyond%20Studio.'
            eventName='whatsapp_click'
            eventParams={{ button_location: 'service_page_tracking_conversion_setup' }}
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
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-3'>When This Service Fits</h2>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-light'>
              Use this service when a client is launching a new site, running paid campaigns, moving platforms, or seeing gaps between ad platforms and analytics. BBS handles the technical implementation while your agency owns the measurement strategy and client reporting.
            </p>
          </div>

          {/* Section 2 */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-6 sm:p-7' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-3'>What BBS Can Implement</h2>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-light'>
              The scope can include GA4, Google Tag Manager, Meta Pixel, Meta Conversions API, server side tracking, ecommerce events, form and call events, consent settings, CRM event routing, and testing across browsers and devices.
            </p>
          </div>

          {/* Section 3 */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-6 sm:p-7' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-3'>Event and Data Mapping</h2>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-light'>
              Before implementation, we document the business actions that matter, where each event starts, which fields are required, where the data should be sent, and how success will be checked. This prevents duplicate events, unclear naming, and reports that do not match the real customer journey.
            </p>
          </div>

          {/* Section 4 */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-6 sm:p-7' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-3'>Implementation Process</h2>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-light'>
              First, BBS audits the current setup and the approved measurement plan. Next, we map events and data requirements. We then configure the required tags, APIs, and server connections. Finally, we test the full journey, record the results, and complete the handover.
            </p>
          </div>

          {/* Section 5 */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-6 sm:p-7' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-3'>Testing and Quality Checks</h2>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-light'>
              Testing covers event names, parameters, consent behaviour, duplicate events, browser differences, referral handling, ecommerce values, campaign attribution, and platform diagnostics. Any limitation caused by the website, platform, consent tool, or third party system is documented clearly.
            </p>
          </div>

          {/* Section 6 */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-6 sm:p-7' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-3'>What Your Agency Receives</h2>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-light'>
              Your agency receives the implemented tracking setup, a record of configured events, test evidence, access notes, naming conventions, known limitations, and handover guidance. The final documentation can carry your agency branding.
            </p>
          </div>

          {/* Section 7 */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-6 sm:p-7' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-3'>White Label Working Model</h2>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-light'>
              Your agency remains the client lead and approves the measurement plan. BBS works behind the scenes, communicates through the agreed channel, and joins a client call only when your team requests technical support.
            </p>
          </div>

          {/* Section 8 */}
          <div className='bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-6 sm:p-7' style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
            <h2 className='text-2xl sm:text-3xl font-semibold text-black mb-3'>Call to Action</h2>
            <p className='text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-6'>
              Share the website, platforms, approved event list, and the reporting outcome your client needs. BBS will review the current setup and outline the implementation scope.
            </p>
            <TrackedLink
              href='https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20want%20to%20discuss%20Tracking%20and%20Conversion%20Setup%20with%20Build%20Beyond%20Studio.'
              eventName='whatsapp_click'
              eventParams={{ button_location: 'service_page_tracking_conversion_setup_cta_section' }}
              className='inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold'
              style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
            >
              Get a Fixed-Price Quote →
            </TrackedLink>
          </div>

          {/* Internal navigation links */}
          <div className='flex flex-wrap gap-3 pt-2'>
            <Link href='/services/seo-aeo-geo' className='text-[13px] text-[#C8860A] hover:underline'>Technical SEO, AEO & GEO →</Link>
            <Link href='/services/app-integrations' className='text-[13px] text-[#C8860A] hover:underline'>App Integrations →</Link>
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
