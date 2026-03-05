import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className={`p-2 font-serif text-2xl font-bold tracking-tight rounded-sm transition-colors duration-300 ${isScrolled ? 'bg-royal-800 text-white' : 'bg-white text-royal-800'}`}>
              H
            </div>
            <div className="hidden md:block">
              <h1 className={`text-2xl font-serif font-bold tracking-tight leading-none transition-colors duration-300 ${isScrolled ? 'text-royal-800' : 'text-white'}`}>
                HILLSIDE
              </h1>
              <span className={`text-[10px] font-semibold tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-gray-500' : 'text-gray-300'}`}>
                English School
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`text-sm font-bold transition-colors flex items-center group ${
                  isScrolled ? 'text-gray-700 hover:text-royal-800' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                {item.children && <ChevronDown size={14} className="ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />}
              </motion.a>
            ))}
            
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`transition-colors ${isScrolled ? 'text-gray-400 hover:text-royal-800' : 'text-white/60 hover:text-white'}`}
            >
              <Search size={20} />
            </motion.button>
            
            <motion.a 
              href="#apply" 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-sm text-sm font-bold transition-all shadow-lg ${
                isScrolled 
                  ? 'bg-royal-800 text-white hover:bg-royal-900' 
                  : 'bg-gold-500 text-white hover:bg-gold-600'
              }`}
            >
              Apply Now
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
             <button className={`${isScrolled ? 'text-gray-600' : 'text-white'}`}>
                <Search size={24} />
             </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`focus:outline-none p-1 rounded-md transition-colors ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-2xl overflow-hidden"
          >
            <div className="py-6 px-6 flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-bold text-gray-800 py-3 border-b border-gray-50 flex justify-between items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  <ChevronDown size={18} className="text-gray-400 -rotate-90" />
                </a>
              ))}
              <a
                href="#apply"
                className="bg-royal-800 text-white text-center py-4 rounded-sm font-bold mt-4 shadow-lg active:scale-95 transition-transform"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
