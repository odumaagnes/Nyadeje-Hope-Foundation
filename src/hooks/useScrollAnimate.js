import { useEffect } from 'react'

// Re-implements the original inline <script>'s IntersectionObserver logic
// that adds the "visible" class to .scroll-animate / -left / -right
// elements as they enter the viewport. Runs again whenever `deps`
// changes (e.g. when the active page changes) so newly-mounted
// elements get observed too.
export default function useScrollAnimate(deps = []) {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    document
      .querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right')
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
