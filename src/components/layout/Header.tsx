'use client';

import Link from "next/link";
import Image from "next/image"; // Import Image component
import { usePathname } from "next/navigation"; 
import { useState } from "react"; 
import { Container } from "@/components/ui/Container";

export const Header = () => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Insights", href: "/insights" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/98 backdrop-blur-sm border-b border-neutral-300 transition-all">
        <Container className="flex items-center justify-between py-4">
          
          {/* --- IMAGE LOGO --- */}
          <Link href="/" className="shrink-0 hover:opacity-90 transition-opacity">
            <Image 
              src="/logo.png"       // Ensure 'logo.png' is in your 'public' folder
              alt="Red Vanda Partners"
              width={200}           // Adjust width as needed
              height={50}           // Adjust height as needed
              className="h-10 w-auto md:h-12 object-contain" // Responsive height
              priority              // Loads image immediately for LCP
            />
          </Link>
          {/* ------------------ */}
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`text-sm font-medium transition-colors relative group 
                    ${isActive ? "text-[#5c0607]" : "text-neutral-700 hover:text-[#5c0607]"}
                  `}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#a80607] transition-all duration-300 
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}></span>
                </Link>
              );
            })}
            
            <Link 
              href="/contact" 
              className="ml-2 px-7 py-2.5 text-sm font-medium text-white bg-[#5c0607] hover:bg-[#a80607] rounded-full transition-all hover:shadow-lg shadow-orange-900/10"
            >
              Pitch Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-neutral-700 hover:text-[#5c0607]"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-xl font-serif font-medium text-neutral-900 hover:text-[#5c0607]"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="mt-4 px-8 py-4 text-lg font-medium text-white bg-[#5c0607] rounded-full"
            >
              Pitch Us
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};