
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ProductStory } from '@/components/sections/ProductStory';
import { Menu } from '@/components/sections/Menu';
import { Ingredients } from '@/components/sections/Ingredients';
import { Reviews } from '@/components/sections/Reviews';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';

export default function Home() {
  return (
    <main className="relative">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <ProductStory />
      <Menu />
      <Ingredients />
      <Reviews />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
