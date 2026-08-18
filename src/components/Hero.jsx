import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] flex items-center bg-midnight overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 bg-[url('/images/reception%20area.webp')] lg:bg-[url('/images/reception%20area%20close%20up%20shot.webp')]"
        style={{ backgroundColor: '#090D14' }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent sm:bg-gradient-to-l sm:from-midnight/90 sm:via-midnight/50 sm:to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center items-center md:items-start pt-20">
        {/* Content Box (No Card) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-xl text-center md:text-left mx-auto md:mx-0"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-ice-blue leading-tight mb-3 drop-shadow-lg"
          >
            Welcome to <span className="text-ice-blue">Azzi Lounge</span><br/> Barbershop & Spa
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-ice-blue text-lg md:text-xl font-medium font-playfair italic mb-6 drop-shadow-md"
          >
            "More Than a Cut — It's a Vibe"
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-ice-blue/90 text-base md:text-lg mb-8 font-inter font-light leading-relaxed drop-shadow-md"
          >
            Nakuru's premier executive grooming & luxury spa destination. World-class cuts, therapeutic massages, facial treatments & nail care — all in absolute comfort.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <a 
              href="tel:+254700051405"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-midnight via-royal-blue to-[#1A2F73] text-ice-blue font-semibold rounded-full hover:to-royal-blue border border-royal-blue glow-blue transition-all duration-300 shadow-lg text-center inline-block"
            >
              Book Appointment
            </a>
            <Link 
              to="why-choose-us"
              smooth={true}
              duration={500}
              offset={-80}
              className="w-full sm:w-auto px-8 py-3 bg-ice-blue/5 border border-ice-blue/20 text-ice-blue font-medium rounded-full hover:bg-ice-blue/10 hover:border-white/40 transition-all duration-300 cursor-pointer text-center"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
