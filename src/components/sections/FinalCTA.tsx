
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ORDER_URL = "https://www.just-eat.co.uk/restaurants-king-churros-nine-elms-sw9/menu?serviceType=collection&utm_source=google&utm_medium=organic&utm_campaign=foodorder";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-40 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 md:opacity-10 pointer-events-none select-none">
        <span className="font-headline text-[10rem] md:text-[25rem] font-black text-white absolute -top-10 -left-10 md:-top-20 md:-left-20">KING</span>
      </div>
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10 space-y-8 md:space-y-12">
        <h2 className="font-headline text-5xl md:text-9xl font-black text-white uppercase tracking-tighter leading-tight md:leading-none animate-pulse">
          Taste the King
        </h2>
        <p className="font-body text-base md:text-2xl text-white/90 font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] max-w-2xl mx-auto">
          The throne is yours. Grab a stick and claim your reward.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 pt-4">
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto rounded-full px-8 py-5 md:px-10 md:py-6 border-white text-white hover:bg-white hover:text-accent transition-all font-black tracking-widest uppercase text-sm md:text-base shadow-xl">
              Order Now
            </Button>
          </a>
          <Link href="/menu" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto rounded-full px-8 py-5 md:px-10 md:py-6 bg-white text-black hover:bg-black hover:text-white transition-all font-black tracking-widest uppercase text-sm md:text-base shadow-xl">
              View Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
