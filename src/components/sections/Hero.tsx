import { Container } from "@/components/ui/Container";
import { NetworkGrid } from "@/components/visuals/NetworkGrid";

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden bg-gradient-to-b from-neutral-100 to-white">
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 animate-slide-up">
            <h1 className="text-heading-1 lg:text-display font-serif font-bold text-neutral-950 leading-[1.05] mb-8">
              Architecting the <br />
              <span className="italic font-light text-neutral-600">Next Century.</span>
            </h1>
            
            <p className="text-body-lg text-neutral-700 mb-10 max-w-xl leading-relaxed">
              Red Vanda Partners backs institutional founders building <span className="font-semibold text-neutral-900">transformative deep-tech infrastructure</span> for tomorrow's economy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#philosophy" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-900 text-white font-medium rounded-full hover:bg-primary-800 transition-all hover:shadow-medium group"
              >
                Read Our Thesis
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <a 
                href="/portfolio" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-300 text-neutral-900 font-medium rounded-full hover:border-primary-900 hover:text-primary-900 transition-all"
              >
                View Portfolio
              </a>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <NetworkGrid className="w-full h-auto opacity-40 lg:opacity-50 animate-pulse-slow" />
            </div>
          </div>
          
        </div>
      </Container>
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" 
           style={{ backgroundSize: '60px 60px' }} />
      
    </section>
  );
};