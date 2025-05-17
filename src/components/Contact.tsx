import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-10 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          <div className="md:w-1/2">
            <div className="brutalist-border border-background p-8 bg-background text-foreground">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase">
                Let's <span className="brutalist-accent">Connect</span>
              </h2>
              
              <p className="text-xl mb-8">
                Have a project in mind? Want to collaborate? I'm always open to discussing new opportunities.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold font-mono mb-2">EMAIL</h3>
                  <p className="text-xl">hello@alexandreferrari.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold font-mono mb-2">LOCATION</h3>
                  <p className="text-xl">Montreal, Canada</p>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <a href="https://instagram.com" className="brutalist-border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors font-mono">
                    INSTAGRAM
                  </a>
                  <a href="https://linkedin.com" className="brutalist-border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors font-mono">
                    LINKEDIN
                  </a>
                  <a href="https://twitter.com" className="brutalist-border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors font-mono">
                    TWITTER
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-mono mb-2">NAME</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 bg-background text-foreground brutalist-border border-background" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-lg font-mono mb-2">EMAIL</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 bg-background text-foreground brutalist-border border-background" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-lg font-mono mb-2">MESSAGE</label>
                <textarea 
                  id="message" 
                  rows={6} 
                  className="w-full p-3 bg-background text-foreground brutalist-border border-background"
                />
              </div>
              
              <button 
                type="submit" 
                className="brutalist-button border-background text-foreground bg-background px-8 py-3 text-lg font-bold uppercase w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 