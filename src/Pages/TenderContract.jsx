import React from 'react';
import { Download } from 'lucide-react';

const TenderContract = () => {
  const tenders = [
    { title: "Supply of Jacquard Looms", num: "TEN/2026/014", deadline: "25 Apr 2026" },
    { title: "Logistics Partner for International Export", num: "TEN/2026/015", deadline: "30 Apr 2026" },
    { title: "Eco-friendly Dye Provisioning", num: "TEN/2026/016", deadline: "15 May 2026" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif text-[#5C4A2A] mb-6">Tenders &amp; Contracts</h1>
          <p className="text-[#8C7345] text-lg">
            Stay updated with our latest procurement needs. We invite bids from trusted vendors 
            and partners to maintain the elegance and efficiency of our supply chain.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {tenders.map((tender, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md border border-[#E6DBC4]/50 flex flex-col md:flex-row items-center justify-between hover:shadow-lg transition-shadow">
              <div className="mb-4 md:mb-0">
                <p className="text-sm font-semibold text-[#B79A63] mb-1">{tender.num}</p>
                <h3 className="text-xl font-serif text-[#5C4A2A]">{tender.title}</h3>
                <p className="text-sm text-[#8C7345] mt-1">Deadline: {tender.deadline}</p>
              </div>
              <button className="px-6 py-2.5 bg-[#F4EFE6] text-[#5C4A2A] rounded-xl font-medium hover:bg-[#B79A63] hover:text-white transition-colors flex items-center gap-2">
                <Download size={18} /> Download Info
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TenderContract;
