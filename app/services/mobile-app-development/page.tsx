import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata(
  '/services/mobile-app-development',
  'Mobile App Development Services | Build Beyond Studio',
  'Native and cross-platform mobile app development — iOS, Android, and React Native. From MVP to full launch, built and deployed by BBS.'
)

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mobile App Development Services",
  "serviceType": "Mobile App Development",
  "provider": {
    "@type": "Organization",
    "name": "Build Beyond Studio",
    "url": "https://buildbeyondstudio.com"
  },
  "areaServed": "IN",
  "description": "Build Beyond Studio develops cross-platform mobile apps using React Native and native iOS/Android development, taking products from idea to App Store and Play Store launch. UI/UX, backend APIs, push notifications, payments, and post-launch maintenance under one roof."
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does mobile app development cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cost depends on feature scope — an MVP typically starts smaller and scales with complexity; we provide a fixed quote after a discovery call, no hourly billing surprises."
      }
    },
    {
      "@type": "Question",
      "name": "Should I build native or cross-platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cross-platform (React Native) works for most business apps and cuts cost/time by ~40%. Native is recommended only for apps needing deep hardware/OS-specific features."
      }
    },
    {
      "@type": "Question",
      "name": "How long does app development take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An MVP typically takes 6–8 weeks; a full-featured app takes 10–14 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle App Store and Play Store submission?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we manage the entire submission, review, and approval process end-to-end."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build the backend too, or only the app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build both — the mobile app and its backend APIs/database — so there's one accountable team."
      }
    }
  ]
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Mobile App Development', path: '/services/mobile-app-development' },
])

const included = [
  "Cross-platform development (React Native) or native (Swift/Kotlin) based on need",
  "Backend API development (Node.js/Express) and database architecture",
  "Payment gateway integration (Razorpay, Stripe)",
  "Push notifications, in-app analytics, offline support",
  "App Store & Play Store submission and approval handling",
  "Post-launch maintenance and version updates",
]

const process = [
  { step: "01", title: "Product Discovery & Feature Scoping", desc: "We align on core features, target users, and platforms before writing a single line of code." },
  { step: "02", title: "UI/UX Wireframes & Prototype", desc: "Interactive prototype for review and sign-off — no surprises during development." },
  { step: "03", title: "Development Sprints", desc: "6–12 weeks depending on complexity — React Native or native, with weekly builds for review." },
  { step: "04", title: "Testing (Device + OS Compatibility)", desc: "Full device matrix testing across iOS and Android versions." },
  { step: "05", title: "Store Submission + Launch Support", desc: "We handle App Store and Play Store submission, review responses, and go-live support." },
]

const whyBBS = [
  "Single team handles app + backend + deployment — no vendor juggling",
  "Fixed-price MVP packages for startups and agencies reselling app dev",
  "Full source code ownership on delivery",
]

const faqs = [
  { q: "How much does mobile app development cost?", a: "Cost depends on feature scope — an MVP typically starts smaller and scales with complexity; we provide a fixed quote after a discovery call, no hourly billing surprises." },
  { q: "Should I build native or cross-platform?", a: "Cross-platform (React Native) works for most business apps and cuts cost/time by ~40%. Native is recommended only for apps needing deep hardware/OS-specific features." },
  { q: "How long does app development take?", a: "An MVP typically takes 6–8 weeks; a full-featured app takes 10–14 weeks." },
  { q: "Do you handle App Store and Play Store submission?", a: "Yes, we manage the entire submission, review, and approval process end-to-end." },
  { q: "Can you build the backend too, or only the app?", a: "We build both — the mobile app and its backend APIs/database — so there's one accountable team." },
]

export default function MobileAppDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />

      <section className="max-w-4xl mx-auto pt-28 pb-8 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          {" → "}
          <Link href="/services" className="hover:text-black transition-colors">Services</Link>
          {" → "}Mobile App Development
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(200,134,10,0.3)] bg-transparent mb-4">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#C8860A] uppercase">Mobile App Development Services</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4 leading-tight">
          Mobile App Development — From MVP to App Store Launch
        </h1>
        <p className="text-lg text-gray-500 font-light mb-8">One codebase, both platforms. Built to scale.</p>

        {/* Answer-first intro — AEO paragraph */}
        <div className="bg-white border border-[rgba(200,134,10,0.12)] rounded-xl p-5 sm:p-6 mb-6" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Build Beyond Studio develops cross-platform mobile apps using React Native and native iOS/Android development, taking products from idea to App Store and Play Store launch. We handle UI/UX, backend APIs, push notifications, payments, and post-launch maintenance under one roof.
          </p>
        </div>

        {/* Native vs Cross-Platform definition — GEO extract block */}
        <div className="bg-[#FDF8F0] border border-[rgba(200,134,10,0.15)] rounded-xl p-5 mb-12">
          <h2 className="font-semibold text-black mb-3 text-base">Native vs Cross-Platform: Quick Comparison</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-semibold text-[#C8860A] mb-1">Cross-Platform (React Native)</div>
              <ul className="text-gray-600 space-y-1">
                <li>→ One codebase for iOS & Android</li>
                <li>→ ~40% faster & more cost-effective</li>
                <li>→ Best for most business apps</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-1">Native (Swift / Kotlin)</div>
              <ul className="text-gray-600 space-y-1">
                <li>→ Separate codebases per platform</li>
                <li>→ Maximum OS/hardware access</li>
                <li>→ For deep system-level features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto pb-24 px-4 sm:px-6">
        <div className="space-y-12 text-gray-700">

          {/* CTA */}
          <div>
            <TrackedLink
              href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20a%20Mobile%20App%20Development%20project%20with%20Build%20Beyond%20Studio."
              eventName="whatsapp_click"
              eventParams={{ button_location: 'service_page_mobile_app_development' }}
              className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold"
              style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
            >
              Start Your App Project →
            </TrackedLink>
          </div>

          {/* What's included */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">What's Included</h2>
            <ul className="space-y-2">
              {included.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                  <span className="text-[#C8860A] shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Our process */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">Our Process</h2>
            <div className="space-y-3">
              {process.map((item) => (
                <div key={item.step} className="flex gap-4 p-4 rounded-xl bg-white border border-[rgba(200,134,10,0.12)]" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
                  <span className="text-[#C8860A] font-mono text-sm pt-0.5 shrink-0">{item.step}</span>
                  <div>
                    <div className="font-semibold text-black mb-1">{item.title}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why BBS */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">Why Build Beyond Studio</h2>
            <ul className="space-y-2">
              {whyBBS.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                  <span className="text-[#C8860A] shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Internal links */}
          <div className="flex flex-wrap gap-3">
            <Link href="/services/website-development" className="text-[13px] text-[#C8860A] hover:underline">Website Development →</Link>
            <Link href="/services/analytics-tracking" className="text-[13px] text-[#C8860A] hover:underline">Analytics & Tracking →</Link>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-4 sm:p-5 rounded-xl bg-white border border-[rgba(200,134,10,0.12)]" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
                  <h3 className="font-semibold text-black mb-2 text-sm sm:text-base">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
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
