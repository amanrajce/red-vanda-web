'use client';

import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation"; 
import { useState, useEffect } from "react"; 
import { Container } from "@/components/ui/Container";

export const Header = () => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileOpen]);

  // Navigation Links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Investment Thesis", href: "/thesis" },
    { name: "Team", href: "/team" },
    { name: "News & Insights", href: "/insights" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-[100] bg-white/98 backdrop-blur-md border-b border-neutral-200 shadow-sm transition-all duration-300">
        <Container className="flex items-center justify-between h-20">
          
          {/* --- LOGO (Links to Home) --- */}
          {/* Added z-index to ensure logo is clickable even if menu overlay has issues */}
          <Link href="/" className="shrink-0 hover:opacity-90 transition-opacity relative z-[110]">
            <Image 
              src="/logo.png"       
              alt="Red Vanda Partners"
              width={180}           
              height={45}           
              className="h-10 w-auto md:h-12 object-contain" 
              priority              
            />
          </Link>
          
          {/* --- DESKTOP NAV --- */}
          {/* Changed 'md:flex' to 'lg:flex' so tablets get the mobile menu instead of cramped text */}
          {/* Added 'ml-auto' to push nav to the right, creating space from logo */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 ml-auto pl-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`text-sm font-medium transition-colors relative group whitespace-nowrap
                    ${isActive ? "text-[#a80607]" : "text-neutral-600 hover:text-[#a80607]"}
                  `}
                >
                  {link.name}
                  {/* Active Underline Animation */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#a80607] transition-all duration-300 
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}></span>
                </Link>
              );
            })}
            
            {/* Pitch Us Button */}
            <Link 
              href="/contact" 
              className="px-6 py-2.5 text-sm font-bold text-white bg-[#a80607] hover:bg-[#850506] rounded-lg transition-all shadow-md hover:shadow-lg shadow-red-900/10 whitespace-nowrap"
            >
              Pitch Us
            </Link>
          </nav>

          {/* --- MOBILE/TABLET MENU BUTTON --- */}
          {/* Visible on Mobile (default) and Tablets (md), Hidden on Laptop (lg) */}
          <button 
            className="lg:hidden p-2 text-neutral-700 hover:text-[#a80607] relative z-[110] transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? (
              // Close Icon (X)
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </Container>
      </header>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      {/* Optimized for professional feel with fade/slide effect */}
      <div 
        className={`fixed inset-0 z-[100] bg-white/98 backdrop-blur-xl transition-all duration-300 ease-in-out lg:hidden flex flex-col items-center justify-center
        ${isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
      `}>
        <nav className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className={`text-2xl font-serif font-medium transition-colors
                ${pathname === link.href ? "text-[#a80607]" : "text-neutral-800 hover:text-[#a80607]"}
              `}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="/contact"
            onClick={() => setIsMobileOpen(false)}
            className="mt-6 px-10 py-4 text-xl font-bold text-white bg-[#a80607] rounded-full shadow-xl shadow-red-900/10 transition-transform active:scale-95"
          >
            Pitch Us
          </Link>
        </nav>
      </div>
    </>
  );
};