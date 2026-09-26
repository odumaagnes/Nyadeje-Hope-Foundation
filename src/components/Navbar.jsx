import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../navLinks'

export default function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 100)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const linkColorClass = scrolled ? 'text-natural-900/70' : 'text-white/80'
  const navBg = scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.0)'
  const navShadow = scrolled ? '0 1px 2px 0 rgba(0,0,0,0.05)' : 'none'

  const handleNav = (page, hash) => {
    setMenuOpen(false)
    onNavigate(page, hash)
  }

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-500"
      style={{ background: navBg, boxShadow: navShadow, fontWeight: 'bold' }}
    >
      <div
        className="max-w-screen-2xl mx-auto px-4 md:px-8 h-28 md:h-32 flex items-center justify-between bg-green-400"
        style={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}
      >
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav('home', 'hero') }}
          className="flex items-center group flex-shrink-0"
        >
          <img
            src="/logo.jpeg"
            alt="Nyadeje Hope Foundation - Hope Today, Brighter Tomorrows"
            className="h-24 md:h-28 w-auto object-contain rounded-sm bg-white p-1"
          />
        </a>

        <div className="hidden lg:flex items-center gap-5" style={{ color: 'white' }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={`#${link.hash}`}
              onClick={(e) => { e.preventDefault(); handleNav(link.page, link.hash) }}
              className={`text-xs uppercase tracking-[0.15em] ${linkColorClass} bg-black p-3 border border-black/40 rounded-lg hover:text-gold transition-colors duration-300 nav-link`}
              style={{ color: 'white' }}
            >
              {link.label}
            </a>
          ))}
          
        </div>

        <button
          id="menuBtn"
          aria-label="Open menu"
          className={`lg:hidden relative z-10 w-11 h-11 rounded-full border flex items-center justify-center transition-colors duration-300 ${scrolled ? 'text-natural-900 border-natural-900/15' : 'text-white border-white/30'}`}
          onClick={() => setMenuOpen(true)}
        >
          <iconify-icon icon="ph:list-bold" className="text-xl"></iconify-icon>
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-natural-900/70"
          style={{ backdropFilter: 'blur(3px)' }}
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[84%] max-w-sm bg-natural-900 shadow-2xl flex flex-col transition-transform duration-500 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 h-24 border-b border-white/10 flex-shrink-0">
            <div className="flex items-center gap-3">
              <img src="/logo-icon.png" alt="Nyadeje Hope Foundation" className="w-10 h-10 rounded-full object-cover border border-gold/30" />
              <div>
                <span className="block text-white font-serif text-base tracking-tight">Nyadeje</span>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-gold-light/70">Hope Foundation</span>
              </div>
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-gold/40 transition-colors duration-300"
            >
              <iconify-icon icon="ph:x-bold" className="text-lg"></iconify-icon>
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link, i) => (
                <li
                  key={link.label}
                  className="border-b border-white/5 transition-all duration-500"
                  style={{
                    transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? 'translateX(0)' : 'translateX(16px)',
                  }}
                >
                  <a
                    href={`#${link.hash}`}
                    onClick={(e) => { e.preventDefault(); handleNav(link.page, link.hash) }}
                    className="flex items-center justify-between py-4 text-white/80 hover:text-gold transition-colors duration-300 group"
                  >
                    <span className="text-sm uppercase tracking-[0.15em] font-normal">{link.label}</span>
                    <iconify-icon icon="ph:arrow-right" className="text-sm text-white/20 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300"></iconify-icon>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Panel footer / CTAs */}
          <div className="px-6 py-6 border-t border-white/10 flex-shrink-0 space-y-3">
            <a
              href="#donate"
              onClick={(e) => { e.preventDefault(); handleNav('donate', 'donate') }}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gold text-white text-xs uppercase tracking-[0.15em] font-normal hover:bg-gold-dark transition-colors duration-300 rounded-sm"
            >
              <iconify-icon icon="ph:hand-heart-bold"></iconify-icon> Support Us
            </a>
            <a
              href="https://wa.me/254725435344?text=Hello%20Nyadeje%20Hope%20Foundation"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 border border-white/15 text-white/80 text-xs uppercase tracking-[0.15em] font-normal hover:border-[#25D366]/50 hover:text-white transition-colors duration-300 rounded-sm"
            >
              <iconify-icon icon="logos:whatsapp-icon" className="text-base"></iconify-icon> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
