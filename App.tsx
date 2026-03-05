import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import NoticeBoard from './components/NoticeBoard';
import AcademicSection from './components/AcademicSection';
import AboutSection from './components/AboutSection';
import EducationalApproach from './components/EducationalApproach';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CrimsonAssistant from './components/CrimsonAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <AcademicSection />
        <EducationalApproach />
        <NoticeBoard />
        <Testimonials />
        
        {/* Call to Action */}
        <section className="relative bg-royal-900 py-32 px-4 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-serif font-bold text-white mb-8"
                >
                  Join Our <span className="text-gold-500">Community</span>.
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Discover a place where curiosity leads to wisdom. Applications for the 2025-2026 Academic Year are now open.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <button className="bg-gold-500 text-white hover:bg-gold-600 px-10 py-4 rounded-sm font-bold uppercase tracking-widest transition-all shadow-xl hover:scale-105 active:scale-95">
                        Inquire Today
                    </button>
                    <button className="border border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-sm font-bold uppercase tracking-widest transition-all backdrop-blur-sm">
                        Download Prospectus
                    </button>
                </motion.div>
            </div>
        </section>
      </main>
      
      <Footer />
      <CrimsonAssistant />
    </div>
  );
};

export default App;