import * as React from 'react'
import { useEffect, useState } from 'react'

export default function ContactPage(){
    const [visible, setVisible] = useState(false)

    useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timeout)
    }, [])

    return (
    <div className="flex flex-col items-center justify-center">
      <main className="p-6 text center">
        <h2 className={`
          text-4xl font-bold transition-all duration-1000 
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-4'}
        `}>Contactanos</h2>
        <p className="text-gray-600">Esta es una página de inicio creada con HeroUI y React.</p>
      </main>
    </div>
    )
}