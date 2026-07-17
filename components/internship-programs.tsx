"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GraduationCap, FileText, Video, Monitor, Rocket, Users, ShieldCheck, Briefcase } from "lucide-react";

const BENEFITS = [
  {
    icon: <GraduationCap className="w-6 h-6 text-[#C8860A]" />,
    title: "ISO Certified Certificate",
    desc: "Internationally recognised certificate for private-sector employment across India.",
  },
  {
    icon: <FileText className="w-6 h-6 text-[#C8860A]" />,
    title: "Interview Prep PDF",
    desc: "Curated question bank from real front-end and MERN interviews with full answers.",
  },
  {
    icon: <Video className="w-6 h-6 text-[#C8860A]" />,
    title: "Lifetime Recorded Lectures",
    desc: "Lifetime access to all sessions. Re-watch any lesson at any time on the BBS portal.",
  },
  {
    icon: <Monitor className="w-6 h-6 text-[#C8860A]" />,
    title: "Dedicated Learning Portal",
    desc: "Personal login, progress tracking, materials, and assignments in one place.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-[#C8860A]" />,
    title: "Live Deployed Project",
    desc: "A real deployed website on the internet (like DevLinks, TaskFlow, NoteNest).",
  },
  {
    icon: <Users className="w-6 h-6 text-[#C8860A]" />,
    title: "BBS Community Access",
    desc: "Doubt support, peer group, and access to the BBS developer network.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#C8860A]" />,
    title: "Resume & LinkedIn Review",
    desc: "Resume review and LinkedIn profile guidance from BBS developers.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#C8860A]" />,
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
      className="bg-[#F5F2EC] py-20 md:py-32 px-6 border-t border-black/5 relative overflow-hidden"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Internship & Training Programs
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Learn only what matters through practical-first training. Build a live, deployed capstone project on the internet, secure ISO certified credentials, and jumpstart your developer career.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {BENEFITS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[rgba(200,134,10,0.13)] hover:border-[rgba(200,134,10,0.35)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(200,134,10,0.12)] hover:-translate-y-1"
              style={{ boxShadow: '0 4px 14px rgba(200,134,10,0.06)' }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FDF8F0] rounded-xl border border-[rgba(200,134,10,0.15)] mb-4 shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-bold text-black text-[16px] mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
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
            className="inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-lg transition-all font-semibold hover:shadow-lg"
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
