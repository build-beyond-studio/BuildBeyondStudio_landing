import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0066ff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://buildbeyondstudio.com"),

  title: {
    default: "Build Beyond Studio | Web Development & DevOps Agency",
    template: "%s | Build Beyond Studio",
  },

  description:
    "White-label web development agency in Ambikapur, Chhattisgarh. MERN stack development, DevOps, and technical consulting for marketing agencies across India.",

  keywords: [
    "web development agency",
    "MERN stack development",
    "DevOps services",
    "white-label web development",
    "web application development",
    "cloud deployment",
    "web development Ambikapur",
    "software company Ambikapur",
    "IT company Chhattisgarh",
    "Build Beyond Studio",
  ],

  authors: [{ name: "Build Beyond Studio" }],
  creator: "Build Beyond Studio",
  publisher: "Build Beyond Studio",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://buildbeyondstudio.com",
  },

  openGraph: {
    type: "website",
    url: "https://buildbeyondstudio.com",
    title: "Build Beyond Studio | Web Development & DevOps Agency",
    description:
      "White-label web development agency in Ambikapur, Chhattisgarh. MERN stack, DevOps, and technical consulting for marketing agencies across India.",
    siteName: "Build Beyond Studio",
    images: [
      {
        url: "https://buildbeyondstudio.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Build Beyond Studio – Web Development Partner",
        type: "image/png",
      },
    ],
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    site: "@buildbeyondstudio",
    creator: "@buildbeyondstudio",
    title: "Build Beyond Studio | Web Development & DevOps Agency",
    description:
      "White-label web development agency in Ambikapur. MERN stack, DevOps, and technical consulting for marketing agencies.",
    images: {
      url: "https://buildbeyondstudio.com/logo.png",
      alt: "Build Beyond Studio Logo",
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

// Single clean JSON-LD — no duplicates
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://buildbeyondstudio.com/#organization",
      name: "Build Beyond Studio",
      alternateName: "BBS",
      url: "https://buildbeyondstudio.com",
      logo: {
        "@type": "ImageObject",
        url: "https://buildbeyondstudio.com/logo.png",
        width: 512,
        height: 512,
        caption: "Build Beyond Studio Logo",
      },
      description:
        "White-label web development agency in Ambikapur, Chhattisgarh. MERN stack development, DevOps, and technical consulting for marketing agencies across India.",
      foundingDate: "2023",
      telephone: "+91-9301579493",
      email: "buildbeyondstudio@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ambikapur",
        addressLocality: "Ambikapur",
        addressRegion: "Chhattisgarh",
        postalCode: "497001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "23.1175",
        longitude: "83.1961",
      },
      areaServed: ["Ambikapur", "Surguja", "Chhattisgarh", "India"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9301579493",
        contactType: "Sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
      knowsAbout: [
        "Web Application Development",
        "MERN Stack",
        "DevOps",
        "Cloud Deployment",
        "White-Label Solutions",
        "Technical Consulting",
      ],
      sameAs: [
        "https://www.linkedin.com/company/buildbeyondstudio",
        "https://github.com/buildbeyondstudio",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://buildbeyondstudio.com/#website",
      name: "Build Beyond Studio",
      url: "https://buildbeyondstudio.com",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://buildbeyondstudio.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://buildbeyondstudio.com?search={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        {/* JSON-LD — plain script tag so Google reads it server-side */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}