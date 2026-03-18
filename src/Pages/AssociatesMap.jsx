import React from "react";
import { MapPin, Globe, ArrowRight, ShieldCheck, Factory } from "lucide-react";

export default function AssociatesMap() {
  // Styles for consistency
  const h3Style = "text-[11px] font-black uppercase tracking-[0.4em] text-[#ef3e32] mb-3 flex items-center gap-2";

  return (
    <div className="bg-white font-sans text-gray-900 pb-20 overflow-hidden">
      
      {/* 1. COMPACT INDUSTRIAL BANNER */}
      <section className="relative h-[240px] bg-gray-900 text-white flex items-center overflow-hidden border-b-4 border-[#ef3e32]">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ef3e32 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
        
        {/* Red Accent Geometry */}
        <div className="absolute right-0 top-0 bottom-0 w-1/5 bg-[#ef3e32] transform translate-x-10 skew-x-12 opacity-90"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="text-[#ef3e32]" size={24} />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ef3e32]">National Presence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-1">
            Textile <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 italic">Associates</span>
          </h1>
          <p className="text-gray-400 text-[18px] font-medium">Strategic network of trusted textile hubs across India.</p>
        </div>
      </section>

      {/* 2. MAP SECTION (Enhanced Layout) */}
      <main className="max-w-7xl mx-auto px-6 py-12 relative">
        
        {/* Background Decorative Text */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-50 text-[150px] font-black uppercase tracking-tighter select-none -z-10 opacity-60">
           NETWORK
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: INFO & LEGEND */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h3 className={h3Style}><Factory size={18} /> Supply Chain</h3>
              <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 leading-tight mb-4">
                Our Strategic <br /> Textile Hubs
              </h2>
              <p className="text-[18px] text-gray-600 leading-snug">
                Bringing the finest silk, linen, rayon, and polyfabrics through a vetted network of industry leaders.
              </p>
            </div>

            {/* QUICK LEGEND */}
            <div className="space-y-4 border-l-2 border-gray-100 pl-6">
               <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#ef3e32]"></div>
                  <span className="text-[12px] font-bold uppercase tracking-widest text-gray-400">Regional Associate</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-gray-900 border-2 border-[#ef3e32]"></div>
                  <span className="text-[12px] font-black uppercase tracking-widest text-gray-900">HC Parekh HQ</span>
               </div>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-[#ef3e32]">
               <ShieldCheck className="mb-3 text-[#ef3e32]" size={32} />
               <p className="text-sm font-bold text-gray-900 uppercase tracking-widest">Quality Guaranteed</p>
               <p className="text-xs text-gray-500 mt-1 uppercase">Every associate follows strict PTC procurement standards.</p>
            </div>
          </div>

          {/* RIGHT: THE INDIA MAP */}
          <div className="lg:col-span-8  border-gray-100 shadow-2xl p-4 md:p-8 relative">
            <div className="w-full aspect-[4/5] relative rounded-sm border border-gray-50 overflow-hidden">
              
              {/* India Map Image */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/India-map-en.svg/1280px-India-map-en.svg.png"
                alt="India map"
                className="absolute inset-0 w-full h-full object-contain"
              />

              {/* SVG Pins Layer */}
              <svg
                viewBox="0 0 1280 1500"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Custom Red Pins for Hubs */}
                {[
                  { x: 320, y: 620, label: "Surat Hub" },
                  { x: 380, y: 740, label: "Mumbai Silk" },
                  { x: 480, y: 680, label: "Indore Rayon" },
                  { x: 620, y: 960, label: "Bengaluru e-Trade" },
                  { x: 680, y: 1100, label: "Chennai Poly" },
                  { x: 540, y: 1180, label: "Kochi Chamber" },
                  { x: 880, y: 620, label: "Kolkata Linen" },
                ].map((pin, i) => (
                  <g key={i} transform={`translate(${pin.x}, ${pin.y})`} className="cursor-pointer group">
                    <circle cx="0" cy="0" r="14" fill="#ef3e32" className="group-hover:scale-125 transition-transform" />
                    <circle cx="0" cy="0" r="6" fill="white" />
                    <text x="22" y="6" fill="#111" fontSize="16" fontWeight="900" className="uppercase tracking-tighter">{pin.label}</text>
                  </g>
                ))}

                {/* Central HQ - HC Parekh */}
                <g transform="translate(580, 740)">
                  <circle cx="0" cy="0" r="24" fill="#111" stroke="#ef3e32" strokeWidth="4" />
                  <MapPin cx="0" cy="0" size={24} className="text-[#ef3e32]" />
                  <text x="32" y="8" fill="#ef3e32" fontSize="20" fontWeight="900" className="uppercase tracking-tighter">HC Parekh HQ</text>
                </g>
              </svg>
            </div>
            
            <div className="mt-6 flex justify-between items-center px-2">
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Map Scale: 1:20,000,000</p>
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ef3e32]">Last Updated: March 2026</p>
            </div>
          </div>
        </div>

        {/* 3. CTA SECTION */}
        <div className="mt-20 text-center">
           <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-gray-950 p-8 shadow-2xl">
              <p className="text-[18px] text-gray-300 font-medium italic">Partner with us to explore premium nationwide textile networks.</p>
              <a
                href="mailto:hemant.parekh2012@gmail.com"
                className="bg-[#ef3e32] text-white px-10 py-5 font-black text-xs uppercase tracking-[0.4em] flex items-center gap-4 hover:bg-white hover:text-black transition-all"
              >
                Get in Touch <ArrowRight size={18} />
              </a>
           </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em] border-t border-gray-100">
         © 2026 HC Parekh & Associates • Industrial Authority Since 2007
      </footer>
    </div>
  );
}