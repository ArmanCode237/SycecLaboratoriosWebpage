import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import GeneralNavbar from './components/generalNavbar'
import LoadingScreen from './components/generalLoadPage'

import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage'
import ContactPage from './pages/contactPage'

function App() {
  const [loading, setLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(true) // controla montaje real

  useEffect(() => {
    const handleLoad = () => {
      // fade out loader después de 500ms, duración del transition es 700ms
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

  return (
    <Router>
      {/* Mostramos el loader mientras showLoader sea true */}
      {showLoader && <LoadingScreen visible={loading} />}

      {/* Renderizamos el contenido solo cuando loading sea false */}
      {!loading && (
        <>
          <GeneralNavbar />
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
