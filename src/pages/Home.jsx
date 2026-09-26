import useScrollAnimate from '../hooks/useScrollAnimate'

export default function Home({ onNavigate }) {
  useScrollAnimate([])

  const go = (page, hash) => (e) => {
    e.preventDefault()
    onNavigate(page, hash)
  }

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src="/imagee1.jpeg" alt="Children of Siaya County" className="absolute inset-0 w-full h-100 object-cover" style={{ filter: 'brightness(0.7)' }} />
        <div className="hero-overlay absolute inset-0"></div>
        <div className="absolute top-1/4 left-8 w-24 h-24 border border-gold/20 rounded-full animate-float opacity-0-init animate-fadein delay-500"></div>
        <div className="absolute bottom-1/3 right-12 w-16 h-16 border border-gold/15 rounded-full animate-float opacity-0-init animate-fadein delay-600" style={{ animationDelay: '1.5s' }}></div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8 text-center">
          <div className="opacity-0-init animate-fadein">
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-gold-light mb-6 border border-gold/30 px-4 py-2 rounded-sm" style={{ backdropFilter: 'blur(4px)', background: 'rgba(197,160,89,0.1)' }}>Siaya County, Kenya</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-8xl text-white font-normal leading-[1.1] tracking-tight opacity-0-init animate-fadein delay-100">
            Every Child<br />
            <span className="italic text-gold-light">Deserves Hope</span>
          </h1>
          <p className="mt-6 md:mt-8 text-white/70 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed opacity-0-init animate-fadein delay-300">
            Nyadeje Hope Foundation is more than an organization — it is a movement of compassion, a voice to the voiceless, and a continuation of a legacy built on sacrifice, faith and humanity.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center opacity-0-init animate-fadein delay-400">
            <a href="#donate" onClick={go('donate', 'donate')} className="px-8 py-4 bg-green-400 text-white text-xs uppercase tracking-[0.15em] font-normal hover:bg-gold-dark transition-colors duration-300 rounded-sm animate-pulse-gold">Donate Now</a>
            <a href="#donate" onClick={go('donate', 'donate')} className="px-8 py-4 bg-green-400 text-white text-xs uppercase tracking-[0.15em] font-normal hover:bg-gold-dark transition-colors duration-300 rounded-sm animate-pulse-gold">Sponsor a child</a>
            <a href="#about" onClick={go('about', 'about')} className="px-8 py-4 bg-green-400 border border-white/30 text-white text-xs uppercase tracking-[0.15em] font-normal hover:bg-gold transition-colors duration-300 rounded-sm" style={{ backdropFilter: 'blur(4px)' }}>Learn Our Story</a>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0-init animate-fadein delay-600">
            <a href="#about" onClick={go('about', 'about')} className="flex flex-col items-center gap-2 text-white/40 hover:text-gold transition-colors duration-300">
              <span className="text-[9px] uppercase tracking-[0.2em]">Scroll</span>
              <iconify-icon icon="ph:caret-down" className="text-lg"></iconify-icon>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-natural-900 py-8 md:py-10">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="scroll-animate">
              <div className="stat-number font-serif text-3xl md:text-4xl font-normal">30+</div>
              <div className="text-white text-[10px] uppercase tracking-[0.2em] mt-2">Years of Service</div>
            </div>
            <div className="scroll-animate" style={{ transitionDelay: '0.1s' }}>
              <div className="stat-number font-serif text-3xl md:text-4xl font-normal">100+</div>
              <div className="text-white text-[10px] uppercase tracking-[0.2em] mt-2">Pupils Supported</div>
            </div>
            <div className="scroll-animate" style={{ transitionDelay: '0.2s' }}>
              <div className="stat-number font-serif text-3xl md:text-4xl font-normal">20+</div>
              <div className="text-white text-[10px] uppercase tracking-[0.2em] mt-2">Secondary Students</div>
            </div>
            <div className="scroll-animate" style={{ transitionDelay: '0.3s' }}>
              <div className="stat-number font-serif text-3xl md:text-4xl font-normal">6</div>
              <div className="text-white text-[10px] uppercase tracking-[0.2em] mt-2">Categories of Need</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
