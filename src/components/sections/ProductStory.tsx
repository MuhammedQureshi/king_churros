
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ProductStory() {
  const imgData = PlaceHolderImages.find(img => img.id === 'about_churro');
  
  return (
    <section id="product" className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-video lg:aspect-square group overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/5">
            <Image
              src={imgData?.imageUrl || "https://picsum.photos/seed/churro1/800/800"}
              alt="About Us - King Churros"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              data-ai-hint={imgData?.imageHint || "fresh churros"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-center bg-black/40 backdrop-blur-sm p-4 rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Est. Brixton</p>
            </div>
          </div>
          
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="font-headline text-primary text-lg font-bold tracking-[0.4em] uppercase">About Us</h2>
                <h3 className="font-headline text-5xl md:text-7xl font-black text-white leading-[0.9] uppercase tracking-tighter">
                  A Royal Legacy <br /> of Sweetness
                </h3>
              </div>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                In the heart of Brixton, King Churros serves fresh handmade churros inspired by artisan street markets and royal dessert traditions. 
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every stick is a masterpiece of texture—a perfectly crisp exterior giving way to a light, airy center. We use only premium ingredients to ensure every bite is worthy of the crown.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 pt-4">
              <div className="space-y-3 border-l-2 border-primary pl-6">
                <p className="text-primary font-headline text-5xl font-black leading-none">100%</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">Handmade Daily</p>
              </div>
              <div className="space-y-3 border-l-2 border-primary pl-6">
                <p className="text-primary font-headline text-5xl font-black leading-none">24H</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">Signature Dough</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
