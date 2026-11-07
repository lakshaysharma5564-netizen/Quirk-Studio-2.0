/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { GalleryLightbox } from './components/GalleryLightbox';
import { StickyMobileBar } from './components/StickyMobileBar';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { GalleryView } from './views/GalleryView';
import { ContactView } from './views/ContactView';
import { GALLERY_ITEMS } from './data/salonData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string>('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Sync hash routing on initial load and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'services', 'gallery', 'contact'].includes(hash)) {
        setCurrentTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab === 'home' ? '' : tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceName?: string) => {
    setBookingService(serviceName || '');
    setIsBookingOpen(true);
  };

  const handleOpenGalleryItem = (index: number) => {
    setLightboxIndex(index);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F7F3EC] flex flex-col selection:bg-[#D4AF70] selection:text-[#0B0B0B]">
      {/* Top 3-Zone Navigation */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onOpenGalleryItem={handleOpenGalleryItem}
          />
        )}
        {currentTab === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
        {currentTab === 'services' && (
          <ServicesView
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentTab === 'gallery' && (
          <GalleryView
            onOpenLightbox={handleOpenGalleryItem}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
        {currentTab === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Comprehensive Editorial Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Discrete Sticky Conversion Bar for Mobile (<= 15% height cap) */}
      <StickyMobileBar
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={bookingService}
      />

      {/* Accessible Gallery Lightbox */}
      <GalleryLightbox
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
}
