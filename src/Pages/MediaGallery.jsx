import React from "react";
import { 
  Image as ImageIcon, 
  PlayCircle, 
  Maximize2, 
  Filter, 
  ArrowUpRight, 
  Layers,
  Camera
} from "lucide-react";

const MediaGallery = () => {
  const categories = ["All", "Manufacturing", "Events", "Fabrics", "Showroom"];

  const mediaItems = [
    { id: 1, type: "image", size: "col-span-2 row-span-2", url: "https://images.unsplash.com/photo-1610891015188-5369212db097?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRleHRpbGUlMjBpbmR1c3RyeSUyMG1lZGlhJTIwZXZlbnRzfGVufDB8fDB8fHww", title: "Industrial Weaving Unit" },
    { id: 2, type: "video", size: "col-span-1 row-span-1", url: "https://images.unsplash.com/photo-1757852636019-711d501cc50c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGV4dGlsZSUyMGluZHVzdHJ5JTIwbWVkaWElMjBldmVudHN8ZW58MHx8MHx8fDA%3D", title: "Fabric Quality Check" },
    { id: 3, type: "image", size: "col-span-1 row-span-2", url: "https://plus.unsplash.com/premium_photo-1683133556035-403d392ef900?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGV4dGlsZXxlbnwwfHwwfHx8MA%3D%3D", title: "Premium Pink Silk" },
    { id: 4, type: "image", size: "col-span-1 row-span-1", url: "https://media.istockphoto.com/id/1446459501/photo/young-man-working-in-a-block-printing-factory-in-jaipur-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=6qpSGpvuscPEznjgTvwi1UcuFqIxmbKONsrxKncvVwM=", title: "Showroom Display" },
    { id: 5, type: "image", size: "col-span-2 row-span-1", url: "https://media.istockphoto.com/id/1291183696/photo/workers-at-a-textile-factory-sewing-and-wearing-facemasks-during-the-pandemic.jpg?s=612x612&w=0&k=20&c=rFGRi0rbRcAEC6mTuQe24dybP0wMoBEumgfFS3HgLYg=", title: "Textile Chamber Event" },
  ];

  return (
    <div className="bg-white font-sans text-gray-900 pb-20">
      
      {/* 1. COMPACT GALLERY HEADER */}
      <section className="relative h-[220px] bg-gray-900 text-white flex items-center overflow-hidden border-b-4 border-[#ef3e32]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ef3e32 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/6 bg-[#ef3e32] transform translate-x-10 -skew-x-12 opacity-90"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex justify-between items-end pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Camera className="text-[#ef3e32]" size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ef3e32]">Visual Archive</span>
            </div>
            <h1 className="text-5xl font-black uppercase tracking-tighter leading-none">
              Media <span className="italic text-gray-400 font-light">Gallery</span>
            </h1>
          </div>
          
          {/* CATEGORY FILTER - COMPACT */}
          <div className="hidden md:flex gap-6 border-b border-gray-700 pb-2">
            {categories.map((cat, i) => (
              <button key={i} className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#ef3e32] transition-colors">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CREATIVE MASONRY GRID (Direct Screen) */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {mediaItems.map((item) => (
            <div 
              key={item.id} 
              className={`${item.size} relative group overflow-hidden bg-gray-100 border-2 border-transparent hover:border-gray-900 transition-all duration-500 cursor-pointer`}
            >
              {/* Image / Content */}
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover  group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />

              {/* OVERLAY - CREATIVE REVEAL */}
              <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/40 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                   <div className="flex justify-between items-end">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#ef3e32] mb-1 block">Parekh Fabrics</span>
                        <h3 className="text-white text-lg font-bold uppercase tracking-tight leading-none">{item.title}</h3>
                      </div>
                      <div className="p-3 bg-white text-gray-900">
                        {item.type === "video" ? <PlayCircle size={20} /> : <Maximize2 size={20} />}
                      </div>
                   </div>
                </div>
                
                {/* ICON INDICATOR */}
                <div className="absolute top-4 right-4 text-white opacity-100 group-hover:opacity-0 transition-opacity">
                   {item.type === "video" ? <PlayCircle size={24} /> : <ImageIcon size={24} />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION - COMPACT */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-gray-100 pt-8">
           <div className="flex gap-4 items-center">
              <Layers className="text-[#ef3e32]" size={28} />
              <p className="text-[18px] font-medium text-gray-700 italic">Exploring the legacy of textiles through 20 years of craftsmanship.</p>
           </div>
           <button className="bg-gray-900 text-white px-8 py-4 font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4 hover:bg-[#ef3e32] transition-all">
              Load More Media <ArrowUpRight size={16} />
           </button>
        </div>

      </div>

      <footer className="text-center py-6 text-[10px] font-bold text-gray-300 uppercase tracking-[0.4em]">
         Institutional Archives • PTC Visual Library 2026
      </footer>
    </div>
  );
};

export default MediaGallery;