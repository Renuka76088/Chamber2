import React from "react";
import { 
  Gavel, 
  Upload, 
  Hash, 
  Scale, 
  IndianRupee, 
  ShieldAlert, 
  Send, 
  Eye,
  Landmark,
  Hammer
} from "lucide-react";

const EAuctionForm = () => {
  const inputStyle = "w-full bg-white border border-gray-300 px-5 py-4 text-[16px] focus:border-[#ef3e32] outline-none transition-all placeholder:text-gray-300 font-normal text-gray-800";
  const labelStyle = "block text-[17px] font-bold uppercase text-gray-500 mb-3";

  return (
    <div className="bg-[#FAF9F6] font-sans pb-24">
      
      {/* 1. AUCTION STRATEGY BANNER */}
      <section className="relative h-[450px] bg-gray-900 text-white flex items-center overflow-hidden">
        {/* Abstract Auction/Industrial Background */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2000" 
            alt="Auction Background" 
            className="w-full h-full object-cover grayscale blur-[1px]"
          />
        </div>
        
        {/* Chamber Red Accent Overlays */}
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-[#ef3e32] transform translate-x-24 -skew-x-12 opacity-90"></div>
        <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 h-[60%] w-2 bg-[#ef3e32]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
            <Gavel className="text-[#ef3e32]" size={28} />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ef3e32]">Live e-Bidding Portal</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Participate in <br />
            <span className="text-[#ef3e32]">e-Auction</span>
          </h1>
          <p className="max-w-xl text-gray-300 text-[17px] leading-relaxed font-medium">
            Official platform for industrial asset bidding, textile machinery auctions, 
            and bulk material procurement under HC Parekh & Associates.
          </p>
        </div>
      </section>

      {/* 2. E-AUCTION FORM SECTION */}
      <div className="max-w-5xl mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-white shadow-2xl border border-gray-100 overflow-hidden">
          
          <form className="p-10 md:p-16 space-y-12">
            
            {/* SECTION 1: BIDDER IDENTIFICATION */}
            <div className="grid md:grid-cols-2 gap-10">
              <div className="md:col-span-2 border-l-4 border-[#ef3e32] pl-4">
                 <h3 className="text-2xl font-black uppercase text-gray-900" style={{fontSize:'20px'}}>Bidder Identification</h3>
                 <p className="text-[14px] text-gray-400 font-medium uppercase tracking-widest mt-1" style={{fontSize:'17px'}}>Official Registration Details</p>
              </div>
              <div>
                <label className={labelStyle}>Full Name of Bidder</label>
                <input type="text" className={inputStyle} placeholder="Individual or Company Representative" />
              </div>
              <div>
                <label className={labelStyle}>Company Registration No. (CIN/GST)</label>
                <input type="text" className={inputStyle} placeholder="Enter Legal ID" />
              </div>
              <div>
                <label className={labelStyle}>Mobile Number (OTP Verified)</label>
                <input type="tel" className={inputStyle} placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label className={labelStyle}>Email Address</label>
                <input type="email" className={inputStyle} placeholder="bidder@company.com" />
              </div>
            </div>

            {/* SECTION 2: AUCTION LOT DETAILS */}
            <div className="grid md:grid-cols-2 gap-10 pt-4">
              <div className="md:col-span-2 border-l-4 border-gray-900 pl-4">
                 <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900">Lot & Bidding Details</h3>
                 <p className="text-[14px] text-gray-400 font-medium uppercase tracking-widest mt-1"style={{fontSize:'17px'}}>Selection of Industrial Assets</p>
              </div>
              <div>
                <label className={labelStyle}>Auction Lot Number</label>
                <div className="relative">
                  <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                  <input type="text" className={`${inputStyle} pl-12`} placeholder="e.g. LOT-TX-2026" />
                </div>
              </div>
              <div>
                <label className={labelStyle}>Asset Category</label>
                <select className={inputStyle}>
                   <option>Textile Machinery</option>
                   <option>Raw Material / Cotton Bales</option>
                   <option>Industrial Real Estate</option>
                   <option>Office Infrastructure</option>
                   <option>Vehicles & Logistics</option>
                </select>
              </div>
              <div>
                <label className={labelStyle}>Initial Bid Amount (INR)</label>
                <div className="relative">
                  <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                  <input type="number" className={`${inputStyle} pl-12 font-bold text-[#ef3e32]`} placeholder="Enter Amount" />
                </div>
              </div>
              <div>
                <label className={labelStyle}>Security Deposit (EMD) Transaction ID</label>
                <input type="text" className={inputStyle} placeholder="UTR / Ref Number" />
              </div>
            </div>

            {/* SECTION 3: DOCUMENT SUBMISSION */}
            <div className="pt-4">
              <label className={labelStyle}>Upload KYC & Bank Guarantee (PDF Only)</label>
              <div className="border-2 border-dashed border-gray-200 p-12 text-center hover:border-[#ef3e32] transition-all cursor-pointer bg-gray-50 group">
                <Upload className="mx-auto text-gray-400 group-hover:text-[#ef3e32] mb-4 transition-colors" size={40} />
                <p className="text-[17px] font-bold text-gray-600">Upload Bid Security Documents</p>
                <p className="text-[13px] text-gray-400 mt-2 uppercase tracking-widest font-bold">Documents must be digitally signed</p>
              </div>
            </div>

            {/* AUCTION UNDERTAKING */}
            <div className="bg-[#1a1a1a] p-10 text-white relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ef3e32]"></div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert className="text-[#ef3e32]" size={30} />
                <h4 className="text-[#ef3e32] text-2xl font-black uppercase">Bidding Terms & Compliance</h4>
              </div>
              <p className="text-[17px] leading-relaxed text-gray-300 italic">
                "I acknowledge that this is a legally binding bid. I have reviewed the asset details 
                and terms of the e-Auction. I understand that the EMD is non-refundable if the 
                bid is successful but the contract is not executed. All provided data is authentic."
              </p>
              <div className="mt-8 flex items-center gap-4">
                 <input type="checkbox" className="w-5 h-5 accent-[#ef3e32] cursor-pointer" id="agree-bid" />
                 <label htmlFor="agree-bid" className="text-sm font-bold uppercase tracking-widest text-gray-400 cursor-pointer">I Accept the Bidding Terms</label>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col md:flex-row gap-6 pt-10">
              <button type="button" className="flex-1 py-5 border-2 border-gray-900 font-black text-xl uppercase hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center gap-3">
            View Lot Details
              </button>
              <button type="submit" className="flex-1 py-5 bg-[#ef3e32] text-white font-black text-xl uppercase shadow-xl shadow-red-100 hover:bg-black transition-all flex items-center justify-center gap-3">
                Submit Bid Now <Send size={18} />
              </button>
            </div>

          </form>
          
          <div className="bg-gray-100 py-6 text-center border-t">
             <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.5em]">Parekh Textile Chamber • Auction Authority • Since 2007</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EAuctionForm;