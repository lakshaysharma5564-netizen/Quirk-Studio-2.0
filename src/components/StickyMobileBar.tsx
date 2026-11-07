import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { MessageSquare, Calendar, Phone } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0B0B0B]/95 backdrop-blur-md border-t border-[#262626] px-4 py-2 flex items-center justify-between gap-2 max-h-[56px]"
    >
      <a
        href={`tel:${SALON_INFO.whatsappNumber}`}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-2 bg-[#141414] border border-[#2a2a2a] text-[#F7F3EC] text-[11px] font-medium uppercase tracking-wider rounded-none active:bg-[#1a1a1a]"
      >
        <Phone className="w-3.5 h-3.5 text-[#D4AF70]" />
        <span>Call Now</span>
      </a>

      <a
        href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20Quirk%20Studio%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20salon%20appointment.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-2 bg-[#1A261D] border border-[#25D366]/40 text-[#25D366] text-[11px] font-medium uppercase tracking-wider rounded-none active:bg-[#203024]"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenBooking}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-2 bg-[#D4AF70] text-[#0B0B0B] text-[11px] font-semibold uppercase tracking-wider rounded-none active:bg-[#E8C98F]"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Visit</span>
      </button>
    </aside>
  );
};
