import React from "react";
import {  Factory } from "lucide-react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Globe,
  MessageSquare,
  Send,
  Linkedin,
  Instagram
} from "lucide-react";

const ContactPage = () => {
  // Enhanced fonts – bigger & cleaner (same as previous enhancements)
  const labelStyle = "text-base md:text-lg font-bold uppercase tracking-wider text-orange-600 mb-4 block flex items-center gap-3";
  const inputStyle = "w-full bg-gray-50 border-b-2 border-gray-200 px-5 py-5 text-lg md:text-xl focus:border-orange-600 focus:bg-white outline-none transition-all placeholder:text-gray-400 font-medium mb-8 rounded-sm";

  return (
    <div className="bg-white font-sans text-gray-900 pb-16 md:pb-20">
      
      {/* Banner – unchanged */}
      <section className="relative h-[280px] md:h-[340px] bg-gray-900 text-white flex items-center overflow-hidden border-b-4 border-orange-600">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(#ea580c 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/4 md:w-1/5 bg-orange-600 transform translate-x-12 -skew-x-12 opacity-85"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
          <div className="flex items-center gap-3 mb-4">
            <Send className="text-orange-600" size={28} />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] text-orange-600">
              Communication Hub
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-tight mb-3">
            Contact <span className="text-gray-300 italic">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Have questions about textiles or partnerships? Our team is here to assist.
          </p>
        </div>
      </section>

      {/* Main Content – unchanged structure */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16 grid md:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Side */}
        <div className="md:col-span-4 space-y-12">
          
          {/* Address */}
          <div className="group">
            <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-5 flex items-center gap-3">
              <MapPin className="text-orange-600" size={26} /> Our Office
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-gray-100 pl-6 group-hover:border-orange-600 transition-colors">
              Parekh Textile Chamber, <br />
              Industrial Area, Sector-C, <br />
              Ujjain / Indore, MP — 456001
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-10">
            <div className="flex items-start gap-5">
              <div className="p-4 bg-gray-900 text-white rounded-md">
                <Phone size={24} />
              </div>
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-gray-400 block mb-2">Call Us</span>
                <p className="text-2xl md:text-3xl font-bold">+91 94250 XXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="p-4 bg-gray-900 text-white rounded-md">
                <Mail size={24} />
              </div>
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-gray-400 block mb-2">Email Us</span>
                <p className="text-xl md:text-2xl font-bold break-all">hemant.parekh2012@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="p-4 bg-gray-900 text-white rounded-md">
                <Clock size={24} />
              </div>
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-gray-400 block mb-2">Office Hours</span>
                <p className="text-2xl md:text-3xl font-bold">Mon — Sat: 10AM - 7PM</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="pt-10 border-t border-gray-100">
             <h3 className="text-sm md:text-base font-black uppercase tracking-[0.3em] text-gray-400 mb-5">Connect Digitally</h3>
             <div className="flex gap-8">
                <Linkedin className="hover:text-orange-600 cursor-pointer transition-colors" size={32} />
                <Instagram className="hover:text-orange-600 cursor-pointer transition-colors" size={32} />
                <Globe className="hover:text-orange-600 cursor-pointer transition-colors" size={32} />
             </div>
          </div>
        </div>

        {/* Right Side Form – unchanged */}
        <div className="md:col-span-8 bg-gray-50 p-8 md:p-12 rounded-sm border-t-4 border-gray-900">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-10">
            Send a <span className="text-orange-600">Message</span>
          </h2>
          
          <form className="grid md:grid-cols-2 gap-x-8 lg:gap-x-12">
            <div>
              <label className={labelStyle}>Your Name</label>
              <input type="text" placeholder="John Doe" className={inputStyle} required />
            </div>
            <div>
              <label className={labelStyle}>Contact Number</label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" className={inputStyle} required />
            </div>

            <div className="md:col-span-2">
              <label className={labelStyle}>Email Address</label>
              <input type="email" placeholder="john@business.com" className={inputStyle} required />
            </div>

            <div className="md:col-span-2">
              <label className={labelStyle}>
                <MessageSquare size={20} /> How can we help?
              </label>
              <textarea 
                rows={5} 
                placeholder="Briefly explain your requirement (e.g., Rate contract inquiry, Membership, etc.)" 
                className={`${inputStyle} resize-none min-h-[140px]`}
                required
              ></textarea>
            </div>

            <div className="md:col-span-2 mt-6">
              <button 
                type="submit" 
                className="bg-gray-900 text-white px-12 py-5 font-bold text-lg uppercase tracking-[0.2em] flex items-center gap-4 hover:bg-orange-600 transition-all shadow-lg w-full md:w-auto justify-center rounded-md"
              >
                Send Inquiry <ArrowRight size={22} />
              </button>
            </div>
          </form>
        </div>
      </div>

   <section className="w-full px-6 md:px-10 max-w-7xl mx-auto mt-10 relative">
        <div className="grid lg:grid-cols-12 gap-0 border-4 border-gray-900 shadow-2xl overflow-hidden group">
          
          {/* LEFT: THE MAP (Interactive & Grayscale by Default) */}
          <div className="lg:col-span-8 h-[400px] md:h-[600px] relative bg-gray-100">
            
            {/* Embedded Google Map (Interactive, Grayscale Filter) */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.55530352227!2d75.79381017415416!3d22.72396413247475!2m3!1f0!2f0!3f0!3m2!1i1024!2i778!4f13.1!3m3!1m2!1s0x3962fcad1b4106fd%3A0xe14f26e1d661c0e7!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1678123456789!5m2!1sen!2sin" 
              width="100%" 
              height="120%" 
              style={{ border: 0, filter: 'grayscale(1) contrast(1.1) invert(0)' }} 
              allowFullScreen="" 
              loading="lazy" 
              className="group-hover:grayscale-0 transition-all duration-1000"
            ></iframe>

            {/* Scale legend on map (Bottom Right) */}
            <div className="absolute bottom-4 right-4 bg-gray-900/60 text-white p-2 text-[10px] font-black uppercase tracking-widest backdrop-blur-sm shadow-xl">
               Industrial Hub • Madhya Pradesh
            </div>
          </div>

          {/* RIGHT: THE INFORMATION PANEL (Bold & Clean) */}
          <div className="lg:col-span-4 bg-gray-900 text-white p-10 md:p-16 flex flex-col justify-between border-l-8 border-orange-600 relative overflow-hidden">
             {/* Decorative Background Icon */}
             <div className="absolute -right-20 -bottom-20 text-white opacity-5 pointer-events-none">
                <Factory size={400} strokeWidth={0.5} />
             </div>

             <div className="relative z-10 space-y-10">
                <div className="flex justify-center md:justify-start">
                  <div className="p-4 bg-white text-gray-900 rounded-sm">
                    <MapPin size={32} />
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight text-center md:text-left">
                  Parik Textile <br /> <span className="text-transparent stroke-text italic" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>Chamber</span>
                </h3>

                <div className="space-y-3 pt-6 border-t border-white/10">
                  <p className="text-lg md:text-xl font-medium leading-snug">
                    Industrial Area, Sector-C, <br /> Ujjain / Indore Road
                  </p>
                  <p className="text-xs md:text-sm italic text-gray-500 uppercase tracking-widest">
                    Madhya Pradesh's Leading Textile Hub • Near Major Industrial Zones
                  </p>
                </div>
             </div>

             <button className="mt-16 bg-[#ef3e32] text-white px-8 py-4 font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4 hover:bg-white hover:text-black transition-all shadow-xl hover:translate-y-[-5px]">
                GET DIRECTIONS <ArrowRight size={16} />
             </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="text-center py-8 text-base md:text-lg font-semibold text-gray-400 uppercase tracking-wider border-t border-gray-200">
        Parekh Textile Chamber • Industrial Excellence Since 2007
      </footer>
    </div>
  );
};

export default ContactPage;