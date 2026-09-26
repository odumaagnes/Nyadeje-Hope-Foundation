import { useToast } from '../context/ToastContext'

export default function Footer({ onNavigate }) {
  const { copyToClipboard } = useToast()
  const year = new Date().getFullYear()

  const go = (page, hash) => (e) => {
    e.preventDefault()
    onNavigate(page, hash)
  }

  return (
    <footer className="border-t border-white/5 bg-natural-900">
      {/* CTA Strip */}
      <div className="border-b border-white/5">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
              <iconify-icon icon="ph:heart-bold" className="text-xl text-gold"></iconify-icon>
            </div>
            <div>
              <h4 className="text-white font-serif text-xl tracking-tight">Join Our Mission</h4>
              <p className="text-green-400 text-sm font-light mt-0.5">Every contribution makes a lasting difference.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a href="https://wa.me/254725435344?text=Hello%20Nyadeje%20Hope%20Foundation%2C%20I%20would%20like%20to%20support%20your%20work." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-xs uppercase tracking-[0.15em] font-normal hover:bg-[#20BD5A] transition-colors duration-300 rounded-sm">
              <iconify-icon icon="logos:whatsapp-icon" className="text-base"></iconify-icon> WhatsApp Us
            </a>
            <a href="#donate" onClick={go('donate', 'donate')} className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white text-xs uppercase tracking-[0.15em] font-normal hover:bg-gold-dark transition-colors duration-300 rounded-sm">
              <iconify-icon icon="ph:hand-heart-bold"></iconify-icon> Donate Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand + Founder */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full border border-gold/30 overflow-hidden flex items-center justify-center bg-white">
                <img src="/logo-icon.png" alt="Nyadeje Hope Foundation logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-white font-serif text-lg tracking-tight">Nyadeje</span>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-green-400">Hope Foundation</span>
              </div>
            </div>
            <p className="text-green-400 text-sm font-light leading-relaxed max-w-xs">
              Putting God's love into action by supporting vulnerable children through education, psychological support, and talent development in Siaya County, Kenya.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a href="https://wa.me/254725435344?text=Hello%20Nyadeje%20Hope%20Foundation" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all duration-300" title="WhatsApp">
                <iconify-icon icon="logos:whatsapp-icon" className="text-base"></iconify-icon>
              </a>
              <a href="mailto:odumaagnes3@gmail.com" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-gold/50 hover:bg-gold/10 transition-all duration-300" title="Email">
                <iconify-icon icon="ph:envelope-bold" className="text-sm text-white/60"></iconify-icon>
              </a>
              <a href="tel:0725435344" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:border-gold/50 hover:bg-gold/10 transition-all duration-300" title="Call">
                <iconify-icon icon="ph:phone-bold" className="text-sm text-white/60"></iconify-icon>
              </a>
            </div>

            {/* Location */}
            <div className="mt-5 flex items-start gap-3">
              <iconify-icon icon="ph:map-pin-bold" className="text-gold/60 mt-0.5 flex-shrink-0"></iconify-icon>
              <div>
                <span className="text-green-400 text-sm font-light">Siaya County, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h5 className="text-[10px] uppercase tracking-[0.2em] text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-gold/40"></span> Navigation
            </h5>
            <nav className="space-y-3">
              <a href="#about" onClick={go('about', 'about')} className="block text-sm text-green-400 hover:text-gold transition-colors duration-300">About Us</a>
              <a href="#story" onClick={go('about', 'story')} className="block text-sm text-green-400 hover:text-gold transition-colors duration-300">Our Story</a>
              <a href="#vision-mission" onClick={go('about', 'vision-mission')} className="block text-sm text-green-400 hover:text-gold transition-colors duration-300">Vision & Mission</a>
              <a href="#blog" onClick={go('blog', 'blog')} className="block text-sm text-green-400 hover:text-gold transition-colors duration-300">Blog</a>
              <a href="#programs" onClick={go('programs', 'programs')} className="block text-sm text-green-400 hover:text-gold transition-colors duration-300">Programs</a>
              <a href="#gallery" onClick={go('gallery', 'gallery')} className="block text-sm text-green-400 hover:text-gold transition-colors duration-300">Gallery</a>
              <a href="#donate" onClick={go('donate', 'donate')} className="block text-sm text-green-400 hover:text-gold transition-colors duration-300">Donate</a>
              <a href="#contact" onClick={go('contact', 'contact')} className="block text-sm text-green-400 hover:text-gold transition-colors duration-300">Contact</a>
            </nav>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <h5 className="text-[10px] uppercase tracking-[0.2em] text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-gold/40"></span> What We Do
            </h5>
            <div className="space-y-3">
              <a href="#programs" onClick={go('programs', 'programs')} className="flex items-center gap-2.5 text-sm text-green-400 hover:text-gold transition-colors duration-300 group">
                <iconify-icon icon="ph:graduation-cap-bold" className="text-xs text-blue-400 group-hover:text-gold/60 transition-colors duration-300"></iconify-icon>
                Education Support
              </a>
              <a href="#programs" onClick={go('programs', 'programs')} className="flex items-center gap-2.5 text-sm text-green-400 hover:text-gold transition-colors duration-300 group">
                <iconify-icon icon="ph:star-bold" className="text-xs text-blue-400 group-hover:text-gold/60 transition-colors duration-300"></iconify-icon>
                Dignity & Self-Esteem
              </a>
              <a href="#programs" onClick={go('programs', 'programs')} className="flex items-center gap-2.5 text-sm text-green-400 hover:text-gold transition-colors duration-300 group">
                <iconify-icon icon="ph:megaphone-bold" className="text-xs text-blue-400 group-hover:text-gold/60 transition-colors duration-300"></iconify-icon>
                Rights Awareness
              </a>
              <a href="#programs" onClick={go('programs', 'programs')} className="flex items-center gap-2.5 text-sm text-green-400 hover:text-gold transition-colors duration-300 group">
                <iconify-icon icon="ph:palette-bold" className="text-xs text-blue-400 group-hover:text-gold/60 transition-colors duration-300"></iconify-icon>
                Talent Development
              </a>
              <a href="#programs" onClick={go('programs', 'programs')} className="flex items-center gap-2.5 text-sm text-green-400 hover:text-gold transition-colors duration-300 group">
                <iconify-icon icon="ph:users-three-bold" className="text-xs text-blue-400 group-hover:text-gold/60 transition-colors duration-300"></iconify-icon>
                Parent Engagement Forums
              </a>
            </div>
          </div>

          {/* Donation Info */}
          <div className="lg:col-span-3">
            <h5 className="text-[10px] uppercase tracking-[0.2em] text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-gold/40"></span> Support Us
            </h5>
            <div className="space-y-4">
              <div className="p-4 bg-white/[0.03] border border-white/[0.06] rounded-sm group hover:border-gold/20 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.15em] text-green-400 font-bold block">M-Pesa Till</span>
                    <span className="text-white text-sm font-normal mt-1 block">0725 435 344</span>
                  </div>
                  <button onClick={() => copyToClipboard('0725435344')} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-gold/40 hover:bg-gold/10 transition-all duration-300 flex-shrink-0" title="Copy number">
                    <iconify-icon icon="ph:copy" className="text-xs text-white/40"></iconify-icon>
                  </button>
                </div>
              </div>
              <div className="p-4 bg-white/[0.03] border border-white/[0.06] rounded-sm">
                <span className="text-[9px] uppercase tracking-[0.15em] text-green-400 font-bold block">Equity Bank</span>
                <span className="text-white text-sm font-normal mt-1 block">1040197512071</span>
                <span className="text-green-400 text-xs block mt-0.5">Nyadeje Hope Foundation</span>
              </div>
              <div className="p-4 bg-white/[0.03] border border-white/[0.06] rounded-sm">
                <span className="text-[9px] uppercase tracking-[0.15em] text-green-400 font-bold block">Email</span>
                <a href="mailto:odumaagnes3@gmail.com" className="text-white text-sm font-normal mt-1 block hover:text-gold transition-colors duration-300">odumaagnes3@gmail.com</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-green-400 font-bold text-xs font-light">
            &copy; <span id="currentYear">{year}</span> Nyadeje Hope Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-green-400 font-bold text-xs font-light italic font-serif">"Every child deserves hope"</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-gold/40 hover:bg-gold/10 transition-all duration-300 group" title="Back to top">
              <iconify-icon icon="ph:arrow-up-bold" className="text-xs text-white/30 group-hover:text-gold transition-colors duration-300"></iconify-icon>
            </button>
          </div>
          <div className="mt-6 flex items-center gap-4 p-4 bg-white/[0.03] border border-white/[0.06] rounded-sm">
            <img src="/imagee3.jpeg" alt="Agnes Oduma - Founder" className="w-40 h-40 rounded-sm object-cover border-2 border-gold/30 flex-shrink-0" />
            <div>
              <span className="text-[9px] uppercase tracking-[0.15em] text-green-400 block">Founder</span>
              <span className="text-white text-sm font-bold block">Agnes Oduma</span>
              <span className="text-green-400 text-xs block">30+ years in social work</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
