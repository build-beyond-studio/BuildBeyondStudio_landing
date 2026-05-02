import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'White-Label Web Development for Agencies | Build Beyond Studio',
  description:
    'White-label web development agency in Ambikapur, India. We build production-ready MERN stack applications under your brand. Full IP rights, zero visibility. Perfect for marketing agencies.',
  keywords: [
    'white label web development',
    'white label web development India',
    'white label MERN stack',
    'web development for marketing agencies',
    'agency development partner India',
    'outsource web development agency',
    'Build Beyond Studio white label',
  ],
  alternates: {
    canonical: 'https://buildbeyondstudio.com/services/white-label',
  },
  openGraph: {
    title: 'White-Label Web Development for Agencies | Build Beyond Studio',
    description:
      'We build production-ready web applications under your brand. Your clients never know we exist. Full IP rights, complete ownership.',
    url: 'https://buildbeyondstudio.com/services/white-label',
    siteName: 'Build Beyond Studio',
    images: [
      {
        url: 'https://buildbeyondstudio.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'White-Label Web Development – Build Beyond Studio',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
}

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
    <main className="min-h-screen bg-[#050505] text-white">
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

        <h1 className="text-5xl font-bold text-white mb-6">
          White-Label Web Development for Agencies
        </h1>

        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
          Build custom web applications under your brand. Your reputation, our
          expertise. Full IP rights included — your clients never know we exist.
        </p>

        
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold mb-16"
        >
          Start a White-Label Project
        </a>

        <div className="space-y-12 text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
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
            <h2 className="text-2xl font-semibold text-white mb-4">
              How It Works
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
                <div key={item.step} className="flex gap-4 p-4 rounded-lg bg-white/5">
                  <span className="text-blue-400 font-mono text-sm pt-1">
                    {item.step}
                  </span>
                  <div>
                    <div className="font-semibold text-white mb-1">
                      {item.title}
                    </div>
                    <div className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
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
                <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="text-blue-400">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
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

        <div className="mt-16 p-8 rounded-xl bg-blue-600/10 border border-blue-600/20">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Ready to offer web development under your brand?
          </h2>
          <p className="text-gray-400 mb-6">
            Join agencies across India who use Build Beyond Studio as their
            silent technical partner.
          </p>
          
            href="/#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}