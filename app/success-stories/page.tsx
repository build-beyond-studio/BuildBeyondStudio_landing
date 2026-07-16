import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Success Stories | Build Beyond Studio',
  description: 'Explore our portfolio of successful software development projects and the impact we have driven for our agency partners.',
}

const CASE_STUDIES = [
  {
    id: 1,
    client: 'Enterprise E-Commerce Agency',
    problem: 'The agency\'s client had a legacy Magento site that kept crashing during flash sales, losing millions in potential revenue.',
    solution: 'We migrated them to a headless Next.js frontend with a robust, auto-scaling Node.js/AWS backend infrastructure.',
    tech: ['Next.js', 'Node.js', 'AWS', 'Kubernetes', 'MongoDB'],
    impact: '0 seconds of downtime during their Black Friday campaign, with a 300% increase in checkout speed.',
  },
  {
    id: 2,
    client: 'Healthcare Marketing Firm',
    problem: 'Needed a HIPAA-compliant patient portal designed and built in under 8 weeks to secure a massive hospital contract.',
    solution: 'Rapid prototyping and deployment of a secure React/Express application with end-to-end encryption.',
    tech: ['React', 'Express', 'PostgreSQL', 'Docker'],
    impact: 'Delivered 1 week ahead of schedule, allowing the agency to secure a 3-year, high-ticket retainer.',
  }
];

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <Header />
      <section className="max-w-6xl mx-auto py-24 px-4 sm:px-6">
        <div className="mb-4 text-sm text-gray-500">Home → Company → Success Stories</div>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-black tracking-[-0.03em] mb-6">
            Proven Results. Silent Execution.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We operate entirely behind the scenes, ensuring our agency partners get the credit for world-class technical execution. Here are a few examples of how we've helped agencies scale and secure enterprise contracts.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="bg-white border border-[rgba(200,134,10,0.15)] rounded-2xl p-8 md:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(200,134,10,0.08)]" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                  <div className="inline-block bg-gradient-to-r from-[#FDF8F0] to-white text-[#C8860A] px-4 py-1.5 rounded-md text-sm font-bold border border-[rgba(200,134,10,0.2)] shadow-sm mb-6">
                    Partner: {study.client}
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-bold text-black mb-2 flex items-center gap-2">
                        <span className="text-[#C8860A]">01</span> The Challenge
                      </h4>
                      <p className="text-gray-600 leading-relaxed pl-7">{study.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-black mb-2 flex items-center gap-2">
                        <span className="text-[#C8860A]">02</span> Our Solution
                      </h4>
                      <p className="text-gray-600 leading-relaxed pl-7">{study.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/3 bg-[#FDF8F0] rounded-xl p-8 border border-[rgba(200,134,10,0.1)] flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {study.tech.map((t, i) => (
                        <span key={i} className="bg-white border border-[rgba(200,134,10,0.15)] text-gray-700 text-xs px-3 py-1 rounded-md shadow-sm font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-[rgba(200,134,10,0.15)] pt-6 mt-auto">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Measurable Impact</h4>
                    <p className="text-[#C8860A] font-bold text-lg leading-snug">
                      {study.impact}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
