import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';
import { business, defaultWhatsAppMessage } from '../data/salonData';

export const DarkCta: React.FC = () => {
  const whatsappUrl = `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

  return (
    <section className="relative py-24 md:py-36 bg-[#160526] text-[#FAF6FC] overflow-hidden">
      {/* Background Graphic & Velvet Purple Glow Overlay */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-25">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&q=80"
          alt="Ema Beauty Spot salon texture"
          className="w-full h-full object-cover object-center brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#160526] via-[#240E3B]/80 to-[#160526]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold text-[#D6BEF0] mb-4"
        >
          YOUR NEXT BEAUTY MOMENT AWAITS
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.15] text-[#FAF6FC] font-normal mb-6 text-balance"
        >
          Feel Good. Look Good. <span className="italic text-[#EADEF7]">Be You.</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-[#D5C7E6] font-light leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Book your next appointment at Ema Beauty Spot in JLT. Meticulous care, warm attention, and effortless results.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] text-[#0A180E] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-[#20ba59] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-[#0A180E] stroke-none" />
            <span>BOOK ON WHATSAPP</span>
          </a>

          <a
            href={`tel:${business.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2E124B]/80 text-[#FAF6FC] hover:bg-[#4A2673] text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 border border-[#7B43B0]/40 hover:border-[#7B43B0]/70"
          >
            <Phone className="w-4 h-4 text-[#D6BEF0]" />
            <span>CALL US: {business.phoneDisplay}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
