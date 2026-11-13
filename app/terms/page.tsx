import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Build Beyond Studio',
  description: 'Terms of service for Build Beyond Studio. Understand our IP ownership, partnership frameworks, change policies, and service terms.',
  alternates: {
    canonical: 'https://buildbeyondstudio.com/terms',
  },
  openGraph: {
    title: 'Terms of Service | Build Beyond Studio',
    description: 'Terms of service for Build Beyond Studio. Understand our IP ownership, partnership frameworks, change policies, and service terms.',
    url: 'https://buildbeyondstudio.com/terms',
    type: 'website',
  },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="bg-[#F5F2EC] min-h-screen">
        {/* Page Header */}
        <section className="pt-28 pb-8 px-4 sm:px-6 md:pb-12 border-b border-black/5">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#C8860A]">
              Legal &amp; Commercial Terms
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-black mb-4">Terms of Service</h1>
            <p className="text-sm text-gray-500 font-light">Last reviewed: November 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4 sm:px-6 pb-24">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none text-gray-700">
            <div className="space-y-10">

              {/* Legal Review Notice */}
              <div className="bg-[#FFFBEB] p-6 rounded-2xl border border-[#FDE68A] text-xs sm:text-sm text-[#92400E] leading-relaxed">
                <strong>Legal Review Note:</strong> These terms govern commercial and engineering engagements between Build Beyond Studio and agency partners. This document must be reviewed by qualified legal counsel before formal execution. Specific operational and contractual terms requiring owner confirmation are noted as [OWNER TO CONFIRM].
              </div>

              {/* IP Transfer */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-3">1. Complete Intellectual Property Ownership</h2>
                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[rgba(200,134,10,0.2)] mb-4">
                  <p className="text-sm font-semibold text-black">
                    You receive 100% of the source code and IP when development is complete.
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 font-light mb-4">
                  Full ownership of all custom frontend and backend code, database architectures, styling frameworks, and documentation transfers completely to your agency (or directly to your client, as your agency directs) upon delivery completion.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 font-light">
                  <li>Custom React / Next.js code, WordPress / Shopify templates, and bespoke server scripts.</li>
                  <li>Clean Git repositories, environmental configuration templates, and deployment guides.</li>
                  <li>Zero proprietary licensing locks, royalties, or residual ownership claims by BBS.</li>
                </ul>
              </div>

              {/* Commercial Model & Payment Terms */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-3">2. Commercial Framework &amp; Payment Terms</h2>
                <p className="text-sm leading-relaxed text-gray-600 font-light mb-4">
                  Build Beyond Studio operates strictly as an invisible engineering subcontractor to marketing agencies:
                </p>
                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[rgba(200,134,10,0.2)] mb-4 space-y-2">
                  <p className="text-sm font-medium text-black">
                    <strong>Your first project:</strong> no upfront payment. You pay after delivery, once you are satisfied.
                  </p>
                  <p className="text-sm font-medium text-black">
                    <strong>After that:</strong> projects are billed 50% in advance and 50% on completion.
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 font-light">
                  <li><strong>Revenue-Share Option:</strong> Revenue-share option available; the partner&apos;s share is always at least 50%. Evaluated on select recurring software engagements.</li>
                  <li><strong>Pilot Project Threshold:</strong> [OWNER TO CONFIRM: maximum project scope or budget limit for zero-upfront first project pilot].</li>
                  <li><strong>Review &amp; Approval Window:</strong> Following delivery to staging, the agency has [OWNER TO CONFIRM: e.g. 7 or 14 calendar days] to test and submit punch-list review feedback before final invoice settlement.</li>
                </ul>
              </div>

              {/* Delivery Dates & Statement of Work */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-3">3. Delivery Timelines &amp; SOW Commitments</h2>
                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[rgba(200,134,10,0.2)] mb-4">
                  <p className="text-sm font-semibold text-black">
                    Delivery dates are set in the project&apos;s Statement of Work.
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 font-light mb-3">
                  Each engagement is initiated under a written Statement of Work defining sprint milestones, staging preview dates, and final release targets.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 font-light">
                  <li><strong>Response Standard:</strong> We respond within 24 hours to all active project communications.</li>
                  <li><strong>Weekly Cadence:</strong> You get a weekly progress update with a staging link to review live development in progress.</li>
                </ul>
              </div>

              {/* Scope Changes & Variations */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-3">4. Scope Changes &amp; Revisions</h2>
                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[rgba(200,134,10,0.2)] mb-4">
                  <p className="text-sm font-semibold text-black">
                    Scope changes are priced and approved in writing before work starts.
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 font-light">
                  Any functional modifications, extra layouts, or third-party integrations outside the signed SOW are flagged immediately. We provide a transparent change-order estimate with hours and cost. Work on changes begins only after written approval from the partner agency.
                </p>
              </div>

              {/* White-Label Confidentiality & Non-Disclosure */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-3">5. White-Label Operations &amp; Non-Disclosure</h2>
                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[rgba(200,134,10,0.2)] mb-4">
                  <p className="text-sm font-semibold text-black">
                    We do not contact your clients unless you ask us to.
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 font-light mb-3">
                  We operate strictly behind your brand. All communication regarding project requirements, timeline, pricing, and handover flows through your agency team.
                </p>
                <p className="text-sm leading-relaxed text-gray-600 font-light">
                  We execute bilateral NDAs with our agency partners. We never market our services to your clients or disclose your client roster.
                </p>
              </div>

              {/* Quality Assurance & Testing */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-3">6. Quality Assurance &amp; Handover</h2>
                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[rgba(200,134,10,0.2)] mb-4">
                  <p className="text-sm font-semibold text-black">
                    Every build is tested by our QA testers before delivery.
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 font-light">
                  Every build undergoes rigorous internal quality assurance across cross-browser compatibility, responsive mobile viewports, broken link checks, Core Web Vitals performance benchmarks, and form handling before deployment to your staging environment.
                </p>
              </div>

              {/* Post-Launch Maintenance & Support */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-3">7. Post-Launch Maintenance &amp; Support</h2>
                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[rgba(200,134,10,0.2)] mb-4">
                  <p className="text-sm font-semibold text-black">
                    Post-launch support is available under a separate maintenance agreement.
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 font-light mb-3">
                  Following project delivery and staging acceptance, any ongoing hosting monitoring, CMS updates, security patches, bug fixes, or incremental feature developments are serviced under a monthly white-label maintenance agreement [OWNER TO CONFIRM: standard warranty bug-fix period included post-launch, e.g. 14 or 30 days for defects against agreed SOW specifications].
                </p>
              </div>

              {/* Governing Law & Dispute Resolution */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-3">8. Governing Law &amp; Dispute Resolution</h2>
                <p className="text-sm leading-relaxed text-gray-600 font-light mb-3">
                  These terms and individual Statements of Work are governed by and construed in accordance with applicable commercial laws.
                </p>
                <p className="text-sm leading-relaxed text-gray-600 font-light">
                  [OWNER TO CONFIRM: Specific governing jurisdiction and arbitration forum for domestic Indian agencies (e.g. courts of Ambikapur / Bilaspur, Chhattisgarh) and international agency contracts (e.g. English law / London arbitration for UK clients, or Singapore/international venue)].
                </p>
              </div>

              {/* Contact */}
              <div className="bg-[#FAF9F5] p-8 rounded-2xl border border-[rgba(200,134,10,0.2)]">
                <h2 className="text-xl font-bold text-black mb-2">Legal &amp; Contractual Enquiries</h2>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                  For master services agreements (MSA), bilateral NDAs, or partner contract questions:
                </p>
                <div className="text-sm text-gray-600 font-light space-y-1.5">
                  <div><strong>Email:</strong> <a href="mailto:admin@buildbeyondstudio.com" className="text-[#C8860A] underline">admin@buildbeyondstudio.com</a></div>
                  <div><strong>WhatsApp:</strong> <a href="https://wa.me/917697339962" className="text-[#C8860A] underline">+91 76973 39962</a></div>
                  <div><strong>Headquarters:</strong> Build Beyond Studio, Ambikapur, Surguja, Chhattisgarh 497001, India</div>
                  <div><strong>Trust Policies:</strong> Review our full commitments in the <Link href="/trust" className="text-[#C8860A] underline font-semibold">Trust Centre</Link>.</div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
