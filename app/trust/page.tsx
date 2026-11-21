import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata('/trust', {
  title: "Trust Centre: NDA, IP Ownership and Delivery | BBS",
  description: "How BBS protects agency partners: NDA before project details, no direct client contact, IP handover, QA and escalation. Read the policies in full.",
  openGraph: {
    title: "Trust Centre: NDA, IP Ownership and Delivery | BBS",
    description: "How BBS protects agency partners: NDA before project details, no direct client contact, IP handover, QA and escalation. Read the policies in full.",
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
      "name": "Trust Centre",
      "item": "https://buildbeyondstudio.com/trust"
    }
  ]
}

export default function TrustCentrePage() {
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
            Governance & Partner Protection
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-black tracking-[-0.04em] mb-6 leading-[1.08]">
            Trust Centre: How BBS Protects Your Agency and Your Clients
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            Clear, transparent policies covering confidentiality, IP transfer, client protection, and code quality. Read our full operational commitments below.
          </p>
          <div className="text-xs text-gray-500 font-light">
            Last policy review: November 2026 • Governed by applicable laws of India
          </div>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6">
        <div className="space-y-12">

          {/* Policy 1: Confidentiality & NDA */}
          <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#FDF8F0] border border-[rgba(200,134,10,0.2)] text-[#C8860A] font-bold text-xs flex items-center justify-center font-mono">
                01
              </span>
              <h2 className="text-2xl font-black text-black tracking-tight">Confidentiality & Non-Disclosure (NDA)</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              We sign a bilateral Non-Disclosure Agreement before your agency shares confidential briefs, client identities, Figma designs, or infrastructure credentials.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600 font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>All project assets, documents, and business logic remain strictly confidential within our engineering pod.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>We execute standard bilateral NDAs or can review and countersign your agency’s proprietary NDA agreement.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>Project discussions are restricted to authorized team members on a strictly need-to-know basis.</span>
              </li>
            </ul>
          </div>

          {/* Policy 2: Non-Solicitation & Zero Client Contact */}
          <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#FDF8F0] border border-[rgba(200,134,10,0.2)] text-[#C8860A] font-bold text-xs flex items-center justify-center font-mono">
                02
              </span>
              <h2 className="text-2xl font-black text-black tracking-tight">Client Protection & Non-Solicitation</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Your clients belong exclusively to your agency. We have zero interest in competing with marketing agencies or claiming client accounts.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600 font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span><strong>Zero Unsolicited Contact:</strong> We never reach out to, market to, or contact your clients directly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span><strong>Behind Your Brand:</strong> If requested to participate in a client meeting, we present ourselves strictly as your in-house technical department under your agency branding.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span><strong>No Disintermediation:</strong> We never accept direct contracts from clients introduced through your agency.</span>
              </li>
            </ul>
          </div>

          {/* Policy 3: 100% IP & Source Code Transfer */}
          <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#FDF8F0] border border-[rgba(200,134,10,0.2)] text-[#C8860A] font-bold text-xs flex items-center justify-center font-mono">
                03
              </span>
              <h2 className="text-2xl font-black text-black tracking-tight">100% Intellectual Property & Source Code Ownership</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              You receive full, unrestricted ownership of the delivered code upon milestone completion.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600 font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>100% of source code, component styling, database schemas, and documentation is transferred upon project completion.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>Zero proprietary lock-in, recurring software license fees, or BBS attribution strings required in codebase comments.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>Repositories are transferred directly to your agency GitHub, GitLab, or Bitbucket organization.</span>
              </li>
            </ul>
          </div>

          {/* Policy 4: Access Control & Data Handling */}
          <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#FDF8F0] border border-[rgba(200,134,10,0.2)] text-[#C8860A] font-bold text-xs flex items-center justify-center font-mono">
                04
              </span>
              <h2 className="text-2xl font-black text-black tracking-tight">Access Control & Credential Security</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              We practice strict credential management to keep client hosting, domains, and data environments secure.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600 font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>We encourage least-privilege access using temporary developer accounts rather than master root credentials.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>Credentials shared via 1Password, Bitwarden, or encrypted secrets managers are removed upon final handover.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>Production databases containing personal client data are never cloned to local machines without explicit sanitization.</span>
              </li>
            </ul>
          </div>

          {/* Policy 5: QA & Code Verification */}
          <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#FDF8F0] border border-[rgba(200,134,10,0.2)] text-[#C8860A] font-bold text-xs flex items-center justify-center font-mono">
                05
              </span>
              <h2 className="text-2xl font-black text-black tracking-tight">Code Quality & Structured QA</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Every deliverable goes through systematic internal review before being presented on private staging.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600 font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>Peer code review for architecture cleanliness, semantic HTML markup, accessibility, and security best practices.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>Responsive multi-viewport testing across iOS Safari, Android Chrome, and modern desktop browsers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>Core Web Vitals profiling and baseline performance validation prior to client handoff.</span>
              </li>
            </ul>
          </div>

          {/* Policy 6: Scope Discipline & Written Approvals */}
          <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#FDF8F0] border border-[rgba(200,134,10,0.2)] text-[#C8860A] font-bold text-xs flex items-center justify-center font-mono">
                06
              </span>
              <h2 className="text-2xl font-black text-black tracking-tight">Scope Discipline & Change Approvals</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              We enforce strict scope transparency to protect your project budget from unexpected overruns.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600 font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>Any feature addition or substantial structural change is documented in an itemised change order with transparent hours and costs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>No change order is executed without written approval from your agency project lead.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>Zero surprise billing at the end of the sprint cycle.</span>
              </li>
            </ul>
          </div>

          {/* Policy 7: Communication Cadence */}
          <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#FDF8F0] border border-[rgba(200,134,10,0.2)] text-[#C8860A] font-bold text-xs flex items-center justify-center font-mono">
                07
              </span>
              <h2 className="text-2xl font-black text-black tracking-tight">Transparent Communication Cadence</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Eliminate guesswork with regular async video walk-throughs and consistent updates.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600 font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>Direct Slack, Teams, or WhatsApp integration with your technical project manager.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>You get a weekly progress update with a staging link delivered throughout active development sprints.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>We respond within 24 hours on business days for technical queries, brief reviews, and feedback.</span>
              </li>
            </ul>
          </div>

          {/* Policy 8: Post-Launch Support */}
          <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#FDF8F0] border border-[rgba(200,134,10,0.2)] text-[#C8860A] font-bold text-xs flex items-center justify-center font-mono">
                08
              </span>
              <h2 className="text-2xl font-black text-black tracking-tight">Post-Launch Maintenance Support</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              Post-launch support is available under a separate maintenance agreement.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600 font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>Post-launch support is available under a separate maintenance agreement.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>Priority turnaround during scheduled maintenance windows.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C8860A] font-bold">✓</span>
                <span>Option to transition seamlessly into ongoing monthly website and application maintenance.</span>
              </li>
            </ul>
          </div>

          {/* Policy 9: Escalation & Direct Founder Access */}
          <div className="bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#FDF8F0] border border-[rgba(200,134,10,0.2)] text-[#C8860A] font-bold text-xs flex items-center justify-center font-mono">
                09
              </span>
              <h2 className="text-2xl font-black text-black tracking-tight">Escalation & Direct Founder Access</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">
              If an urgent issue arises that cannot be resolved at the project management level, you have direct escalation access to BBS leadership.
            </p>
            <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-black/5 text-xs sm:text-sm text-gray-700 font-light space-y-2">
              <div><strong>Primary Escalation:</strong> Ankush Kumar Gupta (Founder & Technical Director)</div>
              <div><strong>Direct Phone / WhatsApp:</strong> +91 76973 39962</div>
              <div><strong>Email:</strong> admin@buildbeyondstudio.com</div>
              <div><strong>Guaranteed Response:</strong> Urgent staging or production deployment blockers escalated to leadership within 4 hours.</div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-black/5 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Confidential Partnerships</span>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mt-2 mb-4">
            Ready to Work with an Invisible Partner You Can Trust?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Send us your brief or request our standard mutual NDA before discussing project details.
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
