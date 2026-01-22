import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown, Star, Clock, Leaf, Truck, Sparkles, Quote, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

const signatureDishes = [
  {
    name: 'Butter Chicken',
    description: 'Our signature dish with tender chicken in rich tomato cream sauce',
    price: '€14.90',
    spiceLevel: 2,
    image: 'https://images.unsplash.com/photo-1714799263303-29e7d638578a?w=1080',
    badges: ['Chef\'s Pick', 'Popular'],
    dietary: ['GF'],
  },
  {
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese marinated in aromatic spices',
    price: '€12.90',
    spiceLevel: 3,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=1080',
    badges: ['Vegetarian'],
    dietary: ['V', 'GF'],
  },
  {
    name: 'Dal Makhani',
    description: 'Slow-cooked black lentils in butter and cream',
    price: '€10.90',
    spiceLevel: 1,
    image: 'https://images.unsplash.com/photo-1656356008687-abadd2e6d2b9?w=1080',
    badges: ['Comfort Food'],
    dietary: ['V'],
  },
  {
    name: 'Prawn Masala',
    description: 'Succulent prawns in spicy coconut curry',
    price: '€16.90',
    spiceLevel: 3,
    image: 'https://images.unsplash.com/photo-1586981114766-708f09a71e20?w=1080',
    badges: ['Seafood Special'],
    dietary: ['GF'],
  },
  {
    name: 'Lamb Biryani',
    description: 'Fragrant basmati rice layered with tender lamb',
    price: '€15.90',
    spiceLevel: 2,
    image: 'https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?w=1080',
    badges: ['Chef\'s Pick'],
    dietary: [],
  },
];

const testimonials = [
  {
    text: "The best Indian food I've ever had! The butter chicken is absolutely divine, and the service is impeccable. I come here at least once a week!",
    author: 'Sarah M.',
    date: 'December 2025',
    rating: 5,
  },
  {
    text: "Authentic flavors that transport you straight to India. The chef really knows what they're doing. Every dish is a masterpiece!",
    author: 'Michael K.',
    date: 'January 2026',
    rating: 5,
  },
  {
    text: "As someone from India, I can confirm this is the real deal. The spices, the presentation, everything is perfect. Highly recommend!",
    author: 'Priya S.',
    date: 'November 2025',
    rating: 5,
  },
];

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for subscribing! We'll send you exclusive offers at ${email}`);
    setEmail('');
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center grain-texture">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1651959653830-5c8cb576e134?w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-bg-dark/50 to-bg-dark"></div>
          <div className="absolute inset-0 bg-bg-dark/40"></div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-secondary-gold/30 rounded-full"
              initial={{ x: Math.random() * window.innerWidth, y: window.innerHeight + 100 }}
              animate={{
                y: -100,
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-secondary-gold uppercase tracking-[0.3em] mb-6 text-sm font-semibold">
              Authentic Indian Cuisine
            </p>
            <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 text-shadow">
              Where Tradition<br />
              <span className="text-secondary-gold">Meets Taste</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-2xl mx-auto">
              Experience the rich flavors of India in every bite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservations"
                className="px-8 py-4 bg-secondary-gold text-bg-dark rounded-full hover:bg-accent-saffron transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Reserve a Table
              </Link>
              <Link
                to="/menu"
                className="px-8 py-4 border-2 border-secondary-gold text-secondary-gold rounded-full hover:bg-secondary-gold hover:text-bg-dark transition-all duration-300"
              >
                Explore Menu
              </Link>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 bg-bg-dark/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-secondary-gold fill-secondary-gold" />
              <span className="text-text-light">4.8 ★ Rating</span>
            </div>
            <div className="flex items-center space-x-2 bg-bg-dark/60 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-text-light">400+ Happy Guests</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-text-muted text-sm mb-2">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-secondary-gold" />
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="min-h-screen flex items-center py-20 grain-texture">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1764344815366-6ccf59fb13d0?w=1080"
                  alt="Restaurant Interior"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-secondary-gold uppercase tracking-[0.2em] mb-4 text-sm font-semibold">
                Our Story
              </p>
              <h2 className="font-heading text-4xl md:text-5xl mb-6">
                A Culinary Journey<br />
                <span className="text-secondary-gold">Through India</span>
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  At SpiceCraft, we bring you the authentic flavors of India, crafted with passion and served with love. Our journey began with a simple mission: to share the rich culinary heritage of India with the world.
                </p>
                <p>
                  Every dish on our menu tells a story—from the bustling streets of Delhi to the serene backwaters of Kerala. We use only the finest ingredients, traditional family recipes, and spices imported directly from India to ensure authenticity in every bite.
                </p>
                <p>
                  Our chefs, trained in the art of Indian cuisine, work tirelessly to create dishes that not only taste exceptional but also honor the traditions passed down through generations.
                </p>
              </div>

              <div className="mt-8 flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1722152667178-be659e54bffc?w=200"
                  alt="Chef"
                  className="w-16 h-16 rounded-full object-cover border-2 border-secondary-gold"
                />
                <div>
                  <p className="font-accent text-lg italic text-text-light">Chef Raj Kumar</p>
                  <p className="text-text-muted text-sm">Head Chef & Founder</p>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center space-x-2 mt-8 text-secondary-gold hover:text-accent-saffron transition-colors group"
              >
                <span>Read More</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section className="py-20 bg-bg-medium grain-texture">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-4">
              Signature <span className="text-secondary-gold">Creations</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Handcrafted dishes that define our culinary excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    {dish.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 bg-secondary-gold text-bg-dark text-xs rounded-full font-semibold"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div className="flex space-x-1">
                      {dish.dietary.map((diet) => (
                        <span
                          key={diet}
                          className="w-6 h-6 rounded-full bg-bg-dark/80 flex items-center justify-center text-xs text-secondary-gold font-semibold"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <h3 className="font-accent text-2xl mb-2 text-text-light">{dish.name}</h3>
                <p className="text-text-muted text-sm mb-3">{dish.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-secondary-gold font-bold text-lg">{dish.price}</span>
                    <div className="flex">
                      {[...Array(dish.spiceLevel)].map((_, i) => (
                        <span key={i} className="text-primary-burgundy">🌶</span>
                      ))}
                    </div>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-secondary-gold text-bg-dark rounded-full text-sm hover:bg-accent-saffron">
                    Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-block px-8 py-4 border-2 border-secondary-gold text-secondary-gold rounded-full hover:bg-secondary-gold hover:text-bg-dark transition-all duration-300"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 grain-texture">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Open Late',
                description: 'Serving until midnight for your late cravings',
              },
              {
                icon: Leaf,
                title: 'Fresh & Halal',
                description: '100% halal certified, fresh ingredients daily',
              },
              {
                icon: Truck,
                title: 'Fast Delivery',
                description: 'Hot food at your door in 30 minutes',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-secondary-gold flex items-center justify-center text-secondary-gold group-hover:bg-secondary-gold group-hover:text-bg-dark transition-all duration-300">
                  <feature.icon size={32} />
                </div>
                <h3 className="font-heading text-xl mb-3 text-text-light">{feature.title}</h3>
                <p className="text-text-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Recommendation Teaser */}
      <section className="py-20 bg-gradient-to-r from-primary-burgundy to-secondary-gold/80 grain-texture">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-bg-medium rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Sparkles className="w-6 h-6 text-secondary-gold" />
                  <span className="text-text-muted">AI Powered</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-secondary-gold text-bg-dark rounded-2xl px-4 py-2 max-w-[80%]">
                      <p className="text-sm">I'm in the mood for something creamy</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-bg-dark text-text-light rounded-2xl px-4 py-3 max-w-[80%]">
                      <p className="text-sm mb-2">Perfect! Based on 400+ reviews, try our:</p>
                      <div className="bg-bg-medium rounded-lg p-3 mt-2">
                        <p className="font-semibold text-secondary-gold">Paneer Butter Masala ⭐ 4.9</p>
                        <p className="text-xs text-text-muted mt-1">€12.90</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-secondary-gold uppercase tracking-[0.2em] mb-4 text-sm font-semibold">
                Powered by AI
              </p>
              <h2 className="font-heading text-4xl md:text-5xl mb-6 text-text-light">
                Not Sure What<br />
                <span className="text-bg-dark">to Order?</span>
              </h2>
              <p className="text-text-light/90 mb-6">
                Our smart assistant analyzes hundreds of reviews and your preferences to suggest your perfect dish
              </p>
              <ul className="space-y-3 mb-8">
                {['Personalized recommendations', 'Dietary preference matching', 'Based on real customer favorites'].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-bg-dark flex items-center justify-center">
                      <span className="text-secondary-gold text-sm">✓</span>
                    </div>
                    <span className="text-text-light">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 bg-bg-dark text-secondary-gold rounded-full hover:bg-bg-dark/90 transition-all duration-300 shadow-lg">
                Try AI Assistant
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-bg-medium grain-texture">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-4">
              What Our <span className="text-secondary-gold">Guests Say</span>
            </h2>
            <div className="flex justify-center items-center space-x-2 text-secondary-gold">
              <Quote size={40} className="opacity-20" />
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-bg-dark rounded-2xl p-8 md:p-12 shadow-2xl text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-secondary-gold fill-secondary-gold" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-accent italic text-text-light mb-6">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-secondary-gold font-semibold">{testimonials[currentTestimonial].author}</p>
              <p className="text-text-muted text-sm">{testimonials[currentTestimonial].date}</p>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-secondary-gold w-8' : 'bg-text-muted'
                  }`}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="inline-block px-8 py-4 bg-secondary-gold/10 rounded-full">
                <p className="text-secondary-gold font-bold text-2xl">427 Five-Star Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 grain-texture">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-bg-medium rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="h-96 bg-gradient-to-br from-secondary-gold/20 to-primary-burgundy/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-secondary-gold mx-auto mb-4" />
                  <p className="text-text-light">Interactive Map Placeholder</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl mb-8">
                Visit <span className="text-secondary-gold">Us</span>
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-secondary-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-text-light">123 Spice Street</p>
                    <p className="text-text-muted">Stuttgart, 70173, Germany</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-secondary-gold flex-shrink-0" />
                  <a href="tel:+4917212345678" className="text-text-light hover:text-secondary-gold transition-colors">
                    +49 172 123 4567
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-secondary-gold flex-shrink-0" />
                  <a href="mailto:info@spicecraft.de" className="text-text-light hover:text-secondary-gold transition-colors">
                    info@spicecraft.de
                  </a>
                </div>
              </div>

              <div className="bg-bg-medium rounded-xl p-6 mb-8">
                <h3 className="font-heading text-xl mb-4 text-secondary-gold">Operating Hours</h3>
                <div className="space-y-3">
                  {[
                    { day: 'Monday - Friday', hours: '11:00 - 23:00' },
                    { day: 'Saturday', hours: '12:00 - 00:00' },
                    { day: 'Sunday', hours: '12:00 - 22:00' },
                  ].map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center">
                      <span className="text-text-light">{schedule.day}</span>
                      <span className="text-text-muted">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-secondary-gold text-bg-dark rounded-full hover:bg-accent-saffron transition-all duration-300"
              >
                Get Directions
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-secondary-gold to-accent-saffron">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-4 text-bg-dark">
              Join Our Family
            </h2>
            <p className="text-bg-dark/80 mb-8 max-w-2xl mx-auto">
              Subscribe for exclusive offers and 10% off your first order
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full bg-bg-dark text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-burgundy"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary-burgundy text-text-light rounded-full hover:bg-primary-burgundy/90 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-bg-dark/60 text-sm mt-4">No spam, only delicious updates</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
