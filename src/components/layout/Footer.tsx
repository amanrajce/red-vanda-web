import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-900">
      <Container>
        <div className="flex flex-col pt-20 pb-12">
          
          {/* --- TOP SECTION --- */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
            
            {/* 1. Brand Identity (Left side - 5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-6">
                  Red Vanda <br /> Partners.
                </h2>
                <p className="text-neutral-500 max-w-sm leading-relaxed text-sm">
                  Architecting the next century of deep-tech infrastructure. 
                  <br />
                  Global capital. Generational patience.
                </p>
              </div>
            </div>

            {/* 2. Office Locations (Middle - 4 cols) */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-600 mb-4">
                  Headquarters
                </h3>
                <p className="text-neutral-400 text-sm leading-loose">
                  Aizawl<br />
                  Mizoram, 796001<br />
                  India
                </p>
              </div>
              {/* Space for future second office */}
              <div>
              </div>
            </div>

            {/* 3. Navigation & Logos (Right - 3 cols) */}
            <div className="lg:col-span-3 lg:text-right flex flex-col gap-8">
               
               {/* Site Map */}
               <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-600 mb-4">
                    Firm
                  </h3>
                  <ul className="space-y-3">
                    {/* RENAMED 'Manifesto' to 'About' to match your Navbar */}
                    <li><Link href="/about" className="text-neutral-300 hover:text-white transition-colors">About</Link></li>
                    <li><Link href="/team" className="text-neutral-300 hover:text-white transition-colors">Partners</Link></li>
                    <li><Link href="/insights" className="text-neutral-300 hover:text-white transition-colors">Insights</Link></li>
                    <li><Link href="/contact" className="text-neutral-300 hover:text-white transition-colors">Contact</Link></li>
                  </ul>
               </div>

               {/* Social Media Logos (LinkedIn, X, Email) */}
               <div className="flex gap-4 lg:justify-end mt-2">
                  
                  {/* LinkedIn */}
                  <a 
                    href="#" 
                    aria-label="LinkedIn" 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 hover:bg-white hover:text-neutral-950 transition-all duration-300"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  <a 
                    href="#" 
                    aria-label="X (Twitter)" 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 hover:bg-white hover:text-neutral-950 transition-all duration-300"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:partners@redvanda.com" 
                    aria-label="Email" 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 hover:bg-white hover:text-neutral-950 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </a>

               </div>
            </div>
          </div>

          {/* --- BOTTOM SECTION --- */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-xs text-neutral-600 font-mono uppercase tracking-wider">
              © {new Date().getFullYear()} Red Vanda Partners LLC
            </div>
            
            <div className="flex gap-8">
              <Link href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
                Legal Disclaimer
              </Link>
              <Link href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
};