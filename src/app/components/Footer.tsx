import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-bg-medium border-t border-secondary-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary-gold/20 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="The Indian Food Corner Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-heading text-xl font-bold text-text-light">
                THE INDIAN <span className="text-secondary-gold">FOOD CORNER</span>
              </span>
            </div>
            <p className="text-text-muted mb-4">
              Erleben Sie die reichen Aromen Indiens in jedem Bissen. Traditionelle Rezepte, moderne Eleganz.
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
            <h4 className="font-heading text-lg mb-4 text-text-light">Schnellzugriff</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-muted hover:text-secondary-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text-muted hover:text-secondary-gold transition-colors">
                  Unsere Geschichte
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-text-muted hover:text-secondary-gold transition-colors">
                  Speisekarte
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-text-muted hover:text-secondary-gold transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-muted hover:text-secondary-gold transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-text-light">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-secondary-gold mt-0.5 flex-shrink-0" />
                <span className="text-text-muted">
                  Schwieberdinger Str. 37<br />70435 Stuttgart<br />Deutschland
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-secondary-gold flex-shrink-0" />
                <a href="tel:+49723894934" className="text-text-muted hover:text-secondary-gold transition-colors">
                  +49 723 894 934
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-secondary-gold flex-shrink-0" />
                <a href="mailto:info@indianfoodcorner.de" className="text-text-muted hover:text-secondary-gold transition-colors">
                  info@indianfoodcorner.de
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-text-light">Öffnungszeiten</h4>
            <ul className="space-y-2 text-text-muted">
              <li className="flex justify-between">
                <span>Mo - Fr</span>
                <span>11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Samstag</span>
                <span>12:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sonntag</span>
                <span>12:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-gold/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-text-muted text-sm">
            © 2026 The Indian Food Corner. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-text-muted hover:text-secondary-gold transition-colors">
              Datenschutz
            </a>
            <a href="#" className="text-text-muted hover:text-secondary-gold transition-colors">
              Nutzungsbedingungen
            </a>
            <a href="#" className="text-text-muted hover:text-secondary-gold transition-colors">
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}