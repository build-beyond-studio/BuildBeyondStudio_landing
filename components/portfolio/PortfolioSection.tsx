'use client';

import React from 'react';
import { WebsitePortfolioCard } from './WebsitePortfolioCard';

export default function PortfolioSection({
  hideHeader = false,
  columns = 4
}: {
  hideHeader?: boolean;
  columns?: 3 | 4;
}) {
  const websites = [
    {
      title: "Faoo",
      subtitle: "Fashion Apparel For Men and Women",
      videoSrc: "https://res.cloudinary.com/davycvtnr/video/upload/v1788179380/Screen_Recording_2026-08-31_160506.mp4",
      link: "https://www.shopfaoo.com/"
    },
    {
      title: "Ilha",
      subtitle: "Resort & Occasion Wear",
      videoSrc: "https://res.cloudinary.com/davycvtnr/video/upload/v1788179430/Screen_Recording_2026-08-31_160703.mp4",
      link: "https://www.ilha.co.in/"
    },
    {
      title: "Waffelsom",
      subtitle: "Gourmet Waffles & Coffee",
      videoSrc: "https://res.cloudinary.com/davycvtnr/video/upload/v1788179358/Screen_Recording_2026-08-31_160846.mp4",
      link: "https://www.wafflesome.com/"
    },
    {
      title: "The Bakistry",
      subtitle: "Cakes For Kids & Celebrations",
      videoSrc: "https://res.cloudinary.com/davycvtnr/video/upload/v1788179403/Screen_Recording_2026-08-31_162656.mp4",
      link: "https://www.thebakistry.com/category/cake-for-kids?utm_source=google&utm_medium=cpc&utm_campaign=PMAX&utm_source=Google&utm_medium=cpc&utm_campaign=23879582126--&utm_adgroup=&utm_keyword=&searchterm={searchterm}&utm_device=c&utm_placement=&utm_network=x&gad_source=1&gad_campaignid=23883970735&gbraid=0AAAAAqJcjPMxlf5MUSRAq_ubiesTcgoic&gclid=Cj0KCQjwp9vTBhCWARIsANaUrjucwmNGXh_DX4_MTLcrw4p5fbqD0KkRqpqgDMXGzUZr6YV7fnJQg_4aAmYnEALw_wcB"
    },
    {
      title: "Dozzed",
      subtitle: "REDEFINING INDIA'S COFFEE CULTURE",
      videoSrc: "https://res.cloudinary.com/davycvtnr/video/upload/v1788179344/Screen_Recording_2026-08-31_162753.mp4",
      link: "https://www.getdozzed.com/"
    },
    {
      title: "OffMenu",
      subtitle: "Skin Hydration drink",
      videoSrc: "https://res.cloudinary.com/davycvtnr/video/upload/v1788253030/Screen_Recording_2026-09-01_141917.mp4",
      link: "https://off-menu-delta.vercel.app/power"
    },
    {
      title: "Story driven",
      subtitle: "Ads | marketing",
      videoSrc: "https://res.cloudinary.com/davycvtnr/video/upload/v1786819451/Screen_Recording_2026-08-16_001329.mp4",
      link: "https://story-driven-client.vercel.app/"
    },
    {
      title: "Real Estate | Property in india",
      subtitle: "Buy /Sale/Rent Properties",
      videoSrc: "https://res.cloudinary.com/davycvtnr/video/upload/v1786817142/Screen_Recording_2026-08-15_233439.mp4",
      link: "https://vistaara-estate.vercel.app/"
    },
    {
      title: "Cinnabon Bakery Restaurant",
      subtitle: "Cinnabon Local Bakery Near you",
      videoSrc: "https://res.cloudinary.com/davycvtnr/video/upload/v1786815879/Screen_Recording_2026-08-15_231405.mp4",
      link: "https://www.cinnabon.com/"
    },
    {
      title: "Aarogyam Susperspeciality Hospital & research Center",
      subtitle: "durg Bhilai",
      videoSrc: "https://res.cloudinary.com/davycvtnr/video/upload/v1786814346/Screen_Recording_2026-08-15_224521.mp4",
      link: "https://ashaarogyam.com/"
    },
    {
      title: "Cocco N Curry",
      subtitle: "Cocco N Curry",
      videoSrc: "https://res.cloudinary.com/davycvtnr/video/upload/v1786814357/Screen_Recording_2026-08-15_224643.mp4",
      link: "https://www.cocconcurry.com/"
    },
    {
      title: "Franfirst",
      subtitle: "Franchise Consultant",
      videoSrc: "https://res.cloudinary.com/davycvtnr/video/upload/v1786814353/Screen_Recording_2026-08-15_224737.mp4",
      link: "https://franfirst.vercel.app/"
    }
  ];

  return (
    <section className={`pt-4 pb-16 md:pt-8 md:pb-24 px-4 mx-auto max-w-[82rem]`}>
      {!hideHeader && (
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Websites</h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl">
            High-converting websites crafted for modern brands.
          </p>
        </div>
      )}

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8`}>
        {websites.map((site, index) => (
          <WebsitePortfolioCard
            key={index}
            title={site.title}
            subtitle={site.subtitle}
            videoSrc={site.videoSrc}
            link={site.link}
          />
        ))}
      </div>
    </section>
  );
}

