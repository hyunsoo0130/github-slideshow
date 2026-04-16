'use client';

import { useEffect } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
}

// Replace data-ad-client with your actual AdSense publisher ID after approval
const AD_CLIENT = 'ca-pub-XXXXXXXXXXXXXXXXX';

export default function AdUnit({ slot, format = 'auto', className = '' }: AdUnitProps) {
  useEffect(() => {
    try {
      // @ts-expect-error adsbygoogle is injected by AdSense script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not yet loaded
    }
  }, []);

  // During development / before AdSense approval: show placeholder
  if (AD_CLIENT === 'ca-pub-XXXXXXXXXXXXXXXXX') {
    return (
      <div className={`bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm ${className}`}
        style={{ minHeight: format === 'horizontal' ? 90 : format === 'rectangle' ? 250 : 120 }}>
        Ad Placeholder
      </div>
    );
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
