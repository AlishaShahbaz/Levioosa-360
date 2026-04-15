import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CreditCard, Truck, ShieldCheck, ChevronRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MagneticButton } from '../components/MagneticButton';

export const Checkout: React.FC = () => {
  const { cart, clearCart } = useApp();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + (subtotal > 1000 ? 0 : 50);

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="pt-48 pb-24 px-6 text-center space-y-8">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-flex p-8 rounded-full bg-neon-green/20 text-neon-green"
        >
          <CheckCircle2 size={64} />
        </motion.div>
        <div className="space-y-4">
          <h1 className="text-5xl font-display font-bold">ORDER CONFIRMED</h1>
          <p className="text-white/40 font-light max-w-md mx-auto">
            Your liquid-glass pieces are being prepared for transport. 
            You will receive a transmission with tracking details shortly.
          </p>
          <p className="text-xs font-mono text-white/20">ORDER ID: #LV-99283-XQ</p>
        </div>
        <Link to="/shop" className="inline-block">
          <MagneticButton className="px-10 py-4 border border-white/20 rounded-full font-bold tracking-widest hover:bg-white hover:text-black transition-all">
            CONTINUE EXPLORING
          </MagneticButton>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <Link to="/cart" className="flex items-center space-x-2 text-[10px] font-bold tracking-widest text-white/40 hover:text-white transition-colors">
          <ArrowLeft size={14} />
          <span>BACK TO BAG</span>
        </Link>
        <h1 className="text-2xl font-display font-bold tracking-tighter">SECURE CHECKOUT</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Checkout Steps */}
        <div className="lg:col-span-3 space-y-8">
          {/* Shipping */}
          <div className={cn("glass-panel rounded-[2rem] p-8 transition-opacity", step !== 1 && "opacity-50")}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue text-xs font-bold">1</div>
                <h3 className="text-xl font-display font-bold">SHIPPING INFO</h3>
              </div>
              {step > 1 && <button onClick={() => setStep(1)} className="text-[10px] font-bold tracking-widest text-neon-blue">EDIT</button>}
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="FIRST NAME" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-neon-blue" />
                  <input type="text" placeholder="LAST NAME" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-neon-blue" />
                </div>
                <input type="text" placeholder="ADDRESS LINE 1" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-neon-blue" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="CITY" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-neon-blue" />
                  <input type="text" placeholder="POSTAL CODE" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-neon-blue" />
                </div>
                <button 
                  onClick={() => setStep(2)}
                  className="w-full cta-gradient py-4 rounded-xl"
                >
                  CONTINUE TO PAYMENT
                </button>
              </div>
            )}
          </div>

          {/* Payment */}
          <div className={cn("glass-panel rounded-[2rem] p-8 transition-opacity", step !== 2 && "opacity-50")}>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple text-xs font-bold">2</div>
              <h3 className="text-xl font-display font-bold">PAYMENT METHOD</h3>
            </div>

            {step === 2 && (
              <div className="space-y-6">
                <div className="glass-panel p-6 rounded-2xl border-neon-purple/50 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <CreditCard className="text-neon-purple" />
                    <div className="space-y-1">
                      <p className="text-xs font-bold tracking-widest">CREDIT / DEBIT CARD</p>
                      <p className="text-[10px] text-white/40">SECURE ENCRYPTED TRANSACTION</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full border-2 border-neon-purple flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-neon-purple" />
                  </div>
                </div>

                <div className="space-y-4">
                  <input type="text" placeholder="CARD NUMBER" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-neon-purple" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM / YY" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-neon-purple" />
                    <input type="text" placeholder="CVC" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-neon-purple" />
                  </div>
                </div>

                <button 
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                  className="w-full cta-gradient py-5 rounded-xl disabled:opacity-50 flex items-center justify-center space-x-3"
                >
                  {isProcessing ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>PLACE ORDER</span>
                      <ChevronRight size={18} />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel rounded-[2rem] p-8 space-y-6">
            <h3 className="text-lg font-display font-bold tracking-tight">YOUR ORDER</h3>
            
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
              {cart.map(item => (
                <div key={item.id} className="flex items-center space-x-4">
                  <div className="w-12 h-16 rounded-lg overflow-hidden bg-white/5 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold truncate">{item.name}</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">QTY: {item.quantity}</p>
                  </div>
                  <p className="text-xs font-mono">${item.price * item.quantity}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-white/40">Subtotal</span>
                <span>${subtotal}.00</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-white/40">Shipping</span>
                <span>{subtotal > 1000 ? 'FREE' : '$50.00'}</span>
              </div>
              <div className="flex justify-between items-end pt-2">
                <span className="text-[10px] font-bold tracking-widest">TOTAL</span>
                <span className="text-2xl font-display font-bold text-neon-green">${total}.00</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-white/30 px-4">
              <ShieldCheck size={16} />
              <span className="text-[10px] font-bold tracking-widest">SECURE PAYMENT</span>
            </div>
            <div className="flex items-center space-x-3 text-white/30 px-4">
              <Truck size={16} />
              <span className="text-[10px] font-bold tracking-widest">INSURED DELIVERY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
