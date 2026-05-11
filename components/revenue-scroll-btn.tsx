'use client';

export default function RevenueScrollBtn({ label = 'See Revenue Model', variant = 'outline' }: { label?: string; variant?: 'outline' | 'solid' }) {
  const scroll = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('revenue')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (variant === 'solid') {
    return (
      <a
        href="#revenue"
        onClick={scroll}
        className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-bold text-sm transition-all"
        style={{
          background: 'linear-gradient(135deg, #A06A00 0%, #C8860A 55%, #E8A020 100%)',
          color: '#fff',
          boxShadow: '0 4px 20px rgba(200,134,10,0.35), 0 0 0 3px rgba(200,134,10,0.12)',
          letterSpacing: '-0.01em',
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
        {label}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>
    );
  }

  return (
    <>
      <style>{`
        @keyframes revenuePulse {
          0%,100% { box-shadow: 0 0 0 4px rgba(200,134,10,0.10), 0 4px 20px rgba(200,134,10,0.15); }
          50%      { box-shadow: 0 0 0 8px rgba(200,134,10,0.06), 0 4px 28px rgba(200,134,10,0.22); }
        }
      `}</style>
      <a
        href="#revenue"
        onClick={scroll}
        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base transition-all"
        style={{
          background: '#fff',
          border: '2px solid rgba(200,134,10,0.45)',
          color: '#C8860A',
          boxShadow: '0 0 0 4px rgba(200,134,10,0.10), 0 4px 20px rgba(200,134,10,0.15)',
          animation: 'revenuePulse 2.8s ease-in-out infinite',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
        {label}
      </a>
    </>
  );
}
