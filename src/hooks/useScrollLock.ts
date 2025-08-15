// hooks/useScrollLock.ts
import { useEffect } from 'react'

export function useScrollLock(isActive: boolean) {
  useEffect(() => {
    if (isActive) {
      // Guardar el scroll actual
      const scrollY = window.scrollY
      // Aplicar bloqueo
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.top = `-${scrollY}px`
      document.body.style.overflowY = 'scroll'
      document.body.style.height = '100dvh'
    } else {
      // Restaurar scroll
      const scrollY = document.body.style.top
      const prevScrollY = parseInt(scrollY || '0') * -1
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      document.body.style.overflowY = ''
      document.body.style.height = ''
      window.scrollTo(0, prevScrollY)
    }

    // Limpieza al desmontar
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflowY = ''
      document.body.style.height = ''
      window.scrollTo(0, 0)
    }
  }, [isActive])
}