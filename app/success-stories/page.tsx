import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Success Stories | Build Beyond Studio',
  description: 'See how elite marketing agencies across India scale operations, expand margins, and eliminate tech overhead with our white-label engineering division.',
}

const CASE_STUDIES = [
  {
    id: 1,
    client: 'Clocked Agency',
    founder: 'Aastha',
    city: 'Delhi',
    resultStat: '+₹90,000/mo Revenue',
    title: 'Scaling Premium Web Development Without Expanding Internal Headcount',
    challenge: 'Clocked Agency was turning away high-paying web development requests due to the risk, time, and overhead of recruiting in-house engineers.',
    solution: 'BBS stepped in as an invisible white-label engineering extension, building custom, responsive websites with absolute QA.',
    quote: 'BBS has been instrumental in helping us deliver premium websites without expanding our internal team. Their professionalism, timely communication, and consistent quality have strengthened both our operations and client trust.',
    photo: 'https://res.cloudinary.com/ds6jbzjy0/image/upload/v1784111689/WhatsApp_Image_2026-07-15_at_3.52.05_PM_1_p0hpg2.jpg',
  },
  {
    id: 2,
    client: 'BVFX Digify',
    founder: 'Aayushman',
    city: 'Bhilai',
    resultStat: '3× Faster Project Delivery',
    title: 'Crushing Launch Deadlines with Coordinated White-Label Sprint Teams',
    challenge: 'BVFX Digify faced bottlenecked development cycles, causing launch delays and risking client satisfaction.',
    solution: 'BBS provided dedicated, agile developers integrated directly into BVFX\'s Slack, enabling rapid two-week sprint execution.',
    quote: 'Working with BBS has significantly improved our project delivery speed. Their development team feels like an extension of our own, helping us deliver quality work faster while maintaining excellent client satisfaction.',
    photo: 'https://res.cloudinary.com/ds6jbzjy0/image/upload/v1784111690/WhatsApp_Image_2026-07-15_at_3.52.05_PM_mpolbe.jpg',
  },
  {
    id: 3,
    client: 'Shivora Media',
    founder: 'Mahi',
    city: 'Bhopal',
    resultStat: '+40% Client Capacity',
    title: 'Eliminating the Tech Overhead to Focus Entirely on Acquisition',
    challenge: 'Shivora Media\'s leadership was bogged down in technical debugging and deployment management, capping their agency\'s growth.',
    solution: 'BBS took 100% ownership of project execution, DevOps, and post-launch maintenance under strict NDA.',
    quote: 'BBS has helped us scale without the hassle of building an in-house development team. Their consistency, communication, and technical expertise have made them a trusted long-term partner for our agency.',
    photo: 'https://res.cloudinary.com/ds6jbzjy0/image/upload/v1784111688/WhatsApp_Image_2026-07-15_at_3.52.05_PM_2_dakvlf.jpg',
  },
  {
    id: 4,
    client: 'TechTasteFood & FranFirst',
    founder: 'Sarthak',
    city: 'New Delhi',
    resultStat: '+₹75,000/mo Net Profit',
    title: 'Securing High-Ticket Client Retainers with Premium Engineering Quality',
    challenge: 'Needed a reliable partner to deliver enterprise-grade performance that commands and retains high-ticket monthly fees.',
    solution: 'Built scalable web assets and custom client dashboards, establishing consistent, transparent project delivery.',
    quote: 'BBS became our reliable technical partner from day one. Their team consistently delivers high-quality work on time, allowing us to focus on client acquisition and scaling our business with confidence.',
    photo: 'https://res.cloudinary.com/ds6jbzjy0/image/upload/v1784111689/WhatsApp_Image_2026-07-15_at_3.52.04_PM_z1hve2.jpg',
  }
];

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20 border-b border-black/5 bg-[#F5F2EC]">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/4 w-[40vw] h-[40vw] rounded-full blur-[120px] -translate-y-1/2" style={{ background: 'rgba(200,134,10,0.04)' }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#C8860A]">Case Studies</div>
          <h1 className="text-4xl sm:text-6xl font-black text-black tracking-[-0.03em] mb-6 leading-[1.1]">
            Proven Results. Silent Execution.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            We operate behind the scenes under strict NDA. Your clients see a premium, flawless build; you capture the expanded margins without the operational liability of local hiring.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12">
          {CASE_STUDIES.map((study, idx) => (
            <div 
              key={study.id} 
              className="bg-white border border-[rgba(200,134,10,0.15)] rounded-2xl p-6 md:p-10 relative overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgba(200,134,10,0.1)]"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.03)' }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#A06A00] to-[#E8A020] opacity-80" />

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                
                {/* Left Side: Result, Title, Challenge & Solution */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header: Result metric and Client Name */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                        <span className="font-semibold text-black">{study.client}</span>
                        <span className="text-gray-300">|</span>
                        <span>{study.founder}</span>
                        <span className="text-gray-300">/</span>
                        <span className="text-xs uppercase tracking-wider font-medium">{study.city}</span>
                      </div>
                      <div className="bg-gradient-to-r from-[#FDF8F0] to-white text-[#C8860A] px-4 py-1.5 rounded-md text-sm font-bold border border-[rgba(200,134,10,0.2)] shadow-sm">
                        {study.resultStat}
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mb-8 leading-tight">
                      {study.title}
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-2 flex items-center gap-2">
                          <span className="text-[#C8860A]">01</span> The Challenge
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-5 font-light">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-2 flex items-center gap-2">
                          <span className="text-[#C8860A]">02</span> The BBS Solution
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-5 font-light">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Verified Testimonial Quote */}
                <div className="lg:w-[380px] bg-[#FDF8F0] rounded-xl p-6 md:p-8 border border-[rgba(200,134,10,0.12)] flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8860A] opacity-[0.02] rounded-full blur-2xl pointer-events-none" />
                  
                  {/* Quote content */}
                  <div className="relative z-10 flex-grow">
                    <svg className="absolute -top-4 -left-3 w-10 h-10 text-[#C8860A] opacity-[0.08]" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10.667 14.667c0-4.418 3.582-8 8-8v-4c-6.627 0-12 5.373-12 12v14.667h12v-14.667h-8zM26.667 14.667c0-4.418 3.582-8 8-8v-4c-6.627 0-12 5.373-12 12v14.667h12v-14.667h-8z"></path>
                    </svg>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed pl-4 pt-2 italic font-light relative z-10">
                      "{study.quote}"
                    </p>
                  </div>

                  {/* Author Meta */}
                  <div className="border-t border-[rgba(200,134,10,0.15)] pt-6 mt-6 flex items-center gap-4 relative z-10">
                    <img 
                      src={study.photo} 
                      alt={study.founder} 
                      className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-white" 
                    />
                    <div>
                      <div className="font-bold text-sm text-black">{study.founder}</div>
                      <div className="text-xs text-gray-500 font-medium">{study.client === 'TechTasteFood & FranFirst' ? 'Founder' : `Founder, ${study.client}`}</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-white border-t border-black/5 py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-4">
            Deliver Enterprise Value Under Your Brand
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto font-light">
            We operate invisibly in your Slack, codebases, and sprint pipelines. Let's discuss a white-label capacity retainer.
          </p>
          <a 
            href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20a%20project%20brief%20with%20Build%20Beyond%20Studio." 
            className="inline-block text-white px-8 py-3.5 rounded-lg transition-all font-semibold"
            style={{ 
              background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', 
              boxShadow: '0 4px 16px rgba(200,134,10,0.30)' 
            }}
          >
            Request white-label partnership
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
