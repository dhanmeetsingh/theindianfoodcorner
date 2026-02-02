import { Mail, MapPin, MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

export default function ContactPage() {
  const phoneNumber = "+491723894934";
  const telephoneNumber = "0711/93323865";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=Hallo! Ich möchte mich nach Ihrem Restaurant erkundigen.`;
  const woltLink = "https://wolt.com/de/deu/stuttgart/restaurant/the-indian-food-corner";

  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="h-96 relative flex items-center justify-center grain-texture">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1651959653830-5c8cb576e134?w=1920)",
          }}
        >
          <div className="absolute inset-0 bg-bg-dark/70" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">
            Nehmen Sie <span className="text-secondary-gold">Kontakt auf</span>
          </h1>
          <p className="text-xl text-text-muted">Wir freuen uns auf Ihre Nachricht</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-24"
          >
            <div className="rounded-2xl h-[500px] overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.8753786647834!2d9.162785776622656!3d48.82914517132651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799da9a645fa28b%3A0x1a8359284ce2397b!2sThe%20Indian%20Food%20corner!5e0!3m2!1sen!2sde!4v1706014774000!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Indian Food Corner Location"
              />
            </div>
          </motion.div>

          {/* Kontaktinformationen */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-heading text-4xl mb-2">
                Besuchen <span className="text-secondary-gold">Sie uns</span>
              </h2>

              <div className="space-y-6">
                {/* Adresse */}
                <div className="flex items-start space-x-4 p-4 bg-bg-medium rounded-xl">
                  <MapPin className="w-6 h-6 text-secondary-gold mt-1" />
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-text-muted">Schwieberdinger Str. 37</p>
                    <p className="text-text-muted">70435 Stuttgart</p>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex items-start space-x-4 p-4 bg-bg-medium rounded-xl">
                  <Phone className="w-6 h-6 text-secondary-gold mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Telefon</p>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="block text-text-muted hover:text-secondary-gold"
                    >
                      {phoneNumber}
                    </a>
                    <a
                      href={`tel:${telephoneNumber.replace(/\//g, "")}`}
                      className="block text-text-muted hover:text-secondary-gold"
                    >
                      {telephoneNumber}
                    </a>
                  </div>
                </div>

                {/* E-Mail */}
                <div className="flex items-start space-x-4 p-4 bg-bg-medium rounded-xl">
                  <Mail className="w-6 h-6 text-secondary-gold mt-1" />
                  <div>
                    <p className="font-semibold mb-1">E-Mail</p>
                    <a
                      href="mailto:theindianfoodcorner17@gmail.com"
                      className="text-text-muted hover:text-secondary-gold"
                    >
                      theindianfoodcorner17@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Aktionen */}
            <div className="bg-bg-medium rounded-xl p-6 space-y-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp schreiben
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-2 bg-secondary-gold py-3 rounded-full"
              >
                <Phone className="w-5 h-5" />
                Anrufen
              </a>

              <a
                href={woltLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#009DE0] text-white py-3 rounded-full"
              >
                <ShoppingBag className="w-5 h-5" />
                Bei Wolt bestellen
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
