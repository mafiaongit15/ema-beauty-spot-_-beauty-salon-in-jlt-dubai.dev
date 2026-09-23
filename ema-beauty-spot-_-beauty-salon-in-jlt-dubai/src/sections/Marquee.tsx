import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'HAIR',
    'NAILS',
    'LASHES',
    'BROWS',
    'FACIALS',
    'HEAD SPA',
    'MASSAGE',
    'WAXING',
    'MAKEUP',
  ];

  // Repeat for smooth infinite scroll
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative w-full py-5 bg-[#220D38] text-[#E7DCF5] border-y border-[#4A2673]/40 overflow-hidden select-none"
      aria-label="Salon service specialities"
    >
      <div className="animate-marquee items-center text-xs md:text-sm tracking-[0.28em] font-medium uppercase">
        {marqueeItems.map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span className="hover:text-[#FAF6FC] transition-colors whitespace-nowrap px-4 md:px-6">
              {item}
            </span>
            <span className="text-[#B98EE0] text-base md:text-lg opacity-60 px-2" aria-hidden="true">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
