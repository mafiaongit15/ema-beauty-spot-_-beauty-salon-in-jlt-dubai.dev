import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Lightbox } from '../components/Lightbox';
import { galleryImages, GalleryItem, business } from '../data/salonData';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'nails', label: 'Nails' },
    { id: 'hair', label: 'Hair' },
    { id: 'lashes', label: 'Lashes' },
    { id: 'brows', label: 'Brows' },
    { id: 'head-spa', label: 'Head Spa & Facial' },
    { id: 'makeup', label: 'Makeup' },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return galleryImages;
    return galleryImages.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleOpenLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    setIsLightboxOpen(true);
  };

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
      setActiveIndex(Math.min(Math.max(0, index), filteredItems.length - 1));
    }
  };

  useEffect(() => {
    checkScroll();
  }, [filteredItems]);

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
    <section id="gallery" className="py-16 md:py-32 bg-[#FAF7FD] text-[#220D38] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CLIENT RESULTS & ARTISTRY"
          title="The Work Speaks."
          subtitle="Explore real client looks from our chair in Fortune Tower, JLT. Tap any image to view details or connect directly with our Instagram."
        />

        {/* Filter Tabs (Horizontal scroll on mobile, flex-wrap centered on desktop) */}
        <div className="flex items-center sm:justify-center gap-2 mb-6 md:mb-12 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setActiveIndex(0);
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
              }}
              className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-[#4A2673] text-[#FAF6FC] shadow-sm'
                  : 'bg-white text-[#523F66] hover:text-[#220D38] hover:bg-[#EFE5F7] border border-[#E8DCF3]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mobile Arrow Controls (visible only on phone) */}
        <div className="flex sm:hidden items-center justify-between mb-4 pb-3 border-b border-[#E8DCF3]">
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-widest text-[#6C3B9B] font-semibold">
              SWIPE GALLERY
            </span>
            <span className="text-xs font-mono font-bold text-[#4A2673]">
              {String(activeIndex + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              disabled={!canScrollLeft}
              aria-label="Previous gallery photo"
              className="w-8 h-8 rounded-full border border-[#D6BEF0] flex items-center justify-center text-[#4A2673] disabled:opacity-30 disabled:pointer-events-none hover:bg-[#EFE5F7] active:scale-95 transition-all touch-manipulation"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollRight}
              aria-label="Next gallery photo"
              className="w-8 h-8 rounded-full border border-[#D6BEF0] bg-[#4A2673] text-white flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none hover:bg-[#3B195E] active:scale-95 transition-all touch-manipulation shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 1. Mobile Phone View: Horizontal Scroll Carousel with Arrows */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex sm:hidden overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 -mx-4 px-4 pb-4 touch-pan-x"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="w-[82vw] max-w-[290px] shrink-0 snap-center relative aspect-[4/5] bg-[#240E3B] cursor-pointer shadow-sm border border-[#E8DCF3] overflow-hidden"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B33]/90 via-transparent to-transparent flex flex-col justify-between p-4" />
              <div className="absolute top-3 left-3">
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#FAF6FC] bg-[#220D38]/85 backdrop-blur-sm px-2.5 py-1 border border-[#7B43B0]/40">
                  {item.categoryLabel}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-[#FAF6FC]">
                <h4 className="font-serif text-base font-normal leading-snug truncate mb-1">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between text-[11px] text-[#D6BEF0]">
                  <span className="inline-flex items-center gap-1">
                    <ZoomIn className="w-3 h-3" />
                    <span>Tap to view</span>
                  </span>
                  <span>@emabeautyspot</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Desktop & Tablet View: Grid */}
        <motion.div layout className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => handleOpenLightbox(item)}
                className={`group relative overflow-hidden bg-[#240E3B] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-[#E8DCF3] ${
                  idx % 3 === 0 ? 'aspect-[4/5]' : 'aspect-square'
                }`}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Luxury Royal Purple Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F0B33]/95 via-[#2B1046]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-6 flex flex-col justify-between" />

                {/* Corner Category Tag */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#FAF6FC] bg-[#220D38]/85 backdrop-blur-sm px-2.5 py-1 border border-[#7B43B0]/40">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Bottom Details on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-[#FAF6FC] translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-serif text-lg font-normal leading-snug mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between pt-2 border-t border-[#7B43B0]/40 text-xs text-[#D6BEF0]">
                    <span className="inline-flex items-center gap-1">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>View Closer</span>
                    </span>
                    <span className="inline-flex items-center gap-1 hover:underline">
                      <Instagram className="w-3.5 h-3.5" />
                      <span>@emabeautyspot</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View on Instagram Footer Prompt */}
        <div className="mt-8 md:mt-12 text-center">
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#220D38] hover:text-[#6C3B9B] transition-colors py-2 hover-underline-animation"
          >
            <Instagram className="w-4 h-4 text-[#6C3B9B]" />
            <span>See more everyday transformations on our Instagram</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal Component */}
      <Lightbox
        item={selectedItem}
        items={filteredItems}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(newItem) => setSelectedItem(newItem)}
      />
    </section>
  );
};
