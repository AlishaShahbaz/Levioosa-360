import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ProductCard } from '../components/ProductCard';
import { MagneticButton } from '../components/MagneticButton';

export const Wishlist: React.FC = () => {
  const { wishlist } = useApp();

  if (wishlist.length === 0) {
    return (
      <div className="pt-48 pb-24 px-6 text-center space-y-8">
        <div className="inline-flex p-8 rounded-full bg-white/5 border border-white/10">
          <Heart size={48} className="text-white/20" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-display font-bold">WISH LIST IS EMPTY</h1>
          <p className="text-white/40 font-light">Save your favorite liquid-glass pieces for later.</p>
        </div>
        <Link to="/shop" className="inline-block">
          <MagneticButton className="px-10 py-4 bg-white text-black rounded-full font-bold tracking-widest hover:bg-neon-purple transition-colors">
            EXPLORE COLLECTIONS
          </MagneticButton>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.4em] text-neon-purple font-bold">Saved Pieces</span>
          <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tighter">WISH LIST</h1>
        </div>
        <p className="text-sm text-white/40 font-mono">{wishlist.length} ITEMS</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
