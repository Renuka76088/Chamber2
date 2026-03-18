import React from "react";
import { 
  FileText, 
  Upload, 
  User, 
  Building2, 
  Phone, 
  Mail, 
  Globe, 
  ShieldCheck, 
  Eye, 
  Send,
  Landmark
} from "lucide-react";

const TradeEnquiryForm = () => {
  const inputStyle = "w-full bg-white border border-gray-300 px-5 py-4 text-[17px] focus:border-[#ef3e32] outline-none transition-all placeholder:text-gray-300 font-normal text-gray-800";
  const labelStyle = "block text-[17px] font-bold uppercase text-gray-500 mb-3";

  return (
    <div className="bg-[#FAF9F6] font-sans pb-24">
      
      {/* 1. MANAGEMENT STYLE BANNER */}
      <section className="relative h-[450px] bg-gray-900 text-white flex items-center overflow-hidden">
        {/* Boardroom Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" 
            alt="Boardroom Background" 
            className="w-full h-full object-cover blur-[2px]"
          />
        </div>
        
        {/* Red Accent Overlays - Sharp Corners (Same as Management) */}
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-[#ef3e32] transform translate-x-24 -skew-x-12 opacity-90"></div>
        <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 h-[60%] w-2 bg-[#ef3e32]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
            <Landmark className="text-[#ef3e32]" size={28} />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ef3e32]">Official e-Portal</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Apply for <br />
            <span className="text-[#ef3e32]">Membership</span>
          </h1>
          <p className="max-w-xl text-gray-300 text-[17px] leading-relaxed font-medium">
            Register your business with the Parekh Textile of Chamber to access 
            global trade networks, industrial tenders, and professional consultancy.
          </p>
        </div>
      </section>

      {/* 2. FORM SECTION */}
      <div className="max-w-5xl mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-white shadow-2xl border border-gray-100 overflow-hidden">
          
          <form className="p-10 md:p-16 space-y-12">
            
            {/* SECTION: OFFICIAL */}
            <div className="grid md:grid-cols-2 gap-10">
              <div className="md:col-span-2 border-l-4 border-[#ef3e32] pl-4">
                 <h1 className="font-black uppercase text-gray-900" style={{fontsize:'30px'}}>Official Authorization</h1>
                 <p className="text-[14px] text-gray-400 font-medium uppercase tracking-widest mt-1" style={{fontsize:'17px'}}>For Chamber Records Only</p>
              </div>
              <div>
                <label className={labelStyle}>Authorized Official Name</label>
                <input type="text" className={inputStyle} placeholder="Enter Name" />
              </div>
              <div>
                <label className={labelStyle}>Official Code No.</label>
                <input type="text" className={inputStyle} placeholder="CHB-XXXX" />
              </div>
            </div>

            {/* SECTION: BUSINESS DETAILS */}
            <div className="grid md:grid-cols-2 gap-10 pt-4">
              <div className="md:col-span-2 border-l-4 border-gray-900 pl-4">
                 <h3 className="text-lg font-black uppercase tracking-tight text-gray-900" style={{fontsize:'17px'}}>Business Credentials</h3>
                 <p className="text-[14px] text-gray-400 font-medium uppercase tracking-widest mt-1">Applicant Information</p>
              </div>
              <div>
                <label className={labelStyle}>Name of the Applicant</label>
                <input type="text" className={inputStyle} placeholder="Full Legal Name" />
              </div>
              <div>
                <label className={labelStyle}>Title of the Textile Business</label>
                <input type="text" className={inputStyle} placeholder="Company / Firm Name" />
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>Address of the Business</label>
                <textarea className={`${inputStyle} h-32`} placeholder="Complete Address"></textarea>
              </div>
              <div>
                <label className={labelStyle}>Mobile Number</label>
                <input type="tel" className={inputStyle} placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label className={labelStyle}>Official Email Id</label>
                <input type="email" className={inputStyle} placeholder="email@company.com" />
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>Nature of Business</label>
                <select className={inputStyle}>
                   <option>Retailer</option>
                   <option>Wholesaler</option>
                   <option>Manufacturer</option>
                   <option>Others</option>
                </select>
              </div>
            </div>

            {/* SECTION: UPLOAD */}
            <div className="pt-4">
              <label className={labelStyle}>Upload Document (GST, MSME, CIN, etc.)</label>
              <div className="border-2 border-dashed border-gray-200 p-12 text-center hover:border-[#ef3e32] transition-all cursor-pointer bg-gray-50">
                <Upload className="mx-auto text-gray-400 mb-4" size={40} />
                <p className="text-[17px] font-bold text-gray-600">Select files to upload or drag & drop</p>
                <p className="text-[13px] text-gray-400 mt-2 uppercase tracking-widest font-bold">Max File Size: 5MB (PDF/JPG)</p>
              </div>
            </div>

            {/* UNDERTAKING SECTION */}
            <div className="bg-[#1a1a1a] p-10 text-white relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ef3e32]"></div>
              <h4 className="text-[#ef3e32] font-black uppercase mb-4"style={{fontsize:'40px'}}>Official Undertaking</h4>
              <p className="text-[17px] leading-relaxed text-gray-300 italic">
                "I have read the Terms & Conditions of subscription for the membership in the Chamber of Textile. 
                All the information provided by me and the documents uploaded thereof are true and authentic 
                to the best of my knowledge and belief."
              </p>
              <div className="mt-8 flex items-center gap-4">
                 <input type="checkbox" className="w-5 h-5 accent-[#ef3e32]" id="terms" />
                 <label htmlFor="terms" className="text-sm font-bold uppercase  text-gray-400" style={{fontsize:'20px'}}>I Agree to the Terms</label>
              </div>
            </div>

            {/* SUBMIT BUTTONS */}
            <div className="flex flex-col md:flex-row gap-6 pt-10">
              <button className="flex-1 py-5 border-2 border-gray-900 font-black text-xs uppercase tracking-[0.3em] hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center gap-3">
                <Eye size={18} /> Preview Form
              </button>
              <button className="flex-1 py-5 bg-[#ef3e32] text-white font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-red-100 hover:bg-black transition-all flex items-center justify-center gap-3">
                Submit Application <Send size={18} />
              </button>
            </div>

          </form>
          
          <div className="bg-gray-100 py-6 text-center">
             <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.5em]">Parekh Textile Of Chamber • Industrial Authority</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeEnquiryForm;