import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import GeneralNavbar from './components/generalNavbar'
import LoadingScreen from './components/generalLoadPage'

import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage'
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
      {showLoader && <LoadingScreen visible={loading} />}

      {!loading && (
        <>
          {/* Pasamos scrolled como prop */}
          <GeneralNavbar scrolled={scrolled} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </>
      )}
    </Router>
  )
}

export default App
