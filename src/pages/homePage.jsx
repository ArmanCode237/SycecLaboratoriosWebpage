import * as React from 'react'
import { useEffect, useState } from 'react'

import { useOnScreen } from '../hooks/useOnScreen'

//logotypes
import logoLab from '../assets/logoLab.png'
import emaLogo from '../assets/other/ema.png'
import conaguaLogo from '../assets/other/conagua.png'

//backgrounds
import bg1 from '../assets/backgrounds/bg1.jpg'
import bg2 from '../assets/backgrounds/bg2.jpg'
import bg3 from '../assets/backgrounds/bg3.jpg'
import bg4 from '../assets/backgrounds/bg_ptar.jpg'


const backgroundImages = [bg1, bg2, bg3]

export default function HomePage() {

  const [RefPart1, isRefPart1] = useOnScreen(0.6)
  const [RefPart2, isRefPart2] = useOnScreen(0.6)
  const [RefPart3, isRefPart3] = useOnScreen(0.6)


  const [loaded, setLoaded] = useState(false)
  const [currentBg, setCurrentBg] = useState(0)

   useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true)
    }, 100) // espera para iniciar transición
    return () => clearTimeout(timeout)
  }, [])

    // Carrusel de fondo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // Cambia cada 5 segundos
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="">
      {/*section 1 */}
      <div 
      ref={RefPart1} 
      className={`relative flex flex-col items-center min-h-screen  w-full overflow-hidden bg-black transition-
        ${isRefPart1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'}`}
      >
        {/* Fondo con transición */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          {backgroundImages.map((bg, index) => (
            <img
              key={index}
              src={bg}
              alt={`Background ${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentBg ? 'opacity-60' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Contenido */}
        <div className="relative z-10 flex flex-col items-center">
          <img
            src={logoLab}
            alt="Laboratorio"
            className={`transition-opacity duration-1000 ease-in-out pb-0 mb-0 ${
              loaded ? 'opacity-100' : 'opacity-0'
            } w-240 h-auto filter`}
            style={{ filter: 'drop-shadow(0 0 10px white)' }}
          />
          <div className="columns-2 mt-0 pt-0">
            <img
              className={`transition-all duration-1500 ease-in-out mt-0 pt-0 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              } w-56 h-auto`}
              src={conaguaLogo}
              alt="Conagua"
            />
            <img
              className={`transition-all duration-2000 ease-in-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              } w-56 h-auto`}
              src={emaLogo}
              alt="EMA"
            />
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div 
      ref={RefPart2} 
      className={`relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-black transition-all duration-700
      ${isRefPart2 ? 'opacity-100' : 'opacity-0'}`}>

        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-50">
            <img src={bg4} alt="Background_4" className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`} />
        </div>

        {/* Text */}

        <div className="relative z-10 h-100 w-200 flex flex-col items-center justify-center">
          <h1 className='text-4xl text-white'></h1>
        </div>
      </div>
      {/* section 3 */}
       <div 
      ref={RefPart3} 
      className={`relative flex flex-col items-center min-h-screen  w-full overflow-hidden bg-white transition-all duration-700
      ${isRefPart3 ? 'opacity-100' : 'opacity-0'}`}>
        <div className={``}>
          
        </div>
      </div>
    </div>
  )
}
