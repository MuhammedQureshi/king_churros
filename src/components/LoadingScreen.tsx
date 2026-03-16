"use client";

import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const TOTAL_FRAMES = 90;
const FRAME_URL_BASE = 'https://cvesqxpcirhvoxxddctl.supabase.co/storage/v1/object/public/webp/frame_';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    const updateProgress = () => {
      loadedCount++;
      const currentProgress = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
      setProgress(currentProgress);
      if (loadedCount >= TOTAL_FRAMES) {
        setTimeout(() => setIsLoaded(true), 500);
      }
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(3, '0');
      img.src = `${FRAME_URL_BASE}${frameIndex}_delay-0.041s.png`;
      img.onload = updateProgress;
      img.onerror = updateProgress; // Continue anyway if a frame fails
      images.push(img);
    }
  }, []);

  if (isLoaded) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-8 animate-pulse">
        <h1 className="font-headline text-5xl md:text-7xl font-black text-primary tracking-widest uppercase">
          King Churros
        </h1>
        <p className="font-body text-muted-foreground mt-2 tracking-[0.3em] text-xs uppercase">
          Preparing the Royal Experience
        </p>
      </div>
      <div className="w-full max-w-md space-y-4">
        <Progress value={progress} className="h-1 bg-muted" />
        <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          <span>Loading Frames</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
