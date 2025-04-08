
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveDemo from "@/components/LiveDemo";
import HowItWorks from "@/components/HowItWorks";
import DatabasePower from "@/components/DatabasePower";
import ProductRatings from "@/components/ProductRatings";
import WhyItMatters from "@/components/WhyItMatters";
import GodPillPhilosophy from "@/components/GodPillPhilosophy";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  // Implement smooth scrolling for hash links
  useEffect(() => {
    const handleHashLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href')?.substring(1);
        if (!id) return;
        
        const element = document.getElementById(id);
        if (element) {
          event.preventDefault();
          element.scrollIntoView({
            behavior: 'smooth'
          });

          // Update URL without page jump
          window.history.pushState(null, '', `#${id}`);
        }
      }
    };

    document.addEventListener('click', handleHashLinkClick);
    return () => document.removeEventListener('click', handleHashLinkClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <LiveDemo />
        <HowItWorks />
        <DatabasePower />
        <ProductRatings />
        <WhyItMatters />
        <GodPillPhilosophy />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
