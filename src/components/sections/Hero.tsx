
"use client";

import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, MapPin } from 'lucide-react';

const TOTAL_FRAMES = 200;
const FRAME_URL_BASE = 'https://cvesqxpcirhvoxxddctl.supabase.co/storage/v1/object/public/webp/frame_';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === TOTAL_FRAMES) {
        setIsReady(true);
      }
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(3, '0');
      img.src = `${FRAME_URL_BASE}${frameIndex}_delay-0.041s.png`;
      img.onload = handleLoad;
      img.onerror = handleLoad;
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d', { alpha: false });
    if (!context) return;

    const renderFrame = (index: number) => {
      const img = imagesRef.current[index];
      if (!img || !context) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgAspect = img.width / img.height;
      const canvasAspect = canvasWidth / canvasHeight;
      
      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasAspect > imgAspect) {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgAspect;
        offsetX = 0;
        offsetY = (canvasHeight - drawHeight) / 2;
      } else {
        drawWidth = canvasHeight * imgAspect;
        drawHeight = canvasHeight;
        offsetX = (canvasWidth - drawWidth) / 2;
        offsetY = 0;
      }

      context.fillStyle = '#000';
      context.fillRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      handleScroll();
    };

    let requestRef: number;
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.scrollHeight - window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, Math.abs(rect.top) / scrollHeight));
      const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(scrollProgress * TOTAL_FRAMES));
      
      cancelAnimationFrame(requestRef);
      requestRef = requestAnimationFrame(() => renderFrame(frameIndex));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(requestRef);
    };
  }, [isReady]);

  return (
    <div ref={containerRef} className="parallax-container">
      <div className="sticky-hero flex items-center justify-center">
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ 
            filter: 'brightness(0.35)',
            opacity: isReady ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out'
          }}
        />
        
        <div className="relative z-10 container mx-auto px-6 text-center space-y-6 md:space-y-10 max-w-4xl pt-16 md:pt-0 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-2">
            <MapPin size={14} className="text-primary" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/90">
              Handcrafted in Brixton
            </span>
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] uppercase tracking-tighter drop-shadow-2xl">
            King <span className="text-primary block">Churros</span>
          </h1>

          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="font-body text-base md:text-2xl text-white font-black tracking-[0.3em] uppercase drop-shadow-lg">
              Fresh • Hot • Artisan
            </p>
            <p className="font-body text-white/80 text-sm md:text-lg leading-relaxed tracking-wide drop-shadow-md bg-black/10 backdrop-blur-[2px] p-3 rounded-xl md:bg-transparent md:backdrop-blur-none">
              Discover the royal standard of desserts. <br className="hidden md:block" />
              Golden, crispy churros made fresh to order in the heart of Brixton.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-6 md:pt-8">
            <Button className="w-full sm:w-auto rounded-full px-10 py-7 md:px-16 md:py-10 bg-primary text-black hover:bg-white transition-all font-black tracking-[0.2em] uppercase text-xs md:text-base shadow-xl">
              Order Now
            </Button>
            <Button variant="outline" className="w-full sm:w-auto rounded-full px-10 py-7 md:px-16 md:py-10 border-white/30 text-white hover:bg-white/10 backdrop-blur-md transition-all font-black tracking-[0.2em] uppercase text-xs md:text-base">
              View Menu
            </Button>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        
        <div className="absolute bottom-10 left-10 hidden lg:flex flex-col gap-6 text-white/40">
          <a href="#" className="hover:text-primary transition-all"><Instagram size={20} /></a>
          <a href="#" className="hover:text-primary transition-all"><Facebook size={20} /></a>
        </div>

        <div className="absolute bottom-10 right-10 hidden lg:block text-right">
          <p className="text-[9px] font-black uppercase tracking-[0.8em] text-white/20 rotate-90 origin-right translate-x-10">
            SCROLL TO EXPERIENCE
          </p>
        </div>
      </div>
    </div>
  );
}
