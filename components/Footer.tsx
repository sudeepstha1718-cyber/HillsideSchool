import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Globe, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t-4 border-royal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
                <div className="bg-royal-800 text-white p-1.5 font-serif text-xl font-bold rounded-sm">H</div>
                <h3 className="text-2xl font-serif font-bold tracking-tight">Hillside English School</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Malepatan-12, Pokhara<br />
              Kaski, Nepal
            </p>
            <div className="flex flex-col space-y-2 text-sm text-slate-300 mb-6">
                <div className="flex items-center">
                    <Phone size={14} className="mr-2 text-gold-500" /> 985-6031780
                </div>
                <div className="flex items-center">
                    <Mail size={14} className="mr-2 text-gold-500" /> hillsideengschool@gmail.com
                </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-gold-500 font-bold uppercase tracking-wider text-xs mb-6">Academics</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white hover:underline decoration-royal-800 decoration-2 underline-offset-4 transition-all">Pre-Primary</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-royal-800 decoration-2 underline-offset-4 transition-all">Basic Level (1-8)</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-royal-800 decoration-2 underline-offset-4 transition-all">Secondary (9-10)</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-royal-800 decoration-2 underline-offset-4 transition-all">Higher Secondary (+2)</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-royal-800 decoration-2 underline-offset-4 transition-all">Faculty</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-gold-500 font-bold uppercase tracking-wider text-xs mb-6">Community</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white hover:underline decoration-royal-800 decoration-2 underline-offset-4 transition-all">Parents Info</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-royal-800 decoration-2 underline-offset-4 transition-all">Alumni</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-royal-800 decoration-2 underline-offset-4 transition-all">School Calendar</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-royal-800 decoration-2 underline-offset-4 transition-all">ECA Activities</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-royal-800 decoration-2 underline-offset-4 transition-all">Careers</a></li>
            </ul>
          </div>

          {/* Global Column */}
          <div>
            <h4 className="text-gold-500 font-bold uppercase tracking-wider text-xs mb-6">Admissions</h4>
             <p className="text-slate-400 text-sm mb-4 leading-relaxed">
               Discover what makes a Hillside education unique. Schedule a visit or apply today.
             </p>
             <button className="flex items-center text-sm font-bold text-white border border-slate-600 px-4 py-2 rounded-sm hover:bg-white hover:text-slate-900 transition-colors">
               <Globe size={16} className="mr-2" />
               Apply Online
             </button>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Hillside English School. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Student Handbook</a>
            <a href="#" className="hover:text-white">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;