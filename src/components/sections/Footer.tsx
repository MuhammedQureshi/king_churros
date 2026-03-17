
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const ORDER_URL = "https://www.just-eat.co.uk/restaurants-king-churros-nine-elms-sw9/menu?serviceType=collection&utm_source=google&utm_medium=organic&utm_campaign=foodorder";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black pt-32 pb-16 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <h2 className="font-headline text-4xl font-black text-white tracking-tight uppercase">
              King <span className="text-primary">Churros</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xs">
              Premium artisan churros served with royal flair in the heart of Brixton.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-primary hover:text-black transition-all hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-primary hover:text-black transition-all hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-primary hover:text-black transition-all hover:-translate-y-1">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-primary">Discover</h3>
            <ul className="space-y-5">
              <li><a href="#product" className="text-muted-foreground hover:text-white transition-colors text-sm font-bold uppercase tracking-[0.3em]">The Story</a></li>
              <li><a href="#menu" className="text-muted-foreground hover:text-white transition-colors text-sm font-bold uppercase tracking-[0.3em]">The Menu</a></li>
              <li><a href="#ingredients" className="text-muted-foreground hover:text-white transition-colors text-sm font-bold uppercase tracking-[0.3em]">The Quality</a></li>
              <li><a href="#reviews" className="text-muted-foreground hover:text-white transition-colors text-sm font-bold uppercase tracking-[0.3em]">Reviews</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-primary">Utility</h3>
            <ul className="space-y-5">
              <li><a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors text-sm font-bold uppercase tracking-[0.3em]">Order Online</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors text-sm font-bold uppercase tracking-[0.3em]">Catering</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors text-sm font-bold uppercase tracking-[0.3em]">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors text-sm font-bold uppercase tracking-[0.3em]">Terms</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-primary">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4 text-muted-foreground group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">hello@kingchurros.com</span>
              </li>
              <li className="flex items-center space-x-4 text-muted-foreground group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                  <Phone size={18} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">+1 (555) KING-000</span>
              </li>
              <li className="flex items-center space-x-4 text-muted-foreground group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                  <MapPin size={18} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">Brixton Market, SW9</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-center space-y-6 md:space-y-0">
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.5em] font-bold">
            &copy; {currentYear} King Churros. Crafted for Royalty.
          </p>
          <div className="flex gap-8 text-[10px] text-white/20 uppercase tracking-[0.5em]">
            <span>London</span>
            <span>Madrid</span>
            <span>Paris</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
