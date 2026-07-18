import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import RevenueMath from '@/components/revenue-math'
import Link from 'next/link'

import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata(
  '/services/white-label',
  'White-Label Web Development for Marketing Agencies India',
  'Offer premium web development without hiring developers. BBS builds everything under your agency brand — NDA-first with full IP ownership.',
  {
    keywords: [
      'white label web development',
      'white label web development India',
      'white label MERN stack',
      'web development for marketing agencies',
      'agency development partner India',
      'outsource web development agency',
      'Build Beyond Studio white label',
    ],
    openGraph: {
      type: 'website',
      locale: 'en_IN',
    },
  }
)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'White-Label Web Development',
  serviceType: 'White-Label Web Development',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'India',
  description:
    'Full-stack white-label web development for marketing agencies. We build MERN stack applications, handle DevOps and deployment — all under your agency brand with full IP transfer.',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    areaServed: 'IN',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://buildbeyondstudio.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://buildbeyondstudio.com/#services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'White-Label Solutions',
      item: 'https://buildbeyondstudio.com/services/white-label',
    },
  ],
}

export default function WhiteLabelPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">
          Home → Services → White-Label Solutions
        </div>

        <h1 className="text-5xl font-bold text-black mb-6">
          White-Label Web Development for Agencies Across India
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Build custom web applications under your brand with a top white label web development agency India. Your reputation, our
          expertise. Full IP rights included — your clients never know we exist.
        </p>

        <a
          href="https://wa.me/919301579493?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20a%20white-label%20partnership%20with%20Build%20Beyond%20Studio."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold mb-16"
          style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
        >
          Start a White-Label Project
        </a>

        <div className="space-y-12 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">
              What is White-Label Web Development?
            </h2>
            <p className="leading-relaxed mb-4">
              White-label web development means your agency offers web
              development services to your clients — but the actual development
              is handled by a technical partner like Build Beyond Studio. We
              build everything behind the scenes while you maintain the client
              relationship, present the work under your brand, and keep the full
              margin.
            </p>
            <p className="leading-relaxed">
              Your clients never know we were involved. No BBS branding, no
              credits, no visibility. Complete confidentiality is our default —
              not an option.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">
              Our White-Label Web Development Process for Indian Agencies
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: 'You close the client',
                  desc: 'Land a deal that requires web development. Send us the scope, brief, or wireframes.',
                },
                {
                  step: '02',
                  title: 'We give you a firm proposal',
                  desc: 'Clear timeline, fixed estimate, and full technical roadmap within 24 hours.',
                },
                {
                  step: '03',
                  title: 'We build everything',
                  desc: 'Full-stack development, QA, DevOps, and deployment. Weekly progress updates throughout.',
                },
                {
                  step: '04',
                  title: 'You deliver and bill',
                  desc: 'Present the final product under your agency brand. You invoice the client. You keep the full margin.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 rounded-lg bg-white border border-[rgba(200,134,10,0.12)]" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
                  <span className="text-[#C8860A] font-mono text-sm pt-1">
                    {item.step}
                  </span>
                  <div>
                    <div className="font-semibold text-black mb-1">
                      {item.title}
                    </div>
                    <div className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">
              What We Build
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'MERN Stack Web Applications',
                'Next.js & React Frontends',
                'Node.js & Express APIs',
                'MongoDB Database Design',
                'E-Commerce Platforms',
                'SaaS Dashboards & Tools',
                'Restaurant & Hospitality Sites',
                'Business & Corporate Websites',
                'DevOps & Cloud Deployment',
                'CI/CD Pipeline Setup',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#C8860A]">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <RevenueMath />

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">
              Why Agencies Choose Build Beyond Studio
            </h2>
            <p className="leading-relaxed mb-4">
              Build Beyond Studio is a white-label web development agency based
              in Ambikapur, Chhattisgarh, India. We partner exclusively with
              marketing agencies and creative studios who want to offer web
              development without building an in-house technical team.
            </p>
            <p className="leading-relaxed">
              Every project comes with full source code ownership, complete
              documentation, and post-launch support. You scale your agency
              revenue without hiring a single developer or managing any
              technical overhead.
            </p>
          </div>
        </div>

        <div className="mt-16 p-8 rounded-xl bg-white border border-[rgba(200,134,10,0.16)]" style={{ boxShadow: '0 4px 20px rgba(200,134,10,0.10)' }}>
          <h2 className="text-2xl font-semibold text-black mb-3">
            Ready to offer web development under your brand?
          </h2>
          <p className="text-gray-600 mb-6">
            Join agencies across India who use Build Beyond Studio as their
            silent technical partner.
          </p>
          <a
            href="https://wa.me/919301579493?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20a%20white-label%20partnership%20with%20Build%20Beyond%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold"
            style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}