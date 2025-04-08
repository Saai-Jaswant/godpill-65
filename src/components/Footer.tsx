
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center mb-6">
              <span className="font-bold text-xl">God-Pill™</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full ml-2">Project X</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Making health transparent through AI-powered ingredient analysis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#database" className="text-muted-foreground hover:text-primary transition-colors">Our Database</a>
              </li>
              <li>
                <a href="#ratings" className="text-muted-foreground hover:text-primary transition-colors">Product Ratings</a>
              </li>
              <li>
                <a href="#philosophy" className="text-muted-foreground hover:text-primary transition-colors">Our Philosophy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Download App</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-6">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Ingredient Dictionary</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Health Research</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">For Health Professionals</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Press & Media</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <a href="mailto:info@godpill.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@godpill.com
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support Center</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Submit Feedback</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Report an Issue</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t mt-10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} God-Pill™. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
