// Sure, here's the contents of the file: /portfolio-website/portfolio-website/src/App.tsx

import React from 'react';
import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

const App: React.FC = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default App;