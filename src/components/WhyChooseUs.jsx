import { motion } from 'framer-motion';
import { Star, Award, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-midnight relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-ice-blue mb-6">
              Nakuru's Finest <span className="text-ice-blue">Grooming Experience</span>
            </h2>
            
            <p className="text-ice-blue/70 text-lg mb-8 leading-relaxed font-inter">
              Step into an environment where luxury meets expertise. At Azzi Lounge, we’ve combined the heritage of classic barbering with a premium spa experience, all set within our stunning marble-and-gold interior. Whether it's a precision executive cut, a deeply relaxing massage, or a refreshing facial, our master barbers and certified therapists ensure absolute perfection.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-col gap-5 mb-10">
              <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                <div className="p-3 bg-royal-blue/10 text-ice-blue rounded-lg">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h4 className="font-playfair font-semibold text-lg text-ice-blue">5.0 Google Rating</h4>
                  <p className="text-sm text-ice-blue/70 font-inter">Based on 27+ Verified Reviews</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                <div className="p-3 bg-royal-blue/10 text-ice-blue rounded-lg">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-playfair font-semibold text-lg text-ice-blue">Expert Master Barbers</h4>
                  <p className="text-sm text-ice-blue/70 font-inter">Years of premium grooming experience</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                <div className="p-3 bg-royal-blue/10 text-ice-blue rounded-lg">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-playfair font-semibold text-lg text-ice-blue">Nakuru's #1 Executive Lounge</h4>
                  <p className="text-sm text-ice-blue/70 font-inter">Voted the best vibe in the city</p>
                </div>
              </div>
            </div>

            <a 
              href="tel:+254700051405"
              className="self-start px-8 py-3 bg-gradient-to-r from-midnight via-royal-blue to-[#1A2F73] text-ice-blue font-semibold rounded-full hover:to-royal-blue border border-royal-blue glow-blue transition-all duration-300 inline-block text-center"
            >
              Book Your Session
            </a>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass-card p-2">
              <img 
                src="/images/our barber taking care of a client.webp" 
                alt="Azzi Lounge master barber attending to a client" 
                className="w-full h-auto rounded-xl object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/800x1000/090D14/F59E0B?text=Master+Barber+at+Work';
                }}
              />
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-royal-blue/5 blur-3xl rounded-full"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
