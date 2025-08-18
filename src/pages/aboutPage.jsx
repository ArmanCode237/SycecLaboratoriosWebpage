import * as React from 'react'

// Iconos
import CopaIcon from '../assets/cup.png'
import OfficeIcon from '../assets/office.png'
import MedalIcon from '../assets/medal.png'

// Fondo
import Nosotros from '../assets/aboutPage_backgrounds/bg_1.webp'

// Hook personalizado
import { useOnScreen } from '../hooks/useOnScreen'

export default function AboutPage() {
  // ✅ Solo pasamos número (threshold) al hook
  const [refNosotros, visibleNosotros] = useOnScreen(0.2)
  const [refHistoria, visibleHistoria] = useOnScreen(0.3)
  const [refHitos, visibleHitos] = useOnScreen(0.4)

  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-white">
      <main className="w-full">

        {/* === Sobre Nosotros === */}
        <div
          ref={refNosotros}
          className="relative min-h-[100vh] max-h-screen flex justify-center items-center w-full text-white bg-black overflow-hidden"
        >
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-2000 ${
              visibleNosotros ? 'opacity-30' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${Nosotros})`, backgroundPosition: 'center 30%' }}
            aria-hidden="true"
          />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h2
              className={`text-3xl sm:text-5xl font-bold transition-all duration-1000 ${
                visibleNosotros ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              Sobre Nosotros
            </h2>
            <p
              className={`mt-4 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto transition-all duration-1000 ${
                visibleNosotros ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              SYCEC Laboratorios es una empresa 100% mexicana fundada en 2018, dedicada a los servicios de muestreo y análisis de agua residual y potable, garantizando calidad, precisión y cumplimiento normativo.
            </p>
          </div>
        </div>

        {/* === Nuestra Historia === */}
        <section
          ref={refHistoria}
          className={`min-h-[60vh] flex items-center justify-center bg-[#127CA6] text-white px-6 py-16 transition-all duration-1000 ${
            visibleHistoria ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className={`text-3xl sm:text-5xl font-bold mb-6 transition-all duration-1500
              ${visibleHistoria ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>Nuestra historia</h2>
            <p className={`text-sm sm:text-base lg:text-lg leading-relaxed transition-all duration-1000
            ${visibleHistoria ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`
              }>
              En 2023, el laboratorio fue acreditado ante la Entidad Mexicana de Acreditación. Iniciamos operaciones en 2024 bajo la razón social de SYCEC Laboratorios, comprometidos con la excelencia técnica y ambiental.
            </p>
          </div>
        </section>

        {/* === Hitos === */}
        <section
          ref={refHitos}
          className={`w-full px-6 py-16 bg-gray-50 transition-all duration-700 ${
            visibleHitos ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl sm:text-5xl font-bold text-center mb-6 text-gray-800 transition-all duration-1000
              ${visibleHitos ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
              Hitos de la empresa
            </h2>
            <p className={`text-center w-full h-full text-sm sm:text-base max-w-2xl mx-auto mb-12 text-gray-600 transition-all duration-1400
              ${visibleHitos ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
              Estos son algunos de nuestros momentos más importantes en el camino hacia la excelencia.
            </p>

            <div className="flex flex-wrap justify-center gap-12 sm:gap-8">
              {[
                { year: '2018', icon: OfficeIcon, text: 'Creación de SYCEC Laboratorios' },
                { year: '2023', icon: MedalIcon, text: 'Certificación en el Sistema de Gestión de Calidad' },
                { year: '2023', icon: MedalIcon, text: 'Auditoría ante la Entidad Mexicana de Acreditación bajo la norma NMX-EC-17025' },
                { year: '2024', icon: CopaIcon, text: 'Aprobación oficial por CONAGUA' },
              ].map((hito, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center max-w-[240px] transition-all duration-700 ease-out ${
                    visibleHitos
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  }`}
                  style={{
                    transitionDelay: `${300 + index * 150}ms`, // ✅ Así sí funciona en Tailwind
                  }}
                >
                  <img
                    src={hito.icon}
                    alt={`Icono ${hito.year}`}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-[#127CA6] p-2 rounded-3xl mb-3 object-contain"
                    loading="lazy"
                  />
                  <p className="font-bold text-xl sm:text-2xl bg-[#15803d] text-white px-3 py-1 rounded-full mb-3 min-w-[80px]">
                    {hito.year}
                  </p>
                  <p className="text-center text-sm sm:text-base text-gray-700 leading-relaxed">
                    {hito.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}