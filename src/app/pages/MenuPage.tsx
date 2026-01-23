import { Filter, Search } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';


const menuItems = [
  { id: 1, name: 'Butter Chicken', category: 'Curries', price: 14.90, spiceLevel: 2, veg: false, popular: true, image: 'https://images.unsplash.com/photo-1714799263303-29e7d638578a?w=400' },
  { id: 2, name: 'Paneer Tikka', category: 'Tandoor', price: 12.90, spiceLevel: 3, veg: true, chefPick: true, image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400' },
  { id: 3, name: 'Dal Makhani', category: 'Curries', price: 10.90, spiceLevel: 1, veg: true, popular: true, image: 'https://images.unsplash.com/photo-1656356008687-abadd2e6d2b9?w=400' },
  { id: 4, name: 'Prawn Masala', category: 'Curries', price: 16.90, spiceLevel: 3, veg: false, image: 'https://images.unsplash.com/photo-1586981114766-708f09a71e20?w=400' },
  { id: 5, name: 'Lamb Biryani', category: 'Biryani', price: 15.90, spiceLevel: 2, veg: false, chefPick: true, image: 'https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?w=400' },
  { id: 6, name: 'Vegetable Samosa', category: 'Starters', price: 5.90, spiceLevel: 1, veg: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400' },
];

const categories = ['All', 'Starters', 'Tandoor', 'Curries', 'Biryani', 'Breads', 'Desserts', 'Drinks'];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showVegOnly, setShowVegOnly] = useState(false);

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVeg = !showVegOnly || item.veg;
    return matchesCategory && matchesSearch && matchesVeg;
  });

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="h-96 relative flex items-center justify-center grain-texture">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1651959653830-5c8cb576e134?w=1920)' }}>
          <div className="absolute inset-0 bg-bg-dark/70"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">Our <span className="text-secondary-gold">Menu</span></h1>
          <p className="text-xl text-text-muted">Crafted with love, served with pride</p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-20 z-40 bg-bg-dark/95 backdrop-blur-md border-b border-secondary-gold/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-secondary-gold text-bg-dark'
                      : 'bg-bg-medium text-text-light hover:bg-bg-medium/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:flex-initial">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" size={20} />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-bg-medium rounded-full text-text-light w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-secondary-gold"
                />
              </div>
              <button
                onClick={() => setShowVegOnly(!showVegOnly)}
                className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                  showVegOnly ? 'bg-success text-white' : 'bg-bg-medium text-text-light'
                }`}
              >
                <Filter size={20} />
                <span className="hidden md:inline">Veg</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg-medium rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.chefPick && <span className="px-3 py-1 bg-secondary-gold text-bg-dark text-xs rounded-full">Chef's Pick</span>}
                  {item.popular && <span className="px-3 py-1 bg-primary-burgundy text-text-light text-xs rounded-full">Popular</span>}
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 bg-bg-dark/80 text-secondary-gold text-sm rounded-full">{item.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-accent text-2xl mb-2 text-text-light">{item.name}</h3>
                <p className="text-text-muted text-sm mb-4">Authentic Indian flavors crafted with care</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-secondary-gold font-bold text-xl">€{item.price.toFixed(2)}</span>
                  <div className="flex">
                    {[...Array(item.spiceLevel)].map((_, i) => (
                      <span key={i} className="text-primary-burgundy">🌶</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-secondary-gold text-bg-dark rounded-full hover:bg-accent-saffron transition-colors">
                    Add to Cart
                  </button>
                  <button className="px-4 py-2 border border-secondary-gold text-secondary-gold rounded-full hover:bg-secondary-gold hover:text-bg-dark transition-colors">
                    View
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
