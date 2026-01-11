"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { 
  MapPin, 
  Cpu, 
  CheckCircle2, 
  Target, 
  Globe, 
  TrendingUp,
  Activity,
  Layers,
  ArrowRight,
  Sparkles,
  Plus,
  Minus
} from "lucide-react";

// --- FAQ DATA ---
const faqs = [
  {
    category: "01 Investment Logic",
    items: [
      {
        q: "Do you lead rounds?",
        a: "Yes. We are high-conviction investors. We prefer to lead or co-lead rounds across the lifecycle from Pre-Seed to Pre-IPO. We believe in taking pricing responsibility and helping set the governance structure for future success."
      },
      {
        q: "What is your ticket size and investment focus?",
        a: "We are Sector-Agnostic but strictly focus on Tech-Enabled Businesses building scalable IP or deep infrastructure. We do not invest in pure services or traditional SMEs. Our ticket size extends up to ₹5 Crores, backing founders from Pre-Seed to Pre-IPO stages."
      },
      {
        q: "What is your reserve policy?",
        a: "We back our winners aggressively. We typically reserve a 2:1 ratio (Capital Reserved : Initial Check) for follow-on rounds. When things work, we want to maintain our pro-rata ownership deep into the growth stages."
      }
    ]
  },
  {
    category: "02 Operational Cadence",
    items: [
      {
        q: "Do you take board seats?",
        a: "At the Seed stage, we typically take a Board Observer seat. At Series A, we require a Board Director seat. We are active partners we help with hiring, strategy, and downstream financing but we do not run the company."
      },
      {
        q: "How do you help beyond capital?",
        a: "Our platform team focuses on two things: Talent and Downstream Capital. We help you hire your first 10 engineers and we introduce you to Series B/C investors when you are ready to scale."
      }
    ]
  }
];

// --- COMPONENT: ACCORDION ITEM (Stateless) ---
const AccordionItem = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string, 
  answer: string, 
  isOpen: boolean, 
  onClick: () => void 
}) => {
  return (
    <div className={`group border-b border-slate-200 transition-colors duration-300 ${isOpen ? "bg-white" : "bg-transparent"}`}>
      <button
        onClick={onClick}
        className="relative w-full py-6 md:py-8 px-0 md:px-6 flex items-start justify-between text-left focus:outline-none"
      >
        <div className={`hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-[#a80607] transition-transform duration-300 origin-center ${isOpen ? "scale-y-100" : "scale-y-0"}`}></div>

        <span className={`text-lg md:text-xl font-serif font-medium transition-colors duration-300 pr-4 md:pr-8 ${isOpen ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"}`}>
          {question}
        </span>
        
        <span className={`flex-shrink-0 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full border transition-all duration-300 ${isOpen ? "border-[#a80607]/20 bg-[#a80607]/10 text-[#a80607] rotate-0" : "border-slate-200 text-slate-400 group-hover:border-[#a80607]/20 group-hover:text-[#a80607] rotate-90"}`}>
           {isOpen ? <Minus size={14} strokeWidth={2} /> : <Plus size={14} strokeWidth={2} />}
        </span>
      </button>
      
      <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="pb-6 md:pb-8 px-0 md:px-6">
             <p className="text-slate-600 leading-relaxed text-sm md:text-lg font-light max-w-3xl">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- ANALYTICS CARD COMPONENT ---
const ThesisAnalyticsCard = ({ 
  sectorTitle, 
  sectorDesc, 
  sectors,
  parameters 
}: { 
  sectorTitle: string, 
  sectorDesc?: string, 
  sectors: string[],
  parameters: { icon: any, label: string; value: string }[] 
}) => (
  <div className="group mt-12 md:mt-16 relative w-full bg-white rounded-[24px] md:rounded-[32px] border border-slate-200 shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-[#a80607]/10 transition-all duration-700">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#a80607]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#a80607]/10 transition-all duration-700"></div>

    <div className="relative z-10 flex flex-col lg:flex-row">
      <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100">
        <div>
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full border border-slate-200 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a80607] animate-pulse"></span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold whitespace-nowrap">Scope of Investment</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 leading-tight">
                {sectorTitle}
              </h4>
              {sectorDesc && <p className="text-sm text-slate-500 mt-2 font-light tracking-wide">{sectorDesc}</p>}
            </div>
            <div className="hidden md:flex p-3 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <Layers className="w-6 h-6 text-[#a80607]" />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-2.5">
            {sectors.map((sector, i) => (
              <span 
                key={i} 
                className="relative overflow-hidden px-3 py-1.5 md:px-4 md:py-2 bg-white text-slate-600 text-[10px] md:text-sm font-medium rounded-lg md:rounded-xl border border-slate-200 group/chip hover:border-[#a80607] hover:text-[#a80607] transition-all duration-300 cursor-default select-none"
              >
                <span className="absolute inset-0 bg-[#a80607]/5 translate-y-full group-hover/chip:translate-y-0 transition-transform duration-300"></span>
                <span className="relative z-10">{sector}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 bg-slate-950 text-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
        <h4 className="relative z-10 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 mb-6 md:mb-8 flex items-center gap-3">
          <Activity className="w-3 h-3 text-[#a80607]" />
          Parameters
        </h4>
        <div className="relative z-10 space-y-4 md:space-y-6">
          {parameters.map((param, i) => (
            <div key={i} className="group/param flex items-center justify-between border-b border-white/10 pb-3 md:pb-4 last:border-0 last:pb-0">
              <div className="flex items-center gap-3 shrink-0">
                <div className="p-1.5 md:p-2 rounded-lg bg-white/5 text-slate-400 group-hover/param:text-white transition-colors shrink-0">
                  <param.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-400 group-hover/param:text-white transition-colors whitespace-nowrap">
                  {param.label}
                </span>
              </div>
              <span className="text-sm md:text-lg font-serif font-bold text-white text-right ml-4 whitespace-nowrap">
                {param.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function ThesisPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<string | null>(null);

  const handleToggleFaq = (id: string) => {
    setOpenFaqIndex((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-white text-slate-900 selection:bg-[#a80607] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-slate-950/80 to-slate-950"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-5xl animate-slide-up px-2 md:px-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.05] mb-6 md:mb-8 tracking-tight text-white drop-shadow-lg">
              Two Distinct Theses, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-500 font-light italic">
                One Unified Vision.
              </span>
            </h1>
            
            {/* ADDED: Vertical line (border-l-2 border-[#a80607] pl-6) to match Career/Contact pages */}
            <p className="text-base md:text-xl text-slate-300 leading-relaxed max-w-3xl font-light drop-shadow-md border-l-2 border-[#a80607] pl-6">
              We pursue opportunity wherever it emerges from <span className="text-white font-medium">emerging city economies</span> to the <span className="text-white font-medium">cutting edge of technology</span>.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. THESIS I */}
      <section className="py-16 md:py-24 border-b border-slate-100">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            <div className="lg:col-span-4 relative lg:sticky lg:top-32 lg:self-start">
               <div className="w-12 h-12 md:w-16 md:h-16 bg-[#a80607] rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-xl shadow-[#a80607]/20">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
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

            <div className="lg:col-span-8">
               <div className="prose prose-lg text-slate-600 mb-10 md:mb-12 leading-relaxed">
                  <p className="text-lg md:text-xl text-slate-900 font-light mb-6">
                    The next billion consumers won't come from Silicon Valley or Singapore's central business district. They'll emerge from the rapidly growing middle class in Tier 2 and Tier 3 cities across India and beyond.
                  </p>
                  <p className="text-base md:text-lg">
                    These markets are characterized by rapidly growing populations, increasing smartphone penetration, and entrepreneurs who deeply understand local needs. We believe the most successful companies serving these markets will be built by founders who live and breathe these communities.
                  </p>
               </div>

               <div className="bg-slate-50 rounded-[24px] p-6 md:p-8 border border-slate-100 mb-8">
                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-6">What We Look For</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                     {[
                       "Founders with deep local market understanding",
                       "Capital-efficient business models",
                       "Clear path to regional or national scale",
                       "Solving genuine pain points"
                     ].map((item, i) => (
                       <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#a80607] shrink-0 mt-0.5" />
                          <span className="text-sm md:text-base text-slate-700 font-medium leading-snug">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>

               <ThesisAnalyticsCard 
                  sectorTitle="Sectors We Invest In"
                  sectorDesc="Broad mandate across emerging economies"
                  sectors={[
                    "Consumer & Retail",
                    "Financial Services", 
                    "Healthcare & Wellness",
                    "Agriculture & Food",
                    "Logistics & Supply Chain"
                  ]}
                  parameters={[
                    { icon: Target, label: "Check Size", value: "Up to ₹3 Cr" },
                    { icon: TrendingUp, label: "Stage", value: "Pre-Seed to Series A" },
                    { icon: Globe, label: "Geography", value: "Pan-India" },
                    { icon: CheckCircle2, label: "Board Seat", value: "Optional" }
                  ]}
               />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. THESIS II */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            <div className="lg:col-span-4 relative lg:sticky lg:top-32 lg:self-start">
               <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-xl">
                  <Cpu className="w-6 h-6 md:w-8 md:h-8 text-white" />
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

            <div className="lg:col-span-8">
               <div className="prose prose-lg text-slate-600 mb-10 md:mb-12 leading-relaxed">
                  <p className="text-lg md:text-xl text-slate-900 font-light mb-6">
                    Technology continues to reshape every industry. We back technical founders building category-defining companies that leverage breakthrough technologies from AI to climate solutions.
                  </p>
                  <p className="text-base md:text-lg">
                    We look for founders with deep technical expertise, clear product vision, and the ambition to build global companies. We're particularly excited about technologies that address existential challenges facing humanity.
                  </p>
               </div>

               <div className="bg-white rounded-[24px] p-6 md:p-8 border border-slate-200 shadow-sm mb-8">
                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-6">What We Look For</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                     {[
                       "Technical founders with domain expertise",
                       "Proprietary technology or unique IP",
                       "Large addressable markets",
                       "Potential for category leadership"
                     ].map((item, i) => (
                       <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                          <span className="text-sm md:text-base text-slate-700 font-medium leading-snug">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>

               <ThesisAnalyticsCard 
                  sectorTitle="Focus Areas"
                  sectorDesc="High-growth technology verticals"
                  sectors={[
                    "Artificial Intelligence",
                    "Climate & Sustainability",
                    "Enterprise SaaS",
                    "Biotech & Life Sciences",
                    "Deep Tech"
                  ]}
                  parameters={[
                    { icon: Target, label: "Check Size", value: "Up to ₹5 Cr" },
                    { icon: TrendingUp, label: "Stage", value: "Seed to Series A" },
                    { icon: Globe, label: "Geography", value: "Global" },
                    { icon: CheckCircle2, label: "Board Seat", value: "Preferred" }
                  ]}
               />
            </div>
          </div>
        </Container>
      </section>

      {/* 4. FAQ SECTION */}
      <section id="faq" className="py-24 bg-white border-t border-b border-slate-100">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            <div className="lg:col-span-4 lg:sticky lg:top-32">
               <div className="mb-10 md:mb-12">
                   <span className="text-[#a80607] font-bold tracking-widest uppercase text-xs mb-4 block">FAQ</span>
                   <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-slate-900 mb-6 leading-tight">
                      Clarity over <br/>
                      <span className="text-slate-400 italic">Consensus.</span>
                   </h2>
                   <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-8">
                      We trade capital for technical risk. Here is how we think about partnerships, speed, and governance.
                   </p>
               </div>

               {/* --- CLEAN STATIC CTA CARD --- */}
               <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-[#a80607]/10 rounded-lg text-[#a80607]">
                          <Sparkles size={18} strokeWidth={2} />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-slate-900">
                          Does This Sound Like You?
                      </h3>
                  </div>
                  
                  <p className="text-slate-500 text-xs mb-6 leading-relaxed font-light">
                      If your company aligns with our investment thesis, we'd love to hear from you. Our application process is straightforward and founder-friendly.
                  </p>
                  
                  <Link 
                      href="/contact"
                      className="flex items-center justify-center w-full py-3 bg-[#a80607] text-white rounded-lg transition-all duration-300 hover:bg-[#8f0506] shadow-md hover:shadow-lg text-xs font-bold uppercase tracking-widest"
                  >
                      Apply for Funding <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
               </div>

            </div>

            <div className="lg:col-span-8 space-y-12">
               {faqs.map((section, idx) => (
                  <div key={idx}>
                     <div className="flex items-center gap-4 mb-6">
                        <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#a80607]">
                           {section.category}
                        </span>
                        <div className="h-px flex-grow bg-slate-200"></div>
                     </div>
                     <div>
                        {section.items.map((item, i) => {
                           const uniqueId = `${idx}-${i}`;
                           return (
                             <AccordionItem 
                               key={i} 
                               question={item.q} 
                               answer={item.a} 
                               isOpen={openFaqIndex === uniqueId}
                               onClick={() => handleToggleFaq(uniqueId)}
                             />
                           );
                        })}
                     </div>
                  </div>
               ))}
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}