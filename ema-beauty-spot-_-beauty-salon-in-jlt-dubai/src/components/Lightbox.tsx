import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Instagram, MessageCircle } from 'lucide-react';
import { GalleryItem, createBookingWhatsAppUrl } from '../data/salonData';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  items,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const currentIndex = item ? items.findIndex((g) => g.id === item.id) : -1;

  const handleNext = useCallback(() => {
    if (currentIndex >= 0 && currentIndex < items.length - 1) {
      onNavigate(items[currentIndex + 1]);
    } else if (items.length > 0) {
      onNavigate(items[0]);
    }
  }, [currentIndex, items, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(items[currentIndex - 1]);
    } else if (items.length > 0) {
      onNavigate(items[items.length - 1]);
    }
  }, [currentIndex, items, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !item) return null;

  const whatsappBookingUrl = createBookingWhatsAppUrl({
    service: `${item.title} (${item.categoryLabel})`,
    message: `I loved this style from your gallery: ${item.title}`
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 lg:p-10 bg-[#160526]/96 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div
          className="absolute top-4 left-4 right-4 md:top-6 md:left-8 md:right-8 flex items-center justify-between z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2 text-xs md:text-sm text-[#D6BEF0] tracking-[0.2em] uppercase font-semibold">
            <span>{item.categoryLabel}</span>
            <span className="text-[#7B43B0]">/</span>
            <span className="text-[#C7B3E0]">{currentIndex + 1} of {items.length}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#2E124B] text-[#FAF6FC] hover:bg-[#4A2673] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#7B43B0]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Prev Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Previous Image"
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#2E124B]/80 text-[#FAF6FC] hover:bg-[#4A2673] hover:text-white transition-colors border border-[#7B43B0]/30 focus:outline-none focus:ring-2 focus:ring-[#7B43B0]"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Next Image"
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#2E124B]/80 text-[#FAF6FC] hover:bg-[#4A2673] hover:text-white transition-colors border border-[#7B43B0]/30 focus:outline-none focus:ring-2 focus:ring-[#7B43B0]"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Content Modal */}
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl w-full max-h-[85vh] flex flex-col md:flex-row bg-[#1F0B33] border border-[#7B43B0]/30 overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image Pane */}
          <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden max-h-[50vh] md:max-h-[85vh]">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover select-none"
              loading="eager"
            />
          </div>

          {/* Details Pane */}
          <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-[#240E3B] text-[#FAF6FC]">
            <div>
              <div className="text-xs tracking-[0.25em] text-[#D6BEF0] uppercase mb-2 font-semibold">
                {item.categoryLabel}
              </div>

              <h3 className="font-serif text-2xl md:text-2xl text-[#FAF6FC] font-normal leading-snug mb-4">
                {item.title}
              </h3>

              {item.caption && (
                <p className="text-sm text-[#D7CAE8] font-light leading-relaxed mb-6">
                  {item.caption}
                </p>
              )}
            </div>

            <div className="space-y-3 pt-6 border-t border-[#3B195E]">
              {/* WhatsApp booking link */}
              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 bg-[#25D366] text-[#0A180E] font-semibold text-xs tracking-[0.15em] uppercase hover:bg-[#20b858] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366]"
              >
                <MessageCircle className="w-4 h-4 fill-[#0A180E] stroke-none" />
                <span>Book This Look on WhatsApp</span>
              </a>

              {/* Instagram Source Link */}
              {item.instagramUrl && (
                <a
                  href={item.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#341454] text-[#D6BEF0] hover:text-[#FAF6FC] hover:bg-[#4A2673] transition-colors border border-[#7B43B0]/30 text-xs tracking-[0.15em] uppercase"
                >
                  <Instagram className="w-4 h-4" />
                  <span>View on Instagram</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
