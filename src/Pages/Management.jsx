import React from "react";
import { 
  Users, 
  Target, 
  Award, 
  Briefcase, 
  MapPin, 
  Building2, 
  Phone, 
  Mail, 
  UserCircle2, 
  ChevronRight, 
  History, 
  Landmark,
  ShieldCheck,
  Cpu,
  ChevronDown,
  ArrowRight
} from "lucide-react";

const Management = () => {
  return (
    <div className="bg-[#FAF9F6] font-sans text-gray-900">
      
      {/* 1. HERO SECTION - CHAMBER BOARDROOM THEME */}
     <section className="relative h-[450px] bg-gray-900 text-white flex items-center overflow-hidden">
        {/* Abstract Architectural Background */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://media.istockphoto.com/id/531025121/photo/modern-textile-factory.jpg?s=612x612&w=0&k=20&c=TxoLjfpmZdP47dpx_6DgNHwIurEebBb3lq1Wotxu4Y0=" 
            alt="Boardroom" 
            className="w-full h-full object-cover scale-110 blur-sm"
          />
        </div>
        
        {/* Red Accent Overlays - Sharp Corners */}
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-[#ef3e32] transform translate-x-24 -skew-x-12 opacity-80"></div>
        <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 h-[70%] w-2 bg-[#ef3e32]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
            <Landmark className="text-[#ef3e32]" size={32} />
            <span className="text-xs font-black uppercase tracking-[0.5em] text-[#ef3e32]">Established 2007</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
            Chamber <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-100 to-[#ef3e32]">
               Management
            </span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg leading-relaxed font-medium">
            Governing the future of textile innovation, trade compliance, and strategic alliances 
            within the <span className="font-bold text-white">Parekh Textile of Chamber.</span>
          </p>
        </div>
      </section>

      {/* 2. OVERVIEW: THE ASSOCIATION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">
          
          <div className="md:col-span-6 space-y-6">
            <h2 className="text-sm font-black text-[#ef3e32] uppercase tracking-[0.4em] flex items-center gap-2">
               <span className="w-10 h-[2px] bg-[#ef3e32]"></span> Official Structure
            </h2>
            <h3 className="text-5xl font-black uppercase tracking-tight text-gray-900 leading-none">
              Institutional <span className="text-gray-300">Governance</span>
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              The Parekh Textile of Chamber (PTC) is an industry-led, 
              private-public association. Our chamber serves as a collaborative platform 
              connecting registered manufacturers, cotton procurement agencies, 
              logistics partners, and technological consultants. 
            </p>
            <p className="text-gray-600 leading-relaxed font-semibold italic border-l-4 border-gray-100 pl-6">
               "Our association's mandate is to protect interests, facilitate global trade 
               agreements (MOUs), and standardize quality compliance across the textile sector."
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col gap-6">
            <div className="bg-[#ef3e32] p-8 text-white flex gap-6 items-center shadow-2xl shadow-red-100">
               <Users size={40} className="text-pink-100" />
               <div>
                  <h4 className="font-black text-2xl uppercase tracking-tighter">Registered Members</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-pink-100 mt-1">Industrial Associates, Mills, and Mills Owners Association</p>
               </div>
            </div>
            <div className="bg-gray-900 p-8 text-white flex gap-6 items-center shadow-xl shadow-gray-200">
               <Briefcase size={40} className="text-[#ef3e32]" />
               <div>
                  <h4 className="font-black text-2xl uppercase tracking-tighter">Strategic Partnerships</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">IT Firms, Financial Institutions, Logistics Hubs</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MANAGEMENT PRINCIPLES (CREATIVE GRID) */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 max-w-xl mx-auto">
             <h2 className="text-5xl font-black uppercase text-gray-900 leading-none tracking-tighter">Our Core <span className="text-[#ef3e32]">Principles</span></h2>
             <p className="mt-4 text-gray-500 text-sm font-medium">Standardizing processes to achieve global excellence for Indian textiles.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck size={30} />, title: "Transparency", desc: "Open governance in every contract and trade deal." },
              { icon: <Target size={30} />, title: "Strategy", desc: "Long-term roadmap for sustainable growth." },
              { icon: <Cpu size={30} />, title: "Innovation", desc: "Integrating IT & advanced machinery solutions." },
              { icon: <Award size={30} />, title: "Compliance", desc: "ISO 9001 and Global Quality Standards." },
            ].map((principle, index) => (
              <div key={index} className="bg-white border border-gray-100 p-8 flex flex-col items-center justify-center text-center transition hover:shadow-2xl hover:border-[#ef3e32]">
                <div className="mb-6 p-4 bg-orange-50 rounded-full text-[#ef3e32]">
                   {principle.icon}
                </div>
                <h4 className="font-black uppercase tracking-wider text-gray-900 text-lg mb-2">{principle.title}</h4>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">{principle.desc}</p>
                <ChevronDown size={20} className="text-gray-200 mt-4 group-hover:text-[#ef3e32]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MANAGEMENT TEAM (INSTITUTIONAL PORTRAITS) */}
      <section className="py-24 bg-white relative">
        {/* Silk Thread Decorative Lines */}
        <div className="absolute right-0 top-0 bottom-0 opacity-[0.03]" 
          style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 0, 50 50 T 100 50' fill='none' stroke='%23ef3e32' stroke-width='0.5'/%3E%3C/svg%3E')"}}>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <header className="mb-16 border-l-4 border-gray-100 pl-6 max-w-lg">
             <h2 className="text-sm font-black uppercase tracking-[0.4em] text-gray-300">Governance Board</h2>
             <p className="text-5xl font-black uppercase text-gray-900 tracking-tighter leading-none mt-2">Executive Leadership</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "HC Parekh", title: "President & Chief Strategist" },
              { name: "S. Subramaniam", title: "VP - Procurement & Trade" },
              { name: "Rajesh Agrawal", title: "Director - Textile Operations" },
              { name: "Vikram Singh", title: "VP - Legal & Compliance" },
              { name: "Ananya Sharma", title: "Director - International Alliances" },
              { name: "Technical Board", title: "IT & Quality Assurance Council" },
            ].map((member, index) => (
              <div key={index} className="group border-2 border-gray-100 p-8 bg-[#FAF9F6] flex gap-5 items-center hover:bg-gray-900 hover:text-white transition-all hover:border-gray-900 hover:shadow-xl">
                 <div className="w-20 h-20 bg-gray-200 group-hover:bg-white/10 rounded-full flex items-center justify-center text-gray-300 group-hover:text-pink-100 transition-colors">
                    <UserCircle2 size={48} className="font-light" strokeWidth={1}/>
                 </div>
                 <div>
                    <h4 className="text-lg font-bold uppercase tracking-tight group-hover:text-[#ef3e32] transition-colors">{member.name}</h4>
                    <p className="text-xs text-gray-500 font-medium group-hover:text-gray-300 transition-colors">{member.title}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA: JOIN THE ASSOCIATION */}
      <section className="pb-24 px-6 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto bg-[#ef3e32] text-white p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-red-200">
           <Briefcase className="absolute -left-10 -bottom-10 text-white/5 w-64 h-64 opacity-30" />
           <div className="relative z-10 text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-3">Become a Chamber <br />Associate Member</h3>
              <p className="text-pink-100 text-base font-medium opacity-80 max-w-md">Access exclusive tenders, trade networks, quality certifications, and expert industrial consultancy.</p>
           </div>
           <button className="relative z-10 bg-white text-gray-900 px-12 py-5 font-black text-xs uppercase tracking-[0.3em] shadow-xl hover:bg-gray-900 hover:text-white transition-all flex items-center gap-4">
              Membership Directory <ArrowRight size={16} />
           </button>
        </div>
      </section>

    </div>
  );
};

export default Management;