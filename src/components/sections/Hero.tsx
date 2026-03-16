"use client";

import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const TOTAL_FRAMES = 90;
const FRAME_URL_BASE = 'https://cvesqxpcirhvoxxddctl.supabase.co/storage/v1/object/public/webp/frame_';

export function Hero() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.scrollHeight - window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, Math.abs(rect.top) / scrollHeight));
      
      const frame = Math.floor(scrollProgress * (TOTAL_FRAMES - 1));
      setCurrentFrame(frame);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const frameIndex = currentFrame.toString().padStart(3, '0');
  const imageUrl = `${FRAME_URL_BASE}${frameIndex}_delay-0.041s.png`;

  return (
    <div ref={containerRef} className="parallax-container">
      <div className="sticky-hero flex items-center">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 bg-center bg-cover transition-none duration-0"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            filter: 'brightness(0.7)' 
          }}
        />
        
        {/* Visual Overlay - Left Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-6 max-w-xl animate-fade-in">
            <p className="font-headline text-primary text-xl font-bold tracking-[0.2em] uppercase">
              King Churros
            </p>
            <h1 className="font-headline text-7xl md:text-9xl font-black text-white leading-tight uppercase">
              King <br /> <span className="text-white">Churros</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-white/90 font-bold tracking-[0.3em] uppercase border-y border-white/20 py-2 inline-block">
              Fresh • Hot • Handcrafted
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-md">
              Golden crispy churros made fresh to order, coated in cinnamon sugar and served with rich melted chocolate. A royal dessert experience in every bite.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="outline" className="rounded-full px-8 py-6 border-white text-white hover:bg-white hover:text-black transition-all font-bold tracking-widest uppercase text-xs">
                Order Now
              </Button>
              <Button className="rounded-full px-8 py-6 bg-white text-black hover:bg-primary transition-all font-bold tracking-widest uppercase text-xs">
                View Menu
              </Button>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="hidden md:flex justify-end items-center relative pr-12">
            <div className="flex items-center space-x-6 animate-slide-up">
              <div className="h-64 w-[1px] bg-white/30" />
              <span className="font-headline text-[12rem] font-black text-white/10 select-none">
                01
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Socials */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-8 z-10">
          <a href="#" className="text-white/50 hover:text-primary transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-white/50 hover:text-primary transition-colors">
            <span className="text-sm font-bold tracking-widest uppercase">TikTok</span>
          </a>
          <a href="#" className="text-white/50 hover:text-primary transition-colors">
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
