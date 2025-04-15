import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search, Menu, X, Plus } from "lucide-react";
import { Link } from 'react-router-dom';

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
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">God-Pill™</span>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Project X</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How It Works</Link>
          <Link to="#database" className="text-sm font-medium hover:text-primary transition-colors">Database</Link>
          <Link to="#ratings" className="text-sm font-medium hover:text-primary transition-colors">Ratings</Link>
          <Link to="#philosophy" className="text-sm font-medium hover:text-primary transition-colors">Philosophy</Link>
          <Button size="sm" variant="outline" className="flex items-center gap-2">
            <Search className="h-4 w-4" /> Search
          </Button>
          <Link to="/add-product">
            <Button size="sm" className="flex items-center gap-2">
              <Plus className="h-4 w-4" /> Add Product
            </Button>
          </Link>
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
            <Link to="#how-it-works" className="px-2 py-2 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
            <Link to="#database" className="px-2 py-2 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Database</Link>
            <Link to="#ratings" className="px-2 py-2 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Ratings</Link>
            <Link to="#philosophy" className="px-2 py-2 text-sm font-medium hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Philosophy</Link>
            <Link to="/add-product" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <Button size="sm" className="w-full flex items-center gap-2">
                <Plus className="h-4 w-4" /> Add Product
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
