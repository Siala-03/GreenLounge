import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
type MenuCategory = 'Starters' | 'Mains' | 'Liquor' | 'Desserts' | 'Wine List';
// Menu preview items for external ordering.
const menuData = {
  Starters: [
  {
    id: 's1',
    name: 'Truffle Burrata',
    desc: 'Heirloom tomatoes, aged balsamic',
    price: 28800
  },
  {
    id: 's2',
    name: 'Tuna Tartare',
    desc: 'Avocado, ponzu, sesame',
    price: 33600
  },
  {
    id: 's3',
    name: 'French Onion Soup',
    desc: 'Gruyère crouton, rich beef broth',
    price: 21600
  }],

  Mains: [
  {
    id: 'm1',
    name: 'Wagyu Tenderloin',
    desc: 'Truffle potato purée, seasonal greens',
    price: 102000
  },
  {
    id: 'm2',
    name: 'Rack of Lamb',
    desc: 'Herb crusted, ratatouille',
    price: 93600
  },
  {
    id: 'm3',
    name: 'Duck Confit',
    desc: 'Puy lentils, pancetta',
    price: 78000
  }],

  Liquor: [
  {
    id: 'l1',
    name: 'Grey Goose Vodka',
    desc: 'French premium vodka, 40% ABV, 1L',
    price: 285000
  },
  {
    id: 'l2',
    name: 'Hennessy XO',
    desc: 'Extra old cognac, 40% ABV, 70cl',
    price: 680000
  }],

  Desserts: [
  {
    id: 'd1',
    name: 'Crème Brûlée',
    desc: 'Madagascar vanilla bean',
    price: 21600
  },
  {
    id: 'd2',
    name: 'Chocolate Fondant',
    desc: 'Molten center, salted caramel',
    price: 26400
  }],

  'Wine List': [
  {
    id: 'w1',
    name: 'Cloudy Bay Sauvignon',
    desc: 'Marlborough, New Zealand',
    price: 78000
  },
  {
    id: 'w2',
    name: 'Whispering Angel Rosé',
    desc: 'Côtes de Provence, France',
    price: 66000
  }]

};
const categories: MenuCategory[] = [
'Starters',
'Mains',
'Liquor',
'Desserts',
'Wine List'];

const ONLINE_MENU_URL = https://servv-psi.vercel.app/r/restaurant-1776099607370-vxe18dwgp/t/999;

export function OrderPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Starters');

  return (
    <PageTransition>
      <main className="flex-grow bg-kiqao-black text-kiqao-cream min-h-screen relative">
        {/* Hero Banner */}
        <section className="inner-hero">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920"
              alt="Order online hero"
              className="w-full h-full object-cover" />
            
            <div className="absolute inset-0 bg-kiqao-black/80 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 text-center px-4 mt-16">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="font-display text-5xl md:text-6xl text-kiqao-warm-white mb-4">
              
              Order Online
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.2
              }}
              className="text-kiqao-gold tracking-widest uppercase text-sm">
              
              Fine dining delivered to your door
            </motion.p>
          </div>
        </section>

        <section className="page-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10 md:gap-12">
          {/* Menu Section */}
          <div className="flex-grow">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-4 mb-10 border-b border-white/10 pb-4">
              {categories.map((cat) =>
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm tracking-widest uppercase transition-colors relative pb-2 ${activeCategory === cat ? 'text-kiqao-gold' : 'text-kiqao-cream/60 hover:text-kiqao-warm-white'}`}>
                
                  {cat}
                  {activeCategory === cat &&
                <motion.div
                  layoutId="orderTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-kiqao-gold" />

                }
                </button>
              )}
            </div>

            {/* Items List */}
            <div className="space-y-6">
              <motion.div
                key={activeCategory}
                initial={{
                  opacity: 0,
                  y: 10
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.3
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {menuData[activeCategory].map((item) =>
                <div
                  key={item.id}
                  className="bg-kiqao-rich-black border border-white/10 p-5 md:p-6 rounded-sm flex flex-col justify-between hover:border-kiqao-gold/30 transition-colors reveal-panel">
                  
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display text-xl text-kiqao-warm-white">
                          {item.name}
                        </h3>
                        <span className="font-display text-lg text-kiqao-gold">
                          RWF {item.price.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-kiqao-cream/60 text-sm mb-6">
                        {item.desc}
                      </p>
                    </div>
                    <a
                      href={ONLINE_MENU_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-2.5 border border-kiqao-gold text-kiqao-gold hover:bg-kiqao-emerald hover:border-kiqao-emerald hover:text-white transition-colors rounded-sm text-sm uppercase tracking-wider font-medium text-center"
                    >
                      Order Now
                    </a>
                  </div>
                )}
              </motion.div>
            </div>
          </div>

          {/* External Ordering Sidebar */}
          <aside className="lg:w-96 flex-shrink-0">
            <div className="lg:sticky lg:top-32 bg-kiqao-rich-black border border-white/10 rounded-sm p-6 md:p-8 reveal-panel">
              <h2 className="font-display text-3xl text-kiqao-warm-white mb-4">
                Ready to Order?
              </h2>
              <p className="text-kiqao-cream/75 leading-relaxed mb-6">
                Place your order through our full online menu system. Tap below
                to open the ordering platform and complete your order directly.
              </p>

              <a
                href={ONLINE_MENU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-kiqao-gold text-kiqao-black font-medium tracking-wider hover:bg-kiqao-emerald hover:text-white transition-colors rounded-sm uppercase text-sm text-center"
              >
                Open Full Online Menu
              </a>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-3 text-sm text-kiqao-cream/65">
                <p>Need help with an order?</p>
                <a
                  href="tel:+250788331660"
                  className="inline-block text-kiqao-emerald hover:text-kiqao-warm-white transition-colors"
                >
                  +250788 331 660
                </a>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </PageTransition>);

}