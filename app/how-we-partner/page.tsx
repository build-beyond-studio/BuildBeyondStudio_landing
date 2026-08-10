import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata(
  '/how-we-partner',
  'How We Partner',
  'Visual breakdown of our integration models, agile delivery process, and communication standards for marketing agencies.'
)

export default function HowWePartnerPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20 border-b border-black/5 bg-[#F5F2EC]">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 right-1/4 w-[40vw] h-[40vw] rounded-full blur-[120px] -translate-y-1/2" style={{ background: 'rgba(200,134,10,0.03)' }} />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#C8860A]">Invisible Operations</div>
          <h1 className="text-4xl sm:text-6xl font-black text-black tracking-[-0.04em] mb-6 leading-[1.05]">
            Seamless Integration.<br />Guaranteed Execution.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            We operate as your agency's <Link href="/white-label-web-development" className="text-[#C8860A] font-medium hover:underline">white-label web development</Link> engineering extension. Zero hiring friction, full security, and complete transparency.
          </p>

          {/* Quick TL;DR Visual Badge Row */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {['100% White-Label', 'Strict NDA Protected', 'Direct Slack Integration', 'CTO-Managed QA'].map((badge) => (
              <span 
                key={badge} 
                className="px-4 py-1.5 rounded-full bg-white border border-[rgba(200,134,10,0.2)] text-[12px] font-bold text-[#C8860A] shadow-sm uppercase tracking-wider"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6">
        <div className="space-y-24 text-gray-700">
          
          {/* Section 1: The Visual Handoff & Leverage */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">The Profit Equation</h2>
              <p className="text-gray-500 max-w-xl mx-auto font-light mt-2">
                Eliminate operational liabilities and capture maximum margins on client custom development retainers.
              </p>
            </div>

            {/* Before / After Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative">
              {/* Left Column: The Headache */}
              <div className="bg-red-50/30 border border-red-100 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-red-400" />
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center border border-red-200 shrink-0">
                      <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-black tracking-tight">Your In-House Tech Headaches</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { title: 'Recruiting Friction', desc: 'Sourcing, interviewing, onboarding, and training developers.' },
                      { title: 'Project Launch Delays', desc: 'Capacity ceilings and missed deadlines causing client churn.' },
                      { title: 'DevOps & Debugging Stress', desc: 'Wasting client-facing time managing code crashes or server errors.' },
                      { title: 'Fixed Salaries Liability', desc: 'Paying dev payroll regardless of client project volume fluctuations.' },
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-red-500 font-bold">✕</span>
                        <div>
                          <div className="font-bold text-sm text-black">{item.title}</div>
                          <div className="text-xs text-gray-500 font-light mt-0.5">{item.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: The Leverage */}
              <div className="bg-emerald-50/30 border border-emerald-100 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-emerald-400" />
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center border border-emerald-200 shrink-0">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-black tracking-tight">Your White-Label Profit Leverage</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { title: 'Zero Hiring Liability', desc: 'Access elite software engineers instantly on demand.' },
                      { title: 'Fixed-Price Scopes', desc: 'No budget overflows. Clear project costs mapped out upfront.' },
                      { title: 'CTO-Managed Quality', desc: 'We take 100% ownership of tech architecture, QA, and deployment.' },
                      { title: 'Expanded Recurring Retainers', desc: 'Increase agency revenue by billing high-ticket developer retainers.' },
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <div>
                          <div className="font-bold text-sm text-black">{item.title}</div>
                          <div className="text-xs text-gray-500 font-light mt-0.5">{item.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Full-Width Banner: One Single Connection Step */}
            <div className="bg-[#FDF8F0] border border-[rgba(200,134,10,0.15)] rounded-3xl p-8 md:p-12 mt-12 relative overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-0 bottom-0 right-0 w-1/3 bg-[#C8860A] opacity-[0.02] rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row items-center gap-8 justify-between relative z-10">
                <div className="max-w-xl text-center lg:text-left">
                  <div className="text-[#C8860A] text-xs uppercase tracking-widest font-bold mb-2">How It Works</div>
                  <h3 className="text-2xl md:text-3xl font-black text-black tracking-tight mb-3">One Single Handoff Step</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    Simply share your client project brief, and let BBS handle the complete execution, code architecture, testing, and deployment behind the scenes under strict NDA.
                  </p>
                </div>
                
                {/* Visual Pipeline Loop representing brief to deploy */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 bg-white/60 p-4 border border-[rgba(200,134,10,0.1)] rounded-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-600 bg-white shadow-sm px-3 py-1.5 rounded-lg border border-gray-100 flex items-center gap-1.5 whitespace-nowrap">
                      <span>📝</span> Send Brief
                    </span>
                    <span className="text-gray-400">→</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-800 bg-[#FDF8F0] shadow-sm px-3 py-1.5 rounded-lg border border-[rgba(200,134,10,0.2)] flex items-center gap-1.5 whitespace-nowrap">
                      <span>🛠️</span> BBS Dev & QA
                    </span>
                    <span className="text-gray-400">→</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 shadow-sm px-3 py-1.5 rounded-lg border border-emerald-100 flex items-center gap-1.5 whitespace-nowrap">
                    <span>📈</span> Launch & Profit
                  </span>
                </div>
              </div>

              <div className="border-t border-[rgba(200,134,10,0.12)] pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">No Tech Headache • Save Costs & Time • Earn Extra Revenue</span>
                <a 
                  href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20a%20project%20brief%20with%20Build%20Beyond%20Studio." 
                  className="w-full sm:w-auto text-white text-xs px-6 py-3 rounded-xl transition-all font-semibold uppercase tracking-wider text-center"
                  style={{ 
                    background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', 
                    boxShadow: '0 4px 12px rgba(200,134,10,0.2)' 
                  }}
                >
                  Send Project Brief & Start →
                </a>
              </div>
            </div>

          </div>

          {/* Section 2: Our Development Process */}
          <div>
            <div className="text-center mb-16">
              <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Execution Track</span>
              <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mt-2 mb-4">The Sprint Pipeline</h2>
              <p className="text-gray-500 max-w-2xl mx-auto font-light">
                How client requirements transform into a hardened production deploy, fully visible at every checkpoint.
              </p>
            </div>

            {/* Desktop Timeline Flow Tracker */}
            <div className="hidden md:flex items-stretch justify-between relative mt-12 gap-6">
              {/* Connecting background line */}
              <div className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#A06A00] via-[#C8860A] to-[#E8A020] z-0" />

              {[
                { 
                  step: '01', 
                  title: 'De-risked Scoping', 
                  desc: 'We translate client briefs into clean tech requirements.',
                  pills: ['Architecture Audit', 'Fixed Quotation'] 
                },
                { 
                  step: '02', 
                  title: 'Sprint Handoffs', 
                  desc: 'Continuous bi-weekly sprints with weekly video demos.',
                  pills: ['Loom Walkthroughs', 'Staging Link'] 
                },
                { 
                  step: '03', 
                  title: 'Hardened Deploy', 
                  desc: 'Automated code reviews, QA checklist & launch.',
                  pills: ['Stress & Load Tests', 'Secure Handoff'] 
                }
              ].map((node, i) => (
                <div key={node.step} className="flex-1 flex flex-col items-center text-center relative z-10">
                  {/* Node bubble */}
                  <div className="w-20 h-20 rounded-full bg-[#F5F2EC] border-4 border-white shadow-md flex items-center justify-center mb-6 ring-4 ring-[rgba(200,134,10,0.1)] transition-transform duration-300 hover:scale-105">
                    <span className="text-[#C8860A] font-mono text-xl font-bold">{node.step}</span>
                  </div>
                  
                  <h3 className="font-bold text-black text-lg mb-2">{node.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed max-w-[240px] font-light mb-4">{node.desc}</p>
                  
                  {/* Pill Tags */}
                  <div className="flex flex-col gap-1.5 mt-auto">
                    {node.pills.map(p => (
                      <span key={p} className="bg-[#FDF8F0] border border-[rgba(200,134,10,0.15)] text-[#C8860A] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{p}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Timeline (Vertical) */}
            <div className="md:hidden space-y-8 relative pl-8 before:absolute before:top-2 before:bottom-2 before:left-[15px] before:w-[2px] before:bg-gradient-to-b before:from-[#A06A00] before:to-[#E8A020]">
              {[
                { 
                  step: '01', 
                  title: 'De-risked Scoping', 
                  desc: 'We translate client briefs into clean tech requirements.',
                  pills: ['Architecture Audit', 'Fixed Quotation'] 
                },
                { 
                  step: '02', 
                  title: 'Sprint Handoffs', 
                  desc: 'Continuous bi-weekly sprints with weekly video demos.',
                  pills: ['Loom Walkthroughs', 'Staging Link'] 
                },
                { 
                  step: '03', 
                  title: 'Hardened Deploy', 
                  desc: 'Automated code reviews, QA checklist & launch.',
                  pills: ['Stress & Load Tests', 'Secure Handoff'] 
                }
              ].map((node) => (
                <div key={node.step} className="relative">
                  {/* Mobile bullet */}
                  <div className="absolute -left-[31px] w-8 h-8 rounded-full bg-[#F5F2EC] border-2 border-white shadow-md flex items-center justify-center ring-2 ring-[rgba(200,134,10,0.1)]">
                    <span className="text-[#C8860A] font-mono text-xs font-bold">{node.step}</span>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-black text-base mb-1">{node.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed font-light mb-4">{node.desc}</p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {node.pills.map(p => (
                        <span key={p} className="bg-[#FDF8F0] border border-[rgba(200,134,10,0.15)] text-[#C8860A] px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Transparency Visual Dashboard Grid */}
          <div>
            <div className="text-center mb-16">
              <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest">Attitude</span>
              <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mt-2 mb-4">Zero Developer Black Boxes</h2>
              <p className="text-gray-500 max-w-2xl mx-auto font-light">
                We banish radio silence. We represent project health with dynamic, visual metrics and active async logs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              
              {/* Card 1: Loom Player */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#C8860A] font-bold mb-2">Async Handoffs</div>
                  <h3 className="text-lg font-bold text-black mb-3">Weekly Loom Walkthroughs</h3>
                  <p className="text-gray-500 text-xs font-light leading-relaxed mb-6">
                    Every Friday, you receive a screen-share walkthrough demonstrating active code updates. No reading tickets to see progress.
                  </p>
                </div>

                {/* Visual Loom Player Sim */}
                <div className="w-full aspect-video bg-gray-900 rounded-xl relative overflow-hidden flex items-center justify-center border border-white/5 group shadow-inner">
                  {/* Play symbol */}
                  <div className="w-12 h-12 rounded-full bg-[#C8860A]/90 hover:bg-[#C8860A] transition-all flex items-center justify-center cursor-pointer shadow-lg relative z-20 group-hover:scale-105">
                    <svg className="w-5 h-5 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  {/* Simulated Waveform overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 opacity-60">
                    <span className="w-1.5 h-3 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="w-1.5 h-5 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
                    <span className="w-1.5 h-8 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <span className="w-1.5 h-4 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                    <span className="w-1.5 h-6 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    <span className="text-[9px] text-gray-400 font-mono ml-auto">04:12 HD</span>
                  </div>
                  <div className="absolute top-3 left-4 text-[9px] text-gray-500 uppercase tracking-widest font-mono">BBS_WEEKLY_DEMO_14.mp4</div>
                </div>
              </div>

              {/* Card 2: Interactive-looking Kanban Board */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#C8860A] font-bold mb-2">Live Access</div>
                  <h3 className="text-lg font-bold text-black mb-3">Shared Kanban Sprint Boards</h3>
                  <p className="text-gray-500 text-xs font-light leading-relaxed mb-6">
                    Active access to real-time development boards. See exact task placements, backlog counts, and blockers.
                  </p>
                </div>

                {/* Visual Kanban Board Representation */}
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex gap-3 h-[180px] overflow-hidden">
                  {/* Col 1 */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold border-b border-gray-200 pb-1">Sprint Backlog</div>
                    <div className="bg-white border border-gray-100 rounded-lg p-2 text-[9px] shadow-sm font-medium text-gray-600 border-l-4 border-yellow-500">Schema Injection</div>
                    <div className="bg-white border border-gray-100 rounded-lg p-2 text-[9px] shadow-sm font-medium text-gray-600 border-l-4 border-yellow-500">Meta CAPI setup</div>
                  </div>
                  {/* Col 2 */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="text-[9px] uppercase tracking-wider text-[#C8860A] font-bold border-b border-gray-200 pb-1">In Progress</div>
                    <div className="bg-white border border-gray-100 rounded-lg p-2 text-[9px] shadow-sm font-medium text-gray-800 border-l-4 border-amber-600 animate-pulse">Load Testing</div>
                  </div>
                  {/* Col 3 */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="text-[9px] uppercase tracking-wider text-emerald-500 font-bold border-b border-gray-200 pb-1">Done (QA Passed)</div>
                    <div className="bg-white border border-gray-200 rounded-lg p-2 text-[9px] shadow-sm font-medium text-gray-400 line-through border-l-4 border-emerald-500">Slack Link</div>
                    <div className="bg-white border border-gray-200 rounded-lg p-2 text-[9px] shadow-sm font-medium text-gray-400 line-through border-l-4 border-emerald-500">Vitals Check</div>
                  </div>
                </div>
              </div>

              {/* Card 3: Dedicated TPM liaison */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#C8860A] font-bold mb-2">Human Translation</div>
                  <h3 className="text-lg font-bold text-black mb-3">Dedicated Technical PM</h3>
                  <p className="text-gray-500 text-xs font-light leading-relaxed mb-6">
                    Your liaison who handles the team directly. We translate complex tech updates into straightforward business metrics.
                  </p>
                </div>

                {/* Dedicated PM representation visual */}
                <div className="bg-gradient-to-r from-[#FDF8F0] to-[#FDFDFD] border border-[rgba(200,134,10,0.12)] rounded-xl p-5 flex items-center gap-4 h-[180px]">
                  <div className="w-12 h-12 rounded-full bg-[#C8860A]/10 border border-[#C8860A]/20 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#C8860A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-black">Active Translation Channels</div>
                    <div className="text-[10px] text-gray-500 leading-relaxed font-light">
                      - Complex git refactoring updates transformed into clear feature launch timelines.
                    </div>
                    <div className="text-[10px] text-gray-500 leading-relaxed font-light">
                      - Immediate escalations and blockers flagged via direct Loom rather than text lists.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CTA Bottom Visual */}
      <section className="bg-white border-t border-black/5 py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-4">
            Zero Local Recruiting. Pure Profit expansion.
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Eliminate capacity ceilings and scale your agency with absolute confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://wa.me/917697339962?text=Hi%20Ankush%2C%20I%20would%20like%20to%20discuss%20a%20project%20brief%20with%20Build%20Beyond%20Studio." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white px-8 py-3.5 rounded-lg transition-all font-semibold shadow-md hover:shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', 
                boxShadow: '0 4px 16px rgba(200,134,10,0.30)' 
              }}
            >
              Request white-label partnership
            </a>
            <a 
              href="/success-stories" 
              className="inline-block bg-white text-[#C8860A] border border-[rgba(200,134,10,0.3)] hover:bg-[#FDF8F0] px-8 py-3.5 rounded-lg transition-all font-semibold"
            >
              See Success Stories
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
