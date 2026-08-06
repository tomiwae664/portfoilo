import React from 'react';
import { PageView } from '../types';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';

interface ServicesPageProps {
  onNavigate: (page: PageView) => void;
  onOpenEstimator: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenEstimator }) => {
  return (
    <div className="pt-24 min-h-screen bg-[#06050e] text-white">
      <ServicesSection onNavigate={onNavigate} onOpenEstimator={onOpenEstimator} />
      <ProcessSection />
    </div>
  );
};
