import { Container } from "@/components/ui/Container";

export default function InsightsPage() {
  const articles = [
    {
      title: "The Infrastructure Stack of 2030",
      excerpt: "How the next generation of computing infrastructure will reshape enterprise technology and unlock new categories of innovation.",
      date: "Dec 15, 2024",
      category: "Infrastructure",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "Investing in Climate Intelligence",
      excerpt: "Why we believe AI-powered climate solutions represent a once-in-a-generation investment opportunity in industrial efficiency.",
      date: "Nov 28, 2024",
      category: "Climate Tech",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "The Rise of Institutional Founders",
      excerpt: "A new generation of operators is building deeply technical companies with enterprise DNA from day one.",
      date: "Nov 12, 2024",
      category: "Venture Capital",
      readTime: "5 min read",
      featured: false
    },
    {
      title: "MLOps: The Hidden Infrastructure Layer",
      excerpt: "Why machine learning operations infrastructure will become as critical as cloud computing was in the 2010s.",
      date: "Oct 30, 2024",
      category: "AI/ML",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Hardware's Renaissance Moment",
      excerpt: "From semiconductors to robotics, why we're entering a golden age of hardware innovation backed by AI and advanced manufacturing.",
      date: "Oct 18, 2024",
      category: "Hardware",
      readTime: "9 min read",
      featured: false
    },
    {
      title: "Energy Grid 3.0",
      excerpt: "How distributed energy resources and smart grid technology will transform how we generate, store, and consume electricity.",
      date: "Sep 25, 2024",
      category: "Energy",
      readTime: "6 min read",
      featured: false
    }
  ];

  const categories = ["All", "Infrastructure", "Climate Tech", "AI/ML", "Hardware", "Energy", "Venture Capital"];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 lg:pt-48 lg:pb-24 bg-gradient-to-b from-neutral-100 to-white">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-heading-1 lg:text-display font-serif font-bold text-neutral-950 mb-8 animate-slide-up">
              Insights
            </h1>
            <p className="text-body-lg text-neutral-700 leading-relaxed max-w-3xl">
              Our perspectives on technology, infrastructure, and the future of innovation. 
              Insights from our investment team and portfolio companies.
            </p>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-neutral-300 sticky top-20 z-40 backdrop-blur-sm bg-white/95">
        <Container>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-full font-medium text-body-sm whitespace-nowrap transition-all ${
                  index === 0 
                    ? 'bg-primary-900 text-white' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <Container>
          {articles.filter(a => a.featured).map((article, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image Placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-primary-900/20 to-primary-700/10 rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl">📊</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-body-sm">
                    <span className="px-3 py-1 bg-primary-900/10 text-primary-900 rounded-full font-medium">
                      {article.category}
                    </span>
                    <span className="text-neutral-600">{article.date}</span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-neutral-600">{article.readTime}</span>
                  </div>
                  
                  <h2 className="text-heading-2 font-serif font-bold text-neutral-950 group-hover:text-primary-900 transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-body-lg text-neutral-700 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center gap-2 text-body font-medium text-primary-900 hover:text-primary-800 transition-colors group">
                    Read Article
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Article Grid */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.filter(a => !a.featured).map((article, index) => (
              <article 
                key={index}
                className="group cursor-pointer"
              >
                {/* Image Placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-neutral-200 to-neutral-100 rounded-xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-5xl">
                      {article.category === "Climate Tech" && "🌍"}
                      {article.category === "AI/ML" && "🧠"}
                      {article.category === "Hardware" && "⚙️"}
                      {article.category === "Energy" && "⚡"}
                      {article.category === "Venture Capital" && "💼"}
                    </span>
                  </div>
                </div>
                
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-body-sm text-neutral-600 mb-3">
                  <span className="px-2 py-1 bg-neutral-100 rounded text-body-sm font-medium">
                    {article.category}
                  </span>
                  <span>{article.date}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-heading-4 font-serif font-bold text-neutral-950 mb-3 group-hover:text-primary-900 transition-colors">
                  {article.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-body text-neutral-700 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                {/* Read Time */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-300">
                  <span className="text-body-sm text-neutral-600">{article.readTime}</span>
                  <button className="text-body-sm font-medium text-primary-900 hover:text-primary-800 flex items-center gap-1 group">
                    Read
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="px-8 py-4 border-2 border-neutral-300 text-neutral-900 font-medium rounded-full hover:border-primary-900 hover:text-primary-900 transition-all">
              Load More Articles
            </button>
          </div>
        </Container>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-heading-2 font-serif font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-body-lg mb-8 opacity-90">
              Subscribe to receive our latest insights and portfolio updates.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-neutral-950 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-primary-900 font-medium rounded-full hover:bg-neutral-100 transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}