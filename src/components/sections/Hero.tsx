"use client";

import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const TOTAL_FRAMES = 200;
const FRAME_URL_BASE = 'https://cvesqxpcirhvoxxddctl.supabase.co/storage/v1/object/public/webp/frame_';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isReady, setIsReady] = useState(false);

  // Preload images for Canvas to avoid flickering
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
      img.onerror = handleLoad; // Continue if one fails
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
      handleScroll(); // Redraw immediately
    };

    let requestRef: number;
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.scrollHeight - window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, Math.abs(rect.top) / scrollHeight));
      
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(scrollProgress * TOTAL_FRAMES)
      );
      
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
      <div className="sticky-hero flex items-center">
        {/* Animated Background Canvas */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ 
            filter: 'brightness(0.7)',
            opacity: isReady ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
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
