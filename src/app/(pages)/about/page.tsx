import { Container } from "@/components/ui/Container";
import { Layers, Zap, TrendingUp, ArrowRight, MapPin, Target, Heart, HandHeart, Sparkles, Scale, FileText, Building2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  // 1. Roadmap
  const roadmap = [
    { 
      year: "2024", 
      title: "The Thesis Formation",
      desc: "Identifying the structural gaps in deep-tech financing and assembling the core partnership." 
    },
    { 
      year: "2025", 
      title: "Strategic Capital", 
      desc: "Pre-seed deployment and network architecture. Establishing presence in SF and Bangalore." 
    },
    { 
      year: "2026", 
      title: "Global Launch", 
      desc: "Official deployment of Fund I. The beginning of a new institutional era." 
    }
  ];

  // 2. Values
  const investmentProfile = [
    {
      title: "Conviction",
      desc: "We back founders with conviction, not consensus. When we believe in a vision, we commit fully.",
      icon: Target 
    },
    {
      title: "Proximity",
      desc: "Our presence in underserved markets gives us unique insights that distant investors simply cannot have.",
      icon: MapPin 
    },
    {
      title: "Partnership",
      desc: "We are not just investors, we are partners in your journey, offering support beyond capital.",
      icon: Heart 
    },
    {
      title: "Empathy",
      desc: "We understand the founder journey and support founders beyond capital through mentorship, networks, and strategic guidance.",
      icon: HandHeart 
    }
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-[#a80607] selection:text-white">
      
      {/* 1. HERO */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-white border-b border-slate-100">
        <Container className="relative z-10">
          <div className="max-w-4xl animate-slide-up px-4 md:px-0">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.1] lg:leading-[1.05] mb-6 lg:mb-8 tracking-tight">
              Architecting the <br />
              <span className="text-slate-400 italic font-light">Firm of the Future.</span>
            </h1>
            
            <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10 lg:mb-12">
              Red Vanda Partners backs exceptional founders across untapped <strong className="text-slate-900">Tier 2/3+ city markets</strong> and <strong className="text-slate-900">frontier technology</strong>, building companies that define the future.
            </p>

          </div>
        </Container>
      </section>

      {/* 2. OUR MISSION (Dark Theme - Layout Fixed) */}
      {/* FIX: Removed huge pb-64 and switched to standard padding to prevent overlap issues on mobile */}
      <section className="bg-slate-950 py-16 md:py-24 relative overflow-hidden z-10">
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Title & Vanda Inspiration */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
               <span className="text-[#a80607] font-bold tracking-widest uppercase text-xs mb-4 block">Our Purpose</span>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">Our Mission</h2>
               
               <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                     <Sparkles className="w-5 h-5 text-[#a80607]" />
                     <h4 className="font-bold text-white text-sm uppercase tracking-wide">Why "Vanda"?</h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                     Our name draws inspiration from the <strong>Vanda orchid</strong> resilient, distinctive, and capable of thriving in diverse environments. Like the orchid, we seek beauty and potential in places others overlook.
                  </p>
               </div>
            </div>

            {/* Right: Mission Narrative */}
            <div className="lg:col-span-8 space-y-8 md:space-y-10">
               <p className="text-lg md:text-2xl text-slate-300 leading-relaxed font-light">
                  At Red Vanda Partners, we believe the next wave of transformative companies will emerge from unexpected places. While others focus exclusively on established tech hubs, we've built expertise in identifying and nurturing exceptional founders wherever they are.
               </p>
               {/* Divider Line */}
               <div className="h-px w-24 bg-[#a80607]"></div>
               <p className="text-base md:text-lg text-slate-400 leading-relaxed">
                  Simultaneously, we recognize that frontier technology will reshape every industry. Our dual thesis allows us to capture opportunity across the full spectrum of innovation from grassroots disruption in emerging markets to breakthrough advances in AI, climate tech, and beyond.
               </p>
            </div>

          </div>
        </Container>
      </section>

      {/* 3. ROADMAP (Timeline) */}
      {/* FIX: Removed negative margins and rounded top. Now sits cleanly below the mission section. */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3 md:mb-4">The Road to 2026</h2>
            <p className="text-base md:text-lg text-slate-600">Our strategic path to institutional deployment.</p>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 lg:ml-8 space-y-12 md:space-y-16">
            {roadmap.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-12 lg:pl-16 group">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-slate-300 group-hover:border-[#a80607] transition-colors duration-300" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 mb-2">
                  <span className="text-2xl md:text-3xl font-serif font-bold text-slate-300 group-hover:text-slate-900 transition-colors duration-300">
                    {item.year}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. VALUES / DRIVERS */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">What Drives Us</h2>
            <p className="text-base md:text-lg text-slate-600">The principles that guide every investment decision and partnership we make.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentProfile.map((area, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[1rem] border border-slate-100 hover:border-[#a80607]/30 hover:shadow-lg transition-all duration-300">
                <area.icon className="w-8 h-8 text-[#a80607] mb-6" />
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{area.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. REGULATORY DISCLOSURE */}
      <div className="bg-slate-950 border-t border-slate-900 pt-20 pb-24 relative overflow-hidden">
         {/* Subtle Legal Grid Texture */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

         <Container className="relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
               
               {/* Left: Statement */}
               <div className="lg:w-1/3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
                     <Scale className="w-3.5 h-3.5 text-[#a80607]" />
                     <span className="text-[10px] font-mono uppercase tracking-widest text-white/80 font-bold">Compliance</span>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-4">Regulatory Disclosure</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                     Red Vanda Partners operates in strict compliance with the regulations set forth by the Securities and Exchange Board of India (SEBI).
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider">
                     <CheckCircle2 className="w-4 h-4 text-[#a80607]" />
                     Regulated Entity
                  </div>
               </div>

               {/* Right: Data Ledger Cards */}
               <div className="lg:w-2/3 grid md:grid-cols-2 gap-6 w-full">
                  
                  {/* Card 1: Fund Identity */}
                  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-colors group">
                     <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                        <FileText className="w-5 h-5 text-[#a80607]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-white">Fund Details</span>
                     </div>
                     <dl className="space-y-6">
                        <div>
                           <dt className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">AIF Name</dt>
                           <dd className="text-lg font-serif text-white group-hover:text-[#a80607] transition-colors">Senhri Investment Fund</dd>
                        </div>
                        <div>
                           <dt className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">Registration No.</dt>
                           <dd className="text-base font-mono text-white/90 bg-black/30 px-3 py-1 rounded w-fit border border-white/5">
                              IN/AIF1/25-26/1999
                           </dd>
                        </div>
                        <div>
                           <dt className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">Manager</dt>
                           <dd className="text-base font-serif text-white">Red Vanda Partners</dd>
                        </div>
                     </dl>
                  </div>

                  {/* Card 2: Location */}
                  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-colors group">
                     <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                        <Building2 className="w-5 h-5 text-[#a80607]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-white">Registered Office</span>
                     </div>
                     <address className="not-italic space-y-4">
                        <div>
                           <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">Entity</span>
                           <span className="text-base font-serif text-white">Mizoram Startup Mission</span>
                        </div>
                        <div>
                           <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">Location</span>
                           <div className="text-sm text-slate-300 leading-relaxed font-light">
                              <p>Planning Dept., Block I</p>
                              <p>Treasury Square, Aizawl</p>
                              <p className="mt-1 text-white font-medium">Mizoram, India - 796005</p>
                           </div>
                        </div>
                     </address>
                  </div>

               </div>
            </div>
         </Container>
      </div>

    </div>
  );
}