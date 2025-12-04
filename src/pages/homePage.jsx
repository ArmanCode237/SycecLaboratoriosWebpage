import * as React from 'react'
import { useEffect, useState } from 'react'

import { useOnScreen } from '../hooks/useOnScreen'

//logotypes
import logoLab from '../assets/logoLab.webp'
import emaLogo from '../assets/other/ema.webp'
import conaguaLogo from '../assets/other/conagua.webp'

//backgrounds
import bg1 from '../assets/backgrounds/bg1.webp'
import bg2 from '../assets/backgrounds/bg2.webp'
import bg3 from '../assets/backgrounds/bg3.webp'
import bg4 from '../assets/backgrounds/bg_ptar.webp'


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
      className={`relative flex flex-col items-center justify-center min-h-screen  w-full overflow-hidden bg-black transition-
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
        <div className="relative flex flex-col items-center">
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
      {/* section 2: Misión y Visión */}
      <div 
      ref={RefPart2} 
      className={`relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 transition-all duration-700
      ${isRefPart2 ? 'opacity-100' : 'opacity-0'}`}>

        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
            <img src={bg4} alt="Background_4" className={`absolute top-0 left-0 w-full h-full object-cover`} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Misión */}
            <div className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl transition-all duration-1000 hover:scale-105 hover:bg-white/15 ${isRefPart2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-white">Misión</h2>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed">
                Proporcionar servicios de muestreo y análisis de agua con la más alta calidad y precisión, cumpliendo con las normativas nacionales e internacionales para contribuir al cuidado del medio ambiente y la salud pública.
              </p>
            </div>

            {/* Visión */}
            <div className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl transition-all duration-1000 hover:scale-105 hover:bg-white/15 ${isRefPart2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-white">Visión</h2>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed">
                Ser el laboratorio líder en México en servicios de análisis de agua, reconocido por nuestra excelencia técnica, innovación constante y compromiso con la sustentabilidad ambiental.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 3: Servicios Destacados */}
      <div 
      ref={RefPart3} 
      className={`relative flex flex-col items-center min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 transition-all duration-700
      ${isRefPart3 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent transition-all duration-1000 ${isRefPart3 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Nuestros Servicios
          </h2>
          <p className={`text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto transition-all duration-1000 ${isRefPart3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Ofrecemos análisis especializados con tecnología de vanguardia
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                title: 'Análisis de Agua Potable',
                description: 'Verificación completa de parámetros físicos, químicos y microbiológicos según NOM-127-SSA1-2021',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: 'Agua Residual',
                description: 'Monitoreo de descargas industriales y municipales cumpliendo con normativas ambientales vigentes',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
                title: 'Muestreo Especializado',
                description: 'Personal capacitado con equipos calibrados para muestreo en campo según protocolos oficiales',
                color: 'from-purple-500 to-purple-600'
              }
            ].map((service, idx) => (
              <div 
                key={idx}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 ${isRefPart3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + idx * 150}ms` }}
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className={`text-center mt-16 transition-all duration-1000 ${isRefPart3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '800ms' }}>
            <a 
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Ver Todos los Servicios
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
