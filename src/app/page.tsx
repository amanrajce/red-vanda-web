"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  ArrowRight,
  Layers,
  Zap,
  Globe,
  Cpu,
  Activity,
  BarChart3,
  ShieldCheck,
  Network,
  MapPin,
  TrendingUp,
  Smartphone,
  Leaf,
  Package,
  Coins,
  ChevronDown
} from "lucide-react";

// --- TICKER DATA ---
const tickerItems = [
  { label: "Industrial AI", icon: Cpu },
  { label: "Energy Sovereignty", icon: Zap },
  { label: "Hard Tech", icon: Layers },
  { label: "Cross-Border", icon: Globe },
  { label: "Enterprise SaaS", icon: Network },
  { label: "Consumer Tech", icon: Smartphone },
  { label: "Fintech", icon: TrendingUp },
  { label: "Consumer Products", icon: Package },
  { label: "Agri-Tech", icon: Leaf },
  { label: "Financial Services", icon: Coins },
];

export default function Home() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const animateSpotlight = () => {
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      currentPos.current.x += dx * 0.1;
      currentPos.current.y += dy * 0.1;

      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(800px circle at ${currentPos.current.x}px ${currentPos.current.y}px, rgba(249, 115, 22, 0.12), rgba(249, 115, 22, 0) 60%)`;
      }

      requestRef.current = requestAnimationFrame(animateSpotlight);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.pageX, y: e.pageY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        targetPos.current = { x: touch.pageX, y: touch.pageY };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    requestRef.current = requestAnimationFrame(animateSpotlight);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="relative bg-white min-h-screen text-slate-900 overflow-hidden selection:bg-orange-100 selection:text-orange-900">

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}} />

      {/* --- SPOTLIGHT LAYER --- */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 z-0 will-change-[background]"
        style={{
          background: "radial-gradient(800px circle at 50% 50%, rgba(249, 115, 22, 0.0), rgba(249, 115, 22, 0) 60%)",
        }}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* 1. HERO SECTION */}
      {/* OPTIMIZATION: 
          - Removed 'min-h-[90vh]' for mobile. Now it is 'min-h-auto'.
          - Added 'pt-32 pb-16' for mobile to give just enough space without gaps.
          - Kept 'lg:min-h-screen' for desktop.
      */}
      <section className="relative z-10 min-h-auto lg:min-h-screen flex items-center pt-32 pb-16 md:pt-32 lg:pt-40 lg:pb-20">
        <Container>
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* LEFT: THE MANIFESTO */}
            <div className="md:col-span-7 animate-slide-up relative z-20">
              {/* Reduced margin-bottom (mb-4) for mobile */}
              <div className="inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 bg-white/50 border border-slate-200 backdrop-blur-sm rounded-full mb-4 md:mb-8 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                </span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-600">
                  Fund I: Deploying Capital
                </span>
              </div>

              {/* Reduced margin-bottom (mb-4) for mobile */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[7rem] font-serif font-bold text-slate-900 leading-[1.05] tracking-tight mb-4 md:mb-8">
                Capital for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">
                  tomorrow's leaders.
                </span>
              </h1>

              {/* Reduced margin-bottom (mb-6) for mobile */}
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-6 md:mb-10 max-w-xl">
                Red Vanda Partners backs tech-enabled companies and founders from India's Tier 2/3+ cities.
                <br /><span className="font-medium text-slate-900">Aizawl HQ • Product-First • Pre-Seed to Pre-IPO</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-3 md:px-10 md:py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-xl hover:shadow-orange-900/20 text-sm md:text-base"
                >
                  Pitch Us <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:-rotate-45 transition-transform duration-300" />
                </Link>

                <Link
                  href="/thesis"
                  className="group inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white/80 backdrop-blur-md text-slate-900 border border-slate-200 font-bold rounded-full transition-all duration-300 hover:bg-white hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-0.5 text-sm md:text-base"
                >
                  <span>Our Thesis</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </div>
            </div>

            {/* RIGHT: THE INVESTMENT JOURNEY ILLUSTRATION */}
            <div className="md:col-span-5 relative h-[400px] md:h-[450px] lg:h-[600px] w-full hidden md:block select-none pointer-events-none">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* overflow-visible allows the high Pre-IPO label to show without clipping */}
                <svg viewBox="0 0 500 500" className="w-full h-full opacity-90 overflow-visible" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: 'rgb(249, 115, 22)', stopOpacity: 0.2 }} />
                      <stop offset="100%" style={{ stopColor: 'rgb(51, 65, 85)', stopOpacity: 0.05 }} />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: 'rgb(249, 115, 22)', stopOpacity: 0.6 }} />
                      <stop offset="100%" style={{ stopColor: 'rgb(168, 5, 9)', stopOpacity: 0.6 }} />
                    </linearGradient>
                    {/* Shadow filter for labels */}
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.1" />
                    </filter>
                  </defs>

                  {/* Rotating Circles */}
                  <circle cx="250" cy="250" r="200" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4">
                    <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="120s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="250" cy="250" r="140" fill="none" stroke="#cbd5e1" strokeWidth="1">
                    <animateTransform attributeName="transform" type="rotate" from="360 250 250" to="0 250 250" dur="60s" repeatCount="indefinite" />
                  </circle>

                  {/* Central Hexagon - KEPT AS HEXAGON */}
                  <path d="M250 150 L336 200 L336 300 L250 350 L164 300 L164 200 Z" fill="url(#grad1)" stroke="#f97316" strokeWidth="2">
                    <animate attributeName="opacity" values="0.5;0.8;0.5" dur="4s" repeatCount="indefinite" />
                  </path>

                  {/* === NODES === */}

                  {/* 1. PRE-SEED NODE (100, 380) */}
                  <g>
                    <circle cx="100" cy="380" r="8" fill="#1e293b" stroke="#f97316" strokeWidth="2">
                      <animate attributeName="r" values="8;10;8" dur="3s" repeatCount="indefinite" />
                    </circle>
                    {/* Connects to Hexagon Bottom Left (164, 300) */}
                    <line x1="164" y1="300" x2="100" y2="380" stroke="#f97316" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 4">
                      <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
                    </line>
                  </g>

                  {/* 2. SERIES A NODE (400, 380) */}
                  <g>
                    <circle cx="400" cy="380" r="9" fill="#f97316" stroke="#1e293b" strokeWidth="2">
                      <animate attributeName="r" values="9;11;9" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    {/* Connects to Hexagon Bottom Right (336, 300) */}
                    <line x1="336" y1="300" x2="400" y2="380" stroke="#f97316" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 4">
                      <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
                    </line>
                  </g>

                  {/* 3. PRE-IPO NODE (Updated: 250, 50 - High Position) */}
                  <g>
                    <circle cx="250" cy="50" r="12" fill="#1e293b" stroke="#a80607" strokeWidth="3">
                      <animate attributeName="r" values="12;15;12" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="250" cy="50" r="20" fill="none" stroke="#a80607" strokeWidth="1" opacity="0.3">
                      <animate attributeName="r" values="20;30;20" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>
                    {/* Connects to Hexagon Top (250, 150) */}
                    <line x1="250" y1="150" x2="250" y2="50" stroke="#a80607" strokeWidth="2" opacity="0.6">
                      <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="3s" repeatCount="indefinite" />
                    </line>
                  </g>

                  {/* Growth Arcs (Updated curve to y=50) */}
                  <path d="M100 380 Q250 450 400 380" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
                  {/* Arc ends at 250, 50 */}
                  <path d="M400 380 Q450 200 250 50" fill="none" stroke="url(#grad2)" strokeWidth="2" opacity="0.7">
                    <animate attributeName="stroke-dasharray" from="0,430" to="430,0" dur="4s" repeatCount="indefinite" />
                  </path>

                  {/* === LABELS (ALL RECTANGLES AS REQUESTED) === */}

                  {/* Pre-Seed Label */}
                  <g transform="translate(100, 415)" filter="url(#shadow)">
                    <rect x="-35" y="-12" width="70" height="24" rx="6" fill="rgba(255,255,255,0.95)" stroke="#cbd5e1" strokeWidth="1" />
                    <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155" fontFamily="sans-serif">Pre-Seed</text>
                  </g>

                  {/* Series A Label */}
                  <g transform="translate(400, 415)" filter="url(#shadow)">
                    <rect x="-35" y="-12" width="70" height="24" rx="6" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
                    <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7c2d12" fontFamily="sans-serif">Series A</text>
                  </g>

                  {/* Pre-IPO Label (Updated: Higher Up at 250, 0) */}
                  <g transform="translate(250, 0)" filter="url(#shadow)">
                    <rect x="-40" y="-14" width="80" height="28" rx="8" fill="#0f172a" stroke="#dc2626" strokeWidth="1.5" />
                    <text x="0" y="4" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" fontFamily="sans-serif">Pre-IPO</text>
                  </g>

                  {/* Infrastructure Label (RESTORED TO RECTANGLE) */}
                  <g transform="translate(250, 165)" filter="url(#shadow)">
                    <rect x="-50" y="-12" width="100" height="24" rx="6" fill="rgba(255,255,255,0.95)" stroke="#f97316" strokeWidth="1.5" />
                    <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155" fontFamily="sans-serif">Infrastructure</text>
                  </g>

                </svg>
              </div>
            </div>

          </div>
        </Container>

        {/* --- SCROLL INDICATOR --- */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 hover:opacity-100 transition-opacity cursor-default">
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Scroll</span>
          <ChevronDown className="w-5 h-5 text-slate-900" />
        </div>

      </section>

      {/* 2. THE LIVE TICKER (Infinite Scroll) */}
      <div className="relative z-20 border-y border-slate-200 bg-white/60 backdrop-blur-md py-6 overflow-hidden">

        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white z-10 pointer-events-none"></div>

        <div className="flex w-max animate-scroll">
          {/* ORIGINAL SET */}
          <div className="flex gap-12 px-6">
            {tickerItems.map((item, idx) => (
              <div key={`orig-${idx}`} className="flex items-center gap-3 whitespace-nowrap">
                <item.icon size={16} className="text-orange-600" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-500">
                  {item.label}
                </span>
                <span className="text-slate-300 pl-8">|</span>
              </div>
            ))}
          </div>

          {/* DUPLICATE SET */}
          <div className="flex gap-12 px-6">
            {tickerItems.map((item, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-3 whitespace-nowrap">
                <item.icon size={16} className="text-orange-600" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-500">
                  {item.label}
                </span>
                <span className="text-slate-300 pl-8">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. SECTION: TWO DISTINCT THESES (Dark Section) */}
      <section className="bg-slate-950 pt-24 pb-48 lg:pt-32 lg:pb-64 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

        <Container>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">

            {/* Left Sticky Header */}
            <div className="lg:sticky lg:top-32">
              <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-4 block">Our Strategy</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
                Two Distinct Theses,<br />
                One Unified Vision.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                We pursue opportunity wherever it emerges, from emerging city economies to the cutting edge of technology.
              </p>
            </div>

            {/* Right Content Pillars */}
            <div className="space-y-20">

              {/* Pillar 1 */}
              <div className="group border-l-2 border-orange-600 pl-8 transition-transform duration-500 hover:translate-y-2">
                <span className="text-orange-400 font-bold tracking-widest uppercase text-xs mb-3 block">Tier 2/3+ Cities</span>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Untapped Markets</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  The next billion consumers will emerge from Tier 2 and Tier 3 cities. We back founders who live and breathe these communities and understand local needs.
                </p>
                <ul className="space-y-2 text-slate-500 text-sm mb-8">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Emerging City Economies</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Local Market Expertise</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Underserved Demographics</li>
                </ul>
                <Link href="/thesis" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500 hover:text-white transition-colors group-hover:gap-3">
                  Learn More <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                </Link>
              </div>

              {/* Pillar 2 */}
              <div className="group border-l-2 border-slate-800 hover:border-orange-600 pl-8 transition-transform duration-500 hover:translate-y-2">
                <span className="text-slate-500 font-bold tracking-widest uppercase text-xs mb-3 block group-hover:text-orange-400 transition-colors">Mainstream Markets</span>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Tech-Enabled and Frontier Tech</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  We back technical founders leveraging breakthrough technologies, from AI infrastructure to climate solutions, to transform industries.
                </p>
                <ul className="space-y-2 text-slate-500 text-sm mb-8">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-700 group-hover:bg-orange-600 rounded-full transition-colors"></div> AI and Machine Learning</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-700 group-hover:bg-orange-600 rounded-full transition-colors"></div> Climate Tech and Sustainability</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-700 group-hover:bg-orange-600 rounded-full transition-colors"></div> Enterprise SaaS</li>
                </ul>
                <Link href="/thesis" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-white transition-colors group-hover:text-orange-500 group-hover:gap-3">
                  Learn More <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                </Link>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* 4. BRIDGE SECTION (CTA + MANDATE) */}
      <section className="relative z-20 bg-slate-50">

        {/* THE CTA CARD */}
        <div className="absolute top-0 left-0 w-full -translate-y-1/2 px-4 z-30">
          <Container>
            <div className="relative overflow-hidden rounded-2xl bg-[#aa0509] shadow-2xl mx-auto w-full">

              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-8 md:px-12 md:py-10">
                <div className="text-center md:text-left">
                  <h2 className="text-xl md:text-3xl font-serif font-bold text-white mb-2 leading-tight">
                    Ready to Build the Future?
                  </h2>
                  <p className="text-sm md:text-base text-white/90 font-light leading-relaxed max-w-xl">
                    Whether you are building for underserved markets or pushing the boundaries of technology, we want to hear from you.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="shrink-0 inline-flex items-center gap-2 bg-white text-[#aa0509] px-8 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Apply Now <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          </Container>
        </div>

        {/* 5. MANDATE CONTENT */}
        <div className="pt-64 pb-24 lg:pt-40 lg:pb-32">
          <Container>
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">The Mandate.</h2>
              <p className="text-base md:text-lg text-slate-600 max-w-2xl">
                We are Sector-Agnostic, with a focused mandate to back tech-enabled businesses building scalable IP and durable platforms across differentiated and emerging markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)] lg:auto-rows-[minmax(450px,auto)]">

              {/* CARD 1 */}
              <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/60 backdrop-blur-lg p-6 sm:p-8 transition-all hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1">
                <div className="flex flex-col h-full justify-between relative z-20">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-orange-50 border border-orange-100 rounded-2xl">
                      <Activity className="w-6 h-6 text-orange-600" />
                    </div>
                    <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Pre-Seed to Pre-IPO
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-2">Ticket Size</h3>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Up to</span>
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                          <span className="text-5xl sm:text-6xl font-serif font-bold text-slate-900 tracking-tighter">₹5</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-slate-400">Cr</span>
                            <span className="text-xs font-bold text-slate-300 uppercase tracking-wide whitespace-nowrap">- per investment</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold uppercase text-slate-400 tracking-wide">
                        <span>Deployment Capacity</span>
                        <span>100% Reserved</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-full w-[80%] rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="group md:col-span-2 lg:col-span-2 relative overflow-hidden rounded-[2rem] bg-slate-900 border border-slate-800 p-6 sm:p-8 transition-all hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-1 text-white flex flex-col justify-between">
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-cover bg-[center_30%] opacity-50 invert pointer-events-none"></div>

                <div className="relative z-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 h-full">
                  <div className="max-w-md space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white/10 w-fit rounded-2xl backdrop-blur-md border border-white/10">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-[10px] font-mono text-orange-400">
                        UTC +05:30
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-serif font-bold mb-3 text-white">Aizawl HQ</h3>
                      <p className="text-slate-400 leading-relaxed text-sm sm:text-base border-l-2 border-orange-500 pl-4">
                        Bridging the gap between India's overlooked engineering talent and global capital markets. We build where others don't look.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-4 text-right">
                    <div className="flex items-center gap-2 text-orange-400 font-mono text-xs tracking-widest uppercase">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                      </span>
                      Live Operations
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white/10 select-none group-hover:text-white/20 transition-colors">
                        23.72° N
                      </span>
                      <span className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white/10 select-none group-hover:text-white/20 transition-colors">
                        92.71° E
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                      <MapPin className="w-3 h-3" />
                      <span>Mizoram, India</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/60 backdrop-blur-lg p-6 sm:p-8 transition-all hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1">
                <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
                  <div className="flex-1 text-center md:text-left max-w-xl">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-orange-600 font-bold uppercase text-xs tracking-widest">
                      <ShieldCheck size={16} />
                      <span>The Filter</span>
                    </div>
                    <h3 className="text-3xl font-serif font-bold mb-3 text-slate-900">Tech Enabled and Product-first.</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      We back tech-enabled businesses with proprietary differentiation, scalable unit economics, and defensible technology platforms.
                    </p>
                  </div>
                  <div className="hidden md:block w-px h-24 bg-slate-200"></div>
                  <div className="flex flex-col gap-4 min-w-[200px] w-full md:w-auto">
                    <div className="flex items-center gap-3 text-sm font-bold text-slate-700 bg-white/50 p-2 rounded-lg border border-slate-100">
                      <BarChart3 className="w-4 h-4 text-orange-500" /> Scalable Unit Economics
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-slate-700 bg-white/50 p-2 rounded-lg border border-slate-100">
                      <Cpu className="w-4 h-4 text-orange-500" /> Technical Moat
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-slate-700 bg-white/50 p-2 rounded-lg border border-slate-100">
                      <ShieldCheck className="w-4 h-4 text-orange-500" /> Defensibility
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-slate-700 bg-white/50 p-2 rounded-lg border border-slate-100">
                      <Network className="w-4 h-4 text-orange-500" /> Network Effects
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="md:col-span-2 lg:col-span-1 group relative overflow-hidden rounded-[2rem] bg-slate-900 p-6 sm:p-8 flex flex-col justify-center items-center text-center hover:bg-orange-600 transition-colors duration-500 cursor-pointer min-h-[200px]">
                <Link href="/contact" className="absolute inset-0 z-30"></Link>
                <div className="relative z-20">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">Pitch Us</h3>
                  <p className="text-white/60 text-sm group-hover:text-white/90 transition-colors">
                    Open for 2026 Cohort
                  </p>
                </div>
              </div>

            </div>
          </Container>
        </div>
      </section>

    </div>
  );
}