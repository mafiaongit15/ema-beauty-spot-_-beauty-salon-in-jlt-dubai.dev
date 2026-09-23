import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { business, defaultWhatsAppMessage } from '../data/salonData';

export const Introduction: React.FC = () => {
  const whatsappUrl = `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

  return (
    <section id="introduction" className="py-20 md:py-32 bg-[#FAF7FD] text-[#220D38] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Mask Reveal */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden shadow-2xl">
              {/* Lilac sliding reveal mask */}
              <motion.div
                initial={{ scaleY: 1 }}
                whileInView={{ scaleY: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
                style={{ transformOrigin: 'top' }}
                className="absolute inset-0 bg-[#EADEF7] z-10 pointer-events-none"
              />

              <motion.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[4/5] w-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
                  alt="Ema Beauty Spot salon client styling and care in JLT Dubai"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>

            {/* Subtle editorial card overlay at bottom-right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden sm:block absolute -bottom-6 -right-6 bg-[#220D38] text-[#FAF6FC] p-6 max-w-xs shadow-2xl border border-[#7B43B0]/35"
            >
              <div className="flex items-center gap-2 text-[#D6BEF0] text-xs tracking-widest uppercase mb-1 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#C7A3EC]" />
                <span>Dedicated Care</span>
              </div>
              <p className="text-xs text-[#D1C2E2] font-light leading-relaxed">
                Personalized appointments where you are treated as a valued guest, not a rush turnaround.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-6 lg:pl-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="text-xs tracking-[0.28em] uppercase font-semibold text-[#6C3B9B] mb-3 md:mb-4"
            >
              WELCOME TO EMA BEAUTY SPOT
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.18] text-[#220D38] font-normal mb-6 text-balance"
            >
              More Than a Beauty Appointment.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg text-[#4F3B63] font-light leading-relaxed mb-6"
            >
              A space in JLT dedicated to beauty, self-care, and feeling your best. From hair and nails to lashes, brows, skincare, and makeup, Ema Beauty Spot brings your beauty routine together in one welcoming destination.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="space-y-4 text-sm text-[#5D4A73] leading-relaxed mb-8"
            >
              <div className="flex items-start gap-3">
                <span className="text-[#6C3B9B] font-serif text-lg leading-none mt-0.5">✦</span>
                <p>
                  <strong className="text-[#220D38]">Tailored Attention:</strong> We take pride in meticulous technique—from precision Russian manicures and seamless lash sets to custom hair treatments.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#6C3B9B] font-serif text-lg leading-none mt-0.5">✦</span>
                <p>
                  <strong className="text-[#220D38]">Tranquil JLT Sanctuary:</strong> Located in Fortune Tower, Cluster C—escape the busy city and relax in comfort.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#4A2673] hover:bg-[#3B195E] text-[#FAF6FC] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-md hover:shadow-lg border border-[#7B43B0]/30"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>BOOK ON WHATSAPP</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#220D38] hover:text-[#6C3B9B] transition-colors py-2 hover-underline-animation"
              >
                <span>View Full Menu</span>
                <span>→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
