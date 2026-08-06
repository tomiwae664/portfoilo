import React from 'react';
import { Project, PageView } from '../types';
import { FeaturedProjects } from '../components/FeaturedProjects';

interface ProjectsPageProps {
  onSelectProject: (project: Project) => void;
  onNavigate: (page: PageView) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onSelectProject, onNavigate }) => {
  return (
    <div className="pt-24 min-h-screen bg-[#06050e] text-white">
      <FeaturedProjects onSelectProject={onSelectProject} onNavigate={onNavigate} />
    </div>
  );
};
