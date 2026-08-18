import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Maurice Owiti', text: 'It was a good experience ever, happy client, will refer more people, am happy, continue serving others with the same spirit, am humbled and most welcomed' },
  { name: 'Liberty Wanjeri', text: 'A place indeed to visit...There are good barbers..... Have a time to visit...And get your hair done by Zulu or John....' },
  { name: 'anne wagema', text: 'Very child friendly. Amazing customer service . My boys had a perfect hair cut and time. The ambiance is welcoming and exemplary customer service' },
  { name: 'Friezen Nyakiba', text: 'The services were amazing.. Definitely a 10/10' },
  { name: 'Maydim', text: 'Nice barber shop. Enjoyed their haircut and scrub services.' },
  { name: 'githitho sejo', text: 'Best haircut in town, my son rate Azzi lounge 100 stars. True definition of executive reception. Worth every Quid spent' },
  { name: 'Alpha Ruto', text: 'I got the best haircut the waiting area is better than most barber shops and the people are so nice they even allow you to use the charger and also offer you drinks. Wonderful place haircuts are amazing they do manicure and they have offers overall this place is perfect I will come back again' },
  { name: 'Nicole Masese', text: 'A very good haircut the waiting area is better than some barber shops and the people are so nice they even allow you to use the charger Wonder full place haircuts are amazing they do pedicures and they have offers overall this place is perfect' },
  { name: 'brayden mwenda', text: 'The service was good and the hospitality is amazing' },
  { name: 'Winny Chepkirui', text: 'I really loved my time here. It is one of the best spas for ultimate relaxation and a luxurious experience , the owner and staffs are very friendly .' },
  { name: 'EVANS AGOLA', text: 'Very accommodating, good service and proper customer attendance' },
  { name: 'Debra Wambui', text: 'Hello, I loved my manicure and pedicure so much. The place is clean , the stuff are clean and it\'s all professional. The Director is also so welcoming. I can\'t wait for my next appointments' },
  { name: 'Bilal Osman', text: 'Amazing service 10/10' },
  { name: 'Aiden Playstation', text: 'It was good I got free soda 😂' },
  { name: 'Ralf', text: 'Executive Spa! Job well done ,good value for Money. I would highly recommend' },
  { name: 'Melvin Anaseli', text: 'Best pedicure I\'ve ever had' },
  { name: 'Ben 45', text: 'Good services with nice touches' },
  { name: 'Gladwell', text: 'I really enjoyed the services' },
  { name: 'Mino Bryan Bango', text: 'Excellent service and affordable.' },
  { name: 'Julius Ombaye', text: 'Best experience' }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-midnight border-y border-ice-blue/5 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-ice-blue mb-4">
            Client <span className="text-ice-blue">Testimonials</span>
          </h2>
          <p className="text-ice-blue/70 text-lg font-inter max-w-2xl mx-auto flex items-center justify-center gap-2">
            <span>5.0</span>
            <span className="flex text-ice-blue">
              {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-5 h-5 text-yellow-500" />)}
            </span>
            <span>Google Rating</span>
          </p>
        </div>
      </div>

      {/* Marquee Carousel Container */}
      <div className="w-full overflow-hidden relative">
        {/* Fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-midnight to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-midnight to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-[max-content] animate-marquee pb-4 pt-2">
          {/* Duplicate the array twice for seamless looping */}
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl relative w-[350px] md:w-[400px] shrink-0 mx-4 flex flex-col justify-between"
            >
              {/* Google G logo simplified */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-blue-600 font-sans">
                G
              </div>
              
              <div>
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-5 h-5" />)}
                </div>
                <p className="text-ice-blue/90 font-inter italic mb-6 leading-relaxed line-clamp-4">
                  "{review.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-royal-blue/20 text-ice-blue flex items-center justify-center font-bold font-inter shrink-0">
                  {review.name.charAt(0)}
                </div>
                <h4 className="font-playfair font-semibold text-ice-blue truncate">{review.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/search?q=Azzi+Lounge+Barbers+%26+Spa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-ice-blue/5 border border-ice-blue/20 text-ice-blue font-medium rounded-full hover:bg-ice-blue/10 hover:border-royal-blue/50 transition-all duration-300"
          >
            Leave a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
}
