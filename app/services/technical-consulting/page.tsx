import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Technical Consulting | Build Beyond Studio',
  description: 'Technical Consulting for Marketing Agencies. We act as your Fractional CTO to help you sell high-ticket retainers.',
}

export default function TechnicalConsultingPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <Header />
      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">Home → Services → Technical Consulting</div>

        {/* 1. Hero Section (Business Outcome) */}
        <h1 className="text-5xl font-bold text-black mb-6">
          Act as a Fractional CTO. Sell High-Ticket Retainers.
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Bring executive-level tech strategy to your clients without hiring a full-time CTO. 
          We provide the roadmap, you bill for the strategy.
        </p>
        <a href="/#contact" className="inline-block text-white px-8 py-3 rounded-lg transition-all font-semibold mb-16" style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow: '0 4px 16px rgba(200,134,10,0.30)' }}>
          Partner With Us
        </a>

        <div className="space-y-12 text-gray-700">
          
          {/* 2. Why Pitch This? */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Why Pitch This?</h2>
            <p className="leading-relaxed mb-4">
              Strategic consulting elevates your agency from a vendor to an indispensable partner. By offering CTO-level guidance, you unlock premium retainers and gain deeper integration into your client's business.
            </p>
          </div>

          {/* 3. The Invisible Process */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">The Invisible Process</h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Audit & Analysis', desc: 'We review the client\'s current tech stack and architecture behind the scenes.' },
                { step: '02', title: 'Strategy Formation', desc: 'We develop a comprehensive roadmap tailored to their business goals.' },
                { step: '03', title: 'White-Label Presentation', desc: 'We provide you with the documentation and insights to present to the client.' },
                { step: '04', title: 'Ongoing Advisory', desc: 'We remain available for continuous technical support and adjustments.' },
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
                { tech: 'Architecture Review', benefit: 'Ensures stability and scalable foundations.' },
                { tech: 'Tech Stack Selection', benefit: 'Future-proofs the client\'s investments.' },
                { tech: 'Security Audits', benefit: 'Protects data and builds trust.' },
                { tech: 'Performance Optimization', benefit: 'Enhances speed and user experience.' },
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
