import { motion } from 'motion/react';
import React from 'react';

const milestones = [
  { 
    year: '2017', 
    title: 'Der Traum beginnt', 
    desc: 'Ankush Soni eröffnet mit Mut und Leidenschaft sein erstes Restaurant in Stuttgart' 
  },
  { 
    year: '2018', 
    title: 'Wurzeln schlagen', 
    desc: 'Die Stuttgarter Community umarmt unsere authentische Küche – erste Stammgäste entstehen' 
  },
  { 
    year: '2021', 
    title: 'Gemeinsam wachsen', 
    desc: 'Trotz Herausforderungen bleiben wir stark – unsere Gäste stehen hinter uns' 
  },
  { 
    year: '2026', 
    title: 'Ein Teil von Stuttgart', 
    desc: 'Über 427 Bewertungen, 4,8 Sterne – Ihre Liebe ist unsere größte Auszeichnung' 
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="h-96 relative flex items-center justify-center grain-texture">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/restaurant.png)' }}>
          <div className="absolute inset-0 bg-bg-dark/70"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">Unsere <span className="text-secondary-gold">Geschichte</span></h1>
          <p className="text-xl text-text-muted">Eine Reise von Herzen – für Stuttgart</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Opening Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-8 text-center">
              Von einem <span className="text-secondary-gold">Traum</span> zu Ihrer <span className="text-secondary-gold">Lieblingsadresse</span>
            </h2>
            <div className="space-y-6 text-text-muted leading-relaxed text-lg">
              <p>
                Im Jahr 2017 hatte Ankush Soni einen Traum: Die authentischen Aromen seiner 
                Heimat nach Stuttgart zu bringen. Mit nichts als Leidenschaft, Familienrezepten 
                und dem Mut eines Neuanfangs öffnete er die Türen zu unserem Restaurant.
              </p>
              <p>
                Was als kleine Küche begann, ist heute ein Zuhause geworden – nicht nur für uns, 
                sondern für jeden, der durch unsere Tür tritt. Jedes Gericht erzählt eine Geschichte. 
                Jede Gewürzmischung trägt die Seele Indiens. Und jeder Gast wird Teil unserer Familie.
              </p>
              <p>
                Stuttgart hat uns nicht nur aufgenommen – diese Stadt hat uns geformt. Hier haben 
                wir gelernt, dass gutes Essen Brücken baut, Kulturen verbindet und Herzen öffnet. 
                Ihre Treue, Ihr Lächeln, Ihre Geschichten – das ist es, was uns jeden Tag aufs 
                Neue antreibt.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="font-heading text-3xl text-center mb-12">
              Unsere <span className="text-secondary-gold">Reise</span>
            </h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-start gap-6"
                >
                  <div className="flex-shrink-0 w-28 h-28 rounded-full bg-gradient-to-br from-secondary-gold/30 to-accent-saffron/30 flex items-center justify-center border-2 border-secondary-gold">
                    <span className="text-secondary-gold font-bold text-2xl">{milestone.year}</span>
                  </div>
                  <div className="flex-1 bg-bg-medium rounded-2xl p-6 hover:bg-bg-medium/80 transition-all">
                    <h3 className="font-heading text-2xl mb-3 text-secondary-gold">{milestone.title}</h3>
                    <p className="text-text-muted text-lg leading-relaxed">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-heading text-3xl text-center mb-12">
              Wofür wir <span className="text-secondary-gold">stehen</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Authentizität', 
                  desc: 'Originalrezepte aus Nordindien, Gewürze direkt importiert, unverfälschter Geschmack' 
                },
                { 
                  title: 'Qualität', 
                  desc: 'Täglich frische Zutaten, sorgfältige Zubereitung, Liebe in jedem Gericht' 
                },
                { 
                  title: 'Gemeinschaft', 
                  desc: 'Stuttgart ist unser Zuhause – wir leben Integration durch kulinarische Begegnung' 
                },
              ].map((value) => (
                <div 
                  key={value.title} 
                  className="text-center p-8 bg-gradient-to-br from-bg-medium to-bg-medium/50 rounded-2xl hover:shadow-xl transition-all border border-secondary-gold/10"
                >
                  <h3 className="font-heading text-2xl mb-4 text-secondary-gold">{value.title}</h3>
                  <p className="text-text-muted leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Founder Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-heading text-3xl text-center mb-12">
              Das Herz hinter <span className="text-secondary-gold">allem</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-10 bg-gradient-to-br from-bg-medium to-bg-dark rounded-3xl p-10 border-2 border-secondary-gold/20">
              <img
                src="https://images.unsplash.com/photo-1722152667178-be659e54bffc?w=400"
                alt="Ankush Soni"
                className="w-56 h-56 rounded-full object-cover border-4 border-secondary-gold shadow-2xl"
              />
              <div className="flex-1 text-left">
                <h3 className="font-heading text-3xl mb-2 text-secondary-gold">Ankush Soni</h3>
                <p className="text-text-light mb-6 text-lg font-semibold">Gründer & Inhaber</p>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p className="text-lg italic border-l-4 border-secondary-gold pl-4">
                    „Als ich 2017 nach Stuttgart kam, hatte ich einen Koffer voller Träume und 
                    ein Herz voller Rezepte. Heute sehe ich in jedem zufriedenen Gesicht einen 
                    Grund, weiterzumachen."
                  </p>
                  <p>
                    Kochen ist für mich mehr als Beruf – es ist meine Art zu sagen: 'Willkommen. 
                    Du bist hier zu Hause.' Jedes Gewürz, jede Flamme, jeder Teller ist ein Stück 
                    meiner Geschichte, die ich mit Ihnen teilen möchte.
                  </p>
                  <p>
                    Stuttgart hat mir eine Chance gegeben. Und jeden Tag versuche ich, diese Stadt 
                    mit dem zurückzugeben, was ich am besten kann: Essen, das von Herzen kommt.
                  </p>
                </div>
                <p className="mt-6 text-secondary-gold font-accent text-xl">
                  — Ankush Soni
                </p>
              </div>
            </div>
          </motion.div>

          {/* Closing Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-secondary-gold/10 via-accent-saffron/10 to-secondary-gold/10 rounded-3xl p-12 border border-secondary-gold/20"
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-6">
              Danke, dass Sie <span className="text-secondary-gold">Teil unserer Geschichte</span> sind
            </h2>
            <p className="text-text-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Ohne Sie – unsere treuen Gäste, unsere Stuttgarter Familie – wäre diese Reise 
              nicht möglich gewesen. Jede Bewertung, jedes Lächeln, jeder Besuch bedeutet uns die Welt. 
              Von Herzen: Vielen Dank.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-10 py-4 bg-secondary-gold text-bg-dark rounded-full hover:bg-accent-saffron transition-all duration-300 font-semibold text-lg shadow-lg"
            >
              Besuchen Sie uns
            </a>
          </motion.div>

        </div>
      </div>
    </div>
  );
}