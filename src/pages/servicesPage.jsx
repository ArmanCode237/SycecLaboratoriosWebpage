import * as React from 'react'
import { useEffect, useState } from 'react'

import { useOnScreen } from '../hooks/useOnScreen'

import Service from '../assets/backgrounds/bg_services.webp'


export default function ServicesPage(){

  //referencias para animaciones en base a la posición de un objeto  
  const [RefPart1, isRefPart1] = useOnScreen(0.6)
  const [RefPart2, isRefPart2] = useOnScreen(0.6)
  const [RefPart3, isRefPart3] = useOnScreen(0.6)
  
  
    return(
        <div className=''>
            <div
                ref={RefPart1}
                className="relative min-h-[100vh] max-h-screen flex justify-center items-center w-full text-white bg-black overflow-hidden"
            >
                <div
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-2000 ${
                    isRefPart1 ? 'opacity-30' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url(${Service})`, backgroundPosition: 'center 30%' }}
                aria-hidden="true"
                />
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <h2
                    className={`text-3xl sm:text-5xl font-bold transition-all duration-1000 ${
                    isRefPart1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}
                >
                    Nuestros servicios
                </h2>
                <p
                    className={`mt-4 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto transition-all duration-1000 ${
                    isRefPart1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                >
                    Ofrecemos un servicio de primer nivel, regulado por nuestras rigurosas pruebas y analisis
                </p>
                </div>
            </div>

            {/* part2: Grid de Servicios Detallados */}
            <div 
            ref={RefPart2} 
            className={`min-h-screen w-full bg-gradient-to-b from-gray-50 to-white py-20 px-6 transition-all duration-700
            ${isRefPart2 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="max-w-7xl mx-auto">
                    <h2 className={`text-4xl font-bold text-center mb-6 text-gray-800 transition-all duration-1000 ${isRefPart2 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                        Servicios Especializados
                    </h2>
                    <p className={`text-center text-gray-600 mb-16 max-w-3xl mx-auto transition-all duration-1000 ${isRefPart2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        Contamos con acreditación EMA y aprobación CONAGUA para garantizar resultados confiables
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Parámetros de campo',
                                icon: (
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                    </svg>
                                ),
                                items: ['pH', 'Conductividad', 'Color', 'Temperatura', 'Salinidad', 'Oxígeno disuelto', 'Temperatura ambiente', 'Cloro residual', 'Materia Flotante'],
                                color: 'from-blue-500 to-cyan-500'
                            },
                            {
                                title: 'Análisis Fisicoquímicos',
                                icon: (
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                ),
                                items: ['DQO', 'DBO₅', 'Carbono Orgánico Total', 'Nitritos', 'Nitratos', 'Nitrogeno Total', 'Fósforo', 'Grasas y Aceites', 'Solidos Suspendidos Totales', 'Sólidos Sedimentables', 'Color Verdadero'],
                                color: 'from-green-500 to-emerald-500'
                            },
                            {
                                title: 'Metales Pesados',
                                icon: (
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                ),
                                items: ['Plomo', 'Mercurio', 'Arsénico', 'Cadmio', 'Cromo', 'Níquel', 'Zinq'],
                                color: 'from-purple-500 to-pink-500'
                            },
                            {
                                title: 'Análisis Microbiológicos',
                                icon: (
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                ),
                                items: ['Coliformes Totales', 'Coliformes Fecales', 'E. coli', 'Enterococos fecales', 'Mesofílicos Aerobios', 'Huevos de Helminto'],
                                color: 'from-orange-500 to-red-500'
                            },
                            {
                                title: 'Muestreo en Campo',
                                icon: (
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                ),
                                items: ['Muestreo Simple', 'Muestreo Compuesto', 'Registro Fotográfico'],
                                color: 'from-teal-500 to-cyan-500'
                            },
                            {
                                title: 'Asesoría Técnica',
                                icon: (
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ),
                                items: ['Interpretación de Resultados', 'Normativas Aplicables', 'Planes de Monitoreo', 'Cumplimiento Ambiental'],
                                color: 'from-indigo-500 to-blue-500'
                            },
                            {
                                title: 'Otros',
                                icon: (
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                                    </svg>
                                ),
                                items: ['Toxicidada Aguda', 'Sólidos Disueltos Totales', 'Sulfatos'],
                                color: 'from-emerald-500 to-lime-500'
                            }
                        ].map((service, idx) => (
                            <div 
                                key={idx}
                                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:-translate-y-2 ${isRefPart2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
                                <ul className="space-y-2">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-600">
                                            <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* part3: Proceso y Certificaciones */}
            <div 
            ref={RefPart3} 
            className={`relative flex flex-col items-center min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-900 to-gray-900 py-20 px-6 transition-all duration-700
            ${isRefPart3 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-4xl font-bold text-center mb-16 text-white transition-all duration-1000 ${isRefPart3 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                        Nuestro Proceso de Trabajo
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Solicitud', desc: 'Contacto inicial y definición de necesidades' },
                            { step: '02', title: 'Muestreo', desc: 'Recolección profesional en campo' },
                            { step: '03', title: 'Análisis', desc: 'Pruebas en laboratorio acreditado' },
                            { step: '04', title: 'Resultados', desc: 'Entrega de informes certificados' }
                        ].map((item, idx) => (
                            <div 
                                key={idx}
                                className={`text-center transition-all duration-1000 ${isRefPart3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${idx * 150}ms` }}
                            >
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                                        {item.step}
                                    </div>
                                    {idx < 3 && (
                                        <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-300 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className={`mt-20 text-center transition-all duration-1000 ${isRefPart3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '600ms' }}>
                        <a 
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
                        >
                            Solicitar Cotización
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>


        </div>
    )
}