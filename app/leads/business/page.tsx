import type { Metadata } from 'next';
import { Suspense } from 'react';
import LeadFunnel from '@/components/leads/LeadFunnel';

export const metadata: Metadata = {
  title: 'Business growth enquiry | Build Beyond Studio',
  description: 'Tell us about your business and discover your growth opportunity gap.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function BusinessLeadsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8f5f1]" />}>
      <LeadFunnel defaultSegment="business" />
    </Suspense>
  );
}
