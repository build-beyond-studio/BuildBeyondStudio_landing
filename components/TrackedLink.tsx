'use client';

import React from 'react';
import Link from 'next/link';

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  eventName: string;
  eventParams?: Record<string, any>;
}

export default function TrackedLink({
  href,
  eventName,
  eventParams,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams || {});
    }
    if (onClick) {
      onClick(e);
    }
  };

  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.includes('wa.me');

  if (isExternal) {
    return (
      <a href={href} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
