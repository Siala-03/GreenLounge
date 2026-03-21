import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingCartIcon,
  PlusIcon,
  MinusIcon,
  TrashIcon,
  XIcon,
  CheckIcon } from
'lucide-react';
import { PageTransition } from '../components/PageTransition';
type MenuCategory = 'Starters' | 'Mains' | 'Liquor' | 'Desserts' | 'Wine List';
// Reusing menu data from MenuPage but adding IDs and numeric prices for the cart
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

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};
export function OrderPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Starters');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<
    'cart' | 'checkout' | 'success'>(
    'cart');
  const addToCart = (item: any) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
        i.id === item.id ?
        {
          ...i,
          quantity: i.quantity + 1
        } :
        i
        );
      }
      return [
      ...prev,
      {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1
      }];

    });
    setIsCartOpen(true);
  };
  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
    prev.map((item) => {
      if (item.id === id) {
        const newQ = item.quantity + delta;
        return newQ > 0 ?
        {
          ...item,
          quantity: newQ
        } :
        item;
      }
      return item;
    })
    );
  };
  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );
  const deliveryFee = 12000;
  const total = subtotal > 0 ? subtotal + deliveryFee : 0;
  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
    setTimeout(() => {
      setCart([]);
      setCheckoutStep('cart');
      setIsCartOpen(false);
    }, 5000);
  };
  return (
    <PageTransition>
      <main className="flex-grow bg-kiqao-black text-kiqao-cream min-h-screen relative">
        {/* Hero Banner */}
        <section className="relative h-[30vh] min-h-[300px] flex items-center justify-center">
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

        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          {/* Menu Section */}
          <div className="flex-grow">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-4 mb-10 border-b border-kiqao-charcoal pb-4">
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
              <AnimatePresence mode="wait">
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
                  exit={{
                    opacity: 0,
                    y: -10
                  }}
                  transition={{
                    duration: 0.3
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {menuData[activeCategory].map((item) =>
                  <div
                    key={item.id}
                    className="bg-kiqao-rich-black border border-kiqao-charcoal p-6 rounded-sm flex flex-col justify-between hover:border-kiqao-gold/30 transition-colors">
                    
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
                      <button
                      onClick={() => addToCart(item)}
                      className="w-full py-2.5 border border-kiqao-gold text-kiqao-gold hover:bg-kiqao-gold hover:text-kiqao-black transition-colors rounded-sm text-sm uppercase tracking-wider font-medium">
                      
                        Add to Cart
                      </button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Cart Sidebar */}
          <div className="hidden lg:block w-96 flex-shrink-0">
            <div className="sticky top-32 bg-kiqao-rich-black border border-kiqao-charcoal rounded-sm overflow-hidden flex flex-col max-h-[calc(100vh-160px)]">
              <div className="bg-kiqao-charcoal p-6 border-b border-kiqao-black flex justify-between items-center">
                <h2 className="font-display text-xl text-kiqao-warm-white flex items-center">
                  <ShoppingCartIcon className="w-5 h-5 mr-3 text-kiqao-gold" />
                  Your Order
                </h2>
                <span className="bg-kiqao-gold text-kiqao-black text-xs font-bold px-2 py-1 rounded-full">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>

              <div className="p-6 flex-grow overflow-y-auto custom-scrollbar">
                {cart.length === 0 ?
                <div className="text-center py-12 text-kiqao-cream/50">
                    <ShoppingCartIcon className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p>Your cart is empty</p>
                  </div> :

                <div className="space-y-6">
                    {cart.map((item) =>
                  <div
                    key={item.id}
                    className="flex justify-between items-center">
                    
                        <div className="flex-grow">
                          <h4 className="text-kiqao-warm-white text-sm font-medium">
                            {item.name}
                          </h4>
                          <span className="text-kiqao-gold text-sm">
                            RWF {(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 bg-kiqao-black rounded-sm border border-kiqao-charcoal px-2 py-1">
                          <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-kiqao-cream/70 hover:text-kiqao-gold">
                        
                            <MinusIcon className="w-3 h-3" />
                          </button>
                          <span className="text-sm w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-kiqao-cream/70 hover:text-kiqao-gold">
                        
                            <PlusIcon className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                      onClick={() => removeItem(item.id)}
                      className="ml-4 text-kiqao-cream/40 hover:text-red-400 transition-colors">
                      
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                  )}
                  </div>
                }
              </div>

              {cart.length > 0 &&
              <div className="p-6 bg-kiqao-charcoal/30 border-t border-kiqao-charcoal">
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between text-kiqao-cream/70">
                      <span>Subtotal</span>
                      <span>RWF {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-kiqao-cream/70">
                      <span>Delivery Fee</span>
                      <span>RWF {deliveryFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-kiqao-warm-white font-medium pt-2 border-t border-kiqao-charcoal mt-2 text-lg">
                      <span>Total</span>
                      <span className="text-kiqao-gold">RWF {total.toLocaleString()}</span>
                    </div>
                  </div>
                  <button
                  onClick={() => setIsCartOpen(true)} // Open modal for checkout
                  className="w-full py-3 bg-kiqao-gold text-kiqao-black font-medium tracking-wider hover:bg-kiqao-champagne transition-colors rounded-sm uppercase text-sm">
                  
                    Proceed to Checkout
                  </button>
                </div>
              }
            </div>
          </div>
        </section>

        {/* Mobile Floating Cart Button */}
        <div className="lg:hidden fixed bottom-24 right-6 z-40">
          {cart.length > 0 &&
          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-kiqao-gold text-kiqao-black p-4 rounded-full shadow-lg flex items-center justify-center relative">
            
              <ShoppingCartIcon className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-kiqao-burgundy text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-kiqao-black">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </button>
          }
        </div>

        {/* Checkout Modal / Mobile Cart */}
        <AnimatePresence>
          {isCartOpen &&
          <div className="fixed inset-0 z-50 flex justify-end bg-kiqao-black/80 backdrop-blur-sm">
              <motion.div
              initial={{
                x: '100%'
              }}
              animate={{
                x: 0
              }}
              exit={{
                x: '100%'
              }}
              transition={{
                type: 'tween',
                duration: 0.3
              }}
              className="w-full max-w-md bg-kiqao-rich-black h-full shadow-2xl flex flex-col border-l border-kiqao-charcoal">
              
                <div className="p-6 border-b border-kiqao-charcoal flex justify-between items-center bg-kiqao-charcoal">
                  <h2 className="font-display text-xl text-kiqao-warm-white">
                    {checkoutStep === 'cart' ?
                  'Your Order' :
                  checkoutStep === 'checkout' ?
                  'Checkout' :
                  ''}
                  </h2>
                  <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-kiqao-cream/70 hover:text-kiqao-warm-white">
                  
                    <XIcon className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-grow overflow-y-auto p-6 custom-scrollbar">
                  {checkoutStep === 'cart' &&
                <>
                      {cart.length === 0 ?
                  <div className="text-center py-12 text-kiqao-cream/50">
                          <p>Your cart is empty</p>
                        </div> :

                  <div className="space-y-6">
                          {cart.map((item) =>
                    <div
                      key={item.id}
                      className="flex justify-between items-center">
                      
                              <div className="flex-grow">
                                <h4 className="text-kiqao-warm-white text-sm font-medium">
                                  {item.name}
                                </h4>
                                <span className="text-kiqao-gold text-sm">
                                  RWF {(item.price * item.quantity).toLocaleString()}
                                </span>
                              </div>
                              <div className="flex items-center space-x-3 bg-kiqao-black rounded-sm border border-kiqao-charcoal px-2 py-1">
                                <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-kiqao-cream/70 hover:text-kiqao-gold">
                          
                                  <MinusIcon className="w-3 h-3" />
                                </button>
                                <span className="text-sm w-4 text-center">
                                  {item.quantity}
                                </span>
                                <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-kiqao-cream/70 hover:text-kiqao-gold">
                          
                                  <PlusIcon className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                    )}
                        </div>
                  }
                    </>
                }

                  {checkoutStep === 'checkout' &&
                <form
                  id="checkout-form"
                  onSubmit={handleCheckoutSubmit}
                  className="space-y-6">
                  
                      <div>
                        <label className="block text-sm text-kiqao-cream/70 mb-2 uppercase tracking-wider">
                          Delivery Address *
                        </label>
                        <textarea
                      required
                      rows={3}
                      className="w-full bg-kiqao-black border border-kiqao-charcoal text-kiqao-cream px-4 py-3 focus:outline-none focus:border-kiqao-gold rounded-sm resize-none">
                    </textarea>
                      </div>
                      <div>
                        <label className="block text-sm text-kiqao-cream/70 mb-2 uppercase tracking-wider">
                          Phone Number *
                        </label>
                        <input
                      type="tel"
                      required
                      className="w-full bg-kiqao-black border border-kiqao-charcoal text-kiqao-cream px-4 py-3 focus:outline-none focus:border-kiqao-gold rounded-sm" />
                    
                      </div>
                      <div>
                        <label className="block text-sm text-kiqao-cream/70 mb-2 uppercase tracking-wider">
                          Payment Method *
                        </label>
                        <select
                      required
                      className="w-full bg-kiqao-black border border-kiqao-charcoal text-kiqao-cream px-4 py-3 focus:outline-none focus:border-kiqao-gold rounded-sm appearance-none">
                      
                          <option value="mpesa">M-Pesa on Delivery</option>
                          <option value="cash">Cash on Delivery</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-kiqao-cream/70 mb-2 uppercase tracking-wider">
                          Order Notes
                        </label>
                        <input
                      type="text"
                      className="w-full bg-kiqao-black border border-kiqao-charcoal text-kiqao-cream px-4 py-3 focus:outline-none focus:border-kiqao-gold rounded-sm" />
                    
                      </div>
                    </form>
                }

                  {checkoutStep === 'success' &&
                <div className="text-center py-12 flex flex-col items-center">
                      <div className="w-16 h-16 bg-kiqao-gold/20 rounded-full flex items-center justify-center mb-6">
                        <CheckIcon className="w-8 h-8 text-kiqao-gold" />
                      </div>
                      <h3 className="font-display text-2xl text-kiqao-warm-white mb-4">
                        Order Received!
                      </h3>
                      <p className="text-kiqao-cream/70 mb-2">
                        Your order is being prepared.
                      </p>
                      <p className="text-kiqao-cream/50 text-sm">
                        Estimated delivery: 45-60 mins
                      </p>
                    </div>
                }
                </div>

                {checkoutStep !== 'success' && cart.length > 0 &&
              <div className="p-6 bg-kiqao-charcoal/30 border-t border-kiqao-charcoal">
                    <div className="flex justify-between text-kiqao-warm-white font-medium mb-6 text-lg">
                      <span>Total</span>
                      <span className="text-kiqao-gold">RWF {total.toLocaleString()}</span>
                    </div>
                    {checkoutStep === 'cart' ?
                <button
                  onClick={() => setCheckoutStep('checkout')}
                  className="w-full py-4 bg-kiqao-gold text-kiqao-black font-medium tracking-wider hover:bg-kiqao-champagne transition-colors rounded-sm uppercase text-sm">
                  
                        Proceed to Checkout
                      </button> :

                <button
                  type="submit"
                  form="checkout-form"
                  className="w-full py-4 bg-kiqao-gold text-kiqao-black font-medium tracking-wider hover:bg-kiqao-champagne transition-colors rounded-sm uppercase text-sm">
                  
                        Place Order
                      </button>
                }
                    {checkoutStep === 'checkout' &&
                <button
                  onClick={() => setCheckoutStep('cart')}
                  className="w-full mt-4 py-2 text-kiqao-cream/60 hover:text-kiqao-warm-white text-sm uppercase tracking-wider">
                  
                        Back to Cart
                      </button>
                }
                  </div>
              }
              </motion.div>
            </div>
          }
        </AnimatePresence>
      </main>
    </PageTransition>);

}