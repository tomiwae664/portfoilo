import React from 'react';
import { PageView } from '../types';
import { InsightsSection } from '../components/InsightsSection';

interface InsightsPageProps {
  onNavigate: (page: PageView) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 min-h-screen bg-[#06050e] text-white">
      <InsightsSection onNavigate={onNavigate} />
    </div>
  );
};
