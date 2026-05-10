import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Build Beyond Studio',
  description: 'Privacy policy for Build Beyond Studio. Learn how we collect and protect your data.',
  openGraph: {
    title: 'Privacy Policy | Build Beyond Studio',
    description: 'Privacy policy for Build Beyond Studio.',
    type: 'website',
    url: 'https://buildbeyondstudio.com/privacy',
  },
  alternates: {
    canonical: 'https://buildbeyondstudio.com/privacy',
  },
}

export default function PrivacyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: May 10, 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4 sm:px-6 pb-24">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none text-gray-700">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">What Data We Collect</h2>
                <p>
                  When you interact with Build Beyond Studio, we may collect the following information:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Project requirements and scope documents</li>
                  <li>Communication records (emails, chat messages, meeting notes)</li>
                  <li>Website usage data (via analytics)</li>
                  <li>Client information shared for project purposes (under NDA)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">How We Use It</h2>
                <p>
                  Your data is used exclusively for:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Responding to inquiries and providing project quotes</li>
                  <li>Delivering white-label development services</li>
                  <li>Project management and communication</li>
                  <li>Improving our services and website experience</li>
                  <li>Fulfilling legal and contractual obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">NDA Policy</h2>
                <p>
                  Build Beyond Studio treats client confidentiality as paramount. All agency partnerships include:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Signed NDA before project commencement</li>
                  <li>Zero client data sharing with third parties</li>
                  <li>No direct communication between BBS and your end clients</li>
                  <li>Complete IP ownership transfer to your client</li>
                  <li>No BBS branding on deliverables</li>
                  <li>Data deleted after project completion (unless contractually specified)</li>
                </ul>
                <p className="mt-4">
                  Your agency partnership remains invisible. Your clients will never know BBS was involved.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
                <p>
                  If you have questions about this privacy policy or how we handle your data:
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
