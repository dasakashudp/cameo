import React, { useEffect, useState } from 'react';

// High-quality luxury 4K aesthetics images
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop", // Moody landscape
  "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2000&auto=format&fit=crop", // Texture/Fabric
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop", // Abstract Dark
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"  // Ocean/Calm
];

export const HeroPanel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 6000); // Change every 6 seconds for a slower, more elegant pace

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full relative">
      {/* Slideshow Background Images */}
      <div className="hero-bg-container">
        {HERO_IMAGES.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={`Luxury Background ${index + 1}`}
            className={`hero-bg-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      
      {/* Overlay Gradient */}
      <div className="hero-overlay" />
      
      {/* Content Container */}
      <div className="hero-content">
        <h1 className="hero-title">
          Redefining <span className="text-gold">elegance</span> <br />
          for the modern era.
        </h1>
        
        <div className="hero-divider-container">
          {/* Gold vertical line accent */}
          <div className="hero-divider"></div>
          
          <p className="hero-description">
            Curated collections from the world's most exclusive designers. 
            Join Cameo today to experience the future of luxury.
          </p>
        </div>
      </div>

      {/* Subtle Grain Texture (SVG Pattern) */}
      <div className="texture-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
};