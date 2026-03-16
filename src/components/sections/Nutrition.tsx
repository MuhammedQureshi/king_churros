export function Nutrition() {
  return (
    <section id="nutrition" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <h2 className="font-headline text-accent text-lg font-bold tracking-widest uppercase">Transparency</h2>
          <h3 className="font-headline text-5xl font-black text-white uppercase leading-tight">Crafted with Integrity</h3>
          <p className="text-muted-foreground text-lg">We believe you should know exactly what's in your treat. Our churros are made with real ingredients, minimal processing, and maximal love.</p>
          
          <ul className="space-y-4 text-white/80 font-bold uppercase tracking-widest text-sm">
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span>Trans-Fat Free</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span>Zero High Fructose Corn Syrup</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span>Vegan Base Dough Available</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-center order-1 lg:order-2">
          <div className="nutrition-label animate-fade-in shadow-2xl">
            <div className="nutrition-title uppercase">Nutrition Facts</div>
            <div className="text-sm font-bold mt-1">4 servings per container</div>
            <div className="flex justify-between items-end border-b-2 border-black pb-1">
              <span className="font-bold text-lg">Serving size</span>
              <span className="font-bold text-lg">3 churros (85g)</span>
            </div>
            
            <div className="pt-2">
              <div className="flex justify-between items-baseline">
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase">Amount per serving</span>
                  <span className="text-3xl font-black">Calories</span>
                </div>
                <span className="text-4xl font-black">280</span>
              </div>
            </div>
            
            <div className="nutrition-divider-thick" />
            
            <div className="flex justify-end text-xs font-bold border-b border-black pb-1">% Daily Value*</div>
            <div className="flex justify-between border-b border-black py-1">
              <span><span className="font-bold">Total Fat</span> 14g</span>
              <span className="font-bold">18%</span>
            </div>
            <div className="flex justify-between border-b border-black py-1 pl-4">
              <span>Saturated Fat 4g</span>
              <span className="font-bold">20%</span>
            </div>
            <div className="flex justify-between border-b border-black py-1">
              <span><span className="font-bold">Cholesterol</span> 0mg</span>
              <span className="font-bold">0%</span>
            </div>
            <div className="flex justify-between border-b border-black py-1">
              <span><span className="font-bold">Sodium</span> 210mg</span>
              <span className="font-bold">9%</span>
            </div>
            <div className="flex justify-between border-b border-black py-1">
              <span><span className="font-bold">Total Carbohydrate</span> 36g</span>
              <span className="font-bold">13%</span>
            </div>
            <div className="flex justify-between border-b border-black py-1 pl-4">
              <span>Total Sugars 12g</span>
              <span className="font-bold"></span>
            </div>
            <div className="flex justify-between border-b border-black py-1 pl-8">
              <span>Includes 8g Added Sugars</span>
              <span className="font-bold">16%</span>
            </div>
            <div className="flex justify-between border-b-thick border-black py-1">
              <span><span className="font-bold">Protein</span> 3g</span>
              <span className="font-bold"></span>
            </div>
            
            <div className="text-[10px] mt-2 leading-tight">
              *The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
