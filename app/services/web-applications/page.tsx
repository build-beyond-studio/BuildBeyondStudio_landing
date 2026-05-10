import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Web Application Development | Build Beyond Studio',
  description:
    'Production-ready MERN stack web application development in Ambikapur, India. React, Next.js, Node.js, MongoDB. Built to scale from day one for agencies and businesses.',
  keywords: [
    'web application development India',
    'MERN stack development',
    'Next.js development agency',
    'React development agency India',
    'Node.js development India',
    'web app development Ambikapur',
    'production web applications',
  ],
  alternates: {
    canonical: 'https://buildbeyondstudio.com/services/web-applications',
  },
  openGraph: {
    title: 'Web Application Development | Build Beyond Studio',
    description:
      'Production-ready MERN stack web applications built to scale. React, Next.js, Node.js, MongoDB.',
    url: 'https://buildbeyondstudio.com/services/web-applications',
    siteName: 'Build Beyond Studio',
    images: [
      {
        url: 'https://buildbeyondstudio.com/og-web-apps.png',
        width: 1200,
        height: 630,
        alt: 'Web Applications | Build Beyond Studio',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Application Development',
  serviceType: 'Web Application Development',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'India',
  description:
    'Production-ready MERN stack web application development. React, Next.js, Node.js, MongoDB — built to scale from day one.',
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://buildbeyondstudio.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://buildbeyondstudio.com/#services' },
    { '@type': 'ListItem', position: 3, name: 'Web Application Development', item: 'https://buildbeyondstudio.com/services/web-applications' },
  ],
}

export default function WebApplicationsPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">Home → Services → Web Application Development</div>

        <h1 className="text-5xl font-bold text-black mb-6">
          Web Application Development
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Production-ready MERN stack applications built to scale from day one. We handle everything from architecture to deployment.
        </p>
        <a href="/#contact" className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold mb-16" style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}>
          Start Your Project
        </a>

        <div className="space-y-12 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Our Tech Stack</h2>
            <p className="leading-relaxed mb-4">
              We build exclusively on the MERN stack — MongoDB, Express.js, React, and Node.js — combined with Next.js for server-side rendering and Vercel or AWS for deployment. This is the same stack used by companies like Netflix, Airbnb, and LinkedIn to serve millions of users.
            </p>
            <p className="leading-relaxed">
              Every application we build is production-ready from the first line of code. Clean architecture, proper error handling, environment separation, and full documentation included as standard.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">What We Build</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'E-Commerce Platforms & D2C Stores',
                'SaaS Dashboards & Admin Panels',
                'Restaurant & Hospitality Websites',
                'Business & Corporate Websites',
                'Booking & Appointment Systems',
                'Data Visualization Dashboards',
                'Internal Business Tools',
                'API Development & Integration',
                'Real-time Applications',
                'Multi-tenant Platforms',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#C8860A]">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Our Development Process</h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Scope & Architecture', desc: 'We review your requirements, finalize scope, and plan the full system architecture before writing a single line of code.' },
                { step: '02', title: 'Development Sprints', desc: 'Weekly sprints with staging environment updates. You see real progress every week — not just promises.' },
                { step: '03', title: 'QA & Testing', desc: 'Full quality assurance before delivery. Cross-browser, cross-device, performance tested.' },
                { step: '04', title: 'Deployment & Handover', desc: 'Production deployment with full DevOps setup, documentation, and knowledge transfer.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 rounded-lg bg-white border border-[rgba(200,134,10,0.12)]" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
                  <span className="text-[#C8860A] font-mono text-sm pt-1">{item.step}</span>
                  <div>
                    <div className="font-semibold text-black mb-1">{item.title}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Based in Ambikapur, Serving India</h2>
            <p className="leading-relaxed">
              Build Beyond Studio is a web application development agency based in Ambikapur, Chhattisgarh. We work with startups, businesses, and marketing agencies across India to deliver scalable, production-grade web applications at competitive pricing.
            </p>
          </div>
        </div>

        <div className="mt-16 p-8 rounded-xl bg-white border border-[rgba(200,134,10,0.16)]" style={{ boxShadow: '0 4px 20px rgba(200,134,10,0.10)' }}>
          <h2 className="text-2xl font-semibold text-black mb-3">Ready to build your web application?</h2>
          <p className="text-gray-600 mb-6">Tell us what you need. We'll give you a clear estimate and timeline within 24 hours.</p>
          <a href="/#contact" className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold" style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}>
            Get a Free Estimate
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}