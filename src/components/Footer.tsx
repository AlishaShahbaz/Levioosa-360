import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="px-6 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-display font-bold tracking-tighter">
            LEVIOOSA<span className="text-neon-green">.</span>
          </Link>
          <p className="text-sm text-white/40 font-light leading-relaxed">
            Redefining luxury through the lens of futuristic technology and liquid aesthetics.
          </p>
          <div className="flex items-center space-x-4">
            {[Instagram, Twitter, Youtube, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">Navigation</h4>
          <ul className="space-y-4">
            {['Collections', 'Men', 'Women', 'Accessories', 'About Us'].map((item) => (
              <li key={item}>
                <Link to="/shop" className="text-sm text-white/60 hover:text-neon-green transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">Support</h4>
          <ul className="space-y-4">
            {['Shipping & Returns', 'Privacy Policy', 'Terms of Service', 'Contact Us', 'FAQ'].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-white/60 hover:text-neon-blue transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">Headquarters</h4>
          <div className="space-y-2 text-sm text-white/60 font-light">
            <p>Vanguard Tower, Level 88</p>
            <p>Neo Tokyo, District 7</p>
            <p className="pt-4 text-neon-green font-mono">transmission@levioosa.com</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-24 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold tracking-widest text-white/20">
        <p>© 2026 LEVIOOSA VANGUARD. ALL RIGHTS RESERVED.</p>
        <p>DESIGNED IN THE LIQUID DIMENSION</p>
      </div>
    </footer>
  );
};
