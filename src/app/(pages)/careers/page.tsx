"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { 
  ArrowRight, 
  Users, 
  Zap, 
  Globe, 
  Heart, 
  Compass, 
  Cpu,
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";

export default function CareersPage() {
  const values = [
    {
      title: "Contrarian Thinking",
      desc: "We value the correct non-consensus. We look for people who can identify structural shifts before they become obvious trends.",
      icon: Zap
    },
    {
      title: "Deep Generalists",
      desc: "Our team spans finance, engineering, and operations. We value intellectual range over hyper-specialization.",
      icon: Compass
    },
    {
      title: "Founder Empathy",
      desc: "We serve the founders. Every decision we make is rooted in respect for the difficulty of building from scratch.",
      icon: Heart
    }
  ];

  const openings = [
    {
      role: "Investment Associate",
      location: "Aizawl / Remote",
      type: "Full-time",
      desc: "Drive due diligence and thesis formation for our deep-tech pipeline.",
      link: "mailto:careers@redvanda.vc?subject=Application: Investment Associate"
    },
    {
      role: "Head of Platform",
      location: "Bangalore",
      type: "Full-time",
      desc: "Build the post-investment infrastructure to support our portfolio founders.",
      link: "mailto:careers@redvanda.vc?subject=Application: Head of Platform"
    },
    {
      role: "Technical Scout",
      location: "Tier 2/3 Regions",
      type: "Contract / Part-time",
      desc: "Identify breakout engineering talent in underserved university ecosystems.",
      link: "mailto:careers@redvanda.vc?subject=Application: Technical Scout"
    }
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-[#a80607] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
          <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#a80607]/10 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 tracking-tight">
              Build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600">
                Frontier Force.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed border-l-2 border-[#a80607] pl-4 md:pl-6">
              Venture capital is a people business. We are looking for the misfits, engineers, and operators ready to redefine how capital flows into India's deep-tech ecosystem.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. CULTURAL PILLARS */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <Container>
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">Our Culture</h2>
            <p className="text-sm md:text-base text-slate-500 max-w-xl">We operate more like a research lab than a bank. Here is what matters to us.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {values.map((v, i) => (
              <div key={i} className="group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-[#a80607]/30 hover:shadow-xl hover:shadow-[#a80607]/5 transition-all duration-500">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                  <v.icon className="w-5 h-5 md:w-6 md:h-6 text-[#a80607]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-serif font-bold text-slate-900 mb-2 md:mb-3">{v.title}</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. OPEN ROLES */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">Open Mandates</h2>
              <p className="text-sm md:text-base text-slate-500">Current opportunities to join the partnership.</p>
            </div>
            
            <div className="self-start md:self-auto text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
              {openings.length} Active Positions
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {openings.map((job, i) => (
              <div key={i} className="group relative bg-white border border-slate-200 p-6 md:p-8 rounded-2xl md:rounded-3xl hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 group-hover:text-[#a80607] transition-colors">
                        {job.role}
                      </h3>
                      <span className="inline-block px-2 py-0.5 bg-slate-100 text-[9px] font-bold uppercase tracking-widest text-slate-500 rounded border border-slate-200">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-wide text-slate-400 mb-1 md:mb-2">
                        <Globe size={12} /> {job.location}
                      </div>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-xl">
                        {job.desc}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 mt-2 md:mt-0">
                    <a 
                      href={job.link}
                      className="inline-flex md:flex items-center gap-2 md:gap-3 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-slate-900 text-white text-xs md:text-sm font-bold transition-transform group-hover:bg-[#a80607] group-hover:translate-x-1"
                    >
                      Apply Now <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. GENERAL APPLICATION - OPTIMIZED FOR MOBILE */}
      <section className="pb-16 md:pb-24">
        <Container>
          {/* Reduced padding from p-10 to px-6 py-8 for mobile */}
          <div className="relative w-full bg-[#a80607] rounded-[1.5rem] md:rounded-[2.5rem] px-6 py-8 md:p-16 overflow-hidden shadow-2xl shadow-[#a80607]/20">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
            
            {/* Reduced gap from gap-10 to gap-6 */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10 text-center lg:text-left">
              <div>
                {/* Reduced font size text-3xl -> text-xl on mobile */}
                <h3 className="text-xl md:text-4xl font-serif font-bold text-white mb-2 md:mb-4">
                  Don't see your role?
                </h3>
                {/* Reduced font size text-lg -> text-xs on mobile */}
                <p className="text-white/80 text-xs md:text-lg font-light max-w-xl">
                  We are always looking for exceptional talent. If you believe you belong at Red Vanda, pitch us your role.
                </p>
              </div>
              
              <div className="flex flex-col gap-2 w-full md:w-auto">
                <a 
                  href="mailto:careers@redvanda.vc?subject=Spontaneous Application"
                  // Compact button padding for mobile: px-6 py-3
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-10 md:py-5 bg-white text-[#a80607] font-bold text-xs md:text-sm uppercase tracking-widest rounded-xl md:rounded-2xl hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full md:w-auto"
                >
                  Email Your CV <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </a>
                <span className="text-[9px] md:text-[10px] text-white/60 font-mono uppercase tracking-widest text-center">
                  Review time: ~5 Days
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}