import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import { CASE_STUDIES } from './data'

export const metadata: Metadata = buildMetadata(
  '/case-studies',
  'Case Studies',
  'Real results from real agency partners. See how marketing agencies across India scaled operations, boosted revenue, and eliminated tech overhead with Build Beyond Studio.'
)

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Case Studies', path: '/case-studies' },
]);

export default function CaseStudiesIndexPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20 border-b border-black/5 bg-[#F5F2EC]">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/4 w-[40vw] h-[40vw] rounded-full blur-[120px] -translate-y-1/2" style={{ background: 'rgba(200,134,10,0.04)' }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="mb-4 text-sm text-gray-500">
            <Link href="/" className="hover:underline">Home</Link> {' \u2192 '} Case Studies
          </div>
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#C8860A]">Case Studies</div>
          <h1 className="text-3xl sm:text-5xl font-bold text-black mb-6">
            Proven Results. Silent Execution.
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We operate behind the scenes under strict NDA. Your clients see a premium, flawless build; you capture the expanded margins without the operational liability of local hiring.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="bg-white border border-[rgba(200,134,10,0.15)] rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgba(200,134,10,0.1)] hover:-translate-y-1 group flex flex-col"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.03)' }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#A06A00] to-[#E8A020] opacity-80" />

              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                  <span className="font-semibold text-black">{study.client}</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-xs uppercase tracking-wider font-medium">{study.city}</span>
                </div>
                <div className="bg-gradient-to-r from-[#FDF8F0] to-white text-[#C8860A] px-3 py-1 rounded-md text-xs font-bold border border-[rgba(200,134,10,0.2)] shadow-sm">
                  {study.resultStatShort}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-4 leading-tight group-hover:text-[#C8860A] transition-colors">
                {study.title}
              </h2>

              {/* Industry badge */}
              <p className="text-xs font-semibold text-[#C8860A] mb-4 uppercase tracking-wider">{study.industry}</p>

              {/* Challenge preview */}
              <p className="text-gray-600 text-sm leading-relaxed font-light mb-6 flex-grow line-clamp-3">
                {study.challenge}
              </p>

              {/* Quote preview */}
              <div className="bg-[#FDF8F0] rounded-xl p-5 border border-[rgba(200,134,10,0.08)] mb-6">
                <p className="text-gray-600 text-sm leading-relaxed italic font-light line-clamp-2">
                  &ldquo;{study.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={study.photoPath}
                    alt={`${study.founder}, ${study.founderRole} of ${study.client}`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-white"
                  />
                  <div>
                    <div className="font-bold text-xs text-black">{study.founder}</div>
                    <div className="text-[10px] text-gray-500 font-medium">{study.founderRole}, {study.client}</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-black/5 pt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 group-hover:text-[#C8860A] transition-colors">Read full case study</span>
                <svg className="w-4 h-4 text-[#C8860A] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
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
            We operate invisibly in your Slack, codebases, and sprint pipelines. Let&apos;s discuss a white-label capacity retainer.
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
