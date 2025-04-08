
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Eyecatch tag */}
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 mb-8 text-sm font-medium animate-fade-in">
            <span className="bg-primary h-2 w-2 rounded-full mr-2"></span>
            AI-powered health technology
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 max-w-4xl animate-slide-up">
            Scan Smarter.
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent block">
              Live Healthier.
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            AI-powered ingredient breakdowns for what you eat, drink, and use daily.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="rounded-full px-8">
              Try Scanner
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 md:mt-20 w-full max-w-3xl animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold mb-1">1M+</p>
              <p className="text-sm text-muted-foreground">Products Scanned</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold mb-1">10K+</p>
              <p className="text-sm text-muted-foreground">Toxic Ingredients</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <p className="text-3xl md:text-4xl font-bold mb-1">99.8%</p>
              <p className="text-sm text-muted-foreground">Accuracy Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
