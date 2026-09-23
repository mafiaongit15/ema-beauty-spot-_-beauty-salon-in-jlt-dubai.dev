import React from 'react';
import { Instagram, MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { business, defaultWhatsAppMessage } from '../data/salonData';
import { EmaLogo } from '../components/EmaLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

  return (
    <footer className="bg-[#150524] text-[#FAF6FC] pt-16 md:pt-20 pb-12 border-t border-[#2F1447]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#280F3E]">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <a href="#hero" className="inline-block mb-3">
              <EmaLogo variant="horizontal" color="white" className="h-10" />
            </a>

            <p className="text-xs sm:text-sm text-[#C4B2DA] font-light leading-relaxed max-w-sm mb-6">
              A serene ladies' beauty haven in Fortune Tower, Cluster C, dedicated to bespoke hair styling, Russian manicures, lash art, and brow transformations in JLT, Dubai.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ema Beauty Spot on Instagram"
                className="w-9 h-9 rounded-full bg-[#240E3B] border border-[#4A2673] text-[#D6BEF0] flex items-center justify-center hover:bg-[#4A2673] hover:text-[#FAF6FC] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={business.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ema Beauty Spot on TikTok"
                className="w-9 h-9 rounded-full bg-[#240E3B] border border-[#4A2673] text-[#D6BEF0] flex items-center justify-center hover:bg-[#4A2673] hover:text-[#FAF6FC] transition-colors text-xs font-bold"
              >
                TK
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-full bg-[#240E3B] border border-[#4A2673] text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-[#0A180E] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#D6BEF0] font-semibold mb-4">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C4B2DA]">
              <li>
                <a href="#hero" className="hover:text-[#FAF6FC] transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FAF6FC] transition-colors">Services</a>
              </li>
              <li>
                <a href="#featured" className="hover:text-[#FAF6FC] transition-colors">Signatures</a>
              </li>
              <li>
                <a href="#offers" className="hover:text-[#FAF6FC] transition-colors">Offers</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FAF6FC] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FAF6FC] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#FAF6FC] transition-colors">Location</a>
              </li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#D6BEF0] font-semibold mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-[#C4B2DA]">
              <li>Hair Cuts, Styling & Blowout</li>
              <li>Russian Manicure & Gelish</li>
              <li>Nail Extensions & Gel Sculpt</li>
              <li>Classic & Volume Lashes</li>
              <li>Lash Lift & Keratin Tint</li>
              <li>Brow Lamination & Threading</li>
              <li>Japanese Scalp Head Spa</li>
              <li>Relaxing Massage & Waxing</li>
            </ul>
          </div>

          {/* Location & Booking */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#D6BEF0] font-semibold mb-4">
              VISIT & CONNECT
            </h4>
            <div className="text-xs text-[#C4B2DA] space-y-2 mb-5">
              <p className="text-[#FAF6FC] font-medium">{business.name}</p>
              <p>Fortune Tower, Cluster C</p>
              <p>Jumeirah Lakes Towers (JLT), Dubai, UAE</p>
              <p className="pt-2">
                <a href={`tel:${business.phone}`} className="hover:text-[#D6BEF0] transition-colors flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#D6BEF0]" />
                  <span>{business.phoneDisplay}</span>
                </a>
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366] text-[#0A180E] font-semibold text-xs tracking-[0.16em] uppercase hover:bg-[#20ba59] transition-colors shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#0A180E] stroke-none" />
              <span>BOOK YOUR APPOINTMENT</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9B88B4]">
          <div>
            © {new Date().getFullYear()} Ema Beauty Spot. All rights reserved. Ladies' Beauty Salon in JLT, Dubai.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 hover:text-[#FAF6FC] transition-colors text-xs cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
