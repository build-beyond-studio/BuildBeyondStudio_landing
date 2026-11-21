import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata('/privacy', {
  title: 'Privacy Policy | Build Beyond Studio',
  description: 'Privacy policy for Build Beyond Studio. Learn how we handle agency partner data, client confidentiality, data retention, and technical credentials.',
  openGraph: {
    title: 'Privacy Policy | Build Beyond Studio',
    description: 'Privacy policy for Build Beyond Studio. Learn how we handle agency partner data, client confidentiality, data retention, and technical credentials.',
    type: 'website',
  },
})

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="bg-[#F5F2EC] min-h-screen">
        {/* Page Header */}
        <section className="pt-28 pb-8 px-4 sm:px-6 md:pb-12 border-b border-black/5">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#C8860A]">
              Confidentiality &amp; Data Protection
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-black mb-4">Privacy Policy</h1>
            <p className="text-sm text-gray-500 font-light">Last reviewed: November 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4 sm:px-6 pb-24">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none text-gray-700">
            <div className="space-y-10">

              {/* Data We Collect */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-3">1. Information We Collect</h2>
                <p className="text-sm leading-relaxed text-gray-600 font-light mb-4">
                  As a white-label technical partner to agencies, Build Beyond Studio collects minimal information strictly necessary to provide engineering estimates, execute development contracts, and support production builds:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 font-light">
                  <li><strong>Agency Contact Details:</strong> Name, professional email address, phone number, agency name, and project requirements submitted via contact forms, project briefs, or discovery consultations.</li>
                  <li><strong>Project Specifications:</strong> Technical scopes, design files (Figma, Sketch, Adobe XD), functional specifications, staging URLs, and milestone requirements provided by the agency.</li>
                  <li><strong>Technical Credentials (when provisioned):</strong> Temporary staging server credentials, repository permissions (GitHub, GitLab, Bitbucket), cloud hosting access, and third-party API keys required strictly for engineering implementation.</li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-3">2. How We Use Information</h2>
                <p className="text-sm leading-relaxed text-gray-600 font-light mb-4">
                  All information, briefs, and technical assets provided to Build Beyond Studio are used exclusively for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 font-light">
                  <li>Formulating fixed-scope engineering estimates and Statements of Work (SOW).</li>
                  <li>Executing sprint deliverables, software architecture, front-end development, API integrations, and code reviews.</li>
                  <li>Deploying staging previews and production releases to your designated infrastructure.</li>
                  <li>Direct technical communication and weekly progress updates with your authorized agency team.</li>
                </ul>
                <p className="text-sm leading-relaxed text-gray-600 font-light mt-4">
                  We never sell, rent, monetize, or publicly disclose agency contact information or project briefs.
                </p>
              </div>

              {/* Agency-Shared Client Data */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-3">3. Agency-Shared Client Data &amp; Deletion Policy</h2>
                <p className="text-sm leading-relaxed text-gray-600 font-light mb-4">
                  Build Beyond Studio operates strictly under white-label terms behind partner agencies:
                </p>
                <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[rgba(200,134,10,0.2)] mb-4">
                  <p className="text-sm font-semibold text-black">
                    Client data is deleted after project completion unless the contract says otherwise.
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 font-light">
                  <li><strong>Client Confidentiality:</strong> We do not contact your clients unless you ask us to. Your end-client details remain strictly protected under bilateral non-disclosure terms.</li>
                  <li><strong>Data Retention &amp; Purging:</strong> Staging databases, temporary credentials, and local technical test datasets are deleted 30 days following project handover or immediately upon final sign-off.</li>
                  <li><strong>Credential Revocation:</strong> We advise partner agencies to revoke or rotate temporary developer tokens and passwords immediately following repository handover and launch.</li>
                </ul>
              </div>

              {/* Service Processors & Third-Party Infrastructure */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-3">4. Service Processors &amp; Third-Party Services</h2>
                <p className="text-sm leading-relaxed text-gray-600 font-light mb-4">
                  To operate our website and communicate with prospective agency partners, we use selected external service processors:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 font-light">
                  <li><strong>Hosting &amp; CDN:</strong> Vercel and secure global edge cloud infrastructure.</li>
                  <li><strong>Analytics:</strong> First-party or aggregated privacy-focused website analytics to assess page performance and traffic without invasive cross-site profiling.</li>
                  <li><strong>Communication Channels:</strong> Email service providers and WhatsApp (Meta) for direct partner communications.</li>
                </ul>
              </div>

              {/* International Data Transfers & Regulatory Compliance */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-3">5. Data Storage, International Transfers &amp; Compliance</h2>
                <p className="text-sm leading-relaxed text-gray-600 font-light mb-4">
                  Build Beyond Studio is based in India and collaborates with agency partners across India, the United Kingdom, and globally.
                </p>
                <p className="text-sm leading-relaxed text-gray-600 font-light mb-4">
                  Where data involves UK or EU agency clients, technical collaboration complies with applicable international data transfer standards including Standard Contractual Clauses (SCCs) and International Data Transfer Agreements (IDTA) under UK GDPR. All sensitive code, keys, and documentation are stored in encrypted environments.
                </p>
              </div>

              {/* Cookies & Tracking */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-3">6. Cookies &amp; Tracking Technologies</h2>
                <p className="text-sm leading-relaxed text-gray-600 font-light mb-4">
                  Our website uses essential session cookies to ensure security, maintain responsiveness, and measure anonymous aggregate visits. We do not use third-party behavioral advertising cookies or sell user tracking profiles to external data brokers.
                </p>
              </div>

              {/* User & Agency Rights */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-3">7. Your Rights &amp; Access Requests</h2>
                <p className="text-sm leading-relaxed text-gray-600 font-light mb-4">
                  Agency partners and website visitors may request access to, correction of, or complete deletion of their personal and contact records held by Build Beyond Studio at any time.
                </p>
                <p className="text-sm leading-relaxed text-gray-600 font-light">
                  To exercise your rights or request formal deletion of archived communication logs, email us at <a href="mailto:admin@buildbeyondstudio.com" className="text-[#C8860A] underline">admin@buildbeyondstudio.com</a>.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-[#FAF9F5] p-8 rounded-2xl border border-[rgba(200,134,10,0.2)]">
                <h2 className="text-xl font-bold text-black mb-2">Privacy &amp; Data Contact</h2>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                  For privacy enquiries, bilateral NDAs, or technical credential management:
                </p>
                <div className="text-sm text-gray-600 font-light space-y-1.5">
                  <div><strong>Email:</strong> <a href="mailto:admin@buildbeyondstudio.com" className="text-[#C8860A] underline">admin@buildbeyondstudio.com</a></div>
                  <div><strong>WhatsApp:</strong> <a href="https://wa.me/917697339962" className="text-[#C8860A] underline">+91 76973 39962</a></div>
                  <div><strong>Headquarters:</strong> Build Beyond Studio, Ambikapur, Surguja, Chhattisgarh 497001, India</div>
                  <div><strong>Trust Centre:</strong> Review our full operational commitments in the <Link href="/trust" className="text-[#C8860A] underline font-semibold">Trust Centre</Link>.</div>
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
