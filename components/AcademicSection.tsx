import React from 'react';
import { GraduationCap, Book, Users, Pencil, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PROGRAMS = [
  {
    icon: <Users size={24} />,
    title: "Pre-Primary",
    level: "Playgroup - KG",
    description: "A child-friendly Montessori environment fostering curiosity and social skills through play-based learning.",
    image: "https://picsum.photos/seed/kids/400/300",
    color: "bg-blue-500"
  },
  {
    icon: <Pencil size={24} />,
    title: "Basic Level",
    level: "Grades 1 - 8",
    description: "Strong foundation in core subjects including Mathematics, Science, English, and Nepali with computer education.",
    image: "https://picsum.photos/seed/basic/400/300",
    color: "bg-emerald-500"
  },
  {
    icon: <Book size={24} />,
    title: "Secondary Level",
    level: "Grades 9 - 10 (SEE)",
    description: "Focused preparation for the Secondary Education Examination (SEE) with extra coaching and lab works.",
    image: "https://picsum.photos/seed/secondary/400/300",
    color: "bg-royal-800"
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Higher Secondary",
    level: "+2 Science & Mgmt",
    description: "Affiliated with NEB. Streams include Science (Physics/Bio) and Management (Computer/Hotel Mgmt).",
    image: "https://picsum.photos/seed/college/400/300",
    color: "bg-gold-500"
  }
];

const AcademicSection: React.FC = () => {
  return (
    <section id="academics" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-royal-800 font-bold uppercase tracking-widest text-sm mb-3"
            >
              Educational Excellence
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6"
            >
              Academic Programs
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              We provide a comprehensive educational journey from early childhood to higher secondary levels, 
              designed to nurture intellectual growth and practical expertise.
            </motion.p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-royal-800 font-bold flex items-center group"
          >
            View Full Curriculum <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROGRAMS.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-4 left-4 p-3 rounded-xl text-white shadow-lg ${program.color}`}>
                  {program.icon}
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-2">
                  {program.level}
                </p>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-royal-800 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {program.description}
                </p>
                <button className="flex items-center text-sm font-bold text-royal-800 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
