import React, { useState } from 'react';
import { PackageSearch, Calculator, Send } from 'lucide-react';

const TradeEnquiryForm = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen relative">
      <div className="absolute top-40 left-0 w-full h-[500px] bg-[#E6DBC4]/30 mix-blend-multiply filter blur-[100px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#333333] mb-4">Trade e-Enquiry</h1>
          <p className="text-[#5C4A2A]/80 font-light text-lg max-w-2xl mx-auto">
            Get personalized estimates for bulk orders, custom weaves, or retail partnerships. Let us know what you need, and our experts will craft a tailored proposal.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="flex justify-between items-center mb-12 relative max-w-xl mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#E6DBC4] -z-10 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 h-0.5 bg-[#B79A63] -z-10 -translate-y-1/2 transition-all duration-500" style={{ width: step === 1 ? '0%' : '100%' }}></div>
          
          <button onClick={() => setStep(1)} className="flex flex-col items-center gap-2 group">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${step >= 1 ? 'bg-[#5C4A2A] text-white shadow-lg shadow-[#5C4A2A]/30' : 'bg-white border-2 border-[#E6DBC4] text-[#8C7345]'}`}>
              <PackageSearch size={20} />
            </div>
            <span className={`text-sm font-medium ${step >= 1 ? 'text-[#333333]' : 'text-[#8C7345]'}`}>Details</span>
          </button>
          
          <button onClick={() => setStep(2)} className="flex flex-col items-center gap-2 group">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${step >= 2 ? 'bg-[#5C4A2A] text-white shadow-lg shadow-[#5C4A2A]/30' : 'bg-white border-2 border-[#E6DBC4] text-[#8C7345] group-hover:border-[#B79A63]'}`}>
              <Calculator size={20} />
            </div>
            <span className={`text-sm font-medium ${step >= 2 ? 'text-[#333333]' : 'text-[#8C7345]'}`}>Estimate</span>
          </button>
        </div>

        {/* Form Container */}
        <div className="glass-card rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4EFE6] rounded-bl-full z-0 opacity-50"></div>

          <div className="relative z-10 transition-all duration-500">
            {step === 1 ? (
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-2xl font-serif text-[#333333] mb-8">Tell us about your requirements</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#5C4A2A]">Fabric Type</label>
                    <select className="w-full px-4 py-3.5 rounded-xl bg-white/50 border border-[#D8C5A1] focus:ring-2 focus:ring-[#B79A63]/50 focus:border-[#B79A63] text-[#5C4A2A]">
                      <option>Pure Raw Silk</option>
                      <option>Banarasi Silk</option>
                      <option>Silk Organza</option>
                      <option>Crepe de Chine</option>
                      <option>Georgette</option>
                      <option>Other (Specify in notes)</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#5C4A2A]">Quantity (in Meters)</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 500" 
                      className="w-full px-4 py-3.5 rounded-xl bg-white/50 border border-[#D8C5A1] focus:ring-2 focus:ring-[#B79A63]/50 focus:border-[#B79A63]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#5C4A2A]">Color Palette / Dye Method</label>
                  <select className="w-full px-4 py-3.5 rounded-xl bg-white/50 border border-[#D8C5A1] focus:ring-2 focus:ring-[#B79A63]/50 focus:border-[#B79A63] text-[#5C4A2A]">
                    <option>Natural / Undyed</option>
                    <option>Custom Solid Colors</option>
                    <option>Ombre / Gradient Dye</option>
                    <option>Block Print Base</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#5C4A2A]">Additional Notes / Processing</label>
                  <textarea 
                    rows="4" 
                    placeholder="Any specific finishing required? Softened, stiffened, gold zari inclusion?" 
                    className="w-full px-4 py-3.5 rounded-xl bg-white/50 border border-[#D8C5A1] focus:ring-2 focus:ring-[#B79A63]/50 focus:border-[#B79A63] resize-none"
                  ></textarea>
                </div>

                <div className="pt-4 flex justify-end">
                  <button 
                    onClick={() => setStep(2)}
                    className="px-8 py-3.5 rounded-full bg-[#5C4A2A] text-white font-medium hover:bg-[#8C7345] transition-all duration-300 flex items-center gap-2"
                  >
                    Proceed to Contact Info
                    <Send size={16} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-2xl font-serif text-[#333333] mb-8">Where should we send the estimate?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#5C4A2A]">Full Name / Company Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3.5 rounded-xl bg-white/50 border border-[#D8C5A1] focus:ring-2 focus:ring-[#B79A63]/50 focus:border-[#B79A63]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#5C4A2A]">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="you@company.com" 
                      className="w-full px-4 py-3.5 rounded-xl bg-white/50 border border-[#D8C5A1] focus:ring-2 focus:ring-[#B79A63]/50 focus:border-[#B79A63]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#5C4A2A]">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 ___ ___ ____" 
                    className="w-full px-4 py-3.5 rounded-xl bg-white/50 border border-[#D8C5A1] focus:ring-2 focus:ring-[#B79A63]/50 focus:border-[#B79A63]"
                  />
                </div>
                
                <div className="bg-[#F4EFE6]/50 p-4 rounded-xl border border-[#D8C5A1]/30 flex gap-3 text-sm text-[#5C4A2A]">
                  <Calculator className="shrink-0 text-[#B79A63]" size={20} />
                  <p>Our sales team will analyze your requirements and send a detailed quotation along with approximate lead times within 24-48 business hours.</p>
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <button 
                    onClick={() => setStep(1)}
                    className="px-6 py-3.5 rounded-full text-[#5C4A2A] font-medium hover:bg-[#F4EFE6] transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    className="px-8 py-3.5 rounded-full bg-[#B79A63] hover:bg-[#8C7345] text-white font-medium transition-all duration-300 shadow-lg"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TradeEnquiryForm;