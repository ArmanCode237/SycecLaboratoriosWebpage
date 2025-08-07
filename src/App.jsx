import { useState, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Componentes
import GeneralNavbar from './components/generalNavbar'
import LoadingScreen from './components/generalLoadPage'
import Footer from './components/generalFooter'

// Páginas
import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage'
import ContactPage from './pages/contactPage'

// Hook personalizado para scroll
function useScrollDetection(threshold = 50) {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > threshold
    setScrolled(prev => isScrolled !== prev ? isScrolled : prev)
  }, [threshold])

  useEffect(() => {
    // Configurar passive: true para mejor performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return scrolled
}

function App() {
  const [loading, setLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(true)
  const scrolled = useScrollDetection() // Usamos el hook personalizado

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false)
      setTimeout(() => setShowLoader(false), 700)
    }

    // Verificar si el contenido ya está cargado
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad, { once: true })
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <Router>
      <>
        {showLoader && <LoadingScreen loading={loading} />}
        
        <GeneralNavbar scrolled={scrolled} />
        
        <main className="min-h-[calc(100vh-120px)]"> {/* Asegura espacio para footer */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Ruta opcional para manejar 404 */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </>
    </Router>
  )
}

export default App