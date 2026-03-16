
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ProductStory() {
  const imgData = PlaceHolderImages.find(img => img.id === 'about_churro');
  
  return (
    <section id="product" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square md:aspect-video lg:aspect-square group overflow-hidden rounded-3xl md:rounded-[4rem] shadow-2xl border border-white/5">
              <Image
                src='https://cvesqxpcirhvoxxddctl.supabase.co/storage/v1/object/public/images/about.png'
                alt="Our Heritage - King Churros"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                data-ai-hint={imgData?.imageHint || "fresh churros"}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent opacity-60" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-primary p-6 md:p-12 rounded-2xl md:rounded-[3rem] shadow-2xl">
              <p className="text-black font-headline text-2xl md:text-4xl font-black leading-none uppercase tracking-tighter">Est. 2023</p>
              <p className="text-black/60 font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] mt-1 md:mt-2">Brixton, London</p>
            </div>
          </div>
          
          <div className="space-y-8 md:space-y-12 order-1 lg:order-2">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-2 md:space-y-4 text-center lg:text-left">
                <h2 className="font-headline text-primary text-sm md:text-lg font-bold tracking-[0.5em] uppercase">Our Legacy</h2>
                <h3 className="font-headline text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[1] md:leading-[0.8] uppercase tracking-tighter">
                  Artisan Roots <br className="hidden md:block" /> Royal Flavor
                </h3>
              </div>
              <p className="font-body text-lg md:text-2xl text-muted-foreground leading-relaxed font-medium text-center lg:text-left">
                Born in the vibrant markets of Brixton, King Churros was founded on a simple mission: to elevate the humble street snack to a royal dessert experience.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-center lg:text-left">
                We combine traditional Spanish techniques with modern artisan ingredients. Every stick is hand-pressed and fried to order, ensuring that signature crunch and airy interior that has made us a local legend.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 md:gap-10 pt-6 md:pt-8 border-t border-white/10">
              <div className="space-y-2 text-center lg:text-left">
                <p className="text-primary font-headline text-4xl md:text-6xl font-black leading-none">100%</p>
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Freshly Made To Order</p>
              </div>
              <div className="space-y-2 text-center lg:text-left">
                <p className="text-primary font-headline text-4xl md:text-6xl font-black leading-none">0%</p>
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Artificial Flavors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
