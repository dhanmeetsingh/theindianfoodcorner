import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/rejected cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after 1 second delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="w-full bg-bg-dark/95 backdrop-blur-md border-t-2 border-secondary-gold/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            {/* Text Content */}
            <div className="flex-1 pr-8 md:pr-12">
              <h3 className="text-text-light font-heading text-base md:text-lg lg:text-xl mb-2 flex items-center gap-2">
                🍪 Diese Website verwendet technische Cookies
              </h3>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                Wir verwenden nur technisch notwendige Cookies, um die Funktionalität dieser Website zu gewährleisten. 
                Es werden keine Tracking- oder Analyse-Tools eingesetzt. Weitere Informationen finden Sie in unserer{' '}
                <a href="/datenschutz" className="text-secondary-gold hover:underline font-semibold">
                  Datenschutzerklärung
                </a>.
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={handleAccept}
                className="w-full sm:w-auto px-6 md:px-8 py-3 bg-secondary-gold text-bg-dark rounded-full hover:bg-accent-saffron transition-all font-semibold text-sm md:text-base whitespace-nowrap shadow-lg"
              >
                Verstanden
              </button>
              <button
                onClick={handleReject}
                className="w-full sm:w-auto px-6 md:px-8 py-3 bg-bg-medium text-text-light rounded-full hover:bg-bg-medium/80 transition-all font-semibold text-sm md:text-base whitespace-nowrap border border-secondary-gold/20"
              >
                Ablehnen
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={handleReject}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-text-muted hover:text-secondary-gold transition-colors p-1"
              aria-label="Close"
            >
              <X size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}