import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-12 px-4 md:px-10 brutalist-border border-l-0 border-r-0 border-b-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
                ALEXANDRE <span className="brutalist-accent">FERRARI</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm mb-6">
              Entrepreneur, visionary, CEO at Micro Habitat and artist, art buyer. Pushing boundaries through vision, technology, and art.
            </p>
            <p className="text-sm font-mono">&copy; {new Date().getFullYear()} Alexandre Ferrari</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8">
            <div>
              <h3 className="font-mono font-bold mb-3 text-sm">SITEMAP</h3>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-sm hover:brutalist-accent">About</Link></li>
                <li><Link href="#work" className="text-sm hover:brutalist-accent">Work</Link></li>
                <li><Link href="#vision" className="text-sm hover:brutalist-accent">Vision</Link></li>
                <li><Link href="#contact" className="text-sm hover:brutalist-accent">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-mono font-bold mb-3 text-sm">CONNECT</h3>
              <ul className="space-y-2">
                <li><a href="https://instagram.com" className="text-sm hover:brutalist-accent">Instagram</a></li>
                <li><a href="https://linkedin.com" className="text-sm hover:brutalist-accent">LinkedIn</a></li>
                <li><a href="https://twitter.com" className="text-sm hover:brutalist-accent">Twitter</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-mono font-bold mb-3 text-sm">NEWSLETTER</h3>
              <p className="text-sm mb-3">Stay updated with the latest projects and news.</p>
              <form className="flex gap-0">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow p-2 brutalist-border border-r-0 bg-background text-foreground"
                />
                <button 
                  type="submit" 
                  className="brutalist-button px-4 py-2 text-sm font-bold"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">Designed with a brutalist vision.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="text-xs hover:brutalist-accent">Privacy Policy</a>
            <a href="/terms" className="text-xs hover:brutalist-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 