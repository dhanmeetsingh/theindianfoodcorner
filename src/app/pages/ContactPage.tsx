import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

export default function ContactPage() {
  const phoneNumber = '+491723894934';
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=Hello! I would like to inquire about your restaurant.`;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="h-96 relative flex items-center justify-center grain-texture">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1651959653830-5c8cb576e134?w=1920)' }}>
          <div className="absolute inset-0 bg-bg-dark/70"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">Get In <span className="text-secondary-gold">Touch</span></h1>
          <p className="text-xl text-text-muted">We'd love to hear from you</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
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
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-heading text-4xl mb-2">Visit <span className="text-secondary-gold">Us</span></h2>
              <p className="text-text-muted mb-8">Come experience authentic Indian cuisine in the heart of Stuttgart</p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-bg-medium rounded-xl hover:bg-bg-medium/80 transition-all">
                  <MapPin className="w-6 h-6 text-secondary-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-text-light font-semibold mb-1">Address</p>
                    <p className="text-text-muted">Schwieberdinger Str. 37</p>
                    <p className="text-text-muted">70435 Stuttgart, Deutschland</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-bg-medium rounded-xl hover:bg-bg-medium/80 transition-all">
                  <Phone className="w-6 h-6 text-secondary-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-text-light font-semibold mb-1">Phone</p>
                    <a 
                      href={`tel:${phoneNumber}`}
                      className="text-text-muted hover:text-secondary-gold transition-colors"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-bg-medium rounded-xl hover:bg-bg-medium/80 transition-all">
                  <Mail className="w-6 h-6 text-secondary-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-text-light font-semibold mb-1">Email</p>
                    <a 
                      href="mailto:info@spicecraft.de" 
                      className="text-text-muted hover:text-secondary-gold transition-colors"
                    >
                      info@spicecraft.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-gradient-to-br from-secondary-gold/10 to-accent-saffron/10 rounded-2xl p-6 border border-secondary-gold/20">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-7 h-7 text-secondary-gold" />
                <h3 className="font-heading text-2xl text-secondary-gold">Operating Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-secondary-gold/10">
                  <span className="text-text-light font-medium">Monday - Friday</span>
                  <span className="text-text-muted">11:00 - 23:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-secondary-gold/10">
                  <span className="text-text-light font-medium">Saturday</span>
                  <span className="text-text-muted">12:00 - 00:00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-text-light font-medium">Sunday</span>
                  <span className="text-text-muted">12:00 - 22:00</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-bg-medium rounded-xl p-6">
              <h3 className="font-heading text-xl mb-4 text-secondary-gold">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { name: 'Facebook', icon: 'F' },
                  { name: 'Instagram', icon: 'I' },
                  { name: 'Twitter', icon: 'T' }
                ].map(social => (
                  <a 
                    key={social.name} 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-secondary-gold/20 flex items-center justify-center text-secondary-gold hover:bg-secondary-gold hover:text-bg-dark transition-all font-semibold text-lg"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Action Buttons */}
            <div className="bg-bg-medium rounded-xl p-6">
              <p className="text-text-muted mb-4 text-center">Ready to experience authentic Indian cuisine?</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full hover:bg-[#20BA5A] transition-all duration-300 font-semibold shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
                <a 
                  href={`tel:${phoneNumber}`}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-secondary-gold text-bg-dark rounded-full hover:bg-accent-saffron transition-all duration-300 font-semibold shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}