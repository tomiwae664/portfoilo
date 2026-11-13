import React, { useState } from 'react';
import { PageView, Project } from './types';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { FullscreenMenu } from './components/FullscreenMenu';
import { Hero } from './components/Hero';
import { ClientMarquee } from './components/ClientMarquee';
import { IntroductionSection } from './components/IntroductionSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { KeyFactsSection } from './components/KeyFactsSection';
import { PartnersSection } from './components/PartnersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Pages
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

// Modals
import { CaseStudyModal } from './components/CaseStudyModal';
import { ProjectEstimator } from './components/ProjectEstimator';
import { AIAssistantModal } from './components/AIAssistantModal';
import { LiveSearchGroundingRadar } from './components/LiveSearchGroundingRadar';
import { CurrencyProvider } from './context/CurrencyContext';
import { Sparkles } from 'lucide-react';
import { soundFx } from './utils/audio';

export function App() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const handleNavigate = (page: PageView) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CurrencyProvider>
      <div className="bg-[#EDEDEE] text-[#0E1015] min-h-screen selection:bg-[#FF7A00] selection:text-white font-sans antialiased overflow-x-hidden">
        
        {/* Custom Interactive Magnet Cursor */}
        <CustomCursor />

        {/* Global Minimal Glass Navbar */}
        <Navbar
          activePage={activePage}
          onNavigate={handleNavigate}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
          onOpenAI={() => setIsAssistantOpen(true)}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

      {/* Fullscreen Navigation Overlay */}
      <FullscreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
        onOpenAI={() => setIsAssistantOpen(true)}
      />

      {/* View Router */}
      <main className="relative z-10">
        {activePage === 'home' && (
          <>
            {/* Hero Section */}
            <Hero
              onNavigate={handleNavigate}
              onOpenEstimator={() => setIsEstimatorOpen(true)}
            />

            {/* Prestige Client Roster & Marquee */}
            <ClientMarquee />

            {/* Creative Direction & Philosophy */}
            <IntroductionSection onNavigate={handleNavigate} />

            {/* SECTION 02 — ABOUT EMMANUEL */}
            <AboutSection
              onNavigate={handleNavigate}
              onOpenEstimator={() => setIsEstimatorOpen(true)}
            />

            {/* SECTION 03 — SERVICES & CAPABILITIES */}
            <ServicesSection
              onNavigate={handleNavigate}
              onOpenEstimator={() => setIsEstimatorOpen(true)}
            />

            {/* SECTION 04 — CURATED PROJECTS */}
            <div id="selected-work">
              <FeaturedProjects
                onSelectProject={(project) => setSelectedCaseStudy(project)}
                onNavigate={handleNavigate}
                limit={6}
              />
            </div>

            {/* SECTION 05 — REAL-TIME GOOGLE SEARCH GROUNDING RADAR */}
            <LiveSearchGroundingRadar />

            {/* SECTION 06 — KEY FACTS & RESULTS */}
            <KeyFactsSection
              onOpenEstimator={() => setIsEstimatorOpen(true)}
            />

            {/* SECTION 07 — PARTNERS & CLIENTS */}
            <PartnersSection />

            {/* SECTION 08 — CLIENT TESTIMONIALS */}
            <TestimonialsSection />

            {/* SECTION 09 — PRODUCTION PROCESS */}
            <ProcessSection />

            {/* SECTION 10 — FAQS */}
            <FAQSection />

            {/* SECTION 11 — CONTACT & BUSINESS ENQUIRY */}
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

        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Global Minimal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Case Study Drawer Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Interactive Scope Estimator */}
      <ProjectEstimator
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
      />

      {/* AI Assistant Modal with Google Search Grounding */}
      <AIAssistantModal
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
      />

      {/* Floating Action Button for Live AI & Search Radar */}
      <button
        id="floating-ai-radar-btn"
        onClick={() => {
          soundFx.playClick();
          setIsAssistantOpen(true);
        }}
        className="fixed bottom-6 right-6 z-40 bg-[#0E1015] hover:bg-[#FF7A00] text-white hover:text-[#0E1015] px-4 py-3 rounded-full border border-white/10 shadow-2xl flex items-center gap-2.5 transition-all duration-300 group cursor-pointer hover:scale-105"
        title="Ask AI & Real-Time Google Search Radar"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="text-xs font-bold font-display tracking-wide">Live Web Radar</span>
        <Sparkles className="w-3.5 h-3.5 text-[#FF7A00] group-hover:text-[#0E1015]" />
      </button>

      </div>
    </CurrencyProvider>
  );
}

export default App;
