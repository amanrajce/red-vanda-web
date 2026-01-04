"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Plus, Minus, ArrowRight, Sparkles } from "lucide-react";

// --- DATA ---
const faqs = [
  {
    category: "01 Investment Logic",
    items: [
      {
        q: "Do you lead rounds?",
        a: "Yes. We are high-conviction investors. We prefer to lead or co-lead Seed to Series A rounds. We believe in taking pricing responsibility and helping set the governance structure for future success."
      },
      {
        q: "What is your reserve policy?",
        a: "We back our winners aggressively. We typically reserve a 2:1 ratio (Capital Reserved : Initial Check) for follow-on rounds. When things work, we want to maintain our pro-rata ownership deep into the growth stages."
      },
      {
        q: "Do you invest in competing companies?",
        a: "Never. If we back you, we are in your corner. We maintain strict exclusivity within specific sub-sectors to ensure our incentives and networks are fully aligned with your success."
      }
    ]
  },
  {
    category: "02 Operational Cadence",
    items: [
      {
        q: "Do you take board seats?",
        a: "At the Seed stage, we typically take a Board Observer seat. At Series A, we require a Board Director seat. We are active partners—we help with hiring, strategy, and downstream financing—but we do not run the company."
      },
      {
        q: "How do you help beyond capital?",
        a: "Our platform team focuses on two things: Talent and Downstream Capital. We help you hire your first 10 engineers and we introduce you to Series B/C investors when you are ready to scale."
      },
      {
        q: "What is your diligence timeline?",
        a: "We move at the speed of the founder. For software, we can issue a term sheet in 10 days. For deep-tech/hardware involving IP diligence, we aim for 21 days maximum. We do not drag our feet."
      }
    ]
  }
];

// --- COMPONENT: ACCORDION ITEM ---
const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`group border-b border-neutral-200 transition-colors duration-300 ${isOpen ? "bg-neutral-50" : "bg-transparent"}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full py-8 px-4 md:px-6 flex items-start justify-between text-left focus:outline-none"
      >
        {/* Active Orange Line Indicator */}
        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-orange-600 transition-transform duration-300 origin-center ${isOpen ? "scale-y-100" : "scale-y-0"}`}></div>

        <span className={`text-xl md:text-2xl font-serif font-medium transition-colors duration-300 pr-8 ${isOpen ? "text-neutral-900" : "text-neutral-600 group-hover:text-neutral-900"}`}>
          {question}
        </span>
        
        {/* Plus/Minus Icon */}
        <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${isOpen ? "border-orange-200 bg-orange-100 text-orange-700 rotate-0" : "border-neutral-200 text-neutral-400 group-hover:border-orange-200 group-hover:text-orange-600 rotate-90"}`}>
           {isOpen ? <Minus size={16} strokeWidth={2} /> : <Plus size={16} strokeWidth={2} />}
        </span>
      </button>
      
      {/* Smooth Collapse Animation */}
      <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="pb-8 px-4 md:px-6">
             <p className="text-neutral-600 leading-relaxed text-lg font-light max-w-3xl">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  return (
    <div className="bg-white min-h-screen text-neutral-900 selection:bg-orange-100 selection:text-orange-900">
      
      <Container>
        <div className="flex flex-col lg:flex-row min-h-screen">
            
            {/* --- LEFT COLUMN: STICKY SIDEBAR --- */}
            <div className="lg:w-4/12 lg:pr-16 pt-32 lg:pt-48 pb-20 relative">
                <div className="sticky top-32">
                    
                    {/* Header Group */}
                    <div className="mb-12">
                        <span className="inline-block py-1 px-3 rounded-full bg-neutral-100 text-xs font-bold tracking-widest uppercase text-neutral-500 mb-6">
                            FAQ
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-neutral-900 tracking-tight leading-[1]">
                            Clarity over <br/> 
                            <span className="text-neutral-400 italic">Consensus.</span>
                        </h1>
                    </div>

                    <p className="text-lg text-neutral-600 font-light leading-relaxed mb-12 max-w-xs">
                        We trade capital for technical risk. Here is how we think about partnerships, speed, and governance.
                    </p>

                    {/* --- THE TOWER STACK CARD --- */}
                    <div className="relative group w-full max-w-sm mt-8">
                        
                        {/* Tower Layer 1 (Bottom) */}
                        <div className="absolute inset-0 bg-neutral-800 rounded-2xl transform transition-transform duration-500 ease-out translate-x-0 translate-y-0 group-hover:translate-x-4 group-hover:translate-y-4 opacity-0 group-hover:opacity-100 z-0"></div>

                        {/* Tower Layer 2 (Middle) */}
                        <div className="absolute inset-0 bg-neutral-200 border border-neutral-300 rounded-2xl transform transition-transform duration-500 ease-out translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:translate-y-2 z-10"></div>

                        {/* Main Card (Top Layer) */}
                        <div className="relative z-20 bg-white border border-neutral-200 rounded-2xl p-8 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-xl">
                            
                            {/* Decorative Background Blur */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative z-30">
                                {/* Icon */}
                                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-6 shadow-sm border border-orange-100">
                                    <Sparkles size={24} strokeWidth={1.5} /> 
                                </div>
                                
                                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-2">
                                    Ready to Build?
                                </h3>
                                <p className="text-neutral-500 text-sm mb-8 leading-relaxed font-light">
                                    Skip the warm intro. If your metrics align with our thesis, we want to see your deck.
                                </p>
                                
                                {/* CTA Button: Simple Hover Effect */}
                                <Link 
                                    href="/contact"
                                    className="flex items-center justify-between w-full px-6 py-4 bg-neutral-900 text-white rounded-lg transition-colors duration-300 hover:bg-orange-600"
                                >
                                    <span className="font-medium text-sm tracking-wide uppercase">Initiate Pitch</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- RIGHT COLUMN: THE QUESTIONS --- */}
            <div className="lg:w-8/12 lg:pl-12 pt-10 lg:pt-48 pb-32 lg:border-l lg:border-neutral-100">
                <div className="space-y-24">
                    {faqs.map((section, idx) => (
                        <div key={idx} className="relative">
                            
                            {/* Section Header */}
                            <div className="flex items-center gap-4 mb-8 px-4 md:px-6">
                                <span className="font-sans text-sm font-bold tracking-widest uppercase text-orange-600">
                                    {section.category}
                                </span>
                                <div className="h-px flex-grow bg-neutral-100"></div>
                            </div>
                            
                            {/* Accordion List */}
                            <div className="border-t border-neutral-200">
                                {section.items.map((item, i) => (
                                    <AccordionItem key={i} question={item.q} answer={item.a} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Bottom CTA Fallback */}
                <div className="mt-20 lg:hidden px-4">
                     <p className="font-serif text-2xl mb-4 text-center">Ready to build?</p>
                     <Link 
                        href="/contact"
                        className="block w-full py-4 bg-neutral-900 text-white text-center font-bold rounded-lg uppercase tracking-widest text-sm shadow-lg hover:bg-orange-600 transition-colors duration-300"
                    >
                        Start Submission
                    </Link>
                </div>
            </div>

        </div>
      </Container>
    </div>
  );
}