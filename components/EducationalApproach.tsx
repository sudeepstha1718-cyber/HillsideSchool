import React from 'react';
import { BookOpen, Users, Monitor, Trophy, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const FEATURES = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Curriculum & Methodology",
    description: "We follow the National Curriculum Framework enriched with international practices. The medium of instruction is English, emphasizing both theoretical knowledge and practical application.",
    details: ["Student-centered learning", "Practical workshops", "English medium instruction"]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Student Support",
    description: "Our dedicated faculty provides individual attention. We offer remedial classes for students needing extra support and counseling services for career guidance.",
    details: ["Individual attention", "Remedial classes", "Career counseling"]
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Modern Facilities",
    description: "The school is equipped with science laboratories, computer labs with high-speed internet, a well-stocked library, and audio-visual rooms for interactive learning.",
    details: ["High-speed internet", "Science & Computer labs", "Digital classrooms"]
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "ECA & CCA",
    description: "Education goes beyond books. We organize regular sports weeks, cultural programs, debate competitions, and field trips to ensure holistic development.",
    details: ["Sports & Athletics", "Cultural events", "Educational tours"]
  }
];

const EducationalApproach: React.FC = () => {
  return (
    <section id="approach" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-royal-800 font-bold uppercase tracking-widest text-sm mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6"
          >
            Facilities & Features
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gold-500 mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-stone-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-royal-800 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-royal-800/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-xs font-medium text-slate-700">
                      <CheckCircle2 size={14} className="text-gold-500 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://picsum.photos/seed/facility/800/1000" 
                alt="School Facilities" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-royal-900/20"></div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-royal-800/10 rounded-full blur-3xl -z-0"></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-2xl z-20 max-w-xs border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600">
                  <Trophy size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">25+</p>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Years of Excellence</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">
                "Consistently ranked among the top schools in the region for academic performance."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalApproach;
