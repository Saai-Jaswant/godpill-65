
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Success!",
        description: "You've been signed up for our newsletter.",
        duration: 5000,
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-primary/5 -z-10"></div>
      
      <div className="container">
        <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 shadow-soft">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated on Toxic-Free Living</h2>
            <p className="text-muted-foreground">
              Join our community to receive the latest insights on harmful ingredients, 
              new product alerts, and exclusive health tips.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="h-12 px-8"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Weekly health insights</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>New product alerts</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Exclusive early access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
