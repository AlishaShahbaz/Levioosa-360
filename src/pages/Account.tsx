import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Package, MapPin, Settings, LogOut, ChevronRight, CreditCard } from 'lucide-react';
import { cn } from '../lib/utils';

export const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState('orders');

  const tabs = [
    { id: 'orders', label: 'ORDERS', icon: Package },
    { id: 'profile', label: 'PROFILE', icon: User },
    { id: 'addresses', label: 'ADDRESSES', icon: MapPin },
    { id: 'payment', label: 'PAYMENT', icon: CreditCard },
    { id: 'settings', label: 'SETTINGS', icon: Settings },
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <div className="lg:w-1/4 space-y-8">
          <div className="flex items-center space-x-4 px-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-[2px]">
              <div className="w-full h-full rounded-full bg-luxury-black flex items-center justify-center overflow-hidden">
                <img src="https://picsum.photos/seed/user/200" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-display font-bold">ALEX VANGUARD</h2>
              <p className="text-[10px] text-white/40 tracking-widest uppercase">ELITE MEMBER</p>
            </div>
          </div>

          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all group",
                  activeTab === tab.id 
                    ? "bg-white/10 text-white border border-white/10" 
                    : "text-white/40 hover:text-white hover:bg-white/5"
                )}
              >
                <div className="flex items-center space-x-4">
                  <tab.icon size={18} className={cn(activeTab === tab.id ? "text-neon-green" : "text-white/20")} />
                  <span className="text-[10px] font-bold tracking-[0.2em]">{tab.label}</span>
                </div>
                <ChevronRight size={14} className={cn("transition-transform", activeTab === tab.id ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0")} />
              </button>
            ))}
            <button className="w-full flex items-center space-x-4 px-6 py-4 text-white/40 hover:text-neon-purple transition-colors">
              <LogOut size={18} />
              <span className="text-[10px] font-bold tracking-[0.2em]">LOGOUT</span>
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="glass-panel rounded-[3rem] p-8 lg:p-12 min-h-[60vh]">
            {activeTab === 'orders' && (
              <div className="space-y-8">
                <div className="flex items-end justify-between">
                  <h3 className="text-3xl font-display font-bold tracking-tight">RECENT ORDERS</h3>
                  <span className="text-[10px] font-bold tracking-widest text-white/20">TOTAL: 2</span>
                </div>

                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="glass-panel p-6 rounded-3xl border-white/5 hover:border-white/10 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <div className="flex items-center space-x-6">
                        <div className="w-16 h-20 rounded-xl bg-white/5 overflow-hidden flex-shrink-0">
                          <img src={`https://picsum.photos/seed/order${i}/200/300`} alt="Order" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-bold tracking-widest">ORDER #LV-99283-XQ</p>
                          <p className="text-[10px] text-white/40">PLACED ON APRIL 15, 2026</p>
                          <div className="flex items-center space-x-2 pt-2">
                            <span className="w-2 h-2 rounded-full bg-neon-green" />
                            <span className="text-[10px] font-bold text-neon-green tracking-widest uppercase">IN TRANSIT</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2">
                        <p className="text-lg font-display font-bold">$1,250.00</p>
                        <button className="text-[10px] font-bold tracking-widest text-neon-blue hover:underline">VIEW DETAILS</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab !== 'orders' && (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-40">
                <Settings size={48} />
                <p className="text-xl font-display font-medium uppercase tracking-widest">Section Under Construction</p>
                <p className="text-sm font-light">The liquid dimension is still stabilizing this module.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
