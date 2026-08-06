import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, X, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';

interface CareerRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<CareerRole | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const roles: CareerRole[] = [
    {
      id: 'ui-designer',
      title: 'Freelance UI/UX Designer (Figma Specialist)',
      department: 'Design',
      location: 'Remote Global',
      type: 'Project-Based Contract',
      summary: 'Collaborate on luxury brand websites, Figma auto-layout design systems, and responsive wireframes for corporate clients.',
      responsibilities: [
        'Design high-fidelity Figma web prototypes with auto-layout components.',
        'Create bespoke typographic scales, color tokens, and icon sets.',
        'Collaborate with Alexander Vance on client handoffs and interactive demos.'
      ],
      requirements: [
        '3+ years of professional web design experience in Figma.',
        'Strong portfolio showcasing modern typography and clean UI layouts.',
        'Knowledge of Web Content Accessibility Guidelines (WCAG).'
      ]
    },
    {
      id: 'wordpress-dev',
      title: 'Junior WordPress / PHP Developer',
      department: 'Engineering',
      location: 'Remote Global',
      type: 'Part-Time / Contract',
      summary: 'Assist in building custom Elementor widgets, Gutenberg blocks, and optimizing WordPress page load speeds.',
      responsibilities: [
        'Develop custom PHP block templates and ACF Pro flexible content fields.',
        'Perform PageSpeed optimization, WebP media encoding, and database cleanup.',
        'Assist in staging site deployments and client migration tasks.'
      ],
      requirements: [
        'Proficiency in PHP 8.x, HTML5, CSS3/Sass, and JavaScript (ES6+).',
        'Experience with WordPress theme structure, Elementor Pro, and ACF.',
        'Familiarity with Git and staging server workflows.'
      ]
    }
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playChime();
    setSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="pt-32 pb-24 bg-[var(--bg-main)] text-[var(--text-main)] relative z-10 min-h-screen transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 font-heading">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            • COLLABORATION OPPORTUNITIES •
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight mb-6">
            Work With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Alexander Vance.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-body">
            I regularly partner with talented freelance designers, motion artists, and WordPress developers on high-end client projects.
          </p>
        </div>

        {/* Job Openings Grid */}
        <div className="space-y-6 mb-20 font-body">
          {roles.map((job) => (
            <div
              key={job.id}
              className="bg-[var(--bg-surface)] p-8 rounded-3xl border border-[var(--border-color)] hover:border-blue-500/60 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xl"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2 font-mono">
                  <span className="text-xs font-bold text-cyan-300 bg-cyan-950 px-3 py-0.5 rounded-full border border-cyan-500/30">
                    {job.department}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    {job.location}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    {job.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2 font-heading">{job.title}</h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-2xl leading-relaxed">{job.summary}</p>
              </div>

              <button
                onClick={() => {
                  soundFx.playClick();
                  setSelectedJob(job);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 w-fit flex-shrink-0 font-heading"
              >
                <span>View Details & Apply</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-[var(--bg-surface)] border border-blue-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto shadow-2xl text-[var(--text-main)]">
            <button
              onClick={() => {
                setSelectedJob(null);
                setSubmitted(false);
              }}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-[var(--text-main)] flex items-center justify-center transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center space-y-4 font-body">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-main)] font-heading">Application Submitted!</h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Thank you <span className="text-blue-400 font-bold">{applicantName}</span>. Alexander Vance will review your portfolio and reach out to <span className="text-cyan-400 font-bold">{applicantEmail}</span> soon.
                </p>
                <button
                  onClick={() => {
                    setSelectedJob(null);
                    setSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-bold text-xs font-heading"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase">{selectedJob.department} • {selectedJob.location}</span>
                <h2 className="text-2xl font-bold text-[var(--text-main)] mb-4 font-heading">{selectedJob.title}</h2>

                <div className="space-y-4 text-xs text-[var(--text-muted)] mb-6 font-body">
                  <div>
                    <div className="font-bold text-[var(--text-main)] font-mono uppercase mb-2 font-heading">RESPONSIBILITIES:</div>
                    <ul className="space-y-1.5 list-disc list-inside">
                      {selectedJob.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                  </div>

                  <div>
                    <div className="font-bold text-[var(--text-main)] font-mono uppercase mb-2 font-heading">REQUIREMENTS:</div>
                    <ul className="space-y-1.5 list-disc list-inside">
                      {selectedJob.requirements.map((req, i) => <li key={i}>{req}</li>)}
                    </ul>
                  </div>
                </div>

                <form onSubmit={handleApply} className="space-y-3 pt-4 border-t border-[var(--border-color)] font-body">
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl px-4 py-2.5 text-xs text-[var(--text-main)] focus:outline-none focus:border-blue-400"
                  />
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl px-4 py-2.5 text-xs text-[var(--text-main)] focus:outline-none focus:border-blue-400"
                  />
                  <input
                    type="url"
                    required
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="Portfolio URL / GitHub / Dribbble Profile"
                    className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl px-4 py-2.5 text-xs text-[var(--text-main)] focus:outline-none focus:border-blue-400"
                  />

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 font-heading"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Partner Application</span>
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
