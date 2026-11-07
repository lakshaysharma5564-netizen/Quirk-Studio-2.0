export interface BookingFormData {
  fullName: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Validates a client appointment booking form submission.
 */
export function validateBookingForm(data: BookingFormData): ValidationResult {
  const errors: Record<string, string> = {};

  // Validate Name
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters).';
  }

  // Validate Indian Phone Number: 10 digits, optionally prefixed by +91 or 0
  const cleanPhone = data.phone.replace(/[\s\-()]/g, '');
  const phoneRegex = /^(?:\+?91|0)?[6-9]\d{9}$/;
  if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
    errors.phone = 'Please enter a valid 10-digit Indian mobile number.';
  }

  // Validate Service selection
  if (!data.service || data.service.trim().length === 0) {
    errors.service = 'Please choose a salon service for your appointment.';
  }

  // Validate Date selection
  if (!data.preferredDate) {
    errors.preferredDate = 'Please select a preferred date.';
  } else {
    const selectedDate = new Date(data.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (isNaN(selectedDate.getTime()) || selectedDate < today) {
      errors.preferredDate = 'Please select today or a future date.';
    }
  }

  // Validate Time selection
  if (!data.preferredTime) {
    errors.preferredTime = 'Please choose your preferred time slot.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Generates direct pre-filled WhatsApp enquiry link for Quirk Studio
 * Number: 919971138883
 */
export function createWhatsAppBookingUrl(data: BookingFormData): string {
  const messageLines = [
    `*Appointment Enquiry | Quirk Studio Luxury Salon*`,
    `----------------------------------------`,
    `*Name:* ${data.fullName.trim()}`,
    `*Contact:* ${data.phone.trim()}`,
    `*Service:* ${data.service}`,
    `*Preferred Date:* ${data.preferredDate}`,
    `*Preferred Time:* ${data.preferredTime}`,
    data.notes ? `*Notes / Requirements:* ${data.notes.trim()}` : null,
    `----------------------------------------`,
    `_Sent via quirkluxurysalon.com appointment portal_`
  ].filter(Boolean);

  const encodedMessage = encodeURIComponent(messageLines.join('\n'));
  return `https://wa.me/919971138883?text=${encodedMessage}`;
}

/**
 * Formats general WhatsApp enquiry link for services or quick questions
 */
export function createGeneralWhatsAppUrl(subject?: string): string {
  const text = subject
    ? `Hello Quirk Studio, I would like to enquire about ${subject} at your Sector 12 Dwarka salon.`
    : `Hello Quirk Studio, I would like to enquire about your luxury salon services and book an appointment.`;
  return `https://wa.me/919971138883?text=${encodeURIComponent(text)}`;
}
