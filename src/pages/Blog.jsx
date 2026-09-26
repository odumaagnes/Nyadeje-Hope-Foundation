import { useEffect, useState } from 'react'
import useScrollAnimate from '../hooks/useScrollAnimate'
import { blogPosts } from '../data/blogPosts'

export default function Blog() {
  useScrollAnimate([blogPosts.length])
  const [openId, setOpenId] = useState(null)

  const activePost = blogPosts.find((p) => p.id === openId) || null
  const [featured, ...rest] = blogPosts

  useEffect(() => {
    if (!openId) return
    const onKey = (e) => { if (e.key === 'Escape') setOpenId(null) }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openId])

  return (
    <>
      <section id="blog" className="py-24 md:py-32 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto scroll-animate">
            <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-normal">Blog</span>
            <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight mt-4 leading-tight">
              Stories from <span className="italic text-gold">the Field</span>
            </h2>
            <div className="w-16 h-[1px] bg-gold/40 mt-6 mx-auto"></div>
            <p className="mt-6 text-gray-500 font-light leading-relaxed">
              Updates, stories and reflections from our programs in Siaya County — education, talent development, community outreach and more.
            </p>
          </div>

          {/* Featured post */}
          {featured && (
            <button
              onClick={() => setOpenId(featured.id)}
              className="mt-16 w-full text-left grid grid-cols-1 lg:grid-cols-2 gap-0 card-hover scroll-animate rounded-sm overflow-hidden border border-black/5"
            >
              <div className="img-hover aspect-[4/3] lg:aspect-auto">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12 bg-natural-50 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-gold font-normal px-3 py-1 border border-gold/30 rounded-full">{featured.category}</span>
                  <span className="text-xs text-gray-400 font-light">{featured.date}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-normal tracking-tight mt-4 leading-snug">{featured.title}</h3>
                <p className="mt-4 text-gray-500 font-light leading-relaxed">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-gold-dark">
                  Read Full Story <iconify-icon icon="ph:arrow-right-bold"></iconify-icon>
                </span>
              </div>
            </button>
          )}

          {/* Post grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rest.map((post) => (
              <button
                key={post.id}
                onClick={() => setOpenId(post.id)}
                className="text-left card-hover scroll-animate rounded-sm overflow-hidden border border-black/5 flex flex-col"
              >
                <div className="img-hover aspect-[4/3]">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] uppercase tracking-[0.15em] text-gold font-normal px-2.5 py-1 border border-gold/30 rounded-full">{post.category}</span>
                    <span className="text-[11px] text-gray-400 font-light">{post.date}</span>
                  </div>
                  <h3 className="font-serif text-lg font-normal tracking-tight mt-3 leading-snug">{post.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 font-light leading-relaxed flex-1">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-gold-dark">
                    Read More <iconify-icon icon="ph:arrow-right-bold"></iconify-icon>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Post lightbox */}
      {activePost && (
        <div
          className="lightbox active fixed inset-0 z-[70] bg-natural-900/95 flex items-center justify-center p-4 md:p-10 overflow-y-auto"
          onClick={() => setOpenId(null)}
        >
          <button
            onClick={() => setOpenId(null)}
            className="fixed top-5 right-5 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300 z-10"
          >
            <iconify-icon icon="ph:x-bold" className="text-lg"></iconify-icon>
          </button>
          <div
            className="lightbox-content max-w-2xl w-full bg-natural-50 rounded-sm shadow-2xl my-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/9]">
              <img src={activePost.image} alt={activePost.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.15em] text-gold font-normal px-3 py-1 border border-gold/30 rounded-full">{activePost.category}</span>
                <span className="text-xs text-gray-400 font-light">{activePost.date}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-normal tracking-tight mt-4 leading-snug">{activePost.title}</h3>
              <div className="mt-6 space-y-4">
                {activePost.content.map((para, i) => (
                  <p key={i} className="text-gray-500 font-light leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
