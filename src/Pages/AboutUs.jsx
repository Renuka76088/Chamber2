import React from "react";
import { 
  History, 
  Target, 
  Award, 
  Users, 
  TrendingUp, 
  Quote,
  ArrowRight,
  ShieldCheck,
  Globe,
  Briefcase
} from "lucide-react";

const AboutUs = () => {
  // Clean & medium font styles
  const sectionTitleStyle = "text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-6";
  const bodyTextStyle = "text-lg md:text-xl text-gray-700 leading-relaxed font-normal";
  const accentRed = "#ef3e32";

  return (
    <div className="bg-[#FAF9F6] font-sans text-gray-900 pb-16 md:pb-20">
      
      {/* 1. INSTITUTIONAL BANNER – compact & clean */}
      <section className="relative h-[400px] md:h-[480px] bg-gray-900 text-white flex items-center overflow-hidden border-b-4 border-[#ef3e32]">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1350&q=80" 
            alt="Textile Legacy" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-[#ef3e32] transform translate-x-16 -skew-x-12 opacity-85"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
          <div className="flex items-center gap-3 mb-4">
            <History className="text-[#ef3e32]" size={28} />
            <span className="text-sm font-semibold uppercase tracking-wider text-[#ef3e32]">
              Established 2007
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-tight mb-4">
            Institutional <br />
            <span className="text-[#ef3e32] italic font-medium">Excellence</span>
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed">
            Building the foundation of Central India's textile future through authority, 
            quality benchmarking, and ethical trade leadership.
          </p>
        </div>
      </section>

      {/* 2. CORE IDENTITY SECTION */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 md:-mt-16 relative z-20">
        <div className="bg-white shadow-xl p-8 md:p-12 lg:p-16 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start rounded-lg">
          
          {/* Left: The Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block border-l-4 border-[#ef3e32] pl-5">
              <h2 className={sectionTitleStyle}>Legacy of <br /> <span className="text-[#ef3e32]">Parekh Chamber</span></h2>
            </div>
            <p className="text-2xl md:text-3xl font-medium text-gray-500 italic leading-tight">
              "We define the standards that drive the textile economy of Madhya Pradesh."
            </p>
            <div className={bodyTextStyle}>
              <p className="mb-5">
                Founded by <strong>Hemant Parekh</strong>, Parekh Textile Chamber (PTC) has become 
                the most influential trade authority in the Indore and Ujjain industrial belt. 
                With a strong network of <strong>500+ associate members</strong>, we bridge 
                traditional weaving units with global procurement standards.
              </p>
              <p>
                Our institutional framework ensures every thread produced and every machinery 
                procured under our advisory meets the highest benchmarks of quality and efficiency.
              </p>
            </div>
            
            {/* Signature */}
            <div className="pt-6 border-t border-gray-200 flex items-center gap-5">
              <div className="h-14 w-14 bg-gray-900 rounded-full flex items-center justify-center text-white">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="text-xl font-semibold">Hemant Parekh</p>
                <p className="text-sm font-medium text-[#ef3e32] uppercase tracking-wide">Chief Executive Officer</p>
              </div>
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="lg:col-span-5">
            <div className="bg-[#1a1a1a] text-white p-8 md:p-10 rounded-lg relative overflow-hidden group">
              <div className="absolute right-[-40px] top-[-40px] opacity-5 group-hover:rotate-12 transition-transform">
                <Globe size={180} />
              </div>
              <h4 className="text-[#ef3e32] font-semibold uppercase tracking-wider text-sm mb-6">Market Influence</h4>
              <ul className="space-y-5 text-base font-medium">
                <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="text-[#ef3e32] font-bold">01.</span> ISO Certified Audits
                </li>
                <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="text-[#ef3e32] font-bold">02.</span> Industrial Rate Contracts
                </li>
                <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="text-[#ef3e32] font-bold">03.</span> Dispute Arbitration
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-[#ef3e32] font-bold">04.</span> Global Export Advisory
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white p-10 md:p-12 border-b-4 border-[#ef3e32] shadow-lg rounded-lg relative group">
            <Target className="text-gray-200 absolute right-6 top-6 group-hover:text-[#ef3e32]/10 transition-colors" size={80} />
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-5 relative z-10">Our Mission</h3>
            <p className={`${bodyTextStyle} relative z-10 italic`}>
              To empower the textile ecosystem of Central India with cutting-edge technology, 
              fair trade practices, and international certification standards that eliminate middleman inefficiencies.
            </p>
          </div>
          <div className="bg-gray-900 p-10 md:p-12 border-b-4 border-[#ef3e32] shadow-lg text-white rounded-lg relative group">
            <TrendingUp className="text-white/5 absolute right-6 top-6 group-hover:text-[#ef3e32]/10 transition-colors" size={80} />
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-5 relative z-10 text-[#ef3e32]">Our Vision</h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium relative z-10 italic">
              To be the singular authority for textile data and procurement in Asia, 
              fostering a digital-first approach for traditional weaving and garment manufacturing hubs.
            </p>
          </div>
        </div>
      </section>

      {/* 4. STATISTICS */}
      <section className="bg-white py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <span className="block text-5xl md:text-6xl font-bold">19<span className="text-[#ef3e32]">Y</span></span>
            <span className="text-sm font-medium uppercase tracking-wide text-gray-500">Industry Experience</span>
          </div>
          <div className="space-y-2">
            <span className="block text-5xl md:text-6xl font-bold">500<span className="text-[#ef3e32]">+</span></span>
            <span className="text-sm font-medium uppercase tracking-wide text-gray-500">Trusted Partners</span>
          </div>
          <div className="space-y-2">
            <span className="block text-5xl md:text-6xl font-bold italic">ISO</span>
            <span className="text-sm font-medium uppercase tracking-wide text-gray-500">Audit Authority</span>
          </div>
          <div className="space-y-2">
            <span className="block text-5xl md:text-6xl font-bold">10<span className="text-[#ef3e32]">K</span></span>
            <span className="text-sm font-medium uppercase tracking-wide text-gray-500">Certified Units</span>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">
          Connect with the <span className="text-[#ef3e32] italic">Chamber Authority</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="px-10 py-5 bg-gray-900 text-white font-semibold text-base uppercase tracking-wide flex items-center justify-center gap-3 hover:bg-[#ef3e32] transition-all shadow-lg rounded-md">
            Membership Desk <ArrowRight size={18} />
          </button>
          <button className="px-10 py-5 border-2 border-gray-900 text-gray-900 font-semibold text-base uppercase tracking-wide flex items-center justify-center gap-3 hover:bg-gray-900 hover:text-white transition-all rounded-md">
            Procurement Hub <Briefcase size={18} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-gray-100 py-8 text-center border-t border-gray-200">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          HC Parekh & Associates • Industrial Intelligence • Excellence Since 2007
        </p>
      </div>
    </div>
  );
};

export default AboutUs;