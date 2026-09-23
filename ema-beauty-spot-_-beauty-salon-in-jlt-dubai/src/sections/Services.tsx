import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { services, createBookingWhatsAppUrl } from '../data/salonData';

export const Services: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    // Calculate active card index based on scroll position
    const card = scrollRef.current.firstElementChild as HTMLElement;
    if (card) {
      const cardWidth = card.offsetWidth + 16;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(0, index), services.length - 1));
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
    <section id="services" className="py-16 md:py-28 bg-[#FAF7FD] text-[#220D38] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <SectionHeading
            align="left"
            className="mb-0 md:mb-0 max-w-2xl"
            eyebrow="OUR CURATED RITUALS"
            title="Beauty, From Every Angle."
            subtitle="Explore our comprehensive array of ladies' beauty rituals, delivered with personal care and high attention to detail in JLT."
          />

          {/* Mobile Horizontal Carousel Arrow Controls (Visible only on phone) */}
          <div className="flex md:hidden items-center justify-between mt-4 pt-3 border-t border-[#E8DCF3]">
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-widest text-[#6C3B9B] font-semibold">
                SWIPE RITUALS
              </span>
              <span className="text-xs font-mono font-bold text-[#4A2673]">
                {String(activeIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                disabled={!canScrollLeft}
                aria-label="Previous service"
                className="w-9 h-9 rounded-full border border-[#D6BEF0] flex items-center justify-center text-[#4A2673] disabled:opacity-30 disabled:pointer-events-none hover:bg-[#EFE5F7] active:scale-95 transition-all touch-manipulation"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollRight}
                aria-label="Next service"
                className="w-9 h-9 rounded-full border border-[#D6BEF0] bg-[#4A2673] text-white flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none hover:bg-[#3B195E] active:scale-95 transition-all touch-manipulation shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 1. Mobile Phone View: Horizontal Scroll with Snap and Arrow Support */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 -mx-4 px-4 pb-4 touch-pan-x"
        >
          {services.map((service) => {
            const whatsappUrl = createBookingWhatsAppUrl({
              service: service.name,
              message: `Hi, I would like to book a ${service.name} appointment at Ema Beauty Spot.`
            });

            return (
              <div
                key={service.id}
                className="w-[82vw] max-w-[310px] shrink-0 snap-center flex flex-col bg-white border border-[#E8DCF3] shadow-sm rounded-none overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#240E3B]">
                  <img
                    src={service.image}
                    alt={`${service.name} at Ema Beauty Spot JLT`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B33]/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#FAF6FC] bg-[#220D38]/90 backdrop-blur-sm px-2.5 py-1 border border-[#7B43B0]/40">
                    {service.name}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg text-[#220D38] font-normal mb-1">
                      {service.name}
                    </h3>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-[#6C3B9B] font-semibold mb-2.5">
                      {service.tagline}
                    </p>
                    <p className="text-xs text-[#523F66] font-light leading-relaxed mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    <ul className="space-y-1.5 mb-5 text-[11px] text-[#523F66] border-t border-[#F2E8FB] pt-2.5">
                      {service.highlights.slice(0, 3).map((item, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6C3B9B] shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-[#4A2673] text-[#FAF6FC] text-xs font-semibold tracking-[0.16em] uppercase shadow-sm active:scale-[0.98] transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Book on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Desktop & Tablet View: Classic Multi-Column Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const whatsappUrl = createBookingWhatsAppUrl({
              service: service.name,
              message: `Hi, I would like to book a ${service.name} appointment at Ema Beauty Spot.`
            });

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col bg-white border border-[#E8DCF3] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#7B43B0]/60 overflow-hidden"
              >
                {/* Image Container with Smooth Scale */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#240E3B]">
                  <img
                    src={service.image}
                    alt={`${service.name} at Ema Beauty Spot JLT`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B33]/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />
                  <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#FAF6FC] bg-[#220D38]/85 backdrop-blur-sm px-2.5 py-1 border border-[#7B43B0]/40">
                    {service.name}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-[#220D38] font-normal mb-1 flex items-center justify-between">
                      <span>{service.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#6C3B9B] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </h3>

                    <p className="text-xs uppercase tracking-[0.16em] text-[#6C3B9B] font-semibold mb-3">
                      {service.tagline}
                    </p>

                    <p className="text-sm text-[#523F66] font-light leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-1.5 mb-6 text-xs text-[#523F66] border-t border-[#F2E8FB] pt-3">
                      {service.highlights.slice(0, 3).map((item, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6C3B9B]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#FAF7FD] group-hover:bg-[#4A2673] text-[#220D38] group-hover:text-[#FAF6FC] text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-300 border border-[#E0D0F0] group-hover:border-[#4A2673]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Book on WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
