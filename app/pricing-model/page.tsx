import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: "White Label Web Development Pricing for Agencies | BBS",
  description: "How BBS partner pricing works: a fixed quote per project, you set the client price and keep the margin. Includes an example margin calculation.",
  alternates: {
    canonical: "https://buildbeyondstudio.com/pricing-model",
  },
  openGraph: {
    title: "White Label Web Development Pricing for Agencies | BBS",
    description: "How BBS partner pricing works: a fixed quote per project, you set the client price and keep the margin. Includes an example margin calculation.",
    url: "https://buildbeyondstudio.com/pricing-model",
    type: "website",
  },
}

const faqs = [
  {
    question: "How do you calculate your project quote?",
    answer: "We review your client brief, Figma designs, technical stack, third-party integrations, and milestone deliverables. We then calculate the engineering hours required and provide an itemised, fixed quote before development begins."
  },
  {
    question: "Do you charge extra if development takes longer than anticipated?",
    answer: "No. If the scope remains identical to the approved technical specification, our quote is strictly fixed. We do not charge overtime or overrun fees for our own engineering estimates."
  },
  {
    question: "What happens if our client requests new features mid-project?",
    answer: "Any new feature or major revision outside the agreed scope is evaluated separately. We provide an itemised change estimate with clear hours and cost. Work on the new feature starts only after you give written approval."
  },
  {
    question: "How much margin can an agency make using BBS?",
    answer: "Agencies typically retain gross margins between 40% and 60%, depending on the retail price they set for their client and the complexity of the build."
  },
  {
    question: "What are your standard payment terms for project builds?",
    answer: "Your first project: no upfront payment. You pay after delivery, once you are satisfied. After that, projects are billed 50% in advance and 50% on completion."
  },
  {
    question: "Do you offer monthly retainers or dedicated pods?",
    answer: "Yes. For agencies with ongoing delivery volume, we provide dedicated development pods billed on a predictable monthly retainer, as well as recurring post-launch website maintenance retainers."
  },
  {
    question: "Do you bill our client directly?",
    answer: "Never. We have zero financial relationship with your client. You invoice your client directly on your terms and branding, and you pay BBS based on our agreed partner quote."
  },
  {
    question: "Are there any hidden licensing, hosting, or handoff fees?",
    answer: "None. All source code, repository rights, and documentation are handed over at 100% completion with zero vendor lock-in or recurring BBS licensing fees."
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
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
      "name": "Partner Pricing Model",
      "item": "https://buildbeyondstudio.com/pricing-model"
    }
  ]
}

export default function PricingModelPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 border-b border-black/5 bg-[#F5F2EC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#C8860A]">
            Transparent Partner Commercials
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-black tracking-[-0.04em] mb-6 leading-[1.08]">
            How BBS Partner Pricing Works
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            A fixed quote per project. You set the retail price for your client and keep the gross margin. No surprise invoices, zero developer payroll overhead.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {['Fixed Project Quotes', 'You Set Client Rates', 'Zero Overtime Surcharges', 'Written Scope Approvals'].map((badge) => (
              <span 
                key={badge} 
                className="px-4 py-1.5 rounded-full bg-white border border-[rgba(200,134,10,0.2)] text-[12px] font-bold text-[#C8860A] shadow-sm uppercase tracking-wider"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6">
        <div className="space-y-16">

          {/* Worked Margin Example */}
          <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-12 shadow-sm">
            <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Worked Example</span>
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-1 mb-4">
              How Agency Profit Margins Work in Practice
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-3xl">
              Here is a representative worked example of a custom website build delivered through our white-label partnership model:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-black/5">
                <div className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-1">1. You Invoice Your Client</div>
                <div className="text-3xl sm:text-4xl font-black text-black mb-2">₹1,00,000</div>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Your retail price based on your client relationship, brand positioning, and strategy package.
                </p>
              </div>

              <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-black/5">
                <div className="text-xs uppercase tracking-wider text-[#C8860A] font-medium mb-1">2. BBS Fixed Partner Quote</div>
                <div className="text-3xl sm:text-4xl font-black text-[#C8860A] mb-2">₹40,000</div>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Complete white-label engineering: frontend build, CMS setup, responsive QA, and staging review.
                </p>
              </div>

              <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-200">
                <div className="text-xs uppercase tracking-wider text-emerald-700 font-bold mb-1">3. Agency Gross Margin</div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-700 mb-2">₹60,000</div>
                <p className="text-xs text-emerald-800 font-light leading-relaxed">
                  <strong>60% gross profit</strong> retained by your agency with zero in-house developer salary liability.
                </p>
              </div>
            </div>

            <div className="text-xs text-gray-500 font-light border-t border-gray-100 pt-4">
              * Note: Project prices vary based on page count, technical complexity, custom animations, API integrations, and e-commerce requirements. The numbers above represent an illustrative calculation.
            </div>
          </div>

          {/* Pricing Factors */}
          <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-12 shadow-sm">
            <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Scope Evaluation</span>
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-1 mb-4">
              What Factors Determine Your Project Quote?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-2xl">
              We do not use cookie-cutter price sheets because no two agency briefs are identical. We price against tangible engineering requirements:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-black/5">
                <h3 className="font-bold text-black mb-1.5">Page Count & Design System</h3>
                <p className="text-gray-600 font-light text-xs sm:text-sm leading-relaxed">
                  Number of unique page layouts, component modularity, complex motion or interactive canvas animations in your Figma brief.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-black/5">
                <h3 className="font-bold text-black mb-1.5">Tech Stack & CMS Architecture</h3>
                <p className="text-gray-600 font-light text-xs sm:text-sm leading-relaxed">
                  Headless Next.js, custom React, Shopify liquid, WordPress/WooCommerce, or custom Node.js/Python backend integrations.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-black/5">
                <h3 className="font-bold text-black mb-1.5">Third-Party APIs & Databases</h3>
                <p className="text-gray-600 font-light text-xs sm:text-sm leading-relaxed">
                  Payment gateways (Razorpay, Stripe), CRM syncing (HubSpot, Zoho), ERP data feeds, or custom serverless webhooks.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-black/5">
                <h3 className="font-bold text-black mb-1.5">Timeline & Delivery Cadence</h3>
                <p className="text-gray-600 font-light text-xs sm:text-sm leading-relaxed mb-2">
                  Standard sprint delivery versus accelerated campaign launch schedules requiring dedicated sprint reallocation.
                </p>
                <p className="text-xs font-semibold text-[#A06A00]">
                  Delivery dates are set in the project&apos;s Statement of Work.
                </p>
              </div>
            </div>
          </div>

          {/* Three Engagement Models */}
          <div>
            <div className="text-center mb-12">
              <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Commercial Models</span>
              <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mt-2 mb-3">
                Three Flexible Ways to Partner
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto font-light text-sm sm:text-base">
                Structure your technical partnership according to your current project volume and client pipeline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200/90 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="text-xs uppercase font-bold text-[#C8860A] tracking-wider mb-2">Model 1</div>
                  <h3 className="text-xl font-black text-black tracking-tight mb-2">Per-Project Fixed Quote</h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    Best for discrete, well-defined client builds like new brand websites, store setups, or tracking pipelines.
                  </p>
                  <ul className="space-y-2 text-xs text-gray-600 font-light mb-8">
                    <li className="flex items-center gap-2"><span className="text-[#C8860A] font-bold">✓</span> We respond within 24 hours</li>
                    <li className="flex items-center gap-2"><span className="text-[#C8860A] font-bold">✓</span> First project: pay after delivery, once satisfied</li>
                    <li className="flex items-center gap-2"><span className="text-[#C8860A] font-bold">✓</span> Post-launch support available under separate maintenance</li>
                  </ul>
                </div>
                <Link href="/contact" className="w-full text-center py-2.5 px-4 rounded-xl bg-[#FAF9F5] hover:bg-[#FDF8F0] border border-black/10 text-xs font-bold text-black transition-all">
                  Submit a Brief →
                </Link>
              </div>

              <div className="bg-white border border-gray-200/90 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="text-xs uppercase font-bold text-[#C8860A] tracking-wider mb-2">Model 2</div>
                  <h3 className="text-xl font-black text-black tracking-tight mb-2">Dedicated Dev Pod</h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    A dedicated engineering pod integrated into your agency workflow for continuous project volume.
                  </p>
                  <ul className="space-y-2 text-xs text-gray-600 font-light mb-8">
                    <li className="flex items-center gap-2"><span className="text-[#C8860A] font-bold">✓</span> Dedicated frontend & backend engineers</li>
                    <li className="flex items-center gap-2"><span className="text-[#C8860A] font-bold">✓</span> Direct Slack & daily sprint integration</li>
                    <li className="flex items-center gap-2"><span className="text-[#C8860A] font-bold">✓</span> Predictable flat monthly billing</li>
                  </ul>
                </div>
                <Link href="/services/dedicated-development-pod" className="w-full text-center py-2.5 px-4 rounded-xl bg-[#FAF9F5] hover:bg-[#FDF8F0] border border-black/10 text-xs font-bold text-black transition-all">
                  Explore Pods →
                </Link>
              </div>

              <div className="bg-white border border-gray-200/90 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="text-xs uppercase font-bold text-[#C8860A] tracking-wider mb-2">Model 3</div>
                  <h3 className="text-xl font-black text-black tracking-tight mb-2">Maintenance Retainers</h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    White-label website and application maintenance you resell to past clients for recurring monthly revenue.
                  </p>
                  <ul className="space-y-2 text-xs text-gray-600 font-light mb-8">
                    <li className="flex items-center gap-2"><span className="text-[#C8860A] font-bold">✓</span> Security patches & CMS core updates</li>
                    <li className="flex items-center gap-2"><span className="text-[#C8860A] font-bold">✓</span> Automated cloud backups & monitoring</li>
                    <li className="flex items-center gap-2"><span className="text-[#C8860A] font-bold">✓</span> Monthly white-label reporting</li>
                  </ul>
                </div>
                <Link href="/services/website-app-maintenance" className="w-full text-center py-2.5 px-4 rounded-xl bg-[#FAF9F5] hover:bg-[#FDF8F0] border border-black/10 text-xs font-bold text-black transition-all">
                  See Maintenance →
                </Link>
              </div>
            </div>
          </div>

          {/* Scope & Payment Discipline */}
          <div className="bg-[#FAF9F5] border border-[rgba(200,134,10,0.18)] rounded-3xl p-8 sm:p-10 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-3">
              Clear Payment Terms & Zero Surprise Invoices
            </h3>
            <p className="text-gray-700 text-sm font-medium leading-relaxed mb-4">
              Your first project: no upfront payment. You pay after delivery, once you are satisfied. After that, projects are billed 50% in advance and 50% on completion.
            </p>
            <div className="p-4 rounded-xl bg-white border border-black/5 mb-5">
              <h4 className="text-xs uppercase font-bold text-[#C8860A] tracking-wider mb-1">Alternative Revenue-Share Model</h4>
              <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                Revenue-share option available; the partner&apos;s share is always at least 50%. This flexible commercial option is evaluated on select client engagements where recurring software or maintenance fees align both parties, without altering standard fixed-price project terms.
              </p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              We know that unpredictable billing destroys agency margins. If your client requests changes during development that fall outside the agreed specification:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-gray-700 font-light">
              <li>We immediately flag the item before any additional coding begins.</li>
              <li>We provide a concise, itemised change estimate with clear hours and cost.</li>
              <li>You present the addition to your client with your markup, and we proceed only after your written sign-off.</li>
            </ol>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white border-t border-black/5 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Get a Quote</span>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mt-2 mb-4">
            Have a Client Brief Ready? Get a Fixed Partner Quote.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Send us the requirements under NDA. We respond within 24 hours with an itemised technical breakdown and fixed quote.
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
              href="/trust"
              className="inline-block bg-white text-[#C8860A] border border-[rgba(200,134,10,0.3)] hover:bg-[#FDF8F0] px-8 py-3.5 rounded-lg transition-all font-semibold text-sm"
            >
              Read Trust Centre Policies
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <Footer />
    </main>
  )
}

