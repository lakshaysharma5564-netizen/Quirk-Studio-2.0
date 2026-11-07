import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/salonData';
import { Maximize2, Sparkles } from 'lucide-react';

interface GalleryViewProps {
  onOpenLightbox: (index: number) => void;
  onOpenBooking: () => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onOpenLightbox, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'hair', label: 'Hair Transformations' },
    { id: 'bridal', label: 'Bridal & Glamour' },
    { id: 'skin', label: 'Skin Rituals' },
    { id: 'interior', label: 'Salon Sanctuary' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="py-12 md:py-20 space-y-16">
      
      {/* 1. Gallery Header */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF70] font-medium">
          Visual Aesthetics
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#F7F3EC]">
          Client Portfolio & Salon Sanctuary
        </h1>
        <p className="text-sm md:text-base text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed">
          Explore real hair transformations, bespoke bridal glamour, skin treatments, and the architectural interiors of Quirk Studio in Sector 12, Dwarka.
        </p>
      </section>

      {/* 2. Filter Tabs */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider whitespace-nowrap shrink-0 transition-all border ${
                activeCategory === cat.id
                  ? 'bg-[#D4AF70] text-[#0B0B0B] border-[#D4AF70]'
                  : 'bg-[#141414] text-[#B8B8B8] border-[#262626] hover:border-[#444] hover:text-[#F7F3EC]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Image Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const globalIndex = GALLERY_ITEMS.findIndex((i) => i.id === item.id);
            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(globalIndex)}
                className="group relative cursor-pointer overflow-hidden border border-[#242424] bg-[#141414] transition-all duration-300 hover:border-[#D4AF70]/50"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-3 rounded-full bg-black/70 text-[#F7F3EC] border border-[#444]">
                      <Maximize2 className="w-5 h-5 text-[#D4AF70]" />
                    </span>
                  </div>
                </div>

                <div className="p-5 border-t border-[#202020] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-[#D4AF70] font-medium">
                      {item.category}
                    </span>
                    <span className="text-[11px] text-[#666]">Click to view</span>
                  </div>
                  <h3 className="text-lg font-serif text-[#F7F3EC] group-hover:text-[#D4AF70] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8A8A8A] leading-relaxed pt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Bottom Booking Strip */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-4 pt-8">
        <Sparkles className="w-6 h-6 text-[#D4AF70] mx-auto" />
        <h2 className="text-2xl md:text-3xl font-serif text-[#F7F3EC]">
          Inspired by a Look?
        </h2>
        <p className="text-xs text-[#A0A0A0] max-w-lg mx-auto">
          Share your favorite photo during your diagnostic consultation. Our master colorists and makeup directors will customize it to your personal bone structure and hair texture.
        </p>
        <div className="pt-2">
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 bg-[#D4AF70] text-[#0B0B0B] text-xs font-semibold uppercase tracking-wider hover:bg-[#E8C98F] transition-colors"
          >
            Schedule Consultation
          </button>
        </div>
      </section>

    </div>
  );
};
