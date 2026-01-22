import React from 'react';
import HeroSection from '@/components/portfolio/HeroSection';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1F1F1F] text-white">
      <HeroSection />
      <Footer />
    </div>
  );
}