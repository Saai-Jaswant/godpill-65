
import React from 'react';
import { Barcode, Search, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Barcode className="h-10 w-10" />,
      title: "Scan",
      description: "Point your camera at any product's barcode or QR code for instant scanning.",
      color: "primary",
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: "AI Analysis",
      description: "Our advanced AI identifies every ingredient and evaluates potential health impacts.",
      color: "health-blue",
    },
    {
      icon: <CheckCircle className="h-10 w-10" />,
      title: "Health Verdict",
      description: "Receive clear safety ratings and healthier alternative suggestions instantly.",
      color: "health-green",
    },
  ];

  return (
    <section id="how-it-works" className="bg-secondary/40 py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            God-Pill™ makes understanding product safety effortless in just three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Step number */}
              <div className="relative mb-6">
                <div className={`rounded-full w-20 h-20 bg-${step.color}/10 flex items-center justify-center text-${step.color}`}>
                  {step.icon}
                </div>
                <span className="absolute top-0 right-0 bg-foreground text-background w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
              </div>
              
              {/* Step content */}
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute ml-32 mt-10">
                  <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10H100M100 10L90 5M100 10L90 15" stroke="currentColor" strokeOpacity="0.3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sample result preview */}
        <div className="mt-16 md:mt-24 max-w-2xl mx-auto p-6 glass-card">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Barcode className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg">Scan Result Example</h4>
                  <p className="text-sm text-muted-foreground">Cosmic Glow Face Cream</p>
                </div>
                <span className="rating-badge rating-badge-avoid">Avoid - 3/10</span>
              </div>
              
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium">Key Findings:</p>
                <ul className="text-sm space-y-1.5">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-avoid"></span>
                    <span>Contains Parabens - Endocrine disruptors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-avoid"></span>
                    <span>Phthalates detected - Potential reproductive harm</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-caution"></span>
                    <span>Synthetic fragrance - Possible allergen</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm font-medium">AI Suggestion:</p>
                <p className="text-sm text-muted-foreground">Try "NaturePure Moisturizer" - 9/10 safety rating with similar benefits and no toxic ingredients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
