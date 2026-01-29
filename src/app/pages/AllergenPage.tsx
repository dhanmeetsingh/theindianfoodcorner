import { AlertCircle, Droplet, Egg, Fish, Flame, Leaf, Milk, Nut, Shell, Wheat } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

const allergenInfo = [
  {
    icon: Wheat,
    code: 'a',
    name: 'Glutenhaltiges Getreide',
    description: 'Weizen, Roggen, Gerste, Hafer, Dinkel, Kamut oder Hybridstämme davon',
    dishes: 'Naan, Roti, Bhatura, Samosas, Pakoras, Frühlingsrollen',
    alternatives: 'Reis-Gerichte, Dal, Curry ohne Brot'
  },
  {
    icon: Egg,
    code: 'b',
    name: 'Eier oder Eiererzeugnisse',
    description: 'Eier und daraus gewonnene Erzeugnisse',
    dishes: 'Einige Naan-Sorten, bestimmte Marinaden',
    alternatives: 'Tandoori Roti, Reis-Gerichte, vegane Optionen'
  },
  {
    icon: Milk,
    code: 'c',
    name: 'Milch oder Milchprodukte',
    description: 'Milch und daraus gewonnene Erzeugnisse (einschließlich Laktose)',
    dishes: 'Paneer-Gerichte, Butter Chicken, Korma, Raita, Malai Kofta, Sahne-Soßen',
    alternatives: 'Vegane Curries, Chana Masala, Dal, Tandoori-Gerichte ohne Joghurt'
  },
  {
    icon: Droplet,
    code: 'd',
    name: 'Senf oder Senferzeugnisse',
    description: 'Senf und daraus gewonnene Erzeugnisse',
    dishes: 'Kann in Gewürzmischungen und Marinaden enthalten sein',
    alternatives: 'Bitte vor Bestellung nachfragen'
  },
  {
    icon: Leaf,
    code: 'e',
    name: 'Soja oder Sojaerzeugnisse',
    description: 'Sojabohnen und daraus gewonnene Erzeugnisse',
    dishes: 'Kann in bestimmten Soßen vorkommen',
    alternatives: 'Traditionelle Curry-Gerichte ohne Soja-Soße'
  },
  {
    icon: Leaf,
    code: 'f',
    name: 'Sellerie oder Sellerieerzeugnisse',
    description: 'Sellerie und daraus gewonnene Erzeugnisse',
    dishes: 'Kann in Gewürzmischungen und Gemüse-Gerichten enthalten sein',
    alternatives: 'Bitte vor Bestellung nachfragen'
  },
  {
    icon: Shell,
    code: 'g',
    name: 'Krebs- oder Weichtiere',
    description: 'Krebstiere, Weichtiere und daraus gewonnene Erzeugnisse',
    dishes: 'Prawn Curry, Prawn Biryani, Prawn Tikka, Prawn Madras, Prawn Palak',
    alternatives: 'Chicken, Lamb oder vegetarische Gerichte'
  },
  {
    icon: Fish,
    code: 'h',
    name: 'Fisch oder Fischerzeugnisse',
    description: 'Fisch und daraus gewonnene Erzeugnisse',
    dishes: 'Fish Curry',
    alternatives: 'Chicken, Lamb, Paneer oder Dal-Gerichte'
  },
  {
    icon: Nut,
    code: 'i',
    name: 'Nuss-, Erdnuss- oder Schalenfrüchte',
    description: 'Schalenfrüchte (Mandeln, Haselnüsse, Walnüsse, Cashewnüsse, Pistazien, etc.)',
    dishes: 'Korma-Gerichte (Cashew-Soße), Biryani (Garnierung), Malai Kofta, Navratan Korma',
    alternatives: 'Curry-Gerichte ohne Nuss-Soße, einfache Masala-Gerichte'
  },
  {
    icon: Flame,
    code: 'j',
    name: 'Schwefeldioxid oder Sulfite',
    description: 'Schwefeldioxid und Sulfite in Konzentrationen von mehr als 10 mg/kg oder 10 mg/l',
    dishes: 'Kann in getrockneten Gewürzen oder importierten Zutaten vorkommen',
    alternatives: 'Frisch zubereitete Gerichte, bitte nachfragen'
  }
];

const additiveInfo = [
  {
    code: '1',
    name: 'Geschwärzt',
    description: 'Lebensmittel mit geschwärzter Oberfläche'
  },
  {
    code: '2',
    name: 'Koffeinhaltig',
    description: 'Enthält Koffein'
  },
  {
    code: '3',
    name: 'Mit Antioxidationsmittel',
    description: 'Antioxidationsmittel zur Haltbarkeit'
  },
  {
    code: '4',
    name: 'Mit Farbstoff',
    description: 'Enthält Lebensmittelfarbstoffe'
  },
  {
    code: '5',
    name: 'Mit Geschmacksverstärker',
    description: 'Enthält geschmacksverstärkende Zusatzstoffe'
  },
  {
    code: '6',
    name: 'Mit Konservierungsstoffen',
    description: 'Konservierungsstoffe zur längeren Haltbarkeit'
  },
  {
    code: '7',
    name: 'Phenylalaninquelle',
    description: 'Enthält eine Phenylalaninquelle (wichtig für Phenylketonurie-Betroffene)'
  }
];

const dietaryCategories = [
  {
    title: 'Vegetarisch',
    icon: '🌱',
    description: 'Große Auswahl an vegetarischen Gerichten mit Paneer, Gemüse und Linsen',
    examples: 'Palak Paneer, Dal Makhani, Chana Masala, Malai Kofta, Matar Paneer'
  },
  {
    title: 'Vegan',
    icon: '🥬',
    description: 'Viele Gerichte können vegan zubereitet werden (ohne Milchprodukte und Eier)',
    examples: 'Chana Masala, Gemüse-Curry, Dal, Bhindi Masala, Tandoori Roti (ohne Ghee)'
  },
  {
    title: 'Glutenfrei',
    icon: '🌾',
    description: 'Alle Reis- und Curry-Gerichte sind glutenfrei (ohne Brot)',
    examples: 'Biryani, alle Curry-Gerichte mit Reis, Dal, Tandoori-Gerichte'
  },
  {
    title: 'Laktosefrei',
    icon: '🥛',
    description: 'Gerichte ohne Milchprodukte, Sahne oder Ghee verfügbar',
    examples: 'Chicken Curry, Lamb Karahi, Chana Masala, Gemüse ohne Paneer'
  }
];

export default function AllergenPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="h-96 relative flex items-center justify-center grain-texture">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/homepage-banner.png)' }}>
          <div className="absolute inset-0 bg-bg-dark/80"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">
            Allergene & <span className="text-secondary-gold">Zusatzstoffe</span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Ihre Gesundheit liegt uns am Herzen. Informieren Sie sich über Allergene und Zusatzstoffe in unseren Gerichten.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        
        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-secondary-gold/10 border-2 border-secondary-gold/30 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-secondary-gold flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-heading text-2xl text-secondary-gold mb-3">Wichtiger Hinweis</h2>
                <p className="text-text-light leading-relaxed mb-3">
                  Bitte informieren Sie uns bei der Bestellung über Ihre Allergien oder Unverträglichkeiten. 
                  Unsere Küche arbeitet mit verschiedenen Zutaten, daher können wir Kreuzkontaminationen nicht 
                  vollständig ausschließen.
                </p>
                <p className="text-text-muted">
                  <strong>Kontakt:</strong> <a href="tel:+491723894934" className="text-secondary-gold hover:underline">+49 172 389 4934</a> oder 
                  per <a href="https://wa.me/491723894934" className="text-secondary-gold hover:underline">WhatsApp</a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Allergen Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">
            Allergene in unseren <span className="text-secondary-gold">Gerichten</span>
          </h2>
          <p className="text-center text-text-muted mb-12 max-w-3xl mx-auto">
            Gemäß EU-Verordnung Nr. 1169/2011 kennzeichnen wir folgende Allergene in unseren Speisen:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {allergenInfo.map((allergen, index) => (
              <motion.div
                key={allergen.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-bg-medium rounded-2xl p-6 hover:shadow-xl transition-all border border-secondary-gold/10 hover:border-secondary-gold/30"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-secondary-gold/20 flex items-center justify-center flex-shrink-0">
                    <allergen.icon className="w-7 h-7 text-secondary-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-secondary-gold text-bg-dark rounded-full text-sm font-bold min-w-[32px] text-center">
                        {allergen.code}
                      </span>
                      <h3 className="font-heading text-lg text-text-light">{allergen.name}</h3>
                    </div>
                    <p className="text-text-muted text-sm mb-3">{allergen.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 pt-3 border-t border-secondary-gold/10">
                  <div>
                    <p className="text-xs text-secondary-gold font-semibold mb-1">ENTHALTEN IN:</p>
                    <p className="text-text-muted text-sm">{allergen.dishes}</p>
                  </div>
                  <div>
                    <p className="text-xs text-green-500 font-semibold mb-1">ALTERNATIVEN:</p>
                    <p className="text-text-muted text-sm">{allergen.alternatives}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additives Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">
            <span className="text-secondary-gold">Zusatzstoffe</span>
          </h2>
          <p className="text-center text-text-muted mb-12 max-w-3xl mx-auto">
            Kennzeichnung der in unseren Speisen verwendeten Zusatzstoffe:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additiveInfo.map((additive, index) => (
              <motion.div
                key={additive.code}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-bg-medium rounded-xl p-5 border border-secondary-gold/10 hover:border-secondary-gold/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <span className="px-3 py-1 bg-accent-saffron/20 text-accent-saffron rounded-full text-sm font-bold min-w-[32px] text-center flex-shrink-0">
                    {additive.code}
                  </span>
                  <div>
                    <h3 className="font-semibold text-text-light mb-2">{additive.name}</h3>
                    <p className="text-text-muted text-sm">{additive.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dietary Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-12">
            Ernährungs<span className="text-secondary-gold">formen</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {dietaryCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-bg-medium to-bg-dark rounded-2xl p-8 border border-secondary-gold/20 hover:shadow-2xl transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl">{category.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl text-secondary-gold mb-3">{category.title}</h3>
                    <p className="text-text-muted mb-4 leading-relaxed">{category.description}</p>
                    <div className="bg-bg-dark/50 rounded-xl p-4">
                      <p className="text-xs text-secondary-gold font-semibold mb-2">BEISPIELE:</p>
                      <p className="text-text-light text-sm">{category.examples}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-12">
            Häufig gestellte <span className="text-secondary-gold">Fragen</span>
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'Können Sie Gerichte ohne bestimmte Allergene zubereiten?',
                a: 'Ja, in den meisten Fällen können wir Gerichte anpassen. Bitte informieren Sie uns bei der Bestellung über Ihre spezifischen Bedürfnisse, damit wir die bestmögliche Lösung finden können.'
              },
              {
                q: 'Wie kennzeichnen Sie Allergene auf der Speisekarte?',
                a: 'Wir verwenden Buchstabencodes (a-j) zur Kennzeichnung von Allergenen und Zahlencodes (1-7) für Zusatzstoffe. Bei Fragen zu einzelnen Gerichten beraten wir Sie gerne persönlich.'
              },
              {
                q: 'Sind alle Gewürzmischungen glutenfrei?',
                a: 'Die meisten unserer traditionellen indischen Gewürzmischungen sind von Natur aus glutenfrei. Gluten kommt hauptsächlich in Brot-Produkten (Naan, Roti) vor. Bei Unsicherheiten sprechen Sie uns bitte vor der Bestellung an.'
              },
              {
                q: 'Bieten Sie vegane Optionen an?',
                a: 'Ja! Viele unserer Gerichte können vegan zubereitet werden. Chana Masala, Dal und verschiedene Gemüse-Currys sind beliebte vegane Optionen. Bitte bestellen Sie "ohne Ghee, Sahne und Milchprodukte".'
              },
              {
                q: 'Gibt es Kreuzkontaminationen in der Küche?',
                a: 'Unsere Küche arbeitet mit vielen verschiedenen Zutaten. Trotz größter Sorgfalt können wir Spuren von Allergenen in anderen Gerichten nicht vollständig ausschließen. Bei schweren Allergien sprechen Sie bitte vorab mit uns.'
              },
              {
                q: 'Was bedeutet "Phenylalaninquelle"?',
                a: 'Diese Kennzeichnung ist wichtig für Menschen mit Phenylketonurie (PKU). Sie zeigt an, dass das Produkt Phenylalanin enthält, eine Aminosäure, die von PKU-Betroffenen nicht abgebaut werden kann.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-bg-medium rounded-xl p-6 border border-secondary-gold/10 hover:border-secondary-gold/20 transition-all">
                <h3 className="font-heading text-lg text-secondary-gold mb-3">{faq.q}</h3>
                <p className="text-text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-secondary-gold/10 via-accent-saffron/10 to-secondary-gold/10 rounded-3xl p-12 border border-secondary-gold/20"
        >
          <h2 className="font-heading text-3xl mb-6">
            Haben Sie Fragen zu <span className="text-secondary-gold">Allergenen</span>?
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
            Unser Team berät Sie gerne persönlich. Kontaktieren Sie uns telefonisch oder per WhatsApp 
            für detaillierte Informationen zu unseren Gerichten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+491723894934"
              className="px-8 py-4 bg-secondary-gold text-bg-dark rounded-full hover:bg-accent-saffron transition-all font-semibold text-lg shadow-lg inline-flex items-center justify-center gap-2"
            >
              📞 Anrufen
            </a>
            <a 
              href="https://wa.me/491723894934?text=Ich habe eine Frage zu Allergenen"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white rounded-full hover:bg-[#20BA5A] transition-all font-semibold text-lg shadow-lg inline-flex items-center justify-center gap-2"
            >
              💬 WhatsApp
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}