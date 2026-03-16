import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What toppings do you offer?",
    a: "Our signature toppings include Ceylon Cinnamon Sugar, Crushed Pistachios, Freeze-dried Strawberries, and Toasted Almonds. We also offer seasonal specialties like Peppermint Crush."
  },
  {
    q: "Are your churros made fresh?",
    a: "Absolutely. We never pre-cook. Every single churro is fried to order and served piping hot to ensure the perfect crispy-soft balance."
  },
  {
    q: "Do you offer vegan options?",
    a: "Yes! Our base churro dough is naturally vegan. We also offer vegan chocolate dips and strawberry coulis so everyone can enjoy the royal experience."
  },
  {
    q: "Can I order for large events?",
    a: "We specialize in catering! From weddings to corporate galas, King Churros brings a touch of royal sweetness to any occasion. Contact us for details."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-primary text-lg font-bold tracking-widest uppercase">Inquiries</h2>
          <h3 className="font-headline text-5xl font-black text-white uppercase">Royal Queries</h3>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 bg-card rounded-2xl px-6">
              <AccordionTrigger className="font-headline text-xl text-white hover:no-underline py-6 uppercase tracking-tight text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground text-lg pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
