import React from "react";
import { 
  FileEdit, 
  Upload, 
  Package, 
  IndianRupee, 
  ClipboardCheck, 
  ShieldCheck, 
  Send, 
  Eye,
  Landmark,
  Layers
} from "lucide-react";

const EQuotationForm = () => {
  const inputStyle = "w-full bg-white border border-gray-300 px-5 py-4 text-[16px] focus:border-[#ef3e32] outline-none transition-all placeholder:text-gray-300 font-normal text-gray-800";
  const labelStyle = "block text-[17px] font-bold uppercase  text-gray-500 mb-3";

  return (
    <div className="bg-[#FAF9F6] font-sans pb-24">
      
      {/* 1. INSTITUTIONAL BANNER */}
      <section className="relative h-[450px] bg-gray-900 text-white flex items-center overflow-hidden">
        {/* Abstract Texture Background */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://media.istockphoto.com/id/116924847/photo/textile-factory.jpg?s=612x612&w=0&k=20&c=2_lvHGeqMNoh6G7weYIgFQyDTiDU_1rdfsshfjQgr4w=" 
            alt="Quotation Background" 
            className="w-full h-full object-cover grayscale blur-[1px]"
          />
        </div>
        
        {/* Chamber Red Accent Overlays */}
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-[#ef3e32] transform translate-x-24 -skew-x-12 opacity-90"></div>
        <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 h-[60%] w-2 bg-[#ef3e32]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
            <Layers className="text-[#ef3e32]" size={28} />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ef3e32]">Procurement Portal</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Submit Your <br />
            <span className="text-[#ef3e32]">e-Quotation</span>
          </h1>
          <p className="max-w-xl text-gray-300 text-[17px] leading-relaxed font-medium">
            Provide detailed pricing and technical specifications for textile machinery, 
            fabrics, or consultancy services to the Parekh Textile of Chamber.
          </p>
        </div>
      </section>

      {/* 2. E-QUOTATION FORM SECTION */}
      <div className="max-w-5xl mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-white shadow-2xl border border-gray-100 overflow-hidden">
          
          <form className="p-10 md:p-16 space-y-12">
            
            {/* SECTION 1: VENDOR / APPLICANT */}
            <div className="grid md:grid-cols-2 gap-10">
              <div className="md:col-span-2 border-l-4 border-[#ef3e32] pl-4">
                 <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900" >Vendor Information</h3>
                 <p className="text-[14px] text-gray-400 font-medium uppercase tracking-widest mt-1" style={{fontSize:'17px'}}>Company Credentials</p>
              </div>
              <div>
                <label className={labelStyle}>Name of the Applicant</label>
                <input type="text" className={inputStyle} placeholder="Full Legal Name" />
              </div>
              <div>
                <label className={labelStyle}>Business Title</label>
                <input type="text" className={inputStyle} placeholder="Company / Firm Name" />
              </div>
              <div>
                <label className={labelStyle}>Mobile Number</label>
                <input type="tel" className={inputStyle} placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label className={labelStyle}>Email Address</label>
                <input type="email" className={inputStyle} placeholder="quotes@company.com" />
              </div>
            </div>

            {/* SECTION 2: QUOTATION DETAILS */}
            <div className="grid md:grid-cols-2 gap-10 pt-4">
              <div className="md:col-span-2 border-l-4 border-gray-900 pl-4">
                 <h3 className="text-xl font-black uppercase tracking-tight text-gray-900">Quotation Specifics</h3>
                 <p className="text-[17px] text-gray-400 font-medium uppercase tracking-widest mt-1">Service & Pricing Details</p>
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>Nature of Business / Service</label>
                <select className={inputStyle}>
                   <option>Textile & Garments</option>
                   <option>Pulp & Paper Industry</option>
                   <option>Information Technology</option>
                   <option>Industrial Projects</option>
                   <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>Technical Specifications / Description</label>
                <textarea className={`${inputStyle} h-32`} placeholder="Describe the products or services being quoted..."></textarea>
              </div>
              <div>
                <label className={labelStyle}>Expected Payment Terms</label>
                <input type="text" className={inputStyle} placeholder="e.g., 50% Advance, 50% on Delivery" />
              </div>
              <div>
                <label className={labelStyle}>Estimated Timeline</label>
                <input type="text" className={inputStyle} placeholder="e.g., 15 Working Days" />
              </div>
            </div>

            {/* SECTION 3: DOCUMENT UPLOAD */}
            <div className="pt-4">
              <label className={labelStyle}>Upload Final Quotation (PDF Only)</label>
              <div className="border-2 border-dashed border-gray-200 p-12 text-center hover:border-[#ef3e32] transition-all cursor-pointer bg-gray-50 group">
                <Upload className="mx-auto text-gray-400 group-hover:text-[#ef3e32] mb-4 transition-colors" size={40} />
                <p className="text-[17px] font-bold text-gray-600">Click to upload your Detailed PDF Quotation</p>
                <p className="text-[13px] text-gray-400 mt-2 uppercase tracking-widest font-bold">Quotation must exclude 3rd Party & GST</p>
              </div>
            </div>

            {/* UNDERTAKING SECTION */}
            <div className="bg-[#1a1a1a] p-10 text-white relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ef3e32]"></div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="text-[#ef3e32]" size={30} />
                <h4 className="text-[#ef3e32] text-xl font-black uppercase ">Official Declaration</h4>
              </div>
              <p className="text-[17px] leading-relaxed text-gray-300 italic">
                "I hereby declare that the prices quoted above are true and competitive to the best of my 
                knowledge. All documents uploaded are authentic. I understand that the hiring process 
                involves a 3-round interview/technical review for final selection."
              </p>
              <div className="mt-8 flex items-center gap-4">
                 <input type="checkbox" className="w-5 h-5 accent-[#ef3e32] cursor-pointer" id="agree-quote" />
                 <label htmlFor="agree-quote" className="text-sm font-bold uppercase tracking-widest text-gray-400 cursor-pointer">I accept the terms and conditions</label>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col md:flex-row gap-6 pt-10">
                       <button type="button" className="flex-1 py-5 border-2 border-gray-900 font-black text-xl uppercase hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center gap-3">
                   Preview Quotation
                       </button>
                       <button type="submit" className="flex-1 py-5 bg-[#ef3e32] text-white font-black text-xl uppercase shadow-xl shadow-red-100 hover:bg-black transition-all flex items-center justify-center gap-3">
                         Submit Now <Send size={18} />
                       </button>
                     </div>
         
          </form>
          
          <div className="bg-gray-100 py-6 text-center">
             <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.5em]">HC Parekh & Associates • Procurement Division • Since 2007</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EQuotationForm;