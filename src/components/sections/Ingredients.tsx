
import { Check } from 'lucide-react';

const QUALITY_PILLARS = [
  { name: 'Organic Flour', desc: 'Sourced from local artisan mills, our dough is prepared fresh every morning in Brixton.' },
  { name: 'Pure Spices', desc: 'Our signature coating uses Grade-A Ceylon cinnamon and fine raw cane sugar.' },
  { name: 'Premium Oils', desc: 'We only use high-grade, zero-trans-fat oils to ensure a clean, crispy finish.' },
  { name: 'Artisan Dips', desc: 'Real Belgian chocolate and handmade Dulce de Leche for the ultimate dip.' },
];

export function Ingredients() {
  return (
    <section id="ingredients" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <h2 className="font-headline text-primary text-sm md:text-lg font-bold tracking-[0.5em] uppercase">The Standards</h2>
              <h3 className="font-headline text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[1] md:leading-[0.85]">
                Uncompromising <br className="hidden md:block" /> Quality
              </h3>
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl font-medium leading-relaxed mx-auto lg:mx-0">
                We believe that the simplest pleasures should be held to the highest standards. Every churro we serve is a testament to our dedication to purity and heritage.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {QUALITY_PILLARS.map((pillar, i) => (
                <div key={i} className="space-y-2 md:space-y-3 p-4 md:p-0 bg-white/5 md:bg-transparent rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-primary" />
                    </div>
                    <h4 className="font-headline text-lg md:text-xl font-black text-white uppercase tracking-tight">{pillar.name}</h4>
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative p-8 md:p-12 lg:p-20 bg-primary rounded-3xl md:rounded-[4rem] shadow-3xl shadow-primary/10 group overflow-hidden">
            <div className="relative z-10 space-y-8 md:space-y-10">
              <div className="space-y-2 md:space-y-4">
                <span className="text-black/50 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">The Promise</span>
                <h4 className="font-headline text-3xl md:text-5xl font-black text-black uppercase tracking-tighter leading-none">The Crown Standard</h4>
              </div>
              <ul className="space-y-4 md:space-y-6">
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="w-2 h-2 rounded-full bg-black/30 mt-1.5 md:mt-2" />
                  <p className="text-black font-black uppercase tracking-widest text-[10px] md:text-sm">Zero Artificial Additives</p>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="w-2 h-2 rounded-full bg-black/30 mt-1.5 md:mt-2" />
                  <p className="text-black font-black uppercase tracking-widest text-[10px] md:text-sm">Hand-piped to Order</p>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="w-2 h-2 rounded-full bg-black/30 mt-1.5 md:mt-2" />
                  <p className="text-black font-black uppercase tracking-widest text-[10px] md:text-sm">Sourced Locally in London</p>
                </li>
              </ul>
              <button className="w-full md:w-auto bg-black text-white px-8 md:px-10 py-4 md:py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">
                Learn About Our Source
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
