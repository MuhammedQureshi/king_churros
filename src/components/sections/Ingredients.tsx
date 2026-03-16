import { Check } from 'lucide-react';

const INGREDIENTS = [
  { name: 'Fresh Dough', desc: 'Light, airy, and prepared with organic flour daily.' },
  { name: 'Cinnamon Sugar', desc: 'A bespoke blend of Ceylon cinnamon and pure cane sugar.' },
  { name: 'Premium Chocolate Dip', desc: '70% dark Belgian chocolate melted to perfection.' },
  { name: 'Caramel Sauce', desc: 'Slow-cooked artisanal caramel with a hint of sea salt.' },
  { name: 'Strawberry Topping', desc: 'Hand-picked summer berries reduced into a vibrant coulis.' },
];

export function Ingredients() {
  return (
    <section id="ingredients" className="py-24 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-headline text-primary text-lg font-bold tracking-widest uppercase">Quality First</h2>
          <h3 className="font-headline text-5xl font-black text-white uppercase">The Royal Palette</h3>
          <p className="text-muted-foreground">Only the finest ingredients make it to the King's table. We pride ourselves on sourcing sustainably and crafting with care.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INGREDIENTS.map((item, i) => (
            <div key={i} className="p-8 border border-white/5 bg-background rounded-2xl hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Check className="text-primary group-hover:text-black transition-colors" />
              </div>
              <h4 className="font-headline text-2xl font-bold text-white mb-3 uppercase tracking-tight">{item.name}</h4>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
          <div className="p-8 bg-primary rounded-2xl flex flex-col justify-center items-center text-center space-y-4">
            <h4 className="font-headline text-3xl font-black text-black uppercase">Pure Quality</h4>
            <p className="text-black/80 font-bold uppercase tracking-widest text-xs">No Preservatives • No Artificial Colors</p>
          </div>
        </div>
      </div>
    </section>
  );
}
