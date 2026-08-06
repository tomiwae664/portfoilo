import React, { useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onNextProject?: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onNextProject
}) => {
  if (!project) return null;

  const gallery = project.galleryImages && project.galleryImages.length > 0
    ? project.galleryImages
    : [project.image];

  return (
    <div className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      <div className="bg-[var(--bg-surface)] border border-blue-500/40 rounded-3xl max-w-5xl w-full p-6 sm:p-12 relative max-h-[94vh] overflow-y-auto shadow-2xl text-[var(--text-main)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 right-0 ml-auto w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-[var(--text-main)] flex items-center justify-center transition-all z-30"
          data-cursor="hover"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header */}
        <div className="-mt-10 mb-8 font-heading">
          <div className="flex flex-wrap items-center gap-3 mb-3 font-mono">
            <span className="text-xs font-bold text-cyan-300 bg-cyan-950 px-3.5 py-1 rounded-full border border-cyan-500/30">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-blue-400">{project.client} • {project.year}</span>
            {project.award && (
              <span className="text-xs font-bold text-blue-200 bg-blue-950 px-3.5 py-1 rounded-full border border-blue-400/40 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                {project.award}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-[var(--text-muted)] max-w-3xl leading-relaxed font-body">
            {project.subtitle}
          </p>
        </div>

        {/* Main Banner Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-blue-500/30 mb-10 shadow-2xl">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent" />
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 p-6 rounded-3xl bg-[var(--bg-main)] border border-[var(--border-color)] text-center">
          {project.impactMetrics.map((m, idx) => (
            <div key={idx}>
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 font-mono">
                {m.value}
              </div>
              <div className="text-xs text-[var(--text-muted)] font-body mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Challenge & Solution Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 font-body">
          <div className="bg-[var(--bg-main)] p-8 rounded-3xl border border-[var(--border-color)]">
            <h3 className="text-lg font-bold text-indigo-400 mb-3 font-mono">THE CHALLENGE</h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="bg-[var(--bg-main)] p-8 rounded-3xl border border-[var(--border-color)]">
            <h3 className="text-lg font-bold text-cyan-400 mb-3 font-mono font-heading">THE DESIGN & TECH SOLUTION</h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Gallery Showcase */}
        {gallery.length > 1 && (
          <div className="mb-12">
            <h3 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-4 font-heading">
              VISUAL GALLERY & INTERFACE PREVIEWS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gallery.map((imgUrl, i) => (
                <div key={i} className="aspect-[16/10] rounded-2xl overflow-hidden border border-[var(--border-color)]">
                  <img src={imgUrl} alt="Preview" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Client Testimonial */}
        {project.testimonial && (
          <div className="bg-gradient-to-r from-blue-950/60 to-indigo-950/60 p-8 rounded-3xl border border-blue-500/40 mb-10 shadow-xl font-body">
            <p className="text-sm sm:text-base text-gray-200 italic mb-6">
              "{project.testimonial.quote}"
            </p>
            <div>
              <div className="text-sm font-bold text-white font-heading">{project.testimonial.author}</div>
              <div className="text-xs text-blue-300 font-mono">{project.testimonial.role}</div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-8 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-4 font-heading">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full bg-[var(--bg-main)] text-blue-400 border border-[var(--border-color)]">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-2"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
            >
              Close Case Study
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
