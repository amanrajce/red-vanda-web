'use client';

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Linkedin, Mail, ArrowUpRight, X, GraduationCap, Quote } from "lucide-react"; 
import Image from "next/image";
import Link from "next/link";

// --- TYPES ---
interface TeamMember {
  name: string;
  role: string;
  shortBio: string;
  fullBio: string[]; 
  quote: string;
  education: string[];
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
      name: "Malsawmkima Sailung",
      role: "Managing Partner",
      shortBio: "Leads investment strategy and governance. Formerly in investment banking at Nangia Andersen and strategy at Everest Group.",
      fullBio: [
        "Malsawmkima is the Managing Partner of Red Vanda Partners LLP, where he leads the firm’s investment strategy, governance framework, and portfolio development. He focuses on backing technology-enabled and impact-oriented businesses, with an emphasis on long-term value creation and disciplined capital allocation.",
        "In his role, he oversees investment thesis development, fund processes, and portfolio construction, while maintaining close relationships with investors. His investment approach is centered on proprietary sourcing, strong founder alignment, and active post-investment engagement.",
        "Prior to Red Vanda Partners, he worked in investment banking at Nangia Andersen, a member firm of Andersen Global, where he advised early- and growth-stage companies on venture capital and growth equity transactions. His experience includes deal origination, valuation and commercial due diligence, and end-to-end transaction execution alongside founders, co-investors, and legal and advisory teams.",
        "Earlier in his career, he held strategic advisory and research roles at Everest Group, advising global technology and IT-enabled services firms. He previously worked with Deloitte and Wipro on large-scale digital transformation and public-sector advisory engagements, experience that continues to inform his practical, execution-oriented approach to working with portfolio companies.",
        "Malsawmkima brings a combination of investment banking rigor, strategic advisory depth, and operational understanding to his role as Managing Partner, with a long-term orientation toward building resilient businesses and trusted partnerships with founders and investors."
      ],
      quote: "We invest with patience where long-term fundamentals outlast short-term momentum.",
      education: ["MBA, IIM Kozhikode", "BCA, Govt. Zirtiri Residential Science College"],
      imageSrc: "/director1.jpeg",
      linkedin: "https://www.linkedin.com/in/malsawmkima/",
      email: "mailto:kima.sailung@redvanda.vc"
    },
    {
      name: "Rinzuala",
      role: "Partner",
      shortBio: "CEO of Mizoram Startup Mission with deep experience in institution-building and policy-linked capital deployment.",
      fullBio: [
        "Rinzuala is a Partner at Red Vanda Partners LLP, where he contributes to the firm’s investment strategy, ecosystem engagement, and portfolio support, with a particular focus on early-stage enterprises operating in underserved and emerging markets. He brings deep experience in institution-building, public–private collaboration, and policy-linked capital deployment, complementing the firm’s investment and governance framework.",
        "In parallel, he serves as CEO of the Mizoram Startup Mission under the Government of Mizoram, where he leads the state’s startup and entrepreneurship agenda. In this role, he has overseen the incubation and scale-up of high-potential startups and supported more than 130 entrepreneurs through the deployment of grants and government-backed seed funding.",
        "His responsibilities include pipeline development, structured due diligence and performance reviews, and the formation of strategic partnerships with investors, industry participants, and incubators to enable market access and follow-on funding.",
        "Rinzuala is also the Chairman of Angel Business Promoters of Mizoram, a not-for-profit organization focused on strengthening rural MSMEs through early-stage capital and technical assistance. Through this platform, he has helped mobilize over ₹35 crore in early-stage funding while mentoring enterprises on business planning, market strategy, governance, and compliance.",
        "Earlier in his career, he held leadership roles at MIZOFED, the United Nations Development Programme, and private sector enterprises, spanning cooperative governance, rural enterprise development, public–private partnerships, and SME strategy. Across roles, he brings a pragmatic, institution-oriented perspective to investing and ecosystem development."
      ],
      quote: "Building institutions that bridge public policy with private capital to unlock emerging markets.",
      education: ["MBA, IIM Kozhikode", "B.Com (Honours), SRCC"],
      imageSrc: "/director2.jpeg",
      linkedin: "https://www.linkedin.com/in/rinzuala-ceo-531131308/",
      email: "mailto:ceo@msum.co.in"
    },
    {
      name: "Lalngaihawma",
      role: "Investment Team",
      shortBio: "Supports opportunity sourcing and diligence with a research-driven approach. Experienced in financial analysis and market sizing.",
      fullBio: [
        "Lalngaihawma is part of the Investment team supporting the investment team across opportunity sourcing, market research, and diligence for early-stage and growth-oriented investments. His work includes evaluating business models, analyzing sector dynamics, validating data, and supporting the preparation of investment committee materials with a strong emphasis on analytical rigor and consistency.",
        "He brings a research-driven approach to investment evaluation, with experience in financial analysis, market sizing, and performance benchmarking. His background enables him to support disciplined underwriting processes and contribute to evidence-based decision-making across the investment lifecycle.",
        "Lalngaihawma has prior exposure to market and consumer research through roles with private-sector organizations, where he supported competitive analysis and data interpretation. He contributes to the fund’s research and investment processes with a structured, detail-oriented approach, supporting the identification of scalable businesses in emerging markets."
      ],
      quote: "Play long-term games with long-term people.",
      education: ["MBA (Finance), Mizoram University", "BBA, Madras Christian College"],
      imageSrc: "/director3.jpeg",
      linkedin: "https://www.linkedin.com/in/ngaiha-khawlhring-728230106/",
      email: "mailto:research_analyst1@msum.co.in"
    }
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-[#a80607] selection:text-white">
      
      {/* --- HERO --- */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 border-b border-slate-100">
        <Container>
          <div className="max-w-4xl animate-slide-up">
            
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

                  {/* BOTTOM ROW (Know More only) */}
                  <div className="mt-auto pt-4 flex items-center justify-end group/btn">
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

                {/* EDUCATION SECTION (Focus Removed) */}
                <div className="pt-8 md:pt-10 border-t border-slate-100">
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