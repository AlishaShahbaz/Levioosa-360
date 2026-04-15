import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, X, ChevronDown } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../types';
import { cn } from '../lib/utils';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categories = ['All', 'Footwear', 'Outerwear', 'Apparel', 'Accessories'];
  const activeCategory = searchParams.get('cat') || 'All';

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const setCategory = (cat: string) => {
    if (cat === 'All') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-32 px-6 pb-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.4em] text-neon-blue font-bold">Discovery</span>
          <h1 className="text-5xl lg:text-7xl font-display font-bold">COLLECTIONS</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 glass-panel px-6 py-3 rounded-full text-xs font-bold tracking-widest hover:border-white/30 transition-all"
          >
            <Filter size={16} />
            <span>FILTERS</span>
          </button>
          <div className="relative group">
            <button className="flex items-center space-x-2 glass-panel px-6 py-3 rounded-full text-xs font-bold tracking-widest">
              <span>SORT: NEWEST</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={cn(
              "px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] transition-all border",
              activeCategory === cat 
                ? "bg-white text-black border-white" 
                : "bg-white/5 text-white/60 border-white/10 hover:border-white/30"
            )}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="py-32 text-center space-y-4">
          <p className="text-white/40 font-display text-2xl">No products found in this dimension.</p>
          <button 
            onClick={() => setCategory('All')}
            className="text-neon-green text-xs font-bold tracking-widest underline underline-offset-8"
          >
            RESET FILTERS
          </button>
        </div>
      )}
    </div>
  );
};
