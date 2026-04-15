import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ThreeProductRotator } from '../components/ThreeProductRotator';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../types';
import { MagneticButton } from '../components/MagneticButton';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.featured);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        <ThreeProductRotator />
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <MagneticButton className="group relative px-10 py-5 cta-gradient rounded-xl overflow-hidden">
              <span className="relative z-10">EXPLORE COLLECTIONS</span>
            </MagneticButton>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/20"
          >
            <ArrowRight className="rotate-90" size={20} />
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.4em] text-neon-purple font-bold">Curated Selection</span>
            <h2 className="text-4xl lg:text-6xl font-display font-bold">FEATURED<br/>RELEASES</h2>
          </div>
          <Link to="/shop" className="group flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-white/60 hover:text-white transition-colors">
            <span>VIEW ALL PRODUCTS</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand Story / Liquid Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 glass-panel -skew-y-3 translate-y-20" />
        <div className="relative max-w-5xl mx-auto px-6 text-center space-y-8">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl lg:text-8xl font-display font-bold tracking-tighter leading-none"
          >
            CRAFTED IN THE<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green">LIQUID DIMENSION</span>
          </motion.h2>
          <p className="text-lg lg:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Levioosa merges futuristic materials with artisanal craftsmanship. 
            Every piece is a testament to the fluid nature of modern luxury.
          </p>
          <div className="pt-8">
            <Link to="/about">
              <MagneticButton className="px-10 py-5 border border-white/20 rounded-full text-xs uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all">
                OUR STORY
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 py-32 max-w-3xl mx-auto text-center">
        <div className="glass-panel rounded-[3rem] p-12 lg:p-20 space-y-8">
          <h3 className="text-3xl font-display font-bold">JOIN THE VANGUARD</h3>
          <p className="text-white/50 font-light">Subscribe for early access to limited drops and exclusive liquid-glass releases.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-4 text-xs tracking-widest focus:outline-none focus:border-neon-green transition-colors"
            />
            <button className="bg-white text-black px-10 py-4 rounded-full text-xs font-bold tracking-widest hover:bg-neon-green transition-colors">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
