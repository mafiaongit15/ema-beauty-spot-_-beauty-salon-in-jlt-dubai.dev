import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, Phone, MapPin, Sparkles } from 'lucide-react';
import { EmaLogo } from './EmaLogo';
import { business, defaultWhatsAppMessage } from '../data/salonData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Track active section for category highlight
      const sections = ['hero', 'about', 'services', 'offers', 'gallery', 'booking'];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId === 'hero' ? 'home' : sectionId === 'booking' ? 'contact' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', name: 'HOME', href: '#hero' },
    { id: 'about', name: 'ABOUT', href: '#about' },
    { id: 'services', name: 'SERVICES', href: '#services' },
    { id: 'offers', name: 'OFFERS', href: '#offers' },
    { id: 'gallery', name: 'GALLERY', href: '#gallery' },
    { id: 'contact', name: 'CONTACT', href: '#booking' },
  ];

  const whatsappUrl = `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#140522]/98 backdrop-blur-md shadow-xl border-b border-[#4A2673]/30'
            : 'bg-gradient-to-b from-black/95 via-black/60 to-transparent'
        }`}
      >
        {/* Top Info Bar (Logo + Location + Phone/WhatsApp) */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2.5 sm:py-3.5 border-b border-white/10">
            {/* Brand Logo (Responsive sizing) */}
            <a
              href="#hero"
              className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B43B0] transition-opacity duration-200 hover:opacity-90"
              aria-label="Ema Beauty Spot Home"
            >
              <EmaLogo
                variant="horizontal"
                color="white"
                className="h-8 sm:h-10 md:h-11"
              />
            </a>

            {/* Desktop Center-Right: Location Info & Contact */}
            <div className="hidden lg:flex items-center gap-7">
              <div className="text-right">
                <div className="text-xs text-[#EAE2F2] font-light flex items-center justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F5BE58] shrink-0" />
                  <span>Cluster C, Fortune Tower, JLT Dubai</span>
                </div>
                <a
                  href={business.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#F5BE58] hover:text-[#FFD782] transition-colors font-medium hover:underline inline-block mt-0.5"
                >
                  Get Directions →
                </a>
              </div>

              {/* Subtle Divider */}
              <div className="h-7 w-px bg-white/15" />

              {/* Far-Right: Phone & WhatsApp booking */}
              <div className="text-right">
                <a
                  href={`tel:${business.phone}`}
                  className="text-xs text-[#FAF6FC] hover:text-[#F5BE58] transition-colors font-medium flex items-center justify-end gap-1.5"
                >
                  <span>{business.phoneDisplay}</span>
                  <Phone className="w-3.5 h-3.5 text-[#F5BE58]" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#D6BEF0] hover:text-white transition-colors flex items-center justify-end gap-1.5 mt-0.5"
                >
                  <span>Book on WhatsApp</span>
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                </a>
              </div>
            </div>

            {/* Mobile Actions: Phone + WhatsApp + Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${business.phone}`}
                aria-label="Call salon"
                className="p-2 text-[#F5BE58] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book on WhatsApp"
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#25D366] text-[#0A180E] text-[11px] font-bold tracking-wider rounded-full shadow-sm hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#0A180E] stroke-none" />
                <span className="hidden xs:inline uppercase text-[10px]">BOOK</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
                className="p-2 text-white hover:text-[#F5BE58] transition-colors focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Categories Navigation Bar - Visible on BOTH Desktop and Mobile (swipeable on mobile) */}
        <div className="bg-black/55 backdrop-blur-md border-b border-white/10 overflow-x-auto scrollbar-none">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <nav className="flex items-center lg:justify-center gap-5 sm:gap-8 lg:gap-10 py-2 sm:py-2.5 min-w-max">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-200 py-1 border-b-2 whitespace-nowrap ${
                      isActive
                        ? 'text-[#F5BE58] border-[#F5BE58]'
                        : 'text-[#FAF6FC]/85 hover:text-white border-transparent hover:border-white/40'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (High z-index to overlay cleanly) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#140522]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-6 pb-8 px-6 overflow-y-auto"
          >
            {/* Top Close Row inside drawer */}
            <div className="flex items-center justify-between pb-4 border-b border-[#3B195E]">
              <EmaLogo variant="horizontal" color="white" className="h-8" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white/80 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav links */}
            <div className="py-6 flex flex-col space-y-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#D6BEF0] font-semibold mb-2">
                NAVIGATION
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * idx, duration: 0.2 }}
                  className="font-serif text-2xl tracking-wide text-[#FAF6FC] hover:text-[#F5BE58] transition-colors py-1.5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#9B88B4] tracking-normal font-sans">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-6 border-t border-[#3B195E] space-y-3">
              <div className="text-xs text-[#C4B2DA] mb-3">
                <p className="font-semibold text-white">Fortune Tower, Cluster C</p>
                <p>Jumeirah Lakes Towers (JLT), Dubai</p>
                <a
                  href={business.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5BE58] underline inline-block mt-1"
                >
                  View on Google Maps →
                </a>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] text-[#0A180E] font-bold text-xs tracking-[0.18em] uppercase shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-[#0A180E] stroke-none" />
                <span>BOOK ON WHATSAPP</span>
              </a>

              <a
                href={`tel:${business.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#240E3B] text-[#FAF6FC] text-xs font-semibold tracking-[0.18em] uppercase border border-[#7B43B0]/40"
              >
                <Phone className="w-4 h-4 text-[#F5BE58]" />
                <span>CALL {business.phoneDisplay}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
