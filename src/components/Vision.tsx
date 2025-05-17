import React from 'react';

const Vision = () => {
  return (
    <section id="vision" className="py-20 px-4 md:px-10 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="brutalist-grid w-full h-full" />
      </div>
      <div className="absolute top-10 right-10 w-40 h-40 brutalist-border rotate-12 hidden md:block opacity-10" />
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="brutalist-border p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-12 bg-[url('/grid-pattern.svg')] opacity-10" />
            <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase text-center relative">
              The <span className="brutalist-accent relative inline-block">
                Vision
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent" />
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="space-y-4 group">
                <h3 className="text-2xl font-bold font-accent relative inline-block group-hover:-translate-y-1 transition-transform">
                  <span className="absolute -top-2 -left-2 w-8 h-8 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  01. INNOVATE
                </h3>
                <p>Breaking boundaries and creating new possibilities through technological innovation and creative thinking. Constantly pushing the limits of what's possible.</p>
                <div className="h-40 bg-secondary flex items-center justify-center mt-4 overflow-hidden relative group-hover:shadow-lg transition-shadow">
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 mix-blend-multiply" />
                  <span className="text-sm font-accent uppercase relative z-10">[Innovation Icon]</span>
                </div>
              </div>
              
              <div className="space-y-4 group">
                <h3 className="text-2xl font-bold font-accent relative inline-block group-hover:-translate-y-1 transition-transform">
                  <span className="absolute -top-2 -left-2 w-8 h-8 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  02. CREATE
                </h3>
                <p>Bringing ideas to life through thoughtful design and execution. Combining form and function to produce work that's both beautiful and purposeful.</p>
                <div className="h-40 bg-secondary flex items-center justify-center mt-4 overflow-hidden relative group-hover:shadow-lg transition-shadow">
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 mix-blend-multiply" />
                  <span className="text-sm font-accent uppercase relative z-10">[Creation Icon]</span>
                </div>
              </div>
              
              <div className="space-y-4 group">
                <h3 className="text-2xl font-bold font-accent relative inline-block group-hover:-translate-y-1 transition-transform">
                  <span className="absolute -top-2 -left-2 w-8 h-8 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  03. TRANSFORM
                </h3>
                <p>Making lasting impact through projects that transform spaces, communities, and industries. Leaving a legacy of positive change and inspiration.</p>
                <div className="h-40 bg-secondary flex items-center justify-center mt-4 overflow-hidden relative group-hover:shadow-lg transition-shadow">
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 mix-blend-multiply" />
                  <span className="text-sm font-accent uppercase relative z-10">[Transformation Icon]</span>
                </div>
              </div>
            </div>
            
            <div className="mt-16 md:mt-24 text-center relative">
              <blockquote className="text-xl md:text-3xl italic max-w-3xl mx-auto leading-relaxed relative">
                <span className="absolute -top-10 left-0 text-8xl opacity-10 font-accent">"</span>
                "My vision is to create a world where urban agriculture, technology and art converge to solve problems, inspire change, and elevate human experience."
                <span className="absolute -bottom-20 right-0 text-8xl opacity-10 font-accent">"</span>
              </blockquote>
              <p className="mt-4 text-lg font-bold">— Alexandre Ferrari</p>
            </div>
          </div>
          
          <div className="hidden md:block absolute -bottom-8 -right-8 brutalist-border p-4 bg-background rotate-6">
            <p className="font-accent text-sm">THINK DIFFERENT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision; 