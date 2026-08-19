import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import VideoPreview from './VideoPreview';

const mediaItems = [
  { id: 'img-1', type: 'image', src: '/images/reception area close up shot.webp', alt: 'Reception Area Marble Walls' },
  { id: 'vid-1', type: 'video', previewUrl: '/videos/interior_look.mp4', videoUrl: '/videos/interior_look.mp4', alt: 'Full Interior Walkthrough' },
  { id: 'img-3', type: 'image', src: '/images/our barber taking care of a client.webp', alt: 'Master Barber Attending to a Client' },
  { id: 'vid-3', type: 'video', previewUrl: '/videos/video_4.mp4', videoUrl: '/videos/video_4.mp4', alt: 'Grooming Session in Progress' },
  { id: 'img-2', type: 'image', src: '/images/interior of the shorp.webp', alt: 'Barber Chairs and Mirrors' },
  { id: 'vid-4', type: 'video', previewUrl: '/videos/video_10.mp4', videoUrl: '/videos/video_10.mp4', alt: 'Executive Cut Details' },
  { id: 'img-5', type: 'image', src: '/images/the outside of the shop.webp', alt: 'Exterior Storefront' },
  { id: 'vid-2', type: 'video', previewUrl: '/videos/nails_work.mp4', videoUrl: '/videos/nails_work.mp4', alt: 'Precision Nail Art Service' },
  { id: 'img-4', type: 'image', src: '/images/waiting area.webp', alt: 'Luxury Waiting Lounge' },
  { id: 'vid-6', type: 'video', previewUrl: '/videos/video_3.mp4', videoUrl: '/videos/video_3.mp4', alt: 'Lounge Atmosphere' },
  { id: 'img-6', type: 'image', src: '/images/clients at the reception area.webp', alt: 'Clients at Reception' },
  { id: 'vid-5', type: 'video', previewUrl: '/videos/video_1.mp4', videoUrl: '/videos/video_1.mp4', alt: 'Barber Styling' }
];

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeVideoId, setActiveVideoId] = useState(null);

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
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="break-inside-avoid mb-4 relative group cursor-pointer rounded-xl overflow-hidden glass-card"
              onClick={() => setSelectedMedia(item)}
            >
              {item.type === 'video' ? (
                <VideoPreview
                  src={item.previewUrl}
                  isActive={activeVideoId === item.id}
                  onBecomeActive={() => setActiveVideoId(item.id)}
                  onBecomeInactive={() => {
                    if (activeVideoId === item.id) setActiveVideoId(null);
                  }}
                />
              ) : (
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => handleImageError(e, index)}
                />
              )}
              
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="text-ice-blue font-playfair text-lg font-medium border border-royal-blue/50 px-4 py-2 rounded-full">
                  {item.type === 'video' ? 'Play Video' : 'View'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-ice-blue/10 rounded-full p-2 z-[210]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMedia(null);
              }}
            >
              <X className="w-8 h-8" />
            </button>
            
            {selectedMedia.type === 'video' ? (
              <motion.video
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selectedMedia.videoUrl}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl glow-blue"
                onClick={(e) => e.stopPropagation()}
                controls
                autoPlay
                playsInline
              />
            ) : (
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl glow-blue"
                onClick={(e) => e.stopPropagation()}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/1200x800/090D14/F59E0B?text=Gallery+Media`;
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
