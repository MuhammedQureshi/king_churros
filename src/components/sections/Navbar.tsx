"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'Ingredients', href: '#ingredients' },
  { label: 'Nutrition', href: '#nutrition' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12",
      scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3" : "bg-transparent"
    )}>
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <a href="#" className="font-headline text-2xl md:text-3xl font-black tracking-tight text-white uppercase group">
          King <span className="text-primary group-hover:text-accent transition-colors">Churros</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary",
                activeSection === link.href.substring(1) ? "text-primary" : "text-white/70"
              )}
            >
              {link.label}
            </a>
          ))}
          <button className="bg-primary text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all transform active:scale-95">
            Order Now
          </button>
        </div>

        <button className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
