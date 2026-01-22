import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    occasion: 'none',
    requests: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-success" />
          </div>
          <h2 className="font-heading text-3xl mb-4">Reservation Confirmed!</h2>
          <p className="text-text-muted mb-8">
            Thank you! Your reservation for {formData.guests} guests on {formData.date} at {formData.time} has been confirmed. We've sent a confirmation email to {formData.email}.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 bg-secondary-gold text-bg-dark rounded-full hover:bg-accent-saffron transition-colors"
          >
            Make Another Reservation
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="h-96 relative flex items-center justify-center grain-texture">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1764344815366-6ccf59fb13d0?w=1920)' }}>
          <div className="absolute inset-0 bg-bg-dark/70"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">Reserve Your <span className="text-secondary-gold">Table</span></h1>
          <p className="text-xl text-text-muted">Join us for an unforgettable dining experience</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="glassmorphism rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-text-light">
                  <Calendar className="inline w-4 h-4 mr-2" />
                  Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-dark rounded-xl text-text-light focus:outline-none focus:ring-2 focus:ring-secondary-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-text-light">
                  <Clock className="inline w-4 h-4 mr-2" />
                  Time
                </label>
                <select
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-dark rounded-xl text-text-light focus:outline-none focus:ring-2 focus:ring-secondary-gold"
                >
                  <option value="">Select time</option>
                  {Array.from({ length: 24 }, (_, i) => {
                    const hour = Math.floor(i / 2) + 11;
                    const minute = i % 2 === 0 ? '00' : '30';
                    return <option key={i} value={`${hour}:${minute}`}>{hour}:{minute}</option>;
                  })}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-text-light">
                  <Users className="inline w-4 h-4 mr-2" />
                  Number of Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-dark rounded-xl text-text-light focus:outline-none focus:ring-2 focus:ring-secondary-gold"
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
                  ))}
                  <option value="10+">10+ Guests</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-text-light">Special Occasion</label>
                <select
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-dark rounded-xl text-text-light focus:outline-none focus:ring-2 focus:ring-secondary-gold"
                >
                  <option value="none">None</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="business">Business</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-text-light">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-dark rounded-xl text-text-light focus:outline-none focus:ring-2 focus:ring-secondary-gold"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-text-light">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-dark rounded-xl text-text-light focus:outline-none focus:ring-2 focus:ring-secondary-gold"
                  placeholder="john@example.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2 text-text-light">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-dark rounded-xl text-text-light focus:outline-none focus:ring-2 focus:ring-secondary-gold"
                  placeholder="+49 172 123 4567"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2 text-text-light">Special Requests / Dietary Requirements</label>
                <textarea
                  rows={4}
                  value={formData.requests}
                  onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-dark rounded-xl text-text-light focus:outline-none focus:ring-2 focus:ring-secondary-gold resize-none"
                  placeholder="Any allergies or special requirements?"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-secondary-gold text-bg-dark rounded-full hover:bg-accent-saffron transition-all duration-300 shadow-lg"
            >
              Confirm Reservation
            </button>

            <p className="text-center text-text-muted text-sm mt-4">
              Or call us at <a href="tel:+4917212345678" className="text-secondary-gold hover:underline">+49 172 123 4567</a>
            </p>
          </motion.form>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            {[
              { title: 'Operating Hours', desc: 'Mon-Fri: 11:00-23:00\nSat-Sun: 12:00-00:00' },
              { title: 'Cancellation Policy', desc: 'Free cancellation up to 24 hours before reservation' },
              { title: 'Large Parties', desc: 'For parties of 10+, please call us directly' },
            ].map((info, i) => (
              <div key={i} className="bg-bg-medium rounded-xl p-6">
                <h3 className="font-heading text-lg mb-2 text-secondary-gold">{info.title}</h3>
                <p className="text-text-muted text-sm whitespace-pre-line">{info.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
