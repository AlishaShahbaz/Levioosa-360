import React from 'react';

export const LiquidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-luxury-black">
      {/* Liquid Blobs */}
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-accent-purple/60 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-[-150px] left-[-50px] w-[500px] h-[500px] bg-accent-cyan/60 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      
      {/* SVG Filter for Gooey Effect */}
      <svg className="hidden">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>
      
      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} 
      />
    </div>
  );
};
