import React from 'react';
import { PageView } from '../types';
import { InsightsSection } from '../components/InsightsSection';

interface InsightsPageProps {
  onNavigate: (page: PageView) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 min-h-screen bg-[#EDEDEE] text-[#0E1015]">
      <InsightsSection onNavigate={onNavigate} />
    </div>
  );
};
