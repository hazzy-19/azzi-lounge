import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const links = [
  { name: 'Home', to: 'home' },
  { name: 'Why Choose Us', to: 'why-choose-us' },
  { name: 'Services', to: 'services' },
  { name: 'Location', to: 'location' },
  { name: 'Gallery', to: 'gallery' },
  { name: 'Reviews', to: 'reviews' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-midnight/90 backdrop-blur-md border-b border-ice-blue/5 py-3 shadow-lg' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-ice-blue hover:text-ice-blue transition-colors p-2 -ml-2 z-50 focus:outline-none"
            aria-label="Open Menu"
          >
            <Menu className="w-8 h-8" />
          </button>

          {/* Brand Identity Block */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img src="/logo.svg" alt="Azzi Lounge Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            <div className="text-left flex flex-col justify-center">
              <h1 className="font-playfair text-xl md:text-2xl font-bold text-ice-blue group-hover:text-ice-blue transition-colors leading-none">
                AZZI LOUNGE
              </h1>
              <p className="font-inter text-[0.60rem] md:text-xs tracking-[0.3em] text-ice-blue/80 uppercase mt-1.5 group-hover:text-ice-blue transition-colors leading-none">
                Barbershop & Spa
              </p>
            </div>
          </Link>
        </div>
      </header>

      {/* Full-screen Navigation Drawer -> Subtle Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-3/4 max-w-sm z-[100] bg-midnight/95 backdrop-blur-md border-r border-ice-blue/10 flex flex-col pt-24 px-8 shadow-2xl"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-ice-blue hover:text-ice-blue transition-colors p-2"
                aria-label="Close Menu"
              >
                <X className="w-8 h-8" />
              </button>

              <nav className="flex flex-col items-start gap-6">
                {links.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={() => setIsOpen(false)}
                      className="font-playfair text-2xl md:text-3xl text-ice-blue hover:text-ice-blue transition-colors cursor-pointer block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  href="tel:+254700051405"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * links.length }}
                  onClick={() => setIsOpen(false)}
                  className="mt-6 w-full py-3 bg-gradient-to-r from-midnight via-royal-blue to-[#1A2F73] text-ice-blue font-semibold rounded-lg hover:to-royal-blue border border-royal-blue glow-blue transition-all duration-300 text-center block"
                >
                  Book Appointment
                </motion.a>
              </nav>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-auto mb-10 text-left text-ice-blue/70 text-sm font-inter"
              >
                <p>Oginga odinga Av, next to Sakinya Motors, Nakuru, Kenya</p>
                <p className="mt-1">0700 051 405 / 0716 058 500</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
