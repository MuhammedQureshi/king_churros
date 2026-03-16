
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const MENU_DATA = [
  {
    category: "Churros",
    items: [
      {
        id: "churro_filled",
        title: "Churros Filled (4pcs)",
        description: "Delicious churros filled with your choice of sweet, creamy goodness."
      },
      {
        id: "churro_box",
        title: "Churros Box (7 Sticks)",
        description: "A delightful box of classic churros, perfect for an individual treat or sharing."
      },
      {
        id: "churro_family",
        title: "Family Box (24 Sticks)",
        description: "A generous box containing 24 churros sticks, ideal for family gatherings or parties. Comes with 2 portions of Nutella dip and 2 portions of the Dulce De Leche dip."
      },
      {
        id: "churro_decorated",
        title: "Decorated Churros (1 Churro)",
        description: "Delicious churros enhanced with special decorations or extra toppings."
      }
    ]
  },
  {
    category: "Traditional Pastries",
    items: [
      {
        id: "brazilian_combo",
        title: "King Combo",
        description: "Traditional Brazilian pastries, typically filled with shredded chicken and pastel you can choose Beef, chicken or cheese. Includes: 2 mini Coxinhas’s, churros, pastel, Guaraná, and 2 mini Quibes."
      },
      {
        id: "about_churro",
        title: "Esfirras",
        description: "Tasty open-faced pastries with savoury filling of your choice."
      },
      {
        id: "pastel_brazil",
        title: "Pastel",
        description: "A golden, crispy deep-fried pastry — one of Brazil’s most iconic street foods. Light, crunchy, and packed with flavour. Available fillings: Cheese, Beef, or Chicken."
      },
      {
        id: "coxinha_large",
        title: "Coxinha - 1 x Large",
        description: "A popular Brazilian snack, featuring shredded chicken encased in a savory dough, shaped like a teardrop, and deep-fried to a golden crisp."
      },
      {
        id: "brazilian_combo",
        title: "Coxinhas’s - 7 Small Pieces",
        description: "Bite-sized popular Brazilian snacks, featuring shredded chicken encased in a savory dough, deep-fried to perfection."
      },
      {
        id: "about_churro",
        title: "Quibes (6pcs)",
        description: "Six mini traditional Brazilian pastries, typically filled with beef. (Subject to availability)."
      }
    ]
  },
  {
    category: "Drinks",
    items: [
      {
        id: "drinks_guarana",
        title: "Coca-Cola Original Taste 330ml",
        description: "Sparkling Soft Drink with Plant Extracts."
      },
      {
        id: "drinks_guarana",
        title: "Fanta Orange 330ml Can",
        description: "Sparkling Orange Fruit Drink with Sugar and Sweeteners."
      },
      {
        id: "drinks_guarana",
        title: "Guaraná 330ml",
        description: "A refreshing and popular Brazilian soft drink. Sweet and slightly fruity with a hint of apple and berry."
      },
      {
        id: "drinks_guarana",
        title: "Sprite 330ml",
        description: "Sparkling Lemon-Lime Flavour Low Calorie Soft Drink."
      },
      {
        id: "drinks_guarana",
        title: "San Pellegrino Lemon and Mint 330ml",
        description: "Sparkling natural mineral water with the invigorating taste of sun-ripened lemon and aromatic mint."
      },
      {
        id: "drinks_guarana",
        title: "Still Water Pure 330ml",
        description: "Uncarbonated drinking water."
      },
      {
        id: "drinks_guarana",
        title: "Sparkling Water 330ml",
        description: "Crisp, refreshing carbonated water."
      }
    ]
  }
];

export default function MenuPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      <header className="pt-32 md:pt-48 pb-12 md:pb-20 border-b border-white/5 bg-card/10">
        <div className="container mx-auto px-6 text-center">
          <Link href="/" className="text-primary text-[9px] font-black uppercase tracking-[0.4em] mb-6 md:mb-8 inline-block hover:text-white transition-colors">
            ← Back to Kingdom
          </Link>
          <h1 className="font-headline text-5xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-4">
            The Royal <br className="hidden md:block" /><span className="text-primary">Menu</span>
          </h1>
          <p className="font-body text-sm md:text-xl text-muted-foreground uppercase tracking-[0.2em] md:tracking-[0.3em] max-w-2xl mx-auto">
            A curation of Brixton's finest artisan treats and Brazilian treasures.
          </p>
        </div>
      </header>

      {MENU_DATA.map((section, idx) => (
        <section key={idx} className="py-16 md:py-24 border-b border-white/5 last:border-0">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-10 md:mb-16">
              <h2 className="font-headline text-3xl md:text-7xl font-black text-white uppercase tracking-tighter flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                {section.category}
                <span className="h-px flex-grow bg-white/10 hidden md:block" />
                <span className="text-[10px] font-bold text-primary tracking-[0.4em]">{section.items.length} ITEMS</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {section.items.map((item, i) => {
                const imgData = PlaceHolderImages.find(img => img.id === item.id);
                return (
                  <div key={i} className="group space-y-4 md:space-y-6">
                    <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-white/5">
                      <Image
                        src={imgData?.imageUrl || 'https://placehold.co/800x600'}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100"
                        data-ai-hint={imgData?.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <h3 className="font-headline text-xl md:text-2xl font-black text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 md:py-32 bg-primary/5 text-center border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="font-headline text-2xl md:text-4xl font-black text-white uppercase tracking-tight mb-8">
            Order for Delivery or Collection
          </h2>
          <button className="rounded-full px-10 py-5 md:px-12 md:py-6 bg-primary text-black hover:bg-white transition-all font-black tracking-[0.2em] uppercase text-sm md:text-base shadow-2xl">
            Place Your Order Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
