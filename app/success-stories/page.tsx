import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

import { buildMetadata } from '@/lib/metadata'
import { CASE_STUDIES } from '../case-studies/data'
import SuccessStoryCard from './SuccessStoryCard'
import SuccessStoriesCarousel from './SuccessStoriesCarousel'

export const metadata: Metadata = buildMetadata(
  '/success-stories',
  'Success Stories',
  'See how elite marketing agencies across India scale operations, expand margins, and eliminate tech overhead with our white-label engineering division.'
)

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
          <h1 className="text-3xl sm:text-5xl font-bold text-black mb-6">
            Proven Results. Silent Execution.
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We operate behind the scenes under strict NDA. Your clients see a premium, flawless build; you capture the expanded margins without the operational liability of local hiring.
          </p>
        </div>
      </section>

      {/* Case Studies Grid (Mobile & Tablet) */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:hidden">
        <div className="grid grid-cols-1 gap-12">
          {CASE_STUDIES.map((study, idx) => (
            <SuccessStoryCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      {/* Case Studies Carousel (Desktop) */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 hidden lg:block relative">
        <SuccessStoriesCarousel studies={CASE_STUDIES} />
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
