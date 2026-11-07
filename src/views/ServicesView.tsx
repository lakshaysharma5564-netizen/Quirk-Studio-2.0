import React, { useState, useMemo } from 'react';
import { SERVICE_CATEGORIES, SALON_INFO } from '../data/salonData';
import { ServiceCard } from '../components/ServiceCard';
import { Search, Sparkles, MessageSquare, Phone } from 'lucide-react';
import { createGeneralWhatsAppUrl } from '../utils/booking';

interface ServicesViewProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'All Services' },
    { id: 'hair-styling', label: 'Hair Styling & Cuts' },
    { id: 'balayage', label: 'Couture Balayage' },
    { id: 'hair-colour', label: 'Colour & Highlights' },
    { id: 'hair-treatments', label: 'Hair Treatments' },
    { id: 'bridal-makeup', label: 'Bridal Makeup' },
    { id: 'professional-makeup', label: 'Pro Makeup' },
    { id: 'skin-treatments', label: 'Skin & Facials' },
    { id: 'manicure-pedicure', label: 'Nails & Spa' },
    { id: 'grooming-beauty', label: 'Grooming & Waxing' },
  ];

  // Filter services by category and search
  const filteredCategories = useMemo(() => {
    return SERVICE_CATEGORIES.map((cat) => {
      // If category filter is active, check match
      if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
        return null;
      }

      // Filter inner services by search term
      const matchingServices = cat.services.filter((s) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          s.name.toLowerCase().includes(q) ||
          s.shortDesc.toLowerCase().includes(q) ||
          s.details.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q)
        );
      });

      if (matchingServices.length === 0) return null;

      return {
        ...cat,
        services: matchingServices
      };
    }).filter(Boolean);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-12 md:py-20 space-y-16">
      
      {/* 1. Header Section */}
      <section className="max-w-5xl mx-auto px-6 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF70] font-medium">
          Couture Menu
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#F7F3EC]">
          Salon Services & Treatments
        </h1>
        <p className="text-sm md:text-base text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed">
          From multi-dimensional balayage to couture bridal styling and restorative skincare, explore our 9 specialized service categories in Sector 12, Dwarka.
        </p>

        {/* Pricing notice respecting user instructions */}
        <p className="text-xs text-[#7A7A7A] italic">
          *All services include personalized diagnostic consultation. Exact pricing is determined post-assessment based on hair length, texture, and technical requirements.
        </p>
      </section>

      {/* 2. Controls Bar: Interactive Category Tabs + Search */}
      <section className="max-w-7xl mx-auto px-6 space-y-6">
        
        {/* Search Input */}
        <div className="max-w-md mx-auto relative">
          <label htmlFor="service-search" className="sr-only">Search salon services</label>
          <Search className="w-4 h-4 text-[#777] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="service-search"
            type="search"
            placeholder="Search balayage, bridal, hair spa, facials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#141414] border border-[#2A2A2A] focus:border-[#D4AF70] text-sm text-[#F7F3EC] placeholder-[#666] pl-10 pr-4 py-2.5 focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#888] hover:text-[#F7F3EC]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Tabs (Single-line interactive segmented control) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider whitespace-nowrap shrink-0 transition-all border ${
                selectedCategory === tab.id
                  ? 'bg-[#D4AF70] text-[#0B0B0B] border-[#D4AF70]'
                  : 'bg-[#141414] text-[#B8B8B8] border-[#262626] hover:border-[#444] hover:text-[#F7F3EC]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Services Directory */}
      <section className="max-w-7xl mx-auto px-6 space-y-16">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <div key={category!.id} className="space-y-6">
              
              {/* Category Header */}
              <div className="border-b border-[#242424] pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h2 className="text-2xl font-serif text-[#F7F3EC]">
                    {category!.title}
                  </h2>
                  <p className="text-xs text-[#A0A0A0] mt-1 max-w-xl">
                    {category!.description}
                  </p>
                </div>
                <span className="text-xs text-[#D4AF70] tracking-wider uppercase">
                  {category!.services.length} {category!.services.length === 1 ? 'Service' : 'Services'}
                </span>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category!.services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onBookService={(name) => onOpenBooking(name)}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16 bg-[#141414] border border-[#242424] space-y-3">
            <Sparkles className="w-8 h-8 text-[#D4AF70] mx-auto" />
            <h3 className="text-lg font-serif text-[#F7F3EC]">No matching services found</h3>
            <p className="text-xs text-[#888]">
              Try searching with another keyword or reset the filter.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-2 px-4 py-2 bg-[#1C1C1C] border border-[#333] text-xs text-[#D4AF70] uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 4. Consultation Assistance Strip */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-[#141414] border border-[#262626] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider text-[#D4AF70]">Custom Bridal & Styling Inquiries</span>
            <h2 className="text-2xl font-serif text-[#F7F3EC]">Need Guidance on Choosing the Right Treatment?</h2>
            <p className="text-xs text-[#A0A0A0] max-w-xl">
              Connect directly with our salon director for a complimentary shade matching or bridal look consultation on WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={createGeneralWhatsAppUrl('Custom Salon Consultation')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF70] text-[#0B0B0B] text-xs font-semibold uppercase tracking-wider hover:bg-[#E8C98F] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#0B0B0B]" />
              <span>WhatsApp Consultation</span>
            </a>
            <a
              href={`tel:${SALON_INFO.whatsappNumber}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#333333] text-[#F7F3EC] text-xs font-medium uppercase tracking-wider hover:border-[#D4AF70] hover:text-[#D4AF70] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF70]" />
              <span>Call Concierge</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
