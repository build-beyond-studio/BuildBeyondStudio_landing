import type { Metadata } from 'next';
import { Suspense } from 'react';
import LeadFunnel from '@/components/leads/LeadFunnel';

export const metadata: Metadata = {
  title: 'Talent enquiry | Build Beyond Studio',
  description: 'Join the Build Beyond Studio talent list for future collaboration opportunities.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function TalentLeadsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8f5f1]" />}>
      <LeadFunnel defaultSegment="talent" />
    </Suspense>
  );
}
