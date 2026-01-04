import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    // FIX APPLIED: min-h-screen with pt-32 lg:pt-40 prevents laptop overlap
    <section className="relative z-10 min-h-screen flex items-center pt-32 lg:pt-40 pb-20 overflow-hidden">
      
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT: THE MANIFESTO */}
          <div className="lg:col-span-7 animate-slide-up relative z-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/50 border border-slate-200 backdrop-blur-sm rounded-full mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
                Fund I: Deploying Capital
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-serif font-bold text-slate-900 leading-[0.95] tracking-tight mb-8">
              Capital for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">
                The Impossible.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light mb-10 max-w-xl">
              Red Vanda Partners architects the financing layer for deep infrastructure.
              <br /><span className="font-medium text-slate-900">Aizawl HQ • Product-First • Series A Horizon</span>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-xl hover:shadow-orange-900/20"
              >
                Pitch Us <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-md text-slate-900 border border-slate-200 font-bold rounded-full hover:bg-slate-50 transition-all"
              >
                Our Thesis
              </Link>
            </div>
          </div>

          {/* RIGHT: THE "DEEP TECH" ILLUSTRATION */}
          <div className="lg:col-span-5 relative h-[600px] w-full hidden lg:block select-none pointer-events-none">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 500 500" className="w-full h-full opacity-90">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'rgb(249, 115, 22)', stopOpacity: 0.2 }} />
                    <stop offset="100%" style={{ stopColor: 'rgb(51, 65, 85)', stopOpacity: 0.05 }} />
                  </linearGradient>
                </defs>
                {/* Orbit 1 */}
                <circle cx="250" cy="250" r="200" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4">
                  <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="120s" repeatCount="indefinite" />
                </circle>
                {/* Orbit 2 */}
                <circle cx="250" cy="250" r="140" fill="none" stroke="#cbd5e1" strokeWidth="1">
                  <animateTransform attributeName="transform" type="rotate" from="360 250 250" to="0 250 250" dur="60s" repeatCount="indefinite" />
                </circle>
                {/* Center Prism Shape */}
                <path d="M250 150 L336 200 L336 300 L250 350 L164 300 L164 200 Z" fill="url(#grad1)" stroke="#f97316" strokeWidth="2">
                  <animate attributeName="opacity" values="0.5;0.8;0.5" dur="4s" repeatCount="indefinite" />
                </path>
                {/* Nodes & Connectors */}
                <g>
                  <circle cx="336" cy="200" r="6" fill="#1e293b" />
                  <line x1="250" y1="250" x2="336" y2="200" stroke="#f97316" strokeWidth="2" opacity="0.5">
                    <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="3s" repeatCount="indefinite" />
                  </line>
                </g>
                <g>
                  <circle cx="164" cy="300" r="6" fill="#1e293b" />
                  <line x1="250" y1="250" x2="164" y2="300" stroke="#f97316" strokeWidth="2" opacity="0.5">
                    <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="4s" repeatCount="indefinite" />
                  </line>
                </g>
                {/* Center Pulse */}
                <g>
                  <circle cx="250" cy="150" r="6" fill="#f97316">
                    <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
                  </circle>
                </g>
                {/* Floating Labels */}
                <foreignObject x="350" y="180" width="100" height="40">
                  <div className="bg-white/80 border border-slate-200 text-[10px] font-bold px-2 py-1 rounded shadow-sm text-slate-600 backdrop-blur-sm">
                    Series A
                  </div>
                </foreignObject>
                <foreignObject x="100" y="310" width="100" height="40">
                  <div className="bg-white/80 border border-slate-200 text-[10px] font-bold px-2 py-1 rounded shadow-sm text-slate-600 backdrop-blur-sm">
                    Infrastructure
                  </div>
                </foreignObject>
              </svg>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};