"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, Clock, Calendar, ChevronRight, Search, Layers } from "lucide-react";

// --- 1. SKELETON PRIMITIVES ---
const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-slate-200 rounded-lg ${className}`} />
);

const ArticleSkeleton = () => (
  <div className="flex flex-col h-full">
    {/* Image */}
    <Skeleton className="aspect-[16/10] w-full rounded-xl mb-6" />
    {/* Meta */}
    <div className="flex gap-3 mb-3">
      <Skeleton className="h-4 w-20 rounded-full" />
      <Skeleton className="h-4 w-24 rounded-full" />
    </div>
    {/* Title */}
    <Skeleton className="h-8 w-full mb-3" />
    <Skeleton className="h-8 w-3/4 mb-4" />
    {/* Text */}
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-2/3 mb-4" />
    {/* Footer */}
    <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-4 w-12" />
    </div>
  </div>
);

const FeaturedSkeleton = () => (
  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
    <div className="lg:col-span-7">
      <Skeleton className="aspect-[16/9] lg:aspect-[3/2] w-full rounded-2xl" />
    </div>
    <div className="lg:col-span-5 space-y-6">
      <Skeleton className="h-4 w-32 rounded-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-5 w-40 mt-4" />
    </div>
  </div>
);

export default function InsightsPage() {
  const [isLoading, setIsLoading] = useState(true);

  // --- SIMULATE NETWORK REQUEST ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Loads for 2 seconds to show the effect
    return () => clearTimeout(timer);
  }, []);

  const articles = [
    {
      title: "The Infrastructure Stack of 2030",
      excerpt: "How the next generation of computing infrastructure will reshape enterprise technology and unlock new categories of innovation.",
      date: "Dec 15, 2024",
      category: "Infrastructure",
      readTime: "8 min read",
      featured: true,
      color: "bg-blue-50"
    },
    {
      title: "Investing in Climate Intelligence",
      excerpt: "Why we believe AI-powered climate solutions represent a once-in-a-generation investment opportunity in industrial efficiency.",
      date: "Nov 28, 2024",
      category: "Climate Tech",
      readTime: "6 min read",
      featured: false,
      color: "bg-green-50"
    },
    {
      title: "The Rise of Institutional Founders",
      excerpt: "A new generation of operators is building deeply technical companies with enterprise DNA from day one.",
      date: "Nov 12, 2024",
      category: "Venture Capital",
      readTime: "5 min read",
      featured: false,
      color: "bg-purple-50"
    },
    {
      title: "MLOps: The Hidden Infrastructure Layer",
      excerpt: "Why machine learning operations infrastructure will become as critical as cloud computing was in the 2010s.",
      date: "Oct 30, 2024",
      category: "AI/ML",
      readTime: "7 min read",
      featured: false,
      color: "bg-orange-50"
    },
    {
      title: "Hardware's Renaissance Moment",
      excerpt: "From semiconductors to robotics, why we're entering a golden age of hardware innovation backed by AI and advanced manufacturing.",
      date: "Oct 18, 2024",
      category: "Hardware",
      readTime: "9 min read",
      featured: false,
      color: "bg-slate-50"
    },
    {
      title: "Energy Grid 3.0",
      excerpt: "How distributed energy resources and smart grid technology will transform how we generate, store, and consume electricity.",
      date: "Sep 25, 2024",
      category: "Energy",
      readTime: "6 min read",
      featured: false,
      color: "bg-yellow-50"
    }
  ];

  const categories = ["All Insights", "Infrastructure", "Climate", "AI/ML", "Hardware", "Energy"];

  return (
    <div className="bg-white text-slate-900 selection:bg-[#a80607] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24 border-b border-slate-100 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 animate-slide-up">
            <div className="max-w-3xl">
              <span className="text-[#a80607] font-bold tracking-widest uppercase text-xs mb-4 block">
                News & Perspectives
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.05] tracking-tight">
                Insights from <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200 italic font-light">
                  the frontier.
                </span>
              </h1>
            </div>
            <div className="w-full md:w-auto pb-2">
                <p className="text-slate-500 text-sm md:text-base max-w-md leading-relaxed">
                    Deep dives into technology shifts, market structures, and the future of the Indian deep-tech ecosystem.
                </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. STICKY NAV & FILTERS */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex gap-6 overflow-x-auto no-scrollbar mask-gradient">
              {categories.map((cat, idx) => (
                <button 
                  key={idx}
                  className={`text-xs md:text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-colors pb-1 border-b-2 ${idx === 0 ? "text-[#a80607] border-[#a80607]" : "text-slate-400 border-transparent hover:text-slate-900"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="hidden md:flex text-slate-400">
                <Search className="w-4 h-4" />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. FEATURED ARTICLE (Magazine Style) */}
      <section className="py-12 md:py-16 lg:py-20 border-b border-slate-100">
        <Container>
            {isLoading ? (
              <FeaturedSkeleton />
            ) : (
              articles.filter(a => a.featured).map((article, index) => (
                  <div key={index} className="group grid lg:grid-cols-12 gap-8 lg:gap-16 items-center cursor-pointer animate-fade-in">
                      {/* Image Side */}
                      <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-[3/2] overflow-hidden rounded-2xl bg-slate-100">
                          <div className={`absolute inset-0 ${article.color} group-hover:scale-105 transition-transform duration-700`}></div>
                          <div className="absolute inset-0 flex items-center justify-center text-slate-200">
                              <Layers className="w-24 h-24 opacity-20" />
                          </div>
                      </div>

                      {/* Content Side */}
                      <div className="lg:col-span-5 flex flex-col justify-center">
                          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
                              <span className="text-[#a80607]">Featured</span>
                              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                              <span className="text-slate-500">{article.readTime}</span>
                          </div>
                          
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-4 md:mb-6 leading-tight group-hover:text-[#a80607] transition-colors">
                              {article.title}
                          </h2>
                          
                          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8 font-light">
                              {article.excerpt}
                          </p>

                          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 group/link">
                              Read Full Story <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                          </div>
                      </div>
                  </div>
              ))
            )}
        </Container>
      </section>

      {/* 4. ARTICLE GRID */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
            
            {isLoading ? (
              // Show 6 Skeletons while loading
              [...Array(6)].map((_, i) => <ArticleSkeleton key={i} />)
            ) : (
              // Show Real Articles
              articles.filter(a => !a.featured).map((article, i) => (
                <article key={i} className="group flex flex-col h-full cursor-pointer animate-fade-in">
                  
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-50 mb-6">
                      <div className={`absolute inset-0 ${article.color} group-hover:scale-105 transition-transform duration-500`}></div>
                      <div className="absolute top-4 left-4 p-2 bg-white/50 backdrop-blur-sm rounded-lg text-slate-500">
                          {i % 2 === 0 ? <Clock size={16} /> : <ArrowUpRight size={16} />}
                      </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col grow">
                      <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                          <span className="text-[#a80607]">{article.category}</span>
                          <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                          <span>{article.date}</span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-3 leading-snug group-hover:text-[#a80607] transition-colors">
                          {article.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3 font-light">
                          {article.excerpt}
                      </p>

                      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                          <span>{article.readTime}</span>
                          <span className="group-hover:translate-x-1 transition-transform text-slate-900">Read <ChevronRight className="w-3 h-3 inline ml-0.5" /></span>
                      </div>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* Load More */}
          <div className="mt-16 md:mt-24 text-center">
            <button className="px-8 py-3 border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-widest rounded-full hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                Load More Articles
            </button>
          </div>
        </Container>
      </section>

    </div>
  );
}