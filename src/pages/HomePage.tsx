import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  WineIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  Clock3Icon,
  MapPinIcon,
  PhoneIcon } from
'lucide-react';
import { PageTransition } from '../components/PageTransition';
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};
const staggerContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
export function HomePage() {
  return (
    <PageTransition>
      <main className="flex-grow bg-kiqao-black text-kiqao-cream">
        {/* SECTION A: HERO */}
        <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEo2Hzv4m0XBhoU_vjYmcroAX2T-WaAOepsElAdysNGl5dBs4g53PA3Hzma7MGPCgA4WXOVFJBXoK6emXhSA5Z24Q8FA-gy4C_l7UjL8pzOfVwL-7S4SlxwtMJlHUMt_ELFtG5O3g=s680-w680-h510-rw"
              alt="Fine dining atmosphere"
              className="w-full h-full object-cover object-center scale-105" />
            <div className="absolute inset-0 hero-overlay"></div>
          </div>

          {/* Decorative top vignette */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-kiqao-black to-transparent z-10 pointer-events-none"></div>

          <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-6">

              <motion.p variants={fadeInUp} className="eyebrow">
                SilverBack Mall Rooftop · Kicukiro, Kigali
              </motion.p>

              <motion.h1
                variants={fadeInUp}
                className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-kiqao-emerald leading-[0.9] tracking-tight">

                The Green<br />
                <span className="italic">Lounge</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-base md:text-lg text-kiqao-cream/75 max-w-xl mx-auto font-light tracking-widest uppercase pt-2">
                Fine Dining · Craft Cocktails · Premium Wines
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">

                <Link
                  to="/reservations"
                  className="w-full sm:w-auto px-10 py-4 bg-kiqao-gold text-kiqao-black font-semibold tracking-[0.12em] uppercase text-sm hover:bg-kiqao-emerald hover:text-white transition-all rounded-none text-center shadow-gold hover:shadow-gold-lg">
                  Reserve a Table
                </Link>
                <Link
                  to="/menu"
                  className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white font-medium tracking-[0.12em] uppercase text-sm hover:border-kiqao-emerald hover:text-kiqao-emerald transition-all rounded-none text-center">
                  View Menu
                </Link>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto pt-4 text-left">
                <div className="info-chip">
                  <MapPinIcon className="w-4 h-4 text-kiqao-emerald flex-shrink-0" />
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-kiqao-cream/45">Location</p>
                    <p className="text-sm text-kiqao-warm-white">SilverBack Mall Rooftop</p>
                  </div>
                </div>
                <div className="info-chip">
                  <Clock3Icon className="w-4 h-4 text-kiqao-emerald flex-shrink-0" />
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-kiqao-cream/45">Hours</p>
                    <p className="text-sm text-kiqao-warm-white">Open daily, 11:00 AM till late</p>
                  </div>
                </div>
                <a href="tel:+250788331660" className="info-chip group">
                  <PhoneIcon className="w-4 h-4 text-kiqao-emerald flex-shrink-0" />
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-kiqao-cream/45">Reservations</p>
                    <p className="text-sm text-kiqao-warm-white group-hover:text-kiqao-emerald transition-colors">+250788 331 660</p>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.a
            href="#story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-kiqao-emerald/70 z-20 hover:text-kiqao-emerald transition-colors">
            <span className="text-[0.6rem] tracking-[0.35em] uppercase mb-2">Scroll</span>
            <ChevronDownIcon className="w-4 h-4 animate-bounce" />
          </motion.a>
        </section>

        {/* SECTION B: ABOUT/STORY */}
        <section id="story" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px'
              }}
              variants={fadeInUp}
              className="relative">
              
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHBP5x-0QD0EXjGnInyEglLmqw6y9CT-rdS6EGHcK_oPZ72ApGVutie35kAFJqmAt1pcbFgRXydSznLPYkfwTaA0SIzNco3dHDc0NtahLeSi2TaGoVIBm61PexujpcweQnz7FATiw=s680-w680-h510-rw"
                  alt="Restaurant interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-52 h-52 bg-kiqao-black border border-kiqao-gold/40 hidden md:flex items-center justify-center p-6 shadow-gold">
                <p className="font-display text-xl text-kiqao-gold text-center italic leading-snug">
                  "Kigali's finest<br/>rooftop experience."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px'
              }}
              variants={staggerContainer}
              className="space-y-8">
              
              <motion.div variants={fadeInUp}>
                <p className="eyebrow mb-4">Our Story</p>
                <h2 className="font-display text-4xl md:text-5xl text-kiqao-warm-white mt-0 mb-6">
                  Above the City, Beyond Ordinary
                </h2>
                <div className="w-10 h-0.5 bg-kiqao-emerald mb-8 opacity-70"></div>
                <p className="text-kiqao-cream/80 leading-relaxed mb-6">
                  Perched on the rooftop of SilverBack Mall in Kicukiro, The Green
                  Lounge is Kigali's premier destination for those who demand the
                  finest. Whether you're unwinding after hours, hosting a business
                  dinner, or celebrating life's milestones, we set the stage.
                </p>
                <p className="text-kiqao-cream/80 leading-relaxed">
                  Our kitchen delivers an inspired menu of carefully crafted dishes
                  while our bar team curates cocktails and a world-class wine
                  selection. Indoors or on the open-air terrace — every visit is
                  an experience worth savouring.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                
                {[
                {
                  label: 'Happy Guests',
                  value: '10K+'
                },
                {
                  label: 'Wines & Spirits',
                  value: '100+'
                },
                {
                  label: 'Signature Dishes',
                  value: '40+'
                },
                {
                  label: 'Events Hosted',
                  value: '200+'
                }].
                map((stat, i) =>
                <div key={i} className="text-center">
                    <div className="font-display text-3xl text-kiqao-gold mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-kiqao-cream/60 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SECTION C: FEATURED DISHES */}
        <section className="py-24 md:py-32 bg-kiqao-rich-black px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16">
              <p className="eyebrow mb-5">Chef's Selection</p>
              <h2 className="font-display text-4xl md:text-5xl text-kiqao-warm-white">
                Signature Creations
              </h2>
              <div className="gold-rule max-w-xs mx-auto mt-8">
                <span className="text-kiqao-gold/60 text-xs tracking-widest">✦</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
              {
                name: 'Filet Mignon',
                desc: 'Perfectly seared with truffle jus and seasonal vegetables',
                price: 'RWF 60,000',
                img: 'https://images.pexels.com/photos/5638540/pexels-photo-5638540.jpeg'
              },
              {
                name: 'Grilled Chicken',
                desc: 'With fresh herbs and roasted seasonal vegetables',
                price: 'RWF 40,000',
                img: 'https://images.pexels.com/photos/36750260/pexels-photo-36750260.jpeg'
              },
              {
                name: 'Mushroom Risotto',
                desc: 'Creamy arborio rice with wild mushrooms and parmesan',
                price: 'RWF 30,000',
                img: 'https://images.pexels.com/photos/6406460/pexels-photo-6406460.jpeg'
              }].
              map((dish, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="card-luxury overflow-hidden group">

                  <div className="relative aspect-video sm:aspect-square md:aspect-[4/3] overflow-hidden">
                    <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 bg-kiqao-black/90 backdrop-blur-sm text-kiqao-gold px-3 py-1.5 font-display text-base border border-kiqao-gold/30">
                      {dish.price}
                    </div>
                  </div>
                  <div className="p-7 text-center border-t border-white/6">
                    <h3 className="font-display text-2xl text-kiqao-warm-white mb-2">
                      {dish.name}
                    </h3>
                    <p className="text-kiqao-cream/55 text-sm leading-relaxed">{dish.desc}</p>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="text-center">
              <Link
                to="/menu"
                className="inline-flex items-center text-kiqao-emerald hover:text-kiqao-champagne transition-colors group tracking-wide uppercase text-sm font-medium">
                
                View Full Menu
                <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION D: WINE COLLECTION */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1920"
              alt="Wine cellar"
              className="w-full h-full object-cover" />
            
            <div className="absolute inset-0 bg-kiqao-black/85 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true
                }}
                variants={staggerContainer}>
                
                <motion.h2
                  variants={fadeInUp}
                  className="font-display text-4xl md:text-5xl text-kiqao-warm-white mb-6">

                  Cocktails, Wines & Spirits
                </motion.h2>
                <motion.div
                  variants={fadeInUp}
                  className="w-12 h-px bg-kiqao-emerald mb-8 opacity-80">
                </motion.div>
                <motion.p
                  variants={fadeInUp}
                  className="text-kiqao-cream/80 leading-relaxed mb-10 text-lg">

                  From bespoke craft cocktails to an impressive cellar of wines
                  and premium spirits, our bar is the heartbeat of The Green
                  Lounge. Our mixologists and sommelier are on hand to guide
                  your perfect pour — every time.
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Link
                    to="/menu"
                    className="inline-block px-8 py-4 bg-kiqao-gold text-kiqao-black font-medium tracking-wider hover:bg-kiqao-emerald hover:text-white transition-all rounded-sm shadow-gold-sm hover:shadow-gold">

                    View Full Menu
                  </Link>
                </motion.div>
              </motion.div>
              <div className="grid grid-cols-2 gap-6">
                {[
                {
                  name: 'Craft Cocktails',
                  count: 'Signature & Classic'
                },
                {
                  name: 'Fine Wines',
                  count: '100+ Labels'
                },
                {
                  name: 'Premium Spirits',
                  count: 'Whisky, Gin & More'
                },
                {
                  name: 'Champagne',
                  count: 'Curated Selection'
                }].
                map((category, i) =>
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    scale: 0.9
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5
                  }}
                  className="bg-kiqao-charcoal/60 border border-kiqao-gold/20 p-8 rounded-sm text-center hover:bg-kiqao-charcoal transition-colors backdrop-blur-md">
                  
                    <WineIcon className="w-8 h-8 text-kiqao-emerald mx-auto mb-4" />
                    <h3 className="font-display text-xl text-kiqao-warm-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-kiqao-gold/80 text-sm">
                      {category.count}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* SECTION E: EVENTS PREVIEW */}
        <section className="py-24 md:py-32 bg-kiqao-black px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true
                }}
                variants={fadeInUp}>
                
                <p className="eyebrow mb-4">Join Us</p>
                <h2 className="font-display text-4xl md:text-5xl text-kiqao-warm-white mt-0">
                  Upcoming Experiences
                </h2>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0
                }}
                whileInView={{
                  opacity: 1
                }}
                viewport={{
                  once: true
                }}
                className="mt-6 md:mt-0">
                
                <Link
                  to="/events"
                  className="inline-flex items-center text-kiqao-emerald hover:text-kiqao-champagne transition-colors group tracking-wide uppercase text-sm font-medium">
                  
                  View All Events
                  <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
              {
                title: 'Wine Tasting Evening',
                date: 'March 28, 2026',
                desc: 'Explore rare vintages from Bordeaux with our sommelier.'
              },
              {
                title: 'Jazz & Dine Night',
                date: 'April 5, 2026',
                desc: 'Live jazz performances paired with a 5-course tasting menu.'
              },
              {
                title: "Chef's Table Experience",
                date: 'April 12, 2026',
                desc: 'An intimate 8-course journey with Chef Marcus.'
              }].
              map((event, i) =>
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: i * 0.2,
                  duration: 0.6
                }}
                className="group relative bg-kiqao-rich-black border border-kiqao-gold/15 p-8 rounded-sm hover:border-kiqao-gold/45 hover:shadow-gold-sm transition-all">
                
                  <div className="text-kiqao-emerald text-sm font-medium tracking-wider mb-4">
                    {event.date}
                  </div>
                  <h3 className="font-display text-2xl text-kiqao-warm-white mb-4">
                    {event.title}
                  </h3>
                  <p className="text-kiqao-cream/70 mb-8 line-clamp-2">
                    {event.desc}
                  </p>
                  <Link
                  to="/events"
                  className="text-kiqao-emerald text-sm uppercase tracking-wider font-medium flex items-center group-hover:text-kiqao-champagne">
                  
                    Learn More{' '}
                    <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION G: RESERVATION CTA */}
        <section className="relative py-32 flex items-center justify-center text-center px-4">
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweokl7nkQ43kBf1czeS3F-dVHANVdR-lYhtGYuyuSw3STogPTMYtOy0wysNNxaREyGlBSUJh2jqKkMwFaNtoDEg22XMHOo63xyQcOPkuw4dwdxgZSlfCxm9qIlO9YyY5DqOtu7SwBl_h_uzC=s680-w680-h510-rw"
              alt="Elegant restaurant"
              className="w-full h-full object-cover" />
            
            <div className="absolute inset-0 bg-kiqao-black/80"></div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={staggerContainer}
            className="relative z-10 max-w-3xl mx-auto">
            
            <motion.h2
              variants={fadeInUp}
              className="font-display text-4xl md:text-6xl text-kiqao-warm-white mb-6">

              Secure Your Table Tonight
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-kiqao-cream/80 mb-10 font-light">

              Join Kigali's finest rooftop lounge for an evening of great
              food, premium drinks, and unforgettable atmosphere
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-center gap-6">
              
              <Link
                to="/reservations"
                className="px-8 py-4 bg-kiqao-gold text-kiqao-black font-medium tracking-wider hover:bg-kiqao-emerald hover:text-white transition-all rounded-sm shadow-gold-sm hover:shadow-gold">

                Book a Table
              </Link>
              <a
                href="tel:+250788331660"
                className="px-8 py-4 border border-kiqao-gold text-kiqao-gold font-medium tracking-wider hover:bg-kiqao-emerald hover:border-kiqao-emerald hover:text-white transition-colors rounded-sm">
                
                Call Us
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </PageTransition>);

}