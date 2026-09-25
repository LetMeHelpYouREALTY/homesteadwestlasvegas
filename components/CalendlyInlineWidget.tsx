'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { CALENDLY_GENERAL_URL, CALENDLY_SCRIPT_URL } from '@/lib/calendly';

type CalendlyInlineWidgetProps = {
  url?: string;
  height?: string;
  minWidth?: string;
  className?: string;
  title?: string;
};

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

export default function CalendlyInlineWidget({
  url = CALENDLY_GENERAL_URL,
  height = '700px',
  minWidth = '320px',
  className = '',
  title = 'Schedule time with Dr. Jan Duffy',
}: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Calendly) setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || !containerRef.current || initializedRef.current) return;

    const parent = containerRef.current;
    parent.innerHTML = '';

    try {
      window.Calendly?.initInlineWidget({ url, parentElement: parent });
      initializedRef.current = true;
    } catch (error) {
      console.error('[Calendly] Inline widget init failed:', error);
    }
  }, [ready, url]);

  return (
    <>
      <Script
        src={CALENDLY_SCRIPT_URL}
        strategy="lazyOnload"
        onReady={() => setReady(true)}
      />
      <div
        className={`calendly-inline-widget rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm relative ${className}`}
        style={{ minWidth, height }}
        aria-label={title}
      >
        <div ref={containerRef} className="h-full w-full" />
        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center bg-white text-gray-500 text-sm p-6">
            Loading scheduling calendar…
          </div>
        )}
      </div>
    </>
  );
}
