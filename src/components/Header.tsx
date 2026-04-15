import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Search, Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { cn } from '../lib/utils';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, wishlist } = useApp();
  const location = useLocation();

  const navLinks = [
    { name: 'Collections', href: '/shop' },
    { name: 'Men', href: '/shop?cat=Men' },
    { name: 'Women', href: '/shop?cat=Women' },
    { name: 'Accessories', href: '/shop?cat=Accessories' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel rounded-full px-6 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-display font-bold tracking-tighter hover:text-neon-green transition-colors">
          LEVIOOSA<span className="text-neon-green">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-[11px] uppercase tracking-[0.15em] font-medium transition-all pb-1 border-b-2",
                location.pathname === link.href ? "text-white border-accent-cyan" : "text-white/50 border-transparent hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-5">
          <button className="hover:text-neon-green transition-colors">
            <Search size={20} />
          </button>
          <Link to="/wishlist" className="relative hover:text-neon-green transition-colors">
            <Heart size={20} />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-neon-purple rounded-full text-[8px] flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative hover:text-neon-green transition-colors">
            <ShoppingBag size={20} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-neon-green rounded-full text-[8px] text-black font-bold flex items-center justify-center">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </Link>
          <Link to="/account" className="hover:text-neon-green transition-colors">
            <User size={20} />
          </Link>
          <button 
            className="md:hidden hover:text-neon-green transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-6 right-6 glass-panel rounded-3xl p-8 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-display font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
