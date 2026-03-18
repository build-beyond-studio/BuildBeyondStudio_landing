'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
import { 
  Zap, Shield, Smartphone, Layers, ArrowRight,
  CheckCircle2, Rocket, Briefcase, Building2,
  Code2
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function WebApplicationsService() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Web Application Development',
    'description': 'Production-ready MERN stack web applications built to scale for startups and agencies',
    'provider': {
      '@type': 'Organization',
      'name': 'Build Beyond Studio',
      'url': 'https://buildbeyondstudio.com'
    },
    'areaServed': 'Worldwide',
    'serviceType': 'Web Application Development'
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How long does web application development take?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Most web applications take 6–8 weeks from discovery to launch depending on scope and complexity.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What if we need to scale later? Will your web application handle it?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. We architect for scale from day one using robust MERN infrastructure that handles immense growth.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you offer white-label services for agencies?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Absolutely. We build under your brand with complete confidentiality. You own the code and IP entirely.'
        }
      }
    ]
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: "Blazing Fast",
      desc: "Optimized architectures that load instantly and perform seamlessly under heavy traffic."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Bank-Grade Security",
      desc: "Built with industry best practices, encrypted data protocols, and strict vulnerability testing."
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      title: "Clean Architecture",
      desc: "Maintainable, perfectly documented codebases your team can actually understand."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-400" />,
      title: "Mobile First",
      desc: "Flawless responsive experiences across every possible device and resolution."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Plan & Architect",
      desc: "We analyze requirements, structure schemas, and create a solid technical blueprint."
    },
    {
      step: "02",
      title: "Build & Test",
      desc: "Agile 2-week sprints delivering functional modules with rigorous quality assurance."
    },
    {
      step: "03",
      title: "Launch & Scale",
      desc: "Seamless deployment, comprehensive training, and proactive infrastructure monitoring."
    }
  ];

  const useCases = [
    {
      icon: <Rocket className="w-8 h-8 mb-4 text-blue-500" />,
      title: "Ambitious Startups",
      desc: "Launch an MVP that won't need to be rewritten a year later."
    },
    {
      icon: <Briefcase className="w-8 h-8 mb-4 text-purple-500" />,
      title: "Digital Agencies",
      desc: "Expand your technical offerings with our invisible white-label delivery."
    },
    {
      icon: <Building2 className="w-8 h-8 mb-4 text-emerald-500" />,
      title: "Modern Enterprises",
      desc: "Replace clunky legacy systems with sleek, custom internal tools."
    }
  ];

  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      <div className="bg-[#050505] overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative min-h-[90svh] flex items-center pt-32 pb-16 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505] pointer-events-none" />
          
          <div className="max-w-5xl mx-auto w-full relative z-10">
            <motion.div 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="flex flex-col items-center text-center gap-6"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">MERN Stack Experts</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
                Web Applications <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                  That Scale With You.
                </span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed">
                No tech jargon—just fast, secure, and beautiful platforms that drive results. We build production-grade applications allowing you to focus on your business.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="https://wa.me/919301579493" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 cursor-pointer">
                  Start Your Project <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#process" className="inline-flex items-center justify-center bg-[#0c0c0e] border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all cursor-pointer">
                  See Our Process
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* BENTO GRID FEATURES */}
        <section className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp} className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Build Beyond Way</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">We don't just write code. We engineer high-performance assets that become your competitive advantage.</p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feat, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="bg-[#0c0c0e] border border-white/5 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {feat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section id="process" className="py-24 px-6 relative bg-gradient-to-b from-[#0c0c0e] to-[#050505] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A Process Without Surprises</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">Predictable timelines, fixed pricing, and absolute transparency from day one.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Desktop connecting line */}
              <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-900/0 via-blue-500/20 to-blue-900/0" />
              
              {process.map((p, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative flex flex-col items-center text-center z-10"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#050505] border border-blue-500/30 flex items-center justify-center text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                    {p.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Who We Build For</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {useCases.map((uc, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-[#0c0c0e] to-[#050505] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-all hover:shadow-2xl hover:shadow-white/[0.02]"
                >
                  {uc.icon}
                  <h3 className="text-2xl font-bold text-white mb-4">{uc.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{uc.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 border-t border-white/5 bg-[#0c0c0e]">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white">Frequent Questions</h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-4">
              {faqData.mainEntity.map((faq, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="bg-[#050505] border border-white/5 rounded-2xl p-6 group hover:border-blue-500/30 transition-colors">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    {faq.name}
                  </h3>
                  <p className="text-gray-400 pl-8 leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-[#0c0c0e] to-[#15151a] border border-blue-500/20 rounded-3xl p-10 md:p-16 text-center shadow-2xl overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">Stop Compromising.</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 relative z-10">
              Let's build a web application that drives real business value. Schedule a no-pressure technical consultation today.
            </p>
            <a 
              href="https://wa.me/919301579493" 
              target="_blank" rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 relative z-10 shadow-lg shadow-blue-500/25 cursor-pointer"
            >
              Chat on WhatsApp <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </section>
      </div>
    </>
  );
}
