import React from 'react';
import { Quote, Star } from 'lucide-react';

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
  return (
    <section className="py-24 bg-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-royal-800 font-bold uppercase tracking-widest text-sm mb-3">Student Voices</h2>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
            What Our Students Say
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((student) => (
            <div key={student.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-gold-500 relative overflow-hidden group">
              {/* Watermark Quote Icon - Subtle and in background */}
              <Quote className="absolute top-2 right-4 text-gray-100 w-24 h-24 opacity-50 transform rotate-12 -z-0 group-hover:scale-110 transition-transform duration-500" />
              
              <div className="relative z-10">
                  <div className="flex text-gold-500 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" className="mr-1" />
                    ))}
                  </div>

                  {/* Clean text without explicit quote marks */}
                  <p className="text-gray-700 mb-8 font-serif text-lg leading-relaxed">
                    {student.quote}
                  </p>

                  <div className="flex items-center pt-6 border-t border-gray-50 mt-auto">
                    <img 
                      src={student.image} 
                      alt={student.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-royal-900 text-base">{student.name}</h4>
                      <p className="text-xs text-royal-600 font-bold uppercase tracking-wider">{student.grade}</p>
                    </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;