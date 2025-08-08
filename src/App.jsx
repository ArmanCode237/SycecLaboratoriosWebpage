import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

// Componentes
import GeneralNavbar from './components/generalNavbar'
import LoadingScreen from './components/generalLoadPage'
import Footer from './components/generalFooter'
import ScrollToTop from './hooks/scrollToTop'

// Páginas
import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage'
import ContactPage from './pages/contactPage'

// Hook personalizado para scroll
function useScrollDetection(threshold = 50) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > threshold
      setScrolled(prev => (isScrolled !== prev ? isScrolled : prev))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}

function AppContent() {
  const [loading, setLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrolled = useScrollDetection()
  const location = useLocation()

  // Cuando cambia la ruta, cerramos el menú y desbloqueamos scroll
  useEffect(() => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'auto'
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Controlar overflow al abrir/cerrar menú móvil
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false)
      setTimeout(() => setShowLoader(false), 700)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad, { once: true })
    }

    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return (
    <>
      <ScrollToTop />
      {showLoader && <LoadingScreen loading={loading} />}

      <GeneralNavbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
      />

      <main className="min-h-[calc(100vh-120px)]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
