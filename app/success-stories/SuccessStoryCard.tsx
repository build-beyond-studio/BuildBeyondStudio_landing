'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CaseStudy } from '../case-studies/data'

export default function SuccessStoryCard({ study }: { study: CaseStudy }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="bg-white border border-[rgba(200,134,10,0.15)] rounded-2xl p-6 md:p-10 relative overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgba(200,134,10,0.1)] group"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.03)' }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#A06A00] to-[#E8A020] opacity-80" />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
        
        {/* Left Side: Result, Title, Challenge & Solution */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Header: Result metric and Client Name (Always visible) */}
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

            {/* Title (Always visible) */}
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mb-8 leading-tight">
              {study.title}
            </h2>

            {/* Expandable Content (Hidden on mobile by default) */}
            <div className={`space-y-6 ${isExpanded ? 'block' : 'hidden md:block'}`}>
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

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-4 items-start">
              
              {/* Read more button (Mobile only) */}
              <button 
                onClick={() => setIsExpanded(true)}
                className={`md:hidden ${isExpanded ? 'hidden' : 'inline-flex'} items-center gap-2 text-sm text-[#C8860A] font-semibold`}
              >
                Read more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Read full case study link (Desktop always, Mobile when expanded) */}
              <Link
                href={`/case-studies/${study.slug}`}
                className={`${isExpanded ? 'inline-flex' : 'hidden md:inline-flex'} items-center gap-2 text-sm text-[#C8860A] font-semibold hover:underline group-hover:gap-3 transition-all`}
              >
                Read full case study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              {/* Show less button (Mobile only, when expanded) */}
              <button 
                onClick={() => setIsExpanded(false)}
                className={`md:hidden ${isExpanded ? 'inline-flex' : 'hidden'} items-center gap-2 text-sm text-gray-500 font-semibold`}
              >
                Show less
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Verified Testimonial Quote (Always visible) */}
        <div className="lg:w-[380px] bg-[#FDF8F0] rounded-xl p-6 md:p-8 border border-[rgba(200,134,10,0.12)] flex flex-col justify-between relative overflow-hidden mt-8 lg:mt-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8860A] opacity-[0.02] rounded-full blur-2xl pointer-events-none" />

          {/* Quote content */}
          <div className="relative z-10 flex-grow">
            <svg className="absolute -top-4 -left-3 w-10 h-10 text-[#C8860A] opacity-[0.08]" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10.667 14.667c0-4.418 3.582-8 8-8v-4c-6.627 0-12 5.373-12 12v14.667h12v-14.667h-8zM26.667 14.667c0-4.418 3.582-8 8-8v-4c-6.627 0-12 5.373-12 12v14.667h12v-14.667h-8z"></path>
            </svg>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed pl-4 pt-2 italic font-light relative z-10">
              &ldquo;{study.quote}&rdquo;
            </p>
          </div>

          {/* Author Meta */}
          <div className="border-t border-[rgba(200,134,10,0.15)] pt-6 mt-6 flex items-center gap-4 relative z-10">
            <img
              src={study.photoPath}
              alt={`${study.founder}, ${study.founderRole} of ${study.client}`}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-white"
            />
            <div>
              <div className="font-bold text-sm text-black">{study.founder}</div>
              <div className="text-xs text-gray-500 font-medium">{study.founderRole}, {study.client}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
