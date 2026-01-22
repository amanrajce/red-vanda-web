"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, Clock, ChevronRight, Zap } from "lucide-react";

// --- TYPES ---
interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  featured: boolean;
  image: string;
}

// --- 1. SKELETON COMPONENTS ---
const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-slate-200 rounded-lg ${className}`} />
);

const ArticleSkeleton = () => (
  <div className="flex flex-col h-full">
    <Skeleton className="aspect-[16/10] w-full rounded-xl mb-6" />
    <div className="flex gap-3 mb-3">
      <Skeleton className="h-4 w-20 rounded-full" />
      <Skeleton className="h-4 w-24 rounded-full" />
    </div>
    <Skeleton className="h-8 w-full mb-3" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-2/3 mb-4" />
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
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-10 w-40 mt-6 rounded-full" />
    </div>
  </div>
);

// --- CURATED CONTENT (3 High Quality Articles) ---
const REAL_ARTICLES: Article[] = [
  {
    id: "1",
    title: "The Semiconductor Sovereignity: India's $10B Bet",
    excerpt: "With the approval of three major fabrication units in Gujarat and Assam, we analyze how India is pivoting from a chip consumer to a chip maker. What this means for the upstream deep-tech ecosystem.",
    date: "January 15, 2026",
    category: "Hard Tech",
    readTime: "8 min read",
    featured: true,
    // Reliable Chip/Tech Image
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Beyond the Metros: The Tier 2 Consumption Story",
    excerpt: "E-commerce growth in Tier 2 cities is outpacing metros by 2.5x. We look at the logistics infrastructure and vernacular tech layers being built to service this next wave of 500M consumers.",
    date: "December 10, 2025",
    category: "Market Outlook",
    readTime: "6 min read",
    featured: false,
    // Logistics/Urban Image
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Institutional Capital in Early Stage",
    excerpt: "Why domestic family offices are increasingly allocating direct capital to early-stage deep tech, moving away from traditional real estate portfolios.",
    date: "November 28, 2025",
    category: "Venture Capital",
    readTime: "5 min read",
    featured: false,
    // Finance/Graph Image
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function InsightsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const loadData = async () => {
      // @ts-ignore
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      let simulatedDelay = 500; 

      if (connection) {
        if (connection.saveData || connection.effectiveType === '2g' || connection.effectiveType === '3g') {
          simulatedDelay = 2500; 
        }
      }

      await new Promise(resolve => setTimeout(resolve, simulatedDelay));
      setArticles(REAL_ARTICLES);
      setIsLoading(false);
    };

    loadData();
  }, []);

  return (
    <div className="bg-white text-slate-900 selection:bg-[#a80607] selection:text-white">
      
      {/* 1. HERO SECTION (Tighter Spacing) */}
      <section className="pt-28 pb-8 md:pt-36 md:pb-12 border-b border-slate-100 bg-white">
        <Container>
          <div className="flex flex-col gap-6 animate-slide-up max-w-4xl">
            <div>
              <span className="text-[#a80607] font-bold tracking-widest uppercase text-xs mb-4 block">
                News & Perspectives
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 leading-[1.05] tracking-tight">
                Insights from <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200 italic font-light">
                  the frontier.
                </span>
              </h1>
            </div>
            
            <div className="relative border-l-2 border-[#a80607] pl-6 py-1">
                <p className="text-slate-500 text-sm md:text-lg leading-relaxed max-w-2xl font-light">
                    Deep dives into technology shifts, market structures, and the future of the Indian deep-tech ecosystem. We analyze the signals others miss.
                </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. FEATURED STORY (Article 1) */}
      <section className="py-12 border-b border-slate-100">
        <Container>
            {isLoading ? (
              <FeaturedSkeleton />
            ) : (
              articles.filter(a => a.featured).map((article, index) => (
                  <div key={index} className="group grid lg:grid-cols-12 gap-8 lg:gap-16 items-center cursor-pointer animate-fade-in">
                      {/* Image Side */}
                      <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-[3/2] overflow-hidden rounded-2xl bg-slate-100 shadow-2xl shadow-slate-200/50">
                          <Image 
                            src={article.image} 
                            alt={article.title} 
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
                      </div>

                      {/* Content Side */}
                      <div className="lg:col-span-5 flex flex-col justify-center">
                          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
                              <span className="text-[#a80607] flex items-center gap-2">
                                <Zap className="w-3 h-3" /> Featured Story
                              </span>
                              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                              <span className="text-slate-500">{article.date}</span>
                          </div>
                          
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-4 md:mb-6 leading-[1.1] group-hover:text-[#a80607] transition-colors">
                              {article.title}
                          </h2>
                          
                          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8 font-light">
                              {article.excerpt}
                          </p>

                          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 group/link">
                              Read Full Report <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                          </div>
                      </div>
                  </div>
              ))
            )}
        </Container>
      </section>

      {/* 3. RECENT INSIGHTS (Articles 2 & 3) */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            
            {isLoading ? (
              [...Array(2)].map((_, i) => <ArticleSkeleton key={i} />)
            ) : (
              articles.filter(a => !a.featured).map((article, i) => (
                <article key={i} className="group flex flex-col h-full cursor-pointer animate-fade-in">
                  
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 mb-6 shadow-sm">
                      <Image 
                        src={article.image} 
                        alt={article.title} 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg text-slate-600 border border-white/50 shadow-sm">
                          <Clock size={16} />
                      </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col grow">
                      <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                          <span className="text-[#a80607]">{article.category}</span>
                          <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                          <span>{article.readTime}</span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-3 leading-snug group-hover:text-[#a80607] transition-colors">
                          {article.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed mb-4 font-light">
                          {article.excerpt}
                      </p>

                      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                          <span>{article.date}</span>
                          <span className="group-hover:translate-x-1 transition-transform text-slate-900 flex items-center gap-1 font-bold">
                            Read <ChevronRight className="w-3 h-3" />
                          </span>
                      </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </Container>
      </section>

    </div>
  );
}