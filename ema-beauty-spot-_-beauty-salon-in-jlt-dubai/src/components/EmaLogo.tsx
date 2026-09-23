import React from 'react';

interface EmaLogoProps {
  className?: string;
  variant?: 'badge' | 'horizontal' | 'stacked' | 'icon';
  color?: 'white' | 'purple' | 'currentColor';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Ema Beauty Spot Official Logo Component
 * Matches the uploaded royal purple & white serif brand identity with signature sparkle stars.
 */
export const EmaLogo: React.FC<EmaLogoProps> = ({
  className = '',
  variant = 'horizontal',
  color = 'currentColor',
  size = 'md',
}) => {
  const getFill = () => {
    if (color === 'white') return '#FAF6FC';
    if (color === 'purple') return '#4A2673';
    return 'currentColor';
  };

  const fill = getFill();

  // If badge variant: renders the royal purple square just like the uploaded logo
  if (variant === 'badge') {
    const sizeClasses = {
      sm: 'w-10 h-10',
      md: 'w-16 h-16',
      lg: 'w-24 h-24',
      xl: 'w-36 h-36 md:w-44 md:h-44',
    }[size];

    return (
      <div
        className={`relative inline-flex items-center justify-center bg-[#4A2673] text-[#FAF6FC] shadow-lg overflow-hidden select-none ${sizeClasses} ${className}`}
        aria-label="Ema Beauty Spot Logo"
      >
        {/* Subtle royal purple velvet texture gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5A2C8F]/40 via-transparent to-[#331454]/60 pointer-events-none" />

        <svg
          viewBox="0 0 1000 1000"
          className="w-full h-full p-4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bottom-left Star */}
          <path
            d="M125 550 C125 530 140 515 160 515 C140 515 125 500 125 480 C125 500 110 515 90 515 C110 515 125 530 125 550 Z"
            fill="#FAF6FC"
          />

          {/* Top-right Star */}
          <path
            d="M855 410 C855 385 872 368 897 368 C872 368 855 351 855 326 C855 351 838 368 813 368 C838 368 855 385 855 410 Z"
            fill="#FAF6FC"
          />

          {/* EMA Typography (Editorial High-Fashion Serif) */}
          <g fill="#FAF6FC">
            <text
              x="500"
              y="620"
              textAnchor="middle"
              fontFamily="'Libre Baskerville', Georgia, 'Playfair Display', serif"
              fontSize="310"
              fontWeight="400"
              letterSpacing="-0.04em"
            >
              EMA
            </text>
          </g>

          {/* BEAUTY SPOT Underline Text */}
          <text
            x="500"
            y="695"
            textAnchor="middle"
            fontFamily="'Raleway', -apple-system, sans-serif"
            fontSize="52"
            fontWeight="700"
            letterSpacing="0.34em"
            fill="#FAF6FC"
          >
            BEAUTY SPOT
          </text>
        </svg>
      </div>
    );
  }

  // Horizontal variant (Ideal for Navbar & headers)
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        {/* Compact Logo Mark with stars */}
        <svg
          viewBox="0 0 280 120"
          className="h-full w-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Ema Beauty Spot"
        >
          {/* Bottom-left sparkle star */}
          <path
            d="M20 70 C20 62 26 56 34 56 C26 56 20 50 20 42 C20 50 14 56 6 56 C14 56 20 62 20 70 Z"
            fill={fill}
          />

          {/* Top-right sparkle star */}
          <path
            d="M260 40 C260 30 268 22 278 22 C268 22 260 14 260 4 C260 14 252 22 242 22 C252 22 260 30 260 40 Z"
            fill={fill}
          />

          {/* "EMA" Serif */}
          <text
            x="140"
            y="76"
            textAnchor="middle"
            fontFamily="'Libre Baskerville', Georgia, serif"
            fontSize="78"
            fontWeight="400"
            letterSpacing="-0.03em"
            fill={fill}
          >
            EMA
          </text>

          {/* "BEAUTY SPOT" */}
          <text
            x="140"
            y="98"
            textAnchor="middle"
            fontFamily="'Raleway', sans-serif"
            fontSize="15"
            fontWeight="700"
            letterSpacing="0.32em"
            fill={fill}
          >
            BEAUTY SPOT
          </text>
        </svg>
      </div>
    );
  }

  // Stacked variant (Ideal for Hero, About, and Footer)
  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 400 200"
        className="w-full max-w-[280px] sm:max-w-[340px] h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left sparkle star */}
        <path
          d="M45 110 C45 98 54 89 66 89 C54 89 45 80 45 68 C45 80 36 89 24 89 C36 89 45 98 45 110 Z"
          fill={fill}
        />

        {/* Right sparkle star */}
        <path
          d="M355 65 C355 52 365 42 378 42 C365 42 355 32 355 19 C355 32 345 42 332 42 C345 42 355 52 355 65 Z"
          fill={fill}
        />

        {/* EMA */}
        <text
          x="200"
          y="120"
          textAnchor="middle"
          fontFamily="'Libre Baskerville', Georgia, serif"
          fontSize="120"
          fontWeight="400"
          letterSpacing="-0.04em"
          fill={fill}
        >
          EMA
        </text>

        {/* BEAUTY SPOT */}
        <text
          x="200"
          y="155"
          textAnchor="middle"
          fontFamily="'Raleway', sans-serif"
          fontSize="22"
          fontWeight="700"
          letterSpacing="0.36em"
          fill={fill}
        >
          BEAUTY SPOT
        </text>
      </svg>
    </div>
  );
};
