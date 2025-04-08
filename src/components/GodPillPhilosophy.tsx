
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GodPillPhilosophy = () => {
  const products = [
    {
      name: "MoreTestosterone™",
      description: "Natural hormone optimization formula designed to support healthy testosterone levels through clean ingredients.",
      features: ["Plant-based compounds", "No synthetic boosters", "Clinically tested ingredients"],
      color: "from-primary to-health-blue",
    },
    {
      name: "MoreHGH™",
      description: "Advanced growth hormone support supplement using cutting-edge nutrient technology without harmful additives.",
      features: ["Amino acid complex", "Sleep cycle support", "Recovery optimization"],
      color: "from-health-green to-accent",
    }
  ];

  return (
    <section id="philosophy" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-background -z-10"></div>
      
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
            Our Vision
          </div>
          <h2 className="section-title">The God-Pill™ Philosophy</h2>
          <p className="section-subtitle max-w-3xl">
            We believe in creating a world where consumers have complete transparency about what they put in and on their bodies.
          </p>
        </div>

        {/* Philosophy content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Beyond Scanning: A Health Revolution</h3>
            <p className="text-muted-foreground">
              God-Pill™ isn't just a scanning app—it's a movement toward conscious consumption. 
              Our mission is to empower you with knowledge that leads to healthier choices and 
              ultimately, a healthier life without toxic exposure.
            </p>
            <p className="text-muted-foreground">
              We're challenging the status quo by making it impossible for manufacturers to hide 
              harmful ingredients behind fancy marketing. Our AI-driven platform puts the power 
              of information directly in your hands.
            </p>

            <div className="pt-4">
              <Button className="rounded-full group">
                Join Our Mission
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="relative h-60 md:h-80">
            <div className="absolute inset-0">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path fill="url(#grad1)" d="M45.7,-58.4C59.4,-49.8,70.8,-36.6,75.1,-21.5C79.3,-6.3,76.5,10.8,69.1,25.2C61.8,39.7,50,51.5,36.4,59.5C22.8,67.5,7.4,71.7,-8.8,71.8C-24.9,71.9,-49.8,67.8,-63.5,54.5C-77.2,41.2,-79.8,18.6,-77.4,-2.3C-74.9,-23.3,-67.6,-42.6,-54.3,-51.4C-41.1,-60.2,-22,-58.5,-4.1,-54.2C13.9,-49.8,31.9,-42.9,45.7,-58.4Z" transform="translate(100 100)" className="animate-float" />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-background flex items-center justify-center shadow-glow">
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Purity
              </span>
            </div>
          </div>
        </div>

        {/* Product cards */}
        <h3 className="text-2xl font-bold mb-8 text-center">Our Premium Health Products</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="glass-card overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${product.color}`}></div>
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2">{product.name}</h4>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GodPillPhilosophy;
