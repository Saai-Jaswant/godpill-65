
import React from 'react';
import { Button } from "@/components/ui/button";

const WhyItMatters = () => {
  const toxicIngredients = [
    {
      name: "Phthalates",
      risks: "Endocrine disruptors linked to reproductive issues, early puberty, and reduced fertility.",
      commonIn: "Fragranced products, plastics, cosmetics"
    },
    {
      name: "Parabens",
      risks: "Potential endocrine disruptors that may affect hormone function and have been found in breast cancer tissues.",
      commonIn: "Cosmetics, skincare, hair products"
    },
    {
      name: "Sodium Lauryl Sulfate (SLS)",
      risks: "Skin irritant that can strip natural oils and potentially cause long-term skin sensitivity.",
      commonIn: "Shampoo, body wash, toothpaste"
    },
    {
      name: "Synthetic Fragrance",
      risks: "Unlisted chemical mixtures that can trigger allergies, migraines, and respiratory issues.",
      commonIn: "Perfumes, cleaning products, air fresheners"
    }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Why It Matters</h2>
          <p className="section-subtitle">
            Many everyday products contain ingredients that pose significant health risks. Knowledge is your first line of defense.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left column - Infographic */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Central circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-avoid/10 border border-avoid/20 flex flex-col items-center justify-center p-4 z-10">
                  <span className="text-sm font-bold text-avoid mb-1">75%</span>
                  <span className="text-xs text-center text-muted-foreground leading-tight">
                    of personal care products contain potentially harmful ingredients
                  </span>
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute top-0 left-1/4 transform -translate-x-1/2">
                <div className="w-28 h-28 rounded-full bg-primary/10 border border-primary/20 flex flex-col items-center justify-center p-3">
                  <span className="text-xs font-bold text-primary mb-1">10,000+</span>
                  <span className="text-[10px] text-center text-muted-foreground leading-tight">
                    chemicals used in consumer products
                  </span>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2">
                <div className="w-28 h-28 rounded-full bg-caution/10 border border-caution/20 flex flex-col items-center justify-center p-3">
                  <span className="text-xs font-bold text-caution mb-1">60%</span>
                  <span className="text-[10px] text-center text-muted-foreground leading-tight">
                    of what we put on our skin is absorbed into the bloodstream
                  </span>
                </div>
              </div>
              
              <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2">
                <div className="w-28 h-28 rounded-full bg-health-blue/10 border border-health-blue/20 flex flex-col items-center justify-center p-3">
                  <span className="text-xs font-bold text-health-blue mb-1">30%</span>
                  <span className="text-[10px] text-center text-muted-foreground leading-tight">
                    increase in allergies linked to chemical exposure
                  </span>
                </div>
              </div>
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="50%" y1="50%" x2="25%" y2="15%" stroke="currentColor" strokeOpacity="0.2" />
                <line x1="50%" y1="50%" x2="25%" y2="85%" stroke="currentColor" strokeOpacity="0.2" />
                <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="currentColor" strokeOpacity="0.2" />
              </svg>
            </div>
          </div>

          {/* Right column - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Hidden Dangers in Everyday Products</h3>
              <p className="text-muted-foreground">
                Most people are unaware of the potentially harmful chemicals hiding in their everyday products. 
                Many ingredients linked to serious health conditions have been normalized in manufacturing while 
                consumers are left in the dark about their long-term effects.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">The Cumulative Effect</h3>
              <p className="text-muted-foreground">
                The real danger comes from daily exposure to multiple products containing harmful ingredients. 
                This constant exposure creates a "toxic body burden" that can lead to chronic health conditions, 
                hormonal disruption, and even cellular damage.
              </p>
            </div>
            
            <div className="pt-4">
              <Button>Learn More About Health Impacts</Button>
            </div>
          </div>
        </div>

        {/* Common toxic ingredients */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Common Toxic Ingredients to Watch For</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toxicIngredients.map((ingredient, index) => (
              <div key={index} className="glass-card p-5">
                <h4 className="font-bold text-avoid mb-2">{ingredient.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{ingredient.risks}</p>
                <div className="text-xs font-medium">
                  <span className="text-muted-foreground">Commonly found in:</span>{' '}
                  <span>{ingredient.commonIn}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
