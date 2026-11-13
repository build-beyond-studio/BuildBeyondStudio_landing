import type { Metadata } from 'next';
import { Suspense } from 'react';
import LeadThanks from '@/components/leads/LeadThanks';

export const metadata: Metadata = {
  title: 'Thanks | Build Beyond Studio',
  description: 'Your lead has been submitted successfully.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function LeadsThanksPage() {
  const configuredBookingUrl = process.env.BBS_CALENDAR_URL;
  let bookingUrl: string | null = null;
  try {
    const parsedUrl = configuredBookingUrl ? new URL(configuredBookingUrl) : null;
    if (parsedUrl && ['https:', 'http:'].includes(parsedUrl.protocol)) bookingUrl = parsedUrl.toString();
  } catch {
    bookingUrl = null;
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8f5f1]" />}>
      <LeadThanks bookingUrl={bookingUrl} />
    </Suspense>
  );
}
