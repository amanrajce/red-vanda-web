'use client';

import { Container } from "@/components/ui/Container";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react"; 
import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  const team = [
    {
      name: "Malsawmkima",
      role: "General Partner",
      bio: "A veteran of the deep-tech ecosystem with 15 years of operational experience. Formerly led infrastructure scaling at [Tech Giant] and pioneered research in renewable energy grids.",
      quote: "The next decade's returns will come from founders building physical infrastructure.",
      focus: ["Energy", "Industrial AI", "Hard Tech"],
      imageSrc: "/director1.jpeg" 
    },
    {
      name: "Rinzuala",
      role: "Partner",
      bio: "An operator-investor who has navigated the 'impossible' stages of growth. Brings a global perspective connecting Silicon Valley innovation with Asian scale.",
      quote: "We back founders during the 'threat' phase—when tech works but the market isn't ready.",
      focus: ["Bio Compute", "Logistics", "Fin-Infra"],
      imageSrc: "/director2.jpeg"
    },
    // --- DUMMY MEMBER (Placeholder) ---
    {
      name: "Member Name",
      role: "Principal / Partner",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bringing 10+ years of experience in scaling technology infrastructure and supporting early-stage founders through critical growth phases.",
      quote: "This is a placeholder for a strategic quote about the partner's investment philosophy.",
      focus: ["Sector A", "Sector B", "Sector C"],
      imageSrc: "/director1.jpeg" 
    }
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-[#a80607] selection:text-white">
      
      {/* 1. HERO */}
      {/* OPTIMIZATION: Tighter padding on mobile (pt-28) to reduce white space gap */}
      <section className="pt-28 pb-12 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 border-b border-slate-100">
        <Container>
          <div className="max-w-4xl animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a80607] animate-pulse"></span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                The Partnership
              </span>
            </div>
            
            {/* OPTIMIZATION: Responsive font sizing text-4xl (mobile) -> text-7xl (desktop) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.05] mb-6 md:mb-8 tracking-tight">
              Conviction <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200 italic font-light">
                Capital.
              </span>
            </h1>
            
            <p className="text-base md:text-xl text-slate-600 max-w-2xl leading-relaxed border-l-2 border-[#a80607] pl-6">
              We are a high-concentration partnership. We invest our own capital, 
              take board seats, and work directly with founders. No committees.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. TEAM GRID */}
      <section className="py-16 md:py-24 lg:py-32">
        <Container>
          {/* OPTIMIZATION: gap-y-16 for mobile separation, gap-y-24 for desktop breathing room */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 lg:gap-y-24">
            
            {team.map((member, index) => (
              <div key={index} className="group flex flex-col h-full">
                
                {/* IMAGE FRAME - OPTIMIZED */}
                {/* MOBILE: w-full (fills column width for clarity)
                   DESKTOP: lg:w-[85%] (creates the refined, smaller look you requested)
                */}
                <div className="relative aspect-[4/5] w-full lg:w-[85%] bg-slate-100 overflow-hidden mb-6 md:mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out shadow-sm border border-slate-100">
                   <Image 
                      src={member.imageSrc} 
                      alt={member.name}
                      fill
                      className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   />
                </div>

                {/* INFO */}
                <div className="flex flex-col grow">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-[#a80607] transition-colors">
                      {member.name}
                    </h3>
                    
                    {/* OPTIMIZATION: Always visible on mobile for usability, opacity fade on desktop */}
                    <div className="flex gap-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                        <Link href="#" className="text-slate-400 hover:text-[#a80607] transition-colors p-1">
                            <Linkedin size={18} />
                        </Link>
                        <Link href="#" className="text-slate-400 hover:text-[#a80607] transition-colors p-1">
                            <Mail size={18} />
                        </Link>
                    </div>
                  </div>
                  
                  <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-4">
                    {member.role}
                  </p>

                  <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 font-light border-l border-slate-200 pl-4">
                    {member.bio}
                  </p>

                  {/* TAGS */}
                  <div className="mt-auto pt-4">
                    <div className="flex flex-wrap gap-2">
                      {member.focus.map((tag, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-wide px-2 py-1 bg-slate-50 text-slate-500 rounded-md border border-slate-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </Container>
      </section>

      {/* 3. JOIN US CTA (VISIBILITY FIXED) */}
      {/* OPTIMIZATION: 
          - Changed bg to slate-900 with a gradient to stand out from footer.
          - Added top border/highlight for definition.
          - Brightened text colors for better readability on phones.
      */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t border-slate-800 relative overflow-hidden">
        {/* Background texture for professional polish */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        
        <Container className="relative z-10">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <span className="text-[#a80607] font-bold tracking-widest uppercase text-xs mb-4">Join the Team</span>
                
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white drop-shadow-sm">
                    We are always hiring.
                </h2>
                
                {/* Lighter text (slate-300) for better contrast than slate-400 */}
                <p className="text-slate-300 text-base md:text-lg mb-8 font-light leading-relaxed">
                    We are looking for analysts, engineers, and operators who think differently.
                </p>
                
                <Link 
                  href="/careers" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-950 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-[#a80607] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#a80607]/20"
                >
                    View Open Roles <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>
        </Container>
      </section>
    </div>
  );
}