import type { Metadata, Viewport } from "next"; // ✅ Import Viewport
import { inter, playfair } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// --- 1. VIEWPORT SETTINGS (Critical for Mobile/Safari) ---
export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  // IMPORTANT: Replace with your actual live domain
  metadataBase: new URL('https://www.redvanda.vc'),
  
  // --- 2. SEO & ROBOTS ---
  title: {
    default: "Red Vanda Partners",
    template: "%s | Red Vanda Partners"
  },
  description: "Global venture capital firm investing in deep tech and infrastructure companies. Backing institutional founders building transformative technology.",
  keywords: "venture capital, deep tech, infrastructure, AI, climate tech, enterprise software, VC fund India, Mizoram startup",
  
  // ✅ TELLS GOOGLE TO INDEX THIS SITE
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ✅ PREVENTS DUPLICATE CONTENT ISSUES
  alternates: {
    canonical: './',
  },

  openGraph: {
    title: "Red Vanda Partners",
    description: "Backing institutional founders building transformative deep-tech infrastructure.",
    type: "website",
    url: 'https://www.redvanda.vc',
    siteName: "Red Vanda Partners",
    locale: "en_US",
    images: [
      {
        url: '/logo.png', // Fallback social image
        width: 1200,
        height: 630,
        alt: 'Red Vanda Partners',
      },
    ],
  },

  // --- 3. ICONS (Optimized for Safari) ---
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    // ✅ SIMPLIFIED FOR SAFARI COMPATIBILITY
    apple: '/apple-touch-icon.png', 
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // --- SEO: STRUCTURED DATA (JSON-LD) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VentureCapital", 
    "name": "Red Vanda Partners",
    "url": "https://www.redvanda.vc",
    "logo": "https://www.redvanda.vc/logo.png",
    "description": "Global venture capital firm investing in deep tech and infrastructure.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Planning Dept., Block I, Treasury Square",
      "addressLocality": "Aizawl",
      "addressRegion": "Mizoram",
      "postalCode": "796005",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/red-vanda-partners",
      // "https://twitter.com/redvanda" // Uncomment if active
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        {/* Inject Schema Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen font-sans antialiased bg-white text-slate-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}