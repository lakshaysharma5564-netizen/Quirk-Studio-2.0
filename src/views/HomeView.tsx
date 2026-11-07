import React from 'react';
import { SALON_INFO, SERVICE_CATEGORIES, WHY_CHOOSE_ITEMS, TESTIMONIALS, GALLERY_ITEMS } from '../data/salonData';
import { MapPin, Phone, MessageSquare, ArrowRight, Sparkles, Check, Star } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
  onOpenBooking: (serviceName?: string) => void;
  onOpenGalleryItem: (index: number) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenGalleryItem
}) => {
  // Grab 4 top marquee services across categories
  const featuredServices = [
    SERVICE_CATEGORIES[0].services[0], // Master Cut
    SERVICE_CATEGORIES[1].services[0], // French Balayage
    SERVICE_CATEGORIES[4].services[0], // Royal Bridal
    SERVICE_CATEGORIES[6].services[0], // Gold Radiance Facial
  ];

  return (
    <div className="space-y-24 md:space-y-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#202020]">
        {/* Background Image with Measured Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_quirk_salon.jpg"
            alt="Quirk Studio Luxury Salon Interior in Sector 12 Dwarka"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 animate-subtleZoom"
          />
          {/* Measured Contrast Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/75 to-[#0B0B0B]/40" />
          <div className="absolute inset-0 bg-radial-vignette opacity-70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center space-y-6">
          {/* Location & Brand Kicker (Unboxed Metadata) */}
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF70] font-medium">
            <span>Sector 12, Dwarka</span>
            <span aria-hidden="true" className="text-[#888]">·</span>
            <span>New Delhi</span>
            <span aria-hidden="true" className="text-[#888]">·</span>
            <span>A Luxury Salon</span>
          </div>

          {/* Headline with text-wrap: balance */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#F7F3EC] leading-[1.08] tracking-tight max-w-4xl mx-auto" style={{ textWrap: 'balance' }}>
            The Art of Hair Couture & Bespoke Radiance
          </h1>

          {/* Persuasive Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-[#D0CCC5] max-w-2xl mx-auto leading-relaxed font-light">
            Dwarka’s premier destination for dimensional French balayage, precision styling, and high-fashion bridal artistry in a private sanctuary.
          </p>

          {/* Call to Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#D4AF70] text-[#0B0B0B] text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#E8C98F] transition-all duration-200 shadow-lg active:scale-95"
            >
              Book Your Appointment
            </button>
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20Quirk%20Studio%2C%20I%20would%20like%20to%20enquire%20about%20your%20services%20and%20availability.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#444444] bg-[#141414]/80 backdrop-blur-sm text-[#F7F3EC] hover:border-[#D4AF70] hover:text-[#D4AF70] text-xs uppercase tracking-[0.15em] transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>

          {/* Key Trust Signals Bar */}
          <div className="pt-10 border-t border-[#333333]/50 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="space-y-1">
              <span className="block text-base font-serif text-[#D4AF70]">100%</span>
              <span className="text-[11px] uppercase tracking-wider text-[#9E9E9E]">Bespoke Analysis</span>
            </div>
            <div className="space-y-1">
              <span className="block text-base font-serif text-[#D4AF70]">Couture</span>
              <span className="text-[11px] uppercase tracking-wider text-[#9E9E9E]">French Balayage</span>
            </div>
            <div className="space-y-1">
              <span className="block text-base font-serif text-[#D4AF70]">European</span>
              <span className="text-[11px] uppercase tracking-wider text-[#9E9E9E]">Formulations</span>
            </div>
            <div className="space-y-1">
              <span className="block text-base font-serif text-[#D4AF70]">Sector 12</span>
              <span className="text-[11px] uppercase tracking-wider text-[#9E9E9E]">Dwarka Flagship</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED SERVICES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF70] font-medium">
              Curated Offerings
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#F7F3EC]">
              Signature Hair & Beauty Craft
            </h2>
            <p className="text-sm text-[#A0A0A0] max-w-lg">
              Each ritual at Quirk Studio is tailored to your hair anatomy, lifestyle, and facial contours.
            </p>
          </div>
          <button
            onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF70] hover:text-[#E8C98F] transition-colors pb-1 border-b border-[#D4AF70]/40 self-start md:self-auto"
          >
            <span>Explore All 9 Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2x2 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBookService={(name) => onOpenBooking(name)}
            />
          ))}
        </div>
      </section>

      {/* 3. SIGNATURE SALON EXPERIENCE (THE 3-STEP JOURNEY) */}
      <section className="bg-[#111111] border-y border-[#202020] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF70]">
              The Quirk Standard
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#F7F3EC]">
              The Signature Salon Experience
            </h2>
            <p className="text-sm text-[#A0A0A0]">
              We reject rushed assembly-line salon culture. Your appointment is an immersive personal consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#161616] border border-[#242424] p-8 space-y-4">
              <span className="text-2xl font-serif text-[#D4AF70]">01.</span>
              <h3 className="text-xl font-serif text-[#F7F3EC]">
                Comprehensive Diagnostic Assessment
              </h3>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                Before touching a strand or applying color, our master stylists assess scalp condition, hair porosity, face shape, and home styling habits to agree on a personalized treatment plan.
              </p>
            </div>

            <div className="bg-[#161616] border border-[#242424] p-8 space-y-4">
              <span className="text-2xl font-serif text-[#D4AF70]">02.</span>
              <h3 className="text-xl font-serif text-[#F7F3EC]">
                Couture Application & Restorative Wash
              </h3>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                Experience freehand French balayage or nourishing botanical therapy in our acoustic wash lounge with ergonomic leather recliners and therapeutic scalp massage.
              </p>
            </div>

            <div className="bg-[#161616] border border-[#242424] p-8 space-y-4">
              <span className="text-2xl font-serif text-[#D4AF70]">03.</span>
              <h3 className="text-xl font-serif text-[#F7F3EC]">
                Runway Blowout & Maintenance Prescription
              </h3>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                Completed with our signature bouncy blowout and thermal lock, accompanied by genuine post-service home maintenance guidance to keep your look radiant for months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE QUIRK STUDIO */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF70]">
              Why Discerning Clients Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#F7F3EC] leading-tight">
              A Private Luxury Sanctuary in Sector 12, Dwarka
            </h2>
            <p className="text-sm text-[#A0A0A0] leading-relaxed">
              Quirk Studio was founded on the conviction that salon visits should be tranquil, refined, and artistically uncompromising. We have created a space where international precision meets authentic warmth.
            </p>

            <div className="space-y-4 pt-2">
              {WHY_CHOOSE_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1C1C1C] border border-[#D4AF70]/50 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#D4AF70]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F7F3EC]">{item.title}</h3>
                    <p className="text-xs text-[#8A8A8A] mt-0.5 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3 bg-[#D4AF70] text-[#0B0B0B] text-xs font-semibold uppercase tracking-wider hover:bg-[#E8C98F] transition-colors"
              >
                Schedule Consultation
              </button>
              <a
                href={`tel:${SALON_INFO.whatsappNumber}`}
                className="text-xs uppercase tracking-wider text-[#F7F3EC] hover:text-[#D4AF70] transition-colors py-3"
              >
                Call: {SALON_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-6 relative">
            <div className="relative border border-[#282828] p-3 bg-[#121212]">
              <img
                src="/images/hair_balayage_luxury.jpg"
                alt="Hair Balayage transformation at Quirk Studio Dwarka"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-[#141414] border-t border-[#242424] flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D4AF70]">Real Transformation</span>
                  <p className="text-sm font-serif text-[#F7F3EC]">Multi-Dimensional Caramel Balayage</p>
                </div>
                <button
                  onClick={() => { onNavigate('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-xs text-[#B8B8B8] hover:text-[#D4AF70] flex items-center gap-1"
                >
                  <span>View Look</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERIFIED CLIENT TESTIMONIALS */}
      <section className="bg-[#111111] border-y border-[#202020] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF70]">
              Client Sentiment
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#F7F3EC]">
              Words from Discerning Guests
            </h2>
            <p className="text-xs text-[#8A8A8A]">
              Real testimonials from clients who trust Quirk Studio for their marquee moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-[#161616] border border-[#262626] p-7 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#D4AF70]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF70]" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-[#D8D4CC] italic leading-relaxed">
                    "{t.quote}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-[#242424] flex justify-between items-end text-xs">
                  <div>
                    <h4 className="font-semibold text-[#F7F3EC]">{t.clientName}</h4>
                    <p className="text-[#888] text-[11px]">{t.location}</p>
                  </div>
                  <span className="text-[11px] text-[#D4AF70] font-medium">{t.serviceReceived}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CURATED GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF70]">
              Visual Showcase
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#F7F3EC]">
              Editorial & Salon Portfolio
            </h2>
            <p className="text-sm text-[#A0A0A0]">
              A glimpse into our bridal aesthetics, balayage artistry, and serene salon spaces.
            </p>
          </div>
          <button
            onClick={() => { onNavigate('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF70] hover:text-[#E8C98F] transition-colors pb-1 border-b border-[#D4AF70]/40 self-start md:self-auto"
          >
            <span>View Complete Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GALLERY_ITEMS.slice(0, 3).map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenGalleryItem(index)}
              className="group relative cursor-pointer overflow-hidden border border-[#242424] bg-[#141414]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-[#141414] border-t border-[#222]">
                <h3 className="text-base font-serif text-[#F7F3EC] group-hover:text-[#D4AF70] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#888] mt-1 line-clamp-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. LOCATION & STUDIO VISIT SECTION */}
      <section className="bg-[#121212] border-t border-[#202020] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF70]">
                Dwarka Flagship
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#F7F3EC]">
                Visit Our Studio
              </h2>
              <p className="text-sm text-[#A0A0A0] leading-relaxed">
                Conveniently situated in Sector 12, Dwarka, directly on Sector 12A Road opposite Indra Prastha Gas Limited. Valet parking and dedicated guest assistance available.
              </p>

              <div className="space-y-4 pt-2 text-sm text-[#B8B8B8]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF70] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#F7F3EC] text-xs uppercase tracking-wider">Address</h3>
                    <p className="text-xs text-[#A0A0A0] mt-1 leading-relaxed">
                      {SALON_INFO.address.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#D4AF70] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#F7F3EC] text-xs uppercase tracking-wider">Direct Concierge</h3>
                    <a href={`tel:${SALON_INFO.whatsappNumber}`} className="text-xs text-[#F7F3EC] hover:text-[#D4AF70] mt-1 block">
                      {SALON_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#D4AF70] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#F7F3EC] text-xs uppercase tracking-wider">Studio Timings</h3>
                    <p className="text-xs text-[#A0A0A0] mt-1">
                      {SALON_INFO.timings}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#D4AF70] text-[#0B0B0B] text-xs font-semibold uppercase tracking-wider hover:bg-[#E8C98F] text-center transition-colors"
                >
                  Open in Google Maps
                </a>
                <button
                  onClick={() => onOpenBooking()}
                  className="px-6 py-3 border border-[#333333] text-xs uppercase tracking-wider text-[#F7F3EC] hover:border-[#D4AF70] hover:text-[#D4AF70] text-center transition-colors"
                >
                  Reserve Appointment
                </button>
              </div>
            </div>

            {/* Visual Location Frame */}
            <div className="lg:col-span-7">
              <div className="relative border border-[#282828] bg-[#161616] p-4 space-y-4">
                <div className="aspect-[16/9] w-full overflow-hidden border border-[#242424]">
                  <img
                    src="/images/salon_interior_wash.jpg"
                    alt="Quirk Studio Hair Wash and Scalp Lounge Sector 12 Dwarka"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#8A8A8A] pt-1">
                  <span>Opposite Indra Prastha Gas Limited, Sector 12, Dwarka</span>
                  <a
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF70] hover:underline"
                  >
                    View Interactive Map →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
