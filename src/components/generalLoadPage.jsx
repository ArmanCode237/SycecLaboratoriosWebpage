// src/components/LoadingScreen.jsx
import React from 'react'
import logoLab from '../assets/logoLab_2.webp' // ajusta la ruta según tu proyecto
import './generalLoadPage.css'

export default function LoadingScreen( {visible}) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <img src={logoLab} alt="Cargando..." className="w-160 h-auto animate-pulse" />
      <p className="mt-4 text-gray-600 text-lg loader"></p>
    </div>
  )
}
