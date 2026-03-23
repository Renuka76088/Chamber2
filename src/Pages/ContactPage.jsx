import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen relative overflow-hidden">
      
      {/* Background soft shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E6DBC4]/40 rounded-full filter blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#333333] mb-4">Get In Touch</h1>
          <p className="text-[#5C4A2A]/80 font-light text-lg">
            Have questions about our fabrics or need assistance with a custom order? We are here to weave solutions for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#B79A63] rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F4EFE6] flex items-center justify-center shrink-0">
                  <MapPin className="text-[#8C7345]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#333333] mb-2">Our Boutique</h3>
                  <p className="text-[#5C4A2A]/70 font-light">123 Silk weavers lane,<br/>Heritage Textile District,<br/>Surat, Gujarat 395002</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#B79A63] rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F4EFE6] flex items-center justify-center shrink-0">
                  <Phone className="text-[#8C7345]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#333333] mb-2">Call Us</h3>
                  <p className="text-[#5C4A2A]/70 font-light">+91 98765 43210</p>
                  <p className="text-[#5C4A2A]/70 font-light text-sm mt-1">Mon-Sat: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#B79A63] rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F4EFE6] flex items-center justify-center shrink-0">
                  <Mail className="text-[#8C7345]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#333333] mb-2">Email Us</h3>
                  <p className="text-[#5C4A2A]/70 font-light">hello@serenitysilk.com</p>
                  <p className="text-[#5C4A2A]/70 font-light text-sm mt-1">We typically reply within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-[#D8C5A1]/30">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-[#5C4A2A] font-medium">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E6DBC4] focus:outline-none focus:ring-2 focus:ring-[#B79A63]/50 focus:border-[#B79A63] transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-[#5C4A2A] font-medium">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E6DBC4] focus:outline-none focus:ring-2 focus:ring-[#B79A63]/50 focus:border-[#B79A63] transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#5C4A2A] font-medium">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E6DBC4] focus:outline-none focus:ring-2 focus:ring-[#B79A63]/50 focus:border-[#B79A63] transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#5C4A2A] font-medium">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E6DBC4] focus:outline-none focus:ring-2 focus:ring-[#B79A63]/50 focus:border-[#B79A63] text-[#5C4A2A]">
                    <option>General Inquiry</option>
                    <option>Bulk Order Request</option>
                    <option>Custom Weave Request</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#5C4A2A] font-medium">Message</label>
                  <textarea 
                    rows="5" 
                    className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E6DBC4] focus:outline-none focus:ring-2 focus:ring-[#B79A63]/50 focus:border-[#B79A63] transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="w-full py-4 rounded-xl bg-[#5C4A2A] text-white font-medium hover:bg-[#8C7345] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;