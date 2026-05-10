import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Build Beyond Studio',
  description: 'Terms of service for Build Beyond Studio. Understand our IP ownership, revenue split, and service terms.',
  openGraph: {
    title: 'Terms of Service | Build Beyond Studio',
    description: 'Terms of service for Build Beyond Studio.',
    type: 'website',
    url: 'https://buildbeyondstudio.com/terms',
  },
  alternates: {
    canonical: 'https://buildbeyondstudio.com/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="bg-[#F5F2EC] min-h-screen">
        {/* Page Header */}
        <section className="pt-24 pb-8 px-4 sm:px-6 md:pb-12">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#C8860A] hover:text-[#A06A00] font-semibold text-sm mb-6"
            >
              <span>←</span> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">Last updated: May 10, 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4 sm:px-6 pb-24">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none text-gray-700">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">IP Ownership</h2>
                <p>
                  Build Beyond Studio explicitly assigns 100% intellectual property rights to you upon project completion and payment. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>All source code, both frontend and backend</li>
                  <li>Design files and assets (UI/UX)</li>
                  <li>Database schemas and configurations</li>
                  <li>Documentation and technical specifications</li>
                  <li>Deployment configurations and DevOps setup</li>
                </ul>
                <p className="mt-4">
                  BBS retains no ownership, licensing rights, or claims over delivered work. Full IP ownership is transferred to you (or your client, depending on your agreement).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Revenue Split Framework</h2>
                <p>
                  For agency partnerships, revenue is structured as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>You set the client price:</strong> Full control over project pricing</li>
                  <li><strong>We provide a development quote:</strong> Our cost as your development partner</li>
                  <li><strong>You keep the margin:</strong> The difference between client price and development cost is your profit</li>
                  <li><strong>50/50 Revenue Share (Alternative):</strong> For projects where a direct revenue share is preferred instead of a fixed development fee</li>
                  <li><strong>Payment terms:</strong> Deposits, milestones, and final payment as agreed per engagement</li>
                </ul>
                <p className="mt-4">
                  All revenue agreements are negotiated on a per-project basis and documented in a separate Statement of Work (SOW).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">General Terms</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Project Scope:</strong> Scope changes after project commencement may incur additional fees.</li>
                  <li><strong>Timelines:</strong> Delivery dates are estimates. BBS commits to reasonable timelines but does not guarantee fixed deadlines beyond documented SOWs.</li>
                  <li><strong>Communication:</strong> All project communication is conducted between you (the agency) and BBS. No direct client contact unless explicitly agreed.</li>
                  <li><strong>Deliverables:</strong> Projects are delivered production-ready. Post-launch support and maintenance are separate services with their own terms.</li>
                  <li><strong>Liability:</strong> BBS is not liable for client dissatisfaction unless directly caused by code defects or non-delivery of agreed scope.</li>
                  <li><strong>Confidentiality:</strong> Both parties agree to maintain strict confidentiality regarding partnership terms, pricing, and client information.</li>
                  <li><strong>NDA:</strong> A separate NDA will be signed before project commencement.</li>
                  <li><strong>Termination:</strong> Either party may terminate a project with written notice. Refunds are governed by the agreed SOW.</li>
                  <li><strong>Jurisdiction:</strong> These terms are governed by laws applicable in India.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Contact for Questions</h2>
                <p>
                  If you have questions about these terms, please reach out:
                </p>
                <ul className="space-y-2 mt-4">
                  <li>
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:buildbeyondstudio@gmail.com"
                      className="text-[#C8860A] hover:text-[#A06A00]"
                    >
                      buildbeyondstudio@gmail.com
                    </a>
                  </li>
                  <li>
                    <strong>WhatsApp:</strong>{' '}
                    <a
                      href="https://wa.me/917697339962"
                      className="text-[#C8860A] hover:text-[#A06A00]"
                    >
                      +91 76973 39962
                    </a>
                  </li>
                  <li>
                    <strong>Location:</strong> Ambikapur, Surguja, Chhattisgarh 497001
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
