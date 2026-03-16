
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const MENU_ITEMS = [
  {
    id: 'churro_filled',
    title: 'Churros Filled (4pcs)',
    description: 'Delicious churros filled with your choice of sweet, creamy goodness.',
    tag: 'Artisan Choice'
  },
  {
    id: 'churro_box',
    title: 'Churros Box (7 Sticks)',
    description: 'A delightful box of classic churros, perfect for an individual treat or sharing.',
    tag: 'Classic'
  },
  {
    id: 'churro_family',
    title: 'Family Box (24 Sticks)',
    description: 'A generous box containing 24 churros sticks, ideal for family gatherings or parties. Comes with 2 portions of Nutella dip and 2 portions of the Dulce De Leche dip.',
    tag: 'Royal Feast'
  },
  {
    id: 'churro_decorated',
    title: 'Decorated Churros (1 Churro)',
    description: 'Delicious churros enhanced with special decorations or extra toppings.',
    tag: 'Gourmet'
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
          <h2 className="font-headline text-primary text-lg font-bold tracking-[0.5em] uppercase">The Collection</h2>
          <h3 className="font-headline text-6xl md:text-8xl font-black text-white uppercase tracking-tighter">The Royal Menu</h3>
          <div className="w-32 h-1 bg-primary/30 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {MENU_ITEMS.map((item) => {
            const imgData = PlaceHolderImages.find(img => img.id === item.id);
            return (
              <div key={item.id} className="group relative bg-card/40 backdrop-blur-sm rounded-[3rem] overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-700 hover:-translate-y-4 shadow-3xl">
                <div className="flex flex-col h-full">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={imgData?.imageUrl || 'https://placehold.co/800x600'}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                      data-ai-hint={imgData?.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-8 left-8">
                      <span className="bg-primary text-black text-[10px] font-black uppercase px-4 py-2 rounded-full tracking-widest shadow-2xl">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-10 flex flex-col justify-between flex-grow space-y-6">
                    <div className="space-y-4">
                      <h4 className="font-headline text-3xl font-black text-white uppercase tracking-tight group-hover:text-primary transition-colors leading-none">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-lg leading-relaxed font-body font-medium">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Made Fresh Daily</span>
                      </div>
                      <button className="text-white text-[10px] font-black uppercase tracking-[0.4em] px-6 py-3 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-all">
                        SELECT
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
