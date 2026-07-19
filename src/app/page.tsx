import React from "react";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import HeaderBanner from "@/components/HeaderBanner";
import MobileNav from "@/components/MobileNav";
import MobileBottomNav from "@/components/MobileBottomNav";
import MobileBottomBar from "@/components/MobileBottomBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import SkillsAndCP from "@/components/SkillsAndCP";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background text-foreground transition-colors">
      {/* Mobile: Top bar — logo + theme toggle */}
      <MobileNav />

      {/* Desktop: Left sidebar — nav + theme */}
      <LeftSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col pt-14 lg:pt-0 lg:pl-20 lg:pr-20">
        <HeaderBanner />

        <main className="flex-1 w-full">
          <Hero />
          <Projects />
          <Experience />
          <SkillsAndCP />
          <Testimonials />
          <Blog />
          <Newsletter />
          <Contact />
        </main>

        {/* Mobile: Footer with time, socials, copyright */}
        <MobileBottomBar />
      </div>

      {/* Desktop: Right sidebar — social links */}
      <RightSidebar />

      {/* Mobile: Bottom tab bar */}
      <MobileBottomNav />
    </div>
  );
}
