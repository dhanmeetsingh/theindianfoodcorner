import { ChevronDown, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';


const faqs = [
  { q: 'Do you offer catering?', a: 'Yes! We provide catering services for events of all sizes. Contact us for a custom quote.' },
  { q: 'Is parking available?', a: 'Free parking is available in the lot behind our restaurant.' },
  { q: 'Do you accommodate allergies?', a: 'Absolutely! Please inform us of any allergies when ordering, and we\'ll adjust our recipes accordingly.' },
  { q: 'Can I book for large groups?', a: 'Yes! For parties of 10 or more, please call us directly to arrange seating.' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General', message: '' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: 'General', message: '' });
  };

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

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="font-heading text-3xl mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-medium rounded-xl text-text-light focus:outline-none focus:ring-2 focus:ring-secondary-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-medium rounded-xl text-text-light focus:outline-none focus:ring-2 focus:ring-secondary-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-medium rounded-xl text-text-light focus:outline-none focus:ring-2 focus:ring-secondary-gold"
                >
                  <option>General</option>
                  <option>Catering</option>
                  <option>Feedback</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-medium rounded-xl text-text-light focus:outline-none focus:ring-2 focus:ring-secondary-gold resize-none"
                />
              </div>
              <button type="submit" className="w-full py-3 bg-secondary-gold text-bg-dark rounded-full hover:bg-accent-saffron transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div>
              <h2 className="font-heading text-3xl mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-secondary-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-text-light font-medium mb-1">Address</p>
                    <p className="text-text-muted">Schwieberdinger Str. 37<br />Stuttgart, 70435<br />Deutschland</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-secondary-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-text-light font-medium mb-1">Phone</p>
                    <a href="tel:+4917212345678" className="text-text-muted hover:text-secondary-gold transition-colors">+49 172 389 4934</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-secondary-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-text-light font-medium mb-1">Email</p>
                    <a href="mailto:info@spicecraft.de" className="text-text-muted hover:text-secondary-gold transition-colors">info@spicecraft.de</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-secondary-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-text-light font-medium mb-2">Operating Hours</p>
                    <div className="text-text-muted space-y-1">
                      <p>Mon-Fri: 11:00 - 23:00</p>
                      <p>Saturday: 12:00 - 00:00</p>
                      <p>Sunday: 12:00 - 22:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-bg-medium rounded-xl p-6">
              <h3 className="font-heading text-xl mb-4 text-secondary-gold">Social Media</h3>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'Twitter'].map(social => (
                  <a key={social} href="#" className="w-12 h-12 rounded-full bg-secondary-gold/20 flex items-center justify-center text-secondary-gold hover:bg-secondary-gold hover:text-bg-dark transition-all">
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="h-96 bg-bg-medium rounded-2xl overflow-hidden mb-12">
            <div className="h-full flex items-center justify-center text-text-muted">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-secondary-gold" />
                <p>Map Placeholder</p>
              </div>
            </div>
          </div>

          <h2 className="font-heading text-3xl mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-bg-medium rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-bg-medium/80 transition-colors"
                >
                  <span className="font-medium text-text-light">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-secondary-gold transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-text-muted">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
