import test from 'node:test';
import assert from 'node:assert/strict';
import { validateBookingForm, createWhatsAppBookingUrl, createGeneralWhatsAppUrl } from './booking';

test('validateBookingForm accepts valid booking data', () => {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 2);
  const dateStr = futureDate.toISOString().split('T')[0];

  const result = validateBookingForm({
    fullName: 'Ananya Sharma',
    phone: '9876543210',
    service: 'Signature Sun-Kissed French Balayage',
    preferredDate: dateStr,
    preferredTime: '11:00 AM'
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validateBookingForm handles Indian phone formats with +91', () => {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 1);
  const dateStr = futureDate.toISOString().split('T')[0];

  const result = validateBookingForm({
    fullName: 'Rahul Verma',
    phone: '+91 99711 38883',
    service: 'Master Designer Haircut',
    preferredDate: dateStr,
    preferredTime: '2:30 PM'
  });

  assert.equal(result.isValid, true);
  assert.equal(result.errors.phone, undefined);
});

test('validateBookingForm rejects invalid phone numbers and missing names', () => {
  const result = validateBookingForm({
    fullName: '',
    phone: '12345',
    service: '',
    preferredDate: '',
    preferredTime: ''
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.service);
  assert.ok(result.errors.preferredDate);
  assert.ok(result.errors.preferredTime);
});

test('createWhatsAppBookingUrl generates valid wa.me link with encoded details', () => {
  const url = createWhatsAppBookingUrl({
    fullName: 'Divya Kapur',
    phone: '9811223344',
    service: 'Couture Balayage',
    preferredDate: '2026-11-15',
    preferredTime: '12:00 PM',
    notes: 'Skin sensitive consultation'
  });

  assert.ok(url.startsWith('https://wa.me/919971138883?text='));
  assert.ok(url.includes(encodeURIComponent('Divya Kapur')));
  assert.ok(url.includes(encodeURIComponent('Couture Balayage')));
});

test('createGeneralWhatsAppUrl generates valid link with optional subject', () => {
  const urlWithSubject = createGeneralWhatsAppUrl('Bridal Makeup');
  assert.ok(urlWithSubject.includes('Bridal%20Makeup'));

  const generalUrl = createGeneralWhatsAppUrl();
  assert.ok(generalUrl.startsWith('https://wa.me/919971138883?text='));
});
