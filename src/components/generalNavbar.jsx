import { useState, useEffect, useMemo } from 'react'
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
import './generalNavbar.css'
import { useScrollLock } from '../hooks/useScrollLock'

export default function GeneralNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Detectar si es móvil
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)')
    const handleChange = (e) => setIsMobile(e.matches)
    handleChange(mediaQuery)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false)
  }, [location.pathname])

  // 🔥 Bloquear scroll solo si el menú está abierto y es móvil
  useScrollLock(isMobile && isMenuOpen)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = useMemo(
    () => [
      { label: 'Inicio', href: '/', isActive: location.pathname === '/' },
      { label: 'Nosotros', href: '/about', isActive: location.pathname === '/about' },
      { label: 'Contacto', href: '/contact', isActive: location.pathname === '/contact' },
    ],
    [location.pathname]
  )

  return (
    <Navbar
      maxWidth="xl"
      position="sticky"
      className={`
        px-4 py-2 transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm' : 'bg-white/90 shadow-sm'}
      `}
      style={{ top: 0, zIndex: 50, WebkitTapHighlightColor: 'transparent' }}
    >
      {/* Logo */}
      <NavbarBrand>
        <RouterLink
          to="/"
          aria-label="Página de inicio"
          onClick={closeMenu}
          className="flex items-center active:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg"
        >
          <img
            src={logoLab}
            alt="Logotipo de Laboratorios"
            className="h-10 transition-transform hover:scale-105"
            loading="eager"
          />
        </RouterLink>
      </NavbarBrand>

      {/* Menú Desktop */}
      <NavbarContent className="hidden sm:flex gap-3 md:gap-6" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.href} isActive={item.isActive}>
            <RouterLink
              to={item.href}
              className={`
                text-sm md:text-base font-medium px-4 py-2.5 rounded-xl transition-all duration-300
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

      {/* Botón menú móvil */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 active:bg-gray-100 rounded-full flex items-center justify-center"
          style={{ width: '40px', height: '40px' }}
        >
          <span className="sr-only">{isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
          {isMenuOpen ? (
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          )}
        </NavbarMenuToggle>
      </NavbarContent>

      {/* ✅ Menú móvil - Corregido para que se vea en iOS y Android */}
      <NavbarMenu
        open={isMenuOpen}
        onClose={closeMenu}
        className="sm:hidden fixed inset-y-0 right-0 w-4/5 max-w-xs bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out"
        style={{
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          top: '64px', // Alineado con la altura del navbar
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <NavbarMenuItem key={item.href}>
                <RouterLink
                  to={item.href}
                  onClick={closeMenu}
                  className={`
                    block px-6 py-4 text-lg font-medium rounded-xl
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
      </NavbarMenu>
    </Navbar>
  )
}