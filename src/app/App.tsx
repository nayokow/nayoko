import { useState, useEffect } from 'react';
import {
  profile,
  stats,
  operated,
  backed,
  experience,
  advisory,
  education,
  lenses,
  autonomyLadder,
  offerings,
  talks,
  essays,
} from './content';

const heroImage = '/images/hero-portrait.png';
const speakingImage1 = '/images/speaking-1.jpg';
const speakingImage2 = '/images/speaking-2.jpg';
const speakingImage3 = '/images/speaking-3.jpg';
const speakingWorkshop = '/images/speaking-workshop.jpg';
const speakingPlugAndPlay = '/images/speaking-plugandplay.jpg';
const speakingLiputan6 = '/images/speaking-liputan6.jpg';
const podcastImage = '/images/podcast-feature.jpg';
const nwLogo = '/images/nw-logo.svg';
const prestigeArticle = '/images/article-prestige.jpg';
const businessArticle = '/images/article-business.jpeg';
const indonesiaArticle = '/images/article-indonesia.jpg';
const magazineArticle = '/images/article-magazine.jpeg';
const marketeersArticle = '/images/article-marketeers.jpg';
const teamAlgoritma = '/images/team-algoritma.jpeg';

const inter = 'Inter, sans-serif';
const mono = 'Roboto Mono, monospace';

const sectionHeading = {
  fontFamily: inter,
  fontWeight: 800,
  fontSize: 'clamp(1.5rem, 4vw, 3rem)',
};

const eyebrow = {
  fontFamily: mono,
  fontSize: '0.75rem',
  fontWeight: 400,
  letterSpacing: '0.1em',
};

const navItems = [
  { id: 'track-record', label: 'Track Record' },
  { id: 'experience', label: 'Experience' },
  { id: 'training', label: 'Training' },
  { id: 'writing', label: 'Writing' },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#130200] to-[#000000] text-white overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>
      {/* TOP NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={nwLogo} alt="NW" className="h-16 w-16" />
            <span className="hidden sm:block text-white/80 text-sm" style={{ fontFamily: inter, fontWeight: 600, letterSpacing: '0.02em' }}>
              {profile.name}
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white/60 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white/60 hover:text-white transition-colors duration-300 text-sm bg-transparent border-none cursor-pointer"
                style={{ fontFamily: inter, fontWeight: 500, letterSpacing: '0.02em' }}
              >
                {item.label}
              </button>
            ))}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
              style={{ fontFamily: inter, fontWeight: 500, letterSpacing: '0.02em' }}
            >
              LinkedIn
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="text-[#E70100] hover:text-white transition-colors duration-300 text-sm bg-transparent border-none cursor-pointer"
              style={{ fontFamily: inter, fontWeight: 600, letterSpacing: '0.02em' }}
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md px-6 py-6 flex flex-col gap-6">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-white/60 hover:text-white text-sm text-left bg-transparent border-none cursor-pointer" style={{ fontFamily: inter, fontWeight: 500 }}>{item.label}</button>
            ))}
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm" style={{ fontFamily: inter, fontWeight: 500 }}>LinkedIn</a>
            <button onClick={() => scrollTo('contact')} className="text-[#E70100] hover:text-white text-sm text-left bg-transparent border-none cursor-pointer" style={{ fontFamily: inter, fontWeight: 600 }}>Contact</button>
          </div>
        )}
      </nav>

      {/* SECTION 01: HERO */}
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-20 pt-32 relative">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[#E70100] uppercase mb-6" style={eyebrow}>
              {profile.name} &mdash; {profile.headline}
            </div>

            <h1
              className="uppercase tracking-[-0.03em] mb-6"
              style={{
                fontFamily: inter,
                fontWeight: 800,
                fontSize: 'clamp(2rem, 5.5vw, 3.75rem)',
                lineHeight: '1.1'
              }}
            >
              Intelligence is abundant.<br />Judgment is not.
            </h1>

            <p className="text-white/90 mb-4 max-w-4xl" style={{ fontFamily: inter, fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: '1.6' }}>
              I build businesses from zero in new markets. Chief Commercial Officer at ArcFusion.ai.
              Co-founded and scaled Algoritma to exit. Launched Plug and Play in Indonesia.
              Early investor in Ajaib &amp; Bukalapak.
            </p>
            <p className="text-white/60 mb-10 max-w-4xl" style={{ fontFamily: inter, fontSize: 'clamp(0.9375rem, 1.6vw, 1.0625rem)', lineHeight: '1.7' }}>
              I also speak and teach on how organisations redesign their decisions, skills and workflows
              as AI becomes infrastructure.
            </p>

            <button
              className="border border-[#E70100] bg-transparent text-white px-12 py-4 uppercase tracking-wide hover:bg-[#E70100]/10 transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: inter, fontWeight: 800, fontSize: '0.875rem', borderRadius: '0px' }}
              onClick={() => scrollTo('contact')}
            >
              Start a conversation
            </button>

            <div className="mt-16 text-white/40 text-xs uppercase" style={eyebrow}>
              {profile.base} &bull; {profile.tenure}
            </div>
          </div>

          {/* Hero Portrait Image */}
          <div className="relative">
            <div className="border border-white p-1">
              <img
                src={heroImage}
                alt={profile.name}
                className="w-full h-auto"
                loading="eager"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 border border-[#E70100] bg-black px-6 py-3 uppercase"
              style={{ fontFamily: mono, fontSize: '0.75rem', letterSpacing: '0.05em' }}
            >
              {profile.name}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: TRACK RECORD */}
      <section id="track-record" className="px-6 md:px-12 lg:px-24 py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="uppercase tracking-[-0.03em] mb-20" style={sectionHeading}>
            Track Record
          </h2>

          {/* Data Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {stats.map((item) => (
              <div key={item.label} className="border-l-2 border-[#E70100] pl-6">
                <div
                  className="text-white mb-3"
                  style={{ fontFamily: inter, fontSize: '2.5rem', fontWeight: 700, lineHeight: '1' }}
                >
                  {item.value}
                </div>
                <div
                  className="text-white/60"
                  style={{ fontFamily: mono, fontSize: '0.875rem', fontWeight: 400, letterSpacing: '0.05em' }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Name Strips */}
          <div className="space-y-6">
            {[
              { label: 'Operated', names: operated },
              { label: 'Backed', names: backed },
            ].map((row) => (
              <div key={row.label} className="flex flex-col md:flex-row md:items-center gap-3 md:gap-12">
                <div className="text-[#E70100] uppercase w-28 shrink-0" style={eyebrow}>{row.label}</div>
                <div className="flex flex-wrap items-center gap-x-10 gap-y-3 opacity-40">
                  {row.names.map((name) => (
                    <div
                      key={name}
                      className="text-white/80 uppercase"
                      style={{ fontFamily: inter, fontWeight: 600, fontSize: '1.0625rem', letterSpacing: '0.05em' }}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03: EXPERIENCE */}
      <section id="experience" className="px-6 md:px-12 lg:px-24 py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="uppercase tracking-[-0.03em] mb-20" style={sectionHeading}>
            Experience
          </h2>

          <div className="border-t border-white/10">
            {experience.map((job) => (
              <div key={job.period + job.org} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-white/10">
                <div className="md:col-span-3 text-white/50 uppercase" style={eyebrow}>
                  {job.period}
                </div>
                <div className="md:col-span-9">
                  <div className="mb-3" style={{ fontFamily: inter, fontSize: '1.25rem', fontWeight: 700, lineHeight: '1.3' }}>
                    {job.role} <span className="text-[#E70100]">&middot;</span> <span className="text-white/80">{job.org}</span>
                  </div>
                  <p className="text-white/50 mb-3 max-w-3xl" style={{ fontFamily: inter, fontSize: '0.9375rem', lineHeight: '1.7', fontStyle: 'italic' }}>
                    {job.context}
                  </p>
                  {job.detail && (
                    <p className="text-white/75 max-w-3xl" style={{ fontFamily: inter, fontSize: '0.9375rem', lineHeight: '1.7' }}>
                      {job.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {[
              { label: 'Advisory & Investing', text: advisory },
              { label: 'Education', text: education },
            ].map((block) => (
              <div key={block.label} className="border-l-2 border-[#E70100] pl-6">
                <div className="text-white/50 uppercase mb-3" style={eyebrow}>{block.label}</div>
                <p className="text-white/75" style={{ fontFamily: inter, fontSize: '0.9375rem', lineHeight: '1.7' }}>{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: EXECUTIVE EDUCATION */}
      <section id="training" className="px-6 md:px-12 lg:px-24 py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="uppercase tracking-[-0.03em] mb-6" style={sectionHeading}>
            Executive Education
          </h2>
          <div className="text-white/50 uppercase mb-16" style={eyebrow}>
            AI training for leadership teams &bull; Speaking
          </div>

          {/* Thesis */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
            <div className="lg:col-span-5">
              <div className="text-[#E70100] uppercase mb-4" style={eyebrow}>The thesis</div>
              <p className="text-white" style={{ fontFamily: inter, fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)', fontWeight: 600, lineHeight: '1.4' }}>
                AI programmes rarely fail on the model. They fail on the system around it.
              </p>
            </div>
            <div className="lg:col-span-7 text-white/70 space-y-5" style={{ fontFamily: inter, fontSize: '1rem', lineHeight: '1.8' }}>
              <p>
                Workflows were designed for a world where intelligence was scarce. Incentives still reward
                the old behaviour. People are asked to adopt tools without being given new roles.
                Adding a model to that system produces demos, not transformation.
              </p>
              <p>
                I teach the three layers together, because they move together. Agents change workflows,
                workflows change roles, roles change the skills you need, and skills decide how much
                autonomy you can safely hand to agents. Transformation moves at the speed of its slowest layer.
              </p>
            </div>
          </div>

          {/* Three Lenses */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-6">
            {lenses.map((lens) => (
              <div key={lens.name} className="bg-black p-8">
                <div className="text-white/40 mb-6" style={eyebrow}>{lens.index}</div>
                <h3 className="uppercase mb-2 text-[#E70100]" style={{ fontFamily: inter, fontWeight: 700, fontSize: '1rem', letterSpacing: '0.05em' }}>
                  {lens.name}
                </h3>
                <div className="text-white mb-4" style={{ fontFamily: inter, fontSize: '1.0625rem', fontWeight: 600 }}>
                  {lens.question}
                </div>
                <p className="text-white/65" style={{ fontFamily: inter, fontSize: '0.9375rem', lineHeight: '1.7' }}>
                  {lens.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-white/40 uppercase mb-24 text-center" style={eyebrow}>
            Systems &rarr; People &rarr; Agents &rarr; Systems
          </div>

          {/* Autonomy Ladder */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
            <div className="lg:col-span-4">
              <div className="text-[#E70100] uppercase mb-4" style={eyebrow}>The autonomy ladder</div>
              <p className="text-white mb-4" style={{ fontFamily: inter, fontSize: '1.25rem', fontWeight: 600, lineHeight: '1.4' }}>
                Autonomy is earned, not configured.
              </p>
              <p className="text-white/60" style={{ fontFamily: inter, fontSize: '0.9375rem', lineHeight: '1.7' }}>
                Self-driving cars climb defined levels of autonomy, each one earned with evidence.
                Enterprise agents should too. Every step up is justified by accuracy, reversibility
                and a clean audit trail.
              </p>
            </div>
            <div className="lg:col-span-8 border-t border-white/10">
              {autonomyLadder.map((step) => (
                <div key={step.level} className="grid grid-cols-12 gap-4 py-5 border-b border-white/10 items-baseline">
                  <div className="col-span-2 text-[#E70100]" style={{ fontFamily: mono, fontSize: '0.875rem', fontWeight: 500 }}>{step.level}</div>
                  <div className="col-span-10 sm:col-span-3 text-white" style={{ fontFamily: inter, fontSize: '1rem', fontWeight: 600 }}>{step.name}</div>
                  <div className="col-span-12 sm:col-span-7 text-white/60" style={{ fontFamily: inter, fontSize: '0.9375rem', lineHeight: '1.6' }}>{step.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Offerings */}
          <div className="text-[#E70100] uppercase mb-8" style={eyebrow}>Programmes</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {offerings.map((offer) => (
              <div key={offer.title} className="border border-white/10 hover:border-[#E70100] transition-colors duration-300 p-8 flex flex-col">
                <div className="text-white/40 uppercase mb-4" style={eyebrow}>{offer.kind}</div>
                <h3 className="uppercase mb-4 text-[#E70100]" style={{ fontFamily: inter, fontWeight: 700, fontSize: '1rem', letterSpacing: '0.05em' }}>
                  {offer.title}
                </h3>
                <div className="text-white/50 mb-5" style={{ fontFamily: mono, fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                  {offer.audience} &middot; {offer.format}
                </div>
                <p className="text-white/70 mb-6 flex-1" style={{ fontFamily: inter, fontSize: '0.9375rem', lineHeight: '1.7' }}>
                  {offer.desc}
                </p>
                <p className="text-white border-t border-white/10 pt-4" style={{ fontFamily: inter, fontSize: '0.875rem', lineHeight: '1.6', fontWeight: 500 }}>
                  {offer.outcome}
                </p>
              </div>
            ))}
          </div>

          {/* Signature Talks */}
          <div className="text-[#E70100] uppercase mb-8" style={eyebrow}>Signature talks</div>
          <div className="border-t border-white/10">
            {talks.map((talk) => (
              <div key={talk.title} className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8 py-6 border-b border-white/10 px-4">
                <div className="text-white/90" style={{ fontFamily: inter, fontSize: '1.125rem', fontWeight: 500 }}>
                  {talk.title}
                </div>
                <div className="text-white/40 md:text-right" style={{ fontFamily: mono, fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                  {talk.audience}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: MEDIA & SPEAKING */}
      <section className="px-6 md:px-12 lg:px-24 py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="uppercase tracking-[-0.03em] mb-20" style={sectionHeading}>
            Media &amp; Speaking
          </h2>

          {/* Featured podcast/media image full width */}
          <div className="mb-12">
            <div className="border border-white/20 hover:border-[#E70100] transition-all duration-300 overflow-hidden">
              <img src={podcastImage} alt="Tech in Asia Conference" className="w-full h-[400px] object-cover" loading="lazy" />
            </div>
          </div>

          {/* Speaking engagements grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: speakingImage1, alt: 'Keynote Presentation' },
              { src: speakingImage2, alt: 'Disrupto Arena Panel' },
              { src: speakingImage3, alt: '@america Speaking Event' },
              { src: speakingWorkshop, alt: 'Workshop Facilitation' },
              { src: speakingPlugAndPlay, alt: 'GK Plug and Play Stage' },
              { src: speakingLiputan6, alt: 'Liputan6 TV Interview' },
            ].map((img) => (
              <div key={img.alt} className="border border-white/20 hover:border-[#E70100] transition-all duration-300 overflow-hidden group">
                <img src={img.src} alt={img.alt} className="w-full h-[280px] object-cover group-hover:opacity-90 transition-opacity duration-300" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06: WRITING & PRESS */}
      <section id="writing" className="px-6 md:px-12 lg:px-24 py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="uppercase tracking-[-0.03em] mb-20" style={sectionHeading}>
            Writing &amp; Press
          </h2>

          {/* Essays */}
          <div className="text-[#E70100] uppercase mb-8" style={eyebrow}>Essays on Medium</div>
          <div className="space-y-0 mb-8 border-t border-white/10">
            {essays.map((essay) => (
              <a
                key={essay.url}
                href={essay.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-b border-white/10 py-8 hover:bg-white/5 transition-colors duration-300 group px-4"
              >
                <div className="flex items-center justify-between gap-8">
                  <div>
                    <div className="text-white/40 uppercase mb-2" style={eyebrow}>{essay.tag}</div>
                    <div
                      className="text-white/90 group-hover:text-white transition-colors duration-300"
                      style={{ fontFamily: inter, fontSize: '1.125rem', fontWeight: 500, letterSpacing: '0.01em' }}
                    >
                      {essay.title}
                    </div>
                  </div>
                  <div className="text-[#E70100] text-nowrap flex items-center gap-2 text-lg">
                    <span>&rarr;</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <a
            href={profile.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white/60 hover:text-white transition-colors duration-300 uppercase mb-24"
            style={eyebrow}
          >
            All essays on Medium &rarr;
          </a>

          {/* Featured Publications Grid */}
          <div className="text-[#E70100] uppercase mb-8" style={eyebrow}>In the press</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { src: prestigeArticle, alt: 'Prestige Magazine — 40 Under 40' },
              { src: businessArticle, alt: 'SWA Business Magazine Feature' },
              { src: indonesiaArticle, alt: 'Media Indonesia Feature' },
              { src: magazineArticle, alt: 'The Creators Magazine' },
              { src: marketeersArticle, alt: 'Marketeers Magazine Feature' },
            ].map((img) => (
              <div key={img.alt} className="border border-white/20 hover:border-[#E70100] transition-all duration-300 overflow-hidden group">
                <img src={img.src} alt={img.alt} className="w-full h-[320px] object-cover group-hover:opacity-90 transition-opacity duration-300" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Team Photo */}
          <div>
            <div className="border border-white/20 hover:border-[#E70100] transition-all duration-300 overflow-hidden">
              <img src={teamAlgoritma} alt="Algoritma Data Science Team" className="w-full h-[400px] object-cover" loading="lazy" />
            </div>
            <div className="mt-4 text-white/40" style={{ fontFamily: mono, fontSize: '0.75rem', letterSpacing: '0.05em' }}>
              ALGORITMA DATA SCIENCE — CORPORATE TRAINING SESSION
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07: CONTACT */}
      <section id="contact" className="px-6 md:px-12 lg:px-24 py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="uppercase tracking-[-0.03em] mb-6" style={sectionHeading}>
            Contact
          </h2>
          <p className="text-white/70 mb-10" style={{ fontFamily: inter, fontSize: '1rem', lineHeight: '1.7' }}>
            For speaking and executive programme enquiries, book a time below or write to{' '}
            <a href={`mailto:${profile.email}`} className="text-white underline decoration-[#E70100] underline-offset-4 hover:text-[#E70100] transition-colors duration-300">
              {profile.email}
            </a>.
          </p>

          <div
            className="calendly-inline-widget"
            data-url={profile.calendly}
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-white/30" style={{ fontFamily: inter, fontSize: '0.875rem', fontWeight: 400 }}>
          <div>&copy; 2026 {profile.name}</div>
          <div className="flex items-center gap-6">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">LinkedIn</a>
            <a href={profile.medium} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Medium</a>
          </div>
          <div>{profile.base}</div>
        </div>
      </footer>
    </div>
  );
}
