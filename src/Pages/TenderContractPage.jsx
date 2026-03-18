import React from "react";
import { 
  Scissors, Maximize2, Truck, CreditCard, 
  Calendar, Info, ArrowRight, Layers 
} from "lucide-react";

const TenderContractPage = () => {
  const pStyle = "text-[18px] text-gray-700 leading-snug font-normal mb-3";
  const h3Style = "text-[18px] font-black uppercase  text-[#ef3e32] mb-3 flex items-center gap-2";
  const labelStyle = "text-[17px] font-black uppercase  text-gray-400 block mb-1";

  return (
    <div className="bg-white font-sans text-gray-900 pb-10">
      
      {/* 1. COMPACT INDUSTRIAL BANNER */}
      <section className="relative h-[300px] bg-gray-900 text-white flex items-center overflow-hidden border-b-4 border-[#ef3e32]">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://media.istockphoto.com/id/668256882/photo/textile-mills.jpg?s=612x612&w=0&k=20&c=JcFaGVM5fojeRJISXuS-X_d9MdLBWCjQ8NHsAdIG-XY=" 
            alt="Textile" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-[#ef3e32] transform translate-x-20 -skew-x-12 opacity-90"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-3">
            Expression of <span className="text-[#ef3e32]">Interest</span>
          </h1>
          <p className="max-w-2xl text-gray-300 text-[18px] font-medium italic">
            Corporate Tenders: Textile Sector | Rate Contractual Work
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT - REDUCED SPACING */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        
        {/* WORK & QUANTITY SECTION */}
        <div className="grid md:grid-cols-2 gap-8 mb-10 border-b border-gray-100 pb-8">
          <div>
            <h3 className={h3Style}><Layers size={18}  style={{fontsize:'20px'}}/> Scope of Work</h3>
            <h2 className="text-2xl font-black uppercase text-gray-900 mb-2">Double Bedsheet & Pillowcover</h2>
            <p className={pStyle}>Stitching, Packing & Quality finishing for 30,000 Sets.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 bg-gray-50 p-5 border-l-4 border-gray-900">
             <div>
                <span className={labelStyle}>Total Sets</span>
                <p className="text-[18px] font-bold">30,000 Units</p>
             </div>
             <div>
                <span className={labelStyle}>Tenure</span>
                <p className="text-[18px] font-bold text-[#ef3e32]">01 Year</p>
             </div>
          </div>
        </div>

        {/* SPECS & DIMENSIONS SECTION */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="md:col-span-1">
            <h3 className={h3Style}><Maximize2 size={16} /> Dimensions</h3>
            <div className="space-y-2 bg-white border border-gray-200 p-4">
               <p className="flex justify-between text-[16px] border-b pb-1"><span>Bedsheets</span> <b>90” x 100”</b></p>
               <p className="flex justify-between text-[16px] border-b pb-1"><span>Pillowcover</span> <b>18” x 24”</b></p>
               <p className="flex justify-between text-[16px]"><span>Inner Lid</span> <b>6”</b></p>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className={h3Style}><Scissors size={16} /> Technical details</h3>
            <div className="grid md:grid-cols-2 gap-x-8">
               <p className={pStyle}>• <b>Stitching:</b> Double lined Simple or Single zigzag.</p>
               <p className={pStyle}>• <b>Thread:</b> Moon Brand (or equivalent).</p>
               <p className={pStyle}>• <b>Fabric:</b> Pure Fine Cotton, 144 TC (Supplied).</p>
               <p className={pStyle}>• <b>Box:</b> 3-Ply Laminated (14”x11”x1.5“).</p>
            </div>
          </div>
        </div>

        {/* LOGISTICS & COMMERCIALS - COMPACT BOX */}
        <div className="bg-gray-900 text-white p-8 mb-10 grid md:grid-cols-2 gap-8">
           <div className="flex gap-4">
              <Truck className="text-[#ef3e32] shrink-0" size={24} />
              <div>
                 <h4 className="text-[12px] font-bold uppercase text-gray-400 mb-1">Logistics</h4>
                 <p className="text-[17px] leading-tight">Company covers Transporters. Local by Agency.</p>
              </div>
           </div>
           <div className="flex gap-4 border-l border-gray-700 pl-8">
              <CreditCard className="text-[#ef3e32] shrink-0" size={24} />
              <div>
                 <h4 className="text-[12px] font-bold uppercase text-gray-400 mb-1">Payment</h4>
                 <p className="text-[17px] leading-tight">50% Advance | 50% on Inspection & L.R.</p>
              </div>
           </div>
        </div>

        {/* SCHEDULE & CTA - MINIMALIST */}
        <div className="grid md:grid-cols-4 gap-4 border-t border-gray-100 pt-8 mb-10">
           {[
             { l: "Issuance", d: "In Progress" },
             { l: "Closing", d: "TBD" },
             { l: "Submission", d: "See Document" },
             { l: "Opening", d: "Tentative" }
           ].map((e, i) => (
             <div key={i} className="bg-gray-50 p-4 border-b-2 border-transparent hover:border-[#ef3e32] transition-all">
                <span className={labelStyle}>{e.l}</span>
                <p className="text-[16px] font-bold">{e.d}</p>
             </div>
           ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-gray-900 p-6">
           <div className="flex gap-4 items-center">
              <Info className="text-[#ef3e32]" size={28} />
              <p className="text-[17px] font-medium">Tender Documents available <b>In-Person</b> (Prescribed Fee).</p>
           </div>
           <button className="bg-[#ef3e32] text-white px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-black transition-all flex items-center gap-3">
              Apply Now <ArrowRight size={16} />
           </button>
        </div>

      </div>

    
    </div>
  );
};

export default TenderContractPage;