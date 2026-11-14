import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: "Contact BBS | Start a White Label Partnership",
  description: "Send a project brief or book a partnership call with Build Beyond Studio. NDA before details, fixed quote for your approved scope.",
  alternates: {
    canonical: "https://buildbeyondstudio.com/contact",
  },
  openGraph: {
    title: "Contact BBS | Start a White Label Partnership",
    description: "Send a project brief or book a partnership call with Build Beyond Studio. NDA before details, fixed quote for your approved scope.",
    url: "https://buildbeyondstudio.com/contact",
    type: "website",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://buildbeyondstudio.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact",
      "item": "https://buildbeyondstudio.com/contact"
    }
  ]
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      {/* Hero Header */}
      <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16 border-b border-black/5 bg-[#F5F2EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#C8860A]">
            White-Label Engineering Partner
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-black tracking-[-0.04em] mb-5 leading-[1.08]">
            Send a Project Brief
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-light mb-6">
            Share your project requirements, target timeline, or Figma designs. We execute an NDA before receiving proprietary client details. We respond within 24 hours.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold text-gray-600">
            <span className="flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> NDA before project details
            </span>
            <span className="flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> Response within 24 hours
            </span>
            <span className="flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> Zero direct client contact
            </span>
          </div>
        </div>
      </section>

      {/* Form & Direct Contact Block */}
      <section className="max-w-5xl mx-auto py-14 px-4 sm:px-6">
        <ContactForm />
      </section>

      <Footer />
    </main>
  )
}

