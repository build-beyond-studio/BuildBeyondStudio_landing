'use client';

import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: "agency-owner-1",
    name: "Sarthak",
    role: "Founder",
    agency: "TechTasteFood",
    city: "Delhi",
    quote: "BBS became our reliable technical partner from day one. Their team consistently delivers high-quality work on time, allowing us to focus on client acquisition and scaling our business with confidence.",
    resultStat: "+₹75K/mo Profit",
    type: "both",
    initials: "ST",
    photoPath: "https://res.cloudinary.com/ds6jbzjy0/image/upload/f_auto,q_auto/v1784111689/WhatsApp_Image_2026-07-15_at_3.52.04_PM_z1hve2.jpg",
  },
  {
    id: "agency-owner-2",
    name: "Aayushman",
    role: "Founder",
    agency: "BVFX Digify",
    city: "Bhilai, Durg",
    quote: "Working with BBS has significantly improved our project delivery speed. Their development team feels like an extension of our own, helping us deliver quality work faster while maintaining excellent client satisfaction.",
    resultStat: "3× Faster Delivery",
    type: "both",
    initials: "AY",
    photoPath: "https://res.cloudinary.com/ds6jbzjy0/image/upload/f_auto,q_auto/v1784111690/WhatsApp_Image_2026-07-15_at_3.52.05_PM_mpolbe.jpg",
  },
    {
    id: "agency-owner-3",
    name: "Sarthak",
    role: "Founder",
    agency: "FranFirst",
    city: "New Delhi",
    quote: "BBS became our reliable technical partner from day one. Their team consistently delivers high-quality work on time, allowing us to focus on client acquisition and scaling our business with confidence.",
    resultStat: "+₹75K/mo Profit",
    type: "both",
    initials: "ST",
    photoPath: "https://res.cloudinary.com/ds6jbzjy0/image/upload/f_auto,q_auto/v1784111689/WhatsApp_Image_2026-07-15_at_3.52.04_PM_z1hve2.jpg",
  },
  {
    id: "agency-owner-4",
    name: "Mahi",
    role: "Founder",
    agency: "Shivora Media",
    city: "Bhopal",
    quote: "BBS has helped us scale without the hassle of building an in-house development team. Their consistency, communication, and technical expertise have made them a trusted long-term partner for our agency.",
    resultStat: "+40% Client Capacity",
    type: "both",
    initials: "MH",
    photoPath: "https://res.cloudinary.com/ds6jbzjy0/image/upload/f_auto,q_auto/v1784111688/WhatsApp_Image_2026-07-15_at_3.52.05_PM_2_dakvlf.jpg",
  },
  {
    id: "agency-owner-5",
    name: "Aastha",
    role: "Founder",
    agency: "Clocked Agency",
    city: "Delhi",
    quote: "BBS has been instrumental in helping us deliver premium websites without expanding our internal team. Their professionalism, timely communication, and consistent quality have strengthened both our operations and client trust.",
    resultStat: "+₹90K/mo Revenue",
    type: "both",
    initials: "AS",
    photoPath: "https://res.cloudinary.com/ds6jbzjy0/image/upload/f_auto,q_auto/v1784111689/WhatsApp_Image_2026-07-15_at_3.52.05_PM_1_p0hpg2.jpg",
  },

];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    
    const scroll = () => {
      if (scrollRef.current && !isPaused) {
        scrollRef.current.scrollLeft += 1;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section className="bg-[#F5F2EC] py-16 md:py-24 px-4 sm:px-6 border-t border-black/5">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
      <div className="max-w-[100vw] overflow-hidden mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#C8860A] bg-[#FDF8F0] px-4 py-1.5 rounded-full border border-[rgba(200,134,10,0.15)] inline-block mb-3 md:mb-4 shadow-sm">
            Agency Proof
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black tracking-[-0.03em] mb-3 md:mb-4 px-2">
            Partnering with Growing Agencies
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto font-light text-sm md:text-lg">
            Real margins. Zero hiring. Complete confidentiality.
          </p>
        </div>
        
        {/* Scrollable Carousel */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex overflow-x-auto space-x-4 md:space-x-6 px-4 scrollbar-hide cursor-grab active:cursor-grabbing w-full"
        >
          {/* We duplicate the array to allow infinite scrolling effect */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="w-[200px] md:w-[420px] shrink-0 bg-white border border-[rgba(200,134,10,0.15)] rounded-2xl p-4 md:p-8 flex flex-col whitespace-normal relative transition-all duration-300 hover:shadow-[0_8px_30px_rgba(200,134,10,0.12)] hover:-translate-y-1 overflow-hidden"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#A06A00] to-[#E8A020] opacity-80" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-0 mb-3 md:mb-6">
                <div className="flex items-center gap-2 md:gap-4">
                  <img 
                    src={testimonial.photoPath} 
                    alt={`${testimonial.name}, ${testimonial.role} at ${testimonial.agency}`} 
                    width={56} 
                    height={56} 
                    className="w-8 h-8 md:w-14 md:h-14 rounded-full object-cover shadow-sm ring-2 ring-[#FDF8F0] shrink-0" 
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-black font-bold text-[11px] md:text-[15px] truncate md:whitespace-normal">{testimonial.name}</p>
                    <p className="text-gray-600 font-medium text-[9px] md:text-xs mb-0.5 truncate md:whitespace-normal">{testimonial.role}, <span className="text-black">{testimonial.agency}</span></p>
                    <p className="text-gray-400 text-[7px] md:text-[10px] uppercase tracking-wider font-semibold truncate md:whitespace-normal">{testimonial.city}</p>
                  </div>
                </div>
                <div className="self-start md:self-auto">
                  <span className="inline-block bg-gradient-to-r from-[#FDF8F0] to-white text-[#C8860A] px-1.5 py-0.5 md:px-3 md:py-1 rounded-md text-[8px] md:text-xs font-bold border border-[rgba(200,134,10,0.2)] shadow-sm whitespace-nowrap">
                    {testimonial.resultStat}
                  </span>
                </div>
              </div>
              
              <div className="relative flex-grow">
                {/* Subtle Quote Icon */}
                <svg className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-6 h-6 md:w-10 md:h-10 text-[#C8860A] opacity-[0.07]" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10.667 14.667c0-4.418 3.582-8 8-8v-4c-6.627 0-12 5.373-12 12v14.667h12v-14.667h-8zM26.667 14.667c0-4.418 3.582-8 8-8v-4c-6.627 0-12 5.373-12 12v14.667h12v-14.667h-8z"></path>
                </svg>
                <p className="text-gray-700 text-[11px] md:text-[15px] leading-relaxed relative z-10 pl-1 md:pl-2">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}