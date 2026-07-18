export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white py-16 md:py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Main Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
            You Close the Client. We Handle the Build.
          </h3>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            BBS is the invisible web team behind marketing agencies across India. You bring the clients — we build, deploy, and maintain. Your brand. Your margins. Our expertise.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { label: "100% White-Label", icon: "✓" },
              { label: "Strict NDA Enforced", icon: "✓" },
              { label: "Zero Direct Client Contact", icon: "✓" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-gray-300 text-sm">
                <span className="text-[#E8A020] font-bold">{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>

          {/* Social Handles */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="https://www.linkedin.com/company/buildbeyondstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-[#E8A020] transition-colors group"
            >
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              </svg>
              <span className="font-medium">Build Beyond Studio</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ankush-kumar-gupta-191b923b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-[#E8A020] transition-colors group"
            >
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              </svg>
              <span className="font-medium">Founder — LinkedIn</span>
            </a>

            <a
              href="https://github.com/buildbeyondstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-[#E8A020] transition-colors group"
            >
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="font-medium">buildbeyondstudio</span>
            </a>
          </div>
        </div>

        {/* Founder Profile Block */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] border border-white/5 rounded-xl p-8 max-w-2xl mx-auto">
            <div className="flex gap-6 items-start">
              {/* Photo Placeholder */}
              <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-[#C8860A] to-[#A06A00] flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src="/founder.jpeg"
                  alt="Ankush Kumar Gupta — Founder, BBS"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">
                  Ankush Kumar Gupta — Founder & CEO
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  I personally oversee every agency partnership. Reach me directly on WhatsApp.
                </p>
                <div className="flex gap-4 text-sm">
                  <a
                    href="https://wa.me/917697339962"
                    className="text-[#E8A020] hover:text-white transition-colors font-semibold"
                  >
                    WhatsApp: +91 76973 39962
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ankush-kumar-gupta-191b923b1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E8A020] hover:text-white transition-colors font-semibold"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-500 mb-8">
             <div className="text-center md:text-left">
                <h4 className="text-white font-semibold mb-4 text-base">Services</h4>
                 <div className="flex flex-col gap-2">
                  <a href="/white-label-web-development" className="hover:text-white transition-colors font-semibold text-[#E8A020]">White-Label Web Development</a>
                  <a href="/services/custom-web-applications" className="hover:text-white transition-colors">Custom Web & Portal Development</a>
                  <a href="/services/devops-infrastructure" className="hover:text-white transition-colors">Auto-Scaling Cloud & DevOps</a>
                  <a href="/services/technical-consulting" className="hover:text-white transition-colors">Fractional CTO & Tech Roadmap</a>
                  <a href="/services/aeo-geo" className="hover:text-white transition-colors">AI-Era Search Visibility (SEO/AEO/GEO)</a>
                  <a href="/services/performance-ads" className="hover:text-white transition-colors">Meta & Google Performance Ads</a>
                  <a href="/services/tracking-funnels" className="hover:text-white transition-colors">E-Comm Funnel Audits & Tracking</a>
                  <a href="/services/ai-visuals" className="hover:text-white transition-colors">AI-Powered Visual Production</a>
                </div>
             </div>
              <div className="text-center md:text-left">
                <h4 className="text-white font-semibold mb-4 text-base">Company</h4>
                <div className="flex flex-col gap-2">
                  <a href="/how-we-partner" className="hover:text-white transition-colors">How We Partner</a>
                  <a href="/#revenue" className="hover:text-white transition-colors">Revenue Model</a>
                  <a href="/success-stories" className="hover:text-white transition-colors">Success Stories</a>
                  <a href="/training-programs" className="hover:text-white transition-colors">Internship Programs</a>
                  <a href="/ambikapur" className="hover:text-white transition-colors">Ambikapur Office</a>
                  <a href="/blog" className="hover:text-white transition-colors">Blog</a>
                </div>
              </div>
            {/* Contact + Address */}
            <div className="text-center md:text-right text-gray-300 font-light tracking-wide leading-relaxed">
              <h4 className="text-white font-semibold mb-4 text-base">Contact</h4>
              <p>
                <a
                  href="mailto:buildbeyondstudio@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  buildbeyondstudio@gmail.com
                </a>
              </p>
              <p>Ambikapur, Surguja</p>
              <p>Chhattisgarh 497001</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between text-sm text-gray-500 border-t border-white/5 pt-6">
            <p>&copy; {new Date().getFullYear()} Build Beyond Studio. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
               <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a> | <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
