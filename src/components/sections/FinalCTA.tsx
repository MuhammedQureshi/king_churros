import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section className="py-32 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <span className="font-headline text-[25rem] font-black text-white absolute -top-20 -left-20">KING</span>
      </div>
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10 space-y-10">
        <h2 className="font-headline text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none animate-pulse">
          Taste the King
        </h2>
        <p className="font-body text-xl md:text-2xl text-white/90 font-bold uppercase tracking-[0.4em] max-w-2xl mx-auto">
          The throne is yours. Grab a stick and claim your reward.
        </p>
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <Button variant="outline" className="rounded-full px-12 py-8 border-white text-white hover:bg-white hover:text-accent transition-all font-black tracking-widest uppercase text-lg shadow-xl">
            Order Now
          </Button>
          <Button className="rounded-full px-12 py-8 bg-white text-black hover:bg-black hover:text-white transition-all font-black tracking-widest uppercase text-lg shadow-xl">
            View Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
