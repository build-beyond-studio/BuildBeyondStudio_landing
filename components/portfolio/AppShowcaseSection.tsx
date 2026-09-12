'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';

const apps = [
  {
    name: 'Astrology mobile app',
    image:
      'https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/certificates/Astrology_mobile_app_UI_mockup_202609041425.jpeg',
  },
  {
    name: 'Hospital App',
    image:
      'https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/certificates/Astrology_mobile_app_UI_mockup_202609041429.jpeg',
  },
  {
    name: 'Frenchise app',
    image:
      'https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/certificates/Mobile_app_UI_design_mockup_202609041437.jpeg',
  },
  {
    name: 'Candy app',
    image:
      'https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/certificates/Mobile_game_UI_design_mockup_202609041439.jpeg',
  },
];

export default function AppShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const hoverTimeoutRef = useRef<number | null>(null);

  const openPreview = (index: number) => {
    if (hoverTimeoutRef.current) window.clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = window.setTimeout(() => {
      setActiveIndex(index);
    }, 220);
  };

  const closePreview = () => {
    if (hoverTimeoutRef.current) window.clearTimeout(hoverTimeoutRef.current);
    setActiveIndex(null);
  };

  return (
    <section className="mx-auto max-w-[82rem] px-4 pb-16 pt-8 md:pb-24 md:pt-10">
      <div className="mb-8 md:mb-10">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Apps</h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:items-end md:gap-5">
        {apps.map((app, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className="group relative md:flex-1 md:min-w-0 cursor-pointer"
              onMouseEnter={() => openPreview(index)}
              onClick={() => {
                if (window.innerWidth < 768) {
                  setActiveIndex(index);
                }
              }}
            >
              <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-500 ease-out md:min-h-[420px] md:hover:-translate-y-1">
                <div className="relative h-[360px] overflow-hidden sm:h-[420px] md:h-[500px]">
                  <img
                    src={app.image}
                    alt={app.name}
                    className="h-full w-full object-contain bg-[#f7f6f2] transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent" />
                </div>
              </div>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="fixed inset-0 z-[60] flex items-start justify-center bg-black/35 px-4 py-4 backdrop-blur-[2px] md:px-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    onClick={(event) => {
                      if (event.target === event.currentTarget) {
                        closePreview();
                      }
                    }}
                    onMouseLeave={closePreview}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 16, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.985 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full max-w-[760px] rounded-[22px] border border-[#EAE7E2] bg-[#F5F3EF] shadow-[0_40px_100px_rgba(0,0,0,0.25)]"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <div className="flex items-center justify-between border-b border-[#E5E1DA] bg-white px-5 py-4 md:px-6">
                        <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                          App name : {app.name}
                        </h3>

                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            closePreview();
                          }}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8D1C7] bg-white text-xl text-gray-800 transition hover:bg-gray-50"
                          aria-label="Close app preview"
                        >
                          ×
                        </button>
                      </div>

                      <div className="bg-[#f0efe9] p-4 md:p-6">
                        <img
                          src={app.image}
                          alt={app.name}
                          className="mx-auto h-[72vh] w-full max-w-[700px] rounded-[18px] border border-[#E9E4DB] bg-white object-contain shadow-sm"
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
