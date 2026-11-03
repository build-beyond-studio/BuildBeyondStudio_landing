import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import RateCardClient from './RateCardClient';

export const metadata: Metadata = buildMetadata(
  '/rate-card',
  'Rate Card — Starting Prices for Agencies | BBS',
  'Fixed starting prices for white-label web development, e-commerce, tracking setup, dev pods and maintenance. INR, GBP and USD.'
);

export default function RateCardPage() {
  return <RateCardClient />;
}

