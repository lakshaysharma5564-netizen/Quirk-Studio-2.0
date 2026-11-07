import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Sparkles, MessageSquare, CheckCircle2 } from 'lucide-react';
import { SALON_INFO, SERVICE_CATEGORIES } from '../data/salonData';
import { BookingFormData, validateBookingForm, createWhatsAppBookingUrl } from '../utils/booking';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

const TIME_SLOTS = [
  '11:00 AM',
  '12:00 PM',
  '01:30 PM',
  '03:00 PM',
  '04:30 PM',
  '06:00 PM',
  '07:00 PM'
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService = ''
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    service: preselectedService || 'Signature Sun-Kissed French Balayage',
    preferredDate: '',
    preferredTime: '11:00 AM',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Update default service when preselectedService prop changes
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  // Set minimum date to today
  const todayStr = new Date().toISOString().split('T')[0];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const refCode = `QS-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refCode);
    setIsSubmitted(true);

    // Open WhatsApp appointment link
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
    onClose();
  };

  // Collect all service options
  const allServices = SERVICE_CATEGORIES.flatMap((c) => c.services.map((s) => s.name));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative w-full max-w-lg bg-[#141414] border border-[#2e2e2e] shadow-2xl p-6 sm:p-8 text-[#F7F3EC] max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#888] hover:text-[#F7F3EC] transition-colors p-1"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="space-y-1 mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF70]">
                Bespoke Appointment
              </span>
              <h2 id="booking-modal-title" className="text-2xl font-serif text-[#F7F3EC]">
                Reserve Your Salon Experience
              </h2>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                Connect directly with our master stylists at Sector 12, Dwarka. Submitting prepares your enquiry and launches instant WhatsApp confirmation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B8B8B8] mb-1.5 font-medium">
                  Full Name <span className="text-[#D4AF70]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Radhika Mehra"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full bg-[#1A1A1A] border px-3.5 py-2.5 text-sm text-[#F7F3EC] placeholder-[#666] focus:outline-none transition-colors ${
                    errors.fullName ? 'border-red-500/80 focus:border-red-500' : 'border-[#333333] focus:border-[#D4AF70]'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B8B8B8] mb-1.5 font-medium">
                  Contact Number <span className="text-[#D4AF70]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-[#1A1A1A] border px-3.5 py-2.5 text-sm text-[#F7F3EC] placeholder-[#666] focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-500/80 focus:border-red-500' : 'border-[#333333] focus:border-[#D4AF70]'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B8B8B8] mb-1.5 font-medium">
                  Preferred Service <span className="text-[#D4AF70]">*</span>
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={`w-full bg-[#1A1A1A] border px-3.5 py-2.5 text-sm text-[#F7F3EC] focus:outline-none transition-colors ${
                    errors.service ? 'border-red-500/80 focus:border-red-500' : 'border-[#333333] focus:border-[#D4AF70]'
                  }`}
                >
                  {allServices.map((name) => (
                    <option key={name} value={name} className="bg-[#1A1A1A] text-[#F7F3EC]">
                      {name}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-400 text-xs mt-1">{errors.service}</p>
                )}
              </div>

              {/* Date and Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B8B8B8] mb-1.5 font-medium">
                    Preferred Date <span className="text-[#D4AF70]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={todayStr}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full bg-[#1A1A1A] border px-3.5 py-2.5 text-sm text-[#F7F3EC] focus:outline-none transition-colors ${
                        errors.preferredDate ? 'border-red-500/80 focus:border-red-500' : 'border-[#333333] focus:border-[#D4AF70]'
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-red-400 text-xs mt-1">{errors.preferredDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B8B8B8] mb-1.5 font-medium">
                    Time Window <span className="text-[#D4AF70]">*</span>
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-[#333333] px-3.5 py-2.5 text-sm text-[#F7F3EC] focus:outline-none focus:border-[#D4AF70]"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot} className="bg-[#1A1A1A] text-[#F7F3EC]">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requests / Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B8B8B8] mb-1.5 font-medium">
                  Hair/Skin Notes or Inquiries <span className="text-[#777] font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Seeking consultation on dark brunette to honey balayage transition."
                  value={formData.notes || ''}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#1A1A1A] border border-[#333333] px-3.5 py-2 text-sm text-[#F7F3EC] placeholder-[#666] focus:outline-none focus:border-[#D4AF70] resize-none"
                />
              </div>

              {/* Trust Callout */}
              <div className="bg-[#1C1C1C] border border-[#2A2A2A] p-3 text-xs text-[#A0A0A0] flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#D4AF70] shrink-0 mt-0.5" />
                <p>
                  Our salon manager will immediately review and lock in your schedule. No upfront payment required online.
                </p>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#D4AF70] text-[#0B0B0B] text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#E8C98F] transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.99]"
                >
                  <MessageSquare className="w-4 h-4 text-[#0B0B0B]" />
                  <span>Confirm & Send via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-6 text-center space-y-5 animate-fadeIn">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#1F2C20] border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF70]">
                Request Generated
              </span>
              <h3 className="text-2xl font-serif text-[#F7F3EC]">
                Appointment Request Submitted
              </h3>
              <p className="text-xs text-[#A0A0A0] max-w-sm mx-auto">
                We have generated your enquiry. Our guest concierge has received your request on WhatsApp.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2B2B2B] p-4 text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-[#2B2B2B] pb-2">
                <span className="text-[#888]">Reference Code</span>
                <span className="font-mono text-[#D4AF70] font-semibold">{bookingRef}</span>
              </div>
              <div className="flex justify-between border-b border-[#2B2B2B] pb-2">
                <span className="text-[#888]">Guest Name</span>
                <span className="text-[#F7F3EC]">{formData.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-[#2B2B2B] pb-2">
                <span className="text-[#888]">Service</span>
                <span className="text-[#F7F3EC]">{formData.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Schedule</span>
                <span className="text-[#F7F3EC]">{formData.preferredDate} at {formData.preferredTime}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={createWhatsAppBookingUrl(formData)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#D4AF70] text-[#0B0B0B] text-xs font-semibold uppercase tracking-wider hover:bg-[#E8C98F] transition-colors"
              >
                Reopen WhatsApp Chat
              </a>
              <button
                onClick={handleReset}
                className="w-full py-2.5 border border-[#333333] text-xs uppercase tracking-wider text-[#B8B8B8] hover:text-[#F7F3EC] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
