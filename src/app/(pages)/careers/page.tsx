"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { 
  ArrowRight, 
  Zap, 
  Globe, 
  Heart, 
  Compass, 
  ArrowUpRight,
  X,
  Briefcase,
  CheckCircle2,
  MapPin,
  Clock
} from "lucide-react";

// --- TYPES ---
interface JobOpening {
  role: string;
  location: string;
  type: string;
  shortDesc: string;
  fullDesc: string;
  responsibilities: string[];
  requirements: string[];
  link: string;
}

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedJob]);

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

  const openings: JobOpening[] = [
    {
      role: "Investment Associate",
      location: "Aizawl / Remote",
      type: "Full-time",
      shortDesc: "Drive due diligence and thesis formation for our deep-tech pipeline.",
      fullDesc: "We are looking for an Investment Associate to join our core deal team. You will be the first line of defense in identifying breakout founders and will play a critical role in shaping our investment thesis across Industrial AI and Hard Tech.",
      responsibilities: [
        "Lead sourcing efforts across Tier 2/3 innovation hubs and university ecosystems.",
        "Conduct deep-dive market research and competitive analysis for active deal flow.",
        "Prepare investment memos and financial models to support IC decisions.",
        "Support portfolio companies with financial planning and hiring."
      ],
      requirements: [
        "2-4 years of experience in VC, Investment Banking, or a high-growth startup.",
        "Strong financial modeling skills and ability to synthesize complex data.",
        "Genuine passion for deep-tech and infrastructure.",
        "Self-starter mentality; comfortable working in an unstructured environment."
      ],
      link: "mailto:careers@redvanda.vc?subject=Application: Investment Associate"
    },
    {
      role: "Head of Platform",
      location: "Bangalore",
      type: "Full-time",
      shortDesc: "Build the post-investment infrastructure to support our portfolio founders.",
      fullDesc: "The Head of Platform will architect the value-add engine of Red Vanda. You will move beyond 'check-writing' to building a tangible support system that helps our technical founders scale from seed to Series A.",
      responsibilities: [
        "Design and execute our portfolio support strategy (hiring, GTM, fundraising).",
        "Build a network of corporate partners for pilot programs.",
        "Manage the firm's community events and founder retreats.",
        "Facilitate knowledge transfer between portfolio CTOs."
      ],
      requirements: [
        "5+ years of operational experience (Chief of Staff, Ops, or Community).",
        "Deep network in the Indian startup ecosystem.",
        "High EQ and ability to build trust with technical founders.",
        "Experience building systems from scratch."
      ],
      link: "mailto:careers@redvanda.vc?subject=Application: Head of Platform"
    },
    {
      role: "Technical Scout",
      location: "Tier 2/3 Regions",
      type: "Contract / Part-time",
      shortDesc: "Identify breakout engineering talent in underserved university ecosystems.",
      fullDesc: "We believe the next Zuckerberg or Musk is building in a dorm room in Guwahati or Indore. Your job is to find them before anyone else does.",
      responsibilities: [
        "Map out student developer clubs and hackathons in your region.",
        "Identify high-potential projects and technical talent.",
        "Serve as the bridge between student founders and the Red Vanda partnership.",
        "Organize local meetups and technical workshops."
      ],
      requirements: [
        "Currently a student or recent grad deeply embedded in the local tech scene.",
        "Technical background (CS/Engineering) preferred.",
        "High energy and high agency.",
        "Strong written communication skills."
      ],
      link: "mailto:careers@redvanda.vc?subject=Application: Technical Scout"
    }
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-[#a80607] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
          <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#a80607]/10 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl animate-slide-up">
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

      {/* 3. OPEN ROLES (Redesigned with Interaction) */}
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
              <div 
                key={i} 
                className="group relative bg-white border border-slate-200 p-6 md:p-8 rounded-2xl md:rounded-3xl hover:border-slate-300 hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-[0.99]"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 group-hover:text-[#a80607] transition-colors">
                        {job.role}
                      </h3>
                      <span className="inline-block px-2.5 py-1 bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500 rounded-md border border-slate-200">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-slate-400">
                        <Globe size={12} /> {job.location}
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed max-w-xl line-clamp-2">
                        {job.shortDesc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="shrink-0">
                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-[#a80607] transition-colors border-b border-transparent group-hover:border-[#a80607] pb-0.5">
                      View Role <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* --- JOB DETAILS DRAWER (Slide-Over) --- */}
      <div 
        className={`fixed inset-0 z-[5000] flex justify-end transition-opacity duration-500 ${selectedJob ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <div 
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500"
          onClick={() => setSelectedJob(null)}
        />

        <div 
          className={`relative w-full md:max-w-2xl h-full bg-white shadow-2xl overflow-y-auto transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${selectedJob ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {selectedJob && (
            // OPTIMIZATION: Reduced padding for mobile (p-6)
            <div className="min-h-full flex flex-col p-6 md:p-10 relative">
              
              {/* Close Button: Better Touch Target */}
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="mt-8 mb-8 pb-8 border-b border-slate-100">
                <div className="flex gap-2 mb-4">
                   <span className="px-3 py-1 bg-[#a80607]/5 text-[#a80607] text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {selectedJob.type}
                   </span>
                </div>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mb-4 leading-tight">
                  {selectedJob.role}
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-500">
                   <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {selectedJob.location}
                   </div>
                   <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
                   <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Posted 2 days ago
                   </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="space-y-8 md:space-y-10">
                
                {/* Description */}
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">About The Role</h4>
                   <p className="text-slate-600 leading-relaxed text-sm md:text-lg font-light">
                      {selectedJob.fullDesc}
                   </p>
                </div>

                {/* Responsibilities */}
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" /> What You'll Do
                   </h4>
                   <ul className="space-y-3">
                      {selectedJob.responsibilities.map((item, idx) => (
                         <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-[#a80607] rounded-full shrink-0"></span>
                            {item}
                         </li>
                      ))}
                   </ul>
                </div>

                {/* Requirements */}
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> What We Need
                   </h4>
                   <ul className="space-y-3">
                      {selectedJob.requirements.map((item, idx) => (
                         <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-slate-300 rounded-full shrink-0"></span>
                            {item}
                         </li>
                      ))}
                   </ul>
                </div>

              </div>

              {/* Sticky Footer / Action */}
              <div className="mt-auto pt-10 sticky bottom-0 bg-white/95 backdrop-blur-sm pb-4 border-t border-slate-100">
                 <a 
                    href={selectedJob.link}
                    className="flex items-center justify-center gap-3 w-full py-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-[#a80607] transition-all shadow-xl hover:shadow-[#a80607]/20 active:scale-[0.98]"
                 >
                    Apply for this position <ArrowUpRight className="w-4 h-4" />
                 </a>
              </div>

            </div>
          )}
        </div>
      </div>

      {/* 4. GENERAL APPLICATION */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="relative w-full bg-[#a80607] rounded-[1.5rem] md:rounded-[2.5rem] px-6 py-8 md:p-16 overflow-hidden shadow-2xl shadow-[#a80607]/20">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10 text-center lg:text-left">
              <div>
                <h3 className="text-xl md:text-4xl font-serif font-bold text-white mb-2 md:mb-4">
                  Don't see your role?
                </h3>
                <p className="text-white/80 text-xs md:text-lg font-light max-w-xl">
                  We are always looking for exceptional talent. If you believe you belong at Red Vanda, pitch us your role.
                </p>
              </div>
              
              <div className="flex flex-col gap-2 w-full md:w-auto">
                <a 
                  href="mailto:careers@redvanda.vc?subject=Spontaneous Application"
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