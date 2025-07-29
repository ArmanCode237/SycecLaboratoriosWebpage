import * as React from 'react'
import { useEffect, useState } from 'react'
import logoLab from '../assets/logoLab.png'
import emaLogo from '../assets/other/ema.png'
import conaguaLogo from '../assets/other/conagua.png'

export default function HomePage() {
  const [loaded, setLoaded] = useState(false)

   useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true)
    }, 100) // espera para iniciar transición
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2 mt-0">
      <img
        src={logoLab}
        alt="Laboratorio"
        className={`
          transition-opacity duration-1000 ease-in-out 
          ${loaded ? 'opacity-100' : 'opacity-0'} 
          w-240 h-auto
        `}
      />
      <div class='columns-2'>
        <img className={`
          transition-opacity duration-1500 ease-in-out 
          ${loaded ? 'opacity-100' : 'opacity-0'} 
          w-56 h-auto
        `} src={conaguaLogo} alt="Laboratorio" />
        <img className={`
          transition-opacity duration-2000 ease-in-out 
          ${loaded ? 'opacity-100' : 'opacity-0'} 
          w-56 h-auto
        `} src={emaLogo} alt="Laboratorio" />
      </div>
    </div>
  )
}
