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
        'Collaborate with Emmanuel on client handoffs and interactive demos.'
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
    <div className="pt-32 pb-24 bg-[#EDEDEE] text-[#0E1015] relative z-10 min-h-screen">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-[2px] h-3.5 bg-[#FF7A00]" />
            <span className="text-xs sm:text-sm font-semibold font-display tracking-tight text-[#FF7A00]">
              COLLABORATION OPPORTUNITIES
            </span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] tracking-[-0.038em] leading-[1.05] text-[#0E1015] mb-6 uppercase">
            Work With <br />
            <span className="text-[#FF7A00]">
              Emmanuel.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#5B606D] leading-relaxed font-display">
            I regularly partner with talented freelance designers, motion artists, and WordPress developers on high-end client projects.
          </p>
        </div>

        {/* Job Openings Grid */}
        <div className="space-y-6 mb-20">
          {roles.map((job) => (
            <div
              key={job.id}
              className="bg-white p-8 rounded-3xl border border-black/[0.08] hover:border-[#FF7A00]/50 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-[0_15px_35px_rgba(0,0,0,0.04)]"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2 font-mono">
                  <span className="text-xs font-bold text-[#FF7A00] bg-[#FF7A00]/10 px-3 py-0.5 rounded-full border border-[#FF7A00]/20">
                    {job.department}
                  </span>
                  <span className="text-xs text-[#5B606D] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FF7A00]" />
                    {job.location}
                  </span>
                  <span className="text-xs text-[#5B606D] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#FF7A00]" />
                    {job.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#0E1015] mb-2 font-display">{job.title}</h3>
                <p className="text-xs sm:text-sm text-[#5B606D] max-w-2xl leading-relaxed">{job.summary}</p>
              </div>

              <button
                onClick={() => {
                  soundFx.playClick();
                  setSelectedJob(job);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="px-6 py-3.5 rounded-full bg-[#0E1015] hover:bg-[#FF7A00] hover:text-[#0E1015] text-white font-bold text-xs flex items-center gap-2 w-fit shrink-0 font-display transition-colors cursor-pointer shadow-sm"
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
        <div className="fixed inset-0 z-[120] bg-black/50 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white border border-black/[0.08] rounded-3xl max-w-2xl w-full p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto shadow-2xl text-[#0E1015]">
            <button
              onClick={() => {
                setSelectedJob(null);
                setSubmitted(false);
              }}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#F5F6F8] hover:bg-[#0E1015] hover:text-white text-[#0E1015] flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#FF7A00]/20 rounded-full border border-[#FF7A00] text-[#FF7A00] flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#0E1015] font-display">Application Submitted!</h3>
                <p className="text-xs text-[#5B606D]">
                  Thank you <span className="text-[#FF7A00] font-bold">{applicantName}</span>. Emmanuel will review your portfolio and reach out to <span className="text-[#0E1015] font-bold">{applicantEmail}</span> soon.
                </p>
                <button
                  onClick={() => {
                    setSelectedJob(null);
                    setSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#FF7A00] text-[#0E1015] font-bold text-xs font-display cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <span className="text-xs font-mono font-bold text-[#FF7A00] uppercase">{selectedJob.department} • {selectedJob.location}</span>
                <h2 className="text-2xl font-bold text-[#0E1015] mb-4 font-display">{selectedJob.title}</h2>

                <div className="space-y-4 text-xs text-[#5B606D] mb-6 font-sans">
                  <div>
                    <div className="font-bold text-[#0E1015] font-mono uppercase mb-2 font-display">RESPONSIBILITIES:</div>
                    <ul className="space-y-1.5 list-disc list-inside">
                      {selectedJob.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                  </div>

                  <div>
                    <div className="font-bold text-[#0E1015] font-mono uppercase mb-2 font-display">REQUIREMENTS:</div>
                    <ul className="space-y-1.5 list-disc list-inside">
                      {selectedJob.requirements.map((req, i) => <li key={i}>{req}</li>)}
                    </ul>
                  </div>
                </div>

                <form onSubmit={handleApply} className="space-y-3 pt-4 border-t border-black/[0.08]">
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full bg-[#F5F6F8] border border-black/[0.08] rounded-xl px-4 py-2.5 text-xs text-[#0E1015] focus:outline-none focus:border-[#FF7A00]"
                  />
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full bg-[#F5F6F8] border border-black/[0.08] rounded-xl px-4 py-2.5 text-xs text-[#0E1015] focus:outline-none focus:border-[#FF7A00]"
                  />
                  <input
                    type="url"
                    required
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="Portfolio URL / GitHub / Dribbble Profile"
                    className="w-full bg-[#F5F6F8] border border-black/[0.08] rounded-xl px-4 py-2.5 text-xs text-[#0E1015] focus:outline-none focus:border-[#FF7A00]"
                  />

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#FF7A00] hover:bg-[#FF8F26] text-[#0E1015] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 font-display cursor-pointer shadow-md"
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
