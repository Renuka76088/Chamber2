import React from "react";
import { 
  ShieldCheck, 
  FileText, 
  Settings, 
  Gavel, 
  ArrowRight, 
  Plus, 
  Zap,
  Globe,
  PieChart
} from "lucide-react";

const ServicesPage = () => {
  // Simple, clean styles – reduced spacing
  const titleStyle = "text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-4";
  const tagStyle = "text-sm font-semibold uppercase tracking-wide text-orange-600 mb-3 block";
  const descStyle = "text-lg text-gray-700 leading-relaxed max-w-3xl";
  const pointStyle = "flex items-center gap-3 text-base text-gray-800";

  const services = [
    {
      id: "01",
      title: "Quality Certification",
      tag: "Standards & Audits",
      desc: "We provide official PTC (Parekh Textile Chamber) quality certification to textile units, meeting global export standards for silk, linen, and rayon fabrics.",
      points: ["Fabric Strength Test", "Thread-Count Audit", "Color-Fastness Verification"]
    },
    {
      id: "02",
      title: "Rate Contracts",
      tag: "Procurement Management",
      desc: "We manage quarterly rate contracts for government and private agencies, ensuring transparency and fair pricing in every deal.",
      points: ["Tender Documentation", "Bulk Negotiation", "Market Price Indexing"]
    },
    {
      id: "03",
      title: "Industrial Advisory",
      tag: "Technical Growth",
      desc: "Expert consultancy for setting up new weaving technologies and modern dyeing units, offering customized solutions for Madhya Pradesh's industrial belt.",
      points: ["Machinery Upgrades", "Sustainable Weaving", "Operational Efficiency"]
    },
    {
      id: "04",
      title: "Dispute Arbitration",
      tag: "Legal Support",
      desc: "We resolve trade disputes at the chamber level with legal support and arbitration services available to our 500+ associates.",
      points: ["Trade Law Guidance", "Internal Arbitration", "Legal Documentation"]
    }
  ];

  return (
    <div className="bg-white font-sans text-gray-900 pb-12 md:pb-16">
      
      {/* Hero Banner – compact */}
      <section className="relative h-[280px] md:h-[360px] bg-gray-950 text-white flex items-center overflow-hidden border-b-4 border-orange-600">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(#ea580c 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>
        
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-orange-600 transform translate-x-10 -skew-x-12 opacity-80"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
          <div className="flex items-center gap-3 mb-3">
            <Settings className="text-orange-600" size={28} />
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              Chamber Authority
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tight leading-tight mb-3">
            Our <span className="italic text-gray-300">Services</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Driving India's textile innovation through institutional excellence and quality benchmarking since 2007.
          </p>
        </div>
      </section>

      {/* Services List – reduced spacing */}
      <main className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="space-y-16 md:space-y-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="grid md:grid-cols-2 gap-8 md:gap-12 group"
            >
              {/* Left: Number & Title */}
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-6xl md:text-7xl font-bold text-gray-100 group-hover:text-orange-600/20 transition-colors">
                    {service.id}
                  </span>
                  <div className="h-1 w-12 bg-orange-600 group-hover:w-20 transition-all"></div>
                </div>
                <h3 className={titleStyle}>{service.title}</h3>
                <span className={tagStyle}>{service.tag}</span>
              </div>

              {/* Right: Content */}
              <div className="space-y-5">
                <p className={descStyle}>{service.desc}</p>
                
                <ul className="space-y-3">
                  {service.points.map((p, i) => (
                    <li key={i} className={pointStyle}>
                      <Plus size={16} className="text-orange-600 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <button className="bg-gray-900 text-white px-6 py-3 font-semibold text-base uppercase tracking-wide flex items-center gap-3 hover:bg-orange-600 transition-all rounded-md shadow-md">
                    Explore Details <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Metrics – compact */}
      <section className="bg-gray-950 text-white py-12 md:py-16 px-6 md:px-8 border-l-8 border-orange-600 mx-4 md:mx-8 shadow-2xl relative overflow-hidden">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 text-[12vw] font-bold text-white/[0.03] select-none uppercase pointer-events-none">
          Authority
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative z-10">
          <div className="text-center">
            <Globe size={32} className="text-orange-600 mx-auto mb-3" />
            <span className="block text-4xl font-bold mb-1">500+</span>
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">Associate Partners</p>
          </div>
          <div className="text-center">
            <PieChart size={32} className="text-orange-600 mx-auto mb-3" />
            <span className="block text-4xl font-bold mb-1">100%</span>
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">Quality Compliance</p>
          </div>
          <div className="text-center">
            <Zap size={32} className="text-orange-600 mx-auto mb-3" />
            <span className="block text-4xl font-bold mb-1">19 Yrs</span>
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">Trade Authority</p>
          </div>
          <div className="text-center">
            <ShieldCheck size={32} className="text-orange-600 mx-auto mb-3" />
            <span className="block text-4xl font-bold mb-1">ISO</span>
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">Certified Standards</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-base font-medium text-gray-500 uppercase tracking-wide border-t border-gray-200">
        Parekh Textile Chamber • Industrial Excellence Since 2007
      </footer>
    </div>
  );
};

export default ServicesPage;