import { useEffect, useRef, useState } from 'react'
import { ToastProvider } from './context/ToastContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Toast from './components/Toast'
import BackToTop from './components/BackToTop'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Programs from './pages/Programs'
import Gallery from './pages/Gallery'
import Donate from './pages/Donate'
import Contact from './pages/Contact'

const PAGES = {
  home: Home,
  about: About,
  blog: Blog,
  programs: Programs,
  gallery: Gallery,
  donate: Donate,
  contact: Contact,
}

export default function App() {
  const [page, setPage] = useState('home')
  const pendingHash = useRef(null)

  const navigate = (nextPage, hash) => {
    pendingHash.current = hash
    if (nextPage === page) {
      scrollToHash(hash)
    } else {
      setPage(nextPage)
    }
  }

  const scrollToHash = (hash) => {
    requestAnimationFrame(() => {
      const el = hash && document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })
  }

  useEffect(() => {
    // After a page switch, scroll to the requested section (or top).
    if (pendingHash.current) {
      scrollToHash(pendingHash.current)
      pendingHash.current = null
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [page])

  const PageComponent = PAGES[page] || Home

  return (
    <ToastProvider>
      <Navbar onNavigate={navigate} />
      <PageComponent onNavigate={navigate} />
      <Footer onNavigate={navigate} />
      <Toast />
      <BackToTop />
      <WhatsAppButton />
    </ToastProvider>
  )
}
