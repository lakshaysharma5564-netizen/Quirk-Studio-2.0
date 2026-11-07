import React, { useState } from 'react';
import { SALON_INFO, SERVICE_CATEGORIES } from '../data/salonData';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { BookingFormData, validateBookingForm, createWhatsAppBookingUrl } from '../utils/booking';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    service: 'Signature Sun-Kissed French Balayage',
    preferredDate: '',
    preferredTime: '11:00 AM',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const todayStr = new Date().toISOString().split('T')[0];
  const allServices = SERVICE_CATEGORIES.flatMap((c) => c.services.map((s) => s.name));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateBookingForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    const newRef = `QS-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(newRef);
    setIsSubmitted(true);

    const waUrl = createWhatsAppBookingUrl(formData);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      service: 'Signature Sun-Kissed French Balayage',
      preferredDate: '',
      preferredTime: '11:00 AM',
      notes: ''
    });
  };

  return (
    <div className="py-12 md:py-20 space-y-16">
      
      {/* 1. Header */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF70] font-medium">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#F7F3EC]">
          Contact & Location Details
        </h1>
        <p className="text-sm md:text-base text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed">
          Visit Quirk Studio in Sector 12, Dwarka, or connect with our concierge team via WhatsApp and phone for appointments and bridal consultations.
        </p>
      </section>

      {/* 2. Main Two-Column Contact & Form Area */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Verified Location & Contact Details (col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF70]">
                Dwarka Sanctuary
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-[#F7F3EC]">
                Studio Coordinates
              </h2>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                We are situated on the 2nd floor of Plot 3, Sector 12A Road, conveniently facing Indra Prastha Gas Limited in Block A, Sector 12.
              </p>
            </div>

            <div className="space-y-6 text-sm text-[#B8B8B8]">
              
              {/* Address */}
              <div className="bg-[#141414] border border-[#242424] p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D4AF70] font-semibold">
                  <MapPin className="w-4 h-4 text-[#D4AF70]" />
                  <span>Physical Address</span>
                </div>
                <p className="text-[#F7F3EC] text-xs leading-relaxed">
                  2nd Floor, Plot 3, Sector 12A Road, Opposite Indra Prastha Gas Limited, Block A, Sector 12, Dwarka, New Delhi, Delhi 110078
                </p>
                <div className="pt-2">
                  <a
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#D4AF70] hover:text-[#E8C98F] transition-colors"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone & Direct Call */}
              <div className="bg-[#141414] border border-[#242424] p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D4AF70] font-semibold">
                  <Phone className="w-4 h-4 text-[#D4AF70]" />
                  <span>Telephone Concierge</span>
                </div>
                <p className="text-xs text-[#A0A0A0]">
                  Speak directly with our front desk team for instant scheduling or directions:
                </p>
                <a
                  href={`tel:${SALON_INFO.whatsappNumber}`}
                  className="text-sm font-semibold text-[#F7F3EC] hover:text-[#D4AF70] transition-colors block"
                >
                  {SALON_INFO.phone}
                </a>
              </div>

              {/* WhatsApp Direct */}
              <div className="bg-[#141414] border border-[#242424] p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#25D366] font-semibold">
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Enquiries</span>
                </div>
                <p className="text-xs text-[#A0A0A0]">
                  Send photos of your hair or bridal references for instant master consultation:
                </p>
                <a
                  href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20Quirk%20Studio%2C%20I%20would%20like%20to%20enquire%20about%20salon%20appointments.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#25D366] hover:underline"
                >
                  <span>Chat on WhatsApp (+91 99711 38883)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Email & Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#141414] border border-[#242424] p-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D4AF70] font-medium">
                    <Mail className="w-3.5 h-3.5 text-[#D4AF70]" />
                    <span>Email</span>
                  </div>
                  <a
                    href={`mailto:${SALON_INFO.email}`}
                    className="text-xs text-[#F7F3EC] hover:text-[#D4AF70] truncate block"
                  >
                    {SALON_INFO.email}
                  </a>
                </div>

                <div className="bg-[#141414] border border-[#242424] p-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D4AF70] font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF70]" />
                    <span>Operating Hours</span>
                  </div>
                  <p className="text-xs text-[#F7F3EC]">
                    10:30 AM – 8:30 PM (Daily)
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Appointment & Enquiry Form (col-span-7) */}
          <div className="lg:col-span-7">
            <div className="bg-[#141414] border border-[#2A2A2A] p-6 sm:p-8">
              {!isSubmitted ? (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF70]">
                      Direct Booking
                    </span>
                    <h2 className="text-2xl font-serif text-[#F7F3EC] mt-1">
                      Request an Appointment
                    </h2>
                    <p className="text-xs text-[#A0A0A0] mt-1 leading-relaxed">
                      Fill out your details below. Submitting validates your request and routes it directly to our WhatsApp concierge for immediate confirmation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B8B8B8] mb-1 font-medium">
                        Full Name <span className="text-[#D4AF70]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full bg-[#1A1A1A] border px-3.5 py-2.5 text-sm text-[#F7F3EC] placeholder-[#666] focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-[#333333] focus:border-[#D4AF70]'
                        }`}
                      />
                      {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B8B8B8] mb-1 font-medium">
                        Contact Number <span className="text-[#D4AF70]">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 or 10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full bg-[#1A1A1A] border px-3.5 py-2.5 text-sm text-[#F7F3EC] placeholder-[#666] focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-[#333333] focus:border-[#D4AF70]'
                        }`}
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B8B8B8] mb-1 font-medium">
                        Desired Service <span className="text-[#D4AF70]">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-[#333333] px-3.5 py-2.5 text-sm text-[#F7F3EC] focus:outline-none focus:border-[#D4AF70]"
                      >
                        {allServices.map((svc) => (
                          <option key={svc} value={svc} className="bg-[#1A1A1A] text-[#F7F3EC]">
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#B8B8B8] mb-1 font-medium">
                          Preferred Date <span className="text-[#D4AF70]">*</span>
                        </label>
                        <input
                          type="date"
                          min={todayStr}
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className={`w-full bg-[#1A1A1A] border px-3.5 py-2.5 text-sm text-[#F7F3EC] focus:outline-none transition-colors ${
                            errors.preferredDate ? 'border-red-500' : 'border-[#333333] focus:border-[#D4AF70]'
                          }`}
                        />
                        {errors.preferredDate && (
                          <p className="text-red-400 text-xs mt-1">{errors.preferredDate}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#B8B8B8] mb-1 font-medium">
                          Preferred Slot <span className="text-[#D4AF70]">*</span>
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full bg-[#1A1A1A] border border-[#333333] px-3.5 py-2.5 text-sm text-[#F7F3EC] focus:outline-none focus:border-[#D4AF70]"
                        >
                          <option value="11:00 AM">11:00 AM (Morning)</option>
                          <option value="12:30 PM">12:30 PM (Midday)</option>
                          <option value="02:30 PM">02:30 PM (Afternoon)</option>
                          <option value="04:30 PM">04:30 PM (Late Afternoon)</option>
                          <option value="06:30 PM">06:30 PM (Evening)</option>
                          <option value="07:30 PM">07:30 PM (Night)</option>
                        </select>
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B8B8B8] mb-1 font-medium">
                        Notes or Specific Requests <span className="text-[#777] font-normal">(Optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your hair/skin history or any special event timings..."
                        value={formData.notes || ''}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-[#333333] px-3.5 py-2.5 text-sm text-[#F7F3EC] placeholder-[#666] focus:outline-none focus:border-[#D4AF70] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#D4AF70] text-[#0B0B0B] text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#E8C98F] transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.99]"
                    >
                      <MessageSquare className="w-4 h-4 text-[#0B0B0B]" />
                      <span>Send Appointment Request via WhatsApp</span>
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center space-y-5 animate-fadeIn">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#1F2C20] border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF70]">
                      Enquiry Verified
                    </span>
                    <h3 className="text-2xl font-serif text-[#F7F3EC]">
                      Thank You, {formData.fullName}
                    </h3>
                    <p className="text-xs text-[#A0A0A0] max-w-sm mx-auto">
                      Your booking details have been prepared and sent to Quirk Studio’s WhatsApp desk.
                    </p>
                  </div>

                  <div className="bg-[#1A1A1A] border border-[#2B2B2B] p-4 text-left space-y-2 text-xs max-w-md mx-auto">
                    <div className="flex justify-between border-b border-[#2B2B2B] pb-2">
                      <span className="text-[#888]">Reference Number</span>
                      <span className="font-mono text-[#D4AF70] font-semibold">{refId}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#2B2B2B] pb-2">
                      <span className="text-[#888]">Selected Service</span>
                      <span className="text-[#F7F3EC]">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#888]">Schedule</span>
                      <span className="text-[#F7F3EC]">{formData.preferredDate} at {formData.preferredTime}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={createWhatsAppBookingUrl(formData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-2.5 bg-[#D4AF70] text-[#0B0B0B] text-xs font-semibold uppercase tracking-wider hover:bg-[#E8C98F] transition-colors"
                    >
                      Reopen WhatsApp Message
                    </a>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-2.5 border border-[#333333] text-xs uppercase tracking-wider text-[#B8B8B8] hover:text-[#F7F3EC] transition-colors"
                    >
                      Book Another Service
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Directions & Transportation Banner */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-[#111111] border border-[#242424] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-[#D4AF70]">Arrival Guide</span>
            <h3 className="text-lg font-serif text-[#F7F3EC]">Visiting Us in Sector 12, Dwarka</h3>
            <p className="text-xs text-[#8A8A8A] max-w-xl">
              Located directly opposite Indra Prastha Gas Limited on Sector 12A Road. Convenient access from Dwarka Sector 12 Metro Station (Blue Line) and dedicated valet assistance on arrival.
            </p>
          </div>
          <a
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#444] text-xs uppercase tracking-wider text-[#F7F3EC] hover:border-[#D4AF70] hover:text-[#D4AF70] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Open Directions Map</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

    </div>
  );
};
