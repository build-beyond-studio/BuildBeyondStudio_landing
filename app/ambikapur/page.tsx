import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata('/ambikapur', {
  title: "Web Development Company in Ambikapur, Chhattisgarh | BBS",
  description: "Build Beyond Studio is a web development team in Ambikapur, Chhattisgarh, serving local businesses and partnering with agencies across India.",
  openGraph: {
    title: "Web Development Company in Ambikapur, Chhattisgarh | BBS",
    description: "Build Beyond Studio is a web development team in Ambikapur, Chhattisgarh, serving local businesses and partnering with agencies across India.",
    type: "website",
  },
})

/* ---------- JSON-LD: LocalBusiness ---------- */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://buildbeyondstudio.com/ambikapur#localbusiness",
  "name": "Build Beyond Studio",
  "alternateName": "BBS",
  "url": "https://buildbeyondstudio.com/ambikapur",
  "telephone": "+917697339962",
  "email": "admin@buildbeyondstudio.com",
  "image": "https://buildbeyondstudio.com/logo.png",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ambikapur",
    "addressLocality": "Surguja",
    "addressRegion": "Chhattisgarh",
    "postalCode": "497001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "23.1175",
    "longitude": "83.1961"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "areaServed": [
    { "@type": "City", "name": "Ambikapur" },
    { "@type": "AdministrativeArea", "name": "Surguja" },
    { "@type": "AdministrativeArea", "name": "Raipur" },
    { "@type": "AdministrativeArea", "name": "Bilaspur" },
    { "@type": "State", "name": "Chhattisgarh" }
  ],
  "description": "Build Beyond Studio is a web development company headquartered in Ambikapur, Surguja, Chhattisgarh. We deliver custom websites, e-commerce stores, web applications, and white-label engineering for marketing agencies across India.",
  "sameAs": [
    "https://www.linkedin.com/company/buildbeyondstudio",
    "https://github.com/buildbeyondstudio"
  ]
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
      "name": "Ambikapur Development Team",
      "item": "https://buildbeyondstudio.com/ambikapur"
    }
  ]
}

const pageSpecificFaqs = [
  {
    question: "Where is the BBS development team based?",
    answer: "Build Beyond Studio's core engineering team is headquartered in Ambikapur, Surguja district, Chhattisgarh (PIN 497001)."
  },
  {
    question: "Do you work only with businesses in Ambikapur?",
    answer: "No. While we support local enterprises in Chhattisgarh, the majority of our work is white-label development for marketing agencies across India, delivered remotely with structured sprint reporting."
  },
  {
    question: "What web development services do you provide?",
    answer: "Our core services include custom website development (Next.js, React, WordPress), online store builds (Shopify, WooCommerce), conversion tracking setup, and monthly website maintenance retainers."
  },
  {
    question: "Can agencies from other cities partner with BBS?",
    answer: "Yes. Agencies across Delhi, Mumbai, Bengaluru, Bhopal, and other hubs partner with BBS under NDA as their behind-the-scenes engineering delivery pod."
  },
  {
    question: "How can local businesses or agencies visit or contact the team?",
    answer: "You can reach us at admin@buildbeyondstudio.com or message us on WhatsApp at +91 76973 39962. In-person consultations in Ambikapur are scheduled by appointment."
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": pageSpecificFaqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}

const regions = [
  {
    name: 'Ambikapur & Surguja',
    desc: 'Our headquarters and core engineering pod. Supporting regional businesses, education hubs, and local enterprises with modern digital infrastructure.',
    highlight: true,
  },
  {
    name: 'Raipur',
    desc: 'Serving businesses and agencies in the state capital with custom website builds, e-commerce stores, and high-performance web applications.',
  },
  {
    name: 'Bilaspur',
    desc: 'Supporting commercial enterprises and institutions in Bilaspur with reliable web platforms, analytics setups, and ongoing maintenance.',
  },
  {
    name: 'Pan-India Agency Partnerships',
    desc: 'Operating as the invisible white-label engineering partner for marketing agencies across Delhi, Mumbai, Bengaluru, and beyond.',
  },
]

export default function AmbikapurPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      <section className="max-w-4xl mx-auto py-28 px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">Home</Link> → Ambikapur
        </div>

        {/* Hero */}
        <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#C8860A]">
          Ambikapur, Chhattisgarh
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-black mb-6 tracking-tight leading-tight">
          Web Development Company in Ambikapur, Chhattisgarh
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
          Build Beyond Studio is a web development team headquartered in Ambikapur, Surguja. We build custom websites, online stores, and web applications for regional businesses—and partner invisibly as the white-label engineering team behind marketing agencies across India.
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          <Link
            href="/contact"
            className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold"
            style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
          >
            Start a Partnership Brief
          </Link>
          <a
            href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20found%20you%20on%20the%20Ambikapur%20page.%20I%20would%20like%20to%20discuss%20a%20project%20with%20Build%20Beyond%20Studio."
            className="inline-block bg-white text-[#C8860A] border border-[rgba(200,134,10,0.3)] hover:bg-[#FDF8F0] px-8 py-3 rounded-lg font-semibold"
          >
            WhatsApp Ankush
          </a>
        </div>

        <div className="space-y-16 text-gray-700">

          {/* NAP Block */}
          <div>
            <h2 className="uppercase tracking-wide text-sm text-[#C8860A] font-bold mb-4">Our Ambikapur Office</h2>
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(200,134,10,0.12)]" style={{ boxShadow: '0 4px 16px rgba(200,134,10,0.06)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <div className="font-bold text-black text-lg mb-1">Build Beyond Studio</div>
                    <div className="text-gray-600 text-sm leading-relaxed font-light">
                      Ambikapur, Surguja<br />
                      Chhattisgarh 497001<br />
                      India
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">Phone / WhatsApp</div>
                    <a href="tel:+917697339962" className="text-[#C8860A] font-semibold hover:underline">+91 76973 39962</a>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</div>
                    <a href="mailto:admin@buildbeyondstudio.com" className="text-[#C8860A] font-semibold hover:underline">admin@buildbeyondstudio.com</a>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">Hours</div>
                    <div className="text-gray-600 text-sm font-light">Monday — Friday, 9:00 AM — 6:00 PM IST (Consultations by appointment)</div>
                  </div>
                </div>

                {/* Google Map Embed */}
                <div className="rounded-xl overflow-hidden border border-gray-200 h-[260px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58456.37518803019!2d83.15!3d23.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398870d2c08a70af%3A0x8e6e30d2e0e3e7f2!2sAmbikapur%2C%20Chhattisgarh%20497001!5e0!3m2!1sen!2sin!4v1689600000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Build Beyond Studio — Ambikapur, Chhattisgarh on Google Maps"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h2 className="uppercase tracking-wide text-sm text-[#C8860A] font-bold mb-4">Core Web Development Services</h2>
            <p className="leading-relaxed mb-6 text-base font-light">
              From our Ambikapur development base, we engineer modern websites and applications with high performance, semantic structure, and clean code.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Custom Website Development', desc: 'Fast, responsive Next.js and React websites built with pixel-perfect attention to design briefs.', href: '/services/website-development' },
                { title: 'Online Store Development', desc: 'Custom Shopify and WooCommerce stores engineered for speed, secure checkout, and mobile conversions.', href: '/services/online-store-development' },
                { title: 'Tracking & Conversion Setup', desc: 'Server-side GTM, Meta CAPI, GA4 e-commerce tracking, and clean attribution pipelines.', href: '/services/tracking-conversion-setup' },
                { title: 'Website & App Maintenance', desc: 'Ongoing security patching, performance monitoring, automated backups, and sprint updates.', href: '/services/website-app-maintenance' },
              ].map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="block p-5 rounded-2xl bg-white border border-[rgba(200,134,10,0.12)] hover:border-[#C8860A] transition-colors group shadow-sm"
                >
                  <div className="font-bold text-black mb-1 text-base group-hover:text-[#C8860A] transition-colors">{service.title}</div>
                  <div className="text-gray-600 text-sm leading-relaxed font-light">{service.desc}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Regional Reach */}
          <div>
            <h2 className="uppercase tracking-wide text-sm text-[#C8860A] font-bold mb-4">Serving Chhattisgarh and Agency Partners Across India</h2>
            <p className="leading-relaxed mb-6 text-base font-light">
              Our engineering centre in Ambikapur provides tier-1 development quality with predictable delivery and competitive partner margins.
            </p>
            <div className="space-y-4">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className={`flex gap-4 p-5 rounded-2xl bg-white border ${region.highlight ? 'border-[#C8860A]' : 'border-[rgba(200,134,10,0.12)]'} shadow-sm`}
                >
                  <span className="text-[#C8860A] text-lg mt-0.5">{region.highlight ? '📍' : '→'}</span>
                  <div>
                    <div className="font-bold text-black mb-1 text-base">{region.name}</div>
                    <div className="text-gray-600 text-sm leading-relaxed font-light">{region.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training Mention */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#C8860A] font-bold mb-1">Local Education Initiative</div>
              <h3 className="text-lg font-bold text-black">Looking for Web Development Training in Ambikapur?</h3>
              <p className="text-gray-600 text-sm font-light mt-1">
                We offer separate practical coding and MERN stack training programs for students and developers in Surguja.
              </p>
            </div>
            <Link
              href="/training-programs"
              className="px-5 py-2.5 rounded-lg border border-[#C8860A] text-[#C8860A] hover:bg-[#FDF8F0] font-semibold text-xs whitespace-nowrap transition-all"
            >
              View Training Programs →
            </Link>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="uppercase tracking-wide text-sm text-[#C8860A] font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {pageSpecificFaqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="font-bold text-black text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">{faq.answer}</p>
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
