import { useState, useEffect } from 'react'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
} from '@heroui/react'
import logoLab from '../assets/logoLab_2.png'
import menuImg from '../assets/menu.png'
import closeImg from '../assets/close.png'
import './generalNavbar.css'
import { useScrollLock } from '../hooks/useScrollLock'

export default function GeneralNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Items del menú
  const navItems = [
    { label: 'Inicio', href: '/', isActive: location.pathname === '/' },
    { label: 'Nosotros', href: '/about', isActive: location.pathname === '/about' },
    { label: 'Contacto', href: '/contact', isActive: location.pathname === '/contact' },
  ]

  // Estado del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [animationState, setAnimationState] = useState('closed') // 'opening', 'open', 'closing', 'closed'

  // Efecto para manejar el estado de animación
  useEffect(() => {
    if (isMenuOpen) {
      setAnimationState('opening')
      // Después de la animación de entrada
      const timer = setTimeout(() => setAnimationState('open'), 400)
      return () => clearTimeout(timer)
    } else {
      setAnimationState('closing')
      // Después de la animación de salida
      const timer = setTimeout(() => setAnimationState('closed'), 300)
      return () => clearTimeout(timer)
    }
  }, [isMenuOpen])

  // Bloquear scroll cuando el menú está en estado abierto o abriendo
  useScrollLock(isMenuOpen)

  return (
    <Navbar
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`
        px-4 py-2 transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm' : 'bg-white/90 shadow-sm'}
      `}
      style={{ top: 0, zIndex: 50 }}
    >
      {/* Logo */}
      <NavbarBrand>
        <RouterLink
          to="/"
          aria-label="Página de inicio"
          className="flex items-center active:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg"
        >
          <img
            src={logoLab}
            alt="Logotipo de Laboratorios"
            className="h-10 hover:scale-105 transition-transform duration-300"
            loading="eager"
          />
        </RouterLink>
      </NavbarBrand>

      {/* Menú Desktop */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.href} isActive={item.isActive}>
            <RouterLink
              to={item.href}
              className={`
                text-sm md:text-base font-medium px-4 py-2.5 rounded-xl
                transition-all duration-300
                ${item.isActive
                  ? 'bg-blue-200 font-semibold scale-105'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }
              `}
              aria-current={item.isActive ? 'page' : undefined}
            >
              {item.label}
            </RouterLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Botón menú móvil con imágenes personalizadas */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="p-2 active:bg-gray-100 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-200 hover:scale-110 active:scale-95"
          style={{ width: '40px', height: '40px' }}
        >
          <span className="sr-only">{isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
          <img
            src={isMenuOpen ? closeImg : menuImg}
            alt=""
            aria-hidden="true"
            className="w-6 h-6 object-contain"
            style={{ filter: 'brightness(0) invert(0)' }} /* Ajusta si es necesario */
          />
        </NavbarMenuToggle>
      </NavbarContent>

      {/* Menú móvil con animaciones completas */}
      <NavbarMenu className="sm:hidden">
        {/* Backdrop con animación */}
        <div
          className={`backdrop ${animationState === 'opening' || animationState === 'open' ? 'open' : animationState === 'closing' ? 'close' : ''}`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Panel del menú */}
        <div
          className={`menu-panel ${animationState === 'opening' || animationState === 'open' ? 'open' : animationState === 'closing' ? 'close' : ''}`}
        >
          <div className="flex flex-col h-full">
            <div className="flex-1 px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <NavbarMenuItem key={item.href}>
                  <RouterLink
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      block px-6 py-4 text-lg font-medium rounded-xl
                      transition-colors duration-300
                      ${item.isActive
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                      }
                    `}
                    aria-current={item.isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </RouterLink>
                </NavbarMenuItem>
              ))}
            </div>
            <div className="border-t border-gray-200 px-6 py-3 text-sm text-gray-500 text-center bg-gray-50">
              © {new Date().getFullYear()} Laboratorios
            </div>
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  )
}