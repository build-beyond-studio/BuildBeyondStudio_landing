"use client";

import { useEffect, useRef, useState } from "react";

const EMAIL = "buildbeyondstudio@gmail.com";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-up");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (buttonsRef.current) observer.observe(buttonsRef.current);
    if (trustRef.current) observer.observe(trustRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 25;
      const y = (e.clientY / window.innerHeight - 0.5) * 25;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-linear-to-br from-white via-blue-50/40 to-white pt-0 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
        {/* Title */}
        <h1
          ref={titleRef}
          className="opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight tracking-tight"
        >
          Build Beyond Studio:
          <br />
          <span className="bg-linear-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
            Web Applications
          </span>
          <br />
          Built to Scale
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="opacity-0 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Partner with us to deliver stunning,
          <span className="font-semibold text-gray-900">
            {" "}
            production-ready web applications.
          </span>{" "}
          We help marketing agencies deliver high-quality digital solutions
          without the need to hire or manage a technical team.
        </p>

        {/* Trust Badges */}
        <div
          ref={trustRef}
          className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 flex-wrap"
        >
          {["Development", "Deployment", "Maintenance"].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200"
            >
              <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-xs text-white">
                ✓
              </div>
              <span className="text-black font-semibold text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          ref={buttonsRef}
          className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold w-full sm:w-auto"
          >
            Book a Call →
          </button>

          <button
            onClick={() =>
              document
                .getElementById("cases")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all font-semibold w-full sm:w-auto"
          >
            See Our Work
          </button>
        </div>

        {/* Email Contact */}
        <div className="mt-6 text-sm text-gray-600">
          Prefer email?{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
