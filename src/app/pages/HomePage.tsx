import {
  Calendar,
  ChevronDown,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { Link } from "react-router-dom";
import Testimonials from "../components/testimonial";

const signatureDishes = [
  {
    name: "Butter Chicken",
    description:
      "Unser Markenzeichen: Zartes Hähnchen in einer reichhaltigen Tomaten-Sahne-Sauce.",
    price: "14,90 €",
    spiceLevel: 2,
    image:
      "https://images.unsplash.com/photo-1714799263303-29e7d638578a?w=1080",
    badges: ["Empfehlung", "Beliebt"],
    dietary: ["GF"],
  },
  {
    name: "Paneer Tikka",
    description:
      "Gegrillter hausgemachter Käse, mariniert in aromatischen Gewürzen.",
    price: "12,90 €",
    spiceLevel: 3,
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=1080",
    badges: ["Vegetarisch"],
    dietary: ["V", "GF"],
  },
  {
    name: "Dal Makhani",
    description: "Langsam gekochte schwarze Linsen in Butter und Sahne.",
    price: "10,90 €",
    spiceLevel: 1,
    image:
      "https://images.unsplash.com/photo-1656356008687-abadd2e6d2b9?w=1080",
    badges: ["Hausmannskost"],
    dietary: ["V"],
  },
  {
    name: "Prawn Masala",
    description: "Saftige Garnelen in einem würzigen Kokos-Curry.",
    price: "16,90 €",
    spiceLevel: 3,
    image:
      "https://images.unsplash.com/photo-1586981114766-708f09a71e20?w=1080",
    badges: ["Meeresfrüchte"],
    dietary: ["GF"],
  },
  {
    name: "Lamm Biryani",
    description: "Duftender Basmati-Reis geschichtet mit zartem Lammfleisch.",
    price: "15,90 €",
    spiceLevel: 2,
    image:
      "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?w=1080",
    badges: ["Empfehlung"],
    dietary: [],
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center grain-texture">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url(/homepage-banner.png)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/60 via-bg-dark/50 to-bg-dark/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-secondary-gold uppercase tracking-[0.3em] mb-6 text-sm font-semibold drop-shadow-lg">
              Authentische Indische Küche
            </p>
            <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6">
              <span className="text-white drop-shadow-2xl">
                Wo Tradition auf
              </span>
              <br />
              <span className="text-secondary-gold drop-shadow-2xl">
                Geschmack trifft
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-lg">
              Erleben Sie die reichen Aromen Indiens in jedem Bissen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservations"
                className="px-8 py-4 bg-secondary-gold text-bg-dark rounded-full hover:bg-accent-saffron transition-all duration-300 shadow-lg font-semibold"
              >
                Tisch reservieren
              </Link>
              <Link
                to="/menu"
                className="px-8 py-4 border-2 border-secondary-gold text-secondary-gold rounded-full hover:bg-secondary-gold hover:text-bg-dark transition-all duration-300 font-semibold"
              >
                Speisekarte erkunden
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-white text-sm mb-2 drop-shadow-lg">
            Scrollen
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-secondary-gold drop-shadow-lg" />
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
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/restaurant.png"
                  alt="Restaurant Innenansicht"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-secondary-gold uppercase tracking-[0.2em] mb-4 text-sm font-semibold">
                Unsere Geschichte
              </p>
              <h2 className="font-heading text-4xl md:text-5xl mb-6">
                Seit 10 Jahren Ihr Zuhause für
                <br />
                <span className="text-secondary-gold">Nordindische Küche</span>
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Seit über einem Jahrzehnt servieren wir in Stuttgart die
                  authentischen Aromen Nordindiens – von den geschäftigen
                  Straßen Delhis bis zu den königlichen Küchen Punjabs. Jedes
                  Gericht wird mit Leidenschaft zubereitet und mit Liebe
                  serviert.
                </p>
                <p>
                  Unsere Spezialität sind traditionelle nordindische Gerichte
                  wie Butter Chicken, Lamb Karahi und Dal Makhani. Wir verwenden
                  nur die feinsten Zutaten und authentische Gewürze, die den
                  echten Geschmack Nordindiens nach Stuttgart bringen. Unsere
                  langjährige Erfahrung garantiert Ihnen Qualität und Geschmack
                  in jedem Bissen.
                </p>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1722152667178-be659e54bffc?w=200"
                  alt="Küchenchef"
                  className="w-16 h-16 rounded-full object-cover border-2 border-secondary-gold"
                />
                <div>
                  <p className="font-accent text-lg italic text-text-light">
                    Chef Raj Kumar
                  </p>
                  <p className="text-text-muted text-sm">
                    Küchenchef & Gründer
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section className="py-20 bg-bg-medium grain-texture">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-4">
              Spezialitäten des{" "}
              <span className="text-secondary-gold">Hauses</span>
            </h2>
            <p className="text-text-muted">
              Handverlesene Gerichte unserer kulinarischen Exzellenz
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
                </div>
                <h3 className="font-accent text-2xl mb-2 text-text-light">
                  {dish.name}
                </h3>
                <p className="text-text-muted text-sm mb-3">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-gold font-bold text-lg">
                    {dish.price}
                  </span>
                  <button className="px-4 py-2 bg-secondary-gold text-bg-dark rounded-full text-sm hover:bg-accent-saffron transition-all duration-300 font-semibold">
                    Bestellen
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 grain-texture">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "10 Jahre Erfahrung",
                description:
                  "Seit über einem Jahrzehnt servieren wir authentische indische Küche.",
              },
              {
                icon: Leaf,
                title: "Täglich Frisch",
                description: "Jeden Tag frische Zutaten für höchste Qualität.",
              },
              {
                icon: Sparkles,
                title: "Authentische Gewürze",
                description:
                  "Originale indische Gewürze direkt importiert für echten Geschmack.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-secondary-gold flex items-center justify-center text-secondary-gold group-hover:bg-secondary-gold group-hover:text-bg-dark transition-all duration-300">
                  <feature.icon size={32} />
                </div>
                <h3 className="font-heading text-xl mb-3 text-text-light">
                  {feature.title}
                </h3>
                <p className="text-text-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Now using dedicated component */}
      <Testimonials />

      {/* Location & Hours */}
      <section className="py-20 grain-texture">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="rounded-2xl h-96 overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.8753786647834!2d9.162785776622656!3d48.82914517132651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799da9a645fa28b%3A0x1a8359284ce2397b!2sThe%20Indian%20Food%20corner!5e0!3m2!1sen!2sde!4v1706014774000!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Indian Food Corner Location"
              ></iframe>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl mb-8">
                Besuchen Sie <span className="text-secondary-gold">uns</span>
              </h2>
              <div className="space-y-6 mb-8 text-text-light">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-secondary-gold flex-shrink-0" />
                  <div>
                    <p>Schwieberdinger Str. 37</p>
                    <p className="text-text-muted">
                      70435 Stuttgart, Deutschland
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-secondary-gold flex-shrink-0" />
                  <a
                    href="tel:+49723894934"
                    className="hover:text-secondary-gold transition-colors"
                  >
                    +49 723 894 934
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-secondary-gold flex-shrink-0" />
                  <a
                    href="mailto:info@spicecraft.de"
                    className="hover:text-secondary-gold transition-colors"
                  >
                    info@spicecraft.de
                  </a>
                </div>
              </div>
              <div className="bg-bg-medium rounded-xl p-6">
                <h3 className="font-heading text-xl mb-4 text-secondary-gold">
                  Öffnungszeiten
                </h3>
                <div className="space-y-3 text-text-muted">
                  <div className="flex justify-between">
                    <span>Mo - Fr</span>
                    <span>11:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag</span>
                    <span>12:00 - 00:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sonntag</span>
                    <span>12:00 - 22:00</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
