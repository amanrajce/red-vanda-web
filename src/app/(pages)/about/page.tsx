import { Container } from "@/components/ui/Container";
import { Layers, Zap, TrendingUp, ArrowRight, ChevronDown, MapPin, Target, Heart } from "lucide-react";
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
    }
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-[#a80607] selection:text-white">
      
      {/* 1. HERO */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-white">
        <Container className="relative z-10">
          <div className="max-w-4xl animate-slide-up">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-slate-50 text-slate-900 border border-slate-200 rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-widest mb-6 lg:mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#a80607] animate-pulse"></span>
              Launching 2026
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.1] lg:leading-[1.05] mb-6 lg:mb-8 tracking-tight">
              Architecting the <br />
              <span className="text-slate-400 italic font-light">Firm of the Future.</span>
            </h1>
            
            <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10 lg:mb-12">
              Red Vanda Partners backs exceptional founders across untapped <strong className="text-slate-900">Tier 2/3+ city markets</strong> and <strong className="text-slate-900">frontier technology</strong>, building companies that define the future.
            </p>

            <div className="h-px w-full bg-slate-200" />
          </div>
        </Container>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 hover:opacity-100 transition-opacity cursor-default">
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Scroll</span>
          <ChevronDown className="w-5 h-5 text-slate-900" />
        </div>
      </section>

      {/* 2. THE STRATEGY */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-950 text-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">
            
            {/* Left: Sticky Header */}
            <div className="relative lg:sticky lg:top-32">
              <span className="text-red-500 font-mono text-xs uppercase tracking-widest font-bold mb-2 block">
                OUR STRATEGY
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 md:mb-6">
                Two Distinct Theses, <br /> One Unified Vision.
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-md">
                We pursue opportunity wherever it emerges, from emerging city economies to the cutting edge of technology.
              </p>
            </div>
            
            {/* Right: Theses List */}
            <div className="space-y-10 md:space-y-12">
              
              {/* Thesis 1 */}
              <div className="border-l-2 border-[#a80607] pl-6 md:pl-8">
                <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 block">TIER 2/3+ CITIES</span>
                <h3 className="text-xl md:text-2xl font-serif font-medium text-white mb-3 md:mb-4">Untapped Markets</h3>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-4">
                  The next billion consumers will emerge from Tier 2 and Tier 3 cities. We back founders who live and breathe these communities and understand local needs.
                </p>
                <ul className="text-sm text-slate-400 space-y-1 mb-6 font-medium">
                   <li>• Emerging City Economies</li>
                   <li>• Local Market Expertise</li>
                   <li>• Underserved Demographics</li>
                </ul>
                <Link href="/thesis#markets" className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-red-500 transition-colors">
                   LEARN MORE <ArrowRight className="w-4 h-4 text-red-500" />
                </Link>
              </div>
              
              {/* Thesis 2 */}
              <div className="border-l-2 border-slate-800 pl-6 md:pl-8 group hover:border-[#a80607] transition-colors duration-500">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block group-hover:text-red-500 transition-colors">MAINSTREAM MARKETS</span>
                <h3 className="text-xl md:text-2xl font-serif font-medium text-white mb-3 md:mb-4">Tech-Enabled and Frontier Tech</h3>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-4">
                  We back technical founders leveraging breakthrough technologies, from AI infrastructure to climate solutions, to transform industries.
                </p>
                <ul className="text-sm text-slate-400 space-y-1 mb-6 font-medium">
                   <li>• AI and Machine Learning</li>
                   <li>• Climate Tech and Sustainability</li>
                   <li>• Enterprise SaaS</li>
                </ul>
                <Link href="/thesis#tech" className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-red-500 transition-colors">
                   LEARN MORE <ArrowRight className="w-4 h-4 text-red-500" />
                </Link>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* 3. CTA: COMPACT & ACTIVE (Updated) */}
      <section className="py-16 px-4 bg-white border-t border-slate-100">
        <Container>
           <div className="relative bg-[#a80607] rounded-[2rem] p-10 md:p-14 text-center overflow-hidden shadow-2xl shadow-[#a80607]/20 max-w-5xl mx-auto">
              
              {/* Abstract Background Elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                    Ready to Build the Future?
                 </h2>
                 <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                    Whether you are building for underserved markets or pushing the boundaries of technology, we want to hear from you.
                 </p>
                 
                 <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link 
                       href="/contact" 
                       className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#a80607] font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-slate-50 hover:scale-105 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-w-[200px]"
                    >
                       Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </div>
              </div>
           </div>
        </Container>
      </section>

      {/* 4. ROADMAP (Timeline) */}
      <section className="py-16 md:py-24 bg-slate-50">
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

      {/* 5. VALUES / DRIVERS */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">What Drives Us</h2>
            <p className="text-base md:text-lg text-slate-600">The principles that guide every investment decision and partnership we make.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentProfile.map((area, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-[1rem] border border-slate-100 hover:border-[#a80607]/30 hover:shadow-lg transition-all duration-300">
                <area.icon className="w-8 h-8 text-[#a80607] mb-6" />
                <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-3">{area.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. REGULATORY FOOTER */}
      <div className="bg-slate-900 border-t border-slate-800 py-10 text-slate-400 text-xs">
         <Container>
            <div className="grid md:grid-cols-2 gap-8">
               <div>
                  <p className="font-bold text-white uppercase tracking-widest mb-2">Fund Details</p>
                  <p className="mb-1">AIF Name: Senhri Investment Fund</p>
                  <p className="mb-1">Registration No: IN/AIF1/25-26/1999</p>
                  <p>Investment Manager: Red Vanda Partners</p>
               </div>
               <div className="md:text-right">
                  <p className="font-bold text-white uppercase tracking-widest mb-2">Registered Office</p>
                  <p>Mizoram Startup Mission Planning Dept., Block I</p>
                  <p>796005 Treasury Square Aizawl</p>
                  <p>AIZAWL, MIZORAM, 796005</p>
               </div>
            </div>
         </Container>
      </div>

    </div>
  );
}