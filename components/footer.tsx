import TrackedLink from "@/components/TrackedLink";

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



        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-500 mb-8">
             <div className="text-center md:text-left">
                <h4 className="text-white font-semibold mb-4 text-base">Services</h4>
                 <div className="flex flex-col gap-2">
                  <a href="/white-label-web-development" className="hover:text-white transition-colors font-semibold text-[#E8A020]">White-Label Web Development</a>
                  <a href="/services/website-development" className="hover:text-white transition-colors">Website Development</a>
                  <a href="/services/mobile-app-development" className="hover:text-white transition-colors">Mobile App Development</a>
                  <a href="/services/seo-aeo-geo" className="hover:text-white transition-colors">SEO, AEO & GEO</a>
                  <a href="/services/google-meta-ads" className="hover:text-white transition-colors">Google & Meta Ads</a>
                  <a href="/services/social-media-management" className="hover:text-white transition-colors">Social Media Management</a>
                  <a href="/services/ai-content-video-production" className="hover:text-white transition-colors">AI Content & Video Production</a>
                  <a href="/services/analytics-tracking" className="hover:text-white transition-colors">Analytics & Tracking</a>
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
                  href="mailto:admin@buildbeyondstudio.com"
                  className="hover:text-white transition-colors"
                >
                  admin@buildbeyondstudio.com
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
