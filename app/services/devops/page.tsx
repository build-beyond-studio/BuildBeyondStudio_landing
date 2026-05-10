import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'DevOps & Cloud Deployment Services | Build Beyond Studio',
  description:
    'DevOps consulting and cloud deployment in Ambikapur, India. Docker, CI/CD pipelines, AWS, Vercel deployment. We handle infrastructure so your team can focus on building.',
  keywords: [
    'DevOps services India',
    'cloud deployment agency India',
    'Docker CI/CD setup',
    'DevOps consulting India',
    'Vercel deployment service',
    'AWS deployment India',
    'CI/CD pipeline setup',
  ],
  alternates: {
    canonical: 'https://buildbeyondstudio.com/services/devops',
  },
  openGraph: {
    title: 'DevOps & Cloud Deployment Services | Build Beyond Studio',
    description:
      'Docker, CI/CD, cloud deployment, and infrastructure that handles growth. Full DevOps setup for agencies and startups.',
    url: 'https://buildbeyondstudio.com/services/devops',
    siteName: 'Build Beyond Studio',
    images: [
      {
        url: 'https://buildbeyondstudio.com/og-devops.png',
        width: 1200,
        height: 630,
        alt: 'DevOps Services | Build Beyond Studio',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'DevOps & Cloud Deployment',
  serviceType: 'DevOps Consulting',
  provider: {
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
  },
  areaServed: 'India',
  description:
    'Docker, CI/CD pipelines, cloud deployment, and infrastructure setup for agencies and startups across India.',
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
    { '@type': 'ListItem', position: 3, name: 'DevOps & Deployment', item: 'https://buildbeyondstudio.com/services/devops' },
  ],
}

export default function DevOpsPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">Home → Services → DevOps & Deployment</div>

        <h1 className="text-5xl font-bold text-black mb-6">
          DevOps & Cloud Deployment Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Docker, CI/CD pipelines, and cloud infrastructure that scales with your business. We handle the ops so your team can focus on building.
        </p>
        <a href="/#contact" className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold mb-16" style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}>
          Get DevOps Setup
        </a>

        <div className="space-y-12 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">What We Handle</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Docker Containerization',
                'CI/CD Pipeline Setup',
                'AWS & Cloud Deployment',
                'Vercel & Netlify Deployment',
                'Environment Configuration',
                'SSL & Domain Setup',
                'Database Hosting & Backups',
                'Server Monitoring',
                'Auto-scaling Infrastructure',
                'Zero-downtime Deployments',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#C8860A]">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Why DevOps Matters for Your Agency</h2>
            <p className="leading-relaxed mb-4">
              Most web development agencies lose clients not because of bad code — but because of deployment failures, downtime, and poor infrastructure. A proper DevOps setup means your client's site stays live, deploys automatically, and scales without manual intervention.
            </p>
            <p className="leading-relaxed">
              Build Beyond Studio sets up production-grade DevOps infrastructure for every project we deliver. Docker containers, automated CI/CD pipelines, staging environments, and monitoring — all configured and documented before handover.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Our DevOps Stack</h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Containerization', desc: 'Docker setup for consistent environments across development, staging, and production.' },
                { step: '02', title: 'CI/CD Pipelines', desc: 'GitHub Actions or similar — automated testing and deployment on every push.' },
                { step: '03', title: 'Cloud Infrastructure', desc: 'AWS, DigitalOcean, or Vercel depending on project requirements and budget.' },
                { step: '04', title: 'Monitoring & Alerts', desc: 'Uptime monitoring, error tracking, and alerting so issues are caught before clients notice.' },
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
        </div>

        <div className="mt-16 p-8 rounded-xl bg-white border border-[rgba(200,134,10,0.16)]" style={{ boxShadow: '0 4px 20px rgba(200,134,10,0.10)' }}>
          <h2 className="text-2xl font-semibold text-black mb-3">Need a proper DevOps setup?</h2>
          <p className="text-gray-600 mb-6">We'll audit your current infrastructure and give you a clear plan within 24 hours.</p>
          <a href="/#contact" className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold" style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}>
            Book a Free Audit
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}