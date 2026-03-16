import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const REVIEWS = [
  {
    name: 'Julianna M.',
    role: 'Dessert Enthusiast',
    content: "Best churros I've ever had. Crispy outside, soft inside. The chocolate dip is divine!",
    rating: 5,
    avatar: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    name: 'Marcus T.',
    role: 'Food Blogger',
    content: "A truly premium experience. You can taste the quality in the cinnamon blend. Highly recommended.",
    rating: 5,
    avatar: 'https://picsum.photos/seed/user2/100/100'
  },
  {
    name: 'Sofia L.',
    role: 'Loyal Customer',
    content: "King Churros is my go-to for any celebration. They never disappoint. Fresh and hot every single time.",
    rating: 5,
    avatar: 'https://picsum.photos/seed/user3/100/100'
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-card relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-headline text-accent text-lg font-bold tracking-widest uppercase">The Verdict</h2>
          <h3 className="font-headline text-5xl font-black text-white uppercase">Words From the Court</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div key={i} className="bg-background p-10 rounded-3xl border border-white/5 flex flex-col space-y-6">
              <div className="flex space-x-1">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-lg italic text-white/90 leading-relaxed">"{review.content}"</p>
              <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={review.avatar} />
                  <AvatarFallback>{review.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-widest">{review.name}</h4>
                  <p className="text-muted-foreground text-xs uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
