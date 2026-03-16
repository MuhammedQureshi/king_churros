
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
            filter: 'brightness(0.4)',
            opacity: isReady ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out'
          }}
        />
        
        <div className="relative z-10 container mx-auto px-6 text-center space-y-12 max-w-5xl animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-black/50 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 mb-2">
            <MapPin size={16} className="text-primary" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-white/90">
              Handcrafted in Brixton
            </span>
          </div>

          <h1 className="font-headline text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-black text-white leading-[0.8] uppercase tracking-tighter drop-shadow-2xl">
            King <span className="text-primary block">Churros</span>
          </h1>

          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="font-body text-xl md:text-3xl text-white font-black tracking-[0.4em] uppercase drop-shadow-lg">
              Fresh • Hot • Artisan
            </p>
            <p className="font-body text-white/90 text-lg md:text-xl leading-relaxed tracking-wide drop-shadow-md bg-black/20 backdrop-blur-sm p-4 rounded-2xl">
              Discover the royal standard of desserts. <br className="hidden md:block" />
              Golden, crispy churros made fresh to order in the heart of Brixton.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <Button className="w-full sm:w-auto rounded-full px-16 py-10 bg-primary text-black hover:bg-white hover:scale-105 transition-all font-black tracking-[0.2em] uppercase text-base shadow-2xl shadow-primary/30">
              Order Now
            </Button>
            <Button variant="outline" className="w-full sm:w-auto rounded-full px-16 py-10 border-white/40 text-white hover:bg-white/10 backdrop-blur-md transition-all font-black tracking-[0.2em] uppercase text-base">
              View Menu
            </Button>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        
        <div className="absolute bottom-16 left-16 hidden lg:flex flex-col gap-8 text-white/50">
          <a href="#" className="hover:text-primary transition-all hover:scale-110"><Instagram size={24} /></a>
          <a href="#" className="hover:text-primary transition-all hover:scale-110"><Facebook size={24} /></a>
        </div>

        <div className="absolute bottom-16 right-16 hidden lg:block text-right">
          <p className="text-[10px] font-black uppercase tracking-[0.8em] text-white/30 rotate-90 origin-right translate-x-12">
            SCROLL TO EXPERIENCE
          </p>
        </div>
      </div>
    </div>
  );
}
