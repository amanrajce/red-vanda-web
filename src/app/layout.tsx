import type { Metadata } from "next";
import { inter, playfair } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Red Vanda Partners",
  description: "Global venture capital firm investing in deep tech and infrastructure companies. Backing institutional founders building transformative technology.",
  keywords: "venture capital, deep tech, infrastructure, AI, climate tech, enterprise software",
  openGraph: {
    title: "Red Vanda Partners",
    description: "Backing institutional founders building transformative deep-tech infrastructure.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Removed organetto variable from className
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen font-sans antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}