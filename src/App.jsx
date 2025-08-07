import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//componentes
import GeneralNavbar from './components/generalNavbar'
import LoadingScreen from './components/generalLoadPage'

//páginas
import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage'
import Footer from './components/generalFooter'
import ContactPage from './pages/contactPage'

function App() {
  const [loading, setLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(true)
  const [scrolled, setScrolled] = useState(false) // <-- nuevo estado

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false)
      setTimeout(() => setShowLoader(false), 700)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => window.removeEventListener('load', handleLoad)
  }, [])

  // NUEVO useEffect para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50) // si scroll > 50px
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router>
        <>
          {/* Pasamos scrolled como prop */}
          <GeneralNavbar scrolled={scrolled} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          <Footer />
        </>
    </Router>
  )
}

export default App
