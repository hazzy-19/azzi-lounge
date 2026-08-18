import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom Instagram Icon using an SVG
const InstagramIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

// Custom TikTok Icon using an SVG
const TikTokIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function LocationMap() {
  return (
    <section id="location" className="py-24 bg-midnight relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-ice-blue mb-4">
            Find <span className="text-ice-blue">Us</span>
          </h2>
          <p className="text-ice-blue/70 text-lg font-inter max-w-2xl mx-auto">
            Located in the heart of Nakuru, easily accessible with ample parking.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/3 h-[400px] lg:h-[500px] rounded-2xl overflow-hidden glass-card border-none p-2"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.791448661849!2d36.06900147605481!3d-0.28581699971383824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298dc9d5c1926f%3A0x3142cb27d76e55c6!2sAzzi%20Lounge%20Barbers%20%26%20Spa!5e0!3m2!1sen!2ske!4v1709630000000!5m2!1sen!2ske" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '0.75rem' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Azzi Lounge Location"
            ></iframe>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/3 glass-card rounded-2xl p-8 flex flex-col"
          >
            <h3 className="text-2xl font-playfair font-bold text-ice-blue mb-8 border-b border-ice-blue/10 pb-4">
              Contact Details
            </h3>

            <div className="flex flex-col gap-6 font-inter flex-grow">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-royal-blue/10 text-ice-blue rounded-lg shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-ice-blue font-medium mb-1">Address</h4>
                  <p className="text-ice-blue/70 text-sm">Oginga odinga Av, next to Sakinya Motors, Nakuru, Kenya</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-royal-blue/10 text-ice-blue rounded-lg shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-ice-blue font-medium mb-1">Phone</h4>
                  <p className="text-ice-blue/70 text-sm">0700 051 405<br/>0716 058 500</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-royal-blue/10 text-ice-blue rounded-lg shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-ice-blue font-medium mb-1">Email</h4>
                  <a href="mailto:azzilounge254@gmail.com" className="text-ice-blue/70 text-sm hover:text-ice-blue transition-colors">azzilounge254@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-royal-blue/10 text-ice-blue rounded-lg shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-ice-blue font-medium mb-1">Opening Hours</h4>
                  <p className="text-ice-blue/70 text-sm">Open Daily<br/>8:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 pt-6 border-t border-ice-blue/10 flex justify-center gap-6">
              <a 
                href="https://www.instagram.com/azzilounge_barbers_spa1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-ice-blue/5 border border-ice-blue/20 flex items-center justify-center text-ice-blue hover:bg-royal-blue hover:text-white hover:border-royal-blue transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@azziloungebarbers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-ice-blue/5 border border-ice-blue/20 flex items-center justify-center text-ice-blue hover:bg-royal-blue hover:text-white hover:border-royal-blue transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
