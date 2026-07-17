import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'How We Partner | Build Beyond Studio',
  description: 'Learn how our partnership models work. Seamless integration, total transparency, and agile development for marketing agencies.',
}

export default function HowWePartnerPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <Header />
      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">Home → Company → How We Partner</div>

        {/* Hero Section */}
        <h1 className="text-5xl font-bold text-black mb-6">
          Seamless Partnership. Total Transparency.
        </h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          How we integrate with your agency to deliver world-class software without the overhead of an in-house team.
        </p>

        <div className="space-y-16 text-gray-700">
          
          {/* Section 1: Our Engagement Models */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">Our Engagement Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-[rgba(200,134,10,0.15)] rounded-2xl p-8" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                <h3 className="text-xl font-bold text-black mb-3 text-[#C8860A]">Dedicated Team Retainer</h3>
                <p className="text-gray-600 leading-relaxed">
                  A fixed monthly retainer providing you with dedicated engineers integrated into your Slack or Jira. Perfect for ongoing product development and scaling agencies with continuous technical needs.
                </p>
              </div>
              <div className="bg-white border border-[rgba(200,134,10,0.15)] rounded-2xl p-8" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                <h3 className="text-xl font-bold text-black mb-3 text-[#C8860A]">Project-Based (White-Label)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fixed-scope, fixed-price delivery under a strict NDA. You own the client relationship and present the work as your own; we handle the complete technical execution in the background.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Our Development Process */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">Our Development Process (The Agile Way)</h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Discovery & Architecture', desc: 'Mapping the technical requirements, scoping out potential bottlenecks, and finalizing the exact tech stack required for success.' },
                { step: '02', title: 'Sprints & Development', desc: 'Two-week agile sprints with visible progress and iterative feedback. You are never left in the dark about the state of the build.' },
                { step: '03', title: 'QA & Deployment', desc: 'Rigorous security audits and performance testing before pushing the application to production infrastructure.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 p-6 rounded-2xl bg-white border border-[rgba(200,134,10,0.12)] transition-all hover:shadow-[0_8px_30px_rgba(200,134,10,0.08)]" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
                  <span className="text-[#C8860A] font-mono text-lg font-bold pt-1">{item.step}</span>
                  <div>
                    <div className="font-bold text-black text-lg mb-2">{item.title}</div>
                    <div className="text-gray-600 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Client Communication & Transparency */}
          <div className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] rounded-2xl p-10 text-white relative overflow-hidden shadow-2xl">
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
            
            <h2 className="text-3xl font-bold mb-4 relative z-10 text-[#FDF8F0]">Client Communication & Transparency</h2>
            <p className="text-gray-300 text-lg leading-relaxed relative z-10 max-w-2xl">
              We believe in zero black boxes. When you partner with us, you get access to a shared project board, weekly async video updates, and a dedicated technical account manager to ensure complete visibility throughout the project lifecycle.
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  )
}
