import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { GallerySection } from './components/sections/GallerySection';
import { HobbiesSection } from './components/sections/HobbiesSection';
import { ContactFooterSection } from './components/sections/ContactFooterSection';
import { SubmissionModal } from './components/common/SubmissionModal';

export const AppContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#FAFAFA] dark:bg-[#0A0A0A] text-[#0F172A] dark:text-[#F3F4F6] font-sans min-h-screen w-full relative selection:bg-emerald-500/25 selection:text-emerald-950 dark:selection:bg-emerald-500/30 dark:selection:text-emerald-100 overflow-x-clip transition-colors duration-200">
      {/* 1. Floating Editorial Navbar */}
      <Navbar onOpenAcademicModal={() => setIsModalOpen(true)} />

      <main className="w-full">
        {/* 2. Hero Section: Editorial Headline & Identity Card */}
        <HeroSection onOpenAcademicModal={() => setIsModalOpen(true)} />

        {/* 3. About Me Section: Asymmetrical Bento Grid & Philosophy */}
        <AboutSection />

        {/* 4. Skills & Tech Stack Section: Smart Logistics & IT Ecosystem */}
        <SkillsSection />

        {/* 5. Personal Photo Gallery Section: Real Life Moments & Story */}
        <GallerySection />

        {/* 6. Hobbies & Interests Section: Badminton, Camping/Fishing, Gaming, Vietnamese Music */}
        <HobbiesSection />

        {/* 7. Contact & Footer Section */}
        <ContactFooterSection onOpenAcademicModal={() => setIsModalOpen(true)} />
      </main>

      {/* Academic Submission Verification Modal */}
      <SubmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
