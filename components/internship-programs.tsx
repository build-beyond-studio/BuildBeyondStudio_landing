"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GraduationCap, FileText, Video, Monitor, Rocket, Users, ShieldCheck, Briefcase } from "lucide-react";

const BENEFITS = [
  {
    icon: <img src="/internship_images/iso.png" alt="ISO Certified" className="w-14 h-14 object-contain drop-shadow-sm" />,
    title: "ISO Certified Certificate",
    desc: "Internationally recognised certificate for private-sector employment across India.",
  },
  {
    icon: <img src="/internship_images/interview.png" alt="Interview Prep" className="w-8 h-8 object-contain drop-shadow-sm" />,
    title: "Interview Prep PDF",
    desc: "Curated question bank from real front-end and MERN interviews with full answers.",
  },
  {
    icon: <img src="/internship_images/live.png" alt="Recorded Lectures" className="w-14 h-14 object-contain drop-shadow-sm" />,
    title: "Lifetime Recorded Lectures",
    desc: "Lifetime access to all sessions. Re-watch any lesson at any time on the BBS portal.",
  },
  {
    icon: <img src="/internship_images/learning_portal.png" alt="Learning Portal" className="w-10 h-10 object-cover rounded-md drop-shadow-sm" />,
    title: "Dedicated Learning Portal",
    desc: "Personal login, progress tracking, materials, and assignments in one place.",
  },
  {
    icon: <img src="/internship_images/real-life.png" alt="Real Life Project" className="w-10 h-10 object-contain drop-shadow-sm" />,
    title: "Live Deployed Project",
    desc: "A real deployed website on the internet (like DevLinks, TaskFlow, NoteNest).",
  },
  {
    icon: <img src="/internship_images/community.png" alt="Community Access" className="w-10 h-10 object-contain drop-shadow-sm" />,
    title: "BBS Community Access",
    desc: "Doubt support, peer group, and access to the BBS developer network.",
  },
  {
    icon: <img src="/internship_images/resume.jpg" alt="Resume Review" className="w-10 h-10 object-cover rounded-md drop-shadow-sm" />,
    title: "Resume & LinkedIn Review",
    desc: "Resume review and LinkedIn profile guidance from BBS developers.",
  },
  {
    icon: <img src="/internship_images/placement.png" alt="Placement Support" className="w-10 h-10 object-contain drop-shadow-sm" />,
    title: "Placement Support",
    desc: "Job-readiness mentoring and placement assistance from the BBS team.",
  },
];

export default function InternshipProgramsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="internship-programs"
      className="bg-[#F5F2EC] pt-12 pb-20 md:pt-16 md:pb-32 px-6 border-t border-black/5 relative overflow-hidden"
    >
      {/* Background glow to maintain premium aesthetic */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] rounded-full blur-[140px]" style={{ background: 'rgba(200,134,10,0.04)' }} />
        <div className="absolute bottom-1/3 right-1/4 w-[35vw] h-[35vw] rounded-full blur-[140px]" style={{ background: 'rgba(200,134,10,0.03)' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 bg-black/[0.02] text-xs font-bold tracking-widest text-[#C8860A] uppercase">
              BBS Academy
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-3 md:mb-4">
            Internship & Training Programs
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Learn only what matters through practical-first training. Build a live, deployed capstone project on the internet, secure ISO certified credentials, and jumpstart your developer career.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 md:mb-16 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {BENEFITS.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-4 sm:px-6 sm:py-6 rounded-2xl sm:rounded-[24px] border border-black/5 transition-all duration-300 hover:border-[#C8860A]/30 hover:shadow-[0_16px_40px_rgba(200,134,10,0.08)] overflow-hidden hover:-translate-y-1 flex flex-col h-full justify-between"
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

        {/* Call to action */}
        <div
          className={`text-center transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/training-programs"
            className="inline-flex items-center gap-2 text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg transition-all font-bold text-[12px] sm:text-base hover:shadow-lg justify-center max-w-[95%] text-center"
            style={{
              background: "linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)",
              boxShadow: "0 4px 16px rgba(200,134,10,0.30)",
            }}
          >
            Explore Internship Courses & Curriculum →
          </Link>
        </div>
      </div>
    </section>
  );
}
