import React, { useState, useEffect } from 'react';
import { PageView, Project } from './types';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { FullscreenMenu } from './components/FullscreenMenu';
import { Hero } from './components/Hero';
import { ClientMarquee } from './components/ClientMarquee';
import { AgencyIntro } from './components/AgencyIntro';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { AwardsSection } from './components/AwardsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TechPedestal } from './components/TechPedestal';
import { InsightsSection } from './components/InsightsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Pages
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { InsightsPage } from './pages/InsightsPage';
import { CareersPage } from './pages/CareersPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

// Modals
import { CaseStudyModal } from './components/CaseStudyModal';
import { ProjectEstimator } from './components/ProjectEstimator';
import { AIAssistantModal } from './components/AIAssistantModal';

export function App() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);

  // Scroll to top on page change
  const handleNavigate = (page: PageView) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#06050e] text-white min-h-screen selection:bg-purple-500 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Custom Interactive Magnet Cursor */}
      <CustomCursor />

      {/* Global Glass Navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenAI={() => setIsAIOpen(true)}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Fullscreen Navigation Overlay */}
      <FullscreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
        onOpenAI={() => setIsAIOpen(true)}
      />

      {/* View Router */}
      <main className="relative z-10">
        {activePage === 'home' && (
          <>
            <Hero
              onNavigate={handleNavigate}
              onOpenEstimator={() => setIsEstimatorOpen(true)}
            />
            <ClientMarquee />
            <AgencyIntro onNavigate={handleNavigate} />
            <FeaturedProjects
              onSelectProject={(project) => setSelectedCaseStudy(project)}
              onNavigate={handleNavigate}
              limit={4}
            />
            <ServicesSection
              onNavigate={handleNavigate}
              onOpenEstimator={() => setIsEstimatorOpen(true)}
            />
            <ProcessSection />
            <AwardsSection />
            <TestimonialsSection />
            <TechPedestal />
            <InsightsSection onNavigate={handleNavigate} limit={3} />
            <ContactSection />
          </>
        )}

        {activePage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {activePage === 'projects' && (
          <ProjectsPage
            onSelectProject={(project) => setSelectedCaseStudy(project)}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'insights' && (
          <InsightsPage onNavigate={handleNavigate} />
        )}

        {activePage === 'careers' && <CareersPage />}

        {activePage === 'pricing' && (
          <PricingPage
            onNavigate={handleNavigate}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {activePage === 'contact' && <ContactPage />}

        {activePage === 'privacy' && <PrivacyPage onNavigate={handleNavigate} />}

        {activePage === 'terms' && <TermsPage />}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Case Study Drawer Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Interactive Scope & Budget Estimator */}
      <ProjectEstimator
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
      />

      {/* NEXORA AI Assistant Modal */}
      <AIAssistantModal
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
      />

    </div>
  );
}

export default App;
