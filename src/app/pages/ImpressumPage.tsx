import { motion } from 'motion/react';
import React from 'react';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="h-64 relative flex items-center justify-center grain-texture">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/restaurant.png)' }}>
          <div className="absolute inset-0 bg-bg-dark/80"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">
            <span className="text-secondary-gold">Impressum</span>
          </h1>
          <p className="text-xl text-text-muted">Angaben gemäß § 5 TMG</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-bg-medium rounded-2xl p-8 md:p-12"
        >
          <div className="space-y-8 text-text-light">
            
            {/* Business Information */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-2 text-text-muted">
                <p className="text-lg font-semibold text-text-light">The Indian Food Corner</p>
                <p>Inhaber: Ankush Soni</p>
                <p>Schwieberdinger Str. 37</p>
                <p>70435 Stuttgart</p>
                <p>Deutschland</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">Kontakt</h2>
              <div className="space-y-2 text-text-muted">
                <p>Telefon: <a href="tel:+491723894934" className="text-secondary-gold hover:underline">+49 172 389 4934</a></p>
                <p>E-Mail: <a href="mailto:info@spicecraft.de" className="text-secondary-gold hover:underline">info@spicecraft.de</a></p>
              </div>
            </div>

            {/* VAT ID - Add if applicable */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">Umsatzsteuer-ID</h2>
              <div className="text-text-muted">
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                <p className="mt-2 text-text-light">[Bitte USt-IdNr. einfügen, falls vorhanden]</p>
                <p className="text-sm mt-2 italic">Falls keine USt-IdNr. vorhanden, diesen Abschnitt entfernen.</p>
              </div>
            </div>

            {/* Responsible for content */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <div className="text-text-muted">
                <p>Ankush Soni</p>
                <p>Schwieberdinger Str. 37</p>
                <p>70435 Stuttgart</p>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">Streitschlichtung</h2>
              <div className="text-text-muted space-y-4">
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-secondary-gold hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>

            {/* Liability for Content */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">Haftung für Inhalte</h2>
              <div className="text-text-muted space-y-4">
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                  zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                  Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der 
                  Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                  Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>
            </div>

            {/* Liability for Links */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">Haftung für Links</h2>
              <div className="text-text-muted space-y-4">
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
                <p>
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche 
                  Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht 
                  zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div>
              <h2 className="font-heading text-2xl text-secondary-gold mb-4">Urheberrecht</h2>
              <div className="text-text-muted space-y-4">
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
                <p>
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. 
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
                  Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
                  auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. 
                  Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}