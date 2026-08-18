import { Link } from 'react-scroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-ice-blue/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div>
            <h2 className="font-playfair text-2xl font-bold text-ice-blue mb-4">
              AZZI LOUNGE
            </h2>
            <p className="font-inter text-sm tracking-widest text-ice-blue/80 uppercase mb-6">
              Barbershop & Spa
            </p>
            <p className="text-ice-blue/70 font-inter text-sm leading-relaxed">
              Nakuru's premier executive grooming & luxury spa destination. More Than a Cut — It's a Vibe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-semibold text-ice-blue mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3 font-inter text-sm text-ice-blue/70">
              {['Home', 'Services', 'Gallery', 'Reviews', 'Location'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase().replace(' ', '-')} 
                    smooth={true} 
                    duration={500} 
                    offset={-80}
                    className="hover:text-ice-blue transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="tel:+254700051405"
                  className="hover:text-ice-blue transition-colors"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="font-playfair text-xl font-semibold text-ice-blue mb-6">Contact & Hours</h3>
            <ul className="flex flex-col gap-3 font-inter text-sm text-ice-blue/70">
              <li>Oginga odinga Av, next to Sakinya Motors, Nakuru, Kenya</li>
              <li>0700 051 405 / 0716 058 500</li>
              <li>azzilounge254@gmail.com</li>
              <li className="mt-2 text-ice-blue">Open Daily: 8:00 AM – 8:00 PM</li>
            </ul>
          </div>

          {/* Payment & Director */}
          <div>
            <h3 className="font-playfair text-xl font-semibold text-ice-blue mb-6">Payment Info</h3>
            <div className="p-4 bg-ice-blue/5 rounded-xl border border-ice-blue/10 mb-6">
              <p className="text-sm font-inter text-ice-blue/70 mb-1">Lipa na M-Pesa Buy Goods</p>
              <p className="text-xl font-bold font-inter text-ice-blue tracking-wider">Till: 303030</p>
            </div>
            <p className="font-inter text-sm text-ice-blue/70">
              Director: <span className="text-ice-blue">Aziz Farah</span>
            </p>
          </div>

        </div>

        <div className="border-t border-ice-blue/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-sm text-ice-blue/70">
            © {currentYear} Azzi Lounge Barbershop & Spa. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://www.tiktok.com/@azziloungebarbers" target="_blank" rel="noopener noreferrer" className="text-ice-blue/70 hover:text-[#ff0050] transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/azzilounge_barbers_spa1/" target="_blank" rel="noopener noreferrer" className="text-ice-blue/70 hover:text-[#E1306C] transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
