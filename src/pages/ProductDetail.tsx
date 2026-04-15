import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, ShoppingBag, ArrowLeft, Share2, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { PRODUCTS } from '../types';
import { ThreeProductRotator } from '../components/ThreeProductRotator';
import { useApp } from '../context/AppContext';
import { cn } from '../lib/utils';
import { MagneticButton } from '../components/MagneticButton';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, toggleWishlist, isInWishlist } = useApp();
  const product = PRODUCTS.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-4xl font-display font-bold">Product not found</h1>
        <Link to="/shop" className="text-neon-green mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const activeWishlist = isInWishlist(product.id);

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-4 mb-8">
          <Link to="/shop" className="flex items-center space-x-2 text-[10px] font-bold tracking-widest text-white/40 hover:text-white transition-colors">
            <ArrowLeft size={14} />
            <span>BACK TO COLLECTIONS</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: 3D Rotator */}
          <div className="glass-panel rounded-[3rem] overflow-hidden sticky top-32">
            <ThreeProductRotator />
          </div>

          {/* Right: Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.4em] text-neon-purple font-bold">{product.category}</span>
                <button 
                  onClick={() => toggleWishlist(product)}
                  className={cn(
                    "p-3 rounded-full border transition-colors",
                    activeWishlist ? "bg-neon-purple border-neon-purple text-white" : "bg-white/5 border-white/10 text-white hover:bg-white/20"
                  )}
                >
                  <Heart size={20} fill={activeWishlist ? "currentColor" : "none"} />
                </button>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tighter leading-none">{product.name}</h1>
              <p className="text-3xl font-display font-light text-white/80">${product.price}.00</p>
            </div>

            <p className="text-lg text-white/60 font-light leading-relaxed">
              {product.description}
            </p>

            {/* Selectors */}
            <div className="space-y-8">
              {/* Colors */}
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">Material Status</span>
                <div className="flex space-x-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "w-10 h-10 rounded-full border-2 transition-all p-1",
                        selectedColor === color ? "border-accent-cyan scale-110" : "border-transparent hover:border-white/20"
                      )}
                    >
                      <div className="w-full h-full rounded-full" style={{ backgroundColor: color }} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">Select Dimension</span>
                  <button className="text-[10px] uppercase tracking-widest font-bold text-accent-cyan hover:underline">Size Guide</button>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "py-3 rounded-xl text-xs font-bold transition-all border",
                        selectedSize === size 
                          ? "bg-white text-black border-white" 
                          : "bg-white/5 border-luxury-border text-white/60 hover:border-white/30"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <MagneticButton 
                onClick={() => addToCart(product)}
                className="flex-1 cta-gradient py-5 rounded-xl flex items-center justify-center space-x-3"
              >
                <ShoppingBag size={18} />
                <span>INITIATE PURCHASE</span>
              </MagneticButton>
              <button className="p-5 glass-panel rounded-xl hover:border-white/30 transition-all">
                <Share2 size={20} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center space-x-3 text-white/40">
                <Truck size={18} className="text-neon-blue" />
                <span className="text-[10px] font-bold tracking-widest">FREE WORLDWIDE SHIPPING</span>
              </div>
              <div className="flex items-center space-x-3 text-white/40">
                <ShieldCheck size={18} className="text-neon-green" />
                <span className="text-[10px] font-bold tracking-widest">2 YEAR WARRANTY</span>
              </div>
              <div className="flex items-center space-x-3 text-white/40">
                <RotateCcw size={18} className="text-neon-purple" />
                <span className="text-[10px] font-bold tracking-widest">30 DAY RETURNS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
