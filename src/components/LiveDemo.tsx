
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Scanner from './Scanner';
import { useToast } from "@/hooks/use-toast";

const LiveDemo = () => {
  const [barcodeResult, setBarcodeResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleBarcodeDetected = (barcode: string) => {
    console.log("LiveDemo detected barcode:", barcode);
    setBarcodeResult(barcode);
    toast({
      title: "Barcode Detected",
      description: `Scanned barcode: ${barcode}`,
    });
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">See Project X in Action</h2>
          <p className="section-subtitle">
            Instantly discover what's really in your everyday products with our AI scanning technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Scanner preview */}
          <div className="flex justify-center">
            <Scanner onBarcodeDetected={handleBarcodeDetected} />
            {barcodeResult && (
              <div className="absolute bottom-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg">
                <p className="font-semibold">Scanned: {barcodeResult}</p>
              </div>
            )}
          </div>

          {/* Scanner description */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                Live Preview
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Effortless Product Scanning</h3>
              <p className="text-muted-foreground">
                Simply scan any product barcode or QR code to get instant insights about ingredients, 
                potential health risks, and AI-recommended alternatives.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-1 mt-1">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Instant Health Analysis</h4>
                  <p className="text-sm text-muted-foreground">Get immediate feedback on harmful ingredients</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-1 mt-1">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Safer Alternative Suggestions</h4>
                  <p className="text-sm text-muted-foreground">AI recommends healthier product options</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-1 mt-1">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Comprehensive Ingredient Breakdown</h4>
                  <p className="text-sm text-muted-foreground">Clear explanations of what's in your products</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button size="lg" className="rounded-full">Try Scanner Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
