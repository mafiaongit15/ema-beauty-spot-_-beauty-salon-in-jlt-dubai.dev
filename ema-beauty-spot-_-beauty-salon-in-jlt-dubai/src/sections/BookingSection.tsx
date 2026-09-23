import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone, Calendar, Clock, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { business, services, createBookingWhatsAppUrl, defaultWhatsAppMessage } from '../data/salonData';

export const BookingSection: React.FC = () => {
  const [name, setName] = useState('');
  const [selectedService, setSelectedService] = useState('Nails - Russian Manicure');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Afternoon (1:00 PM – 5:00 PM)');
  const [notes, setNotes] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = createBookingWhatsAppUrl({
      name: name.trim(),
      service: selectedService,
      date: preferredDate || 'Flexible / Soonest available',
      time: preferredTime,
      message: notes.trim()
    });

    // Open WhatsApp directly without window.open
    window.location.href = url;
  };

  const directWhatsAppUrl = `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

  return (
    <section id="booking" className="py-20 md:py-32 bg-[#FAF7FD] text-[#220D38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="RESERVATIONS & INQUIRIES"
          title="Ready for Your Next Beauty Moment?"
          subtitle="Book your appointment or message us directly on WhatsApp for real-time scheduling."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Quick Contact & Direct Action */}
          <div className="lg:col-span-5 bg-white p-8 md:p-10 border border-[#E8DCF3] shadow-sm">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#6C3B9B] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#6C3B9B]" />
              <span>DIRECT WHATSAPP BOOKING</span>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-[#220D38] font-normal leading-snug mb-4">
              Fastest Way to Reserve
            </h3>

            <p className="text-sm text-[#523F66] font-light leading-relaxed mb-8">
              Prefer chatting directly? Message us on WhatsApp to ask questions, request customized packages, or find an open slot today.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-[#25D366] text-[#0A180E] font-semibold text-xs tracking-[0.2em] uppercase hover:bg-[#20ba59] transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#25D366]"
              >
                <MessageCircle className="w-4 h-4 fill-[#0A180E] stroke-none" />
                <span>BOOK ON WHATSAPP</span>
              </a>

              <a
                href={`tel:${business.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#220D38] text-[#FAF6FC] hover:bg-[#341454] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 border border-[#7B43B0]/30"
              >
                <Phone className="w-3.5 h-3.5 text-[#D6BEF0]" />
                <span>CALL US: {business.phoneDisplay}</span>
              </a>
            </div>

            {/* Quick reminders */}
            <div className="pt-6 border-t border-[#F2E8FB] space-y-3 text-xs text-[#523F66]">
              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-[#6C3B9B] shrink-0" />
                <span>Daily response within a few minutes during salon hours.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="w-3.5 h-3.5 text-[#6C3B9B] shrink-0" />
                <span>Advance booking recommended for weekend slots.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 border border-[#E8DCF3] shadow-sm">
            <div className="text-xs uppercase tracking-[0.25em] text-[#6C3B9B] font-semibold mb-2">
              PREFERENCE FORM
            </div>
            <h3 className="font-serif text-2xl text-[#220D38] font-normal mb-6">
              Customize Your Appointment
            </h3>
            <p className="text-xs text-[#523F66] mb-6 font-light">
              Fill in your preferred details below, and clicking submit will automatically prepare your WhatsApp message ready to send.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="booking-name" className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#4F3B63] mb-1.5">
                  Your Full Name *
                </label>
                <input
                  id="booking-name"
                  type="text"
                  required
                  placeholder="e.g. Sarah Al Mansoor"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7FD] border border-[#E0D0F0] text-sm text-[#220D38] placeholder-[#9E8CAE] focus:outline-none focus:border-[#7B43B0] focus:ring-1 focus:ring-[#7B43B0] transition-colors"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="booking-service" className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#4F3B63] mb-1.5">
                  Desired Ritual / Service *
                </label>
                <select
                  id="booking-service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7FD] border border-[#E0D0F0] text-sm text-[#220D38] focus:outline-none focus:border-[#7B43B0] focus:ring-1 focus:ring-[#7B43B0] transition-colors"
                >
                  {services.map((srv) => (
                    <option key={srv.id} value={`${srv.name} - ${srv.tagline}`}>
                      {srv.name} ({srv.tagline})
                    </option>
                  ))}
                  <option value="Special Package / Multiple Services">
                    Combination Package (Hair + Nails + Lashes)
                  </option>
                  <option value="Consultation / Custom Request">
                    Not sure / Consultation
                  </option>
                </select>
              </div>

              {/* Two columns: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-date" className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#4F3B63] mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF7FD] border border-[#E0D0F0] text-sm text-[#220D38] focus:outline-none focus:border-[#7B43B0] focus:ring-1 focus:ring-[#7B43B0] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="booking-time" className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#4F3B63] mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    id="booking-time"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF7FD] border border-[#E0D0F0] text-sm text-[#220D38] focus:outline-none focus:border-[#7B43B0] focus:ring-1 focus:ring-[#7B43B0] transition-colors"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                    <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                    <option value="Late Evening (8:00 PM – 10:00 PM)">Late Evening (8:00 PM – 10:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Message / Notes */}
              <div>
                <label htmlFor="booking-notes" className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#4F3B63] mb-1.5">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="booking-notes"
                  rows={3}
                  placeholder="e.g., Russian manicure with gel extension removal, or sensitive skin notes..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7FD] border border-[#E0D0F0] text-sm text-[#220D38] placeholder-[#9E8CAE] focus:outline-none focus:border-[#7B43B0] focus:ring-1 focus:ring-[#7B43B0] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-[#4A2673] hover:bg-[#3B195E] text-[#FAF6FC] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-md hover:shadow-lg border border-[#7B43B0]/40 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>CONFIRM & OPEN WHATSAPP CHAT</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
