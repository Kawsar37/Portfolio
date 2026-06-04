import React from 'react';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import HeaderBanner from '@/components/HeaderBanner';
import MobileNav from '@/components/MobileNav';
import MobileBottomBar from '@/components/MobileBottomBar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import SkillsAndCP from '@/components/SkillsAndCP';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background text-foreground transition-colors">
      {/* Mobile: Top navigation bar (hidden on lg+) */}
      <MobileNav />

      {/* Desktop: Persistent Left Navigation Sidebar (hidden on mobile) */}
      <LeftSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col pt-14 lg:pt-0 lg:pl-20 lg:pr-20">
        {/* Desktop: Top Status Header with dynamic Clock (hidden on mobile) */}
        <HeaderBanner />

        {/* Scrollable page sections */}
        <main className="flex-1 w-full">
          <Hero />
          <Projects />
          <SkillsAndCP />
          <Contact />
        </main>

        {/* Mobile: Bottom bar with time + socials (hidden on lg+) */}
        <MobileBottomBar />
      </div>

      {/* Desktop: Persistent Right Social Dock (hidden on mobile) */}
      <RightSidebar />
    </div>
  );
}
