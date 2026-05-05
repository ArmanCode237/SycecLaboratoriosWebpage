import { useState, useEffect, useCallback } from 'react'
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
import logoLab from '../assets/logoLab_2.webp'
import menuImg from '../assets/menu.webp'
import closeImg from '../assets/close.webp'
import './generalNavbar.css'
import { useScrollLock } from '../hooks/useScrollLock'

export default function GeneralNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Items del menú — dinámico según ruta
  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/about' },
    { label: 'Servicios', href: '/services' },
    { label: 'Contacto', href: '/contact' },
  ]

  // Bloquear scroll en móvil cuando menú está abierto
  useScrollLock(isMenuOpen)

  // Manejar cambio de estado del menú
  const handleMenuToggle = useCallback((open) => {
    setIsMenuOpen(open)
  }, [])

  // Cerrar menú al hacer clic en un enlace (solo móvil)
  const closeMenu = useCallback(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [isMenuOpen])

  return (
    <Navbar
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={handleMenuToggle}
      className={`
        px-4 py-2 transition-all duration-300 ease-in-out
        ${isScrolled
          ? 'bg-white/95 shadow-lg backdrop-blur-sm'
          : 'bg-white/90 shadow-sm'
        }
        z-50
      `}
    >
      {/* Logo */}
      <NavbarBrand>
        <RouterLink
          to="/"
          aria-label="Ir a la página de inicio"
          className="flex items-center active:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg transition-opacity"
        >
          <img
            src={logoLab}
            alt="Logotipo de Laboratorios"
            className="h-10 hover:scale-105 transition-transform duration-300"
            loading="eager"
            width={70}
            height={40}
          />
        </RouterLink>
      </NavbarBrand>

      {/* Menú Desktop */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href
          return (
            <NavbarItem key={item.href} isActive={isActive}>
              <RouterLink
                to={item.href}
                className={`
                  text-sm md:text-base font-medium px-4 py-2.5 rounded-xl
                  transition-all duration-300
                  ${isActive
                    ? 'bg-blue-200 font-semibold scale-105 text-blue-800'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }
                `}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </RouterLink>
            </NavbarItem>
          )
        })}
      </NavbarContent>

      {/* Botón menú móvil — personalizado con tus íconos */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          className="w-10 h-10 relative"
        >
          <span className="sr-only">
            {isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          </span>
          <img
            src={isMenuOpen ? closeImg : menuImg}
            alt=""
            className="w-full h-full object-contain pointer-events-none"
            loading="eager"
            decoding="sync"
            width={40}
            height={40}
          />
        </NavbarMenuToggle>
      </NavbarContent>

      {/* Menú móvil */}
      <NavbarMenu className="pt-8 pb-20">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href
          return (
            <NavbarMenuItem key={item.href} className="mb-2">
              <RouterLink
                to={item.href}
                onClick={closeMenu}
                className={`
                  block w-full px-6 py-4 text-lg font-medium rounded-xl
                  transition-colors duration-300 text-start
                  ${isActive
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  }
                `}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </RouterLink>
            </NavbarMenuItem>
          )
        })}

        {/* Footer del menú */}
        <div className="border-t border-gray-200 mt-6 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Laboratorios. Todos los derechos reservados.
        </div>
      </NavbarMenu>
    </Navbar>
  )
}