import React from 'react';

const EQuotation = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif text-[#5C4A2A] mb-6">e-Quotation</h1>
          <p className="text-[#8C7345] text-lg">
            Request official quotations for your bulk silk requirements. Fill out the form below 
            and our team will get back to you with competitive pricing.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-[#E6DBC4]/50 border border-[#E6DBC4]/30">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#5C4A2A] mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-[#E6DBC4] focus:ring-2 focus:ring-[#B79A63] focus:border-transparent outline-none transition-all" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5C4A2A] mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-[#E6DBC4] focus:ring-2 focus:ring-[#B79A63] focus:border-transparent outline-none transition-all" placeholder="Doe" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#5C4A2A] mb-2">Company Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-[#E6DBC4] focus:ring-2 focus:ring-[#B79A63] focus:border-transparent outline-none transition-all" placeholder="Silk Traders Ltd." />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#5C4A2A] mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-[#E6DBC4] focus:ring-2 focus:ring-[#B79A63] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#5C4A2A] mb-2">Product Requirements</label>
              <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-[#E6DBC4] focus:ring-2 focus:ring-[#B79A63] focus:border-transparent outline-none transition-all resize-none" placeholder="Please specify silk type, quantity, and grade..."></textarea>
            </div>

            <button type="button" className="w-full py-4 bg-[#5C4A2A] hover:bg-[#8C7345] text-white rounded-xl font-medium transition-colors shadow-lg shadow-[#5C4A2A]/20">
              Submit Quotation Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EQuotation;
