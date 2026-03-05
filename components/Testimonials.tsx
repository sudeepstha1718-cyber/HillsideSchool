import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  grade: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aarav Shrestha",
    grade: "Grade 12 (Science)",
    quote: "The science laboratories at Hillside are exceptional. The practical approach to learning physics and chemistry has really helped me prepare for my medical entrance exams.",
    image: "https://picsum.photos/100/100?random=student1"
  },
  {
    id: 2,
    name: "Priya Sharma",
    grade: "Grade 10 (SEE Batch)",
    quote: "Teachers here don't just teach from books; they mentor us. The extra coaching classes for SEE preparation gave me the confidence to aim for a GPA of 4.0.",
    image: "https://picsum.photos/100/100?random=student2"
  },
  {
    id: 3,
    name: "Rohan Gurung",
    grade: "Grade 11 (Management)",
    quote: "I joined for the academics, but I stayed for the community. The balance between studies and sports like football and basketball is perfect at Hillside.",
    image: "https://picsum.photos/100/100?random=student3"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 3000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <section className="py-24 bg-slate-50 border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-royal-800 font-bold uppercase tracking-widest text-sm mb-3">Student Voices</h2>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
            What Our Students Say
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="relative h-[400px] md:h-[350px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden h-full flex flex-col justify-center">
                  <Quote className="absolute -top-4 -right-4 text-gray-50 w-48 h-48 opacity-50 transform rotate-12 -z-0" />
                  
                  <div className="relative z-10">
                    <div className="flex text-gold-500 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" className="mr-1" />
                      ))}
                    </div>

                    <p className="text-gray-700 mb-10 font-serif text-xl md:text-2xl italic leading-relaxed">
                      "{testimonials[currentIndex].quote}"
                    </p>

                    <div className="flex items-center pt-8 border-t border-gray-100">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name} 
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg mr-6"
                      />
                      <div>
                        <h4 className="font-bold text-royal-900 text-lg">{testimonials[currentIndex].name}</h4>
                        <p className="text-sm text-royal-600 font-bold uppercase tracking-widest">{testimonials[currentIndex].grade}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white border border-gray-200 text-royal-800 hover:bg-royal-800 hover:text-white transition-all shadow-md"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-gold-500 w-8' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white border border-gray-200 text-royal-800 hover:bg-royal-800 hover:text-white transition-all shadow-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;