export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  details: string;
  duration: string;
  pricing: string; // strictly "Enquire for Pricing" unless verified
  features: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'hair' | 'bridal' | 'skin' | 'interior';
  image: string;
  caption: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  serviceReceived: string;
  quote: string;
  date: string;
}

export const SALON_INFO = {
  name: 'QUIRK STUDIO',
  subtitle: 'A Luxury Salon',
  phone: '+91 99711 38883',
  whatsappNumber: '919971138883',
  email: 'info@quirkluxurysalon.com',
  address: {
    line1: '2nd Floor, Plot 3, Sector 12A Road',
    line2: 'Opposite Indra Prastha Gas Limited, Block A, Sector 12',
    city: 'Dwarka, New Delhi',
    pincode: '110078',
    fullAddress: '2nd Floor, Plot 3, Sector 12A Road, Opposite Indra Prastha Gas Limited, Block A, Sector 12, Dwarka, New Delhi, Delhi 110078'
  },
  timings: 'Monday to Sunday: 10:30 AM – 8:30 PM',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Plot+3+Sector+12A+Road+Opposite+Indra+Prastha+Gas+Limited+Sector+12+Dwarka+New+Delhi+110078'
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'hair-styling',
    title: 'Hair Styling & Haircuts',
    description: 'Precision architectural hair design tailored to bone structure, personal aesthetic, and hair texture.',
    services: [
      {
        id: 'master-cut-blowout',
        name: 'Master Designer Haircut & Signature Blowout',
        category: 'Hair Styling & Haircuts',
        shortDesc: 'Consultation, scalp cleansing, master precision cutting, and luxury thermal blowout.',
        details: 'Crafted by our senior creative directors with in-depth face shape and texture analysis to deliver effortless movement and shape.',
        duration: '45 - 60 Mins',
        pricing: 'Enquire for Pricing',
        features: ['Bespoke texture profiling', 'Luxury scalp massage & wash', 'Heat-protective finish']
      },
      {
        id: 'creative-restyling',
        name: 'Transformative Restyling & Volume Finish',
        category: 'Hair Styling & Haircuts',
        shortDesc: 'A complete silhouette makeover for clients desiring a refreshed, high-impact aesthetic.',
        details: 'Includes dedicated consultation, custom dimensional cutting, and professional styling guidance for home maintenance.',
        duration: '60 - 75 Mins',
        pricing: 'Enquire for Pricing',
        features: ['Comprehensive consultation', 'Custom texturizing', 'Signature runway finish']
      },
      {
        id: 'glam-event-styling',
        name: 'Red Carpet Waves & Haute Updos',
        category: 'Hair Styling & Haircuts',
        shortDesc: 'Sophisticated event styling ranging from Old Hollywood brushed-out waves to architectural chignons.',
        details: 'Designed for celebrations, galas, and cocktail soirees requiring all-day hold and radiant sheen.',
        duration: '45 - 60 Mins',
        pricing: 'Enquire for Pricing',
        features: ['Thermal protection styling', 'Humidity-resistant seal', 'Custom hair accessories placement']
      }
    ]
  },
  {
    id: 'balayage',
    title: 'Couture Balayage',
    description: 'Bespoke hand-painted dimensional highlights for a seamless, lived-in luxury illumination.',
    services: [
      {
        id: 'signature-sun-kissed-balayage',
        name: 'Signature Sun-Kissed French Balayage',
        category: 'Couture Balayage',
        shortDesc: 'Hand-painted gradients that mimic natural sunlight with seamless root shadow transitions.',
        details: 'Our colorists use premium European bond-protecting lightening formulations to ensure zero compromise to hair integrity.',
        duration: '180 - 240 Mins',
        pricing: 'Enquire for Pricing',
        features: ['Freehand hand-painting', 'Custom gloss toner', 'Bond-building restorative infusion']
      },
      {
        id: 'caramel-brunette-melt',
        name: 'Multi-Dimensional Caramel & Toffee Melt',
        category: 'Couture Balayage',
        shortDesc: 'Rich decadent warmth layered across dark bases for depth, reflection, and movement.',
        details: 'Tailored for Indian hair undertones to prevent unwanted brassiness while delivering radiant caramel dimension.',
        duration: '180 - 210 Mins',
        pricing: 'Enquire for Pricing',
        features: ['Anti-brass neutralising gloss', 'Face-framing babylights', 'Mirror-shine seal']
      }
    ]
  },
  {
    id: 'hair-colour',
    title: 'Hair Colour & Highlights',
    description: 'High-definition global shades, subtle babylights, and luminous gloss glazes.',
    services: [
      {
        id: 'global-rich-colour',
        name: 'Global Couture Rich Colour & Gloss',
        category: 'Hair Colour & Highlights',
        shortDesc: 'All-over rich monochromatic depth with multi-dimensional luminosity and grey coverage.',
        details: 'Ammonia-free luxury formulas infused with nourishing botanical oils for long-lasting vibrancy and silk touch.',
        duration: '90 - 120 Mins',
        pricing: 'Enquire for Pricing',
        features: ['Ammonia-free luxury formulations', '100% refined grey coverage', 'Colour-lock gloss wash']
      },
      {
        id: 'face-framing-babylights',
        name: 'Micro-Fine Babylights & Root Smudge',
        category: 'Hair Colour & Highlights',
        shortDesc: 'Delicate weave highlights around the hairline to brighten complexion and add effortless depth.',
        details: 'Subtle, low-maintenance placement that grows out flawlessly with no harsh demarcation lines.',
        duration: '120 - 150 Mins',
        pricing: 'Enquire for Pricing',
        features: ['Delicate micro-weaving', 'Custom root blend', 'Conditioning gloss glaze']
      }
    ]
  },
  {
    id: 'hair-treatments',
    title: 'Hair Treatments & Spa Rituals',
    description: 'Clinical grade bond reconstruction and deep restorative therapies for stressed hair.',
    services: [
      {
        id: 'bond-repair-therapy',
        name: 'Advanced Molecular Bond Repair Ritual',
        category: 'Hair Treatments & Spa Rituals',
        shortDesc: 'Penetrates deep into the hair cortex to rebuild broken disulfide bonds caused by heat and color.',
        details: 'Restores innate elasticity, stops breakage, and leaves hair silky with natural resilience.',
        duration: '45 - 60 Mins',
        pricing: 'Enquire for Pricing',
        features: ['Patented bond repair technology', 'Hydro-thermal infusion', 'Immediate tensile strength']
      },
      {
        id: 'keratin-smooth-infusion',
        name: 'Couture Keratin Smoothing Infusion',
        category: 'Hair Treatments & Spa Rituals',
        shortDesc: 'Eliminates frizzy rebel flyaways while preserving natural body and effortless manageability.',
        details: 'Formaldehyde-free smoothing ritual that seals the cuticle against Delhi humidity for months.',
        duration: '150 - 180 Mins',
        pricing: 'Enquire for Pricing',
        features: ['Anti-humidity shield', 'Deep thermal seal', 'Mirror shine & softness']
      },
      {
        id: 'scalp-detox-spa',
        name: 'Botanical Scalp Detox & Follicle Rejuvenation',
        category: 'Hair Treatments & Spa Rituals',
        shortDesc: 'Exfoliating clay mask and micro-circulation scalp massage to stimulate healthy growth.',
        details: 'Purifies build-up, regulates sebum, and soothes stressed scalps in a peaceful reclined lounge.',
        duration: '45 Mins',
        pricing: 'Enquire for Pricing',
        features: ['Aromatherapeutic head massage', 'Deep clarifying wash', 'Nourishing botanical tonic']
      }
    ]
  },
  {
    id: 'bridal-makeup',
    title: 'Bridal Makeup',
    description: 'Timeless couture bridal aesthetics engineered for HD cameras, emotional moments, and royal elegance.',
    services: [
      {
        id: 'luxury-wedding-bridal-haute',
        name: 'Signature Royal Bridal Haute Makeup & Styling',
        category: 'Bridal Makeup',
        shortDesc: 'Flawless luminous skin base, bespoke eye sculpting, couture dupatta draping, and jewelry setting.',
        details: 'A dedicated master artist experience with pre-wedding consultation, skin prep, luxury false lashes, and touch-up kit.',
        duration: '180 - 240 Mins',
        pricing: 'Enquire for Pricing',
        features: ['Waterproof & tear-proof HD base', 'Complimentary skin prep ritual', 'Complete dupatta & jewelry styling']
      },
      {
        id: 'engagement-cocktail-glam',
        name: 'Engagement, Sangeet & Reception Glam',
        category: 'Bridal Makeup',
        shortDesc: 'Contemporary celebration makeup tailored to evening lighting and high-fashion outfits.',
        details: 'Luminous glass skin with sculpted features and long-wear pigments suited to dance celebrations.',
        duration: '120 - 150 Mins',
        pricing: 'Enquire for Pricing',
        features: ['Luminous champagne glow', 'Custom lash application', 'Hair styling included']
      }
    ]
  },
  {
    id: 'professional-makeup',
    title: 'Professional Makeup',
    description: 'Clean editorial beauty, fashion campaign looks, and sophisticated party glam.',
    services: [
      {
        id: 'editorial-cocktail-makeup',
        name: 'Editorial Soft Glam & Occasion Makeup',
        category: 'Professional Makeup',
        shortDesc: 'Effortlessly polished skin, sculpted eyes, and modern lip tones for high-profile events.',
        details: 'Uses premium international cosmetic lines (Charlotte Tilbury, MAC, Dior, NARS) tailored to skin type.',
        duration: '60 - 75 Mins',
        pricing: 'Enquire for Pricing',
        features: ['International cosmetic brands', 'Dewy or matte skin customisation', 'Smudge-proof eye artistry']
      }
    ]
  },
  {
    id: 'skin-treatments',
    title: 'Skin & Facial Treatments',
    description: 'Custom botanical and corrective aesthetic skin rituals to achieve radiant, rested clarity.',
    services: [
      {
        id: 'radiance-elixir-facial',
        name: 'Gold Radiance & Cellular Renewal Facial',
        category: 'Skin & Facial Treatments',
        shortDesc: 'Multi-step brightening facial with gentle enzymatic peel and 24k gold infused serum massage.',
        details: 'Promotes micro-circulation and lymphatic drainage, leaving the face visibly plumped and glowing.',
        duration: '60 - 75 Mins',
        pricing: 'Enquire for Pricing',
        features: ['Gentle enzymatic exfoliation', 'Acupressure face massage', 'Gold recovery peel-off mask']
      },
      {
        id: 'deep-pore-clarifying',
        name: 'Purifying Botanical Infusion & Pore Detox',
        category: 'Skin & Facial Treatments',
        shortDesc: 'Targeted deep pore extraction, anti-bacterial high-frequency treatment, and calming hydration.',
        details: 'Formulated for urban skin exposed to city pollution, soothing redness and refining texture.',
        duration: '60 Mins',
        pricing: 'Enquire for Pricing',
        features: ['Pore extraction & sterilization', 'Cooling botanical mask', 'Barrier repair hydration']
      }
    ]
  },
  {
    id: 'manicure-pedicure',
    title: 'Manicure & Pedicure',
    description: 'Restorative hand and foot wellness therapies with clinical sterilization and premium polishes.',
    services: [
      {
        id: 'spa-gel-manicure',
        name: 'Luxury Restorative Spa Manicure',
        category: 'Manicure & Pedicure',
        shortDesc: 'Cuticle refining, warm essential oil soak, exfoliating scrub, and high-shine gel polish.',
        details: 'Performed in serene seating with single-use sterile tool kits and deeply hydrating hand massage.',
        duration: '45 - 60 Mins',
        pricing: 'Enquire for Pricing',
        features: ['Single-use hygienic kits', 'Heated paraffin or scrub', 'Chip-free long-wear finish']
      },
      {
        id: 'restorative-pedicure',
        name: 'Sole Revitalizing Spa Pedicure',
        category: 'Manicure & Pedicure',
        shortDesc: 'Callus softening, marine salt soak, acupressure foot massage, and buff or colour application.',
        details: 'Melts foot fatigue and restores dry heels to baby-soft smoothness.',
        duration: '50 - 60 Mins',
        pricing: 'Enquire for Pricing',
        features: ['Herbal soak & exfoliating rasp', 'Calf and foot acupressure', 'Nail shaping & buffing']
      }
    ]
  },
  {
    id: 'grooming-beauty',
    title: 'Grooming & Beauty Services',
    description: 'Meticulous eyebrow architecture, lash enhancements, and hygienic body satin waxing.',
    services: [
      {
        id: 'precision-brow-architecture',
        name: 'Bespoke Brow Architecture & Tint',
        category: 'Grooming & Beauty Services',
        shortDesc: 'Custom face mapping, gentle threading or waxing, and organic botanical tinting.',
        details: 'Frames eyes naturally without harsh unnatural lines, emphasizing facial symmetry.',
        duration: '30 Mins',
        pricing: 'Enquire for Pricing',
        features: ['Facial geometry mapping', 'Precision shaping', 'Custom-blended tint']
      },
      {
        id: 'satin-waxing-rituals',
        name: 'Satin Peel-Off Luxury Waxing',
        category: 'Grooming & Beauty Services',
        shortDesc: 'Gentle low-temperature stripless wax enriched with soothing aloe vera and chamomile.',
        details: 'Virtually pain-free hair removal designed for sensitive skin zones with post-soothing lotion.',
        duration: '30 - 60 Mins',
        pricing: 'Enquire for Pricing',
        features: ['Low-heat stripless formula', 'Minimal skin redness', 'Post-wax antiseptic soothing']
      }
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Caramel & Honey Balayage Waves',
    category: 'hair',
    image: '/src/assets/images/hair_balayage_luxury_1794085229356.jpg',
    caption: 'Multi-dimensional freehand French balayage with high-gloss mirror finish.'
  },
  {
    id: 'g-2',
    title: 'Royal Indian Bridal Glamour',
    category: 'bridal',
    image: '/src/assets/images/bridal_makeup_look_1794085229688.jpg',
    caption: 'Dewy couture skin base with delicate champagne shimmer and royal jewelry styling.'
  },
  {
    id: 'g-3',
    title: 'Architectural Styling Lounge',
    category: 'interior',
    image: '/src/assets/images/hero_quirk_salon_1794085228788.jpg',
    caption: 'Minimalist Italian styling stations with bespoke backlit bronze mirrors.'
  },
  {
    id: 'g-4',
    title: 'Gold Radiance Skin Ritual',
    category: 'skin',
    image: '/src/assets/images/skin_facial_spa_1794085231378.jpg',
    caption: 'Nourishing botanical serum infusion and cellular renewal therapy.'
  },
  {
    id: 'g-5',
    title: 'Serene Hair Wash & Scalp Spa',
    category: 'interior',
    image: '/src/assets/images/salon_interior_wash_1794085232200.jpg',
    caption: 'Ergonomic reclining black leather washbasins with fluted wood acoustic walls.'
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Master Artistry & Certified Specialists',
    description: 'Our colorists, stylists, and makeup artists undergo rigorous international training to master contemporary precision techniques.'
  },
  {
    title: 'Unhurried Bespoke Consultations',
    description: 'We never rush your experience. Every appointment begins with a thorough diagnostic assessment of your hair, skin, and personal lifestyle.'
  },
  {
    title: 'Premium Formulations',
    description: 'Strict adherence to European luxury haircare and dermatological grade skincare with ammonia-free colors and bond-building treatments.'
  },
  {
    title: 'Private Sanctuary in Dwarka',
    description: 'An oasis of calm located in Sector 12, Dwarka, away from chaotic salon environments with acoustic comfort and warm ambient lighting.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    clientName: 'Aarohi Sen',
    location: 'Dwarka, Sector 12',
    serviceReceived: 'French Balayage & Olaplex Treatment',
    quote: 'The level of professionalism at Quirk Studio is unmatched in Dwarka. My balayage came out so natural, soft, and luminous with zero brassiness.',
    date: 'Verified Client'
  },
  {
    id: 't-2',
    clientName: 'Meher Kulkarni',
    location: 'Dwarka, Sector 10',
    serviceReceived: 'Bridal Engagement Makeup',
    quote: 'They understood exactly what I wanted: dewy, clean, high-fashion skin without heavy caking. My makeup stayed intact for 10 hours straight!',
    date: 'Verified Client'
  },
  {
    id: 't-3',
    clientName: 'Priyanka Verma',
    location: 'Dwarka, Sector 12A',
    serviceReceived: 'Botanical Facial & Spa Pedicure',
    quote: 'The ambiance is truly luxurious and calming. The scalp wash lounge and aesthetician treatments felt like a five-star private sanctuary.',
    date: 'Verified Client'
  }
];
