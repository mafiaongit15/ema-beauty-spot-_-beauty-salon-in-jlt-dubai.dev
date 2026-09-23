import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { business, defaultWhatsAppMessage } from '../data/salonData';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3">
      {/* Tooltip on Desktop Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:block bg-[#220D38] text-[#FAF6FC] text-xs font-semibold tracking-wider uppercase px-3 py-1.5 shadow-xl border border-[#7B43B0]/40 backdrop-blur-sm"
          >
            Book on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating CTA Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp with Ema Beauty Spot"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white shadow-2xl rounded-full focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#FAF7FD] touch-manipulation"
      >
        {/* Subtle breathing pulse ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"
          style={{ animationDuration: '3s' }}
        />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white stroke-none relative z-10 transition-transform duration-300 group-hover:scale-110" />
      </motion.a>
    </div>
  );
};
