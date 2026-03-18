import React from "react";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  Briefcase,
  ChevronRight,
} from "lucide-react";

const AppointmentPage = () => {
  // Enhanced styles - bigger fonts, better spacing & readability
  const labelStyle =
    "text-sm md:text-base font-bold uppercase tracking-wider text-chamber-orange mb-3 block flex items-center gap-2";
  const inputStyle =
    "w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-4 text-base md:text-lg focus:border-chamber-orange focus:bg-white outline-none transition-all placeholder:text-gray-400 font-medium mb-6 rounded-sm";

  return (
    <div className="bg-white font-sans text-gray-900 pb-16 md:pb-20">
      {/* 1. COMPACT APPOINTMENT BANNER - Slightly taller for impact */}
      <section className="relative h-[280px] md:h-[340px] bg-gray-900 text-white flex items-center overflow-hidden border-b-4 border-chamber-orange">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(#ea580c 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/4 md:w-1/5 bg-chamber-orange transform translate-x-12 -skew-x-12 opacity-85"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="text-chamber-orange" size={28} />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] text-chamber-orange">
              Consultation Desk
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-tight mb-3">
            Book an <span className="text-gray-300 italic">Appointment</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Schedule a meeting with our textile experts — in-person or virtual.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16 grid md:grid-cols-12 gap-12 lg:gap-16">
        {/* LEFT SIDE: INFO & GUIDELINES */}
        <div className="md:col-span-4 space-y-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-5 border-l-4 border-chamber-orange pl-5">
              Visit Our Office
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Parik Textile Chamber, <br />
              Industrial Area, Indore / Ujjain, <br />
              Madhya Pradesh - 452001 / 456001
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-5 group">
              <div className="p-4 bg-gray-900 text-white rounded-md group-hover:bg-chamber-orange transition-colors duration-300">
                <Clock size={24} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-gray-500 block mb-1">
                  Working Hours
                </span>
                <p className="text-xl md:text-2xl font-bold text-gray-900">
                  10:00 AM — 07:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="p-4 bg-gray-900 text-white rounded-md group-hover:bg-chamber-orange transition-colors duration-300">
                <Briefcase size={24} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-gray-500 block mb-1">
                  Consultation
                </span>
                <p className="text-xl md:text-2xl font-bold text-gray-900">
                  Professional Rates Apply
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: FORM - Bigger & cleaner */}
        <div className="md:col-span-8">
          <form className="grid md:grid-cols-2 gap-x-8 text-orange-600 lg:gap-x-12">
            {/* Full Name */}
            <div className="md:col-span-2">
              <label className={labelStyle}>
                <User size={18} /> Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className={inputStyle}
                required
              />
            </div>

            {/* Email & Phone */}
            <div>
              <label className={labelStyle}>
                <Mail size={18} /> Email Address
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className={inputStyle}
                required
              />
            </div>
            <div>
              <label className={labelStyle}>
                <Phone size={18} /> Contact Number
              </label>
              <input
                type="tel"
                placeholder="+91 98260 XXXXXX"
                className={inputStyle}
                required
              />
            </div>

            {/* Date & Service Type */}
            <div>
              <label className={labelStyle}>
                <Calendar size={18} /> Preferred Date
              </label>
              <input type="date" className={inputStyle} required />
            </div>
            <div>
              <label className={labelStyle}>
                <ChevronRight size={18} /> Service Required
              </label>
              <select className={inputStyle}>
                <option value="">Select service</option>
                <option>Textile Consultation</option>
                <option>Rate Contract Discussion</option>
                <option>Fabric Sampling & Testing</option>
                <option>New Membership / Agency Registration</option>
                <option>Policy & Government Scheme Guidance</option>
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className={labelStyle}>
                <MessageSquare size={18} /> Additional Notes / Requirements
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your business needs, preferred time, or any specific query..."
                className={`${inputStyle} resize-y min-h-[120px]`}
              ></textarea>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 mt-6">
              <button
                type="submit"
                className="bg-chamber-orange text-white bg-black px-10 py-5 font-bold text-base md:text-lg uppercase tracking-wide flex items-center gap-4 hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl rounded-md"
              >
                Confirm Appointment <ArrowRight size={20} />
              </button>
              <p className="mt-5 text-sm md:text-base font-medium text-gray-500">
                * Our team will confirm your slot within 24 hours via call or email.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center py-8 text-sm md:text-base font-semibold text-gray-400 uppercase tracking-wider border-t border-gray-200">
        Parik Textile Chamber • Madhya Pradesh • Excellence in Service
      </footer>
    </div>
  );
};

export default AppointmentPage;