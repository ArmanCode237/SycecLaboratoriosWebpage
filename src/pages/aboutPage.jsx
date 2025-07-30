import * as React from 'react'
import { useEffect, useState } from 'react'
import CopaIcon from '../assets/cup.png'
import OfficeIcon from '../assets/office.png'
import MedalIcon from '../assets/medal.png'


export default function AboutPage() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timeout)
    }, [])

    return (
    <div className="flex flex-col items-center justify-center p-6">
      <main className="p-6">
        <h2 className={`
          text-4xl text-center font-bold transition-all duration-1000 
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'}
        `}>Sobre Nosotros</h2>
        <p className={`
          text-gray-600 text-center transition-all duration-1500 
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'}
        `}>SYCEC Laboratorios es una empresa 100% mexicana fundada en 2018 dedicada a los servicios de muestreo y análisis de agua residual y potable.
            Desde noviembre 2023 nos encontramos acreditados ante la Entidad Mexicana de Acreditación.
            Estamos comprometidos con la calidad y seguridad en nuestros servicios y con los clientes.
        </p>
        <br />
        <br />
        <h2 className={`
          text-4xl text-center font-bold transition-all duration-2000 
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'}
        `}>Nuestra historia</h2>
        <p className={`
          text-gray-600 mb-4 pb-4 text-center transition-all duration-2500 
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'}
        `}>En 2023 el Laboratorio se acreditó ante la Entidad Mexicana de Acreditación.
            Inicio de operaciones en 2024, bajo la razón social de SYCEC Laboratorios.
        </p>
        <br />
        <br />
        <h2 className={`
          text-4xl text-center font-bold transition-all duration-2000 
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'}
        `}>Hitos de la empresa</h2>
        <div className='flex flex-wrap justify-center items-center gap-20 pt-16'>

          {/* icon_1 */}
          <div className={`flex flex-col items-center justify-center transition-all duration-1500 ease-in-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <img className={`w-30 h-auto bg-[#127CA6] m-2 p-2 rounded-4xl`}
            src={OfficeIcon} alt="Oficce" />
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1.707 2.707 5.586 5.586a1 1 0 0 0 1.414 0l5.586-5.586A1 1 0 0 0 13.586 1H2.414a1 1 0 0 0-.707 1.707Z"/>
            </svg>
            <p className='text-center font-bold text-2xl bg-[#15803d] p-1 pr-2 pl-2 rounded-full text-white'>2018</p>
            <p className='text-center w-60 h-20'>Creación Sycec Laboratorios</p>
          </div>
          {/* icon_2 */}
          <div className={`flex flex-col items-center justify-center transition-all duration-2000 ease-in-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <img className={`w-30 h-auto bg-[#127CA6] m-2 p-2 rounded-4xl`}
            src={MedalIcon} alt="Medalla" />
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1.707 2.707 5.586 5.586a1 1 0 0 0 1.414 0l5.586-5.586A1 1 0 0 0 13.586 1H2.414a1 1 0 0 0-.707 1.707Z"/>
            </svg>
            <p className='text-center font-bold text-2xl bg-[#15803d] p-1 pr-2 pl-2 rounded-full text-white'>2023</p>
            <p className='text-center w-60 h-20'>Certificación en el Sitema de Gestión de Calidad</p>
          </div>
          {/* icon_3 */}
          <div className={`flex flex-col items-center justify-center transition-all duration-2500 ease-in-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <img className={`w-30 h-auto bg-[#127CA6] m-2 p-2 rounded-4xl`}
            src={MedalIcon} alt="Medalla" />
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1.707 2.707 5.586 5.586a1 1 0 0 0 1.414 0l5.586-5.586A1 1 0 0 0 13.586 1H2.414a1 1 0 0 0-.707 1.707Z"/>
            </svg>
            <p className='text-center font-bold text-2xl bg-[#15803d] p-1 pr-2 pl-2 rounded-full text-white'>2023</p>
            <p className='text-center w-60 h-20'>Auditoria ante la ENtidad Mexicana de Acreditación bajo la 17025</p>            
          </div>
          {/* icon_4 */}
          <div className={`flex flex-col items-center justify-center transition-all duration-3000 ease-in-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <img className={`w-30 h-auto bg-[#127CA6] m-2 p-2 rounded-4xl`}
            src={CopaIcon} alt="Copa" />
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1.707 2.707 5.586 5.586a1 1 0 0 0 1.414 0l5.586-5.586A1 1 0 0 0 13.586 1H2.414a1 1 0 0 0-.707 1.707Z"/>
            </svg>
            <p className='text-center font-bold text-2xl bg-[#15803d] p-1 pr-2 pl-2 rounded-full text-white'>2024</p>
            <p className='text-center w-60 h-20'>Aprobación de Conagua</p>            
          </div>
        </div>



      </main>
    </div>
    )
}