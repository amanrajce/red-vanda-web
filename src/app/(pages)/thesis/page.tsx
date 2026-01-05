import { Container } from "@/components/ui/Container";
import { 
  MapPin, 
  Cpu, 
  CheckCircle2, 
  Target, 
  Globe, 
  TrendingUp 
} from "lucide-react";

export default function ThesisPage() {
  return (
    <div className="bg-white text-slate-900 selection:bg-[#a80607] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 text-white">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl animate-slide-up px-2 md:px-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#a80607] animate-pulse"></span>
              Fund I Strategy
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 tracking-tight break-words">
              Two Distinct Theses, <br />
              <span className="text-slate-400 italic font-light">One Unified Vision.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-3xl font-light">
              We pursue opportunity wherever it emerges—from emerging city economies to the cutting edge of technology.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. THESIS I: UNTAPPED MARKETS */}
      <section className="py-16 md:py-24 border-b border-slate-100">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            
            {/* Left: Visual Identity (Sticky only on Desktop) */}
            <div className="lg:col-span-4 relative lg:sticky lg:top-32 lg:self-start">
               <div className="w-14 h-14 md:w-16 md:h-16 bg-[#a80607] rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-xl shadow-[#a80607]/20">
                  <MapPin className="w-7 h-7 md:w-8 md:h-8 text-white" />
               </div>
               <span className="text-[#a80607] font-mono text-xs uppercase tracking-widest font-bold mb-2 block">
                 Thesis I
               </span>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2 md:mb-4">
                 Untapped Markets
               </h2>
               <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400">
                 Tier 2/3+ Cities • Sector Agnostic
               </p>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-8">
               <div className="prose prose-lg text-slate-600 mb-10 md:mb-12 leading-relaxed">
                  <p className="text-lg md:text-xl text-slate-900 font-light mb-6">
                    The next billion consumers won't come from Silicon Valley or Singapore's central business district. They'll emerge from the rapidly growing middle class in Tier 2 and Tier 3 cities across Southeast Asia, India, and beyond.
                  </p>
                  <p className="text-base md:text-lg">
                    These markets are characterized by rapidly growing populations, increasing smartphone penetration, rising disposable incomes, and entrepreneurs who deeply understand local needs. We believe the most successful companies serving these markets will be built by founders who live and breathe these communities.
                  </p>
               </div>

               <div className="bg-slate-50 rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 border border-slate-100">
                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-6">What We Look For</h3>
                  {/* Grid becomes 1 column on mobile to prevent squashed text */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                     {[
                       "Founders with deep local market understanding",
                       "Capital-efficient business models",
                       "Clear path to regional or national scale",
                       "Solving genuine pain points for underserved populations"
                     ].map((item, i) => (
                       <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#a80607] shrink-0 mt-0.5" />
                          <span className="text-sm md:text-base text-slate-700 font-medium leading-snug">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 3. THESIS II: FRONTIER TECH */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            
            {/* Left: Visual Identity */}
            <div className="lg:col-span-4 relative lg:sticky lg:top-32 lg:self-start">
               <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-xl">
                  <Cpu className="w-7 h-7 md:w-8 md:h-8 text-white" />
               </div>
               <span className="text-slate-500 font-mono text-xs uppercase tracking-widest font-bold mb-2 block">
                 Thesis II
               </span>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2 md:mb-4">
                 Tech-Enabled & <br className="hidden md:block"/> Frontier Tech
               </h2>
               <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400">
                 Mainstream Markets • Tech Focused
               </p>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-8">
               <div className="prose prose-lg text-slate-600 mb-10 md:mb-12 leading-relaxed">
                  <p className="text-lg md:text-xl text-slate-900 font-light mb-6">
                    Technology continues to reshape every industry. We back technical founders building category-defining companies that leverage breakthrough technologies—from AI to climate solutions.
                  </p>
                  <p className="text-base md:text-lg">
                    We look for founders with deep technical expertise, clear product vision, and the ambition to build global companies. We're particularly excited about technologies that can fundamentally transform how businesses operate or address existential challenges facing humanity.
                  </p>
               </div>

               <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-6">What We Look For</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                     {[
                       "Technical founders with domain expertise",
                       "Proprietary technology or unique IP",
                       "Large addressable markets",
                       "Potential for category leadership",
                       "Strong early traction or compelling vision"
                     ].map((item, i) => (
                       <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                          <span className="text-sm md:text-base text-slate-700 font-medium leading-snug">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 4. INVESTMENT PARAMETERS */}
      <section className="py-16 md:py-24 bg-white">
         <Container>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4">
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 md:mb-6">The Mandate</h2>
               <p className="text-base md:text-lg text-slate-600">
                  Structured to support you from the earliest stages through your growth journey.
               </p>
            </div>

            {/* Grid adjusts from 1 col (mobile) to 3 cols (desktop) with proper gaps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-4 md:px-0">
               <div className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50 text-center hover:border-[#a80607]/30 transition-colors">
                  <Target className="w-8 h-8 text-[#a80607] mx-auto mb-4" />
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Check Size</div>
                  <div className="text-2xl md:text-3xl font-serif font-bold text-slate-900">Up to ₹5 Cr</div>
               </div>
               
               <div className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50 text-center hover:border-[#a80607]/30 transition-colors">
                  <Globe className="w-8 h-8 text-[#a80607] mx-auto mb-4" />
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Geography</div>
                  <div className="text-2xl md:text-3xl font-serif font-bold text-slate-900">Pan-India</div>
               </div>

               <div className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50 text-center hover:border-[#a80607]/30 transition-colors">
                  <TrendingUp className="w-8 h-8 text-[#a80607] mx-auto mb-4" />
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Stage</div>
                  <div className="text-xl md:text-2xl font-serif font-bold text-slate-900">Pre-Seed to Series A</div>
               </div>
            </div>
         </Container>
      </section>

    </div>
  );
}