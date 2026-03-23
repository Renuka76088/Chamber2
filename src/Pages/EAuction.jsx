import React from 'react';
import { ArrowRight } from 'lucide-react';

const EAuction = () => {
  const auctions = [
    { id: "AUC-2026-001", title: "Premium Mulberry Cocoons Batch A", date: "April 15, 2026", status: "Upcoming", basePrice: "₹ 15,00,000" },
    { id: "AUC-2026-002", title: "Raw Tussar Silk Yarn (100kg)", date: "May 02, 2026", status: "Upcoming", basePrice: "₹ 8,50,000" },
    { id: "AUC-2025-089", title: "Organic Eri Silk Fabric Rolls", date: "March 10, 2026", status: "Closed", basePrice: "₹ 5,00,000" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif text-[#5C4A2A] mb-6">e-Auction Portal</h1>
          <p className="text-[#8C7345] text-lg">
            Participate in our transparent and secure online auctions for premium bulk silk, 
            cocoons, and exclusive textile lots.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-[#E6DBC4]/50 border border-[#E6DBC4]/30 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F4EFE6] text-[#5C4A2A]">
                  <th className="py-4 px-6 font-semibold">Auction ID</th>
                  <th className="py-4 px-6 font-semibold">Lot Description</th>
                  <th className="py-4 px-6 font-semibold">Date</th>
                  <th className="py-4 px-6 font-semibold">Base Value</th>
                  <th className="py-4 px-6 font-semibold">Status</th>
                  <th className="py-4 px-6 font-semibold text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {auctions.map((item, index) => (
                  <tr key={index} className="border-b border-[#E6DBC4]/30 hover:bg-[#FDFBF7] transition-colors">
                    <td className="py-4 px-6 text-[#8C7345] font-medium">{item.id}</td>
                    <td className="py-4 px-6 text-[#5C4A2A] font-medium">{item.title}</td>
                    <td className="py-4 px-6 text-[#8C7345]">{item.date}</td>
                    <td className="py-4 px-6 text-[#8C7345] font-semibold">{item.basePrice}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${item.status === 'Upcoming' ? 'bg-[#E6DBC4] text-[#5C4A2A]' : 'bg-gray-100 text-gray-500'}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button className="inline-flex items-center text-[#B79A63] hover:text-[#5C4A2A] font-medium transition-colors">
                        View Details <ArrowRight size={16} className="ml-1" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EAuction;
