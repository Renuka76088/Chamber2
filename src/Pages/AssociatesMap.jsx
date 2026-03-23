import React from 'react';
import { MapPin, ArrowRight, ExternalLink } from 'lucide-react';

const AssociatesMap = () => {
  const regions = [
    { city: 'Varanasi', count: 45, desc: 'Known for exquisite Banarasi silk interwoven with intricate zari, our Varanasi associates represent centuries of heritage weaving.' },
    { city: 'Kanchipuram', count: 32, desc: 'The masters of heavy silk sarees with contrasting borders. Authentic temple motifs crafted with pure mulberry silk.' },
    { city: 'Mysore', count: 28, desc: 'Famous for the traditional Mysore silk crepe, prized for its luster, elegant drape, and minimalistic zari borders.' },
    { city: 'Bhagalpur', count: 18, desc: 'Home to the finest Tussar silk. Our associates here specialize in the rich, textured feel of raw silk.' },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/3 space-y-8 sticky top-32">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-[#333333] mb-4">Our Textile Associates</h1>
              <div className="w-16 h-1 bg-[#B79A63] mb-6 opacity-60"></div>
              <p className="text-lg text-[#5C4A2A]/80 font-light leading-relaxed">
                We are proud to partner with over 120 authentic weaving clusters across India. Together, we preserve the legacy of pure handloom silk.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#B79A63] flex items-center justify-center text-white shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-serif text-2xl text-[#333333]">PAN India</p>
                <p className="text-sm text-[#5C4A2A]/70">Trusted Network of Weavers</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regions.map((region, idx) => (
                <div key={idx} className="group glass-card p-8 rounded-3xl hover:shadow-xl hover:shadow-[#B79A63]/10 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute -bottom-8 -right-8 text-[120px] font-serif text-[#E6DBC4] opacity-20 group-hover:scale-110 transition-transform duration-500 leading-none">
                    {('0' + (idx + 1)).slice(-2)}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-serif text-[#333333]">{region.city}</h3>
                      <div className="px-3 py-1 rounded-full bg-[#F4EFE6] text-[#8C7345] text-xs font-bold font-sans">
                        {region.count} Associates
                      </div>
                    </div>
                    
                    <p className="text-[#5C4A2A]/70 font-light leading-relaxed mb-8 h-24">
                      {region.desc}
                    </p>
                    
                    <button className="flex items-center gap-2 text-[#8C7345] font-medium hover:text-[#5C4A2A] transition-colors group/btn">
                      View Directory
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#5C4A2A] to-[#8C7345] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <h3 className="text-2xl font-serif mb-2">Want to partner with us?</h3>
                <p className="text-[#E6DBC4] font-light text-sm max-w-md">
                  We are always looking to expand our family of authentic silk weavers. If you share our commitment to quality, reach out to us.
                </p>
              </div>
              <button className="whitespace-nowrap px-8 py-3 rounded-full bg-white text-[#5C4A2A] font-medium hover:bg-[#F4EFE6] transition-colors flex items-center gap-2 shadow-lg">
                Apply Now <ExternalLink size={16} />
              </button>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default AssociatesMap;