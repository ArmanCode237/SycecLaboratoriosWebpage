import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ✅ Importa el HeroUIProvider
import { HeroUIProvider } from '@heroui/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ✅ Envuelve App con HeroUIProvider */}
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </StrictMode>,
)

