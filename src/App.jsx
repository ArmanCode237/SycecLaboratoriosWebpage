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
import ServicesPage from './pages/servicesPage'

function useScrollDetection(threshold = 50) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}

function AppContent() {
  const [showLoader, setShowLoader] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrolled = useScrollDetection()
  const location = useLocation()

  useEffect(() => {
    // 🔥 Desactivar el comportamiento predeterminado de restaurar scroll
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  // Efecto principal: cerrar menú y restaurar scroll al cambiar de ruta
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      document.body.style.overflow = 'auto' // 🔴 Restaurar inmediatamente
    }
  }, [location.pathname, isMenuOpen])

  // Control de overflow basado en isMenuOpen
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  // Simulación de carga (mejor que esperar window.load)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <ScrollToTop />
      {showLoader && <LoadingScreen />}

      <div className="flex flex-col min-h-screen">
        <GeneralNavbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrolled={scrolled}
        />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
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