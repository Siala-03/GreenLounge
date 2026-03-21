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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-kiqao-rich-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center group">
            <span className="font-display text-2xl md:text-3xl tracking-widest text-kiqao-warm-white group-hover:text-kiqao-gold transition-colors">
              KIQAO
            </span>
            <span className="text-[0.65rem] tracking-[0.3em] text-kiqao-gold mt-1">
              LOUNGE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm tracking-wide transition-colors hover:text-kiqao-gold ${location.pathname === link.path ? 'text-kiqao-gold font-medium' : 'text-kiqao-cream'}`}>
              
                {link.name}
              </Link>
            )}
            <Link
              to="/reservations"
              className="px-6 py-2.5 bg-kiqao-gold text-kiqao-black text-sm font-medium tracking-wide hover:bg-kiqao-champagne transition-colors rounded-sm">
              
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
          className="md:hidden absolute top-full left-0 right-0 bg-kiqao-rich-black border-t border-kiqao-charcoal overflow-hidden flex flex-col">
          
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg tracking-wide transition-colors ${location.pathname === link.path ? 'text-kiqao-gold' : 'text-kiqao-cream'}`}>
              
                  {link.name}
                </Link>
            )}
              <div className="pt-6 border-t border-kiqao-charcoal">
                <Link
                to="/reservations"
                className="block w-full text-center px-6 py-3 bg-kiqao-gold text-kiqao-black font-medium tracking-wide hover:bg-kiqao-champagne transition-colors rounded-sm">
                
                  Book a Table
                </Link>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}