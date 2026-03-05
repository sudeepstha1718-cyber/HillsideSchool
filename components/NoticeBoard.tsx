import React from 'react';
import { FileText, Download, Bell, AlertCircle } from 'lucide-react';
import { SCHOOL_NOTICES } from '../constants';

const NoticeBoard: React.FC = () => {
  return (
    <section id="notices" className="py-20 bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <div className="inline-flex items-center justify-center p-3 bg-royal-100 rounded-full mb-4">
              <Bell className="text-royal-800" size={24} />
           </div>
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Official Notices</h2>
           <p className="text-gray-600 max-w-2xl mx-auto">
             Stay updated with the latest announcements, examination schedules, and circulars from the administration.
           </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
           <div className="bg-royal-800 px-6 py-4 flex justify-between items-center text-white">
              <span className="font-bold tracking-wide uppercase text-sm">Notice Board</span>
              <span className="text-xs bg-royal-900 px-2 py-1 rounded text-gray-200">Updated Today</span>
           </div>
           
           <div className="divide-y divide-gray-100">
             {SCHOOL_NOTICES.map((notice) => (
               <div key={notice.id} className="p-6 hover:bg-stone-50 transition-colors flex flex-col md:flex-row md:items-center gap-4 group cursor-pointer">
                  <div className="flex-shrink-0 md:w-32">
                     <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Date</div>
                     <div className="font-serif font-bold text-royal-800">{notice.date}</div>
                  </div>
                  
                  <div className="flex-grow">
                     <div className="flex items-center mb-1">
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                            notice.type === 'Exam' ? 'bg-red-50 text-red-700 border-red-200' :
                            notice.type === 'Holiday' ? 'bg-green-50 text-green-700 border-green-200' :
                            notice.type === 'Event' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                            'bg-gray-100 text-gray-700 border-gray-200'
                        }`}>
                            {notice.type}
                        </span>
                     </div>
                     <h3 className="text-lg font-medium text-slate-800 group-hover:text-royal-800 transition-colors">
                        {notice.title}
                     </h3>
                  </div>

                  <div className="flex-shrink-0 md:ml-auto">
                     <button className="flex items-center text-sm font-bold text-royal-800 bg-royal-50 px-4 py-2 rounded-sm hover:bg-royal-800 hover:text-white transition-all">
                        <Download size={16} className="mr-2" />
                        View
                     </button>
                  </div>
               </div>
             ))}
           </div>
           
           <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 text-center">
              <a href="#" className="text-royal-800 font-bold text-sm hover:underline flex items-center justify-center">
                 View Archive <AlertCircle size={14} className="ml-1" />
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;