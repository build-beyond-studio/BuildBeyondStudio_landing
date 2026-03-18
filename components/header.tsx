"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const NAV_LINKS = [
  { href: "/",                          label: "Home"        },
  { href: "/#services",                 label: "Services"    },
  { href: "/services/web-applications", label: "Your Website"},
  { href: "/#cases",                    label: "Our Work"    },
  { href: "/#why",                      label: "Why Us"      },
  { href: "/#partners",                 label: "For Agencies"},
  { href: "/blog",                      label: "Blog"        },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          background: rgba(12, 12, 14, 0.75);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 8px 40px rgba(0,0,0,0.10);
          outline: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 10px;
          padding-bottom: 10px;
          max-width: 64rem; /* 1024px ≈ max-w-4xl */
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
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #fff;
          border-radius: 99px;
          transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link:hover::after { width: 100%; }

        /* ── Hamburger bars ──────────────────────────────────  */
        .ham-bar {
          display: block;
          width: 22px;
          height: 1.5px;
          background: #fff;
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
        .nav-morph.scrolled .mobile-menu.open {
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

        <div className={`nav-morph ${scrolled ? "scrolled" : ""}`}>

          <div className="flex items-center justify-between px-5 sm:px-6">

            {/* Logo — slides from LEFT */}
            <div className="anim-from-left flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Build Beyond Studio - Web Development & DevOps Agency"
                width={40}
                height={40}
                className="w-8 sm:w-9 h-8 sm:h-9 shrink-0"
              />
              <span className="font-semibold text-white text-sm sm:text-[15px] tracking-tight">
                Build Beyond Studio
              </span>
            </div>

            {/* Desktop Nav — each link drops from TOP */}
            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="nav-item nav-link text-gray-300 hover:text-white text-[13px] font-medium transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Hamburger — slides from RIGHT */}
            <button
              className={`anim-from-right md:hidden flex flex-col justify-center items-center gap-[5.5px] w-9 h-9 rounded-xl hover:bg-white/5 transition-colors duration-200 cursor-pointer ${
                isMenuOpen ? "ham-open" : ""
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="ham-bar bar-top" />
              <span className="ham-bar bar-mid" />
              <span className="ham-bar bar-bot" />
            </button>
          </div>

          {/* Mobile Dropdown */}
          <div className={`mobile-menu md:hidden ${isMenuOpen ? "open" : ""}`}>
            <div className="mobile-menu-inner">
              <nav className="flex flex-col px-5 pb-4 pt-3 gap-0.5 border-t border-white/10 mt-2 bg-[#0c0c0e]/80 rounded-b-2xl backdrop-blur-md">
                {NAV_LINKS.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="mob-link text-gray-300 hover:text-white text-sm font-medium py-2.5 border-b border-white/5 last:border-0 transition-colors duration-200"
                  >
                    {label}
                  </a>
                ))}
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
