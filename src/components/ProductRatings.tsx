
import React from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const ProductRatings = () => {
  // Sample product ratings to showcase
  const products = [
    {
      name: "Natural Balance Moisturizer",
      category: "Skincare",
      rating: 9.5,
      status: "safe",
      ingredients: [
        { name: "Aloe Vera Extract", status: "safe" },
        { name: "Glycerin", status: "safe" },
        { name: "Jojoba Oil", status: "safe" },
        { name: "Vitamin E", status: "safe" },
      ]
    },
    {
      name: "EverClean Shampoo",
      category: "Hair Care",
      rating: 5.2,
      status: "caution",
      ingredients: [
        { name: "Sodium Lauryl Sulfate", status: "caution" },
        { name: "Cocamidopropyl Betaine", status: "safe" },
        { name: "Fragrance (Synthetic)", status: "caution" },
        { name: "Methylisothiazolinone", status: "caution" },
      ]
    },
    {
      name: "UltraGlow Foundation",
      category: "Makeup",
      rating: 2.8,
      status: "avoid",
      ingredients: [
        { name: "Talc", status: "caution" },
        { name: "Parabens", status: "avoid" },
        { name: "Phthalates", status: "avoid" },
        { name: "Aluminum Powder", status: "caution" },
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'safe':
        return <CheckCircle className="w-5 h-5 text-safe" />;
      case 'caution':
        return <AlertTriangle className="w-5 h-5 text-caution" />;
      case 'avoid':
        return <XCircle className="w-5 h-5 text-avoid" />;
      default:
        return null;
    }
  };

  const getRatingColor = (rating) => {
    if (rating >= 7) return 'text-safe';
    if (rating >= 4) return 'text-caution';
    return 'text-avoid';
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'safe':
        return 'Safe to Use';
      case 'caution':
        return 'Use with Caution';
      case 'avoid':
        return 'Avoid';
      default:
        return '';
    }
  };

  return (
    <section id="ratings" className="py-20 md:py-32 bg-secondary/40">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Product Health Ratings</h2>
          <p className="section-subtitle">
            The God-Pill™ AI assigns health and safety ratings to products based on their ingredient profiles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="glass-card overflow-hidden">
              {/* Rating header */}
              <div className={`p-4 flex justify-between items-center border-b ${product.status === 'safe' ? 'bg-safe/5' : product.status === 'caution' ? 'bg-caution/5' : 'bg-avoid/5'}`}>
                <div>
                  <h3 className="font-bold">{product.name}</h3>
                  <p className="text-xs text-muted-foreground">{product.category}</p>
                </div>
                <div className={`text-xl font-bold ${getRatingColor(product.rating)}`}>
                  {product.rating}/10
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="p-4 flex items-center gap-2 border-b">
                {getStatusIcon(product.status)}
                <span className={`text-sm font-medium ${product.status === 'safe' ? 'text-safe' : product.status === 'caution' ? 'text-caution' : 'text-avoid'}`}>
                  {getStatusText(product.status)}
                </span>
              </div>
              
              {/* Ingredients */}
              <div className="p-4">
                <h4 className="text-sm font-medium mb-3">Key Ingredients:</h4>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, i) => (
                    <li key={i} className="flex items-center justify-between text-sm">
                      <span>{ingredient.name}</span>
                      <span className={`w-2 h-2 rounded-full ${ingredient.status === 'safe' ? 'bg-safe' : ingredient.status === 'caution' ? 'bg-caution' : 'bg-avoid'}`}></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Rating scale explanation */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">Understanding Our Rating Scale</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-safe/10 border border-safe/20">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-safe" />
                <h4 className="font-medium text-safe">Safe (7-10)</h4>
              </div>
              <p className="text-sm text-muted-foreground">Products with safe, non-toxic ingredients that pose minimal to no health risks.</p>
            </div>
            
            <div className="p-4 rounded-lg bg-caution/10 border border-caution/20">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-caution" />
                <h4 className="font-medium text-caution">Caution (4-6)</h4>
              </div>
              <p className="text-sm text-muted-foreground">Products containing some potentially concerning ingredients that may cause issues for certain individuals.</p>
            </div>
            
            <div className="p-4 rounded-lg bg-avoid/10 border border-avoid/20">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-5 h-5 text-avoid" />
                <h4 className="font-medium text-avoid">Avoid (0-3)</h4>
              </div>
              <p className="text-sm text-muted-foreground">Products containing known harmful ingredients that may pose significant health risks with continued use.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRatings;
