'use client';

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Linkedin, Mail, ArrowUpRight, X, GraduationCap, Briefcase, Quote } from "lucide-react"; 
import Image from "next/image";
import Link from "next/link";

// --- TYPES ---
interface TeamMember {
  name: string;
  role: string;
  shortBio: string;
  fullBio: string[]; 
  quote: string;
  focus: string[];
  education: string[];
  boards?: string[];
  imageSrc: string;
  linkedin?: string;
  email?: string;
}

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedMember]);

  const team: TeamMember[] = [
    {
      name: "Malsawmkima",
      role: "General Partner",
      shortBio: "A veteran of the deep-tech ecosystem with 15 years of operational experience. Formerly led infrastructure scaling at [Tech Giant].",
      fullBio: [
        "Malsawmkima brings over 15 years of deep operational experience to Red Vanda. Before founding the firm, he led the infrastructure scaling division at a major tech giant, where he managed a $200M P&L and oversaw the deployment of next-gen data centers across APAC.",
        "His investment philosophy is rooted in the belief that the physical world is the next great frontier for software. He specifically looks for founders who are bridging the gap between 'bits and atoms'—using software to orchestrate complex physical systems.",
        "At Red Vanda, he leads the Industrial AI and Energy Sovereignty practices, working closely with founders to navigate the complexities of selling into legacy industries."
      ],
      quote: "The next decade's returns will come from founders building physical infrastructure.",
      focus: ["Energy", "Industrial AI", "Hard Tech"],
      education: ["MS, Electrical Engineering, IIT Bombay", "BS, Physics, St. Stephen's"],
      boards: ["Atom Grid", "Nexus Materials", "Core Infra"],
      imageSrc: "/director1.jpeg",
      linkedin: "https://www.linkedin.com/in/malsawmkima/",
      email: "mailto:partner@redvanda.vc"
    },
    {
      name: "Rinzuala",
      role: "Partner",
      shortBio: "An operator-investor who has navigated the 'impossible' stages of growth. Brings a global perspective connecting Silicon Valley innovation with Asian scale.",
      fullBio: [
        "Rinzuala is an operator-investor who thrives in the chaos of the zero-to-one phase. Having spent a decade in Silicon Valley, he was an early product leader at two unicorns, where he helped scale user bases from thousands to millions.",
        "He returned to India with a specific thesis: that the next generation of global SaaS giants will be built from India's Tier 2 hubs. He specializes in product-led growth (PLG) mechanics and helps technical founders turn prototypes into scalable platforms.",
        "He leads the firm's thesis on Biological Compute and Logistics Infrastructure."
      ],
      quote: "We back founders during the 'threat' phase—when tech works but the market isn't ready.",
      focus: ["Bio Compute", "Logistics", "Fin-Infra"],
      education: ["MBA, Stanford GSB", "B.Tech, Computer Science"],
      boards: ["BioSync", "LogiChain"],
      imageSrc: "/director2.jpeg",
      linkedin: "https://www.linkedin.com/in/your-profile",
      email: "mailto:partner@redvanda.vc"
    },
    {
      name: "Member Name",
      role: "Principal / Partner",
      shortBio: "Bringing 10+ years of experience in scaling technology infrastructure and supporting early-stage founders through critical growth phases.",
      fullBio: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ],
      quote: "This is a placeholder for a strategic quote about the partner's investment philosophy.",
      focus: ["Sector A", "Sector B", "Sector C"],
      education: ["PhD, Economics", "BA, Finance"],
      imageSrc: "/director1.jpeg",
      linkedin: "https://www.linkedin.com",
      email: "mailto:partner@redvanda.vc"
    }
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-[#a80607] selection:text-white">
      
      {/* --- HERO --- */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 border-b border-slate-100">
        <Container>
          <div className="max-w-4xl animate-slide-up">
            
            {/* REMOVED: "The Partnership" Badge and Dot */}
            
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

      {/* --- TEAM GRID --- */}
      <section className="py-16 md:py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 lg:gap-y-24">
            
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group flex flex-col h-full cursor-pointer relative transition-transform active:scale-[0.98] duration-200" 
                onClick={() => setSelectedMember(member)}
              >
                
                {/* IMAGE FRAME */}
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
                  <div className="flex justify-between items-start mb-2 relative">
                    <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-[#a80607] transition-colors pr-8">
                      {member.name}
                    </h3>

                    {/* LINKEDIN BUTTON */}
                    {member.linkedin && (
                      <Link 
                        href={member.linkedin}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()} 
                        className="hidden lg:block text-slate-300 hover:text-[#0077b5] transition-all duration-300 opacity-0 group-hover:opacity-100 absolute right-0 top-1 p-1 hover:bg-slate-50 rounded-md"
                        title="Connect on LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                  
                  <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-4">
                    {member.role}
                  </p>

                  <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 font-light border-l border-slate-200 pl-4 line-clamp-3">
                    {member.shortBio}
                  </p>

                  {/* BOTTOM ROW */}
                  <div className="mt-auto pt-4 flex items-center justify-between group/btn">
                    <div className="flex flex-wrap gap-2">
                      {member.focus.slice(0, 2).map((tag, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-wide px-2 py-1 bg-slate-50 text-slate-500 rounded-md border border-slate-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#a80607] flex items-center gap-1 group-hover/btn:gap-2 transition-all">
                      Know More <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </Container>
      </section>

      {/* --- SLIDE-OVER DRAWER --- */}
      <div 
        className={`fixed inset-0 z-[5000] flex justify-end transition-opacity duration-500 ${selectedMember ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <div 
          className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-500"
          onClick={() => setSelectedMember(null)}
        />

        <div 
          className={`relative w-full md:max-w-xl h-full bg-white shadow-2xl overflow-y-auto transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${selectedMember ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {selectedMember && (
            <div className="min-h-full flex flex-col p-6 md:p-12 relative">
              
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 text-slate-400 hover:text-slate-900 transition-colors hover:bg-slate-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>

              {/* DRAWER HEADER */}
              <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-6 md:gap-8 items-start border-b border-slate-100 pb-8 md:pb-10 mb-8 md:mb-10">
                 
                 <div className="relative h-32 w-24 md:h-48 md:w-40 shrink-0 overflow-hidden rounded-lg bg-slate-100 shadow-sm">
                    <Image 
                       src={selectedMember.imageSrc} 
                       alt={selectedMember.name}
                       fill
                       className="object-cover object-top" 
                    />
                 </div>
                 
                 <div className="flex flex-col pt-2 w-full">
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mb-2 leading-tight">
                        {selectedMember.name}
                    </h2>
                    <p className="text-[#a80607] font-mono text-xs md:text-sm uppercase tracking-widest font-bold mb-6">
                        {selectedMember.role}
                    </p>
                    
                    <div className="flex gap-4 mt-auto">
                       <Link href={selectedMember.linkedin || "#"} target="_blank" className="text-slate-400 hover:text-[#0077b5] transition-colors p-2 -ml-2 hover:bg-slate-50 rounded-full">
                          <Linkedin className="w-5 h-5" />
                       </Link>
                       <Link href={selectedMember.email || "#"} className="text-slate-400 hover:text-[#a80607] transition-colors p-2 hover:bg-slate-50 rounded-full">
                          <Mail className="w-5 h-5" />
                       </Link>
                    </div>
                 </div>
              </div>

              {/* CONTENT BODY */}
              <div className="space-y-8 md:space-y-12">
                <div className="relative">
                   <Quote className="w-6 h-6 md:w-8 md:h-8 text-slate-200 mb-4" />
                   <p className="text-lg md:text-2xl font-serif italic text-slate-900 leading-relaxed pl-2">
                      "{selectedMember.quote}"
                   </p>
                </div>

                <div className="space-y-4">
                   <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 md:mb-4 block">Biography</h4>
                   {selectedMember.fullBio.map((para, i) => (
                      <p key={i} className="text-sm md:text-lg text-slate-600 leading-relaxed font-light">
                        {para}
                      </p>
                   ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 md:pt-10 border-t border-slate-100">
                   <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 md:mb-6">
                         <GraduationCap className="w-4 h-4 text-slate-400" /> Education
                      </h4>
                      <ul className="space-y-3">
                         {selectedMember.education.map((edu, i) => (
                            <li key={i} className="text-sm font-medium text-slate-900">
                               {edu}
                            </li>
                         ))}
                      </ul>
                   </div>

                   <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 md:mb-6">
                         <Briefcase className="w-4 h-4 text-slate-400" /> Investment Focus
                      </h4>
                      <div className="flex flex-wrap gap-2">
                         {selectedMember.focus.map((focus, i) => (
                            <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-bold uppercase tracking-wide text-slate-600">
                               {focus}
                            </span>
                         ))}
                      </div>
                   </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>

      {/* --- JOIN US CTA --- */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <Container className="relative z-10">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <span className="text-[#a80607] font-bold tracking-widest uppercase text-xs mb-4">Join the Team</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white drop-shadow-sm">
                    We are always hiring.
                </h2>
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