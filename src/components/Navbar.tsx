import React, { useState } from 'react';
import { SALON_INFO } from '../data/salonData';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact & Location' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#262626]">
      {/* Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (Nav Links) - Zone 3 (1 Primary CTA) */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element Brand wordmark */}
        <button
          onClick={() => handleLinkClick('home')}
          className="text-left text-xl md:text-2xl font-serif tracking-[0.25em] text-[#F7F3EC] uppercase hover:text-[#D4AF70] transition-colors whitespace-nowrap shrink-0"
        >
          {SALON_INFO.name}
        </button>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`transition-colors whitespace-nowrap shrink-0 relative py-2 ${
                currentTab === link.id
                  ? 'text-[#D4AF70]'
                  : 'text-[#B8B8B8] hover:text-[#F7F3EC]'
              }`}
            >
              {link.label}
              {currentTab === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF70]" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href={`tel:${SALON_INFO.whatsappNumber}`}
            className="hidden xl:inline-flex items-center gap-2 text-xs text-[#B8B8B8] hover:text-[#D4AF70] transition-colors tracking-wider whitespace-nowrap"
            aria-label="Call Quirk Studio"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF70]" />
            <span>{SALON_INFO.phone}</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 bg-[#D4AF70] text-[#0B0B0B] text-xs font-semibold uppercase tracking-wider hover:bg-[#E8C98F] transition-all duration-200 shadow-sm active:scale-95 whitespace-nowrap"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="sm:hidden px-3 py-1.5 bg-[#D4AF70] text-[#0B0B0B] text-xs font-semibold uppercase tracking-wider hover:bg-[#E8C98F] transition-colors"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F7F3EC] hover:text-[#D4AF70] transition-colors"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141414] border-b border-[#262626] px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left text-base font-medium py-2 transition-colors ${
                  currentTab === link.id
                    ? 'text-[#D4AF70] border-l-2 border-[#D4AF70] pl-3'
                    : 'text-[#B8B8B8] hover:text-[#F7F3EC]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-[#262626] flex flex-col gap-3">
              <a
                href={`tel:${SALON_INFO.whatsappNumber}`}
                className="flex items-center gap-3 text-sm text-[#F7F3EC] py-2"
              >
                <Phone className="w-4 h-4 text-[#D4AF70]" />
                <span>Call {SALON_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20Quirk%20Studio%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#F7F3EC] py-2"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: {SALON_INFO.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
