import React from 'react';
import { PageView } from '../types';
import { AboutSection } from './AboutSection';

interface AgencyIntroProps {
  onNavigate?: (page: PageView) => void;
}

export const AgencyIntro: React.FC<AgencyIntroProps> = () => {
  return <AboutSection />;
};

