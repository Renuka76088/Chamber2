import React from 'react';
import { Star } from 'lucide-react';

const CustomerReview = () => {
  const reviews = [
    { name: "Eleanor Vance", company: "Vance Haute Couture", rating: 5, text: "The quality of Mulberry Silk from Serenity is unmatched. It drapes beautifully and holds vibrant dyes perfectly. Our clients absolutely love the feel." },
    { name: "Rajiv Menon", company: "Menon Textiles", rating: 5, text: "Reliable, consistent, and exceptionally professional. We've been sourcing our Tussar silk exclusively through their portal for three years." },
    { name: "Sophia Laurent", company: "Laurent Paris", rating: 5, text: "Their commitment to ethical and sustainable farming practices alongside such premium quality makes them our preferred silk supplier." },
    { name: "Wei Chen", company: "Global Silks Co.", rating: 4, text: "Excellent customer service and transparent e-Auction platform. The bidding process is smooth and the delivery is always on time." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif text-[#5C4A2A] mb-6">Client Testimonials</h1>
          <p className="text-[#8C7345] text-lg">
            Hear from our esteemed partners, designers, and textile houses across the globe 
            who have experienced the Serenity standard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-md shadow-[#E6DBC4]/50 border border-[#E6DBC4] relative">
              <div className="flex text-[#B79A63] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "text-[#B79A63]" : "text-[#E6DBC4]"} />
                ))}
              </div>
              <p className="text-[#5C4A2A] italic mb-6 leading-relaxed relative z-10">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <h4 className="font-serif font-bold text-[#5C4A2A] text-lg">{review.name}</h4>
                <span className="text-sm text-[#8C7345]">{review.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
