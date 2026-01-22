import React from 'react';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import Footer from '@/components/portfolio/Footer';

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#1F1F1F] text-white pt-20">
      <ProjectsSection />
      <Footer />
    </div>
  );
}