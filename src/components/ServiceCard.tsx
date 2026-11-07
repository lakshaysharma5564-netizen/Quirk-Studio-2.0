import React from 'react';
import { ServiceItem, SALON_INFO } from '../data/salonData';
import { Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { createGeneralWhatsAppUrl } from '../utils/booking';

interface ServiceCardProps {
  service: ServiceItem;
  onBookService: (serviceName: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBookService }) => {
  const waUrl = createGeneralWhatsAppUrl(service.name);

  return (
    <article className="group bg-[#141414] border border-[#242424] hover:border-[#D4AF70]/60 p-6 flex flex-col justify-between transition-all duration-300">
      <div className="space-y-4">
        {/* Unboxed Metadata Header (NO PILLS) */}
        <div className="flex items-center gap-2 text-xs text-[#A0A0A0]">
          <span className="uppercase tracking-wider text-[#D4AF70]">{service.category}</span>
          <span aria-hidden="true" className="text-[#444]">·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#888]" />
            <span>{service.duration}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-serif text-[#F7F3EC] group-hover:text-[#D4AF70] transition-colors leading-snug">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#A0A0A0] leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Extended details */}
        <p className="text-xs text-[#7A7A7A] leading-normal pt-1">
          {service.details}
        </p>

        {/* Features / Inclusions with clean typographic bullets */}
        <ul className="pt-2 space-y-1.5 border-t border-[#202020]">
          {service.features.map((feature, idx) => (
            <li key={idx} className="text-xs text-[#B8B8B8] flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#D4AF70]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Action & Pricing Footer */}
      <div className="pt-6 mt-6 border-t border-[#202020] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="space-y-0.5">
          <span className="text-[11px] uppercase tracking-wider text-[#7A7A7A]">Investment</span>
          <p className="text-xs font-medium text-[#E8C98F] tracking-wide">
            {service.pricing}
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#888] hover:text-[#25D366] hover:bg-[#1f1f1f] border border-[#2a2a2a] transition-colors"
            title="Enquire on WhatsApp"
            aria-label={`Enquire about ${service.name} on WhatsApp`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => onBookService(service.name)}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-[#1C1C1C] hover:bg-[#D4AF70] text-[#F7F3EC] hover:text-[#0B0B0B] border border-[#333] hover:border-[#D4AF70] text-xs uppercase tracking-wider transition-all duration-200"
          >
            <span>Book Visit</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </article>
  );
};
