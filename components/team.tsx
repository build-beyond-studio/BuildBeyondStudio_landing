'use client';

import { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

const teamMembers = [
  {
    name: 'Priya Sharma',
    role: 'Full Stack & DevOps Engineer',
    specialty: 'React & Node.js',
    avatar: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=Priya&scale=80&backgroundColor=4A6FA5',
    color: 'from-[#A06A00] to-[#C8860A]',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
    phone: '+91 9301579493',
    email: 'priya@example.com',
    resumeLink: 'https://drive.google.com/file/d/1example/view',
  },
  {
    name: 'Michael Chen',
    role: 'DevOps Engineer',
    specialty: 'Infrastructure & Scaling',
    avatar: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=Michael&scale=80&backgroundColor=9333EA',
    color: 'from-purple-400 to-purple-600',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
    phone: '+91 9301579493',
    email: 'michael@example.com',
    resumeLink: 'https://drive.google.com/file/d/1example/view',
  },
  {
    name: 'Sofia Reyes',
    role: 'Lead Developer',
    specialty: 'Architecture & Strategy',
    avatar: 'https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=Sofia&scale=80&backgroundColor=10B981',
    color: 'from-emerald-400 to-emerald-600',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://instagram.com',
    phone: '+91 9301579493',
    email: 'sofia@example.com',
    resumeLink: 'https://drive.google.com/file/d/1example/view',
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add('animate-slide-in-up');
            } else {
              setTimeout(() => {
                entry.target.classList.add('animate-slide-in-up');
              }, (index - 1) * 150);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="bg-[#F5F2EC] py-24 md:py-32 px-6 border-t border-black/5" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="opacity-0 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600">The developers behind your success</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="opacity-0 group"
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-[rgba(200,134,10,0.12)] hover:border-[rgba(200,134,10,0.35)] transition-all duration-300 hover:shadow-[0_16px_48px_rgba(200,134,10,0.16)] hover:-translate-y-2" style={{boxShadow:'0 4px 16px rgba(200,134,10,0.08)'}}>
                {/* Avatar Section with Gradient Background */}
                <div className={`relative h-48 bg-gradient-to-br ${member.color} overflow-hidden flex items-end justify-center pb-8`}>
                  {/* Animated background shapes */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-500"></div>
                  </div>

                  {/* Avatar Image */}
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg shadow-black/10 object-cover relative z-10 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-black mb-1 text-center">{member.name}</h3>
                  <p className="text-sm font-semibold text-[#C8860A] mb-1 text-center">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-6 text-center">{member.specialty}</p>

                  {/* Skills/Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.specialty.split('&').map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs bg-black/5 text-gray-600 px-3 py-1 rounded-full font-medium"
                      >
                        {skill.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Social Links & Contact */}
                  <div className="space-y-4">
                    {/* Social Media Links */}
                    <div className="flex items-center justify-center gap-3 pb-4 border-b border-black/5">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#FDF8F0] text-[#C8860A] hover:bg-[#C8860A] hover:text-white transition-all"
                        title="LinkedIn"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-800 hover:text-white transition-all"
                        title="GitHub"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-pink-100 text-pink-600 hover:bg-pink-600 hover:text-white transition-all"
                        title="Instagram"
                      >
                        <FaInstagram className="w-5 h-5" />
                      </a>
                    </div>

                    {/* Email & Phone */}
                    <div className="space-y-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-[#C8860A] transition-colors py-2 hover:bg-black/5 rounded-lg"
                      >
                        <FiMail className="w-4 h-4" />
                        <span className="truncate">{member.email}</span>
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-[#C8860A] transition-colors py-2 hover:bg-black/5 rounded-lg"
                      >
                        <FiPhone className="w-4 h-4" />
                        <span>{member.phone}</span>
                      </a>
                    </div>

                    {/* Resume Link */}
                    <a
                      href={member.resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all font-medium text-sm mt-2" style={{background:'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)'}}
                    >
                      View Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Description */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white border border-[rgba(200,134,10,0.12)] rounded-2xl p-8 hover:border-[rgba(200,134,10,0.35)] transition-all" style={{boxShadow:'0 2px 10px rgba(200,134,10,0.07)'}}>
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-bold text-black mb-2">Fast Execution</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We move quickly without sacrificing quality. Agile sprints, clear milestones, and consistent communication ensure on-time delivery.
            </p>
          </div>

          <div className="bg-white border border-[rgba(200,134,10,0.12)] rounded-2xl p-8 hover:border-[rgba(200,134,10,0.35)] transition-all" style={{boxShadow:'0 2px 10px rgba(200,134,10,0.07)'}}>
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-lg font-bold text-black mb-2">Production Ready</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every project is built with security, scalability, and performance as first-class citizens. DevOps practices included from day one.
            </p>
          </div>

          <div className="bg-white border border-[rgba(200,134,10,0.12)] rounded-2xl p-8 hover:border-[rgba(200,134,10,0.35)] transition-all" style={{boxShadow:'0 2px 10px rgba(200,134,10,0.07)'}}>
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="text-lg font-bold text-black mb-2">Long-Term Partner</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We're here for the long haul. Ongoing support, maintenance, and scaling assistance are part of our commitment to your success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
