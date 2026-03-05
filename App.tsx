import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Quote, Star } from 'lucide-react';
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
        <section className="relative py-24 px-4 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="relative bg-royal-900 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,74,173,0.3)]">
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-500/20 rounded-full blur-[120px]"></div>
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-royal-500/20 rounded-full blur-[120px]"></div>
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch relative z-10">
                        {/* Text Content */}
                        <div className="lg:col-span-7 p-8 md:p-16 lg:p-20 flex flex-col justify-center">
                            <div className="flex items-center space-x-3 mb-8">
                                <span className="w-12 h-[2px] bg-gold-500"></span>
                                <span className="text-gold-400 font-bold uppercase tracking-[0.4em] text-[10px]">Admissions 2025</span>
                            </div>
                            
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-[1.1]"
                            >
                                Unlock Your Child's <br/>
                                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300">Full Potential</span>
                            </motion.h2>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-blue-100/80 text-lg md:text-xl mb-12 leading-relaxed max-w-xl font-light"
                            >
                                Join a legacy of academic excellence and holistic development. Our admissions for the new session are now open.
                            </motion.p>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap gap-6"
                            >
                                <button className="group relative bg-gold-500 text-white px-10 py-5 rounded-2xl font-bold transition-all overflow-hidden shadow-xl shadow-gold-500/20">
                                    <span className="relative z-10 flex items-center gap-3 text-lg">
                                        Apply Now
                                        <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </button>
                                
                                <button className="group px-10 py-5 rounded-2xl font-bold text-white border border-white/20 hover:bg-white/5 transition-all flex items-center gap-3 text-lg">
                                    Schedule a Visit
                                    <Quote className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </button>
                            </motion.div>

                            <div className="mt-16 grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
                                <div>
                                    <p className="text-3xl font-bold text-white mb-1">25+</p>
                                    <p className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Years Legacy</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-white mb-1">100%</p>
                                    <p className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">SEE Success</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-white mb-1">15:1</p>
                                    <p className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Student Ratio</p>
                                </div>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop" 
                                alt="Hillside Student" 
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-royal-900/40 via-transparent to-transparent"></div>
                            
                            {/* Floating Badge */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gold-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-gold-500/30">
                                        <Star className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Top Rated School</p>
                                        <p className="text-white/60 text-[10px] uppercase tracking-widest">Pokhara Valley</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>
      
      <Footer />
      <CrimsonAssistant />
    </div>
  );
};

export default App;