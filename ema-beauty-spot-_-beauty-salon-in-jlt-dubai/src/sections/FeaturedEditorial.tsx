import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { createBookingWhatsAppUrl } from '../data/salonData';

export const FeaturedEditorial: React.FC = () => {
  const hairBooking = createBookingWhatsAppUrl({
    service: 'Hair Styling & Blowout',
    message: "Hi Ema Beauty Spot, I'd like to book an appointment for Hair Services."
  });

  const nailsBooking = createBookingWhatsAppUrl({
    service: 'Russian Manicure & Gel',
    message: "Hi Ema Beauty Spot, I'd like to book an appointment for Nails / Russian Manicure."
  });

  const lashesBooking = createBookingWhatsAppUrl({
    service: 'Lash Extensions & Lift',
    message: "Hi Ema Beauty Spot, I'd like to book an appointment for Lash Services."
  });

  const browsBooking = createBookingWhatsAppUrl({
    service: 'Brow Lamination & Sculpt',
    message: "Hi Ema Beauty Spot, I'd like to book an appointment for Brow Services."
  });

  const items = [
    {
      id: 'hair',
      tag: 'HAIR ATELIER',
      title: 'Luminous Hair, Radiant Confidence',
      description: 'From deep hydrating gloss treatments to bespoke cuts and volume blowouts tailored to Dubai’s climate.',
      image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1400&q=80',
      bookingUrl: hairBooking,
      btnText: 'Book Hair on WhatsApp'
    },
    {
      id: 'nails',
      tag: 'RUSSIAN MANICURE',
      title: 'Dry Hardware Perfection',
      description: 'Meticulous cuticle cleanup with long-lasting gel overlays that resist chipping for weeks.',
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=80',
      bookingUrl: nailsBooking,
      btnText: 'Book Nails on WhatsApp'
    },
    {
      id: 'lashes',
      tag: 'LASH ARCHITECTURE',
      title: 'Weightless Lash Sets',
      description: 'Classic 1:1, soft Russian volume, or keratin lift with deep tint that elevates your daily gaze.',
      image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1000&q=80',
      bookingUrl: lashesBooking,
      btnText: 'Book Lashes on WhatsApp'
    },
    {
      id: 'brows',
      tag: 'BROW STYLING',
      title: 'Sculpted, Feathered & Defined',
      description: 'Symmetrical brow maps, gentle threading, rich custom tints, and brow lamination to frame your eyes effortlessly.',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1400&q=80',
      bookingUrl: browsBooking,
      btnText: 'Book Brows on WhatsApp'
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    const card = scrollRef.current.firstElementChild as HTMLElement;
    if (card) {
      const cardWidth = card.offsetWidth + 16;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(0, index), items.length - 1));
    }
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scrollPrev = () => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.firstElementChild as HTMLElement;
    const step = card ? card.offsetWidth + 16 : 280;
    scrollRef.current.scrollBy({ left: -step, behavior: 'smooth' });
  };

  const scrollNext = () => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.firstElementChild as HTMLElement;
    const step = card ? card.offsetWidth + 16 : 280;
    scrollRef.current.scrollBy({ left: step, behavior: 'smooth' });
  };

  return (
    <section id="featured" className="py-16 md:py-32 bg-[#F3EDF9] text-[#220D38] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 md:mb-16">
          <SectionHeading
            align="left"
            className="mb-0 md:mb-0 max-w-2xl"
            eyebrow="THE SIGNATURE CRAFT"
            title="The Everyday Editorial."
            subtitle="A closer look at our four core client favorites: precision Russian nails, lustrous hair treatments, fluttery lash sets, and sculpted brows."
          />

          {/* Mobile Arrow Controls (visible only on phone/tablet) */}
          <div className="flex lg:hidden items-center justify-between mt-4 pt-3 border-t border-[#DED0EC]">
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-widest text-[#6C3B9B] font-semibold">
                SWIPE CRAFTS
              </span>
              <span className="text-xs font-mono font-bold text-[#4A2673]">
                {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                disabled={!canScrollLeft}
                aria-label="Previous editorial"
                className="w-9 h-9 rounded-full border border-[#D6BEF0] flex items-center justify-center text-[#4A2673] disabled:opacity-30 disabled:pointer-events-none hover:bg-[#EFE5F7] active:scale-95 transition-all touch-manipulation"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollRight}
                aria-label="Next editorial"
                className="w-9 h-9 rounded-full border border-[#D6BEF0] bg-[#4A2673] text-white flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none hover:bg-[#3B195E] active:scale-95 transition-all touch-manipulation shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 1. Mobile & Small Screen View: Horizontal Swipe Carousel with Arrows */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 -mx-4 px-4 pb-4 touch-pan-x"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="w-[85vw] max-w-[320px] shrink-0 snap-center relative bg-[#240E3B] shadow-lg rounded-none overflow-hidden aspect-[4/5] flex flex-col justify-end p-6"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B33]/95 via-[#2E114C]/45 to-transparent" />

              <div className="relative z-10 text-[#FAF6FC]">
                <div className="text-[10px] tracking-[0.25em] text-[#D6BEF0] uppercase font-semibold mb-1">
                  {item.tag}
                </div>
                <h3 className="font-serif text-xl font-normal mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#D7CAE8] font-light mb-4 line-clamp-2">
                  {item.description}
                </p>
                <a
                  href={item.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#F5BE58] hover:text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Book on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Desktop View: Asymmetric Editorial Layout */}
        <div className="hidden lg:block space-y-12">
          {/* Row 1: Large Hair (7 cols) + Small Nails (5 cols) */}
          <div className="grid grid-cols-12 gap-12 items-center">
            {/* Large Hair Block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-7 relative group"
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-[#240E3B] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1400&q=80"
                  alt="Ema Beauty Spot signature hair styling and glossy color"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B33]/90 via-[#2E114C]/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-6 left-6 right-6 text-[#FAF6FC]">
                  <div className="text-[11px] tracking-[0.25em] text-[#D6BEF0] uppercase font-semibold mb-1">
                    HAIR ATELIER
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-normal mb-2">
                    Luminous Hair, Radiant Confidence
                  </h3>
                  <p className="text-xs md:text-sm text-[#D7CAE8] font-light max-w-lg mb-4">
                    From deep hydrating gloss treatments to bespoke cuts and volume blowouts tailored to Dubai’s climate.
                  </p>
                  <a
                    href={hairBooking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF6FC] hover:text-[#D6BEF0] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Book Hair on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Small Nail Block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-5 relative group"
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-[#240E3B] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=80"
                  alt="Ema Beauty Spot Russian manicure clean cuticle work"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B33]/90 via-[#2E114C]/35 to-transparent opacity-85" />

                <div className="absolute bottom-6 left-6 right-6 text-[#FAF6FC]">
                  <div className="text-[11px] tracking-[0.25em] text-[#D6BEF0] uppercase font-semibold mb-1">
                    RUSSIAN MANICURE
                  </div>
                  <h3 className="font-serif text-2xl font-normal mb-2">
                    Dry Hardware Perfection
                  </h3>
                  <p className="text-xs md:text-sm text-[#D7CAE8] font-light mb-4">
                    Meticulous cuticle cleanup with long-lasting gel overlays that resist chipping for weeks.
                  </p>
                  <a
                    href={nailsBooking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF6FC] hover:text-[#D6BEF0] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Book Nails on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Small Lashes (5 cols) + Large Brows (7 cols) */}
          <div className="grid grid-cols-12 gap-12 items-center">
            {/* Small Lashes Block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-5 relative group"
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-[#240E3B] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1000&q=80"
                  alt="Ema Beauty Spot eyelash extensions and lift"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B33]/90 via-[#2E114C]/35 to-transparent opacity-85" />

                <div className="absolute bottom-6 left-6 right-6 text-[#FAF6FC]">
                  <div className="text-[11px] tracking-[0.25em] text-[#D6BEF0] uppercase font-semibold mb-1">
                    LASH ARCHITECTURE
                  </div>
                  <h3 className="font-serif text-2xl font-normal mb-2">
                    Weightless Lash Sets
                  </h3>
                  <p className="text-xs md:text-sm text-[#D7CAE8] font-light mb-4">
                    Classic 1:1, soft Russian volume, or keratin lift with deep tint that elevates your daily gaze.
                  </p>
                  <a
                    href={lashesBooking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF6FC] hover:text-[#D6BEF0] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Book Lashes on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Large Brow Block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-7 relative group"
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-[#240E3B] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1400&q=80"
                  alt="Ema Beauty Spot brow sculpting lamination and shaping"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B33]/90 via-[#2E114C]/35 to-transparent opacity-85" />

                <div className="absolute bottom-6 left-6 right-6 text-[#FAF6FC]">
                  <div className="text-[11px] tracking-[0.25em] text-[#D6BEF0] uppercase font-semibold mb-1">
                    BROW STYLING
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-normal mb-2">
                    Sculpted, Feathered & Defined
                  </h3>
                  <p className="text-xs md:text-sm text-[#D7CAE8] font-light max-w-lg mb-4">
                    Symmetrical brow maps, gentle threading, rich custom tints, and brow lamination to frame your eyes effortlessly.
                  </p>
                  <a
                    href={browsBooking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF6FC] hover:text-[#D6BEF0] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Book Brows on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
