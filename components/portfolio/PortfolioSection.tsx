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
      videoSrc: "https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/BBS_WEBSITE/WhatsApp%20Video%202026-09-05%20at%2011.43.14%20PM.mp4",
      link: "https://www.shopfaoo.com/"
    },
    {
      title: "Ilha",
      subtitle: "Resort & Occasion Wear",
      videoSrc: "https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/BBS_WEBSITE/WhatsApp%20Video%202026-09-05%20at%2011.46.02%20PM.mp4",
      link: "https://www.ilha.co.in/"
    },
    {
      title: "Waffelsom",
      subtitle: "Gourmet Waffles & Coffee",
      videoSrc: "https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/BBS_WEBSITE/WhatsApp%20Video%202026-09-06%20at%2012.02.38%20AM.mp4",
      link: "https://www.wafflesome.com/"
    },
    {
      title: "The Bakistry",
      subtitle: "Cakes For Kids & Celebrations",
      videoSrc: "https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/BBS_WEBSITE/WhatsApp%20Video%202026-09-06%20at%2012.07.54%20AM.mp4",
      link: "https://www.thebakistry.com"
    },
    {
      title: "Dozzed",
      subtitle: "REDEFINING INDIA'S COFFEE CULTURE",
      videoSrc: "https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/BBS_WEBSITE/WhatsApp%20Video%202026-09-06%20at%2012.07.53%20AM.mp4",
      link: "https://www.getdozzed.com/"
    },
    {
      title: "OffMenu",
      subtitle: "Skin Hydration drink",
      videoSrc: "https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/BBS_WEBSITE/WhatsApp%20Video%202026-09-06%20at%2012.14.28%20AM.mp4",
      link: "https://off-menu-delta.vercel.app/power"
    },
    {
      title: "Story driven",
      subtitle: "Ads | marketing",
      videoSrc: "https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/BBS_WEBSITE/WhatsApp%20Video%202026-09-06%20at%2012.12.50%20AM.mp4",
      link: "https://story-driven-client.vercel.app/"
    },
    {
      title: "Real Estate | Property in india",
      subtitle: "Buy /Sale/Rent Properties",
      videoSrc: "https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/BBS_WEBSITE/WhatsApp%20Video%202026-09-06%20at%2012.21.06%20AM.mp4",
      link: "https://vistaara-estate.vercel.app/"
    },
    {
      title: "Cinnabon Bakery Restaurant",
      subtitle: "Cinnabon Local Bakery Near you",
      videoSrc: "https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/BBS_WEBSITE/WhatsApp%20Video%202026-09-06%20at%2012.27.37%20AM%20(1).mp4",
      link: "https://www.cinnabon.com/"
    },
    {
      title: "Aarogyam Susperspeciality Hospital & research Center",
      subtitle: "durg Bhilai",
      videoSrc: "https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/BBS_WEBSITE/WhatsApp%20Video%202026-09-06%20at%2012.39.05%20AM.mp4",
      link: "https://ashaarogyam.com/"
    },
    {
      title: "Cocco N Curry",
      subtitle: "Cocco N Curry",
      videoSrc: "https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/certificates/WhatsApp%20Video%202026-09-06%20at%2012.24.36%20AM%20(1).mp4",
      link: "https://www.cocconcurry.com/"
    },
    {
      title: "Franfirst",
      subtitle: "Franchise Consultant",
      videoSrc: "https://pub-1d0310287b3a439cb13c11e72a470156.r2.dev/BBS_WEBSITE/WhatsApp%20Video%202026-09-06%20at%2012.21.36%20AM.mp4",
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

