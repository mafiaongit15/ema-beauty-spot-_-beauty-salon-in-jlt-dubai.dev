import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Clock, MapPin } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { whyChooseUs } from '../data/salonData';

export const About: React.FC = () => {
  const icons = [
    <Heart className="w-5 h-5 text-[#6C3B9B]" key="heart" />,
    <Sparkles className="w-5 h-5 text-[#6C3B9B]" key="sparkles" />,
    <MapPin className="w-5 h-5 text-[#6C3B9B]" key="map" />,
    <Clock className="w-5 h-5 text-[#6C3B9B]" key="clock" />,
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#F3EDF9] text-[#220D38] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          {/* Left Column Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.28em] uppercase font-semibold text-[#6C3B9B] mb-3 md:mb-4"
            >
              THE PHILOSOPHY
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.18] text-[#220D38] font-normal mb-6 text-balance"
            >
              Beauty Should Feel Personal.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 text-base md:text-lg text-[#523F66] font-light leading-relaxed mb-8"
            >
              <p>
                In a fast-paced city like Dubai, your salon visit shouldn’t feel like a factory line. At Ema Beauty Spot, we believe true beauty care starts with listening, taking our time, and crafting results that accentuate who you already are.
              </p>
              <p>
                Conveniently nestled in Fortune Tower, Cluster C in JLT, our salon brings all your beauty essentials together under one calm roof: delicate Russian manicures, flawless lash curls, sculpted brows, revitalizing hair treatments, soothing head spas, and customized makeup.
              </p>
              <p className="text-sm text-[#6D5A82]">
                Whether you’re getting ready for an important meeting, an evening celebration, or simply taking dedicated time for self-care, our goal is simple: to make sure you leave feeling rested, pampered, and undeniably confident.
              </p>
            </motion.div>

            {/* Signature detail */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 border-t border-[#E5D5F2] flex items-center gap-4"
            >
              <div className="font-serif italic text-xl text-[#220D38]">
                Ema Beauty Spot
              </div>
              <div className="h-4 w-px bg-[#7B43B0]" />
              <div className="text-xs uppercase tracking-[0.2em] text-[#6C3B9B] font-semibold">
                JLT · Dubai
              </div>
            </motion.div>
          </div>

          {/* Right Column Editorial Image */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] bg-[#240E3B] overflow-hidden shadow-2xl border border-[#E5D5F2]"
            >
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
                alt="Ema Beauty Spot salon interior in Fortune Tower JLT"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B33]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs tracking-widest uppercase font-light">
                <span>Cluster C · Fortune Tower · Dubai</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section: Why Ema Beauty Spot - 4 Elegant Benefits */}
        <div className="pt-10 border-t border-[#E5D5F2]">
          <SectionHeading
            eyebrow="WHY OUR CLIENTS LOVE US"
            title="The Ema Experience"
            subtitle="Four distinctive reasons our clients trust us with their regular self-care routine in JLT."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 md:p-8 bg-white border border-[#E8DCF3] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#FAF7FD] border border-[#E8DCF3] mb-5">
                  {icons[idx]}
                </div>

                <h3 className="font-serif text-lg text-[#220D38] font-normal mb-1">
                  {benefit.title}
                </h3>

                <p className="text-xs uppercase tracking-[0.16em] text-[#6C3B9B] font-semibold mb-3">
                  {benefit.tagline}
                </p>

                <p className="text-xs md:text-sm text-[#523F66] font-light leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
