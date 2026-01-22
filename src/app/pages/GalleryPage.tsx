import { useState } from 'react';
import { motion } from 'motion/react';
import Masonry from 'react-responsive-masonry';

const galleryImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1714799263303-29e7d638578a?w=800', category: 'Food' },
  { id: 2, url: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800', category: 'Food' },
  { id: 3, url: 'https://images.unsplash.com/photo-1656356008687-abadd2e6d2b9?w=800', category: 'Food' },
  { id: 4, url: 'https://images.unsplash.com/photo-1586981114766-708f09a71e20?w=800', category: 'Food' },
  { id: 5, url: 'https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?w=800', category: 'Food' },
  { id: 6, url: 'https://images.unsplash.com/photo-1764344815366-6ccf59fb13d0?w=800', category: 'Restaurant' },
  { id: 7, url: 'https://images.unsplash.com/photo-1722152667178-be659e54bffc?w=800', category: 'Kitchen' },
  { id: 8, url: 'https://images.unsplash.com/photo-1651959653830-5c8cb576e134?w=800', category: 'Food' },
];

const categories = ['All', 'Food', 'Restaurant', 'Kitchen', 'Events'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = galleryImages.filter(
    img => selectedCategory === 'All' || img.category === selectedCategory
  );

  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="h-96 relative flex items-center justify-center grain-texture">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1651959653830-5c8cb576e134?w=1920)' }}>
          <div className="absolute inset-0 bg-bg-dark/70"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">Our <span className="text-secondary-gold">Gallery</span></h1>
          <p className="text-xl text-text-muted">A feast for the eyes</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === cat
                  ? 'bg-secondary-gold text-bg-dark'
                  : 'bg-bg-medium text-text-light hover:bg-bg-medium/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <Masonry columnsCount={3} gutter="1rem">
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(img.id)}
            >
              <img src={img.url} alt={img.category} className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-secondary-gold font-semibold">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-bg-dark/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={galleryImages.find(img => img.id === selectedImage)?.url}
            alt="Gallery"
            className="max-w-full max-h-full rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
