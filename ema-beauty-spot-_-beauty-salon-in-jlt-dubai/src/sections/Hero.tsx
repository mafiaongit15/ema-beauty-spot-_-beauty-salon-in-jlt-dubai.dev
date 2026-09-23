import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { business, defaultWhatsAppMessage } from '../data/salonData';

interface HeroSlide {
  id: number;
  image: string;
  imageMobile: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  isExternal: boolean;
}

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

  const slides: HeroSlide[] = [
    {
      id: 0,
      image: '/hero-beauty.jpg',
      imageMobile: '/hero-beauty-mobile.jpg',
      eyebrow: 'Experienced hair stylists',
      titleLine1: 'Enjoy Professional',
      titleLine2: 'Beauty Services!',
      description:
        'Providing expert skin care advice & beauty services using natural products to cater for any skin.',
      buttonText: 'Contact Now',
      buttonHref: whatsappUrl,
      isExternal: true,
    },
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=2000&q=85',
      imageMobile: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85',
      eyebrow: 'Master Russian Manicures & Lashes',
      titleLine1: 'Precision Cuticle Care',
      titleLine2: '& Radiant Glow!',
      description:
        'Indulge in meticulous e-file Russian manicures, gel extensions, and bespoke lash lifts in Fortune Tower.',
      buttonText: 'Book Appointment',
      buttonHref: whatsappUrl,
      isExternal: true,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=85',
      imageMobile: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=85',
      eyebrow: 'Japanese Scalp Head Spa & Rituals',
      titleLine1: 'Pure Relaxation',
      titleLine2: '& Scalp Therapy!',
      description:
        'Rejuvenate with botanical hair therapy, relaxing water halo head spa, and stress-relieving shoulder massages.',
      buttonText: 'Explore Rituals',
      buttonHref: '#services',
      isExternal: false,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slide smoothly every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const active = slides[currentSlide];

  const { scrollY } = useScroll();
  const opacityText = useTransform(scrollY, [0, 500], [1, 0.2]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[580px] sm:min-h-[640px] md:min-h-[720px] h-[100svh] flex items-end sm:items-center overflow-hidden bg-[#0A0410]"
    >
      {/* Background Image Carousel - Responsive Mobile & Desktop Picture Framing */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`slide-wrap-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full h-full relative"
          >
            <picture className="w-full h-full block">
              {/* Native 9:16 vertical portrait for mobile screens up to 640px */}
              <source media="(max-width: 639px)" srcSet={active.imageMobile} />
              {/* Full landscape image for tablet and desktop */}
              <img
                src={active.image}
                alt="Ema Beauty Spot Professional Services"
                className="w-full h-full object-cover object-center sm:object-[center_right] lg:object-right brightness-[0.96] contrast-[1.03]"
                loading="eager"
              />
            </picture>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Scrim: Gentle bottom gradient for text readability without obscuring the model above */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0410] via-[#0A0410]/50 to-transparent sm:hidden pointer-events-none" />

        {/* Desktop Gradient: Left-to-right fade for text readability, leaving the entire model on the right completely visible */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#0C0414]/90 via-[#0C0414]/40 to-transparent pointer-events-none" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-[#0C0414] via-transparent to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[#3B195E]/10 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Main Content Layer (Left-Aligned, Pro Spacing on Mobile & PC) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 xs:pt-28 sm:pt-36 md:pt-40 pb-8 sm:pb-14">
        <motion.div
          style={{ opacity: opacityText }}
          className="max-w-xl text-left"
        >
          {/* Eyebrow (e.g. "Experienced hair stylists") */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`eyebrow-${currentSlide}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="text-xs sm:text-sm md:text-base text-[#FAF6FC]/95 tracking-wider uppercase font-semibold mb-2 sm:mb-3 drop-shadow-sm"
            >
              {active.eyebrow}
            </motion.div>
          </AnimatePresence>

          {/* Main Headline (e.g. "Enjoy Professional Beauty Services!") */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="font-serif text-[30px] xs:text-[34px] sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.12] sm:leading-[1.08] font-normal text-white mb-3 sm:mb-5 tracking-tight drop-shadow-md"
            >
              <span className="block">{active.titleLine1}</span>
              <span className="block text-white">{active.titleLine2}</span>
            </motion.h1>
          </AnimatePresence>

          {/* Description Paragraph */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-xs sm:text-sm md:text-base text-[#E5D9F2] font-light leading-relaxed mb-6 sm:mb-8 line-clamp-3 sm:line-clamp-none max-w-lg drop-shadow-sm"
            >
              {active.description}
            </motion.p>
          </AnimatePresence>

          {/* Call To Action Button (Warm Golden Button matching screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            <a
              href={active.buttonHref}
              target={active.isExternal ? '_blank' : undefined}
              rel={active.isExternal ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-[#F5BE58] hover:bg-[#ECA82B] text-[#1A1005] font-bold text-xs sm:text-sm tracking-[0.16em] uppercase transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{active.buttonText}</span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm uppercase tracking-[0.16em] font-medium text-[#FAF6FC]/90 hover:text-white transition-colors"
            >
              <span>SERVICES</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F5BE58]" />
            </a>
          </motion.div>

          {/* Pagination Indicators (3 square dots with generous mobile touch target) */}
          <div className="flex items-center gap-2">
            {slides.map((slide, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="p-1 -m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5BE58] touch-manipulation cursor-pointer"
                >
                  <span
                    className={`block transition-all duration-300 ${
                      isActive
                        ? 'w-4 h-2.5 sm:w-4 sm:h-3 bg-[#F5BE58] shadow-md'
                        : 'w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/45 hover:bg-white/70'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Prompt on Desktop */}
      <a
        href="#marquee"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center text-white/50 hover:text-white transition-colors group"
        aria-label="Scroll down to salon details"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase font-medium mb-1.5">DISCOVER</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-[#F5BE58] transition-colors" />
      </a>
    </section>
  );
};
