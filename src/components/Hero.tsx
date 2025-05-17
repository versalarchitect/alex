import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] brutalist-grid flex items-center justify-center p-4 md:p-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 brutalist-border bg-secondary -rotate-12 hidden md:block" />
      <div className="absolute bottom-32 right-32 w-16 h-16 brutalist-border rotate-12 hidden md:block" />
      <div className="max-w-4xl mx-auto z-10">
        <div className="brutalist-border p-8 md:p-12 bg-background relative">
          <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-foreground hidden md:block" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight relative">
            <div className="absolute top-2 left-2 text-accent opacity-20 font-accent">ENTREPRENEUR</div>
            ENTREPRENEUR
            <span className="block relative">
              <div className="absolute top-2 left-2 text-accent opacity-20 font-accent">VISIONARY</div>
              VISIONARY
            </span>
            <span className="brutalist-accent block relative">
              ARTIST
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary" />
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            CEO at MicroHabitat. Pushing boundaries through vision, sustainable urban farming, and artistic innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#work" 
              className="brutalist-button px-6 py-3 text-lg font-bold uppercase relative group"
            >
              <span className="relative z-10">See my work</span>
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
            <a href="#contact" className="border-3 border-foreground px-6 py-3 text-lg font-bold uppercase hover:bg-foreground hover:text-background transition-colors">
              Get in touch
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-8 brutalist-border p-4 bg-background rotate-[-2deg] hidden md:block">
        <p className="text-sm font-accent">EST. 2024</p>
      </div>
    </section>
  );
};

export default Hero; 