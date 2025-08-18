import * as React from 'react'
import { useEffect, useState } from 'react'

import MapView from '../components/mapView'
import { useOnScreen } from '../hooks/useOnScreen'

export default function ContactPage() {
  const [visible, setVisible] = useState(false)

  // Múltiples refs para animaciones al hacer scroll
  const [refHeader, isHeaderVisible] = useOnScreen(0.6 )
  const [refLocation, isLocationVisible] = useOnScreen( 0.6 )
  const [refContacts, isContactsVisible] = useOnScreen( 0.6 )

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex flex-col items-center bg-white">
      <main className="w-full max-w-screen-xl mx-auto" role="main">
        
        {/* Sección: Encabezado */}
        <section
          ref={refHeader}
          className="px-6 py-12 text-center transition-all duration-700 md:py-16"
          style={{
            opacity: isHeaderVisible ? 1 : 0,
            transform: isHeaderVisible ? 'translateY(0)' : 'translateX(1rem)',
          }}
        >
          <h2
            className={`text-3xl font-bold transition-all duration-1000 md:text-4xl ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'
            }`}
            aria-label="Contáctanos"
          >
            Contáctanos
          </h2>
          <p
            className={`mt-4 text-base transition-all duration-2500 md:text-lg ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'
            } max-w-3xl mx-auto`}
          >
            Si desea solicitar más información sobre nosotros y nuestros servicios, puede hacerlo mediante los siguientes medios.
          </p>
        </section>

        {/* Sección: Dirección y Mapa */}
        <section
          ref={refLocation}
          className="flex flex-col items-center justify-center px-6 py-12 bg-[#127CA6] text-white md:flex-row md:gap-12 "
          style={{
            opacity: isLocationVisible ? 1 : 0,
            transform: isLocationVisible ? 'translateY(0)' : 'translateY(1rem)',
            transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
          }}
        >
          {/* Dirección */}
          <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/3">
            <svg
              className="w-24 h-24 mb-4 text-white md:w-32 md:h-32"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-bold text-xl md:text-2xl mb-2">Dirección:</p>
            <p className="text-sm md:text-base leading-relaxed">
              Calle Cerrada de Santo Domingo No. 102, Col. Mediterráneo.<br />
              Cd. del Carmen, Campeche. C.P. 24156
            </p>
          </div>

          {/* Mapa */}
          <div className="flex w-full md:w-2/3 max-h-[50vh] md:h-[500px] rounded-xl overflow-hidden shadow-lg justify-center items-center">
            <MapView />
          </div>
        </section>

        {/* Sección: Contactos */}
        <section
          ref={refContacts}
          className="flex flex-col items-center px-6 py-12 space-y-10 md:flex-row md:space-y-0 md:space-x-10 md:justify-center"
          style={{
            opacity: isContactsVisible ? 1 : 0,
            transform: isContactsVisible ? 'translateY(0)' : 'translateY(1rem)',
            transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
          }}
        >
          {/* Contacto 1 */}
          {[
            {
              name: 'Ing. Rogelio Uc Ríos',
              title: 'Director SYCEC Laboratorios',
              phone: '938-387-3302',
              email: 'ruc@42a.mx',
              delay: '1000',
            },
            {
              name: 'Q.F.B. Ariel Ávila Aranda',
              title: 'Subgerencia de Operaciones',
              phone: '938-186-2188',
              email: 'avila.ariel@sycec.com.mx',
              delay: '1500',
            },
          ].map((contact, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-[80vh] transition-all duration-1000 ease-in-out p-4"
              style={{
                opacity: isContactsVisible ? 1 : 0,
                transform: isContactsVisible ? 'translateY(0)' : 'translateY(1rem)',
                transitionDelay: `${idx === 0 ? '0.1s' : '0.5s'}`,
              }}
            >
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-full m-4 flex-shrink-0">
                <svg
                  className="w-16 h-16 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="px-2 pb-4 md:pb-0 text-left">
                <p className="font-bold text-xl text-gray-900">{contact.name}</p>
                <p className="text-gray-700">{contact.title}</p>
                <div className="mt-3">
                  <p className="font-semibold text-sm text-gray-800">Teléfono:</p>
                  <p className="text-sm">{contact.phone}</p>
                </div>
                <div className="mt-2">
                  <p className="font-semibold text-sm text-gray-800">Email:</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}