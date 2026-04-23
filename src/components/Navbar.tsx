import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
const navLinks = [
{
  name: 'Home',
  path: '/'
},
{
  name: 'Menu',
  path: '/menu'
},
{
  name: 'Events',
  path: '/events'
},
{
  name: 'Reservations',
  path: '/reservations'
},
{
  name: 'Order Online',
  path: '/order'
},
{
  name: 'Contact',
  path: '/contact'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-kiqao-black/98 backdrop-blur-xl py-4 shadow-lg border-b border-kiqao-gold/15' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/logo-green.png"
              alt="The Green Lounge logo"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-kiqao-gold/30 object-cover"
            />
            <div className="flex flex-col items-start">
              <span className="font-display font-semibold text-xl md:text-2xl tracking-wide text-kiqao-emerald group-hover:text-kiqao-emerald transition-colors leading-none">
                THE GREEN
              </span>
              <span className="font-semibold text-[0.55rem] sm:text-[0.62rem] tracking-[0.2em] sm:tracking-[0.3em] text-kiqao-emerald mt-1 leading-none">
                LOUNGE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm tracking-wide transition-all relative after:absolute after:bottom-[-5px] after:left-0 after:h-px after:bg-kiqao-emerald after:transition-all after:duration-300 hover:text-kiqao-emerald ${location.pathname === link.path ? 'text-kiqao-emerald after:w-full' : 'text-kiqao-cream after:w-0 hover:after:w-full'}`}>
              
                {link.name}
              </Link>
            )}
            <Link
              to="/reservations"
              className="px-6 py-2.5 bg-kiqao-gold text-kiqao-black text-sm font-medium tracking-wide hover:bg-kiqao-emerald hover:text-white transition-all rounded-sm shadow-gold-sm hover:shadow-gold">
              
              Book a Table
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-kiqao-cream hover:text-kiqao-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">
            
            {isMobileMenuOpen ?
            <XIcon className="w-6 h-6" /> :

            <MenuIcon className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: '100vh'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          transition={{
            duration: 0.3
          }}
          className="md:hidden absolute top-full left-0 right-0 bg-kiqao-rich-black border-t border-white/10 overflow-hidden flex flex-col">
          
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg tracking-wide transition-colors ${location.pathname === link.path ? 'text-kiqao-emerald' : 'text-kiqao-cream'}`}>
              
                  {link.name}
                </Link>
            )}
              <div className="pt-6 border-t border-white/10">
                <Link
                to="/reservations"
                className="block w-full text-center px-6 py-3 bg-kiqao-gold text-kiqao-black font-medium tracking-wide hover:bg-kiqao-emerald hover:text-white transition-all rounded-sm shadow-gold-sm">
                
                  Book a Table
                </Link>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}