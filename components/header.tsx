"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

type NavLink = {
  label: string;
  href?: string;
  dropdown?: { href: string; label: string }[];
};

const NAV_LINKS: NavLink[] = [
  { 
    label: "Services", 
    dropdown: [
      { href: "/services/custom-web-applications", label: "Custom Web & Portal Development" },
      { href: "/services/devops-infrastructure", label: "Auto-Scaling Cloud & DevOps" },
      { href: "/services/technical-consulting", label: "Fractional CTO & Tech Roadmap" },
      { href: "/services/aeo-geo", label: "AI-Era Search Visibility (SEO/AEO/GEO)" },
      { href: "/services/performance-ads", label: "Meta & Google Performance Ads" },
      { href: "/services/tracking-funnels", label: "E-Comm Funnel Audits & Tracking" },
      { href: "/services/ai-visuals", label: "AI-Powered Visual Production" },
    ]
  },
  { href: "/training-programs", label: "Internship Programs" },
  { href: "/how-we-partner", label: "How We Partner" },
  { href: "/#revenue", label: "Revenue Model" },
  { href: "/success-stories", label: "Success Stories" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHomePage = pathname === "/";
  const contactHref = isHomePage ? "/#contact" : "https://wa.me/919301579493?text=Hi%21%20I%20would%20like%20to%20discuss%20partnership%20opportunities%20with%20your%20agency.";
  const contactProps = isHomePage ? {} : { target: "_blank", rel: "noopener noreferrer" };

  return (
    <>
      <style>{`
        /* ── Capsule entrance ─────────────────────────────── */
        @keyframes navbarDrop {
          from { opacity: 0; transform: translateY(-18px); }
          to   { opacity: 1; transform: translateY(0);      }
        }
        .navbar-capsule {
          animation: navbarDrop 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* ── The morphing wrapper ─────────────────────────── */
        /*  At rest (hero):   full-width, square, transparent  */
        /*  On scroll:        pill, frosted glass, shadow       */
        .nav-morph {
          width: 100%;
          border-radius: 0px;
          background: transparent;
          box-shadow: none;
          outline: 1px solid transparent;
          padding-top: 14px;
          padding-bottom: 14px;
          transition:
            border-radius      0.55s cubic-bezier(0.34, 1.56, 0.64, 1),
            background         0.45s ease,
            box-shadow         0.45s ease,
            outline-color      0.45s ease,
            padding-top        0.45s ease,
            padding-bottom     0.45s ease,
            max-width          0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
          max-width: 100%;
        }

        .nav-morph.scrolled {
          border-radius: 16px;
          background: #F5F2EC;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 8px 40px rgba(0,0,0,0.06);
          outline: 1px solid rgba(0, 0, 0, 0.05);
          padding-top: 10px;
          padding-bottom: 10px;
          max-width: 82rem; /* Increased from 64rem to fit new items */
        }

        .nav-morph.menu-open {
          border-radius: 16px !important;
          background: #F5F2EC !important;
          outline: 1px solid rgba(0, 0, 0, 0.05) !important;
          box-shadow: 0 8px 40px rgba(0,0,0,0.06) !important;
        }

        /* ── Logo: slide in from left ─────────────────────── */
        @keyframes fromLeft {
          from { opacity: 0; transform: translateX(-22px); }
          to   { opacity: 1; transform: translateX(0);      }
        }
        .anim-from-left {
          animation: fromLeft 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 0.15s;
        }

        /* ── Nav links: drop from top, staggered ─────────── */
        @keyframes fromTop {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0);      }
        }
        .nav-item {
          animation: fromTop 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .nav-item:nth-child(1) { animation-delay: 0.20s; }
        .nav-item:nth-child(2) { animation-delay: 0.26s; }
        .nav-item:nth-child(3) { animation-delay: 0.32s; }
        .nav-item:nth-child(4) { animation-delay: 0.38s; }
        .nav-item:nth-child(5) { animation-delay: 0.44s; }
        .nav-item:nth-child(6) { animation-delay: 0.50s; }
        .nav-item:nth-child(7) { animation-delay: 0.56s; }

        /* ── Hamburger: slide in from right ─────────────────  */
        @keyframes fromRight {
          from { opacity: 0; transform: translateX(18px); }
          to   { opacity: 1; transform: translateX(0);     }
        }
        .anim-from-right {
          animation: fromRight 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 0.20s;
        }

        /* ── Hover underline ─────────────────────────────────  */
        .nav-link {
          position: relative;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #000;
          border-radius: 99px;
          transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link:hover::after { width: 100%; }

        /* ── Hamburger bars ──────────────────────────────────  */
        .ham-bar {
          display: block;
          width: 22px;
          height: 1.5px;
          background: #000;
          border-radius: 99px;
          transform-origin: center;
          transition:
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            opacity   0.25s ease,
            width     0.3s  ease;
        }
        .ham-open .bar-top { transform: translateY(7px)  rotate(45deg);  }
        .ham-open .bar-mid { opacity: 0; width: 0; }
        .ham-open .bar-bot { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile menu slide ───────────────────────────────  */
        .mobile-menu {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .mobile-menu.open      { grid-template-rows: 1fr; }
        .mobile-menu-inner     { overflow: hidden; }

        /* ── Mobile link stagger ─────────────────────────────  */
        .mob-link {
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 0.3s ease, transform 0.3s ease, color 0.2s ease;
        }
        .mobile-menu.open .mob-link              { opacity: 1; transform: translateX(0); }
        .mobile-menu.open .mob-link:nth-child(1) { transition-delay: 0.05s; }
        .mobile-menu.open .mob-link:nth-child(2) { transition-delay: 0.10s; }
        .mobile-menu.open .mob-link:nth-child(3) { transition-delay: 0.15s; }
        .mobile-menu.open .mob-link:nth-child(4) { transition-delay: 0.20s; }
        .mobile-menu.open .mob-link:nth-child(5) { transition-delay: 0.25s; }
        .mobile-menu.open .mob-link:nth-child(6) { transition-delay: 0.30s; }
        .mobile-menu.open .mob-link:nth-child(7) { transition-delay: 0.35s; }

        /* ── Mobile: round the menu bottom too when scrolled ─  */
        .nav-morph.scrolled .mobile-menu.open,
        .nav-morph.menu-open .mobile-menu.open {
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
          overflow: hidden;
        }
      `}</style>

      {/*
        Outer header: full-width fixed strip — gives the "part of hero" illusion.
        The inner .nav-morph handles the morphing width + shape.
      */}
      <header className="navbar-capsule fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-3 sm:pt-4">
        <div className={`nav-morph ${scrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
          <div className="flex items-center justify-between px-5 sm:px-6">
            {/* Logo — slides from LEFT */}
            <a href="/" className="anim-from-left flex items-center gap-2.5 outline-none">
              <Image
                src="/logo.png"
                alt="Build Beyond Studio - Web Development & DevOps Agency"
                width={40}
                height={40}
                className="w-8 sm:w-9 h-8 sm:h-9 shrink-0 bg-white rounded-full"
              />
              <span className="font-semibold text-black text-sm sm:text-[15px] tracking-tight whitespace-nowrap">
                Build Beyond Studio
              </span>
            </a>

            {/* Desktop Nav — each link drops from TOP */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-7">
              {NAV_LINKS.map((item, idx) => (
                item.dropdown ? (
                  <div key={item.label} className="relative group nav-item" style={{ animationDelay: `${0.20 + (idx * 0.06)}s` }}>
                    <span className="nav-link cursor-pointer text-gray-600 hover:text-black text-[13px] font-medium transition-colors duration-200 flex items-center gap-1">
                      {item.label}
                      <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                    <div className="absolute top-full left-0 mt-4 w-56 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0">
                      <div className="py-2">
                        {item.dropdown.map(subItem => (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-[13px] text-gray-600 hover:text-black hover:bg-gray-50 transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.href}
                    href={item.href!}
                    className="nav-item nav-link text-gray-600 hover:text-black text-[13px] font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <a
              href={contactHref}
              {...contactProps}
              className="hidden lg:inline-block text-white px-5 py-2 rounded-lg transition-all font-semibold text-[13px] anim-from-right whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)',
                boxShadow: '0 4px 12px rgba(200,134,10,0.25)',
              }}
            >
              Book a Strategy Call →
            </a>

            {/* Hamburger — slides from RIGHT */}
            <button
              className={`anim-from-right lg:hidden flex flex-col justify-center items-center gap-[5.5px] w-9 h-9 rounded-xl hover:bg-black/5 transition-colors duration-200 cursor-pointer ${isMenuOpen ? "ham-open" : ""
                }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
            >
              <span className="ham-bar bar-top" aria-hidden="true" />
              <span className="ham-bar bar-mid" aria-hidden="true" />
              <span className="ham-bar bar-bot" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Dropdown */}
          <div className={`mobile-menu lg:hidden ${isMenuOpen ? "open" : ""}`}>
            <div className="mobile-menu-inner">
              <nav className="flex flex-col px-5 pb-3 pt-2 gap-0 border-t border-black/5 mt-2 bg-white/90 rounded-b-2xl backdrop-blur-md">
                {NAV_LINKS.map((item, idx) => (
                  item.dropdown ? (
                    <div key={item.label} className="mob-link py-2 border-b border-black/5 last:border-0 transition-colors duration-200" style={{ transitionDelay: `${0.05 + (idx * 0.05)}s` }}>
                      <div className="text-gray-600 font-medium text-[13px] mb-1.5">{item.label}</div>
                      <div className="flex flex-col pl-3 gap-1.5 border-l border-gray-200 ml-1.5">
                        {item.dropdown.map(subItem => (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-500 hover:text-black text-[12px] py-0.5"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      key={item.href}
                      href={item.href!}
                      onClick={() => setIsMenuOpen(false)}
                      className="mob-link text-gray-600 hover:text-black text-[13px] font-medium py-2 border-b border-black/5 last:border-0 transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  )
                ))}
                <a
                  href={contactHref}
                  {...contactProps}
                  onClick={() => setIsMenuOpen(false)}
                  className="mob-link text-white text-[12px] font-semibold py-2 px-4 rounded-lg mt-2 text-center transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)',
                    boxShadow: '0 4px 12px rgba(200,134,10,0.25)',
                  }}
                >
                  Book a Strategy Call →
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer — only needed for the non-hero case; hero itself is min-h-screen */}
      <div className="h-[64px]" />
    </>
  );
}
