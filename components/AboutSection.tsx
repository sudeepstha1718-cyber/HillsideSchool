import React from 'react';
import { Quote } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Introduction */}
          <div>
             <h4 className="text-royal-800 font-bold uppercase tracking-widest text-sm mb-4">Who We Are</h4>
             <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
               Nurturing Potential, Inspiring Excellence
             </h2>
             <p className="text-gray-600 mb-6 leading-relaxed text-justify">
               Hillside English School, located in the peaceful environment of Malepatan, Pokhara, is dedicated to providing quality education. We create an atmosphere where students can grow intellectually, socially, and emotionally.
             </p>
             <p className="text-gray-600 mb-6 leading-relaxed text-justify">
               Our curriculum is designed to meet national standards while incorporating modern teaching methodologies. We focus on practical learning, discipline, and moral values to prepare our students for the challenges of the 21st century.
             </p>
             
             <div className="bg-stone-50 border-l-4 border-royal-800 p-6 mt-8">
                <h3 className="font-bold text-royal-800 mb-2">Our Motto</h3>
                <p className="text-sm text-gray-600 italic">
                  "Empowering minds, inspiring futures"
                </p>
             </div>
          </div>
          
          {/* Principal's Message */}
          <div className="relative bg-royal-50 p-8 md:p-10 rounded-lg border border-royal-100">
             <Quote className="absolute top-6 right-6 text-royal-200 w-12 h-12" />
             <h4 className="text-royal-800 font-bold uppercase tracking-widest text-xs mb-6">Message from the Principal</h4>
             
             <div className="flex items-center mb-6">
                <img 
                  src="https://picsum.photos/100/100?random=principal" 
                  alt="Dil Kumar Bhattarai" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md mr-4"
                />
                <div>
                   <h3 className="font-serif font-bold text-slate-900 text-lg">Mr. Dil Kumar Bhattarai</h3>
                   <p className="text-xs text-royal-800 font-medium">Principal</p>
                </div>
             </div>

             <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
               "Education is the most powerful weapon which you can use to change the world. At Hillside English School, we strive not just for academic grades, but for character building. We invite you to join our community and experience a holistic learning journey."
             </p>
             
             <button className="text-royal-800 text-sm font-bold hover:underline">
                Read Full Message &rarr;
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;