import { Container } from "@/components/ui/Container";

export const Philosophy = () => {
  const focusAreas = [
    {
      title: "Infrastructure Software",
      description: "Next-generation cloud platforms, developer tools, and enterprise systems that power global operations.",
      icon: "⚡"
    },
    {
      title: "Advanced Computing",
      description: "Quantum systems, edge computing, and specialized hardware enabling computational breakthroughs.",
      icon: "🔬"
    },
    {
      title: "AI & Data Platforms",
      description: "Foundation models, MLOps infrastructure, and intelligent systems reshaping industries.",
      icon: "🧠"
    },
    {
      title: "Energy & Climate Tech",
      description: "Clean energy infrastructure, carbon capture, and sustainable industrial solutions.",
      icon: "🌍"
    }
  ];

  return (
    <section id="philosophy" className="py-24 lg:py-32 bg-white">
      <Container>
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-heading-2 lg:text-heading-1 font-serif font-bold text-neutral-950 mb-6">
            Our Philosophy
          </h2>
          <p className="text-body-lg text-neutral-700 leading-relaxed">
            We partner with exceptional founders building <span className="font-semibold text-neutral-900">category-defining companies</span> at the intersection of deep technology and massive market opportunity. Our approach is patient, strategic, and focused on long-term value creation.
          </p>
        </div>

        {/* Investment Criteria */}
        <div className="grid md:grid-cols-3 gap-12 mb-20 pb-20 border-b border-neutral-300">
          <div>
            <div className="w-12 h-12 rounded-full bg-primary-900/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-heading-4 font-serif font-semibold text-neutral-950 mb-3">
              Institutional Grade
            </h3>
            <p className="text-body text-neutral-700">
              We back founders with proven track records building for enterprise-scale adoption and global impact.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 rounded-full bg-primary-900/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-heading-4 font-serif font-semibold text-neutral-950 mb-3">
              Deep Technical Moats
            </h3>
            <p className="text-body text-neutral-700">
              We invest in companies with defensible technology advantages and sustainable competitive positioning.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 rounded-full bg-primary-900/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-heading-4 font-serif font-semibold text-neutral-950 mb-3">
              Global Ambition
            </h3>
            <p className="text-body text-neutral-700">
              We support companies positioned to reshape industries and define new infrastructure paradigms worldwide.
            </p>
          </div>
        </div>

        {/* Focus Areas Grid */}
        <div>
          <h3 className="text-heading-3 font-serif font-bold text-neutral-950 mb-12">
            Investment Focus
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <div 
                key={index} 
                className="group p-8 border border-neutral-300 rounded-2xl hover:border-primary-900 hover:shadow-soft transition-all duration-300"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h4 className="text-heading-4 font-serif font-semibold text-neutral-950 mb-3 group-hover:text-primary-900 transition-colors">
                  {area.title}
                </h4>
                <p className="text-body text-neutral-700">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};