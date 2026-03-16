import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-black text-white tracking-tight uppercase">
              King <span className="text-primary">Churros</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Premium handcrafted churros inspired by heritage and served with cinematic flair.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-widest text-white">The Menu</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">Classic Sticks</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">Chocolate Dips</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">Toppings Bar</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">Drinks</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-widest text-white">Utility</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest">Terms</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-widest text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={16} />
                <span className="text-sm">hello@kingchurros.com</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={16} />
                <span className="text-sm">+1 (555) 000-KING</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <MapPin size={16} />
                <span className="text-sm">Royal Plaza, Suite 42</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0">
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
            &copy; {currentYear} King Churros. All rights reserved.
          </p>
          <p className="text-[10px] text-white/20 uppercase tracking-[0.5em]">
            Crafted for Royalty
          </p>
        </div>
      </div>
    </footer>
  );
}
