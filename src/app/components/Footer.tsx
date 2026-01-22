import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-medium border-t border-secondary-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary-gold/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary-gold" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </div>
              <span className="font-heading text-xl font-bold text-text-light">
                SPICE<span className="text-secondary-gold">CRAFT</span>
              </span>
            </div>
            <p className="text-text-muted mb-4">
              Experience the rich flavors of India in every bite. Traditional recipes, modern elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-gold/10 flex items-center justify-center text-secondary-gold hover:bg-secondary-gold hover:text-bg-dark transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-gold/10 flex items-center justify-center text-secondary-gold hover:bg-secondary-gold hover:text-bg-dark transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-gold/10 flex items-center justify-center text-secondary-gold hover:bg-secondary-gold hover:text-bg-dark transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-text-light">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-muted hover:text-secondary-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text-muted hover:text-secondary-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-text-muted hover:text-secondary-gold transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="text-text-muted hover:text-secondary-gold transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-text-muted hover:text-secondary-gold transition-colors">
                  Order Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-text-light">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-secondary-gold mt-0.5 flex-shrink-0" />
                <span className="text-text-muted">
                  123 Spice Street<br />Stuttgart, 70173<br />Germany
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-secondary-gold flex-shrink-0" />
                <a href="tel:+4917212345678" className="text-text-muted hover:text-secondary-gold transition-colors">
                  +49 172 123 4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-secondary-gold flex-shrink-0" />
                <a href="mailto:info@spicecraft.de" className="text-text-muted hover:text-secondary-gold transition-colors">
                  info@spicecraft.de
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-text-light">Opening Hours</h4>
            <ul className="space-y-2 text-text-muted">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>12:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-gold/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-text-muted text-sm">
            © 2026 SpiceCraft Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-text-muted hover:text-secondary-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-text-muted hover:text-secondary-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-text-muted hover:text-secondary-gold transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
