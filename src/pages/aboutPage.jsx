import * as React from 'react'
import { useEffect, useState } from 'react'

// logotypes
import CopaIcon from '../assets/cup.png'
import OfficeIcon from '../assets/office.png'
import MedalIcon from '../assets/medal.png'

// backgrounds
import Nosotros from '../assets/aboutPage_backgrounds/bg_1.jpg'

// Hooks
import { useOnScreen } from '../hooks/useOnScreen'

export default function AboutPage() {
  // refs y visibilidades para cada sección
  const [refNosotros, visibleNosotros] = useOnScreen(0.8)
  const [refHistoria, visibleHistoria] = useOnScreen(0.8)
  const [refHitos, visibleHitos] = useOnScreen(0.8)

  return (
<div className="flex flex-col w-full overflow-x-hidden">
  <main className="w-full">

    {/* Sobre Nosotros */}
    <div
      ref={refNosotros}
      className="relative min-h-[60vh] flex justify-center items-center w-full text-white bg-black overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className={`
          absolute inset-0 bg-cover bg-center bg-no-repeat 
          transition-opacity duration-700 
          ${visibleNosotros ? 'opacity-30' : 'opacity-0'}
        `}
        style={{
          backgroundImage: `url(${Nosotros})`,
          backgroundPosition: 'center 30%',
        }}
      ></div>

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-10">
        <h2
          className={`
            text-3xl sm:text-4xl font-bold transition-all duration-1000 
            ${visibleNosotros ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'}
          `}
        >
          Sobre Nosotros
        </h2>
        <p
          className={`
            max-w-3xl text-sm sm:text-base mt-4 transition-all duration-1500 
            ${visibleNosotros ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'}
          `}
        >
          SYCEC Laboratorios es una empresa 100% mexicana fundada en 2018 dedicada a los servicios de muestreo y análisis de agua residual y potable...
        </p>
      </div>
    </div>

    {/* Nuestra Historia */}
    <section
      ref={refHistoria}
      className={`
        min-h-[40vh] flex items-center justify-center bg-[#127CA6] text-white px-4 py-10 
        transition-all duration-700
        ${visibleHistoria ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'}
      `}
    >
      <div className="text-center max-w-2xl px-2">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nuestra historia</h2>
        <p className="text-sm sm:text-base">
          En 2023 el Laboratorio se acreditó ante la Entidad Mexicana de Acreditación.
          Inicio de operaciones en 2024, bajo la razón social de SYCEC Laboratorios.
        </p>
      </div>
    </section>


    {/* Hitos de la empresa */}
    <section
      ref={refHitos}
      className={`
        w-full px-4 py-12 transition-all duration-700
        ${visibleHitos ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'}
      `}
    >
      <h2 className="text-3xl sm:text-5xl text-center font-bold mb-6">Hitos de la empresa</h2>
      <p className="text-center text-sm sm:text-base max-w-2xl mx-auto mb-12">
        Estos son algunos de nuestros momentos más importantes...
      </p>

      <div className="flex flex-wrap justify-center items-start gap-10 sm:gap-16">

        {[{
          year: '2018',
          icon: OfficeIcon,
          text: 'Creación Sycec Laboratorios',
          duration: 1500
        }, {
          year: '2023',
          icon: MedalIcon,
          text: 'Certificación en el Sistema de Gestión de Calidad',
          duration: 2000
        }, {
          year: '2023',
          icon: MedalIcon,
          text: 'Auditoría ante la Entidad Mexicana de Acreditación bajo la 17025',
          duration: 2500
        }, {
          year: '2024',
          icon: CopaIcon,
          text: 'Aprobación de Conagua',
          duration: 3000
        }].map((hito, index) => (
          <div
            key={index}
            className={`
              flex flex-col items-center justify-start w-full max-w-[260px] transition-all 
              duration-${hito.duration} ease-in-out
              ${visibleHitos ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
            `}
          >
            <img src={hito.icon} alt={`Icono ${hito.year}`} className="w-20 h-20 bg-[#127CA6] p-2 rounded-3xl mb-2" />
            <p className="text-center font-bold text-xl sm:text-2xl bg-[#15803d] px-3 py-1 rounded-full text-white mb-2">{hito.year}</p>
            <p className="text-center text-sm sm:text-base">{hito.text}</p>
          </div>
        ))}

      </div>
    </section>

  </main>
</div>

  )
}
