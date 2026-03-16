
"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu as MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import Link from 'next/link';

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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ease-in-out px-4 md:px-12",
      scrolled ? "bg-black/95 backdrop-blur-3xl border-b border-white/5 py-4" : "bg-transparent py-6 md:py-10"
    )}>
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <Link href="/" onClick={closeMenu} className="font-headline text-2xl md:text-3xl font-black tracking-tighter text-white uppercase group flex items-center gap-2">
          King <span className="text-primary group-hover:text-white transition-colors">Churros</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-[10px] lg:text-[11px] font-black uppercase tracking-[0.4em] transition-all hover:text-primary whitespace-nowrap",
                activeSection === link.href.substring(1) ? "text-primary" : "text-white/50"
              )}
            >
              {link.label}
            </a>
          ))}
          <button className="bg-primary text-black px-8 py-3.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-2xl shadow-primary/20">
            Order Now
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="text-white p-2 hover:bg-white/5 rounded-xl transition-colors">
                <MenuIcon size={28} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/98 backdrop-blur-2xl border-white/5 text-white flex flex-col justify-center p-12 z-[70]">
              <SheetTitle className="sr-only">Royal Menu</SheetTitle>
              <div className="space-y-10 text-center flex flex-col items-center">
                <Link href="/" onClick={closeMenu} className="font-headline text-3xl font-black text-white uppercase mb-4">
                  King <span className="text-primary">Churros</span>
                </Link>
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-4xl font-headline font-black uppercase tracking-tighter hover:text-primary transition-all"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                ))}
                <button 
                  className="w-full max-w-[280px] bg-primary text-black py-5 rounded-full text-sm font-black uppercase tracking-widest mt-10 shadow-2xl"
                  onClick={closeMenu}
                >
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
