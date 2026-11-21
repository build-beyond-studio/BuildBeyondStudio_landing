import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata('/about', {
  title: "About Build Beyond Studio | Founder and Team | BBS",
  description: "Meet Ankush Kumar Gupta and the Build Beyond Studio team, the white-label engineering partner for marketing agencies, based in Ambikapur, Chhattisgarh.",
  openGraph: {
    title: "About Build Beyond Studio | Founder and Team | BBS",
    description: "Meet Ankush Kumar Gupta and the Build Beyond Studio team, the white-label engineering partner for marketing agencies, based in Ambikapur, Chhattisgarh.",
    type: "website",
  },
})

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
      "name": "About BBS",
      "item": "https://buildbeyondstudio.com/about"
    }
  ]
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      {/* Hero Header */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 border-b border-black/5 bg-[#F5F2EC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#C8860A]">
            The Invisible Engineering Partner
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-black tracking-[-0.04em] mb-6 leading-[1.08]">
            About Build Beyond Studio
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            We are the white-label engineering team behind marketing agencies across India. Building custom websites, online stores, and web applications—under your brand, on time, under strict NDA.
          </p>
          <div className="inline-block bg-white/80 border border-gray-200 px-4 py-1.5 rounded-full text-xs text-gray-600 font-medium">
            Headquartered in Ambikapur, Surguja, Chhattisgarh • Operating pan-India
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6">
        <div className="space-y-16">

          {/* Founder Section */}
          <div className="bg-[#0A0A0A] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 md:p-12 text-white relative overflow-hidden shadow-2xl border border-white/5">
            {/* Background Glow */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#C8860A] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.14] pointer-events-none" />

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white tracking-tight relative z-10 text-center md:text-left">
              A Note From Our Founder
            </h2>

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start relative z-10">
              {/* Founder Photograph */}
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-2xl flex-shrink-0 overflow-hidden border-2 border-[#C8860A]/60 shadow-[0_12px_32px_rgba(200,134,10,0.15)] relative">
                <Image
                  src="/founder.jpeg"
                  alt="Ankush Kumar Gupta — Founder & CEO, Build Beyond Studio"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content: Exactly matching homepage founder card */}
              <div className="flex-1 flex flex-col justify-between">
                <div className="space-y-3 text-center md:text-left">
                  <p className="text-[#E0E0E0] text-[14px] sm:text-[16px] md:text-[17px] leading-relaxed font-light">
                    &quot;Marketing agencies excel at closing clients, but often struggle to find dependable developers who protect their margins and confidentiality.
                  </p>
                  <p className="text-[#E0E0E0] text-[14px] sm:text-[16px] md:text-[17px] leading-relaxed font-light">
                    I founded Build Beyond Studio to operate as your silent engineering team, handling custom builds, DevOps, and tracking under your brand.
                  </p>
                  <p className="text-[#E0E0E0] text-[14px] sm:text-[16px] md:text-[17px] leading-relaxed font-light">
                    You own the client relationship and 100% of the IP, while we deliver production-ready code with complete accountability.&quot;
                  </p>
                </div>

                {/* Founder Meta & Links */}
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <p className="text-[#C8860A] font-bold text-base sm:text-lg tracking-wide">
                        Ankush Kumar Gupta
                      </p>
                      <a
                        href="https://www.linkedin.com/in/ankush-kumar-gupta-191b923b1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0A66C2] hover:text-[#004182] transition-colors p-1"
                        aria-label="Ankush Kumar Gupta LinkedIn Profile"
                      >
                        <FaLinkedin className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-[#888888] font-semibold text-xs tracking-wider uppercase">
                      Founder &amp; CEO, Build Beyond Studio
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                    <a
                      href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20a%20partnership%20with%20Build%20Beyond%20Studio."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors underline"
                    >
                      WhatsApp
                    </a>
                    <span>•</span>
                    <a
                      href="mailto:admin@buildbeyondstudio.com"
                      className="hover:text-white transition-colors underline"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What We Do & What We Don't Do */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200/90 rounded-3xl p-8 shadow-sm">
              <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">What BBS Delivers</span>
              <h3 className="text-2xl font-black text-black tracking-tight mt-1 mb-4">Our Core Focus</h3>
              <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed mb-6">
                We are an engineering and development partner. We focus on areas requiring high-calibre technical architecture:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-700 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Custom Website Development:</strong> Responsive Next.js, React, and modern CMS platforms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Online Store Development:</strong> High-converting Shopify and WooCommerce builds.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Tracking & Conversion Setup:</strong> Server-side GTM, Meta CAPI, and GA4 e-commerce setups.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Dedicated Development Pods:</strong> Dedicated sprint teams scaling agency capacity.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Website & App Maintenance:</strong> Ongoing security, backups, updates, and monitoring.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FAF9F5] border border-black/5 rounded-3xl p-8 shadow-sm">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Out of Scope</span>
              <h3 className="text-2xl font-black text-black tracking-tight mt-1 mb-4">What We Do Not Do</h3>
              <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed mb-6">
                To protect our agency partners and maintain sharp engineering excellence, we explicitly do not offer:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-600 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span><strong>Digital Marketing & Ad Management:</strong> We don&apos;t manage ad spend, PPC campaigns, or social media.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span><strong>Direct Client Acquisition:</strong> We do not compete for your clients or offer agency growth consulting.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span><strong>Creative Ad Copywriting:</strong> We focus strictly on technical implementation and code architecture.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span><strong>Guaranteed Rankings or Revenue:</strong> We build technically sound platforms, but do not make inflated business guarantees.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Ambikapur Engineering Hub */}
          <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-10 shadow-sm">
            <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Engineering Advantage</span>
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-1 mb-3">
              Why Based in Ambikapur, Chhattisgarh?
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              <p>
                Operating our engineering centre from Ambikapur, Surguja gives our agency partners an immense structural advantage:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-black/5">
                  <div className="font-bold text-black text-sm mb-1">Low Developer Churn</div>
                  <p className="text-xs text-gray-500 font-light">
                    Unlike high-friction tier-1 metro hubs where developers jump ship every 6 months, our core engineering team provides stable, long-term project continuity.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-black/5">
                  <div className="font-bold text-black text-sm mb-1">Competitive Partner Pricing</div>
                  <p className="text-xs text-gray-500 font-light">
                    Lower operational overhead allows us to offer attractive fixed partner rates, leaving healthy 40%–60% margins for your agency.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-black/5">
                  <div className="font-bold text-black text-sm mb-1">Tier-1 Engineering Calibre</div>
                  <p className="text-xs text-gray-500 font-light">
                    Modern full-stack tech: Next.js, React, Node.js, MERN stack, Docker, and cloud deployments with structured code review.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-black/5 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Get in touch</span>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mt-2 mb-4">
            Meet the Team Behind Your Next Build
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Have an upcoming client website or application? Let&apos;s discuss requirements and establish a bilateral NDA.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="inline-block text-white px-8 py-3.5 rounded-lg transition-all font-semibold shadow-md hover:shadow-lg text-sm"
              style={{
                background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)',
                boxShadow: '0 4px 16px rgba(200,134,10,0.30)'
              }}
            >
              Send a Project Brief →
            </Link>
            <Link
              href="/how-we-partner"
              className="inline-block bg-white text-[#C8860A] border border-[rgba(200,134,10,0.3)] hover:bg-[#FDF8F0] px-8 py-3.5 rounded-lg transition-all font-semibold text-sm"
            >
              See How We Partner
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
