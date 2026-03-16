import Image from 'next/image';

export function ProductStory() {
  return (
    <section id="product" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-video lg:aspect-square group overflow-hidden rounded-2xl">
            <Image
              src="https://picsum.photos/seed/churro1/800/800"
              alt="Handcrafted Churros"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              data-ai-hint="fresh churros"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-headline text-accent text-lg font-bold tracking-widest uppercase">The Legend</h2>
              <h3 className="font-headline text-5xl md:text-6xl font-black text-white leading-tight uppercase">
                A Royal Legacy of Sweetness
              </h3>
            </div>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              King Churros serves fresh handmade churros inspired by street markets and royal dessert traditions. Every stick is a masterpiece of texture—a perfectly crisp exterior giving way to a light, airy center.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <p className="text-primary font-headline text-4xl font-black">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">Handmade Daily</p>
              </div>
              <div className="space-y-2">
                <p className="text-primary font-headline text-4xl font-black">24H</p>
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">Signature Dough</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
