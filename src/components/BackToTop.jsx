import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.pageYOffset > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      id="backToTop"
      onClick={() => window.scrollTo({ top: 0 })}
      className={`fixed bottom-24 right-6 z-40 w-12 h-12 bg-natural-900 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gold border border-white/10 ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <iconify-icon icon="ph:arrow-up-bold" className="text-lg"></iconify-icon>
    </button>
  )
}
