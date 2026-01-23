import { MessageCircle, Send, Sparkles, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const quickReplies = [
  'Something creamy',
  'Spicy adventure',
  'Vegetarian options',
  "Chef's favorites",
  'I have allergies',
];

const mockDishes = [
  {
    name: 'Paneer Butter Masala',
    rating: 4.9,
    price: '€12.90',
    description: 'Incredibly rich and flavorful',
  },
  {
    name: 'Butter Chicken',
    rating: 4.8,
    price: '€14.90',
    description: 'Our signature dish, loved by all',
  },
  {
    name: 'Dal Makhani',
    rating: 4.8,
    price: '€10.90',
    description: 'Best dal in Stuttgart!',
  },
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 I'm your personal flavor assistant! I can help you discover dishes you'll love based on your preferences. What are you in the mood for today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Mock bot response after a short delay
    setTimeout(() => {
      let botResponse = '';
      if (text.toLowerCase().includes('creamy') || text.toLowerCase().includes('something creamy')) {
        botResponse = "Great choice! Creamy dishes are our specialty. Based on 400+ reviews, here are our top creamy vegetarian dishes:";
      } else if (text.toLowerCase().includes('spicy')) {
        botResponse = "I love your adventurous spirit! 🌶️ Let me show you our spiciest favorites that have been raved about in reviews:";
      } else if (text.toLowerCase().includes('vegetarian')) {
        botResponse = "Perfect! We have amazing vegetarian options. Here are our customer favorites:";
      } else if (text.toLowerCase().includes('allerg')) {
        botResponse = "Your safety is important! Please let me know which allergens you'd like to avoid: Nuts, Dairy, Gluten, or Shellfish?";
      } else {
        botResponse = "I'd love to help you find the perfect dish! Could you tell me more about what you're craving? Are you in the mood for something creamy, spicy, or mild?";
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-secondary-gold to-accent-saffron shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-8 h-8 text-bg-dark" />
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary-burgundy rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-text-light" />
            </span>
            <div className="absolute right-full mr-4 px-4 py-2 bg-bg-medium text-text-light rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm">
              Need help choosing?
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-bg-medium rounded-3xl shadow-2xl flex flex-col overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-burgundy to-secondary-gold p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-bg-dark/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-text-light" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-text-light">Flavor Assistant</h3>
                  <p className="text-xs text-text-light/80 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-success mr-1.5"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-bg-dark/20 hover:bg-bg-dark/40 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-text-light" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.isBot
                        ? 'bg-bg-dark text-text-light'
                        : 'bg-secondary-gold text-bg-dark'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {messages.length > 1 && messages[messages.length - 1].isBot && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex space-x-2 items-center"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary-gold animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-secondary-gold animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-secondary-gold animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </motion.div>
              )}
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(reply)}
                      className="px-3 py-1.5 bg-bg-dark text-text-light rounded-full text-xs hover:bg-secondary-gold hover:text-bg-dark transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-bg-dark/50">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder="Type your preferences..."
                  className="flex-1 px-4 py-3 bg-bg-dark rounded-full text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-secondary-gold"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  className="w-10 h-10 rounded-full bg-secondary-gold flex items-center justify-center hover:bg-accent-saffron transition-colors"
                >
                  <Send className="w-5 h-5 text-bg-dark" />
                </button>
              </div>
              <p className="text-xs text-text-muted mt-2 text-center">
                Powered by AI • Based on real reviews
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
