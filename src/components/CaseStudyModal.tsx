import React, { useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, ArrowUpRight, CheckCircle2, ZoomIn, Eye } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onNextProject?: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose
}) => {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  if (!project) return null;

  const gallery = project.galleryImages && project.galleryImages.length > 0
    ? project.galleryImages
    : [];

  return (
    <div className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      <div className="bg-white border border-black/[0.08] rounded-3xl max-w-5xl w-full p-6 sm:p-12 relative max-h-[94vh] overflow-y-auto shadow-2xl text-[#0E1015]">
        
        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="sticky top-0 right-0 ml-auto w-10 h-10 rounded-full bg-[#F5F6F8] hover:bg-[#0E1015] hover:text-white text-[#0E1015] flex items-center justify-center transition-all z-30 cursor-pointer shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header */}
        <div className="-mt-8 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-3 font-mono">
            <span className="text-xs font-bold text-[#FF7A00] bg-[#FF7A00]/10 px-3.5 py-1 rounded-full border border-[#FF7A00]/30 uppercase">
              {project.categoryLabel || project.category}
            </span>
            <span className="text-xs text-[#5B606D]">{project.client} • {project.year}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-[#0E1015] uppercase tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#5B606D] max-w-3xl leading-relaxed">
            {project.subtitle || project.description}
          </p>
        </div>

        {/* Main Banner Image in Browser Frame */}
        <div className="rounded-2xl overflow-hidden border border-black/[0.08] mb-10 shadow-lg bg-[#F5F6F8]">
          <div className="h-9 px-4 bg-[#EDEDEE] border-b border-black/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-black/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-black/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-black/20" />
            </div>
            <div className="text-[11px] font-mono text-[#5B606D] truncate max-w-[280px]">
              {project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.edu
            </div>
            <span className="text-[10px] font-mono font-bold text-[#FF7A00] tracking-wider uppercase">
              PRIMARY MOCKUP
            </span>
          </div>

          <div
            onClick={() => {
              soundFx.playClick();
              setZoomImage(project.image);
            }}
            className="group relative cursor-zoom-in overflow-hidden bg-[#EDEDEE]"
          >
            <img
              src={project.image}
              alt={`${project.title} Primary Mockup`}
              referrerPolicy="no-referrer"
              className="w-full object-cover max-h-[540px] transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="px-4 py-2 rounded-full bg-[#0E1015]/90 text-white text-xs font-mono font-bold flex items-center gap-2 shadow-lg backdrop-blur-sm">
                <ZoomIn className="w-4 h-4 text-[#FF7A00]" />
                <span>Click to View Full Size</span>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics Grid */}
        {project.impactMetrics && project.impactMetrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 p-6 rounded-2xl bg-[#F5F6F8] border border-black/[0.06] text-center">
            {project.impactMetrics.map((m, idx) => (
              <div key={idx}>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#FF7A00] font-display">
                  {m.value}
                </div>
                <div className="text-xs font-mono text-[#5B606D] uppercase tracking-wider mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Challenge & Solution Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#F5F6F8] p-8 rounded-2xl border border-black/[0.06] space-y-3">
            <h3 className="text-sm font-bold text-[#FF7A00] uppercase font-mono tracking-widest">THE CHALLENGE</h3>
            <p className="text-sm text-[#5B606D] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="bg-[#F5F6F8] p-8 rounded-2xl border border-black/[0.06] space-y-3">
            <h3 className="text-sm font-bold text-[#FF7A00] uppercase font-mono tracking-widest">DESIGN & WORDPRESS ARCHITECTURE</h3>
            <p className="text-sm text-[#5B606D] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* ADDITIONAL INTERFACE PREVIEWS Gallery Showcase */}
        {gallery.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
              <div>
                <h3 className="text-xs font-mono font-bold text-[#FF7A00] uppercase tracking-widest flex items-center gap-2">
                  <span>ADDITIONAL INTERFACE PREVIEWS</span>
                  <span className="text-[10px] text-[#5B606D] font-normal">({gallery.length} Screens)</span>
                </h3>
                <p className="text-xs text-[#5B606D] font-sans mt-0.5">
                  Click any screen mockup below to inspect high-resolution details
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-[#5B606D] bg-[#F5F6F8] px-3 py-1 rounded-full border border-black/[0.06]">
                <Eye className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>Interactive Lightbox Ready</span>
              </div>
            </div>

            <div className={`grid grid-cols-1 ${gallery.length === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2'} gap-4 sm:gap-5`}>
              {gallery.map((imgUrl, i) => (
                <div
                  key={i}
                  onClick={() => {
                    soundFx.playClick();
                    setZoomImage(imgUrl);
                  }}
                  className="group relative aspect-[16/11] rounded-2xl overflow-hidden border border-black/[0.08] hover:border-[#FF7A00]/60 bg-[#F5F6F8] shadow-sm hover:shadow-xl transition-all duration-300 cursor-zoom-in"
                >
                  <img
                    src={imgUrl}
                    alt={`${project.title} Interface Preview ${i + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                    <div className="flex justify-end">
                      <span className="w-7 h-7 rounded-full bg-white/90 text-[#0E1015] flex items-center justify-center shadow-md">
                        <ZoomIn className="w-3.5 h-3.5 text-[#FF7A00]" />
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-white bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-sm inline-block">
                        Interface Screen {i + 1}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Client Testimonial */}
        {project.testimonial && (
          <div className="bg-[#F5F6F8] p-8 rounded-2xl border border-[#FF7A00]/30 mb-10 shadow-md">
            <p className="text-sm sm:text-base text-[#0E1015] italic mb-6">
              "{project.testimonial.quote}"
            </p>
            <div>
              <div className="text-sm font-bold text-[#FF7A00] font-display">{project.testimonial.author}</div>
              <div className="text-xs text-[#5B606D] font-mono">{project.testimonial.role}</div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-8 border-t border-black/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full bg-[#F5F6F8] text-[#5B606D] border border-black/[0.06]">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 font-display">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-[#FF7A00] hover:bg-[#FF8F26] text-[#0E1015] font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all shadow-md"
              >
                <span>Live Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="px-6 py-3 rounded-full border border-black/20 text-[#0E1015] hover:border-[#FF7A00] hover:text-[#FF7A00] font-bold text-xs uppercase tracking-wider cursor-pointer transition-all"
            >
              Close
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox High-Resolution Zoom Modal */}
      {zoomImage && (
        <div
          onClick={() => setZoomImage(null)}
          className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 cursor-zoom-out animate-in fade-in duration-200"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              soundFx.playClick();
              setZoomImage(null);
            }}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#0E1015] flex items-center justify-center transition-all cursor-pointer shadow-lg z-10"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#0E1015] cursor-default"
          >
            <img
              src={zoomImage}
              alt="High Resolution Interface Preview"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};
