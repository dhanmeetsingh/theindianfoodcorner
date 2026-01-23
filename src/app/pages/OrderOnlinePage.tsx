import { Minus, Plus, ShoppingCart, Truck, X } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';


const menuItems = [
  { id: 1, name: 'Butter Chicken', price: 14.90, category: 'Curries', image: 'https://images.unsplash.com/photo-1714799263303-29e7d638578a?w=400' },
  { id: 2, name: 'Paneer Tikka', price: 12.90, category: 'Tandoor', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400' },
  { id: 3, name: 'Dal Makhani', price: 10.90, category: 'Curries', image: 'https://images.unsplash.com/photo-1656356008687-abadd2e6d2b9?w=400' },
  { id: 4, name: 'Lamb Biryani', price: 15.90, category: 'Biryani', image: 'https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?w=400' },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function OrderOnlinePage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [step, setStep] = useState<'menu' | 'checkout' | 'confirmation'>('menu');

  const addToCart = (item: typeof menuItems[0]) => {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      setCart(cart.map(c => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item).filter(item => item.quantity > 0));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 30 ? 0 : 3.90;
  const total = subtotal + deliveryFee;

  if (step === 'confirmation') {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-12 h-12 text-success" />
          </div>
          <h2 className="font-heading text-3xl mb-4">Order Confirmed!</h2>
          <p className="text-text-muted mb-8">
            Your order has been placed successfully. Estimated delivery time: 30-45 minutes.
          </p>
          <button onClick={() => { setStep('menu'); setCart([]); }} className="px-8 py-3 bg-secondary-gold text-bg-dark rounded-full">
            Order Again
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Menu Section */}
          <div className="lg:col-span-2">
            <h1 className="font-heading text-4xl mb-8">Order <span className="text-secondary-gold">Online</span></h1>
            
            <div className="flex items-center gap-4 mb-8 p-4 bg-secondary-gold/10 rounded-xl">
              <Truck className="w-6 h-6 text-secondary-gold" />
              <div>
                <p className="text-text-light font-medium">Free delivery on orders over €30</p>
                <p className="text-text-muted text-sm">Estimated delivery: 30-45 minutes</p>
              </div>
            </div>

            <div className="space-y-6">
              {menuItems.map(item => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-4 bg-bg-medium rounded-xl p-4 hover:bg-bg-medium/80 transition-colors"
                >
                  <img src={item.image} alt={item.name} className="w-24 h-24 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-accent text-xl text-text-light">{item.name}</h3>
                        <p className="text-text-muted text-sm">{item.category}</p>
                      </div>
                      <span className="text-secondary-gold font-bold">€{item.price.toFixed(2)}</span>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-4 py-2 bg-secondary-gold text-bg-dark rounded-full hover:bg-accent-saffron transition-colors text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-bg-medium rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-2xl">Your Cart</h2>
                <ShoppingCart className="w-6 h-6 text-secondary-gold" />
              </div>

              {cart.length === 0 ? (
                <p className="text-text-muted text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center gap-3 pb-3 border-b border-secondary-gold/10">
                        <div className="flex-1">
                          <p className="text-text-light font-medium">{item.name}</p>
                          <p className="text-secondary-gold text-sm">€{item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 rounded-full bg-bg-dark flex items-center justify-center hover:bg-bg-dark/80">
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 rounded-full bg-bg-dark flex items-center justify-center hover:bg-bg-dark/80">
                            <Plus size={16} />
                          </button>
                        </div>
                        <button onClick={() => updateQuantity(item.id, -item.quantity)} className="text-primary-burgundy hover:text-primary-burgundy/80">
                          <X size={20} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6 pt-4 border-t border-secondary-gold/20">
                    <div className="flex justify-between text-text-muted">
                      <span>Subtotal</span>
                      <span>€{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-text-muted">
                      <span>Delivery Fee</span>
                      <span>{deliveryFee === 0 ? 'FREE' : `€${deliveryFee.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-text-light pt-3 border-t border-secondary-gold/20">
                      <span>Total</span>
                      <span className="text-secondary-gold">€{total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setStep('confirmation')}
                    className="w-full py-4 bg-secondary-gold text-bg-dark rounded-full hover:bg-accent-saffron transition-colors font-semibold"
                  >
                    Proceed to Checkout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
