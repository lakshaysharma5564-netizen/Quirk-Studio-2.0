import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/salonData';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery Image Viewer"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-[#999] hover:text-[#F7F3EC] p-2 transition-colors z-20"
        aria-label="Close image preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
        className="absolute left-4 md:left-8 text-[#999] hover:text-[#F7F3EC] p-3 transition-colors z-20 bg-black/40 hover:bg-black/80 rounded-full"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={() => onNavigate((currentIndex + 1) % items.length)}
        className="absolute right-4 md:right-8 text-[#999] hover:text-[#F7F3EC] p-3 transition-colors z-20 bg-black/40 hover:bg-black/80 rounded-full"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
        <img
          src={currentItem.image}
          alt={currentItem.title}
          referrerPolicy="no-referrer"
          className="max-h-[70vh] w-auto object-contain border border-[#222]"
        />
        <div className="mt-4 text-center max-w-xl">
          <h3 className="text-lg font-serif text-[#F7F3EC]">{currentItem.title}</h3>
          <p className="text-xs text-[#A0A0A0] mt-1">{currentItem.caption}</p>
          <span className="text-[11px] text-[#666] tracking-wider block mt-2">
            {currentIndex + 1} of {items.length}
          </span>
        </div>
      </div>
    </div>
  );
};
