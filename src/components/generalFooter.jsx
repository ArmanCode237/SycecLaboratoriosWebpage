import * as React from 'react'
import { Link } from '@heroui/react'

export default function Footer() {
  return (
    <footer className="bg-[#127CA6] text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo o nombre */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-2xl font-semibold">SYCEC Laboratorios</p>
            <p className="text-sm">Confianza y calidad científica</p>
          </div>

          {/* Links de navegación */}
          <div className="flex space-x-6">
            <Link href="/" className="hover:underline">Inicio</Link>
            <Link href="/about" className="hover:underline">Nosotros</Link>
            <Link href="/contact" className="hover:underline">Contacto</Link>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-200">
          © {new Date().getFullYear()} SYCEC Laboratorios. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
