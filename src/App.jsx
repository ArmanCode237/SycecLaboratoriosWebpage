import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//navbar
import GeneralNavbar from './components/generalNavbar'

//pages
import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage'
import ContactPage from './pages/contactPage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <GeneralNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
