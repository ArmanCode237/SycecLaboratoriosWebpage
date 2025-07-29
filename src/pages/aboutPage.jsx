import * as React from 'react'
import { useEffect, useState } from 'react'


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
          text-4xl font-bold transition-all duration-1000 
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'}
        `}>Sobre Nosotros</h2>
        <p className={`
          text-gray-600 transition-all duration-1000 
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'}
        `}>SYCEC Laboratorios es una empresa 100% mexicana fundada en 2018 dedicada a los servicios de muestreo y análisis de agua residual y potable.
            Desde noviembre 2023 nos encontramos acreditados ante la Entidad Mexicana de Acreditación.
            Estamos comprometidos con la calidad y seguridad en nuestros servicios y con los clientes.
        </p>
        <br />
        <br />
        <h2 className={`
          text-4xl font-bold transition-all duration-1000 
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'}
        `}>Nuestra historia</h2>
        <p className={`
          text-gray-600 transition-all duration-1000 
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'}
        `}>En 2023 el Laboratorio se acreditó ante la Entidad Mexicana de Acreditación.
            Inicio de operaciones en 2024, bajo la razón social de SYCEC Laboratorios.
        </p>


      </main>
    </div>
    )
}