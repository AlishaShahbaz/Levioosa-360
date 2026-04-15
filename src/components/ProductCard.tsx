import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useApp();
  const activeWishlist = isInWishlist(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[3/4] overflow-hidden rounded-3xl glass-card relative">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Quick Actions */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="flex-1 cta-gradient py-2 rounded-full text-[10px] flex items-center justify-center space-x-2"
            >
              <Plus size={12} />
              <span>ADD TO CART</span>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist(product);
              }}
              className={cn(
                "p-2 rounded-full border transition-colors",
                activeWishlist ? "bg-neon-purple border-neon-purple text-white" : "bg-white/10 border-white/20 text-white hover:bg-white/20"
              )}
            >
              <Heart size={16} fill={activeWishlist ? "currentColor" : "none"} />
            </button>
          </div>
        </div>
      </Link>

      <div className="mt-4 space-y-1 px-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">{product.category}</span>
          <span className="text-sm font-display font-medium">${product.price}</span>
        </div>
        <h3 className="text-lg font-display font-bold tracking-tight truncate group-hover:text-neon-green transition-colors">
          {product.name}
        </h3>
      </div>
    </motion.div>
  );
};
