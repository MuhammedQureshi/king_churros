
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const MENU_ITEMS = [
  {
    id: 'churro_filled',
    title: 'Churros Filled (4pcs)',
    description: 'Delicious churros filled with your choice of sweet, creamy goodness.',
    tag: 'Fan Favorite'
  },
  {
    id: 'churro_box',
    title: 'Churros Box (7 Sticks)',
    description: 'A delightful box of classic churros, perfect for an individual treat or sharing.',
    tag: 'Signature'
  },
  {
    id: 'churro_family',
    title: 'Family Box (24 Sticks)',
    description: 'A generous box containing 24 churros sticks, ideal for gatherings. Includes 2 Nutella & 2 Dulce De Leche dips.',
    tag: 'Value'
  },
  {
    id: 'churro_decorated',
    title: 'Decorated Churros (1 Churro)',
    description: 'Delicious churros enhanced with special decorations or extra toppings for a gourmet touch.',
    tag: 'Premium'
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="font-headline text-primary text-lg font-bold tracking-[0.3em] uppercase">The Selection</h2>
            <h3 className="font-headline text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">Royal Menu</h3>
          </div>
          <p className="max-w-md text-muted-foreground text-lg leading-relaxed">
            Handcrafted with precision and served with cinematic flair. Every bite is a royal reward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {MENU_ITEMS.map((item) => {
            const imgData = PlaceHolderImages.find(img => img.id === item.id);
            return (
              <div key={item.id} className="group relative bg-card rounded-3xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 h-full">
                  <div className="lg:col-span-2 relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <Image
                      src={imgData?.imageUrl || 'https://placehold.co/600x400'}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint={imgData?.imageHint}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-black text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest shadow-xl">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-3 p-8 flex flex-col justify-center space-y-4 bg-gradient-to-br from-card to-background">
                    <h4 className="font-headline text-2xl font-black text-white uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body">
                      {item.description}
                    </p>
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary">Made Fresh</span>
                      <button className="text-white text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-primary/40 hover:border-primary transition-all pb-1">
                        Select Options
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
