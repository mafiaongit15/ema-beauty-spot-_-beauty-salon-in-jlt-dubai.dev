import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { promotionalOffers, createBookingWhatsAppUrl } from '../data/salonData';

export const PromotionalOffers: React.FC = () => {
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
      setActiveIndex(Math.min(Math.max(0, index), promotionalOffers.length - 1));
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
    <section id="offers" className="py-16 md:py-28 bg-[#FAF7FD] text-[#220D38] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <SectionHeading
            align="left"
            className="mb-0 md:mb-0 max-w-2xl"
            eyebrow="SPECIAL PACKAGES"
            title="A Little More Beauty"
            subtitle="Discover curated packages and limited promotions designed to treat you to top-tier care in JLT."
          />

          {/* Mobile Arrow Controls (visible only on phone) */}
          <div className="flex md:hidden items-center justify-between mt-4 pt-3 border-t border-[#E8DCF3]">
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-widest text-[#6C3B9B] font-semibold">
                SWIPE PACKAGES
              </span>
              <span className="text-xs font-mono font-bold text-[#4A2673]">
                {String(activeIndex + 1).padStart(2, '0')} / {String(promotionalOffers.length).padStart(2, '0')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                disabled={!canScrollLeft}
                aria-label="Previous offer"
                className="w-9 h-9 rounded-full border border-[#D6BEF0] flex items-center justify-center text-[#4A2673] disabled:opacity-30 disabled:pointer-events-none hover:bg-[#EFE5F7] active:scale-95 transition-all touch-manipulation"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollRight}
                aria-label="Next offer"
                className="w-9 h-9 rounded-full border border-[#D6BEF0] bg-[#4A2673] text-white flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none hover:bg-[#3B195E] active:scale-95 transition-all touch-manipulation shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 1. Mobile Phone View: Horizontal Scroll with Arrows */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 -mx-4 px-4 pb-4 touch-pan-x"
        >
          {promotionalOffers.map((offer) => {
            const whatsappUrl = createBookingWhatsAppUrl({
              service: `${offer.title} (${offer.badge})`,
              message: `Hi Ema Beauty Spot, I'm interested in the "${offer.title}" promotional offer (${offer.priceNote}). Could you please share available slots?`
            });

            return (
              <div
                key={offer.id}
                className="w-[85vw] max-w-[320px] shrink-0 snap-center flex flex-col bg-white border border-[#E8DCF3] shadow-sm rounded-none overflow-hidden"
              >
                {/* Offer Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#240E3B]">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B33]/75 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.25em] font-semibold text-[#220D38] bg-[#EADEF7] px-3 py-1 shadow-sm border border-[#7B43B0]/30">
                    {offer.badge}
                  </div>
                </div>

                {/* Offer Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-[#6C3B9B] font-semibold mb-1">
                      {offer.priceNote}
                    </div>
                    <h3 className="font-serif text-xl text-[#220D38] font-normal leading-snug mb-1.5">
                      {offer.title}
                    </h3>
                    <p className="text-xs text-[#523F66] mb-3 italic">
                      {offer.subtitle}
                    </p>
                    <p className="text-xs text-[#523F66] font-light leading-relaxed mb-4 line-clamp-2">
                      {offer.description}
                    </p>

                    <div className="space-y-1.5 mb-5 pt-3 border-t border-[#F2E8FB]">
                      {offer.included.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-2 text-[11px] text-[#523F66]">
                          <Check className="w-3.5 h-3.5 text-[#6C3B9B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-[#4A2673] text-[#FAF6FC] text-xs font-semibold tracking-[0.16em] uppercase shadow-sm active:scale-[0.98] transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Book on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Desktop View: 3 Columns Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {promotionalOffers.map((offer, idx) => {
            const whatsappUrl = createBookingWhatsAppUrl({
              service: `${offer.title} (${offer.badge})`,
              message: `Hi Ema Beauty Spot, I'm interested in the "${offer.title}" promotional offer (${offer.priceNote}). Could you please share available slots?`
            });

            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col bg-white border border-[#E8DCF3] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group"
              >
                {/* Offer Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#240E3B]">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B33]/75 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.25em] font-semibold text-[#220D38] bg-[#EADEF7] px-3 py-1 shadow-sm border border-[#7B43B0]/30">
                    {offer.badge}
                  </div>
                </div>

                {/* Offer Details */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#6C3B9B] font-semibold mb-2">
                      {offer.priceNote}
                    </div>

                    <h3 className="font-serif text-2xl text-[#220D38] font-normal leading-snug mb-2">
                      {offer.title}
                    </h3>

                    <p className="text-xs tracking-wider text-[#523F66] mb-4 italic">
                      {offer.subtitle}
                    </p>

                    <p className="text-sm text-[#523F66] font-light leading-relaxed mb-6">
                      {offer.description}
                    </p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-[#F2E8FB]">
                      {offer.included.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-2.5 text-xs text-[#523F66]">
                          <Check className="w-3.5 h-3.5 text-[#6C3B9B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#4A2673] hover:bg-[#3B195E] text-[#FAF6FC] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow hover:shadow-md border border-[#7B43B0]/30"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Inquire / Book on WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer note */}
        <div className="mt-8 text-center text-xs text-[#826E97] tracking-wide">
          * Offers subject to stylist availability. Mention promo code when messaging on WhatsApp.
        </div>
      </div>
    </section>
  );
};
