"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Application\nDevelopment",
    desc: "Production-ready MERN stack applications built to scale from day one.",
    features: ["MERN Stack", "Scalable Architecture", "Production-Ready"],
    link: "/services/web-applications",
    color: "#C8860A",
  },
  {
    num: "02",
    title: "DevOps &\nDeployment",
    desc: "Docker, CI/CD, cloud deployment, and infrastructure that handles growth.",
    features: ["Docker Setup", "CI/CD Pipeline", "Cloud Deployment"],
    link: "/services/devops",
    color: "#A06A00",
  },
  {
    num: "03",
    title: "White-Label\nSolutions",
    desc: "Build custom applications under your brand. Your reputation, our expertise.",
    features: ["Full IP Rights", "Your Branding", "Complete Ownership"],
    link: "/services/white-label",
    color: "#E8A020",
  },
  {
    num: "04",
    title: "Technical\nConsulting",
    desc: "Strategic guidance on architecture, technology selection, and scalability.",
    features: ["Tech Strategy", "Architecture Review", "Best Practices"],
    link: "/services/consulting",
    color: "#B87800",
  },
];

export default function Services() {
  const targetRef = useRef<HTMLDivElement>(null);

  // Desktop horizontal scroll progress
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // By tracking "start start", the scroll value begins exactly when the section touches the top
    offset: ["start start", "end end"]
  });

  // The buttery-smooth spring physics, matching How It Works section
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 18,
    mass: 1.2,
    restDelta: 0.001,
  });

  // Slide left by ~120vw to reveal the 4 cards. 
  // Container logic: 40vw intro + (35vw * 4 cards) = 180vw content + gaps
  const xDesktop = useTransform(smoothProgress, [0, 1], ["0vw", "-140vw"]);

  return (
    <div id="services">
      {/* ── Desktop Horizontal Scroll Layer ── */}
      <section
        ref={targetRef}
        className="relative hidden lg:block h-[400vh] bg-[#F5F2EC] text-black"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">

          {/* Ambient Glows */}
          <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-1/2 left-[15%] w-[40vw] h-[40vw] rounded-full blur-[140px] -translate-y-1/2" style={{ background: 'rgba(200,134,10,0.06)' }} />
            <div className="absolute top-1/2 right-[10%] w-[35vw] h-[35vw] bg-indigo-900/10 rounded-full blur-[140px] -translate-y-1/2" />
          </div>

          <motion.div
            style={{ x: xDesktop }}
            className="flex gap-16 px-[10vw] relative z-10 items-center h-full pt-10"
          >

            {/* Intro Block (Sticky to left briefly as we scroll) */}
            <div className="w-[45vw] flex-shrink-0 flex flex-col justify-center translate-y-[-5%]">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/5 bg-black/[0.02] backdrop-blur-md mb-8 self-start">
                <span className="w-2 h-2 rounded-full bg-[#C8860A] animate-pulse" />
                <span className="text-[12px] font-bold tracking-[0.15em] text-gray-600 uppercase">What we deliver for your agency</span>
              </div>

              <h2 className="text-[4.5rem] xl:text-[5.5rem] leading-[0.95] font-black tracking-[-0.04em] text-black mb-8">
                Everything your agency<br />needs to <span className="text-gray-400">deliver web projects.</span>
              </h2>
              <p className="text-xl xl:text-2xl text-gray-600 max-w-lg leading-relaxed font-light tracking-wide">
                We handle 100% of the technical work — design, development, DevOps, and maintenance — so you can focus on closing clients and growing your agency.
              </p>
            </div>

            {/* Service Cards Track */}
            <div className="flex gap-8 items-center h-[65vh] pb-10">
              {services.map((svc, i) => {
                // To add organic depth, we give alternating cards a slight Y offset
                const yOffset = i % 2 === 1 ? '40px' : '0px';

                return (
                  <Link
                    key={svc.num}
                    href={svc.link}
                    className="block group w-[34vw] h-full flex-shrink-0 relative outline-none"
                    style={{ transform: `translateY(${yOffset})` }}
                  >
                    <div className="absolute inset-0 bg-white border border-[rgba(200,134,10,0.12)] rounded-[32px] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:border-[rgba(200,134,10,0.30)] hover:shadow-[0_20px_80px_-20px_rgba(200,134,10,0.18)] hover:-translate-y-2" style={{ boxShadow: '0 4px 20px rgba(200,134,10,0.08)' }}>

                      {/* Top Accent Gradient */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(90deg, #A06A00, #C8860A, #E8A020, transparent)" }} />

                      {/* Giant Number Watermark layout */}
                      <div className="absolute -bottom-6 -right-8 text-[14rem] xl:text-[18rem] font-black tracking-tighter text-black/[0.02] group-hover:text-black/[0.04] transition-colors duration-700 select-none pointer-events-none z-0">
                        {svc.num}
                      </div>

                      {/* Content Layout */}
                      <div className="relative z-10 p-10 xl:p-12 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-auto">
                          <h3 className="text-3xl xl:text-4xl font-bold tracking-tight text-black/90 whitespace-pre-line group-hover:text-black transition-colors duration-500 leading-tight">
                            {svc.title}
                          </h3>
                          <div className="w-14 h-14 rounded-full bg-black/[0.02] border border-black/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-black/[0.05] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] backdrop-blur-md">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-black transition-all duration-500 group-hover:rotate-45">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>

                        <div className="mt-auto">
                          <p className="text-gray-600 text-lg xl:text-xl leading-[1.6] mb-8 group-hover:text-gray-800 transition-colors duration-500 font-light">
                            {svc.desc}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {svc.features.map((feat) => (
                              <span key={feat} className="px-4 py-2 rounded-full bg-black/[0.02] border border-black/5 text-[13px] font-medium text-gray-600 group-hover:bg-black/5 group-hover:border-black/10 group-hover:text-black transition-all duration-500">
                                {feat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </Link>
                );
              })}
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── Mobile Vertical Scroll Layer ── */}
      <section id="services-mobile" className="lg:hidden bg-[#F5F2EC] text-black pt-24 pb-20 px-5 sm:px-8 overflow-hidden relative border-t border-black/5">
        {/* Glow */}
        <div className="absolute top-20 left-0 w-full h-[60vh] rounded-full blur-[100px] pointer-events-none -translate-x-1/2" style={{ background: 'rgba(200,134,10,0.06)' }} />

        <div className="relative z-10 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/5 bg-black/[0.02] backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8860A] animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest text-gray-600 uppercase">Capabilities</span>
          </div>

          <h2 className="text-[2.8rem] sm:text-[3.5rem] leading-[1] font-black tracking-[-0.04em] text-black mb-5">
            Elite tech for <br /><span className="text-gray-400">elite brands.</span>
          </h2>
          <p className="text-[17px] text-gray-600 max-w-md leading-relaxed font-light">
            We don't just write code. We architect scalable systems that power your business forward.
          </p>
        </div>

        <div className="flex flex-col gap-6 relative z-10">
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={svc.link}
                className="block group relative bg-white border border-[rgba(200,134,10,0.12)] rounded-[24px] overflow-hidden p-8 transition-colors hover:border-[rgba(200,134,10,0.30)] hover:shadow-[0_12px_36px_rgba(200,134,10,0.14)]" style={{ boxShadow: '0 4px 16px rgba(200,134,10,0.08)' }}
              >
                {/* Mobile top gradient */}
                <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, #A06A00, #C8860A, #E8A020, transparent)" }} />

                {/* Watermark */}
                <div className="absolute -bottom-8 -right-4 text-[10rem] font-black tracking-tighter text-black/[0.015] select-none pointer-events-none">
                  {svc.num}
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black/90">
                      {svc.title.replace('\n', ' ')}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed mb-8">
                    {svc.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {svc.features.slice(0, 2).map((feat) => (
                      <span key={feat} className="px-3 py-1.5 rounded-full bg-black/[0.02] border border-black/5 text-[12px] font-medium text-gray-600">
                        {feat}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-black/70 group-hover:text-black transition-colors">
                    Explore Service
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
