
import React from 'react';

const DatabasePower = () => {
  const stats = [
    { value: "1M+", label: "Products in database" },
    { value: "10K+", label: "Known toxic ingredients" },
    { value: "24/7", label: "AI learning & updates" },
    { value: "99.8%", label: "Accuracy rate" },
  ];

  return (
    <section id="database" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              Database Power
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Backed by vast data & continuous AI learning
            </h2>
            
            <p className="text-muted-foreground">
              God-Pill™ leverages a massive product database and sophisticated machine learning to 
              provide reliable, up-to-date health information on virtually any consumer product. Our AI 
              system continuously learns from new data to improve accuracy and coverage.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 glass-card">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visualization of the database */}
          <div className="relative h-80 md:h-96">
            <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-3 opacity-70">
              {Array.from({ length: 25 }).map((_, i) => (
                <div 
                  key={i}
                  className="bg-muted/50 rounded-md animate-pulse-slow"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center animate-float">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="currentColor" strokeOpacity="0.2" />
              <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="currentColor" strokeOpacity="0.2" />
              <line x1="50%" y1="50%" x2="90%" y2="60%" stroke="currentColor" strokeOpacity="0.2" />
              <line x1="50%" y1="50%" x2="10%" y2="70%" stroke="currentColor" strokeOpacity="0.2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatabasePower;
