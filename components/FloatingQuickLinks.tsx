"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

const SERVICES = [
  { href: "/services/custom-web-applications", label: "Custom Web & Portal Development" },
  { href: "/services/devops-infrastructure", label: "Auto-Scaling Cloud & DevOps" },
  { href: "/services/technical-consulting", label: "Fractional CTO & Tech Roadmap" },
  { href: "/services/aeo-geo", label: "AI-Era Search Visibility (SEO/AEO/GEO)" },
  { href: "/services/performance-ads", label: "Meta & Google Performance Ads" },
  { href: "/services/tracking-funnels", label: "E-Comm Funnel Audits & Tracking" },
  { href: "/services/ai-visuals", label: "AI-Powered Visual Production" },
];

export default function FloatingQuickLinks() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleWhatsappClick = () => {
    window.gtag?.('event', 'whatsapp_click', { button_location: 'bottom_nav_center' });
  };

  return (
    <div className="fixed bottom-0 pb-1 left-1/2 -translate-x-1/2 z-[997] w-[98%] md:hidden flex gap-1 items-center">
      <div className="relative flex-1" ref={menuRef}>
        <button
          onClick={() => setIsServicesOpen(!isServicesOpen)}
          className="w-full bg-white/90 backdrop-blur-md border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-black text-[14px] font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
        >
          Services
          <motion.svg
            animate={{ rotate: isServicesOpen ? 180 : 0 }}
            className="w-4 h-4 opacity-60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>
        <AnimatePresence>
          {isServicesOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-[calc(100%+12px)] left-0 w-[280px] bg-white rounded-2xl shadow-[0_12px_40px_rgb(0,0,0,0.15)] border border-gray-100 overflow-hidden"
            >
              <div className="p-2">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 py-2">
                  Our Services
                </div>
                {SERVICES.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsServicesOpen(false)}
                    className="block px-3 py-2.5 text-sm text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Center: Floating WhatsApp */}
      <div className="relative mt-0 flex-shrink-0 z-10 mx-1">
        <div className="absolute inset-0 bg-green-500/40 rounded-full animate-ping scale-[1.2]" />
        <a
          href="https://wa.me/919301579493?text=Hi%21%20I%20would%20like%20to%20discuss%20partnership%20opportunities%20with%20your%20agency."
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsappClick}
          className="relative flex items-center justify-center w-[60px] h-[60px] bg-green-500 text-white rounded-full shadow-[0_8px_30px_rgba(34,197,94,0.3)] transition-all duration-300 hover:bg-green-600 hover:scale-105 border-[3px] border-white"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8" />
        </a>
      </div>

      <a
        href="/training-programs"
        className="flex-1 text-white shadow-[0_4px_12px_rgba(200,134,10,0.25)] text-[14px] font-semibold py-3.5 rounded-xl flex items-center justify-center hover:brightness-110 transition-all"
        style={{ background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)' }}
      >
        Internship Program
      </a>
    </div>
  );
}
