import React from "react";
import { 
  Pin, 
  BellRing, 
  ArrowRight, 
  Calendar, 
  Megaphone, 
  FileText, 
  Clock,
  AlertCircle
} from "lucide-react";

const NoticeBoardPage = () => {
  // Updated styles – only fonts enhanced (bigger, cleaner, systematic)
  const pStyle = "text-lg md:text-xl text-gray-700 leading-relaxed font-normal mb-4";
  const dateStyle = "text-base md:text-lg font-bold uppercase tracking-wider text-[#ef3e32] mb-3 flex items-center gap-3";
  const noticeTitle = "text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-gray-900 group-hover:text-[#ef3e32] transition-colors leading-tight";

  const notices = [
    {
      date: "18 March 2026",
      title: "Mandatory GST Document Submission",
      desc: "All associate agencies must submit their updated GST returns by the end of this week to avoid contract suspension.",
      type: "Urgent",
      icon: <AlertCircle size={24} />
    },
    {
      date: "15 March 2026",
      title: "New Rate Contract: Winter Collection",
      desc: "Bidding for the upcoming winter fabric collection is now open. Check the procurement portal for technical specs.",
      type: "General",
      icon: <FileText size={24} />
    },
    {
      date: "12 March 2026",
      title: "Annual Maintenance Shutdown",
      desc: "The Ujjain Processing Unit will remain closed for 48 hours starting from 20th March for routine machinery audit.",
      type: "Alert",
      icon: <Clock size={24} />
    }
  ];

  return (
    <div className="bg-white font-sans text-gray-900 pb-20">
      
      {/* 1. CREATIVE HEADER – same as before */}
      <section className="relative h-[220px] bg-gray-900 text-white flex items-center overflow-hidden border-b-8 border-[#ef3e32]">
        {/* Abstract Background Elements – unchanged */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ef3e32] opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2 bg-[#ef3e32]"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <div className="flex items-center gap-3 mb-3">
            <Megaphone className="text-[#ef3e32]" size={28} />
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.6em] text-[#ef3e32]">Live Updates</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-2">
            Notice <span className="italic text-gray-400 font-light">Board</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium italic">
            Official Announcements from Parekh Textile Chamber.
          </p>
        </div>
      </section>

      {/* 2. NOTICE LIST – same layout */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* PINNED IMPORTANT NOTICE – same design */}
        <div className="relative mb-16 border-2 border-gray-900 p-8 flex flex-col md:flex-row gap-8 items-start">
           <div className="absolute -top-4 -left-4 bg-[#ef3e32] text-white p-3 shadow-lg rounded-full">
              <Pin size={28} className="rotate-45" />
           </div>
           <div className="shrink-0">
              <span className="bg-gray-900 text-white px-5 py-2 text-sm font-black uppercase tracking-widest">Pinned</span>
           </div>
           <div>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4 leading-tight">
                Office Relocation: New Management Wing
              </h2>
              <p className={pStyle}>
                The administrative wing of Parekh Fabrics is moving to the 4th Floor of the Textile Chamber 
                starting Monday. All couriers and physical documents should be directed there.
              </p>
              <button className="mt-6 text-base font-black uppercase tracking-widest text-[#ef3e32] flex items-center gap-3 hover:gap-5 transition-all">
                Download Location Map <ArrowRight size={18} />
              </button>
           </div>
        </div>

        {/* RECENT NOTICES – vertical flow same */}
        <div className="space-y-14 md:space-y-16">
           <h3 className="text-sm md:text-base font-black uppercase tracking-[0.4em] text-gray-400 mb-10 border-b pb-3 inline-block">
             Recent Circulars
           </h3>
           
           {notices.map((notice, i) => (
             <div 
               key={i} 
               className="group flex flex-col md:flex-row gap-6 md:gap-16 border-b border-gray-100 pb-12 last:border-0 last:pb-0"
             >
                {/* Date & Icon Column */}
                <div className="md:w-1/4 shrink-0">
                   <div className={dateStyle}>
                      <Calendar size={18} /> {notice.date}
                   </div>
                   <div className="flex items-center gap-4 text-gray-400 font-bold uppercase text-sm tracking-widest mt-3">
                      {notice.icon} {notice.type}
                   </div>
                </div>

                {/* Content Column */}
                <div className="flex-1">
                   <h3 className={noticeTitle}>{notice.title}</h3>
                   <p className={`${pStyle} mt-5 text-gray-600 italic`}>
                      {notice.desc}
                   </p>
                   <div className="flex flex-wrap gap-6 mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="text-base font-black uppercase tracking-widest underline decoration-[#ef3e32] decoration-2 underline-offset-4 hover:text-[#ef3e32] transition">
                        View Details
                      </button>
                      <button className="text-base font-black uppercase tracking-widest text-gray-500 hover:text-gray-800 transition">
                        Share Update
                      </button>
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* BOTTOM ALERT STRIPE – same */}
        <div className="mt-20 bg-gray-50 p-8 flex flex-col md:flex-row items-center justify-between gap-8 border-l-8 border-gray-900">
           <div className="flex items-center gap-6">
              <BellRing className="text-[#ef3e32] animate-pulse" size={32} />
              <p className="text-xl md:text-2xl font-medium text-gray-600 italic">
                Enable desktop notifications for real-time industrial alerts.
              </p>
           </div>
           <button className="bg-gray-900 text-white px-10 py-5 font-black text-base uppercase tracking-widest hover:bg-[#ef3e32] transition-all rounded-md">
              Enable Alerts
           </button>
        </div>

      </div>

      <footer className="text-center py-8 text-base font-bold text-gray-300 uppercase tracking-[0.4em]">
         Industrial Board • PTC Internal Communication 2026
      </footer>
    </div>
  );
};

export default NoticeBoardPage;