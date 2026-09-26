import { useEffect, useMemo, useState } from 'react'
import useScrollAnimate from '../hooks/useScrollAnimate'
import { galleryItems } from '../data/galleryItems'

const CATEGORY_LABELS = {
  education: 'Education',
  community: 'Community',
  talent: 'Talent',
  outreach: 'Outreach',
}

function labelFor(category) {
  return CATEGORY_LABELS[category] || category.charAt(0).toUpperCase() + category.slice(1)
}

export default function Gallery() {
  useScrollAnimate([])

  const categories = useMemo(() => {
    const unique = [...new Set(galleryItems.map((i) => i.category))]
    return ['all', ...unique]
  }, [])

  const [filter, setFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null) // index into `visible`

  const visible = useMemo(
    () => (filter === 'all' ? galleryItems : galleryItems.filter((i) => i.category === filter)),
    [filter]
  )

  const activeItem = lightboxIndex !== null ? visible[lightboxIndex] : null

  const closeLightbox = () => setLightboxIndex(null)
  const showPrev = () => setLightboxIndex((i) => (i - 1 + visible.length) % visible.length)
  const showNext = () => setLightboxIndex((i) => (i + 1) % visible.length)

  // Escape / arrow-key navigation while the lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex, visible.length])

  return (
    <>
      <section id="gallery" className="py-24 md:py-32 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto scroll-animate">
            <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-normal">Gallery</span>
            <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mt-4 leading-tight">
              Moments of <span className="italic text-gold">Impact</span>
            </h2>
            <div className="w-16 h-[1px] bg-gold/40 mt-6 mx-auto"></div>
            <p className="mt-6 text-gray-500 font-light leading-relaxed">
              A visual journey through our programs, community outreach, and the lives we touch every day in Siaya County.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-3 scroll-animate">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); closeLightbox() }}
                className={`gallery-filter-btn px-5 py-2.5 text-xs uppercase tracking-[0.15em] border border-natural-900/15 rounded-full text-natural-900/70 hover:border-gold/50 ${filter === cat ? 'active' : ''}`}
              >
                {cat === 'all' ? 'All' : labelFor(cat)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryItems.map((item) => {
              const isVisible = filter === 'all' || item.category === filter
              const visibleIndex = visible.findIndex((v) => v.id === item.id)
              return (
                <div
                  key={item.id}
                  className={`gallery-item ${isVisible ? 'visible-item' : 'hidden-item'}`}
                >
                  <div
                    className="gallery-thumb relative rounded-sm aspect-[4/3]"
                    onClick={() => isVisible && setLightboxIndex(visibleIndex)}
                  >
                    <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                    <div className="thumb-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-5">
                      <span className="text-[9px] uppercase tracking-[0.15em] text-gold-light">{labelFor(item.category)}</span>
                      <span className="text-white text-sm font-normal mt-1">{item.title}</span>
                    </div>
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center">
                      <iconify-icon icon={item.type === 'video' ? 'ph:play-fill' : 'ph:magnifying-glass-plus-bold'} className="text-natural-900 text-sm"></iconify-icon>
                    </div>
                    {item.type === 'video' && (
                      <div className="video-play-btn absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 rounded-full bg-white/20 border border-white/60 flex items-center justify-center" style={{ backdropFilter: 'blur(2px)' }}>
                          <iconify-icon icon="ph:play-fill" className="text-white text-2xl"></iconify-icon>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-gray-500 font-light leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center scroll-animate">
            <p className="text-gray-400 text-sm font-light italic font-serif">More photos and videos are added as our programs grow.</p>
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      {activeItem && activeItem.type === 'image' && (
        <div className="lightbox active fixed inset-0 z-[70] bg-natural-900/95 flex items-center justify-center p-4 md:p-10" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300 z-10">
            <iconify-icon icon="ph:x-bold" className="text-lg"></iconify-icon>
          </button>
          {visible.length > 1 && (
            <>
              <button onClick={(e) => { e.stopPropagation(); showPrev() }} className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300 z-10">
                <iconify-icon icon="ph:caret-left-bold" className="text-xl"></iconify-icon>
              </button>
              <button onClick={(e) => { e.stopPropagation(); showNext() }} className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300 z-10">
                <iconify-icon icon="ph:caret-right-bold" className="text-xl"></iconify-icon>
              </button>
            </>
          )}
          <div className="lightbox-content max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={activeItem.src} alt={activeItem.title} className="max-w-full max-h-[70vh] object-contain rounded-sm shadow-2xl" />
            <div className="mt-5 text-center max-w-xl">
              <span className="text-[9px] uppercase tracking-[0.15em] text-gold-light block">{labelFor(activeItem.category)}</span>
              <span className="text-white text-base font-normal block mt-1">{activeItem.title}</span>
              <p className="text-white/50 text-sm font-light mt-2 leading-relaxed">{activeItem.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Lightbox */}
      {activeItem && activeItem.type === 'video' && (
        <div className="lightbox active fixed inset-0 z-[70] bg-natural-900/95 flex items-center justify-center p-4 md:p-10" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300 z-10">
            <iconify-icon icon="ph:x-bold" className="text-lg"></iconify-icon>
          </button>
          {visible.length > 1 && (
            <>
              <button onClick={(e) => { e.stopPropagation(); showPrev() }} className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300 z-10">
                <iconify-icon icon="ph:caret-left-bold" className="text-xl"></iconify-icon>
              </button>
              <button onClick={(e) => { e.stopPropagation(); showNext() }} className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300 z-10">
                <iconify-icon icon="ph:caret-right-bold" className="text-xl"></iconify-icon>
              </button>
            </>
          )}
          <div className="lightbox-content max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video w-full">
              {activeItem.videoUrl ? (
                <iframe
                  src={activeItem.videoUrl}
                  className="w-full h-full rounded-sm shadow-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={activeItem.title}
                ></iframe>
              ) : (
                <video src={activeItem.videoFile} controls autoPlay className="w-full h-full rounded-sm shadow-2xl bg-black" />
              )}
            </div>
            <div className="mt-5 text-center max-w-xl mx-auto">
              <span className="text-[9px] uppercase tracking-[0.15em] text-gold-light block">{labelFor(activeItem.category)}</span>
              <span className="text-white text-base font-normal block mt-1">{activeItem.title}</span>
              <p className="text-white/50 text-sm font-light mt-2 leading-relaxed">{activeItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
