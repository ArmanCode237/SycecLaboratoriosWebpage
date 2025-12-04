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
          className="flex flex-col items-center px-6 py-12 space-y-10 md:flex-row md:space-y-0 md:space-x-10 md:justify-center bg-gradient-to-b from-white to-gray-50"
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
              className="group flex flex-col md:flex-row items-center bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-[80vh] transition-all duration-500 ease-in-out p-6 border border-gray-100 hover:shadow-2xl hover:-translate-y-2"
              style={{
                opacity: isContactsVisible ? 1 : 0,
                transform: isContactsVisible ? 'translateY(0)' : 'translateY(1rem)',
                transitionDelay: `${idx === 0 ? '0.1s' : '0.5s'}`,
              }}
            >
              <div className="p-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl m-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-16 h-16 text-white"
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
              <div className="px-2 pb-4 md:pb-0 text-left flex-1">
                <p className="font-bold text-2xl text-gray-900 mb-1">{contact.name}</p>
                <p className="text-gray-600 mb-4">{contact.title}</p>
                <div className="mt-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm text-gray-800">Teléfono:</p>
                    <a href={`tel:${contact.phone.replace(/-/g, '')}`} className="text-sm text-blue-600 hover:underline font-medium">{contact.phone}</a>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm text-gray-800">Email:</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm text-blue-600 hover:underline font-medium"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Sección: Formulario de Contacto */}
        <section className="px-6 py-20 bg-gradient-to-br from-blue-900 to-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 text-white">
              Envíanos un Mensaje
            </h2>
            <p className="text-center text-gray-300 mb-12">
              ¿Tienes alguna pregunta? Completa el formulario y te responderemos lo antes posible
            </p>

            <form className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2" htmlFor="name">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2" htmlFor="email">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2" htmlFor="phone">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2" htmlFor="subject">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  placeholder="¿En qué podemos ayudarte?"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Enviar Mensaje</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}