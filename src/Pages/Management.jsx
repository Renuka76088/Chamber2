import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Management = () => {
  const team = [
    {
      name: 'Aditya Parekh',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'With over 30 years in preserving heritage weaving, Aditya leads the vision to bringing authentic Indian silk to global platforms.',
    },
    {
      name: 'Priyanka Desai',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Priyanka curates our exclusive collections, blending timeless motifs with contemporary design sensibilities.',
    },
    {
      name: 'Rahul Sharma',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Ensuring seamless supply chains and sustainable sourcing, Rahul is the backbone of our daily excellence.',
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Our Management</h1>
          <div className="w-24 h-1 bg-amber-500 rounded-full mx-auto mb-8 opacity-80"></div>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Meet the visionaries who weave passion, tradition, and innovation into the fabric of our company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="group bg-white border border-gray-100 rounded-[32px] p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-50 rounded-bl-[100px] z-0 transition-transform duration-500 group-hover:scale-110"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full p-2 bg-gradient-to-tr from-amber-400 to-amber-100 mb-6 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover rounded-full border-4 border-white"
                  />
                </div>
                
                <h3 className="text-2xl font-serif text-gray-900 mb-1">{member.name}</h3>
                <p className="text-amber-600 font-bold text-xs tracking-widest uppercase mb-4">{member.role}</p>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                <div className="flex gap-4 mt-auto">
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-amber-600 hover:bg-amber-600 hover:text-white transition-colors shadow-sm">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-amber-600 hover:bg-amber-600 hover:text-white transition-colors shadow-sm">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Management;