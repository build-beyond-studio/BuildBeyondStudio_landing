import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import FAQSection, { FAQItem } from '@/components/FAQSection'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = buildMetadata(
  '/services/mobile-app-development',
  'White Label Mobile App Development for Agencies | BBS',
  'White label mobile app development for agencies. React Native and native iOS/Android, from MVP to store launch, delivered under your brand.'
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "White Label Mobile App Development",
  "serviceType": "Mobile App Development",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio",
    "url": "https://buildbeyondstudio.com"
  },
  "areaServed": "IN",
  "description": "White label mobile app development for agencies. React Native and native iOS/Android, from MVP to store launch, delivered under your brand."
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Mobile App Development', path: '/services/mobile-app-development' },
])

const included = [
  "Cross-platform development (React Native) or native frameworks based on project needs",
  "Backend API development (Node.js/Express) and secure database architecture",
  "Payment gateway integrations (Razorpay, Stripe) and in-app purchase logic",
  "Push notifications, authentication, and in-app event tracking",
  "App Store & Google Play Store submission preparation and review management",
  "Post-launch technical maintenance and OS compatibility updates",
]

const whatYouReceive = [
  "Complete mobile app source code and backend API repositories",
  "App Store and Google Play Store build files (.ipa and .aab)",
  "API endpoint documentation and database migration scripts",
  "Pre-submission store checklist and release guidance notes",
]

const process = [
  { step: "01", title: "Product Discovery & Feature Scoping", desc: "We review core features, target users, and platform requirements before finalizing technical scope." },
  { step: "02", title: "UI/UX Wireframes & Prototype", desc: "Interactive Figma prototype for agency and client review and sign-off." },
  { step: "03", title: "Development Sprints", desc: "Agile sprints with weekly staging builds on React Native or native stacks for review." },
  { step: "04", title: "Device & OS Compatibility Testing", desc: "Full device matrix testing across iOS and Android screen sizes and OS versions." },
  { step: "05", title: "Store Submission & Launch Support", desc: "We guide App Store and Play Store submission under your client's developer accounts." },
]

const faqs: FAQItem[] = [
  {
    question: "Can BBS build both Android and iOS mobile apps?",
    answer: "Yes. We develop cross-platform mobile apps using React Native as well as native iOS/Android applications depending on performance and device hardware requirements."
  },
  {
    question: "How do App Store and Play Store accounts work?",
    answer: "Apps are submitted directly under your agency’s or your end-client’s official Apple Developer and Google Play Console accounts. You retain 100% account ownership, billing, and publisher credentials."
  },
  {
    question: "Can our agency sell app development without hiring in-house mobile developers?",
    answer: "Yes. That is the core advantage of partnering with BBS. Your agency manages client communication and commercial scope while BBS handles the technical development, API architecture, and store submissions."
  },
  {
    question: "Can you connect the mobile app to an existing website or database?",
    answer: "Yes. We engineer custom REST or GraphQL APIs to synchronize mobile apps with your client's existing web portals, Shopify backends, CRMs, or databases."
  },
  {
    question: "Who owns the source code and IP?",
    answer: "You receive 100% of the mobile and backend source code and IP when development is complete. BBS retains zero proprietary claims."
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.answer
    }
  }))
}

export default function MobileAppDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <section className="max-w-4xl mx-auto pt-24 pb-8 px-4 sm:px-6">
        <div className="mb-4 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-black transition-colors">Services</Link>
          <span>/</span>
          <span className="text-[#C8860A] font-medium">Mobile App Development</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-white/70 mb-4">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase">White-Label Service</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-black mb-4 leading-tight">
          White Label Mobile App Development for Agencies
        </h1>
        <p className="text-lg text-gray-600 font-light mb-8">
          React Native and native iOS / Android mobile products delivered under your agency brand.
        </p>

        <div className="bg-white border-l-4 border-[#C8860A] p-5 sm:p-6 rounded-r-xl border-y border-r border-[rgba(200,134,10,0.15)] mb-10 shadow-sm">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            BBS helps marketing and creative agencies expand into mobile app development without internal hires. We handle interface prototyping, API engineering, mobile app development, testing, and store submission under your agency's brand.
          </p>
        </div>

        {/* Native vs Cross-Platform comparison */}
        <div className="bg-[#FAF8F4] border border-[rgba(200,134,10,0.18)] rounded-2xl p-6 mb-12 shadow-sm">
          <h2 className="font-bold text-black mb-4 text-lg">Native vs Cross-Platform: Quick Guide for Agencies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
            <div className="bg-white p-4 rounded-xl border border-black/5">
              <div className="font-bold text-[#C8860A] mb-1.5">Cross-Platform (React Native)</div>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">
                Single unified codebase deployed to both iOS and Android. Best fit for business applications, directory apps, and client portals where consistent feature parity is key.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>✓ Unified codebase for iOS &amp; Android</li>
                <li>✓ Faster development cycles</li>
                <li>✓ Easier long-term maintenance</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-xl border border-black/5">
              <div className="font-bold text-gray-800 mb-1.5">Native (Swift / Kotlin)</div>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">
                Platform-specific codebases built directly in Swift and Kotlin. Recommended for apps requiring deep OS integrations, complex Bluetooth hardware, or intense real-time graphics.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>✓ Maximum hardware access</li>
                <li>✓ Platform-native UI components</li>
                <li>✓ Ideal for compute-heavy requirements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)',
              boxShadow: '0 4px 18px rgba(200,134,10,0.32)',
            }}
          >
            <span>Send a Project Brief</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto pb-20 px-4 sm:px-6">
        <div className="space-y-12 text-gray-700">

          {/* What You Receive */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(200,134,10,0.18)] shadow-sm">
            <h2 className="text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-2">
              Deliverables
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
              What Your Agency Receives
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {whatYouReceive.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#C8860A] shrink-0 mt-0.5" />
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Included */}
          <div>
            <h2 className="text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-2">
              Technical Scope
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              Included in Mobile App Projects
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {included.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed bg-white p-3.5 rounded-xl border border-black/5">
                  <span className="text-[#C8860A] font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-xs font-bold text-[#A06A00] uppercase tracking-widest mb-2">
              Delivery Workflow
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              App Development Lifecycle
            </h3>
            <div className="space-y-3">
              {process.map((item) => (
                <div key={item.step} className="flex gap-4 p-4 sm:p-5 rounded-xl bg-white border border-[rgba(200,134,10,0.12)] shadow-sm">
                  <span className="text-[#C8860A] font-mono text-sm pt-0.5 shrink-0 font-bold">{item.step}</span>
                  <div>
                    <h4 className="font-bold text-black mb-1 text-sm sm:text-base">{item.title}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Services */}
          <div>
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
              Related Services
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/custom-software-development" className="text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors">
                Custom Software Development →
              </Link>
              <Link href="/services/app-integrations" className="text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors">
                App Integrations →
              </Link>
              <Link href="/services/ui-ux-design" className="text-xs sm:text-sm font-semibold text-[#C8860A] bg-white px-4 py-2 rounded-lg border border-[rgba(200,134,10,0.2)] hover:border-[#C8860A] transition-colors">
                UI / UX Design →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Single Merged FAQ */}
      <FAQSection faqs={faqs} title="Mobile App Development FAQs" />
      <Footer />
    </main>
  )
}
