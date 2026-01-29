import { motion } from 'motion/react';
import React, { useState } from 'react';
import Masonry from 'react-responsive-masonry';

const galleryImages = [
  // Food Images
  { id: 1, url: '/butter-chicken.png', category: 'Food', title: 'Butter Chicken' },
  { id: 2, url: '/Chicken-Karahi-Featured-1.jpg', category: 'Food', title: 'Chicken Karahi' },
  { id: 3, url: '/chicken-tikka-masala.jpg', category: 'Food', title: 'Chicken Tikka Masala' },
  { id: 4, url: '/paneer-tikka.png', category: 'Food', title: 'Paneer Tikka' },
  { id: 5, url: '/lamm-biryani.png', category: 'Food', title: 'Lamm Biryani' },
  { id: 6, url: '/chicken-biryani.png', category: 'Food', title: 'Chicken Biryani' },
  { id: 7, url: '/tandoori-chicken.png', category: 'Food', title: 'Tandoori Chicken' },
  { id: 8, url: '/Tandoori-Chicken-Salat.png', category: 'Food', title: 'Tandoori Salat' },
  { id: 9, url: '/paneer-butter-masala.png', category: 'Food', title: 'Paneer Butter Masala' },
  { id: 10, url: '/palak-paneer.png', category: 'Food', title: 'Palak Paneer' },
  { id: 11, url: '/malai-kofta.png', category: 'Food', title: 'Malai Kofta' },
  { id: 12, url: '/chana-masala.png', category: 'Food', title: 'Chana Masala' },
  { id: 13, url: '/prawn-curry.png', category: 'Food', title: 'Prawn Curry' },
  { id: 14, url: '/fish-curry.png', category: 'Food', title: 'Fish Curry' },
  { id: 15, url: '/lamm-karahi.png', category: 'Food', title: 'Lamm Karahi' },
  { id: 16, url: '/rogan-josh.png', category: 'Food', title: 'Rogan Josh' },
  { id: 17, url: '/Mild-Mango-Chicken-Curry.jpg', category: 'Food', title: 'Mango Chicken' },
  { id: 18, url: '/Coconut-Curry-Chicken-New-4.jpg', category: 'Food', title: 'Coconut Curry Chicken' },
  { id: 19, url: '/chole-bhature.png', category: 'Food', title: 'Chole Bhature' },
  { id: 20, url: '/samosa.jpeg', category: 'Food', title: 'Samosa' },
  
  // Breads
  { id: 21, url: '/naan.png', category: 'Breads', title: 'Naan' },
  { id: 22, url: '/bhatura.png', category: 'Breads', title: 'Bhatura' },
  { id: 23, url: '/tandoori-roti.png', category: 'Breads', title: 'Tandoori Roti' },
  
  // Desserts
  { id: 24, url: '/gulab-jamun.png', category: 'Desserts', title: 'Gulab Jamun' },
  { id: 25, url: '/rasogulla.png', category: 'Desserts', title: 'Rasgulla' },
  { id: 26, url: '/mango-lassi.png', category: 'Desserts', title: 'Mango Lassi' },
  
  // Restaurant Ambiance
  { id: 27, url: '/restaurant.png', category: 'Restaurant', title: 'Our Restaurant' },
  { id: 28, url: '/homepage-banner.png', category: 'Restaurant', title: 'Restaurant Interior' },
  
  // Vegetarian Specials
  { id: 29, url: '/karahi-paneer.png', category: 'Vegetarian', title: 'Karahi Paneer' },
  { id: 30, url: '/matar-paneer.png', category: 'Vegetarian', title: 'Matar Paneer' },
  { id: 31, url: '/shahi-paneer.png', category: 'Vegetarian', title: 'Shahi Paneer' },
  { id: 32, url: '/bhindi-masala.png', category: 'Vegetarian', title: 'Bhindi Masala' },
  { id: 33, url: '/mixed-veg.jpg', category: 'Vegetarian', title: 'Mixed Vegetables' },
  { id: 34, url: '/vegitable-biryani.png', category: 'Vegetarian', title: 'Vegetable Biryani' },
  
  // Starters
  { id: 35, url: '/Papadam.png', category: 'Starters', title: 'Papadam' },
  { id: 36, url: '/samosa-chat.png', category: 'Starters', title: 'Samosa Chat' },
  { id: 37, url: '/paneer-pakoda.png', category: 'Starters', title: 'Paneer Pakora' },
  { id: 38, url: '/Vegetarische-Pakoras.png', category: 'Starters', title: 'Vegetable Pakoras' },
];

const categories = ['All', 'Food', 'Vegetarian', 'Breads', 'Desserts', 'Starters', 'Restaurant'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = galleryImages.filter(
    img => selectedCategory === 'All' || img.category === selectedCategory
  );

  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="h-96 relative flex items-center justify-center grain-texture">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/homepage-banner.png)' }}>
          <div className="absolute inset-0 bg-bg-dark/70"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">Unsere <span className="text-secondary-gold">Galerie</span></h1>
          <p className="text-xl text-text-muted">Ein Fest für die Augen</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full transition-all font-semibold ${
                selectedCategory === cat
                  ? 'bg-secondary-gold text-bg-dark shadow-lg scale-105'
                  : 'bg-bg-medium text-text-light hover:bg-bg-medium/80 hover:scale-105'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Count */}
        <div className="text-center mb-8">
          <p className="text-text-muted">
            Zeige <span className="text-secondary-gold font-bold">{filteredImages.length}</span> {filteredImages.length === 1 ? 'Bild' : 'Bilder'}
          </p>
        </div>

        {/* Masonry Gallery */}
        <Masonry columnsCount={3} gutter="1rem" className="masonry-grid">
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl"
              onClick={() => setSelectedImage(img.id)}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-6">
                <span className="text-secondary-gold font-bold text-lg mb-1">{img.title}</span>
                <span className="text-text-light text-sm bg-bg-dark/60 px-3 py-1 rounded-full">{img.category}</span>
              </div>
              
              {/* Hover Overlay Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 bg-secondary-gold rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-bg-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted text-xl">Keine Bilder in dieser Kategorie gefunden.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-bg-dark/98 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-secondary-gold rounded-full flex items-center justify-center hover:bg-accent-saffron transition-colors z-10"
          >
            <svg className="w-6 h-6 text-bg-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-6xl max-h-[90vh]"
          >
            <img
              src={galleryImages.find(img => img.id === selectedImage)?.url}
              alt="Gallery"
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
            />
            <div className="mt-6 text-center">
              <h3 className="text-secondary-gold text-2xl font-heading">
                {galleryImages.find(img => img.id === selectedImage)?.title}
              </h3>
              <p className="text-text-muted mt-2">
                {galleryImages.find(img => img.id === selectedImage)?.category}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}