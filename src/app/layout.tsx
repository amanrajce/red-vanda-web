import type { Metadata } from "next";
import { inter, playfair } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  // IMPORTANT: Replace with your actual live domain (e.g., https://redvanda.com)
  metadataBase: new URL('https://www.redvanda.vc'), 
  title: {
    default: "Red Vanda Partners",
    template: "%s | Red Vanda Partners"
  },
  description: "Global venture capital firm investing in deep tech and infrastructure companies. Backing institutional founders building transformative technology.",
  keywords: "venture capital, deep tech, infrastructure, AI, climate tech, enterprise software",
  openGraph: {
    title: "Red Vanda Partners",
    description: "Backing institutional founders building transformative deep-tech infrastructure.",
    type: "website",
    siteName: "Red Vanda Partners",
    locale: "en_US",
  },
  // --- UPDATED ICONS SECTION ---
  // This connects all the files you just pasted into /public
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
  manifest: '/site.webmanifest', // Links the Android manifest file
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
    "url": "https://www.redvanda.vc", // Ensure this matches your real domain
    "logo": "https://www.redvanda.vc/logo.png",
    "description": "Global venture capital firm investing in deep tech and infrastructure.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Aizawl",
      "addressRegion": "Mizoram",
      "postalCode": "796001",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/red-vanda-partners",
      "https://twitter.com/redvanda"
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