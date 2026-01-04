'use client';

import { Container } from "@/components/ui/Container";
import { Linkedin, Mail, Quote, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function TeamPage() {
  const directors = [
    {
      name: "Malsawmkima",
      role: "Managing Partner",
      bio: "A veteran of the deep-tech ecosystem with 15 years of operational experience. Formerly led infrastructure scaling at [Tech Giant] and pioneered research in renewable energy grids.",
      statement: "We are entering an era where bits are cheap, but atoms are expensive. The next decade's returns will come from founders who are not afraid to get their hands dirty building physical infrastructure.",
      // UPDATED: 'Hard Tech' is good, but 'Industrial AI' emphasizes the Product/Software aspect strongly.
      focus: ["Energy Sovereignty", "Industrial AI", "Hard Tech"],
      imageSrc: "/director1.jpeg" 
    },
    {
      name: "Rinzuala",
      role: "General Partner",
      bio: "An operator-investor who has navigated the 'impossible' stages of growth. Brings a global perspective to our cross-border thesis, connecting Silicon Valley innovation with Asian scale.",
      statement: "True innovation looks like a toy at first, then a threat, then a utility. We back founders during the 'threat' phase—when the technology works but the market isn't ready.",
      // UPDATED: Changed 'Logistics' to 'Logistics Infrastructure' to sound like TECH, not a Service agency.
      focus: ["Biological Compute", "Logistics Infrastructure", "Financial Infrastructure"],
      imageSrc: "/director2.jpeg"
    }
  ];

  return (
    <>
      {/* 1. HERO */}
      <section className="pt-28 pb-12 md:pt-40 md:pb-20 lg:pt-64 lg:pb-24 bg-white border-b border-neutral-100">
        <Container>
          <div className="max-w-4xl animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-neutral-50 text-neutral-900 border border-neutral-200 rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-widest mb-6 lg:mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-700 animate-pulse"></span>
              The General Partners
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-neutral-950 mb-6 lg:mb-8 leading-[1.1] lg:leading-[1.05]">
              Conviction <br/>
              <span className="text-slate-400 italic font-light">Capital.</span>
            </h1>
            
            <p className="text-base md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
              We are a high-concentration partnership. We invest our own capital, 
              take board seats, and work directly with founders. No associates, no committees.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. DIRECTORS SECTION */}
      <section className="bg-white pb-12 lg:pb-32">
        {directors.map((director, index) => (
          <div key={index} className="group border-b border-neutral-100 last:border-0 hover:bg-neutral-50/30 transition-colors duration-500">
            <Container>
              <div className="py-16 md:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start">
                
                {/* LEFT COLUMN: Image & Role */}
                <div className="lg:col-span-5 space-y-6 lg:space-y-8 lg:sticky lg:top-32 self-start">
                  
                  {/* Photo Frame */}
                  <div className="relative aspect-[4/5] w-full md:w-3/4 lg:w-full bg-neutral-100 overflow-hidden shadow-sm">
                     <Image 
                        src={director.imageSrc} 
                        alt={director.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized={true} 
                     />
                     <div className="absolute inset-0 -z-10 flex items-center justify-center text-neutral-400 text-xs bg-neutral-100">
                        Loading...
                     </div>
                  </div>

                  {/* Role & Links */}
                  <div className="flex justify-between items-end border-t border-neutral-200 pt-4 lg:pt-6 md:w-3/4 lg:w-full">
                    <div>
                        <h3 className="font-serif text-xl lg:text-2xl font-bold text-neutral-950 group-hover:text-primary-800 transition-colors duration-500">
                            {director.name}
                        </h3>
                        <p className="font-mono text-primary-700 text-[10px] lg:text-xs uppercase tracking-widest mt-1">
                            {director.role}
                        </p>
                    </div>
                    <div className="flex gap-2 opacity-100 lg:opacity-60 lg:group-hover:opacity-100 transition-opacity duration-500">
                        <a href="#" className="p-2 border border-neutral-200 hover:border-primary-600 hover:text-primary-700 transition-colors rounded-full bg-white">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="p-2 border border-neutral-200 hover:border-primary-600 hover:text-primary-700 transition-colors rounded-full bg-white">
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: The "Manifesto" */}
                <div className="lg:col-span-7 flex flex-col h-full pt-0 lg:pt-8">
                  
                  <p className="text-base md:text-lg lg:text-xl text-neutral-600 leading-relaxed mb-8 md:mb-12 lg:mb-16 max-w-2xl">
                    {director.bio}
                  </p>

                  <div className="relative pl-6 lg:pl-12 border-l-4 border-neutral-200 group-hover:border-primary-800 py-1 lg:py-2 mb-10 lg:mb-16 transition-colors duration-700">
                    <Quote className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-6 h-6 lg:w-8 lg:h-8 text-neutral-300 group-hover:text-primary-800 bg-white p-1 transition-colors duration-700" />
                    <blockquote className="font-serif text-xl md:text-3xl lg:text-4xl leading-tight text-neutral-900 italic">
                      "{director.statement}"
                    </blockquote>
                  </div>

                  <div className="mt-auto">
                    <span className="block font-mono text-[10px] lg:text-xs uppercase text-neutral-400 mb-4 tracking-widest">Investment Focus</span>
                    <div className="flex flex-wrap gap-2 lg:gap-3">
                        {director.focus.map((tag, i) => (
                            <span 
                                key={i} 
                                className="px-3 py-1.5 lg:px-4 lg:py-2 bg-white text-neutral-600 border border-neutral-200 text-xs lg:text-sm font-medium group-hover:border-primary-200 group-hover:text-primary-900 transition-all duration-500"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                  </div>

                </div>
              </div>
            </Container>
          </div>
        ))}
      </section>

      {/* 3. CLOSING - Updated to match Pitch Deck Flow */}
      <section className="py-16 lg:py-24 bg-neutral-950 text-white">
        <Container>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 lg:gap-12">
                <div className="max-w-xl">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 lg:mb-6 text-white">
                        Access to the partnership.
                    </h2>
                    <p className="text-neutral-400 text-base lg:text-lg">
                        We don't hide behind a website. If you are building something that fits our thesis (Product-first, Series A potential), we want to hear from you directly.
                    </p>
                </div>
                <div className="w-full md:w-auto">
                     {/* Updated Button to 'Submit Pitch Deck' to be consistent */}
                     <a href="/contact" className="inline-flex items-center justify-center w-full md:w-auto gap-3 px-8 py-4 bg-white text-neutral-950 font-medium hover:bg-primary-50 transition-colors rounded-full">
                        Submit Pitch Deck <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </Container>
      </section>
    </>
  );
}