'use client';

import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation"; 
import { useState, useEffect } from "react"; 
import { Container } from "@/components/ui/Container";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Investment Thesis", href: "/thesis" },
    { name: "Team", href: "/team" },
    { name: "News & Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <>
      {/* FIX 1: Header Z-Index set to z-[1000]. 
        This is the highest layer. It ensures the Logo and the 'X' button 
        sit ON TOP of the mobile menu overlay.
      */}
      <header className="fixed top-0 w-full z-[1000] bg-white/98 backdrop-blur-md border-b border-neutral-200 shadow-sm transition-all duration-300">
        <Container className="flex items-center justify-between h-20">
          
          {/* --- LOGO SECTION --- */}
          <Link 
            href="/" 
            className="shrink-0 flex items-center mr-auto"
            onClick={() => setIsMobileOpen(false)} // Close menu if clicking logo
          >
            <Image 
              src="/logo.png"       
              alt="Red Vanda Partners"
              width={280}           
              height={75}           
              className="h-5 md:h-6 w-auto object-contain object-left" 
              priority              
            />
          </Link>
          
          {/* --- DESKTOP NAV --- */}
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
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#a80607] transition-all duration-300 
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}></span>
                </Link>
              );
            })}
            
            <Link 
              href="/contact" 
              className="px-6 py-2.5 text-sm font-bold text-white bg-[#a80607] hover:bg-[#850506] rounded-lg transition-all shadow-md hover:shadow-lg shadow-red-900/10 whitespace-nowrap"
            >
              Pitch Us
            </Link>
          </nav>

          {/* --- MOBILE TOGGLE --- */}
          <button 
            className="lg:hidden p-2 text-neutral-900 hover:text-[#a80607] transition-colors focus:outline-none ml-auto"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Menu"
          >
            {/* The X is now guaranteed to be visible because the Header is z-[1000] */}
            {isMobileOpen ? (
              <X className="w-8 h-8" strokeWidth={1.5} />
            ) : (
              <Menu className="w-8 h-8" strokeWidth={1.5} />
            )}
          </button>
        </Container>
      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
      {/* FIX 2: Z-Index set to z-[999].
        This puts it one layer BELOW the header. 
        The white background covers the page content, but the Header (with the X) stays visible.
      */}
      <div 
        className={`fixed inset-0 z-[999] bg-white transition-all duration-300 ease-in-out lg:hidden flex flex-col items-center justify-start
        ${isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
      `}>
        {/* FIX 3: Added pt-32 (Padding Top). 
          Since the header is fixed on top, we need to push the links down 
          so they don't get hidden behind the logo/header area.
        */}
        <nav className="flex flex-col gap-6 text-center px-6 w-full max-w-sm pt-32">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className={`text-2xl font-serif font-medium transition-colors py-2
                ${pathname === link.href ? "text-[#a80607]" : "text-slate-900 hover:text-[#a80607]"}
              `}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="h-px w-20 bg-neutral-200 mx-auto my-4"></div>
          
          <Link 
            href="/contact"
            onClick={() => setIsMobileOpen(false)}
            className="mt-2 px-10 py-4 text-xl font-bold text-white bg-[#a80607] rounded-full shadow-xl shadow-red-900/10 transition-transform active:scale-95"
          >
            Pitch Us
          </Link>
        </nav>
      </div>
    </>
  );
};