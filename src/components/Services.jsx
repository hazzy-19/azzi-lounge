import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Flower2, Sparkles, Droplets, Gem } from 'lucide-react';

const WHATSAPP_BASE = "https://wa.me/254700051405?text=";

const categories = [
  { id: 'barber', name: 'Executive Grooming', icon: Scissors },
  { id: 'spa', name: 'Luxury Spa', icon: Sparkles },
  { id: 'massage', name: 'Massage Lounge', icon: Flower2 },
  { id: 'nails', name: 'Nails & Foot Care', icon: Droplets },
  { id: 'vip', name: 'VIP Combos', icon: Gem }
];

const servicesData = {
  barber: [
    { name: 'Executive Haircut', desc: 'Includes hot towel, head wash, scalp massage & aftershave splash — standard Kenyan executive service.', bg: '/images/services/executive_haircut.webp' },
    { name: 'Beard Sculpting', desc: 'Precision line-up & nourishing beard oil treatment.', bg: '/images/services/beard_sculpting.webp' },
    { name: 'Hair Dye & Tint', desc: 'Black tint & premium color restoration.', bg: '/images/services/hair_dye___tint.webp' },
    { name: 'Kids & Teens VIP Cut', desc: 'Gentle, stylish cuts for the young gentlemen.', bg: '/images/services/kids___teens_vip_cut.webp' }
  ],
  spa: [
    { name: 'Deep Cleansing Facial', desc: 'Complete with exfoliating scrub to remove dead skin cells.', bg: '/images/services/deep_cleansing_facial.webp' },
    { name: 'Black Mask Pore Detox', desc: 'Includes facial steaming to open and clear out pores.', bg: '/images/services/black_mask_pore_detox.webp' },
    { name: 'Skin Hydration Therapy', desc: 'Rejuvenation therapy for a glowing, healthy look.', bg: '/images/services/skin_hydration_therapy.webp' }
  ],
  massage: [
    { name: 'Full Body Swedish Massage', desc: 'Classic full-body relaxation to improve circulation.', bg: '/images/services/full_body_swedish_massage.webp' },
    { name: 'Deep Tissue Muscle Relief', desc: 'Intense therapy targeting deep muscle knots and tension.', bg: '/images/services/deep_tissue_muscle_relief.webp' },
    { name: 'Aromatherapy & Hot Stone', desc: 'Soothing warmth with essential oils for ultimate calm.', bg: '/images/services/aromatherapy___hot_stone.webp' },
    { name: 'Head, Neck & Shoulder', desc: 'Quick stress relief targeting common tension areas.', bg: '/images/services/head__neck___shoulder.webp' }
  ],
  nails: [
    { name: "Gentleman's Executive Manicure", desc: 'Clean, shaped, and professional hand care.', bg: '/images/services/gentleman_s_executive_manicure.webp' },
    { name: 'Deluxe Spa Pedicure', desc: 'Includes an exfoliating foot scrub and relaxing soak.', bg: '/images/services/deluxe_spa_pedicure.webp' },
    { name: 'Nail Buffing & Shaping', desc: 'Finished with nourishing cuticle oil.', bg: '/images/services/nail_buffing___shaping.webp' }
  ],
  vip: [
    { name: 'The Ultimate Vibe Package', desc: 'Executive Cut + Beard Treatment + Facial Steaming + Head/Shoulder Massage + Spa Pedicure.', bg: '/images/services/the_ultimate_vibe_package.webp' },
    { name: 'Special Groom Package', desc: 'Complete event preparation ensuring you look your absolute best.', bg: '/images/services/special_groom_package.webp' }
  ]
};

export default function Services() {
  const [activeTab, setActiveTab] = useState('barber');

  const bookViaWhatsApp = (serviceName) => {
    const text = encodeURIComponent(`Hi Azzi Lounge, I'd like to book: ${serviceName}`);
    window.open(`${WHATSAPP_BASE}${text}`, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-midnight border-y border-ice-blue/5 relative">
      <div className="absolute inset-0 bg-royal-blue/5 blur-[100px] opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-ice-blue mb-4">
            Our Premium <span className="text-ice-blue">Services</span>
          </h2>
          <p className="text-ice-blue/70 text-lg font-inter max-w-2xl mx-auto">
            Experience our curated selection of luxury grooming and wellness treatments.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-3 rounded-full flex items-center gap-2 text-sm md:text-base font-medium font-inter transition-all duration-300 ${
                  isActive 
                    ? 'bg-royal-blue text-white glow-blue shadow-lg transform scale-105' 
                    : 'bg-ice-blue/5 text-ice-blue border border-ice-blue/10 hover:bg-ice-blue/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-ice-blue'}`} />
                {cat.name}
              </button>
            )
          })}
        </div>

        {/* Services List */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {servicesData[activeTab].map((service, index) => (
                <div 
                  key={index} 
                  className="relative rounded-2xl overflow-hidden flex flex-col h-full group shadow-lg border border-ice-blue/10 hover:border-royal-blue/30 transition-colors"
                >
                  {/* Background Image with heavy filter */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${service.bg}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-midnight/85 group-hover:bg-midnight/75 transition-colors duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 flex flex-col h-full">
                    <h3 className="text-xl font-playfair font-semibold text-ice-blue mb-2 group-hover:text-white transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-ice-blue/80 text-sm font-inter flex-grow mb-6 drop-shadow-md">
                      {service.desc}
                    </p>
                    <button 
                      onClick={() => bookViaWhatsApp(service.name)}
                      className="w-full py-2.5 rounded-lg bg-ice-blue/10 backdrop-blur-sm border border-royal-blue/30 text-ice-blue font-medium font-inter hover:bg-royal-blue hover:text-white transition-colors"
                    >
                      Book This Service
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
