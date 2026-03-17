
"use client";

import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

const TOTAL_FRAMES = 200;
const FRAME_URL_BASE = 'https://cvesqxpcirhvoxxddctl.supabase.co/storage/v1/object/public/webp/frame_';
const ORDER_URL = "https://www.just-eat.co.uk/restaurants-king-churros-nine-elms-sw9/menu?serviceType=collection&utm_source=google&utm_medium=organic&utm_campaign=foodorder";
const INSTA_URL = "https://www.instagram.com/kingchurroslondon?igsh=bWJuZDc1cm12eWY0";

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
      if (!img || !context || !img.complete || img.naturalWidth === 0) return;

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
      if (scrollHeight <= 0) return;
      
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
        
        <div className="relative z-10 container mx-auto px-6 text-center space-y-8 md:space-y-12 max-w-5xl pt-24 md:pt-0 animate-fade-in">
          <div className="space-y-4">
            <h1 className="font-headline text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] md:leading-[0.9] uppercase tracking-tighter drop-shadow-2xl">
              King <span className="text-primary block">Churros</span>
            </h1>
            <p className="font-body text-sm md:text-2xl text-white font-black tracking-[0.5em] uppercase drop-shadow-lg opacity-90">
              Fresh • Hot • Artisan
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="font-body text-white/80 text-xs md:text-xl leading-relaxed tracking-widest opacity-80 uppercase px-4">
              The royal standard of desserts. <br className="hidden md:block" />
              Handcrafted artisan churros made fresh to order in the heart of Brixton.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8 pt-4">
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto rounded-full px-8 py-4 md:px-10 md:py-6 bg-primary text-black hover:bg-white transition-all font-black tracking-[0.2em] uppercase text-sm md:text-base shadow-2xl h-auto">
                Order Now
              </Button>
            </a>
            <Link href="/menu" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto rounded-full px-8 py-4 md:px-10 md:py-6 border-white/40 text-white hover:bg-white/10 backdrop-blur-md transition-all font-black tracking-[0.2em] uppercase text-sm md:text-base h-auto">
                View Menu
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-48 md:h-64 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />
        
        <div className="absolute bottom-8 left-8 hidden lg:flex flex-col gap-6 text-white/30">
          <a href={INSTA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-primary transition-all">
            <Facebook size={20} />
          </a>
        </div>

        <div className="absolute bottom-12 right-12 hidden lg:block text-right">
          <p className="text-[10px] font-black uppercase tracking-[1em] text-white/20 rotate-90 origin-right translate-x-12">
            SCROLL TO EXPERIENCE
          </p>
        </div>
      </div>
    </div>
  );
}
