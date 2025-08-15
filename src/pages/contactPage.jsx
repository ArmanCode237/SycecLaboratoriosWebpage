import * as React from 'react'
import { useEffect, useState } from 'react'

import MapView from '../components/mapView'
import { useOnScreen } from '../hooks/useOnScreen'

export default function ContactPage() {
  const [visible, setVisible] = useState(false)

  // Múltiples refs para secciones
  const [refHeader, isHeaderVisible] = useOnScreen(0.6)
  const [refLocation, isLocationVisible] = useOnScreen(0.6)
  const [refContacts, isContactsVisible] = useOnScreen(0.6)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <main className="p-0 m-0 w-full">
 
        {/* Encabezado */}
        <div
          ref={refHeader}
          className={`transition-all duration-700 pb-10
            ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'}
          `}
        >
          <h2 className={`
            text-4xl pt-10 text-center font-bold transition-all duration-1000 
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'}
          `}>Contáctanos</h2>
          <p className={`
            text-center transition-all duration-2500 
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'}
          `}>
            Si desea solicitar más información sobre nosotros y nuestros servicios, puede hacerlo mediante los siguientes medios
          </p>
        </div>

        {/* Dirección + mapa */}
        <div
          className="flex flex-wrap justify-center items-center text-white gap-20 pt-0 bg-[#127CA6]"
          ref={refLocation}
        >
          <div className={`
            flex flex-col items-center justify-center transition-all duration-1500 ease-in-out w-80 text-center h-120
            ${isLocationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
          `}>
            <svg className="w-40 h-40 text-white dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd"/>
            </svg>
            <p className='font-bold text-2xl'>Dirección:</p>
            Calle Cerrada de Santo Domingo No. 102, Col. Mediterráneo. Cd. del Carmen, Campeche. C.P. 24156
          </div>

          <div className={`
            flex flex-col items-center justify-center transition-all duration-1500 ease-in-out w-200 text-center h-100
            ${isLocationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
          `}>
            <MapView />
          </div>
        </div>

        {/* Contactos */}
        <div
          className='flex flex-wrap justify-center items-center pb-10 pt-10'
          ref={refContacts}
        >
          {/* Contacto 1 */}
          <div className={`
            flex flex-row items-center justify-start gap-6 transition-all duration-1000 ease-in-out w-150 text-left h-100 shadow-lg rounded-xl
            ${isContactsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
          `}>
            <div className="p-4 m-4 w-46 h-46 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
              <svg className="w-32 h-32 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <p className='font-bold text-2xl'>Ing. Rogelio Uc Ríos</p>
              Director SYCEC Laboratorios
              <br /><br />
              <p className='font-bold text-1xl'>Teléfono:</p>
              938-387-3302
              <br /><br />
              <p className='font-bold text-1xl'>Email:</p>
              ruc@42a.mx
            </div>
          </div>

          <div className='w-20'></div>

          {/* Contacto 2 */}
          <div className={`
            flex flex-row items-center justify-start gap-6 transition-all duration-1500 ease-in-out w-150 text-left h-100 shadow-lg rounded-xl
            ${isContactsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
          `}>
            <div className="p-4 m-4 w-46 h-46 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
              <svg className="w-32 h-32 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <p className='font-bold text-2xl'>Q.F.B. Ariel Ávila Aranda</p>
              Subgerencia de Operaciones
              <br /><br />
              <p className='font-bold text-1xl'>Teléfono:</p>
              938-186-2188
              <br /><br />
              <p className='font-bold text-1xl'>Email:</p>
              avila.ariel@sycec.com.mx
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
