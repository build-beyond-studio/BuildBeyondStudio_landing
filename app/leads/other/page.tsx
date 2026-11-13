import type { Metadata } from 'next';
import { Suspense } from 'react';
import LeadFunnel from '@/components/leads/LeadFunnel';

export const metadata: Metadata = {
  title: 'Other enquiry | Build Beyond Studio',
  description: 'Tell us what you need from Build Beyond Studio.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function OtherLeadsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8f5f1]" />}>
      <LeadFunnel defaultSegment="other" />
    </Suspense>
  );
}
