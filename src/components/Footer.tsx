import { Link } from 'react-router-dom';
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  SendIcon } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-kiqao-black border-t border-kiqao-gold/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:hidden mobile-cta-strip reveal-panel">
          <a
            href="tel:+250788331660"
            className="flex items-center justify-center px-4 py-3.5 sm:py-3 border border-kiqao-emerald text-kiqao-emerald uppercase tracking-[0.14em] text-xs font-semibold hover:bg-kiqao-emerald hover:text-white transition-colors"
          >
            Call Now
          </a>
          <Link
            to="/reservations"
            className="flex items-center justify-center px-4 py-3.5 sm:py-3 bg-kiqao-gold text-kiqao-black uppercase tracking-[0.14em] text-xs font-semibold hover:bg-kiqao-emerald hover:text-white transition-colors"
          >
            Book Table
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link
              to="/"
              className="flex items-center gap-3 group inline-flex">
              <img
                src="/assets/logo-green.png"
                alt="The Green Lounge logo"
                className="w-12 h-12 rounded-full border border-kiqao-gold/30 object-cover"
              />
              <div className="flex flex-col items-start">
                <span className="font-display font-semibold text-2xl tracking-wide text-kiqao-emerald leading-none">
                  THE GREEN
                </span>
                <span className="font-semibold text-[0.65rem] tracking-[0.3em] text-kiqao-emerald mt-1 leading-none">
                  LOUNGE
                </span>
              </div>
            </Link>
            <p className="text-kiqao-cream/70 text-sm leading-relaxed">
              Experience the art of fine dining and curated wines in an
              atmosphere of timeless elegance.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/kiqaolounge.rw/"
                className="text-kiqao-cream/60 hover:text-kiqao-emerald transition-colors">
                
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-kiqao-cream/60 hover:text-kiqao-emerald transition-colors">
                
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-kiqao-cream/60 hover:text-kiqao-emerald transition-colors">
                
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-kiqao-warm-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
              'Menu',
              'Events',
              'Reservations',
              'Order Online',
              'Contact'].
              map((item) =>
              <li key={item}>
                  <Link
                  to={`/${item.toLowerCase().replace(' ', '')}`}
                  className="text-kiqao-cream/70 hover:text-kiqao-emerald transition-colors text-sm">
                  
                    {item}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg text-kiqao-warm-white mb-6">
              Hours of Operation
            </h4>
            <ul className="space-y-4 text-sm text-kiqao-cream/70">
              <li className="flex justify-between">
                <span>Mon - Sun</span>
                <span>11:00 AM - Late</span>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-display text-lg text-kiqao-warm-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-kiqao-cream/70 mb-8">
              <li>SilverBack Mall Rooftop, Kicukiro Sonatube, Kigali</li>
              <li>+250788 331 660</li>
              <li>info@thegreenlounge.com</li>
            </ul>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Subscribe to newsletter"
                className="bg-kiqao-charcoal border border-kiqao-gold/25 text-kiqao-cream px-3 sm:px-4 py-2.5 sm:py-2 w-full focus:outline-none focus:border-kiqao-gold text-xs sm:text-sm rounded-l-sm" />
              
              <button
                type="submit"
                className="bg-kiqao-gold text-kiqao-black px-3 sm:px-4 py-2.5 sm:py-2 hover:bg-kiqao-emerald hover:text-white transition-colors rounded-r-sm flex items-center justify-center"
                aria-label="Subscribe">
                
                <SendIcon className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-kiqao-cream/50 text-xs">
            &copy; {new Date().getFullYear()} The Green Lounge. All rights reserved.
          </p>
          <p className="text-kiqao-cream/50 text-xs flex items-center">
            Crafted with passion • Developed by Siala Solutions
          </p>
        </div>
      </div>
    </footer>);

}