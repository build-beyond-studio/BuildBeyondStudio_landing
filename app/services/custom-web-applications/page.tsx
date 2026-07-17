import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Custom Web Applications | Build Beyond Studio',
  description: 'Custom Web Applications for Marketing Agencies. Build high-retention web assets that keep your clients engaged.',
}

export default function CustomWebApplicationsPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <Header />
      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">Home → Services → Custom Web Applications</div>

        {/* 1. Hero Section (Business Outcome) */}
        <h1 className="text-5xl font-bold text-black mb-6">
          High-Retention Web Assets. Seamless Delivery.
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Build highly-customized, high-retention web platforms and portals that keep your clients engaged and loyal.
        </p>
        <a href="/#contact" className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold mb-16" style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}>
          Partner With Us
        </a>

        <div className="space-y-12 text-gray-700">
          
          {/* 2. Why Pitch This? */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Why Pitch This?</h2>
            <p className="leading-relaxed mb-4">
              Stop turning down lucrative custom development requests. Offering robust web applications allows you to capture lost revenue and lock in clients with sticky digital assets they rely on every day.
            </p>
          </div>

          {/* 3. The Invisible Process */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">The Invisible Process</h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Scope & Proposal', desc: 'You share the brief, and we provide a fixed-price proposal under NDA.' },
                { step: '02', title: 'Architecture & Design', desc: 'We map out the user flow and technical requirements.' },
                { step: '03', title: 'Development & QA', desc: 'We build the application and rigorously test it for quality and security.' },
                { step: '04', title: 'Deployment & Handoff', desc: 'We deploy the app and transfer full IP ownership to you.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 rounded-lg bg-white border border-[rgba(200,134,10,0.12)]" style={{ boxShadow: '0 2px 8px rgba(200,134,10,0.06)' }}>
                  <span className="text-[#C8860A] font-mono text-sm pt-1">{item.step}</span>
                  <div>
                    <div className="font-semibold text-black mb-1">{item.title}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. The Tech Stack (Translated) */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">The Tech Stack</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { tech: 'React / Next.js', benefit: 'Delivers lightning-fast front-end experiences.' },
                { tech: 'Node.js / Express', benefit: 'Powers robust and scalable back-end logic.' },
                { tech: 'MongoDB / PostgreSQL', benefit: 'Ensures secure and flexible data management.' },
                { tech: 'Tailwind CSS', benefit: 'Provides beautiful and highly responsive interfaces.' },
              ].map((item) => (
                <li key={item.tech} className="flex flex-col gap-1 text-sm text-gray-600">
                  <div className="font-semibold text-black"><span className="text-[#C8860A] mr-2">✓</span> {item.tech}</div>
                  <div className="ml-5">{item.benefit}</div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  )
}
