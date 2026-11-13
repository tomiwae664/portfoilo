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
    <div className="pt-24 min-h-screen bg-[#EDEDEE] text-[#0E1015]">
      <ServicesSection onNavigate={onNavigate} onOpenEstimator={onOpenEstimator} />
      <ProcessSection />
    </div>
  );
};
