
import React from 'react';
import { StarIcon } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael R.",
      role: "Health Coach",
      avatar: "M",
      content: "God-Pill has completely transformed how I shop for my clients. I can instantly verify whether products meet my strict health standards. It's saved me countless hours of research.",
      rating: 5
    },
    {
      name: "Sarah L.",
      role: "Mother of 3",
      avatar: "S",
      content: "As a mom with children who have skin sensitivities, this app is a game-changer. I discovered that many 'hypoallergenic' products we were using actually contained irritants!",
      rating: 5
    },
    {
      name: "James T.",
      role: "Fitness Enthusiast",
      avatar: "J",
      content: "I was shocked to find out how many supplements I was taking contained artificial fillers. God-Pill helped me clean up my supplement stack and I've felt much better since.",
      rating: 4
    },
    {
      name: "Elena K.",
      role: "Wellness Blogger",
      avatar: "E",
      content: "The detailed breakdowns and alternative suggestions are incredible. I've featured God-Pill in several blog posts because my audience deserves to know what's in their products.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <StarIcon 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 md:py-32 bg-secondary/40">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Real Stories from Real Users</h2>
          <p className="section-subtitle">
            See how God-Pill™ is helping people make healthier choices every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 flex flex-col h-full">
              {/* Avatar and rating */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              {/* Testimonial content */}
              <blockquote className="text-sm flex-grow">
                <p className="leading-relaxed">"{testimonial.content}"</p>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">Trusted by health professionals and conscious consumers</p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-primary/10"></div>
              <span className="ml-2 font-medium">HealthTech Awards</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-primary/10"></div>
              <span className="ml-2 font-medium">Clean Beauty Verified</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-primary/10"></div>
              <span className="ml-2 font-medium">Wellness Council</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-primary/10"></div>
              <span className="ml-2 font-medium">4.9 App Store Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
