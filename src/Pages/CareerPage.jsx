import React from "react";
import { 
  Briefcase, 
  MapPin, 
  Mail, 
  CheckCircle2, 
  Send, 
  Globe, 
  Clock, 
  FileText 
} from "lucide-react";

const CareerPage = () => {
  const commonCardStyle = "bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 mb-10 overflow-hidden";
  const sectionHeaderStyle = "font-bold uppercase text-[#ef3e32] mb-3 flex items-center gap-2";
  const listStyle = "space-y-3 text-sm text-gray-600";

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* HEADER SECTION */}
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{fontSize:'40px'}}>Join Our Team</h1>
          <p className="text-gray-500 text-sm uppercase font-medium" style={{fontSize:'20px'}} >Explore opportunities at HC Parekh & Associates</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* CARD 1: HR MANAGER */}
        <div className={commonCardStyle}>
          <div className="bg-gray-900 p-6 text-white flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold" style={{fontSize:'30px'}}>HR Manager</h2>
              <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
                <span className="flex items-center gap-1" style={{fontSize:'17px'}}><MapPin size={20} /> Bengaluru, Karnataka</span>
                <span className="flex items-center gap-1" style={{fontSize:'17px'}}><Clock size={20} /> Full Time</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-widest opacity-70" style={{fontSize:'17px'}}>Salary Package</p>
              <p className="text-lg font-bold text-[#ef3e32]" style={{fontSize:'20px'}}>Rs. 5.25 L.P.A.</p>
            </div>
          </div>

          <div className="p-8 grid md:grid-cols-2 gap-10">
            {/* Criteria */}
            <div>
              <h4 className={sectionHeaderStyle} style={{fontSize:'20px'}}><CheckCircle2 size={25} /> Essential Criteria</h4>
              <ul className={listStyle}>
                <li style={{fontSize:'17px'}}>• MBA (HR) or Graduate with 8+ years experience.</li>
                <li style={{fontSize:'17px'}}>• Expertise in End-To-End recruitment (Tech & Non-Tech).</li>
                <li style={{fontSize:'17px'}}>• Proficient in English, Hindi, and Regional languages.</li>
                <li style={{fontSize:'17px'}}>• Available for official Tour & Travel within India.</li>
              </ul>
            </div>
            {/* Responsibilities */}
            <div>
                
              <h4 className={sectionHeaderStyle} style={{fontSize:'20px'}}><FileText size={20}  /> Key Responsibilities</h4>
              <ul className={listStyle}>
                <li style={{fontSize:'17px'}}>• Recruitment, On-boarding & Induction.</li>
                <li style={{fontSize:'17px'}}>• Payroll, EPF, ESI & Labour Law Compliance.</li>
                <li style={{fontSize:'17px'}}>• Relocation & Full & Final Settlements.</li>
                <li style={{fontSize:'17px'}}>• Organizing Campus Interviews in Universities.</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 px-8 border-t border-gray-100 flex justify-between items-center">
             <p className="text-[11px] text-gray-500 font-medium italic" style={{fontSize:'17px'}}>Note: 3-Round Interview Process. Open until filled.</p>
             <a href="mailto:hemant.parekh2012@gmail.com" className="text-[#ef3e32] font-bold text-xs uppercase hover:underline" style={{fontSize:'17px'}}>Apply Now →</a>
          </div>
        </div>

        {/* CARD 2: SOCIAL MEDIA INFLUENCER */}
        <div className={commonCardStyle}>
          <div className="bg-gray-900 p-6 text-white flex justify-between items-center">
            <div>
              <h2 className="font-bold" style={{fontSize:'30px'}}>Social Media Influencer</h2>
              <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
                <span className="flex items-center gap-1" style={{fontSize:'17px'}}><Globe size={20} /> Remote / Any Location</span>
                <span className="flex items-center gap-1"  style={{fontSize:'17px'}}><Briefcase size={20} /> Campaign Based</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-widest opacity-70"  style={{fontSize:'17px'}}>Role Type</p>
              <p className="text-lg font-bold text-[#ef3e32]"  style={{fontSize:'20px'}}>Brand Promotion</p>
            </div>
          </div>

          <div className="p-8 grid md:grid-cols-2 gap-10">
            {/* Details */}
            <div>
              <h4 className={sectionHeaderStyle}  style={{fontSize:'20px'}}><Globe size={20} /> Target Sectors</h4>
              <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                <p  style={{fontSize:'17px'}} >1. Textile & Garments / Pulp & Paper</p>
                <p  style={{fontSize:'17px'}} >2. Medical & Healthcare / F.M.C.G.</p>
                <p style={{fontSize:'17px'}} >3. Industrial Projects / Tenders & M.O.U.</p>
                <p style={{fontSize:'17px'}}  className="mt-2 text-xs italic text-gray-400">Platforms: LinkedIn, FB, Insta, YouTube</p>
              </div>
            </div>
            {/* Quote Requirements */}
            <div>
              <h4 className={sectionHeaderStyle}><Send size={16}  style={{fontSize:'20px'}} /> Submission Guide</h4>
              <ul className={listStyle}>
                <li style={{fontSize:'17px'}} >• Submit Quotation in <span className="font-bold">PDF format</span>.</li>
                <li style={{fontSize:'17px'}} >• Quote should exclude 3rd Party & GST.</li>
                <li style={{fontSize:'17px'}} >• Must include clear Payment Terms & Conditions.</li>
                <li style={{fontSize:'17px'}} >• We provide ready-to-post advertisements.</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 px-8 border-t border-gray-100 flex justify-between items-center">
             <p className="text-[11px] text-gray-500 font-medium italic" style={{fontSize:'17px'}} >Note: Influencers are not responsible for marketing.</p>
             <a href="mailto:hemant.parekh2012@gmail.com" className="text-[#ef3e32] font-bold text-xs uppercase hover:underline" style={{fontSize:'17px'}} >Apply Now →</a>
          </div>
        </div>

      

      </div>
    </div>
  );
};

export default CareerPage;