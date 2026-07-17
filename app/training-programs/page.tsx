"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { GraduationCap, FileText, Video, Monitor, Rocket, Users, ShieldCheck, Briefcase, Calendar, Clock, ArrowRight, Check, Star, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef } from "react";

const GENERAL_BENEFITS = [
  {
    icon: <GraduationCap className="w-6 h-6 text-[#C8860A]" />,
    title: "ISO Certified Certificate",
    desc: "Internationally recognised certificate for private-sector employment across India.",
  },
  {
    icon: <FileText className="w-6 h-6 text-[#C8860A]" />,
    title: "MERN Interview Prep PDF",
    desc: "Curated question bank from real front-end and MERN interviews with full answers.",
  },
  {
    icon: <Video className="w-6 h-6 text-[#C8860A]" />,
    title: "Recorded Sessions",
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
    title: "BBS Developer Network",
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

const COURSES = [
  {
    id: "course-1",
    num: "Course 01",
    badge: "Beginner",
    title: "HTML + CSS + JavaScript in 28 Days",
    tagline: "From zero to a live website in four weeks.",
    duration: "28 Days",
    hours: "1 Hour / Day",
    level: "No Prior Experience",
    projects: "1 Live Project",
    wasPrice: "₹5,999",
    price: "₹3,999",
    emi: "or ₹1,400/mo × 3",
    color: "#C8860A",
    waMessage: "Hi! I'd like to enroll in Course 01 (HTML + CSS + JS in 28 Days).",
    stats: [
      { v: "28", l: "Total days of learning" },
      { v: "4", l: "Learning phases" },
      { v: "28", l: "Recorded sessions" },
      { v: "1", l: "Live deployed project" },
    ],
    phases: [
      {
        num: "Phase 01",
        days: "Days 1–7",
        sub: "7 hours total",
        name: "HTML — Structure First",
        topics: ["HTML boilerplate", "h1–h6, p, br, strong, em", "Links & images", "Lists & navigation", "Divs & containers", "Semantic tags", "Forms, inputs, buttons"],
        build: "A fully semantic static profile page with contact form",
      },
      {
        num: "Phase 02",
        days: "Days 8–14",
        sub: "7 hours total",
        name: "CSS — Make It Look Real",
        topics: ["Box model", "Colors & Google Fonts", "Selectors & specificity", "Flexbox (full)", "CSS Grid", "Media queries & responsive", "CSS variables & transitions"],
        build: "A responsive styled landing page — hero, cards, footer",
      },
      {
        num: "Phase 03",
        days: "Days 15–21",
        sub: "7 hours total",
        name: "JavaScript — Make It Respond",
        topics: ["let & const", "Functions & logic", "DOM manipulation", "Events (click, input, keydown)", "Arrays & loops", "Objects & JSON", "Fetch API & async/await", "localStorage"],
        build: "Interactive to-do list with persistence across refresh",
      },
      {
        num: "Phase 04",
        days: "Days 22–28",
        sub: "7 hours total",
        name: "Capstone Build — DevLinks",
        topics: ["Semantic HTML scaffold", "CSS variables theme", "Responsive layout", "Dark/light mode toggle", "Copy-link button (JS)", "Visit counter (localStorage)", "GitHub Pages deployment"],
        build: "DevLinks — a personal link-in-bio page live on the internet",
      },
    ],
    capstone: {
      title: "DevLinks — Personal Link-in-Bio Page",
      desc: "A fully functional, mobile-responsive personal page where students showcase their profile, social links, and bio. Students walk away with a real URL they can share with anyone — a portfolio piece from Day 28.",
      deploy: "GitHub Pages",
      techs: ["Semantic HTML5", "CSS Custom Properties", "Flexbox Layout", "Responsive Design", "Dark / Light Mode Toggle", "JavaScript DOM", "localStorage", "Copy-Link Button", "Free Hosting — GitHub Pages"],
    }
  },
  {
    id: "course-2",
    num: "Course 02",
    badge: "Intermediate • Highly Recommended",
    title: "MERN Stack in 45 Days",
    tagline: "Full-stack developer. 45 days. Deployed on Day 45.",
    duration: "45 Days",
    hours: "1.5 Hours / Day",
    level: "Knows HTML CSS JS",
    projects: "Full Stack Live App",
    wasPrice: "₹14,999",
    price: "₹8,999",
    emi: "or ₹2,000/mo × 5",
    color: "#C8860A",
    waMessage: "Hi! I'd like to enroll in Course 02 (MERN Stack in 45 Days).",
    stats: [
      { v: "45", l: "Total learning days" },
      { v: "6", l: "Technology phases" },
      { v: "45", l: "Recorded sessions" },
      { v: "1", l: "Full-stack app, live deployed" },
    ],
    phases: [
      {
        num: "Phase 01",
        days: "Days 1–8",
        sub: "Node.js",
        name: "Node.js — JS Outside the Browser",
        topics: ["Node runtime vs browser", "CommonJS modules", "npm & package.json", "fs & path modules", "Raw http server", "async/await in Node", "dotenv & config", "Error handling"],
        build: "Raw Node HTTP server handling 3 routes + .env config",
      },
      {
        num: "Phase 02",
        days: "Days 9–18",
        sub: "Express.js",
        name: "Express.js — Real API Architecture",
        topics: ["Express setup & routing", "req.params / query / body", "Middleware & next()", "Router files", "REST API design", "Error handling middleware", "CORS", "File uploads (Multer)", "Request validation"],
        build: "Complete REST API for Users + Products — 10 endpoints",
      },
      {
        num: "Phase 03",
        days: "Days 19–26",
        sub: "MongoDB",
        name: "MongoDB + Mongoose — Persistent Data",
        topics: ["MongoDB Atlas setup", "mongoose.connect()", "Schema & Model", "CRUD with Mongoose", "Schema validation", "populate() for relations", "Filter / sort / paginate", "Aggregation basics"],
        build: "API now persists to MongoDB Atlas — real data, real cloud",
      },
      {
        num: "Phase 04",
        days: "Days 27–32",
        sub: "Auth / JWT",
        name: "Authentication — JWT + bcrypt",
        topics: ["Sessions vs JWT", "bcrypt hashing", "Register & login endpoints", "jwt.sign() & verify()", "Auth middleware", "User-owned resources"],
        build: "Full auth system — register, login, JWT, protected routes",
      },
      {
        num: "Phase 05",
        days: "Days 33–40",
        sub: "React",
        name: "React — Frontend That Talks to Your API",
        topics: ["Vite setup (not CRA)", "Components & props", "useState & useEffect", "React Router v6", "Context API (AuthContext)", "Axios + interceptors", "Form handling"],
        build: "React frontend fetching from your own Express API with auth",
      },
      {
        num: "Phase 06",
        days: "Days 41–45",
        sub: "Deploy",
        name: "Capstone Build + Deploy — Ship It",
        topics: ["Auth UI end-to-end", "Task CRUD frontend", "API integration", "Deploy backend to Render", "Deploy frontend to Vercel", "CORS for production", "Env vars in production"],
        build: "TaskFlow — live full-stack app, shareable URL on Day 45",
      },
    ],
    capstone: {
      title: "TaskFlow — Full Stack Task Manager",
      desc: "A production-style task management app with JWT authentication, MongoDB persistence, protected React routes, and full CRUD. Backend on Render, frontend on Vercel. A real full-stack application students can add to their portfolio immediately.",
      deploy: "Render + Vercel",
      techs: ["Node.js", "Express REST API", "MongoDB Atlas", "Mongoose", "JWT Auth", "bcrypt", "React + Vite", "React Router v6", "Axios", "Context API", "Render (backend)", "Vercel (frontend)"],
    }
  },
  {
    id: "course-3",
    num: "Course 03",
    badge: "Absolute Beginner",
    title: "Zero to MERN in 65 Days",
    tagline: "No experience needed. Full-stack developer by Day 65.",
    duration: "65 Days",
    hours: "2 Hours / Day",
    level: "No Prior Experience",
    projects: "Full Stack + Deployed",
    wasPrice: "₹19,999",
    price: "₹11,999",
    emi: "or ₹2,400/mo × 5",
    color: "#C8860A",
    waMessage: "Hi! I'd like to enroll in Course 03 (Zero to MERN in 65 Days).",
    stats: [
      { v: "65", l: "Total learning days" },
      { v: "9", l: "Distinct learning phases" },
      { v: "65", l: "Recorded sessions" },
      { v: "1", l: "Full-stack app, live deployed" },
    ],
    phases: [
      {
        num: "Phase 01",
        days: "Days 1–7",
        sub: "HTML",
        name: "HTML — Building the Skeleton",
        topics: ["Boilerplate & browser", "Text & headings", "Links & images", "Lists & nav", "Divs & semantic HTML", "Forms & inputs", "Tables (data only)"],
        build: "Semantic static recipe page — all HTML, no styling yet",
      },
      {
        num: "Phase 02",
        days: "Days 8–16",
        sub: "CSS",
        name: "CSS — Styling, Layout, Responsive",
        topics: ["Box model", "Typography & Google Fonts", "Selectors & specificity", "Flexbox", "CSS Grid", "Media queries", "CSS variables", "Transitions"],
        build: "Responsive landing page — hero, 3 feature cards, fully mobile ready",
      },
      {
        num: "Phase 03",
        days: "Days 17–27",
        sub: "JavaScript",
        name: "JavaScript — Logic, DOM, APIs",
        topics: ["Variables & types", "Functions & arrow fns", "DOM manipulation", "Events", "Arrays & loops", "Objects & JSON", "Fetch & async/await", "localStorage", "ES6 modules", "Classes", "Git & GitHub basics"],
        build: "Persistent to-do list + public GitHub repos pushed",
      },
      {
        num: "Phase 04",
        days: "Days 28–34",
        sub: "Node.js",
        name: "Node.js — Servers and Modules",
        topics: ["Node runtime", "require & module.exports", "npm & nodemon", "fs module", "Raw http server", "dotenv", "Error handling"],
        build: "CLI tool + raw Node server with .env config",
      },
      {
        num: "Phase 05",
        days: "Days 35–44",
        sub: "Express.js",
        name: "Express.js — Full REST API",
        topics: ["Express routing", "Middleware", "Router files", "REST API design", "Error middleware", "CORS", "Validation", "Multer uploads"],
        build: "10-endpoint REST API for Users + Products",
      },
      {
        num: "Phase 06",
        days: "Days 45–52",
        sub: "MongoDB",
        name: "MongoDB + Mongoose — Cloud Database",
        topics: ["Atlas free cluster", "Mongoose connect", "Schema & Model", "CRUD operations", "Validation & defaults", "populate()", "Filter / sort / paginate", "Aggregation basics"],
        build: "API now persists to MongoDB Atlas — no more in-memory data",
      },
      {
        num: "Phase 07",
        days: "Days 53–57",
        sub: "Auth / JWT",
        name: "JWT Authentication — Real Login System",
        topics: ["Sessions vs JWT", "bcrypt hashing", "Register & login endpoints", "jwt.sign() & verify()", "Auth middleware", "User-owned resources"],
        build: "Complete register/login system with protected note routes",
      },
      {
        num: "Phase 08",
        days: "Days 58–63",
        sub: "React",
        name: "React — Frontend Connected to Your API",
        topics: ["Vite setup", "Components & props", "useState & useEffect", "React Router v6", "AuthContext", "Axios + token interceptor", "Form submission"],
        build: "React frontend wired to Express API — login & notes working",
      },
      {
        num: "Phase 09",
        days: "Days 64–65",
        sub: "Deploy",
        name: "Deploy — Put It on the Internet",
        topics: ["Push to GitHub", "Deploy backend to Render", "Deploy frontend to Vercel", "CORS in production", "Environment variables"],
        build: "NoteNest — live full-stack app on the internet, Day 65",
      },
    ],
    capstone: {
      title: "NoteNest — Full Stack Notes App",
      desc: "A complete full-stack notes application. Users register, log in, and manage their own personal notes. JWT protects all routes. MongoDB stores all data. React handles the frontend. Deployed live and fully functional by Day 65 — a real portfolio piece.",
      deploy: "Render + Vercel",
      techs: ["HTML + CSS + JS", "Node.js", "Express REST API", "MongoDB Atlas", "Mongoose", "JWT Auth", "bcrypt", "React + Vite", "React Router v6", "Axios", "Context API", "Render + Vercel"],
    }
  }
];

export default function InternshipProgramsPage() {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const detailSectionRef = useRef<HTMLDivElement>(null);

  const handleSelectCourse = (courseId: string) => {
    if (selectedCourseId === courseId) {
      setSelectedCourseId(null);
    } else {
      setSelectedCourseId(courseId);
      // Smooth scroll to the details block once it opens
      setTimeout(() => {
        detailSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const activeCourse = COURSES.find(c => c.id === selectedCourseId);

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
            <h1 className="text-3xl md:text-5xl font-black text-black tracking-tight mb-4">
              What You Get
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto font-light">
              Every internship program is loaded with professional benefits, industry-standard certificates, and placement support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GENERAL_BENEFITS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[rgba(200,134,10,0.12)] hover:border-[rgba(200,134,10,0.30)] transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(200,134,10,0.06)]"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FDF8F0] rounded-xl border border-[rgba(200,134,10,0.12)] mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-bold text-black text-[15px] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
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
              const isSelected = selectedCourseId === course.id;
              return (
                <div
                  key={course.id}
                  onClick={() => handleSelectCourse(course.id)}
                  className={`cursor-pointer rounded-2xl border transition-all duration-300 flex flex-col justify-between p-6 ${
                    isSelected
                      ? "border-[#C8860A] bg-[#FFFDF8] shadow-[0_12px_32px_rgba(200,134,10,0.15)] ring-1 ring-[#C8860A]"
                      : "border-gray-200 bg-white hover:border-[rgba(200,134,10,0.35)] hover:shadow-[0_8px_24px_rgba(200,134,10,0.08)]"
                  }`}
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

                    <button
                      type="button"
                      className={`w-full py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        isSelected
                          ? "bg-[#C8860A] text-white"
                          : "bg-[#F5F2EC] text-[#C8860A] hover:bg-[#C8860A] hover:text-white"
                      }`}
                    >
                      {isSelected ? "Hide Curriculum Details" : "View Curriculum Details"}
                      {isSelected ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. DETAILED COURSE DRAWER / VIEW ── */}
      <div ref={detailSectionRef} className="bg-[#FAF8F5]">
        {activeCourse && (
          <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto animate-fade-in">
            <div className="bg-white rounded-3xl border border-[#C8860A]/20 shadow-xl overflow-hidden">
              {/* Detail Header */}
              <div className="p-8 md:p-10 bg-gradient-to-br from-[#FFFDF9] to-[#F5F2EC] border-b border-black/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#C8860A]/10 border border-[#C8860A]/20 text-xs font-bold text-[#C8860A] uppercase tracking-wider mb-2">
                    {activeCourse.num} Detail Sheet
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-black tracking-tight">{activeCourse.title}</h2>
                </div>
                <div className="flex gap-3 shrink-0">
                  <a
                    href={`https://wa.me/919301579493?text=${encodeURIComponent(activeCourse.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#A06A00] to-[#C8860A] text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all flex items-center gap-1.5"
                  >
                    Enroll via WhatsApp <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedCourseId(null)}
                    className="p-2.5 rounded-lg border border-gray-200 text-gray-500 hover:text-black hover:bg-gray-50"
                    aria-label="Close details"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 border-b border-black/5 bg-[#FFFDFB]">
                {activeCourse.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="p-5 border-r border-black/5 last:border-r-0 text-center">
                    <span className="text-2xl md:text-3xl font-black text-black block mb-0.5">{stat.v}</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{stat.l}</span>
                  </div>
                ))}
              </div>

              {/* Curriculum Phases */}
              <div className="p-8 md:p-10">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#C8860A] border-b border-black/5 pb-3 mb-6">
                  Curriculum &amp; Timeline Detailed Breakdown
                </h3>
                <div className="space-y-6">
                  {activeCourse.phases.map((phase, pIdx) => (
                    <div key={pIdx} className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-8 border-b border-black/5 pb-6 last:border-0 last:pb-0">
                      <div className="border-r-0 md:border-r border-black/5 pr-0 md:pr-4">
                        <span className="text-xs font-bold text-[#C8860A] uppercase tracking-wider block mb-1">{phase.num}</span>
                        <span className="text-lg font-black text-black block mb-0.5">{phase.days}</span>
                        <span className="text-xs text-gray-400 font-medium">{phase.sub}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-black text-[15px] mb-2">{phase.name}</h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {phase.topics.map((topic, tIdx) => (
                            <span key={tIdx} className="bg-[#F5F2EC] border border-black/5 px-2.5 py-0.5 rounded-full text-xs text-gray-600 font-medium">
                              {topic}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500">
                          <strong className="text-black font-semibold">Outcome: </strong> {phase.build}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capstone Block */}
              <div className="p-8 md:p-10 bg-[#FFFDFB] border-t border-black/5">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#C8860A]/10 text-xs font-bold text-[#C8860A] uppercase tracking-wide mb-1">
                      Capstone Project
                    </span>
                    <h4 className="text-lg font-extrabold text-black">{activeCourse.capstone.title}</h4>
                  </div>
                  <span className="bg-white border border-[#C8860A]/30 text-[#C8860A] px-3.5 py-1 rounded-full text-xs font-bold shadow-sm">
                    🌐 Live on {activeCourse.capstone.deploy}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">{activeCourse.capstone.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {activeCourse.capstone.techs.map((tech, tIdx) => (
                    <span key={tIdx} className="bg-white border border-black/5 px-2.5 py-0.5 rounded-full text-xs text-gray-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

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

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm text-gray-600">
              <thead>
                <tr className="border-b border-black/5 text-xs text-black font-bold uppercase tracking-wider bg-[#FAF8F5]">
                  <th className="p-4 w-1/4">Feature</th>
                  <th className="p-4 text-[#C8860A]">Course 01</th>
                  <th className="p-4 text-[#C8860A]">Course 02</th>
                  <th className="p-4 text-[#C8860A]">Course 03</th>
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
                    <td className="p-4 font-semibold text-black">{row.name}</td>
                    <td className="p-4">{row.c1}</td>
                    <td className="p-4">{row.c2}</td>
                    <td className="p-4">{row.c3}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-[#FAF8F5] text-black font-extrabold text-[15px]">
                  <td className="p-4">Enrollment Fee</td>
                  <td className="p-4 text-[#C8860A]">₹3,999</td>
                  <td className="p-4 text-[#C8860A]">₹8,999</td>
                  <td className="p-4 text-[#C8860A]">₹11,999</td>
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
            <a
              href="https://wa.me/919301579493?text=Hi%21%20I%20have%20questions%20about%20the%20Internship%20Programs%20at%20Build%20Beyond%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white px-8 py-3.5 rounded-lg transition-all font-semibold shadow-md hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)",
                boxShadow: "0 4px 16px rgba(200,134,10,0.30)"
              }}
            >
              Chat With Us on WhatsApp
            </a>
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
