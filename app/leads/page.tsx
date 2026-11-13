import type { Metadata } from 'next';
import { Suspense } from 'react';
import LeadFunnel from '@/components/leads/LeadFunnel';

export const metadata: Metadata = {
  title: 'Leads | Build Beyond Studio',
  description: 'Book a discovery call or submit a project enquiry with Build Beyond Studio.',
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

export default function LeadsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8f5f1]" />}>
      <LeadFunnel />
    </Suspense>
  );
}
