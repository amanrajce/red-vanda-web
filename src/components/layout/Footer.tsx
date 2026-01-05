import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-900 relative overflow-hidden">
      
      {/* Optional: Subtle top glow for premium feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-red-900/20 to-transparent"></div>

      <Container>
        {/* Reduced vertical padding for a thinner look (pt-12 pb-8) */}
        <div className="flex flex-col pt-12 pb-8">
          
          {/* --- TOP SECTION --- */}
          {/* Reduced bottom margin (mb-12) */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
            
            {/* 1. Brand Identity (Left side - 5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-start gap-4">
              
              {/* BRAND WORDMARK */}
              <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight leading-[1.1]">
                <span className="text-[#a80607]">Red Vanda</span> <span className="text-[#5c0607]">Partners.</span>
              </h2>

              <p className="text-neutral-500 max-w-sm leading-relaxed text-sm">
                Architecting the next century of deep-tech infrastructure. 
                <br />
                Global capital. Generational patience.
              </p>
            </div>

            {/* 2. Office Locations (Middle - 4 cols) */}
            <div className="lg:col-span-4 grid grid-cols-1 gap-8 pt-1">
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-3 font-bold">
                  Headquarters
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Aizawl<br />
                  Mizoram, 796001<br />
                  India
                </p>
              </div>
            </div>

            {/* 3. Navigation & Logos (Right - 3 cols) */}
            <div className="lg:col-span-3 lg:text-right flex flex-col gap-8 pt-1">
               
               {/* Site Map */}
               <div>
                  <h3 className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 mb-3 font-bold">
                    Firm
                  </h3>
                  <ul className="space-y-2 font-medium text-sm">
                    <li>
                        <Link href="/about" className="text-neutral-400 hover:text-[#a80607] transition-colors duration-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/team" className="text-neutral-400 hover:text-[#a80607] transition-colors duration-300">
                            Partners
                        </Link>
                    </li>
                    <li>
                        <Link href="/insights" className="text-neutral-400 hover:text-[#a80607] transition-colors duration-300">
                            Insights
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-neutral-400 hover:text-[#a80607] transition-colors duration-300">
                            Contact
                        </Link>
                    </li>
                  </ul>
               </div>

               {/* Social Media Logos */}
               <div className="flex gap-3 lg:justify-end">
                  
                  {/* LinkedIn */}
                  <a 
                    href="#" 
                    aria-label="LinkedIn" 
                    className="group w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/5 hover:bg-[#a80607] hover:border-[#a80607] hover:text-white transition-all duration-300"
                  >
                    <svg className="w-3.5 h-3.5 fill-neutral-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  <a 
                    href="#" 
                    aria-label="X (Twitter)" 
                    className="group w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/5 hover:bg-[#a80607] hover:border-[#a80607] hover:text-white transition-all duration-300"
                  >
                    <svg className="w-3.5 h-3.5 fill-neutral-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:partners@redvanda.com" 
                    aria-label="Email" 
                    className="group w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/5 hover:bg-[#a80607] hover:border-[#a80607] hover:text-white transition-all duration-300"
                  >
                    <svg className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </a>

               </div>
            </div>
          </div>

          {/* --- BOTTOM SECTION --- */}
          <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-[10px] text-neutral-600 font-mono uppercase tracking-wider">
              © {new Date().getFullYear()} Red Vanda Partners LLP
            </div>
            
            <div className="flex gap-6">
              <Link href="#" className="text-[10px] text-neutral-600 hover:text-[#a80607] transition-colors duration-300">
                Legal Disclaimer
              </Link>
              <Link href="#" className="text-[10px] text-neutral-600 hover:text-[#a80607] transition-colors duration-300">
                Privacy Policy
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
};