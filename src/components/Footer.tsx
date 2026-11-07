import React from 'react';
import { SALON_INFO, SERVICE_CATEGORIES } from '../data/salonData';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#0e0e0e] border-t border-[#262626] text-[#B8B8B8] pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#222222]">
          
          {/* Brand & Introduction (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-2xl font-serif tracking-[0.25em] text-[#F7F3EC] uppercase">
              {SALON_INFO.name}
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF70]">
              {SALON_INFO.subtitle} · Sector 12, Dwarka
            </p>
            <p className="text-sm text-[#A0A0A0] leading-relaxed pt-2">
              A boutique luxury salon sanctuary offering bespoke hair couture, transformative French balayage, timeless bridal styling, and restorative skin rituals in the heart of Dwarka, New Delhi.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 bg-[#D4AF70] text-[#0B0B0B] text-xs font-semibold uppercase tracking-wider hover:bg-[#E8C98F] transition-colors"
              >
                Reserve Your Visit
              </button>
              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20Quirk%20Studio%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 border border-[#333333] text-xs text-[#F7F3EC] hover:border-[#D4AF70] hover:text-[#D4AF70] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation (col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold text-[#F7F3EC] tracking-[0.15em] uppercase">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D4AF70] transition-colors"
                >
                  Home Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D4AF70] transition-colors"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D4AF70] transition-colors"
                >
                  Couture Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D4AF70] transition-colors"
                >
                  Client Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D4AF70] transition-colors"
                >
                  Location & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-[#F7F3EC] tracking-[0.15em] uppercase">
              Signature Services
            </h3>
            <ul className="space-y-2 text-sm">
              {SERVICE_CATEGORIES.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-[#D4AF70] transition-colors text-left"
                  >
                    {category.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Operating Details (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-[#F7F3EC] tracking-[0.15em] uppercase">
              Studio Details
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF70] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#F7F3EC] text-xs leading-relaxed">
                    2nd Floor, Plot 3, Sector 12A Road, Opposite Indra Prastha Gas Limited, Block A, Sector 12, Dwarka, New Delhi 110078
                  </p>
                  <a
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#D4AF70] hover:underline mt-1"
                  >
                    <span>Get Directions</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF70] shrink-0" />
                <a
                  href={`tel:${SALON_INFO.whatsappNumber}`}
                  className="hover:text-[#D4AF70] transition-colors text-xs text-[#F7F3EC]"
                >
                  {SALON_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF70] shrink-0" />
                <a
                  href={`mailto:${SALON_INFO.email}`}
                  className="hover:text-[#D4AF70] transition-colors text-xs"
                >
                  {SALON_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF70] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="text-[#F7F3EC]">Mon – Sun: 10:30 AM – 8:30 PM</p>
                  <p className="text-[#7A7A7A] mt-0.5">Prior appointment advised</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#707070]">
          <p>© {new Date().getFullYear()} Quirk Studio Luxury Salon. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Sector 12, Dwarka, New Delhi</span>
            <span aria-hidden="true">·</span>
            <span>Handcrafted Luxury Experience</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
