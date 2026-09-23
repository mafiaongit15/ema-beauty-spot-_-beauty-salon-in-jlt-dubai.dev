import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { business, instagramPosts } from '../data/salonData';

export const InstagramFeed: React.FC = () => {
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
      setActiveIndex(Math.min(Math.max(0, index), instagramPosts.length - 1));
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
    <section className="py-16 md:py-28 bg-[#FAF7FD] text-[#220D38] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <SectionHeading
            align="left"
            className="mb-0 md:mb-0 max-w-xl"
            eyebrow="CONNECT ON SOCIAL"
            title="Follow Along"
            subtitle="Catch daily behind-the-scenes moments, client transformations, and quick booking reminders on our Instagram feed."
          />

          <div className="mt-4 md:mt-0 flex items-center justify-between sm:justify-end gap-3">
            {/* Mobile Arrow Controls */}
            <div className="flex sm:hidden items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#4A2673]">
                {String(activeIndex + 1).padStart(2, '0')} / {String(instagramPosts.length).padStart(2, '0')}
              </span>
              <button
                onClick={scrollPrev}
                disabled={!canScrollLeft}
                aria-label="Previous instagram post"
                className="w-8 h-8 rounded-full border border-[#D6BEF0] flex items-center justify-center text-[#4A2673] disabled:opacity-30 disabled:pointer-events-none hover:bg-[#EFE5F7] active:scale-95 transition-all touch-manipulation"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollRight}
                aria-label="Next instagram post"
                className="w-8 h-8 rounded-full border border-[#D6BEF0] bg-[#4A2673] text-white flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none hover:bg-[#3B195E] active:scale-95 transition-all touch-manipulation shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#4A2673] text-[#FAF6FC] hover:bg-[#3B195E] text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-sm border border-[#7B43B0]/30 shrink-0"
            >
              <Instagram className="w-3.5 h-3.5 text-[#D6BEF0]" />
              <span>INSTAGRAM</span>
            </a>
          </div>
        </div>

        {/* 1. Mobile Phone View: Horizontal Carousel with Arrows */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex sm:hidden overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 -mx-4 px-4 pb-4 touch-pan-x"
        >
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[75vw] max-w-[280px] shrink-0 snap-center flex flex-col bg-white border border-[#E8DCF3] overflow-hidden shadow-sm active:scale-[0.98] transition-transform"
            >
              <div className="relative aspect-square overflow-hidden bg-[#240E3B]">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 p-1.5 rounded-full bg-[#160526]/70 text-white backdrop-blur-sm">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between flex-1">
                <p className="text-xs text-[#523F66] font-light leading-relaxed line-clamp-2 mb-2">
                  {post.caption}
                </p>
                <span className="text-[11px] font-semibold text-[#6C3B9B]">
                  {post.tag}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* 2. Desktop & Tablet View: 4-Column Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramPosts.map((post, idx) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col bg-white border border-[#E8DCF3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Post Image Container */}
              <div className="relative aspect-square overflow-hidden bg-[#240E3B]">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#160526]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#FAF6FC] text-[#220D38] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Post Caption */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-white">
                <p className="text-xs text-[#523F66] font-light leading-relaxed line-clamp-2 mb-3">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between text-xs text-[#6C3B9B] font-semibold">
                  <span>{post.tag}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
