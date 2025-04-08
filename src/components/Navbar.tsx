
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for transparent to solid navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b" 
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <span className="font-bold text-xl">God-Pill™</span>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Project X</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How It Works</a>
          <a href="#database" className="text-sm font-medium hover:text-primary transition-colors">Database</a>
          <a href="#ratings" className="text-sm font-medium hover:text-primary transition-colors">Ratings</a>
          <a href="#philosophy" className="text-sm font-medium hover:text-primary transition-colors">Philosophy</a>
          <Button size="sm" variant="outline" className="flex items-center gap-2">
            <Search className="h-4 w-4" /> Search
          </Button>
          <Button size="sm">Try Scanner</Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container py-4 flex flex-col space-y-4">
            <a href="#how-it-works" className="px-2 py-2 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#database" className="px-2 py-2 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Database</a>
            <a href="#ratings" className="px-2 py-2 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Ratings</a>
            <a href="#philosophy" className="px-2 py-2 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Philosophy</a>
            <Button size="sm" variant="outline" className="flex items-center gap-2 w-full justify-center">
              <Search className="h-4 w-4" /> Search
            </Button>
            <Button size="sm" className="w-full">Try Scanner</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
