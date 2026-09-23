/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Hero } from './sections/Hero';
import { Marquee } from './sections/Marquee';
import { Introduction } from './sections/Introduction';
import { Services } from './sections/Services';
import { FeaturedEditorial } from './sections/FeaturedEditorial';
import { PromotionalOffers } from './sections/PromotionalOffers';
import { Gallery } from './sections/Gallery';
import { About } from './sections/About';
import { InstagramFeed } from './sections/InstagramFeed';
import { BookingSection } from './sections/BookingSection';
import { LocationHours } from './sections/LocationHours';
import { DarkCta } from './sections/DarkCta';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7FD] text-[#220D38] selection:bg-[#E2D0F5] selection:text-[#220D38] font-sans antialiased relative">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Main Luxury Navigation */}
      <Navbar />

      {/* Hero Section with Parallax & Motion */}
      <main>
        <Hero />

        {/* Continuous Luxury Marquee */}
        <Marquee />

        {/* Introduction Section with Mask Reveal */}
        <Introduction />

        {/* Core Services Grid */}
        <Services />

        {/* Asymmetrical Editorial Featured Services */}
        <FeaturedEditorial />

        {/* Promotional Offers Section */}
        <PromotionalOffers />

        {/* Editorial Masonry Gallery with Lightbox */}
        <Gallery />

        {/* About & 4 Pillars Section */}
        <About />

        {/* Instagram Follow Along */}
        <InstagramFeed />

        {/* Main WhatsApp Booking & Preference Form */}
        <BookingSection />

        {/* Location in JLT & Opening Hours */}
        <LocationHours />

        {/* Rich Espresso Statement Section */}
        <DarkCta />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Floating WhatsApp Quick-Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
