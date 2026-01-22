import { motion } from 'motion/react';

const milestones = [
  { year: '2020', title: 'The Beginning', desc: 'Started with family recipes in a small kitchen' },
  { year: '2021', title: 'Coming to Stuttgart', desc: 'Opened our doors to the community' },
  { year: '2023', title: 'Growing Together', desc: 'Expanded and gained recognition' },
  { year: '2026', title: 'Today', desc: '400+ reviews and counting!' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="h-96 relative flex items-center justify-center grain-texture">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1722152667178-be659e54bffc?w=1920)' }}>
          <div className="absolute inset-0 bg-bg-dark/70"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">Our <span className="text-secondary-gold">Story</span></h1>
          <p className="text-xl text-text-muted">From family kitchen to your table</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-6">Our Journey</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              SpiceCraft was born from a passion for authentic Indian cuisine and a dream to share our family's culinary heritage with the world. What started as a small family kitchen has grown into Stuttgart's beloved Indian restaurant.
            </p>
            <p className="text-text-muted leading-relaxed">
              Every dish we serve is a testament to our commitment to quality, authenticity, and the art of Indian cooking. We import our spices directly from India and use traditional cooking methods passed down through generations.
            </p>
          </motion.div>

          <div className="space-y-12 mb-20">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6"
              >
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-secondary-gold/20 flex items-center justify-center">
                  <span className="text-secondary-gold font-bold text-xl">{milestone.year}</span>
                </div>
                <div className="flex-1 bg-bg-medium rounded-xl p-6">
                  <h3 className="font-heading text-xl mb-2 text-secondary-gold">{milestone.title}</h3>
                  <p className="text-text-muted">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {[
              { title: 'Authenticity', desc: 'Traditional recipes, imported spices' },
              { title: 'Quality', desc: 'Fresh ingredients, halal certified' },
              { title: 'Community', desc: 'Local partnerships, sustainability' },
            ].map((value) => (
              <div key={value.title} className="text-center p-6 bg-bg-medium rounded-xl">
                <h3 className="font-heading text-xl mb-3 text-secondary-gold">{value.title}</h3>
                <p className="text-text-muted">{value.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl mb-8">Meet Our Chef</h2>
            <div className="flex flex-col md:flex-row items-center gap-8 bg-bg-medium rounded-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1722152667178-be659e54bffc?w=400"
                alt="Chef"
                className="w-48 h-48 rounded-full object-cover border-4 border-secondary-gold"
              />
              <div className="text-left">
                <h3 className="font-heading text-2xl mb-2 text-secondary-gold">Chef Raj Kumar</h3>
                <p className="text-text-light mb-4">Head Chef & Founder</p>
                <p className="text-text-muted leading-relaxed">
                  "Cooking is not just about following recipes—it's about passion, love, and the joy of bringing people together. Every dish that leaves our kitchen carries a piece of my heart and our rich culinary heritage."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
