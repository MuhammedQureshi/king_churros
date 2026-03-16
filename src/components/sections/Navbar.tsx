
"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu as MenuIcon, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const NAV_LINKS = [
  { label: 'About', href: '#product' },
  { label: 'Menu', href: '#menu' },
  { label: 'Quality', href: '#ingredients' },
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
        if (element && window.scrollY >= element.offsetTop - 120) {
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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12",
      scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent"
    )}>
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <a href="#" className="font-headline text-2xl md:text-3xl font-black tracking-tight text-white uppercase group flex items-center gap-2">
          King <span className="text-primary group-hover:text-accent transition-colors">Churros</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-primary",
                activeSection === link.href.substring(1) ? "text-primary" : "text-white/60"
              )}
            >
              {link.label}
            </a>
          ))}
          <button className="bg-primary text-black px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:scale-105 transition-all shadow-lg shadow-primary/20">
            Order Now
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-white p-2">
                <MenuIcon size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 border-white/10 text-white flex flex-col justify-center p-12">
              <div className="space-y-8 text-center">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-2xl font-headline font-black uppercase tracking-tighter hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <button className="w-full bg-primary text-black py-4 rounded-full text-xs font-black uppercase tracking-widest mt-8">
                  Order Now
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
