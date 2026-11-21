import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5F2EC] px-6 text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#C8860A]">404</p>
      <h1 className="mb-4 text-3xl font-bold text-black">Page not found</h1>
      <p className="mb-8 max-w-lg text-gray-600">
        The page may have moved or the address may be incorrect.
      </p>
      <Link href="/" className="font-semibold text-[#A06A00] underline">
        Return to the homepage
      </Link>
    </main>
  );
}
