import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Sparkles, ShieldCheck, HeartHandshake, Award, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onOpenBooking: () => void;
  onNavigate: (tab: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="py-12 md:py-20 space-y-24">
      
      {/* 1. Brand Story & Hero Header */}
      <section className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF70] font-medium">
          The Story of Quirk Studio
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#F7F3EC] leading-tight" style={{ textWrap: 'balance' }}>
          Where Precision Craft Meets Unhurried Luxury
        </h1>
        <p className="text-base md:text-lg text-[#B8B8B8] max-w-3xl mx-auto leading-relaxed font-light">
          Founded in Sector 12, Dwarka, Quirk Studio was created as an antidote to the high-volume, rushed salon model. We envisioned a private, aesthetic sanctuary where clients receive individualized attention, master-level craftsmanship, and uncompromising hygiene.
        </p>
      </section>

      {/* 2. Editorial Dual Column: Philosophy & Visual */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF70]">
              Our Core Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#F7F3EC]">
              Hair and Beauty as Individual Architecture
            </h2>
            <p className="text-sm text-[#A0A0A0] leading-relaxed">
              We do not believe in copy-paste templates or transient internet fads. Hair design is structural; it must harmonize with the contours of your cheekbones, your skin's natural undertones, and your daily cadence.
            </p>
            <p className="text-sm text-[#A0A0A0] leading-relaxed">
              Every balayage is hand-painted to catch light naturally as you move. Every haircut is sculpted to fall into place with minimal styling effort. Every bridal look is designed to reflect timeless dignity rather than heavy costume.
            </p>
            
            <div className="pt-2">
              <blockquote className="border-l border-[#D4AF70] pl-4 text-sm font-serif italic text-[#E8C98F]">
                "True luxury in beauty is never loud or rushed. It is the quiet confidence of technical mastery, pure formulations, and sincere listening."
              </blockquote>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-[#262626] bg-[#141414] p-3">
              <img
                src="/images/hero_quirk_salon.jpg"
                alt="Quirk Studio Salon Interior in Dwarka"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
              />
              <div className="p-3 text-right">
                <span className="text-[11px] text-[#7A7A7A] uppercase tracking-wider">
                  The Styling Floor · Sector 12, Dwarka
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4 Pillars of Professional Standards */}
      <section className="bg-[#111111] border-y border-[#202020] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF70]">
              Our Commitments
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#F7F3EC]">
              Professional Standards & Care
            </h2>
            <p className="text-xs text-[#8A8A8A]">
              How we protect your hair integrity, skin health, and personal peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#161616] border border-[#242424] p-6 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#1F1F1F] border border-[#D4AF70]/40 flex items-center justify-center text-[#D4AF70]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-[#F7F3EC]">
                Sterile Hygiene Protocol
              </h3>
              <p className="text-xs text-[#8A8A8A] leading-relaxed">
                Hospital-grade autoclave sterilization for metal tools, disposable single-use manicure/pedicure kits, and freshly laundered linens for every guest.
              </p>
            </div>

            <div className="bg-[#161616] border border-[#242424] p-6 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#1F1F1F] border border-[#D4AF70]/40 flex items-center justify-center text-[#D4AF70]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-[#F7F3EC]">
                European Formulations
              </h3>
              <p className="text-xs text-[#8A8A8A] leading-relaxed">
                We work exclusively with certified international cosmetic and hair chemistry houses. Ammonia-free dyes, bond-protecting lighteners, and clinical skin actives.
              </p>
            </div>

            <div className="bg-[#161616] border border-[#242424] p-6 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#1F1F1F] border border-[#D4AF70]/40 flex items-center justify-center text-[#D4AF70]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-[#F7F3EC]">
                Master Certified Artists
              </h3>
              <p className="text-xs text-[#8A8A8A] leading-relaxed">
                Our team is composed of seasoned creative directors who undergo recurring training in global color blending, bridal draping, and dermatological skin prep.
              </p>
            </div>

            <div className="bg-[#161616] border border-[#242424] p-6 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#1F1F1F] border border-[#D4AF70]/40 flex items-center justify-center text-[#D4AF70]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-[#F7F3EC]">
                Honest Consultations
              </h3>
              <p className="text-xs text-[#8A8A8A] leading-relaxed">
                We will never recommend unnecessary treatments or promise unachievable color results that sacrifice hair health. Transparent pricing and realistic timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Call to Action Banner */}
      <section className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-serif text-[#F7F3EC]">
          Experience the Difference in Dwarka
        </h2>
        <p className="text-sm text-[#A0A0A0] max-w-xl mx-auto">
          Whether you are preparing for your wedding or seeking your signature balayage, we invite you to book a private consultation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#D4AF70] text-[#0B0B0B] text-xs font-semibold uppercase tracking-wider hover:bg-[#E8C98F] transition-colors"
          >
            Book An Appointment
          </button>
          <button
            onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="w-full sm:w-auto px-6 py-3.5 border border-[#333333] text-xs uppercase tracking-wider text-[#F7F3EC] hover:border-[#D4AF70] hover:text-[#D4AF70] transition-colors"
          >
            Explore Services
          </button>
        </div>
      </section>

    </div>
  );
};
