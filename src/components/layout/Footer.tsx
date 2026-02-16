import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-900 relative overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-[#a80607]/30 to-transparent"></div>

      <Container>
        <div className="flex flex-col pt-10 pb-6">
          {/* --- TOP SECTION --- */}
          <div className="grid lg:grid-cols-12 gap-8 mb-10 items-start">

            {/* 1. Brand Identity with Logo (PRESERVED) */}
            <div className="lg:col-span-5 flex flex-col items-start gap-3">
              <Link href="/" className="shrink-0 group">
                <Image
                  src="/logo.png"
                  alt="Red Vanda Partners"
                  width={280}
                  height={75}
                  className="h-7 w-auto object-contain object-left brightness-0 invert transition-opacity duration-300 group-hover:opacity-80"
                />
              </Link>
              <p className="text-neutral-400 max-w-sm leading-relaxed text-xs font-light">
                Red Vanda Partners backs tech-enabled companies and founders from India's Tier 2/3+ cities.
                <br />
              </p>
            </div>

            {/* 2. Office Locations */}
            <div className="lg:col-span-3 pt-1">
              <h3 className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#a80607] mb-3 font-bold">
                Headquarters
              </h3>
              <p className="text-neutral-300 text-xs leading-relaxed font-light">
                Planning Dept., Block I, Treasury Square<br />
                Aizawl, Mizoram, India — 796005
              </p>
            </div>

            {/* 3. Navigation - STATIC LINKS (COLOR CHANGE ONLY) */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4 pt-1">

              {/* Category: Company */}
              <div>
                <h3 className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#a80607] mb-3 font-bold">
                  Company
                </h3>
                <ul className="space-y-2 text-xs font-medium">
                  <li>
                    <Link
                      href="/about"
                      className="text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/team"
                      className="text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Category: Investing */}
              <div className="lg:text-right">
                <h3 className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#a80607] mb-3 font-bold">
                  Investing
                </h3>
                <ul className="space-y-2 text-xs font-medium">
                  <li>
                    <Link
                      href="/thesis"
                      className="text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      Investment Thesis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights"
                      className="text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      News & Insights
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/thesis#faq"
                      className="text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* --- BOTTOM SECTION --- */}
          <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
                © {new Date().getFullYear()} Red Vanda Partners LLP
              </div>
              <div className="flex gap-5">
                <Link href="#" className="text-[10px] text-neutral-500 hover:text-[#a80607] transition-colors uppercase tracking-widest">
                  Legal
                </Link>
                <Link href="#" className="text-[10px] text-neutral-500 hover:text-[#a80607] transition-colors uppercase tracking-widest">
                  Privacy
                </Link>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2.5">
              {/* LinkedIn Icon - URL Added */}
              <a
                href="https://www.linkedin.com/company/red-vanda-partners/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-7 h-7 flex items-center justify-center rounded-full bg-white/5 border border-white/5 hover:bg-[#a80607] hover:border-[#a80607] transition-all duration-300"
              >
                <svg className="w-3 h-3 fill-neutral-500 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* X (Twitter) Icon */}
              <a href="#" className="group w-7 h-7 flex items-center justify-center rounded-full bg-white/5 border border-white/5 hover:bg-[#a80607] hover:border-[#a80607] transition-all duration-300">
                <svg className="w-3 h-3 fill-neutral-500 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Email Icon */}
              <a href="mailto:info@redvanda.vc" className="group w-7 h-7 flex items-center justify-center rounded-full bg-white/5 border border-white/5 hover:bg-[#a80607] hover:border-[#a80607] transition-all duration-300">
                <svg className="w-3 h-3 text-neutral-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};