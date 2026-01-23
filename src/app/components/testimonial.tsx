import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  source: string;
  date: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Nimesh Salunkhe",
      rating: 5,
      text: "Bestes indisches Essen in Deutschland. Einige Gerichte wie Lamb Karahi und Rogan Josh sind die besten Lammgerichte, die ich je gegessen habe, auch in Indien. Der Besitzer ist sehr nett und kocht großartiges nordindisches Essen.",
      source: "Google Bewertung",
      date: "Vor 10 Monaten"
    },
    {
      name: "Susan Huntington",
      rating: 5,
      text: "Mein Vater und ich haben dieses Restaurant wirklich genossen! Das Essen war SO lecker, der Service war großartig und die Musik war wunderschön und entspannend. Ich fühlte mich wie zurück in Indien ❤️",
      source: "Google Bewertung",
      date: "Vor 1 Jahr"
    },
    {
      name: "Virginia Mott",
      rating: 5,
      text: "Das Essen ist fantastisch und der Preis ist großartig. Wenn Sie tolles indisches Essen zu einem guten Preis-Leistungs-Verhältnis suchen, ist dies der richtige Ort.",
      source: "Google Bewertung",
      date: "Vor 8 Monaten"
    },
    {
      name: "Mária Indrišek",
      rating: 5,
      text: "Ein typisches indisches Restaurant – genau das, was man von einem authentischen Ort erwartet. Das Essen war köstlich, die Portionen großzügig und die Preise sehr vernünftig.",
      source: "Google Bewertung",
      date: "Vor 5 Monaten"
    },
    {
      name: "Vishal Surarapu",
      rating: 5,
      text: "Das Essen war ausgezeichnet. Meine Frau und ich haben dort letzte Woche gegessen. Wir bestellten Masala Chai und Mango Lassi, die fantastisch waren. Als indisches Paar können wir sagen, der Geschmack war nah an den original Gerichten. Der Besitzer ist sehr freundlich.",
      source: "Google Bewertung",
      date: "Vor 1 Jahr"
    },
    {
      name: "Katie Bevan",
      rating: 5,
      text: "Zu Besuch aus Utah, USA. Das beste indische Essen, das ich je hatte, so frisch und lecker. Das Restaurant ist klein, aber ich mochte das familiäre Gefühl sehr. Das Personal war so freundlich. Vielen Dank!",
      source: "Google Bewertung",
      date: "Vor 1 Jahr"
    },
    {
      name: "SUMA HOSMANE",
      rating: 5,
      text: "Jedes Mal, wenn wir Lust auf indisches Essen haben, holen wir hier ab. Das ist DAS BESTE indische Essen in Stuttgart. Die Menge und Qualität sind jeden Cent absolut wert. Wir haben so oft abgeholt, aber nicht einmal hatten wir eine schlechte Erfahrung.",
      source: "Google Bewertung",
      date: "Vor 2 Jahren"
    },
    {
      name: "Sai Murali",
      rating: 5,
      text: "Bestes und authentischstes indisches Restaurant in und um Stuttgart. Das Essen ist fantastisch und nicht überteuert im Gegensatz zu anderen indischen Restaurants. Der Koch ist sehr freundlich und kann das Essen nach unseren Wünschen anpassen. Sehr empfehlenswert!",
      source: "Google Bewertung",
      date: "Vor 1 Jahr"
    },
    {
      name: "Chris Piedra",
      rating: 5,
      text: "Sehr gutes indisches Essen. Das Tikka Masala war fantastisch! Toller Service, kleines gemütliches Lokal. Man sollte diesen Ort definitiv besuchen.",
      source: "Google Bewertung",
      date: "Vor 1 Jahr"
    },
    {
      name: "Max Soell",
      rating: 5,
      text: "Toller Ort. Authentisches Essen und gute Portionsgröße. Definitiv empfehlenswert. Hoffe, es bleibt so wie es ist.",
      source: "Google Bewertung",
      date: "Vor 7 Jahren"
    }
  ];

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-light mb-4">
            Was unsere <span className="text-secondary-gold">Gäste sagen</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Echte Bewertungen von echten Menschen
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-[#f5f1e8] rounded-2xl p-8 md:p-12 shadow-2xl border border-secondary-gold/20"
            >
              {/* Stars */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-secondary-gold text-secondary-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#1a1a1a] text-lg md:text-xl text-center mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <p className="font-heading text-xl font-semibold text-secondary-gold mb-1">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-[#666666] text-sm">
                  {testimonials[currentIndex].source} · {testimonials[currentIndex].date}
                </p>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full bg-secondary-gold/20 hover:bg-secondary-gold text-text-light hover:text-bg-dark transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              aria-label="Vorherige Bewertung"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full bg-secondary-gold/20 hover:bg-secondary-gold text-text-light hover:text-bg-dark transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              aria-label="Nächste Bewertung"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-secondary-gold'
                    : 'w-3 h-3 bg-secondary-gold/30 hover:bg-secondary-gold/50'
                }`}
                aria-label={`Zur Bewertung ${index + 1} gehen`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://www.google.com/search?sa=X&rlz=1C5CHFA_enDE1130DE1130&sca_esv=09a4dc9e07e27686&sxsrf=ANbL-n5AV4gbL9pEiKbB6ZHVRp10vpx7eQ:1769170164052&q=The+Indian+Food+corner+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2tDQ0MDGzMLM0MzW1MLMwMDEx3sDI-IpRLiQjVcEzLyUzMU_BLT8_RSE5vygvtUghKLUsM7W8eBErAQUAU54Wp1wAAAA&rldimm=1910468696558680443&tbm=lcl&hl=en-DE&ved=2ahUKEwjHxLO50KGSAxUjQvEDHcqwDIIQ9fQKegQITBAG&biw=1512&bih=857&dpr=2&aic=0#lkt=LocalPoiReviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-secondary-gold hover:text-secondary-gold/80 transition-colors"
          >
            <span className="text-lg">Alle Bewertungen auf Google ansehen</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}