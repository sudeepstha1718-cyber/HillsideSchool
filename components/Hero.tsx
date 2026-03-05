import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_STATS } from '../constants';

const SLIDES = [
  {
    image: "https://picsum.photos/1920/1080?grayscale&seed=school1",
    title: "Empowering Minds",
    subtitle: "Inspiring Futures",
    description: "Hillside English School is committed to academic excellence and holistic development in the heart of Pokhara."
  },
  {
    image: "https://picsum.photos/1920/1080?grayscale&seed=school2",
    title: "Excellence in Education",
    subtitle: "Modern Facilities",
    description: "Providing state-of-the-art laboratories, libraries, and a conducive learning environment for every student."
  },
  {
    image: "https://picsum.photos/1920/1080?grayscale&seed=school3",
    title: "Holistic Development",
    subtitle: "Beyond the Classroom",
    description: "From sports to arts, we nurture talent and character through a wide range of extra-curricular activities."
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-royal-900">
      {/* Slider Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={SLIDES[currentSlide].image}
            alt="Hillside School"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-900/90 via-royal-900/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-royal-900 via-transparent to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4">
              Pokhara-12, Kaski
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              {SLIDES[currentSlide].title} <br />
              <span className="text-gold-500">{SLIDES[currentSlide].subtitle}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed border-l-4 border-gold-500 pl-6 max-w-2xl">
              {SLIDES[currentSlide].description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-white text-royal-900 px-8 py-4 rounded-sm font-bold text-lg hover:bg-gold-500 hover:text-white transition-all flex items-center justify-center shadow-xl">
                Admissions Open
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border border-white/30 hover:border-white text-white px-8 py-4 rounded-sm font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm">
                <BookOpen size={20} className="mr-2" />
                Academic Programs
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-auto pb-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left border-t border-white/10 pt-8"
        >
            {HERO_STATS.map((stat, index) => (
                <div key={index} className="text-white">
                    <div className="text-3xl md:text-4xl font-serif font-bold text-gold-500 mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-300 font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
            ))}
        </motion.div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-12 right-4 sm:right-8 lg:right-16 z-20 flex items-center space-x-4">
        <button 
          onClick={prevSlide}
          className="p-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-royal-900 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex space-x-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${currentSlide === i ? 'bg-gold-500 w-8' : 'bg-white/40'}`}
            />
          ))}
        </div>
        <button 
          onClick={nextSlide}
          className="p-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-royal-900 transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
