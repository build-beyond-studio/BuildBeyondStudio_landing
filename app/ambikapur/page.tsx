import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata(
  '/ambikapur',
  'Web Development Company in Ambikapur, Chhattisgarh',
  'Build Beyond Studio is a web development & software company based in Ambikapur, Surguja, Chhattisgarh. Custom websites, MERN stack apps, DevOps, and IT consulting for businesses across Chhattisgarh, Raipur, and Bilaspur.'
)

/* ---------- JSON-LD: LocalBusiness (page-scoped, supplements site-wide Organization) ---------- */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://buildbeyondstudio.com/ambikapur#localbusiness",
  "name": "Build Beyond Studio",
  "alternateName": "BBS",
  "url": "https://buildbeyondstudio.com/ambikapur",
  "telephone": "+917697339962",
  "email": "buildbeyondstudio@gmail.com",
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
  "description": "Build Beyond Studio is a web development and IT company headquartered in Ambikapur, Surguja, Chhattisgarh. We deliver custom websites, MERN stack web applications, cloud DevOps, and technical consulting to businesses across Chhattisgarh and India.",
  "sameAs": [
    "https://www.linkedin.com/company/buildbeyondstudio",
    "https://github.com/buildbeyondstudio"
  ]
}

/* ---------- FAQs ---------- */
const faqs = [
  {
    question: "Where is Build Beyond Studio located?",
    answer: "Build Beyond Studio is headquartered in Ambikapur, Surguja district, Chhattisgarh — 497001. We serve clients locally across Ambikapur, Raipur, Bilaspur, Korba, and the wider Chhattisgarh region, as well as agencies across India."
  },
  {
    question: "What services does BBS offer to Ambikapur businesses?",
    answer: "We offer custom website development, full-stack MERN (MongoDB, Express, React, Next.js, Node.js) web applications, cloud infrastructure and DevOps, SEO and digital marketing consulting, and AI-powered visual production — all from our Ambikapur office."
  },
  {
    question: "Do you work with clients outside Ambikapur?",
    answer: "Absolutely. While we are proudly based in Ambikapur, we work with marketing agencies and businesses across Raipur, Bilaspur, Korba, Jagdalpur, and all of Chhattisgarh. We also partner with agencies across India as their white-label web development team."
  },
  {
    question: "Can local students intern at Build Beyond Studio?",
    answer: "Yes. We run structured training and internship programs in HTML/CSS/JavaScript, MERN Stack, and full-stack development specifically designed for students in Ambikapur and Surguja. These programs include real project experience and mentorship."
  },
  {
    question: "How do I get a quote for a website or application?",
    answer: "You can reach our founder Ankush Kumar Gupta directly via WhatsApp at +91 76973 39962 or email buildbeyondstudio@gmail.com. We typically respond within a few hours with an initial consultation."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Ambikapur', path: '/ambikapur' },
]);

/* ---------- Regional coverage data ---------- */
const regions = [
  {
    name: 'Ambikapur & Surguja',
    desc: 'Our home base. Walk-in consultations, same-day meetings, and direct collaboration with our founding team.',
    highlight: true,
  },
  {
    name: 'Raipur',
    desc: 'Serving the state capital\'s growing startup ecosystem and enterprise clients with remote-first delivery and periodic on-site visits.',
  },
  {
    name: 'Bilaspur',
    desc: 'Supporting businesses and institutions in Bilaspur with custom web solutions, from e-commerce portals to internal management dashboards.',
  },
  {
    name: 'Korba & Janjgir-Champa',
    desc: 'Building digital presence for the industrial heartland — corporate websites, staff portals, and inventory management systems.',
  },
  {
    name: 'Pan-Chhattisgarh & India',
    desc: 'Our white-label model means we seamlessly partner with agencies and businesses anywhere in India with zero geographical friction.',
  },
];

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

      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">Home</Link> → Ambikapur
        </div>

        {/* Hero */}
        <h1 className="text-4xl sm:text-5xl font-black text-black mb-6 tracking-tight leading-tight">
          Web Development &amp; IT Company in Ambikapur, Chhattisgarh
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
          Build Beyond Studio is a software and web development company headquartered in Ambikapur, Surguja. We build custom websites, full-stack web applications, and cloud-native infrastructure for businesses across Chhattisgarh — and partner invisibly with marketing agencies across India.
        </p>
        <a
          href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20found%20you%20on%20the%20Ambikapur%20page.%20I%20would%20like%20to%20discuss%20a%20project%20with%20Build%20Beyond%20Studio."
          className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold mb-16"
          style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}
        >
          Talk to Us on WhatsApp
        </a>

        <div className="space-y-16 text-gray-700">

          {/* NAP Block */}
          <div>
            <h2 className="uppercase tracking-wide text-sm text-[#C8860A] font-bold mb-4">Our Office</h2>
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
                    <a href="mailto:buildbeyondstudio@gmail.com" className="text-[#C8860A] font-semibold hover:underline">buildbeyondstudio@gmail.com</a>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">Hours</div>
                    <div className="text-gray-600 text-sm font-light">Monday — Friday, 9:00 AM — 6:00 PM IST</div>
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

          {/* What We Build */}
          <div>
            <h2 className="uppercase tracking-wide text-sm text-[#C8860A] font-bold mb-4">What We Build</h2>
            <p className="leading-relaxed mb-6 text-base font-light">
              From our Ambikapur headquarters, we deliver enterprise-grade web solutions to businesses across Chhattisgarh and agency partners across India. Our core technology stack includes React, Next.js, Node.js, MongoDB (MERN Stack), Docker, and AWS/GCP cloud infrastructure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Custom Websites & Portals', desc: 'Responsive business websites, client portals, and admin dashboards built with modern frameworks.', href: '/services/custom-web-applications' },
                { title: 'Cloud & DevOps', desc: 'Auto-scaling infrastructure, CI/CD pipelines, Docker containerization, and AWS/GCP deployments.', href: '/services/devops-infrastructure' },
                { title: 'SEO & Digital Marketing', desc: 'AI-era search visibility (AEO/GEO), performance ads, and conversion funnel optimization.', href: '/services/aeo-geo' },
                { title: 'Technical Consulting', desc: 'Fractional CTO services, tech roadmaps, and architecture reviews for growing businesses.', href: '/services/technical-consulting' },
              ].map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="block p-5 rounded-2xl bg-white border border-[rgba(200,134,10,0.12)] hover:border-[#C8860A] transition-colors group"
                  style={{ boxShadow: '0 4px 16px rgba(200,134,10,0.06)' }}
                >
                  <div className="font-bold text-black mb-1 text-base group-hover:text-[#C8860A] transition-colors">{service.title}</div>
                  <div className="text-gray-600 text-sm leading-relaxed font-light">{service.desc}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Serving Ambikapur / Surguja / Chhattisgarh / Raipur / Bilaspur */}
          <div>
            <h2 className="uppercase tracking-wide text-sm text-[#C8860A] font-bold mb-4">Serving All of Chhattisgarh</h2>
            <p className="leading-relaxed mb-6 text-base font-light">
              While we are proudly rooted in Ambikapur, our client base spans the entire state of Chhattisgarh and beyond. Whether you are a local business in Surguja, a startup in Raipur, or an institution in Bilaspur — we bring the same calibre of engineering to every project.
            </p>
            <div className="space-y-4">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className={`flex gap-4 p-5 rounded-2xl bg-white border ${region.highlight ? 'border-[#C8860A]' : 'border-[rgba(200,134,10,0.12)]'}`}
                  style={{ boxShadow: '0 4px 16px rgba(200,134,10,0.06)' }}
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

          {/* Training & Internships for Local Students */}
          <div>
            <h2 className="uppercase tracking-wide text-sm text-[#C8860A] font-bold mb-4">Training &amp; Internships for Ambikapur Students</h2>
            <p className="leading-relaxed mb-4 text-base font-light">
              We are committed to building tech talent in Surguja and Chhattisgarh. Our structured training programs are designed for local students who want to break into professional web development — with real project experience, not just theory.
            </p>
            <div className="bg-white p-6 rounded-2xl border border-[rgba(200,134,10,0.12)] mb-4" style={{ boxShadow: '0 4px 16px rgba(200,134,10,0.06)' }}>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-[#C8860A] font-bold">→</span>
                  <span><strong className="text-black">HTML, CSS & JavaScript in 28 Days</strong> — ₹3,999. Perfect for beginners starting from zero.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#C8860A] font-bold">→</span>
                  <span><strong className="text-black">MERN Stack in 45 Days</strong> — ₹8,999. Build production-ready full-stack applications.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#C8860A] font-bold">→</span>
                  <span><strong className="text-black">Zero to MERN in 65 Days</strong> — ₹11,999. The complete journey from HTML basics to deploying MERN apps.</span>
                </li>
              </ul>
            </div>
            <Link
              href="/training-programs"
              className="inline-block text-[#C8860A] font-semibold hover:underline text-sm"
            >
              View all training programs →
            </Link>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="uppercase tracking-wide text-sm text-[#C8860A] font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="font-bold text-black text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#0A0A0A] rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden mt-20 shadow-2xl border border-white/5">
          <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-[#C8860A] rounded-full mix-blend-screen filter blur-[100px] opacity-[0.10] pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-black mb-4 text-white tracking-tight relative z-10">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed font-light relative z-10">
            Whether you&apos;re a business in Ambikapur looking for your first website, a Raipur startup scaling your platform, or an agency anywhere in India — reach out to our founder Ankush Kumar Gupta directly.
          </p>
          <div className="flex flex-wrap gap-4 relative z-10">
            <a
              href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20found%20you%20on%20the%20Ambikapur%20page.%20I%20would%20like%20to%20discuss%20a%20project%20with%20Build%20Beyond%20Studio."
              className="inline-block bg-[#C8860A] text-white px-8 py-3 rounded-lg hover:bg-[#A06A00] transition-all font-semibold"
              style={{ boxShadow: '0 4px 16px rgba(200,134,10,0.25)' }}
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:buildbeyondstudio@gmail.com"
              className="inline-block bg-white/10 text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-all font-semibold border border-white/10"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
