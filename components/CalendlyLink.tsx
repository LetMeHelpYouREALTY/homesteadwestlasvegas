'use client';

import { useCallback } from 'react';
import { CALENDLY_GENERAL_URL, CALENDLY_SCRIPT_URL, CALENDLY_STYLES_URL } from '@/lib/calendly';

function loadCalendly(): Promise<void> {
  const w = typeof window === 'undefined' ? null : (window as Window & { Calendly?: { initPopupWidget: (opts: { url: string }) => void } });
  if (w?.Calendly) return Promise.resolve();

  return new Promise((resolve) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = CALENDLY_STYLES_URL;
    link.media = 'print';
    link.onload = () => { link.media = 'all'; };
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = CALENDLY_SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.body.appendChild(script);
  });
}

type CalendlyLinkProps = {
  url?: string;
  text?: string;
  className?: string;
};

export default function CalendlyLink({
  url = CALENDLY_GENERAL_URL,
  text = 'Have a Question? Talk to a New Construction Homes Specialist',
  className,
}: CalendlyLinkProps) {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    loadCalendly().then(() => {
      const w = (window as Window & { Calendly?: { initPopupWidget: (opts: { url: string }) => void } });
      if (w.Calendly) {
        w.Calendly.initPopupWidget({ url });
      } else {
        window.open(url, '_blank');
      }
    });
    return false;
  }, [url]);

  return (
    <a
      href={url}
      onClick={handleClick}
      className={
        className ??
        'inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-75 will-change-[background-color]'
      }
    >
      {text}
    </a>
  );
}
