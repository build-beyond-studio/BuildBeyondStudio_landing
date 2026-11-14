import type { Metadata } from 'next';
import { Suspense } from 'react';
import LeadFunnel from '@/components/leads/LeadFunnel';

export const metadata: Metadata = {
  title: 'Agency enquiry | Build Beyond Studio',
  description: 'Apply for white-label agency partnership support with Build Beyond Studio.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function AgencyLeadsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8f5f1]" />}>
      <LeadFunnel defaultSegment="agency" />
    </Suspense>
  );
}
