import { Container } from "@/components/ui/Container";
import { Layers, Zap, TrendingUp, ArrowRight, Ban } from "lucide-react";

export default function AboutPage() {
  // 1. Updated Roadmap (Kept the same as it establishes history/future)
  const roadmap = [
    { 
      year: "2024", 
      title: "The Thesis Formation",
      desc: "Identifying the structural gaps in deep-tech financing. Assembling the core partnership." 
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

  // 2. NEW: Investment Parameters (Specific Client Data)
  // This replaces generic icons with the specific "5Cr / Series A / Product Only" data
  const investmentProfile = [
    {
      title: "Product-First DNA",
      desc: "We back proprietary IP and scalable software. We do not invest in service agencies or consultancies.",
      icon: Layers // Represents 'Stack' or 'Product'
    },
    {
      title: "High Conviction",
      desc: "We lead or co-lead rounds with ticket sizes up to ₹5 Crores, ensuring we have skin in the game.",
      icon: Zap // Represents 'Power/Capital'
    },
    {
      title: "Series A Horizon",
      desc: "We partner from the earliest stages of validation and reserve capital to support you through Series A.",
      icon: TrendingUp // Represents 'Growth'
    }
  ];

  return (
    <>
      {/* 1. HERO: "FIRM OF THE FUTURE" */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 lg:pt-64 lg:pb-32 overflow-hidden bg-white">
        <Container className="relative z-10">
          <div className="max-w-4xl animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-900 border border-slate-200 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
              Launching 2026
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-slate-900 leading-[1.1] lg:leading-[1.05] mb-6 md:mb-8">
              Architecting the <br />
              <span className="text-slate-400 italic font-light">Firm of the Future.</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-10 md:mb-12">
              Red Vanda Partners is built for the next century of innovation. 
              We are currently in stealth, assembling the capital and network required 
              to support the world's most ambitious engineers.
            </p>

            <div className="h-px w-full bg-slate-200" />
          </div>
        </Container>
      </section>

      {/* 2. THE MANIFESTO */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-900 text-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">
            
            <div className="relative lg:sticky lg:top-32">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 md:mb-6">
                Our Mandate.
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md">
                We are not just another fund. We are building an institution designed to 
                outlast market cycles and serve generational founders.
              </p>
            </div>
            
            <div className="space-y-10 md:space-y-12">
              <div className="border-l-2 border-orange-500 pl-6 md:pl-8">
                <h3 className="text-xl md:text-2xl font-serif font-medium text-orange-100 mb-3 md:mb-4">Why Now?</h3>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                  The venture model hasn't changed in 20 years, but technology has. 
                  We believe the next trillion-dollar companies will be built in 
                  infrastructure, energy, and biological compute.
                </p>
              </div>
              
              <div className="border-l-2 border-slate-700 pl-6 md:pl-8">
                <h3 className="text-xl md:text-2xl font-serif font-medium text-white mb-3 md:mb-4">The 2026 Vision</h3>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                  By our official launch in 2026, Red Vanda Partners will have established 
                  a global corridor for deep-tech innovation, connecting capital in the West 
                  with engineering talent in the East.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. ROADMAP (Timeline) */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <Container>
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3 md:mb-4">The Road to 2026</h2>
            <p className="text-base md:text-lg text-slate-600">Our strategic path to institutional deployment.</p>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-2 md:ml-4 lg:ml-8 space-y-12 md:space-y-16">
            {roadmap.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-12 lg:pl-16 group">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-slate-300 group-hover:border-orange-600 transition-colors duration-300" />
                
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

      {/* 4. NEW: INVESTMENT PROFILE (Ticket Size, Sector, Stage) */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Investment Criteria</h2>
            <p className="text-base md:text-lg text-slate-600">We are highly selective. We look for these structural characteristics.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {investmentProfile.map((area, idx) => (
              <div key={idx} className="bg-slate-50 p-6 md:p-10 rounded-none border border-slate-100 hover:border-slate-300 transition-all duration-300">
                <area.icon className="w-8 h-8 text-slate-900 mb-4 md:mb-6" />
                <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-2 md:mb-3">{area.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. CTA: PITCH DECK GATEWAY */}
      <section className="py-16 md:py-24 bg-slate-900 text-white border-t border-slate-800">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 md:mb-8">
              Building the impossible?
            </h2>
            
            {/* Added Specific Criteria here for clarity */}
            <div className="flex flex-wrap justify-center gap-4 text-sm font-mono uppercase tracking-widest text-orange-500 mb-8 md:mb-10">
              <span className="flex items-center gap-2"><Zap size={14}/> Up to ₹5 Cr</span>
              <span className="hidden md:inline text-slate-600">|</span>
              <span className="flex items-center gap-2"><Layers size={14}/> Product Only</span>
              <span className="hidden md:inline text-slate-600">|</span>
              <span className="flex items-center gap-2"><TrendingUp size={14}/> Series A</span>
            </div>

            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              If you fit our thesis, we want to hear from you. 
              Upload your pitch deck to our secure portal.
            </p>
            
            <a 
              href="/contact" 
              className="inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-primary-700 text-white font-medium rounded-full hover:bg-orange-700 transition-all text-sm md:text-base shadow-lg shadow-orange-900/20"
            >
              Submit Pitch Deck <ArrowRight className="w-4 h-4" />
            </a>
            
            <p className="mt-6 text-xs text-slate-600">
              *We do not invest in services or consultancies.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}