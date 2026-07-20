import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight } from "lucide-react";

import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import { GENERAL_BENEFITS, COURSES } from "./data";

export const metadata: Metadata = buildMetadata(
  '/training-programs',
  'Training & Internship Programs',
  'Kickstart your software engineering career with ISO Certified courses in HTML, CSS, JavaScript, React, Next.js, and DevOps from BBS Academy.'
);


export default function InternshipProgramsPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <Header />

      {/* ── 1. WHAT YOU GET SECTION (ON TOP OF THE PAGE) ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Subtle glow background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-[#C8860A]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 bg-black/[0.02] text-xs font-bold tracking-widest text-[#C8860A] uppercase mb-4">
              BBS Academy
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-black mb-6">
              What You Get
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed">
              Every internship program is loaded with professional benefits, industry-standard certificates, and placement support.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {GENERAL_BENEFITS.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white p-4 sm:px-6 sm:py-6 rounded-2xl sm:rounded-[24px] border border-black/5 transition-all duration-300 hover:border-[#C8860A]/30 hover:shadow-[0_16px_40px_rgba(200,134,10,0.08)] overflow-hidden flex flex-col h-full justify-between"
              >
                {/* Premium corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-bl from-[#C8860A]/[0.08] to-transparent rounded-bl-full transition-transform duration-500 group-hover:scale-110 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FFFDF8] to-[#FDF4E5] rounded-lg sm:rounded-xl border border-[#C8860A]/10 mb-3 sm:mb-4 shadow-[0_4px_12px_rgba(200,134,10,0.05)] group-hover:shadow-[0_4px_16px_rgba(200,134,10,0.12)] transition-shadow duration-300">
                    <div className="scale-75 sm:scale-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-black text-[13px] sm:text-[17px] tracking-tight mb-1.5 leading-snug">{item.title}</h3>
                  <p className="text-gray-500 text-[10px] sm:text-[13px] leading-relaxed mt-auto hidden sm:block">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. COURSE CARDS GRID (SEEN IN ONE GO) ── */}
      <section className="py-12 md:py-16 bg-white border-y border-black/5 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">Our Internship Programs</h2>
            <p className="text-gray-500 max-w-xl mx-auto font-light text-sm md:text-base">
              Select a course to view details, daily curricula, capstone projects, and checkout details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COURSES.map((course) => {
              return (
                <div
                  key={course.id}
                  className="rounded-2xl border transition-all duration-300 flex flex-col justify-between p-6 border-gray-200 bg-white hover:border-[rgba(200,134,10,0.35)] hover:shadow-[0_8px_24px_rgba(200,134,10,0.08)]"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-bold tracking-widest text-[#C8860A] uppercase bg-[#FDF8F0] px-2.5 py-1 rounded-full border border-[rgba(200,134,10,0.15)]">
                        {course.num}
                      </span>
                      <span className="text-[10px] font-bold text-gray-500 uppercase">
                        {course.badge.includes("•") ? course.badge.split("•")[0].trim() : course.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-black mb-2 tracking-tight leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-gray-500 text-xs italic mb-4">&ldquo;{course.tagline}&rdquo;</p>

                    <div className="space-y-2 border-t border-black/5 pt-4 mb-6 text-xs text-gray-600">
                      <div className="flex justify-between"><span className="text-gray-400">Duration</span><span className="font-semibold text-black">{course.duration}</span></div>
                      <div className="flex justify-between"><span className="text-gray-400">Commitment</span><span className="font-semibold text-black">{course.hours}</span></div>
                      <div className="flex justify-between"><span className="text-gray-400">Level</span><span className="font-semibold text-black">{course.level}</span></div>
                      <div className="flex justify-between"><span className="text-gray-400">Projects</span><span className="font-semibold text-black">{course.projects}</span></div>
                    </div>
                  </div>

                  <div>
                    <div className="border-t border-black/5 pt-4 mb-4 flex justify-between items-baseline">
                      <div>
                        <span className="text-[10px] text-gray-400 line-through block leading-none mb-1">{course.wasPrice}</span>
                        <span className="text-2xl font-black text-black leading-none">{course.price}</span>
                      </div>
                      <span className="text-[10px] text-gray-500 font-medium">{course.emi}</span>
                    </div>

                    <TrackedLink
                      href={`/training-programs/${course.id}`}
                      eventName="view_curriculum_details"
                      eventParams={{ course_name: course.title }}
                      className="w-full py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 bg-[#F5F2EC] text-[#C8860A] hover:bg-[#C8860A] hover:text-white"
                    >
                      View Curriculum Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </TrackedLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* ── 4. COMPARISON TABLE ── */}
      <section className="py-16 md:py-24 bg-white border-b border-black/5 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest block mb-2">At a Glance</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">Which course is right for you?</h2>
            <p className="text-gray-500 max-w-xl mx-auto font-light text-sm md:text-base">
              A side-by-side comparison of the three internship tracks.
            </p>
          </div>

          <div className="w-full pb-4">
            <table className="w-full border-collapse text-left text-[10px] sm:text-sm text-gray-600">
              <thead>
                <tr className="border-b border-black/5 text-[9px] sm:text-xs text-black font-bold uppercase tracking-wider bg-[#FAF8F5]">
                  <th className="p-2 sm:p-4 w-1/4">Feature</th>
                  <th className="p-2 sm:p-4 text-[#C8860A]">Course 01</th>
                  <th className="p-2 sm:p-4 text-[#C8860A]">Course 02</th>
                  <th className="p-2 sm:p-4 text-[#C8860A]">Course 03</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Prior experience", c1: "None", c2: "HTML, CSS, JS", c3: "None" },
                  { name: "Duration", c1: "28 Days", c2: "45 Days", c3: "65 Days" },
                  { name: "Hours per day", c1: "1 Hour", c2: "1.5 Hours", c3: "2 Hours" },
                  { name: "Total Hours", c1: "28 Hours", c2: "67.5 Hours", c3: "130 Hours" },
                  { name: "Tech Covered", c1: "HTML, CSS, JS", c2: "Node, Express, MongoDB, React", c3: "HTML, CSS, JS, Node, Express, MongoDB, React" },
                  { name: "Capstone Project", c1: "DevLinks", c2: "TaskFlow", c3: "NoteNest" },
                  { name: "Live Deployed", c1: "✓ GitHub Pages", c2: "✓ Render + Vercel", c3: "✓ Render + Vercel" },
                  { name: "ISO Certified Certificate", c1: "✓ Yes", c2: "✓ Yes", c3: "✓ Yes" },
                  { name: "Interview Prep PDF", c1: "✓ Front-end", c2: "✓ MERN", c3: "✓ MERN" },
                  { name: "Resume & LinkedIn Review", c1: "—", c2: "✓ Yes", c3: "✓ Yes" },
                  { name: "Placement Support", c1: "—", c2: "✓ Yes", c3: "✓ Yes" },
                  { name: "EMI Options", c1: "₹1,400 × 3", c2: "₹2,000 × 5", c3: "₹2,400 × 5" },
                ].map((row, rIdx) => (
                  <tr key={rIdx} className="border-b border-black/5 hover:bg-gray-50/50">
                    <td className="p-2 sm:p-4 font-semibold text-black bg-white group-hover:bg-gray-50/50 transition-colors">{row.name}</td>
                    <td className="p-2 sm:p-4">{row.c1}</td>
                    <td className="p-2 sm:p-4">{row.c2}</td>
                    <td className="p-2 sm:p-4">{row.c3}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-[#FAF8F5] text-black font-extrabold text-[11px] sm:text-[15px]">
                  <td className="p-2 sm:p-4 bg-[#FAF8F5]">Enrollment Fee</td>
                  <td className="p-2 sm:p-4 text-[#C8860A]">₹3,999</td>
                  <td className="p-2 sm:p-4 text-[#C8860A]">₹8,999</td>
                  <td className="p-2 sm:p-4 text-[#C8860A]">₹11,999</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* ── 5. CTA SECTION ── */}
      <section className="py-20 bg-[#1A0E00] text-white relative overflow-hidden text-center px-4 sm:px-6">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#C8860A]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[#C8860A] text-xs font-bold uppercase tracking-widest block mb-4 font-mono">Start Your Journey</span>
          <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">
            Build something real.<br /><span className="text-[#C8860A]">Starting Day 1.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Enroll in any course and build a live, deployed project by the last day. No experience needed for Course 01 and Course 03. The only requirement is showing up.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
            <TrackedLink
              href="https://wa.me/919301579493?text=Hi%21%20I%20have%20questions%20about%20the%20Internship%20Programs%20at%20Build%20Beyond%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              eventName="whatsapp_click"
              eventParams={{ button_location: 'training_programs_list' }}
              className="inline-block text-white px-8 py-3.5 rounded-lg transition-all font-semibold shadow-md hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)",
                boxShadow: "0 4px 16px rgba(200,134,10,0.30)"
              }}
            >
              Chat With Us on WhatsApp
            </TrackedLink>
          </div>
          <div className="text-xs text-gray-500 max-w-lg mx-auto leading-relaxed">
            Ambikapur, Chhattisgarh, India &middot; buildbeyondstudio.com &middot; hello@buildbeyondstudio.com<br />
            All courses are ISO certified. Prices include lifetime access to recorded lectures and learning materials.
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
