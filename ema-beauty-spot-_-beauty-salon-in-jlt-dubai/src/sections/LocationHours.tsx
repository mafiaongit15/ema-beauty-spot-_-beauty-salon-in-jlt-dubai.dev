import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { business } from '../data/salonData';

export const LocationHours: React.FC = () => {
  return (
    <section id="location" className="py-20 md:py-32 bg-[#F3EDF9] text-[#220D38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="VISIT OUR SALON"
          title="Find Us in JLT"
          subtitle="Conveniently situated in Fortune Tower, Cluster C, Jumeirah Lakes Towers. Accessible with easy parking and close to the DMCC metro station."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Contact & Hours Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 md:p-8 border border-[#E8DCF3] shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-[#FAF7FD] border border-[#E8DCF3] flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#6C3B9B]" />
                </div>
                <h3 className="font-serif text-xl text-[#220D38] font-normal">
                  Location & Address
                </h3>
              </div>

              <div className="text-sm text-[#523F66] leading-relaxed mb-6 space-y-1">
                <p className="font-semibold text-[#220D38]">{business.name}</p>
                <p>{business.address.building}, {business.address.cluster}</p>
                <p>{business.address.area}</p>
                <p>{business.address.city}, {business.address.country}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={business.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4A2673] text-[#FAF6FC] hover:bg-[#3B195E] text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-300 shadow-sm border border-[#7B43B0]/30"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D6BEF0]" />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#FAF7FD] text-[#220D38] hover:bg-[#EFE5F7] text-xs font-medium tracking-wider transition-colors border border-[#E0D0F0]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#6C3B9B]" />
                  <span>{business.phoneDisplay}</span>
                </a>
              </div>
            </motion.div>

            {/* Opening Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white p-6 md:p-8 border border-[#E8DCF3] shadow-sm flex-1"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full bg-[#FAF7FD] border border-[#E8DCF3] flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#6C3B9B]" />
                </div>
                <h3 className="font-serif text-xl text-[#220D38] font-normal">
                  Opening Hours
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#523F66]">
                <div className="flex items-center justify-between pb-3 border-b border-[#F2E8FB]">
                  <span className="font-medium text-[#220D38]">Monday – Thursday</span>
                  <span className="text-[#523F66]">{business.openingHours.mondayThursday}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#F2E8FB] gap-1">
                  <span className="font-medium text-[#220D38]">Friday</span>
                  <span className="text-[#523F66]">{business.openingHours.friday}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#220D38]">Saturday – Sunday</span>
                  <span className="text-[#523F66]">{business.openingHours.saturdaySunday}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2E8FB] flex items-center justify-between text-xs text-[#6C3B9B]">
                <span>Ladies-only luxury sanctuary</span>
                <span className="text-[#25D366] font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse" />
                  <span>Open Daily</span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Google Maps Embed Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 bg-white border border-[#E8DCF3] shadow-sm overflow-hidden flex flex-col"
          >
            {/* Map Frame */}
            <div className="relative w-full h-[360px] md:h-[440px] bg-[#EAE2D8]">
              <iframe
                title="Ema Beauty Spot Location in Fortune Tower, Cluster C, JLT Dubai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4750130985556!2d55.14068307611599!3d25.07474897779339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ca9b787dc89%3A0x868b44971d6f0cf5!2sFortune%20Tower%2C%20Cluster%20C%20-%20Jumeirah%20Lakes%20Towers%20-%20Dubai!5e0!3m2!1sen!2sae!4v1711200000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.02) saturate(0.95)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Badge */}
              <div className="absolute top-4 left-4 bg-[#220D38]/90 backdrop-blur-md text-[#FAF6FC] px-3 py-2 text-xs border border-[#7B43B0]/30 shadow-lg pointer-events-none">
                <div className="font-serif text-sm">Fortune Tower, Cluster C</div>
                <div className="text-[10px] text-[#D6BEF0] tracking-wider uppercase font-medium">Jumeirah Lakes Towers, Dubai</div>
              </div>
            </div>

            {/* Sub-bar */}
            <div className="p-4 sm:p-6 bg-[#FAF7FD] border-t border-[#E8DCF3] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#523F66]">
              <span>Cluster C is located right off First Al Khail St in JLT.</span>
              <a
                href={business.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#220D38] font-semibold hover:text-[#6C3B9B] uppercase tracking-wider transition-colors"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
