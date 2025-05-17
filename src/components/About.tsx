import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase">
              About <span className="brutalist-accent">Alexandre</span>
            </h2>
            <div className="brutalist-border w-full h-80 md:h-[500px] bg-secondary flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground/10 z-10" />
              <div className="relative z-20">
                <span className="text-2xl font-accent uppercase">[Portrait]</span>
              </div>
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 mix-blend-multiply" />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-xl">
                Alexandre Ferrari is an entrepreneur, visionary, and CEO at MicroHabitat, pushing the boundaries of what's possible through urban agriculture and innovative sustainability.
              </p>
              
              <p>
                As the leader of MicroHabitat, Alexandre transforms urban spaces into thriving agricultural hubs that reconnect people with nature and their food. His company creates sustainable urban farms on rooftops and outdoor spaces across North America, supporting local communities and environmental initiatives.
              </p>
              
              <p>
                With a keen eye for innovation and a passion for creative solutions, Alexandre has established himself as a thought leader in the industry. His approach combines cutting-edge sustainability practices with artistic sensibility, resulting in projects that are both functional and aesthetically striking.
              </p>
              
              <p>
                As an art collector and creator, Alexandre brings a unique perspective to his entrepreneurial ventures, constantly seeking the intersection of beauty and utility. His work at MicroHabitat exemplifies this philosophy, creating spaces that inspire and transform urban environments.
              </p>
              
              <div className="mt-10 pt-8 border-t-2 border-foreground">
                <h3 className="text-2xl font-bold mb-4 uppercase font-accent">Areas of expertise</h3>
                <ul className="grid grid-cols-2 gap-3 list-none pl-0">
                  <li className="brutalist-border px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-300">Innovation</li>
                  <li className="brutalist-border px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-300">Leadership</li>
                  <li className="brutalist-border px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-300">Urban Agriculture</li>
                  <li className="brutalist-border px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-300">Sustainability</li>
                  <li className="brutalist-border px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-300">Art Curation</li>
                  <li className="brutalist-border px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-300">Vision</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 