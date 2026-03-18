import React from "react";
import { 
  Bell, 
  ChevronRight, 
  Calendar, 
  User, 
  ArrowRight, 
  Download, 
  Share2, 
  Printer,
  Megaphone
} from "lucide-react";

const CircularPage = () => {
  // Font and Element Styles
  const pStyle = "text-[18px] text-gray-700 leading-relaxed font-normal mb-4";
  const h3Style = "text-[11px] font-black uppercase tracking-[0.4em] text-[#ef3e32] mb-3 flex items-center gap-2";
  const metaStyle = "text-[12px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2";

  return (
    <div className="bg-white font-sans text-gray-900 pb-20">
      
      {/* 1. CREATIVE CIRCULAR BANNER (Compact) */}
      <section className="relative h-[280px] bg-gray-900 text-white flex items-center overflow-hidden border-b-4 border-[#ef3e32]">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ef3e32 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
        
        {/* Red Design Element */}
        <div className="absolute right-0 top-0 bottom-0 w-1/5 bg-[#ef3e32] opacity-90 transform skew-x-12 translate-x-10"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <div className="flex items-center gap-3 mb-4">
            <Megaphone className="text-[#ef3e32]" size={24} />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ef3e32]">Official Communication</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2">
            Chamber <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 italic">Circulars</span>
          </h1>
          <p className="text-gray-400 text-[18px] font-medium">Important Updates & Advisory for Registered Members.</p>
        </div>
      </section>

      {/* 2. DIRECT SCREEN CONTENT (No Cards) */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        
        {/* HEADER META INFO */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-8 border-b border-gray-100 pb-6">
           <div className="flex gap-8">
              <div className={metaStyle}><Calendar size={14} className="text-[#ef3e32]" /> 18 March 2026</div>
              <div className={metaStyle}><User size={14} className="text-[#ef3e32]" /> Admin Office</div>
           </div>
           <div className="flex gap-4">
              <button className="p-2 border border-gray-200 hover:bg-gray-900 hover:text-white transition-all"><Printer size={16}/></button>
              <button className="p-2 border border-gray-200 hover:bg-gray-900 hover:text-white transition-all"><Download size={16}/></button>
              <button className="p-2 border border-gray-200 hover:bg-gray-900 hover:text-white transition-all"><Share2 size={16}/></button>
           </div>
        </div>

        {/* MAIN NOTICE CONTENT */}
        <div className="max-w-4xl">
           <h3 className={h3Style}>Reference: PTC/CIR/2026/08</h3>
           <h2 className="text-3xl font-black uppercase tracking-tight mb-6 leading-tight">
             Advisory Regarding New Trade Compliance <br /> & GST Normalization in Textile Sector
           </h2>

           <p className={pStyle}>
             Greetings from the **Parekh Textile of Chamber**. This circular is being issued to inform all 
             primary and associate members regarding the recent changes in trade compliance protocols 
             effective from next quarter.
           </p>

           <p className={pStyle}>
             As per the new guidelines discussed in the last executive board meeting, all tailoring 
             agencies and manufacturing units are required to update their documentation in the 
             official chamber portal to avoid any disruption in current rate contracts.
           </p>

           {/* HIGHLIGHTED POINT SECTION */}
           <div className="my-8 bg-gray-50 p-8 border-l-4 border-gray-900">
              <h4 className="text-sm font-black uppercase mb-4 tracking-widest text-gray-400 flex items-center gap-2">
                 <Bell size={16} className="text-[#ef3e32]" /> Key Action Points
              </h4>
              <ul className="space-y-4">
                 <li className="flex items-start gap-4 text-[18px] font-bold">
                    <ChevronRight className="text-[#ef3e32] shrink-0 mt-1" size={18} />
                    Verification of GST Status and MSME Certification.
                 </li>
                 <li className="flex items-start gap-4 text-[18px] font-bold">
                    <ChevronRight className="text-[#ef3e32] shrink-0 mt-1" size={18} />
                    Submission of Annual Maintenance Returns (AMR) by April 10th.
                 </li>
                 <li className="flex items-start gap-4 text-[18px] font-bold">
                    <ChevronRight className="text-[#ef3e32] shrink-0 mt-1" size={18} />
                    Compliance with new Stitching & Quality standard ISO-2026.
                 </li>
              </ul>
           </div>

           <p className={pStyle}>
             Failure to comply within the stipulated time frame may result in a temporary suspension 
             of bidding privileges for upcoming e-Auctions and Corporate Tenders. For technical support, 
             kindly contact the IT Cell of the Chamber during office hours.
           </p>

           <div className="mt-12">
              <p className="text-[18px] font-black uppercase tracking-tighter">Authorized By,</p>
              <p className="text-[18px] font-medium text-gray-500 italic mt-1 leading-none">Management Committee</p>
              <p className="text-[14px] font-bold text-[#ef3e32] uppercase tracking-[0.2em] mt-2">Parekh Textile Of Chamber</p>
           </div>
        </div>

        {/* RECENT CIRCULARS LIST (Compact UI) */}
        <div className="mt-20 pt-10 border-t border-gray-100">
           <h3 className={h3Style}>Other Recent Updates</h3>
           <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mt-6">
              {[
                "Annual General Meeting (AGM) 2026 Schedule",
                "New Membership Benefits & Health Insurance Draft",
                "Export-Import Advisory: Raw Material Procurement",
                "Revised Safety Protocols for Spinning Mills"
              ].map((text, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-gray-50 pb-3 hover:border-[#ef3e32] transition-colors">
                   <p className="text-[16px] font-bold text-gray-700 group-hover:text-black">{text}</p>
                   <ArrowRight size={16} className="text-gray-300 group-hover:text-[#ef3e32]" />
                </div>
              ))}
           </div>
        </div>

      </div>

   
    </div>
  );
};

export default CircularPage;