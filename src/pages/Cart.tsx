import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MagneticButton } from '../components/MagneticButton';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useApp();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="pt-48 pb-24 px-6 text-center space-y-8">
        <div className="inline-flex p-8 rounded-full bg-white/5 border border-white/10">
          <ShoppingBag size={48} className="text-white/20" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-display font-bold">YOUR CART IS EMPTY</h1>
          <p className="text-white/40 font-light">Looks like you haven't added any liquid-glass pieces yet.</p>
        </div>
        <Link to="/shop" className="inline-block">
          <MagneticButton className="px-10 py-4 bg-white text-black rounded-full font-bold tracking-widest hover:bg-neon-green transition-colors">
            START SHOPPING
          </MagneticButton>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl lg:text-7xl font-display font-bold mb-12 tracking-tighter">SHOPPING BAG</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Items List */}
        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence mode="popLayout">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="glass-panel rounded-3xl p-6 flex items-center space-x-6"
              >
                <div className="w-24 h-32 rounded-2xl overflow-hidden bg-white/5 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-display font-bold">{item.name}</h3>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-white/20 hover:text-neon-purple transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{item.category}</p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-4 glass-panel px-3 py-1 rounded-full">
                      <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-neon-green transition-colors">
                        <Minus size={14} />
                      </button>
                      <span className="text-xs font-mono font-bold w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-neon-green transition-colors">
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="text-lg font-display font-medium">${item.price * item.quantity}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Summary */}
        <div className="space-y-6">
          <div className="glass-panel rounded-[2.5rem] p-8 space-y-8">
            <h3 className="text-xl font-display font-bold tracking-tight">ORDER SUMMARY</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Subtotal</span>
                <span>${subtotal}.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping}.00`}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Estimated Tax</span>
                <span>$0.00</span>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                <span className="text-xs font-bold tracking-widest">TOTAL</span>
                <span className="text-3xl font-display font-bold text-neon-green">${total}.00</span>
              </div>
            </div>

            <Link to="/checkout" className="block">
              <MagneticButton className="w-full cta-gradient py-5 rounded-xl flex items-center justify-center space-x-3">
                <span>CHECKOUT</span>
                <ArrowRight size={18} />
              </MagneticButton>
            </Link>
          </div>

          <div className="glass-panel rounded-3xl p-6 flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue">
              <ShoppingBag size={20} />
            </div>
            <p className="text-[10px] font-bold tracking-widest text-white/60">
              FREE SHIPPING ON ORDERS OVER $1000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
