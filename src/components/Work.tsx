import React from 'react';

const WorkItem = ({ 
  title, 
  description, 
  year, 
  category,
  id 
}: { 
  title: string, 
  description: string, 
  year: string, 
  category: string,
  id: string 
}) => {
  return (
    <div className="brutalist-border p-6 bg-background transition-transform hover:translate-x-1 hover:translate-y-1 relative group">
      <div className="absolute -top-2 -right-2 w-16 h-16 border-4 border-foreground bg-secondary rotate-6 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10" />
      <div className="h-60 bg-secondary flex items-center justify-center mb-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 mix-blend-multiply" />
        <span className="text-lg font-accent uppercase relative z-10">[Project Image]</span>
      </div>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="text-sm font-accent inline-block -rotate-3">{year}</span>
      </div>
      <span className="inline-block brutalist-accent text-sm mb-3">{category}</span>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const Work = () => {
  const works = [
    {
      id: "microhabitat",
      title: "MICROHABITAT",
      description: "Transforming urban spaces into thriving agricultural hubs that reconnect people with nature and their food through sustainable urban farming.",
      year: "2022",
      category: "ENTREPRENEURSHIP"
    },
    {
      id: "urban-canvas",
      title: "URBAN CANVAS",
      description: "Art installation series transforming urban environments through interactive displays that blend technology, sustainability, and community engagement.",
      year: "2021",
      category: "ART"
    },
    {
      id: "tech-fusion",
      title: "TECH FUSION",
      description: "Collaborative platform connecting artists and technologists to create innovative sustainability solutions for modern urban challenges.",
      year: "2020",
      category: "TECHNOLOGY"
    },
    {
      id: "future-vision",
      title: "FUTURE VISION",
      description: "Forward-thinking consultancy helping companies adapt to emerging environmental challenges through art-inspired sustainability practices.",
      year: "2019",
      category: "CONSULTANCY"
    }
  ];

  return (
    <section id="work" className="py-20 px-4 md:px-10 bg-secondary relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-[url('/grid-pattern.svg')] opacity-10" />
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-bold uppercase">
            Selected <span className="brutalist-accent">Work</span>
          </h2>
          <div className="hidden md:block brutalist-border py-2 px-4 rotate-3 bg-background">
            <p className="text-sm font-accent">INNOVATION × ART</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work) => (
            <WorkItem key={work.id} {...work} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="brutalist-button inline-block px-10 py-3 text-lg font-bold uppercase relative overflow-hidden">
            <span className="relative z-10">Start a project together</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work; 