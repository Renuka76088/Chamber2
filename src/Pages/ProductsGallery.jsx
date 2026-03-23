import React, { useState } from 'react';
import { Play, Maximize2, X } from 'lucide-react';

const ProductsGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Raw Silk', 'Charmeuse', 'Chiffon', 'Georgette', 'Organza'];

  const products = [
    { id: 1, title: 'Midnight Blue Charmeuse', category: 'Charmeuse', image: 'https://images.unsplash.com/photo-1550508129-07bc36aeb91d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Pearlescent Organza', category: 'Organza', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Golden Raw Silk', category: 'Raw Silk', image: 'https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Blush Pink Chiffon', category: 'Chiffon', image: 'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'Emerald Green Georgette', category: 'Georgette', image: 'https://images.unsplash.com/photo-1594968973184-9040a5a79963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Ivory Crêpe de Chine', category: 'Raw Silk', image: 'https://images.unsplash.com/photo-1620799139834-6b8f844fbe6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Our Collections</h1>
          <p className="text-gray-600 font-light text-lg">
            Explore the finest selection of wholesale silk fabrics, each piece meticulously crafted for an unparalleled drape, sheen, and feel.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full border transition-all duration-300 font-medium ${
                activeCategory === category 
                  ? 'bg-amber-600 text-white border-amber-600 shadow-lg shadow-amber-200' 
                  : 'bg-white text-gray-700 border-gray-200 hover:border-amber-400 hover:bg-amber-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 aspect-[4/5] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImage(product.image)}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              <img 
                src={product.image} 
                alt={product.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
              />
              
              {/* Card Content on Hover */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <p className="text-amber-400 text-xs uppercase tracking-widest mb-2 font-bold">
                  {product.category}
                </p>
                <h3 className="text-white font-serif text-2xl mb-4">{product.title}</h3>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-amber-600 hover:text-white transition-colors border border-white/30">
                  <Maximize2 size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged Silk Fabric" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProductsGallery;
