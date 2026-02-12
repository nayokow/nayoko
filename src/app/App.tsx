import { useState } from 'react';

const heroImage = '/images/hero-portrait.png';
const speakingImage1 = '/images/speaking-1.jpg';
const speakingImage2 = '/images/speaking-2.jpg';
const speakingImage3 = '/images/speaking-3.jpg';
const speakingWorkshop = '/images/speaking-workshop.jpg';
const speakingPlugAndPlay = '/images/speaking-plugandplay.jpg';
const speakingLiputan6 = '/images/speaking-liputan6.jpg';
const podcastImage = '/images/podcast-feature.jpg';
const nkLogo = '/images/nk-logo.png';
const prestigeArticle = '/images/article-prestige.jpg';
const businessArticle = '/images/article-business.jpeg';
const indonesiaArticle = '/images/article-indonesia.jpg';
const magazineArticle = '/images/article-magazine.jpeg';
const marketeersArticle = '/images/article-marketeers.jpg';
const teamAlgoritma = '/images/team-algoritma.jpeg';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    intent: ''
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('TRANSMISSION RECEIVED. We will respond within 48 hours.');
    setFormData({ name: '', email: '', intent: '' });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#130200] to-[#000000] text-white overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>
      {/* TOP NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={nkLogo} alt="NK" className="h-16 w-16" />
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

          <div className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollTo('track-record')}
              className="text-white/60 hover:text-white transition-colors duration-300 text-sm bg-transparent border-none cursor-pointer"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.02em' }}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollTo('interventions')}
              className="text-white/60 hover:text-white transition-colors duration-300 text-sm bg-transparent border-none cursor-pointer"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.02em' }}
            >
              Interventions
            </button>
            <button
              onClick={() => scrollTo('intel')}
              className="text-white/60 hover:text-white transition-colors duration-300 text-sm bg-transparent border-none cursor-pointer"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.02em' }}
            >
              Intel
            </button>
            <a
              href="https://www.linkedin.com/in/nayoko/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.02em' }}
            >
              LinkedIn
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="text-[#E70100] hover:text-white transition-colors duration-300 text-sm bg-transparent border-none cursor-pointer"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, letterSpacing: '0.02em' }}
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md px-6 py-6 flex flex-col gap-6">
            <button onClick={() => scrollTo('track-record')} className="text-white/60 hover:text-white text-sm text-left bg-transparent border-none cursor-pointer" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Portfolio</button>
            <button onClick={() => scrollTo('interventions')} className="text-white/60 hover:text-white text-sm text-left bg-transparent border-none cursor-pointer" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Interventions</button>
            <button onClick={() => scrollTo('intel')} className="text-white/60 hover:text-white text-sm text-left bg-transparent border-none cursor-pointer" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Intel</button>
            <a href="https://www.linkedin.com/in/nayoko/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>LinkedIn</a>
            <button onClick={() => scrollTo('contact')} className="text-[#E70100] hover:text-white text-sm text-left bg-transparent border-none cursor-pointer" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Contact</button>
          </div>
        )}
      </nav>

      {/* SECTION 01: THE OBJECTIVE (Hero) */}
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-20 pt-32 relative">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              className="uppercase tracking-[-0.03em] mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 8vw, 5rem)',
                lineHeight: '1.1'
              }}
            >
              SCALING INTELLIGENCE.<br />DEPLOYING CAPITAL.
            </h1>

            <p className="text-white/90 mb-10 max-w-4xl" style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: '1.6' }}>
              Operational Architect. Co-Founder of Algoritma (Exited). Early investor in Ajaib &amp; Bukalapak.
              I build the systems that solve for the future of Southeast Asia.
            </p>

            <button
              className="border border-[#E70100] bg-transparent text-white px-12 py-4 uppercase tracking-wide hover:bg-[#E70100]/10 transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '0.875rem', borderRadius: '0px' }}
              onClick={() => scrollTo('contact')}
            >
              INITIATE DIALOGUE
            </button>

            <div
              className="mt-16 text-white/40 text-xs uppercase"
              style={{ fontFamily: 'Roboto Mono, monospace', fontWeight: 400, letterSpacing: '0.1em' }}
            >
              BKK &bull; JKT &bull; 20+ YEARS OPERATIONAL RIGOR
            </div>
          </div>

          {/* Hero Portrait Image */}
          <div className="relative">
            <div className="border border-white p-1">
              <img
                src={heroImage}
                alt="Nayoko Kho"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 border border-[#E70100] bg-black px-6 py-3"
              style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.05em' }}
            >
              NAYOKO KHO
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: THE TRACK RECORD */}
      <section id="track-record" className="px-6 md:px-12 lg:px-24 py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2
            className="uppercase tracking-[-0.03em] mb-20"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 4vw, 3rem)'
            }}
          >
            Portfolio
          </h2>

          {/* Logo Strip */}
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6 mb-20 opacity-30">
            {['BUKALAPAK', 'AJAIB', 'ALGORITMA', 'PLUG AND PLAY'].map((name) => (
              <div
                key={name}
                className="text-white/80"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '1.125rem', letterSpacing: '0.05em' }}
              >
                {name}
              </div>
            ))}
          </div>

          {/* Data Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { value: '$50M+', label: 'Deals Facilitated' },
              { value: '50+', label: 'Staff Scaled to Exit' },
              { value: '2', label: 'Unicorns Backed' },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-[#E70100] pl-6">
                <div
                  className="text-white mb-3"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '2.5rem', fontWeight: 700, lineHeight: '1' }}
                >
                  {item.value}
                </div>
                <div
                  className="text-white/60"
                  style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.875rem', fontWeight: 400, letterSpacing: '0.05em' }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03: INTERVENTIONS */}
      <section id="interventions" className="px-6 md:px-12 lg:px-24 py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2
            className="uppercase tracking-[-0.03em] mb-20"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 4vw, 3rem)'
            }}
          >
            Interventions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: 'Algorithmic Organization',
                desc: 'Eliminating friction. Transitioning intuition into data-driven organisms. I architect the nervous system of the enterprise.',
              },
              {
                title: 'Venture Access',
                desc: 'Strategic liquidity for the digital economy. Connecting pre-series founders with institutional capital and growth loops.',
              },
              {
                title: 'Executive Calibration',
                desc: 'Objective truth for founders. High-friction mentorship to solve the scaling bottlenecks that kill 90% of startups.',
              },
            ].map((card) => (
              <div key={card.title} className="border border-white/10 hover:border-[#E70100] transition-colors duration-300 p-8">
                <h3
                  className="uppercase mb-6 text-[#E70100]"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.05em' }}
                >
                  {card.title}
                </h3>
                <p className="text-white/70" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: '1.7' }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: MEDIA & SPEAKING */}
      <section className="px-6 md:px-12 lg:px-24 py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2
            className="uppercase tracking-[-0.03em] mb-20"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 4vw, 3rem)'
            }}
          >
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
              <div key={img.alt} className="border border-white/20 hover:border-[#E70100] transition-all duration-300 cursor-pointer overflow-hidden group">
                <img src={img.src} alt={img.alt} className="w-full h-[280px] object-cover group-hover:opacity-90 transition-opacity duration-300" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: INTEL */}
      <section id="intel" className="px-6 md:px-12 lg:px-24 py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2
            className="uppercase tracking-[-0.03em] mb-20"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 4vw, 3rem)'
            }}
          >
            Intel
          </h2>

          {/* Featured Publications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { src: prestigeArticle, alt: 'Prestige Magazine — 40 Under 40' },
              { src: businessArticle, alt: 'SWA Business Magazine Feature' },
              { src: indonesiaArticle, alt: 'Media Indonesia Feature' },
              { src: magazineArticle, alt: 'The Creators Magazine' },
              { src: marketeersArticle, alt: 'Marketeers Magazine Feature' },
            ].map((img) => (
              <div key={img.alt} className="border border-white/20 hover:border-[#E70100] transition-all duration-300 cursor-pointer overflow-hidden group">
                <img src={img.src} alt={img.alt} className="w-full h-[320px] object-cover group-hover:opacity-90 transition-opacity duration-300" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Team Photo */}
          <div className="mb-20">
            <div className="border border-white/20 hover:border-[#E70100] transition-all duration-300 overflow-hidden">
              <img src={teamAlgoritma} alt="Algoritma Data Science Team" className="w-full h-[400px] object-cover" loading="lazy" />
            </div>
            <div className="mt-4 text-white/40" style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
              ALGORITMA DATA SCIENCE — CORPORATE TRAINING SESSION
            </div>
          </div>

          {/* Article List */}
          <div className="space-y-0">
            {[
              'The One Thing AI Can\'t Do: Feel What Matters',
              'Mental Wealth Is Not Calm. It Is Range.',
              'Data Smog: Navigating High Entropy in Leadership',
            ].map((title) => (
              <div key={title} className="border-b border-white/10 py-8 hover:bg-white/5 transition-colors duration-300 cursor-pointer group px-4">
                <div className="flex items-center justify-between gap-8">
                  <div
                    className="text-white/90 group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.125rem', fontWeight: 500, letterSpacing: '0.01em' }}
                  >
                    {title}
                  </div>
                  <div className="text-[#E70100] text-nowrap flex items-center gap-2 text-lg">
                    <span>&rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06: THE TRANSMISSION (Contact) */}
      <section id="contact" className="px-6 md:px-12 lg:px-24 py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2
            className="uppercase tracking-[-0.03em] mb-8"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 4vw, 3rem)'
            }}
          >
            Contact
          </h2>

          <p className="text-white/70 mb-16" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.125rem', lineHeight: '1.7' }}>
            I engage with high-impact opportunities. If you are building infrastructure for SEA, submit a brief.
          </p>

          <form onSubmit={handleSubmit} className="space-y-12">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-transparent border-b border-white/20 border-t-0 border-l-0 border-r-0 pb-4 text-white placeholder-white/40 focus:border-[#E70100] focus:outline-none transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.125rem', fontWeight: 400, borderRadius: '0px' }}
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-transparent border-b border-white/20 border-t-0 border-l-0 border-r-0 pb-4 text-white placeholder-white/40 focus:border-[#E70100] focus:outline-none transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.125rem', fontWeight: 400, borderRadius: '0px' }}
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                placeholder="Message"
                value={formData.intent}
                onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                required
                rows={5}
                className="w-full bg-transparent border-b border-white/20 border-t-0 border-l-0 border-r-0 pb-4 text-white placeholder-white/40 focus:border-[#E70100] focus:outline-none transition-colors duration-300 resize-none"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.125rem', fontWeight: 400, borderRadius: '0px' }}
              />
            </div>

            <button
              type="submit"
              className="bg-[#E70100] text-white px-16 py-5 uppercase tracking-wide hover:bg-[#FF1A1A] transition-all duration-300 cursor-pointer"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.1em', borderRadius: '0px' }}
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div
            className="text-white/30"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 400 }}
          >
            &copy; 2026 Nayoko Kho
          </div>
          <div
            className="text-white/30"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 400 }}
          >
            Bangkok &bull; Jakarta
          </div>
        </div>
      </footer>
    </div>
  );
}
