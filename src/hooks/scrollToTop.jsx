// hooks/scrollToTop.jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // 1. Asegurar que el body no esté fijo
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.overflowY = 'auto'
    document.body.style.height = 'auto'

    // 2. Forzar scroll a 0 con múltiples métodos
    const scrollToTop = () => {
      // Método 1: scrollTo
      window.scrollTo(0, 0)

      // Método 2: scrollY + history scrollRestoration (si está desactivado)
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
      }

      // Método 3: Asegurar que cualquier elemento con scroll también vuelva
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    // 3. Usar requestAnimationFrame para asegurar que el DOM esté listo
    const timer = setTimeout(scrollToTop, 1)
    return () => clearTimeout(timer)
  }, [pathname])

  return null
}