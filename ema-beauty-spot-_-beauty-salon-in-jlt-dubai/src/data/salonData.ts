export interface BusinessInfo {
  name: string;
  category: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  instagram: string;
  instagramHandle: string;
  tiktok: string;
  tiktokHandle: string;
  address: {
    building: string;
    cluster: string;
    area: string;
    city: string;
    country: string;
    full: string;
    googleMapsUrl: string;
  };
  openingHours: {
    mondayThursday: string;
    friday: string;
    saturdaySunday: string;
  };
}

export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'nails' | 'lashes' | 'brows' | 'facials' | 'head-spa' | 'massage' | 'waxing' | 'makeup';
  tagline: string;
  description: string;
  highlights: string[];
  startingPrice?: string;
  image: string;
}

export interface PromotionalOffer {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  priceNote: string;
  description: string;
  included: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'nails' | 'lashes' | 'brows' | 'facials' | 'head-spa' | 'makeup' | 'salon';
  categoryLabel: string;
  src: string;
  alt: string;
  instagramUrl: string;
  span?: 'col-span-1 row-span-1' | 'col-span-1 row-span-2' | 'col-span-2 row-span-1' | 'col-span-2 row-span-2';
  caption?: string;
}

export const business: BusinessInfo = {
  name: "Ema Beauty Spot",
  category: "Ladies' Beauty Salon",
  tagline: "Your Beauty, Your Moment.",
  phone: "+971566340646",
  phoneDisplay: "+971 56 634 0646",
  whatsapp: "+971566340646",
  whatsappDisplay: "+971 56 634 0646",
  instagram: "https://www.instagram.com/emabeautyspot/",
  instagramHandle: "@emabeautyspot",
  tiktok: "https://www.tiktok.com/@emabeautyspot",
  tiktokHandle: "@emabeautyspot",
  address: {
    building: "Fortune Tower",
    cluster: "Cluster C",
    area: "Jumeirah Lakes Towers (JLT)",
    city: "Dubai",
    country: "UAE",
    full: "Fortune Tower, Cluster C, Jumeirah Lakes Towers (JLT), Dubai, UAE",
    googleMapsUrl: "https://maps.google.com/?q=Fortune+Tower+Cluster+C+JLT+Dubai"
  },
  openingHours: {
    mondayThursday: "10:00 AM – 10:00 PM",
    friday: "10:00 AM – 12:00 PM, 1:30 PM – 10:00 PM",
    saturdaySunday: "10:00 AM – 10:00 PM"
  }
};

export const defaultWhatsAppMessage = "Hi Ema Beauty Spot, I'd like to book an appointment. Could you please share your available times?";

export const createBookingWhatsAppUrl = (details?: {
  name?: string;
  service?: string;
  date?: string;
  time?: string;
  message?: string;
}) => {
  if (!details || (!details.name && !details.service)) {
    return `https://wa.me/971566340646?text=${encodeURIComponent(defaultWhatsAppMessage)}`;
  }

  const lines = [
    "Hi Ema Beauty Spot,",
    "",
    "I'd like to book an appointment.",
    "",
    details.name ? `Name: ${details.name}` : "",
    details.service ? `Service: ${details.service}` : "",
    details.date ? `Preferred date: ${details.date}` : "",
    details.time ? `Preferred time: ${details.time}` : "",
    details.message ? `Notes: ${details.message}` : "",
    "",
    "Thank you!"
  ].filter(line => line !== null && line !== undefined);

  return `https://wa.me/971566340646?text=${encodeURIComponent(lines.join('\n'))}`;
};

export const services: ServiceItem[] = [
  {
    id: "hair",
    name: "Hair",
    category: "hair",
    tagline: "Cuts, colour & signature blowouts",
    description: "Cuts, styling, blow-drys, colouring, roots, treatments and more.",
    highlights: ["Custom Haircuts & Restyling", "Root Touch-up & Full Tint", "Gloss & Nourishing Treatments", "Signature Volume Blow-Drys"],
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "nails",
    name: "Nails",
    category: "nails",
    tagline: "Flawless Russian manicure & bespoke art",
    description: "Russian manicure, gel, extensions, pedicures and Gelish services.",
    highlights: ["Dry Hardware Russian Manicure", "Gelish & Hard Gel Overlays", "Nail Extensions & Sculpting", "Luxury Spa Pedicure"],
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "lashes",
    name: "Lashes",
    category: "lashes",
    tagline: "Lightweight sets & dramatic curl",
    description: "Classic lashes, volume, mega volume, lash lift and tint.",
    highlights: ["Natural Classic 1:1 Extensions", "Light Volume & Russian Volume", "Mega Volume Fullness", "Keratin Lash Lift & Deep Tint"],
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "brows",
    name: "Brows",
    category: "brows",
    tagline: "Framed to perfection",
    description: "Shaping, tinting, cleaning and brow lift services.",
    highlights: ["Precision Brow Shaping & Threading", "Custom Shade Tinting", "Brow Lamination / Lift", "Deep Clean & Sculpt"],
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "facials-headspa",
    name: "Facials & Head Spa",
    category: "facials",
    tagline: "Deep renewal & scalp circulation",
    description: "Relaxing beauty and self-care treatments designed around your needs.",
    highlights: ["Japanese Head Spa Scalp Ritual", "Hydrating & Glow Facials", "Deep Cleansing & Extractions", "Lymphatic Facial Massage"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "massage",
    name: "Massage",
    category: "massage",
    tagline: "Reset your body & unwind tension",
    description: "Treatments designed to help you relax and reset.",
    highlights: ["Relaxation Body Massage", "Back, Neck & Shoulder Relief", "Aromatherapy Oil Blends", "Head & Scalp De-stress"],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "waxing",
    name: "Waxing",
    category: "waxing",
    tagline: "Silk-smooth, gentle precision",
    description: "Professional waxing services for smooth, comfortable results.",
    highlights: ["Full Body Waxing Packages", "Gentle Sensitive Skin Wax", "Facial & Precision Waxing", "Speedy & Hygienic Care"],
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "makeup",
    name: "Makeup",
    category: "makeup",
    tagline: "Luminous occasion & soft glam",
    description: "Beauty makeup for occasions, events or whenever you want to feel polished.",
    highlights: ["Soft Glam & Evening Looks", "Daytime Fresh Polish", "Party & Event Beauty", "Custom Lash Application"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80"
  }
];

export const promotionalOffers: PromotionalOffer[] = [
  {
    id: "offer-starter",
    badge: "PROMOTIONAL OFFER",
    title: "The JLT Beauty Refresh",
    subtitle: "Selected beauty essentials to start your journey",
    priceNote: "Selected services from AED 99",
    description: "Experience our attentive service with special introductory rates across selected manicure, express blowout, and brow shaping services.",
    included: [
      "Select services starting from AED 99",
      "Consultation tailored to your hair or nails",
      "Complimentary beverage in our relaxing lounge"
    ],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "offer-duo",
    badge: "PROMOTIONAL OFFER",
    title: "Signature Russian Gel Duo",
    subtitle: "Clean hardware cuticles & high-gloss wear",
    priceNote: "Special Package Pricing via WhatsApp",
    description: "Our signature dry hardware technique ensures deep cuticle cleaning, flawless apex balance, and weeks of clean chip-resistant wear.",
    included: [
      "Full Russian cuticle prep (hardware dry technique)",
      "High-pigment Gelish or builder gel overlay",
      "Nourishing cuticle oil & gentle hand massage"
    ],
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "offer-lashes-brows",
    badge: "PROMOTIONAL OFFER",
    title: "Eyes That Captivate: Lash & Brow Ritual",
    subtitle: "Lash Lift or Extensions paired with Precision Brows",
    priceNote: "Inquire for package savings",
    description: "Wake up with effortless definition. Enjoy our weightless lash extensions or lash lift combined with personalized brow shaping & tinting.",
    included: [
      "Full consultation on eye shape & curl",
      "Premium lightweight faux-mink fibres or keratin lift",
      "Brow shape, clean & custom shade tinting"
    ],
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80"
  }
];

export const whyChooseUs = [
  {
    title: "Personal Attention",
    tagline: "A welcoming experience focused on you.",
    description: "Every treatment begins with listening to your preferences. We take our time to make sure you never feel rushed, providing genuine care in an intimate setting."
  },
  {
    title: "Beauty Under One Roof",
    tagline: "Hair, nails, lashes, brows, skincare and more.",
    description: "Save time by scheduling your hair, nails, and lash appointments back-to-back in one trusted salon without traveling across Dubai."
  },
  {
    title: "JLT Location",
    tagline: "Conveniently located in Fortune Tower, Cluster C.",
    description: "Easy access in Jumeirah Lakes Towers with nearby parking, metro access, and a peaceful private space away from crowded mall salons."
  },
  {
    title: "Easy Booking",
    tagline: "Contact the salon directly through WhatsApp or phone.",
    description: "No complicated booking apps or delayed confirmations. Message us directly on WhatsApp for immediate availability and customized scheduling."
  }
];

export const galleryImages: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Russian Gel Manicure & Micro French",
    category: "nails",
    categoryLabel: "Nails",
    src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=80",
    alt: "Ema Beauty Spot clean Russian manicure with nude gloss",
    instagramUrl: "https://www.instagram.com/emabeautyspot/",
    caption: "Flawless hardware Russian manicure with clean cuticle framing and high-shine gloss.",
    span: "col-span-1 row-span-2"
  },
  {
    id: "gal-2",
    title: "Luminous Brunette Gloss & Blowout",
    category: "hair",
    categoryLabel: "Hair",
    src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80",
    alt: "Ema Beauty Spot bouncy hair styling and gloss treatment",
    instagramUrl: "https://www.instagram.com/emabeautyspot/",
    caption: "Silky, touchable blowout with dimensional movement and deep hydration shine.",
    span: "col-span-1 row-span-1"
  },
  {
    id: "gal-3",
    title: "Soft Russian Volume Lash Extensions",
    category: "lashes",
    categoryLabel: "Lashes",
    src: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1200&q=80",
    alt: "Ema Beauty Spot Russian volume lash extensions close up",
    instagramUrl: "https://www.instagram.com/emabeautyspot/",
    caption: "Weightless handmade fans creating a fluttery, open-eye effect that lasts.",
    span: "col-span-1 row-span-1"
  },
  {
    id: "gal-4",
    title: "Almond Nude Nail Extensions & Minimal Art",
    category: "nails",
    categoryLabel: "Nails",
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
    alt: "Ema Beauty Spot nail extensions almond shape with soft rose gold undertone",
    instagramUrl: "https://www.instagram.com/emabeautyspot/",
    caption: "Sculpted gel extensions designed for natural elegance and day-to-day durability.",
    span: "col-span-1 row-span-1"
  },
  {
    id: "gal-5",
    title: "Laminated Brow Sculpt & Precision Tint",
    category: "brows",
    categoryLabel: "Brows",
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
    alt: "Ema Beauty Spot brow lamination and tinting",
    instagramUrl: "https://www.instagram.com/emabeautyspot/",
    caption: "Brushed-up, feathered brow lamination that stays in shape with clean lines.",
    span: "col-span-1 row-span-2"
  },
  {
    id: "gal-6",
    title: "Japanese Scalp Head Spa & Ritual",
    category: "head-spa",
    categoryLabel: "Head Spa",
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    alt: "Ema Beauty Spot head spa scalp therapy and facial mask",
    instagramUrl: "https://www.instagram.com/emabeautyspot/",
    caption: "Soothing water halo and botanical scalp massage to stimulate follicles and melt tension.",
    span: "col-span-1 row-span-1"
  },
  {
    id: "gal-7",
    title: "Soft Glam Makeup for Dubai Evenings",
    category: "makeup",
    categoryLabel: "Makeup",
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    alt: "Ema Beauty Spot evening beauty makeup with radiant glow",
    instagramUrl: "https://www.instagram.com/emabeautyspot/",
    caption: "Seamless skin prep, subtle shimmer accents, and long-lasting Dubai humidity resistance.",
    span: "col-span-1 row-span-1"
  },
  {
    id: "gal-8",
    title: "Serene Salon Space in JLT Fortune Tower",
    category: "salon",
    categoryLabel: "Salon Space",
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    alt: "Ema Beauty Spot interior beauty salon chairs and warm lighting",
    instagramUrl: "https://www.instagram.com/emabeautyspot/",
    caption: "Warm cream tones, calm music, and comfortable seating in Fortune Tower, Cluster C.",
    span: "col-span-1 row-span-1"
  }
];

export const instagramPosts = [
  {
    id: "post-1",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80",
    caption: "Clean Russian manicure lines that speak luxury ✨ Book your slot on WhatsApp.",
    url: "https://www.instagram.com/emabeautyspot/",
    tag: "#russianmanicuredubai"
  },
  {
    id: "post-2",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=600&q=80",
    caption: "Wake up with effortlessly curled lashes. Lash lift & tint session today at JLT 🤍",
    url: "https://www.instagram.com/emabeautyspot/",
    tag: "#lashliftdubai"
  },
  {
    id: "post-3",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=600&q=80",
    caption: "Healthy hair journey: deep moisture treatment & bouncy volume blowout.",
    url: "https://www.instagram.com/emabeautyspot/",
    tag: "#hairsalondubai"
  },
  {
    id: "post-4",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    caption: "Feathered brow perfection that enhances your natural bone structure.",
    url: "https://www.instagram.com/emabeautyspot/",
    tag: "#browlaminationjlt"
  }
];
