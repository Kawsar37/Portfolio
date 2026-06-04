'use client';

import React, { useEffect, useState } from 'react';

export default function HeaderBanner() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // Calculate Dhaka time (GMT+6)
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const dhakaTime = new Date(utc + 3600000 * 6);
      
      const hours = String(dhakaTime.getHours()).padStart(2, '0');
      const minutes = String(dhakaTime.getMinutes()).padStart(2, '0');
      const seconds = String(dhakaTime.getSeconds()).padStart(2, '0');
      
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full hidden lg:flex items-center justify-between py-4 px-6 border-b border-border bg-background sticky top-0 z-30 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70 transition-colors">
      <div className="flex items-center space-x-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-semibold text-foreground tracking-wider uppercase bg-emerald-500/10 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 py-1 px-3.5 rounded-full border border-emerald-500/20">
          Available For Work
        </span>
      </div>
      
      <div className="flex items-center space-x-2 text-xs font-semibold text-text-muted bg-card-bg border border-card-border py-1.5 px-4 rounded-full">
        <span>Local Time ( Dhaka )</span>
        <span className="font-mono text-foreground font-bold">{time || '00:00:00'}</span>
      </div>
    </header>
  );
}
