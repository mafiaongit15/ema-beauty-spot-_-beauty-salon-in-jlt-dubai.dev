import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  isDark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  isDark = false,
  className = '',
}) => {
  const isCentered = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${isCentered ? 'text-center mx-auto' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`text-xs md:text-sm tracking-[0.28em] uppercase font-semibold mb-3 md:mb-4 ${
            isDark ? 'text-[#D6BEF0]' : 'text-[#6C3B9B]'
          }`}
        >
          {eyebrow}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight leading-[1.18] text-balance font-normal ${
          isDark ? 'text-[#FAF6FC]' : 'text-[#220D38]'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-4 md:mt-5 text-base md:text-lg font-light leading-relaxed max-w-2xl ${
            isCentered ? 'mx-auto' : ''
          } ${isDark ? 'text-[#D5C7E6]' : 'text-[#564366]'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
