import React from 'react';

const Appointment = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif text-[#5C4A2A] mb-6">Schedule a Visit</h1>
          <p className="text-[#8C7345] text-lg">
            Experience the texture and luster of our silk in person. Book an appointment to 
            visit our galleries, manufacturing units, or corporate office.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-[#E6DBC4]/50 border border-[#E6DBC4]/30">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#5C4A2A] mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-[#E6DBC4] focus:ring-2 focus:ring-[#B79A63] focus:border-transparent outline-none transition-all" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5C4A2A] mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-[#E6DBC4] focus:ring-2 focus:ring-[#B79A63] focus:border-transparent outline-none transition-all" placeholder="hello@example.com" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#5C4A2A] mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-[#E6DBC4] focus:ring-2 focus:ring-[#B79A63] focus:border-transparent outline-none transition-all" placeholder="+1 (234) 567-8900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5C4A2A] mb-2">Preferred Date</label>
                <input type="date" className="w-full px-4 py-3 rounded-xl border border-[#E6DBC4] focus:ring-2 focus:ring-[#B79A63] focus:border-transparent outline-none transition-all text-[#5C4A2A]" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#5C4A2A] mb-2">Purpose of Visit</label>
              <select className="w-full px-4 py-3 rounded-xl border border-[#E6DBC4] focus:ring-2 focus:ring-[#B79A63] focus:border-transparent outline-none transition-all text-[#5C4A2A] bg-white appearance-none">
                <option value="">Select an option</option>
                <option value="purchasing">Bulk Purchasing Inquiry</option>
                <option value="partnership">Business Partnership</option>
                <option value="factory_tour">Factory / Loom Tour</option>
                <option value="media">Media & Press</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#5C4A2A] mb-2">Additional Information</label>
              <textarea rows="3" className="w-full px-4 py-3 rounded-xl border border-[#E6DBC4] focus:ring-2 focus:ring-[#B79A63] focus:border-transparent outline-none transition-all resize-none" placeholder="Any specific requirements or products you wish to see?"></textarea>
            </div>

            <button type="button" className="w-full py-4 bg-[#5C4A2A] hover:bg-[#8C7345] text-white rounded-xl font-medium transition-colors shadow-lg shadow-[#5C4A2A]/20">
              Request Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
