import React from 'react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {/* Hero */}
        <section className="text-center space-y-8">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.5em] text-neon-green font-bold"
          >
            The Brand
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl lg:text-9xl font-display font-bold tracking-tighter leading-none"
          >
            LEVIOOSA<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green">VANGUARD</span>
          </motion.h1>
        </section>

        {/* Story */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold tracking-tight">BEYOND THE<br/>MATERIAL PLANE</h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              Founded in 2024, Levioosa was born from a singular vision: to create apparel that exists at the intersection of high-fashion and futuristic technology. 
              Our "Liquid Glass" aesthetic isn't just a design choice—it's a philosophy of fluidity, transparency, and constant evolution.
            </p>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              We utilize proprietary polymers and light-reactive fabrics to create pieces that respond to their environment, ensuring that the wearer is always at the center of a living, breathing art installation.
            </p>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 glass-panel rounded-[3rem] -rotate-6" />
            <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
              <img 
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000" 
                alt="Futuristic Fabric" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'INNOVATION', desc: 'Pushing the boundaries of what fabric can do.', color: 'text-neon-blue' },
            { title: 'PRECISION', desc: 'Every stitch is calculated for optimal form and function.', color: 'text-neon-green' },
            { title: 'ETHOS', desc: 'Sustainable luxury for a digital-first generation.', color: 'text-neon-purple' }
          ].map((val, i) => (
            <div key={i} className="glass-panel p-12 rounded-[2.5rem] space-y-4 text-center">
              <h3 className={cn("text-2xl font-display font-bold", val.color)}>{val.title}</h3>
              <p className="text-sm text-white/40 font-light leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
