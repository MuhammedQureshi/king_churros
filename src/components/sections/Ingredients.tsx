
import { Check } from 'lucide-react';

const INGREDIENTS = [
  { name: 'Fresh Dough', desc: 'Light, airy, and prepared with organic flour daily in our Brixton kitchen.' },
  { name: 'Cinnamon Sugar', desc: 'A bespoke blend of Ceylon cinnamon and pure cane sugar.' },
  { name: 'Premium Dips', desc: '70% dark Belgian chocolate and artisan Dulce De Leche.' },
  { name: 'Pure Toppings', desc: 'Hand-picked berries and roasted nuts for that royal crunch.' },
];

export function Ingredients() {
  return (
    <section id="ingredients" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="font-headline text-primary text-lg font-bold tracking-[0.3em] uppercase">Quality First</h2>
          <h3 className="font-headline text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">The Royal Palette</h3>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INGREDIENTS.map((item, i) => (
            <div key={i} className="p-10 border border-white/5 bg-card rounded-[2rem] hover:border-primary/50 transition-all duration-500 group relative">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:rotate-6 transition-all">
                <Check className="text-primary group-hover:text-black transition-colors" />
              </div>
              <h4 className="font-headline text-2xl font-black text-white mb-4 uppercase tracking-tight">{item.name}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed font-body font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-12 bg-primary rounded-[3rem] flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8 shadow-2xl shadow-primary/20">
          <div className="space-y-2">
            <h4 className="font-headline text-4xl font-black text-black uppercase tracking-tighter">Pure Quality</h4>
            <p className="text-black/60 font-black uppercase tracking-[0.2em] text-[10px]">The Crown Standard of Desserts</p>
          </div>
          <div className="flex gap-6 text-black font-black uppercase tracking-widest text-[10px]">
            <span className="bg-black/10 px-4 py-2 rounded-full">No Preservatives</span>
            <span className="bg-black/10 px-4 py-2 rounded-full">Organic Flour</span>
          </div>
        </div>
      </div>
    </section>
  );
}
