
import { Check } from 'lucide-react';

const QUALITY_PILLARS = [
  { name: 'Organic Flour', desc: 'Sourced from local artisan mills, our dough is prepared fresh every morning in Brixton.' },
  { name: 'Pure Spices', desc: 'Our signature coating uses Grade-A Ceylon cinnamon and fine raw cane sugar.' },
  { name: 'Premium Oils', desc: 'We only use high-grade, zero-trans-fat oils to ensure a clean, crispy finish.' },
  { name: 'Artisan Dips', desc: 'Real Belgian chocolate and handmade Dulce de Leche for the ultimate dip.' },
];

export function Ingredients() {
  return (
    <section id="ingredients" className="py-32 bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="font-headline text-primary text-lg font-bold tracking-[0.5em] uppercase">The Standards</h2>
              <h3 className="font-headline text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]">
                Uncompromising <br /> Quality
              </h3>
              <p className="text-muted-foreground text-xl max-w-xl font-medium leading-relaxed">
                We believe that the simplest pleasures should be held to the highest standards. Every churro we serve is a testament to our dedication to purity and heritage.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {QUALITY_PILLARS.map((pillar, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check size={14} className="text-primary" />
                    </div>
                    <h4 className="font-headline text-xl font-black text-white uppercase tracking-tight">{pillar.name}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative p-12 lg:p-20 bg-primary rounded-[4rem] shadow-3xl shadow-primary/20 group">
            <div className="absolute top-10 right-10 opacity-10 font-headline text-[15rem] font-black text-black pointer-events-none group-hover:scale-110 transition-transform duration-1000">Q</div>
            <div className="relative z-10 space-y-10">
              <div className="space-y-4">
                <span className="text-black/50 font-black uppercase tracking-[0.5em] text-xs">The Promise</span>
                <h4 className="font-headline text-5xl font-black text-black uppercase tracking-tighter leading-none">The Crown Standard</h4>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="font-headline text-3xl font-black text-black/30">01</span>
                  <p className="text-black font-black uppercase tracking-widest text-sm pt-2">Zero Artificial Additives</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-headline text-3xl font-black text-black/30">02</span>
                  <p className="text-black font-black uppercase tracking-widest text-sm pt-2">Hand-piped to Order</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-headline text-3xl font-black text-black/30">03</span>
                  <p className="text-black font-black uppercase tracking-widest text-sm pt-2">Sourced Locally in London</p>
                </li>
              </ul>
              <button className="bg-black text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                Learn About Our Source
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
