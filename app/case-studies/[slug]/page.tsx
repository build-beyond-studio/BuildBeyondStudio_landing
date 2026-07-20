import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata'
import { CASE_STUDIES } from '../data'

/* ---------- Static params for all 4 case studies ---------- */
export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }))
}

/* ---------- Dynamic metadata ---------- */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const study = CASE_STUDIES.find((cs) => cs.slug === slug)
  if (!study) return {}
  return buildMetadata(
    `/case-studies/${study.slug}`,
    `${study.client} — ${study.resultStat}`,
    `How ${study.client} achieved ${study.resultStat.toLowerCase()} by partnering with Build Beyond Studio for ${study.relatedServiceName.toLowerCase()}.`
  )
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = CASE_STUDIES.find((cs) => cs.slug === slug)
  if (!study) notFound()

  /* ---------- JSON-LD ---------- */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": study.relatedServiceName,
    "serviceType": study.relatedServiceName,
    "provider": {
      "@type": "Organization",
      "name": "Build Beyond Studio",
      "url": "https://buildbeyondstudio.com"
    },
    "areaServed": "IN",
    "description": `How Build Beyond Studio delivered ${study.relatedServiceName.toLowerCase()} for ${study.client}, achieving ${study.resultStat.toLowerCase()}.`
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: study.client, path: `/case-studies/${study.slug}` },
  ])

  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">Home</Link>
          {' → '}
          <Link href="/success-stories" className="hover:underline">Success Stories</Link>
          {' → '}
          <span className="text-gray-700">{study.client}</span>
        </div>

        {/* Header block */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-block bg-gradient-to-r from-[#FDF8F0] to-white text-[#C8860A] px-4 py-1.5 rounded-md text-sm font-bold border border-[rgba(200,134,10,0.2)] shadow-sm">
            {study.resultStat}
          </span>
          <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
            {study.industry}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-black mb-6 tracking-tight leading-tight">
          {study.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-10">
          <span className="font-semibold text-black">{study.client}</span>
          <span className="text-gray-300">|</span>
          <span>{study.founder}, {study.founderRole}</span>
          <span className="text-gray-300">/</span>
          <span className="text-xs uppercase tracking-wider font-medium">{study.city}</span>
        </div>

        <div className="space-y-16 text-gray-700">

          {/* The Challenge */}
          <div>
            <h2 className="uppercase tracking-wide text-sm text-[#C8860A] font-bold mb-4 flex items-center gap-3">
              <span className="text-[#C8860A] font-mono text-lg">01</span> The Challenge
            </h2>
            <p className="leading-relaxed text-base font-light pl-8">
              {study.challenge}
            </p>
          </div>

          {/* What BBS Built */}
          <div>
            <h2 className="uppercase tracking-wide text-sm text-[#C8860A] font-bold mb-4 flex items-center gap-3">
              <span className="text-[#C8860A] font-mono text-lg">02</span> What BBS Built
            </h2>
            <p className="leading-relaxed text-base font-light pl-8">
              {study.solution}
            </p>
            <div className="mt-6 pl-8">
              <Link
                href={`/services/${study.relatedServiceSlug}`}
                className="inline-flex items-center gap-2 text-sm text-[#C8860A] font-semibold hover:underline"
              >
                Learn more about {study.relatedServiceName} →
              </Link>
            </div>
          </div>

          {/* The Outcome */}
          <div>
            <h2 className="uppercase tracking-wide text-sm text-[#C8860A] font-bold mb-4 flex items-center gap-3">
              <span className="text-[#C8860A] font-mono text-lg">03</span> The Outcome
            </h2>
            <p className="leading-relaxed text-base font-light pl-8">
              {study.outcome}
            </p>
            {/* Result highlight card */}
            <div className="mt-6 ml-0 sm:ml-8 bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[rgba(200,134,10,0.12)] flex items-center gap-3 sm:gap-4 w-fit mx-auto sm:mx-0" style={{ boxShadow: '0 4px 16px rgba(200,134,10,0.06)' }}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#A06A00] to-[#E8A020] flex items-center justify-center text-white text-base sm:text-lg font-bold shadow-md">
                ↑
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-black">{study.resultStat}</div>
                <div className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider">Verified result</div>
              </div>
            </div>
          </div>

          {/* Pull-Quote */}
          <div className="bg-[#FDF8F0] rounded-2xl p-8 sm:p-10 border border-[rgba(200,134,10,0.12)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C8860A] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
            <svg className="absolute -top-2 left-4 w-12 h-12 text-[#C8860A] opacity-[0.08]" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10.667 14.667c0-4.418 3.582-8 8-8v-4c-6.627 0-12 5.373-12 12v14.667h12v-14.667h-8zM26.667 14.667c0-4.418 3.582-8 8-8v-4c-6.627 0-12 5.373-12 12v14.667h12v-14.667h-8z"></path>
            </svg>
            <blockquote className="relative z-10">
              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed italic font-light mb-6 pl-4">
                &ldquo;{study.quote}&rdquo;
              </p>
              <footer className="border-t border-[rgba(200,134,10,0.15)] pt-6 flex items-center gap-4">
                <img
                  src={study.photoPath}
                  alt={`${study.founder}, ${study.founderRole} of ${study.client}`}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover shadow-sm ring-2 ring-white"
                />
                <div>
                  <div className="font-bold text-base text-black">{study.founder}</div>
                  <div className="text-sm text-gray-500 font-medium">{study.founderRole}, {study.client}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">{study.city}</div>
                </div>
              </footer>
            </blockquote>
          </div>

        </div>

        {/* CTA Banner */}
        <div className="bg-[#0A0A0A] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-12 text-white relative overflow-hidden mt-12 sm:mt-20 shadow-2xl border border-white/5">
          <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-[#C8860A] rounded-full mix-blend-screen filter blur-[100px] opacity-[0.10] pointer-events-none" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 text-white tracking-tight relative z-10 text-center sm:text-left">
            Want Results Like {study.client}?
          </h2>
          <p className="text-gray-400 text-[13px] sm:text-sm md:text-base mb-6 sm:mb-8 leading-[1.6] sm:leading-relaxed font-light relative z-10 text-center sm:text-left">
            Let&apos;s discuss how Build Beyond Studio can integrate as your invisible development partner. Reach our founder Ankush Kumar Gupta directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-10 w-full sm:w-auto mx-auto justify-center sm:justify-start">
            <a
              href={`https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20read%20the%20${encodeURIComponent(study.client)}%20case%20study.%20I%20would%20like%20to%20discuss%20a%20partnership%20with%20Build%20Beyond%20Studio.`}
              className="flex justify-center bg-[#C8860A] text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-[#A06A00] transition-all font-semibold text-sm sm:text-base"
              style={{ boxShadow: '0 4px 16px rgba(200,134,10,0.25)' }}
            >
              Start a Partnership
            </a>
            <Link
              href="/success-stories"
              className="flex justify-center bg-white/10 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-white/20 transition-all font-semibold border border-white/10 text-sm sm:text-base"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
