import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
  { src: '/images/reception area close up shot.webp', alt: 'Reception Area Marble Walls' },
  { src: '/images/interior of the shorp.webp', alt: 'Barber Chairs and Mirrors' },
  { src: '/images/our barber taking care of a client.webp', alt: 'Master Barber Attending to a Client' },
  { src: '/images/waiting area.webp', alt: 'Luxury Waiting Lounge' },
  { src: '/images/the outside of the shop.webp', alt: 'Exterior Storefront' },
  { src: '/images/image of the interior.webp', alt: 'Full Interior View' },
  { src: '/images/clients at the reception area.webp', alt: 'Clients at Reception' },
  { src: '/images/sign of the shop.webp', alt: 'Glowing Azzi Lounge Sign' },
  { src: '/images/interior fanishing.webp', alt: 'Interior Finishing Details' },
  { src: '/images/img of interior.webp', alt: 'Additional Interior Angle' },
  { src: '/images/pic showing poster with services being offered.webp', alt: 'Services Poster' },
  { src: '/images/image displaying the services offered.webp', alt: 'Services Menu Display' },
  { src: '/images/reception area.webp', alt: 'Reception Area' }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Fallback placeholder function if image is missing
  const handleImageError = (e, index) => {
    e.target.onerror = null;
    e.target.src = `https://placehold.co/600x${600 + (index % 3) * 200}/090D14/F59E0B?text=Gallery+Image`;
  };

  return (
    <section id="gallery" className="py-24 bg-midnight">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-ice-blue mb-4">
            The <span className="text-ice-blue">Vibe</span>
          </h2>
          <p className="text-ice-blue/70 text-lg font-inter max-w-2xl mx-auto">
            Take a look inside Nakuru's most exclusive grooming destination.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 lg:columns-3 xl:columns-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="break-inside-avoid mb-4 relative group cursor-pointer rounded-xl overflow-hidden glass-card"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => handleImageError(e, index)}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-ice-blue font-playfair text-lg font-medium border border-royal-blue/50 px-4 py-2 rounded-full">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-ice-blue/10 rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl glow-blue"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/1200x800/090D14/F59E0B?text=Gallery+Image`;
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
