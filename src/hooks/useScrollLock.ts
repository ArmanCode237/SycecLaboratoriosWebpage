// hooks/useScrollLock.ts
import { useEffect } from 'react'

export function useScrollLock(isActive: boolean) {
  useEffect(() => {
    if (!isActive) return

    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    document.body.style.top = `-${scrollY}px`
    document.body.style.overflowY = 'scroll'

    return () => {
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      document.body.style.overflowY = ''
      window.scrollTo(0, scrollY)
    }
  }, [isActive])
}