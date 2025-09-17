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

            {/* part2 */}
            <div>

            </div>

            {/* part3 */}
            <div 
            ref={RefPart3} 
            className={`relative flex flex-col items-center min-h-screen  w-full overflow-hidden bg-white transition-all duration-700
            ${isRefPart3 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="">

                </div>
            </div>


        </div>
    )
}