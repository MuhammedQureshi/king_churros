
"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu as MenuIcon, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from '@/components/ui/sheet';
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
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
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
      "fixed top-0 left-0 right-0 z-[60] transition-all duration-500 px-4 md:px-12",
      scrolled ? "bg-black/85 backdrop-blur-2xl border-b border-white/10 py-3" : "bg-transparent py-4 md:py-6"
    )}>
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-headline text-xl md:text-3xl font-black tracking-tight text-white uppercase group flex items-center gap-2">
          King <span className="text-primary group-hover:text-accent transition-colors">Churros</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-primary whitespace-nowrap",
                activeSection === link.href.substring(1) ? "text-primary" : "text-white/60"
              )}
            >
              {link.label}
            </a>
          ))}
          <button className="bg-primary text-black px-6 lg:px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-lg shadow-primary/10">
            Order Now
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors">
                <MenuIcon size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/98 border-white/10 text-white flex flex-col justify-center p-10">
              <SheetTitle className="sr-only">Menu Navigation</SheetTitle>
              <div className="space-y-8 text-center">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="block text-3xl font-headline font-black uppercase tracking-tighter hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <button 
                    className="w-full bg-primary text-black py-4 rounded-full text-xs font-black uppercase tracking-widest mt-8 shadow-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    Order Now
                  </button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
