import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LiquidBackground } from './components/LiquidBackground';
import { LiquidCursor } from './components/LiquidCursor';

import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Wishlist } from './pages/Wishlist';
import { Account } from './pages/Account';
import { About } from './pages/About';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <div className="relative min-h-screen selection:bg-neon-green/30">
          <LiquidBackground />
          <LiquidCursor />
          <Header />
          
          <main>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/shop" element={<PageWrapper><Shop /></PageWrapper>} />
                <Route path="/product/:id" element={<PageWrapper><ProductDetail /></PageWrapper>} />
                <Route path="/cart" element={<PageWrapper><Cart /></PageWrapper>} />
                <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
                <Route path="/wishlist" element={<PageWrapper><Wishlist /></PageWrapper>} />
                <Route path="/account" element={<PageWrapper><Account /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}
