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
import { useScrollLock } from '../hooks/useScrollLock' // Ajusta la ruta

export default function GeneralNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // 1. Detectar si es móvil
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)')
    const handleChange = (e) => setIsMobile(e.matches)
    handleChange(mediaQuery)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // 2. Detectar scroll para efecto de transparencia
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 3. 🔥 Cerrar menú Y resetear scroll al cambiar de ruta
  useEffect(() => {
    // Cerrar menú
    if (isMenuOpen) setIsMenuOpen(false)

    // Resetear scroll al inicio
    window.scrollTo({ top: 0, behavior: 'auto' }) // 'auto' es más confiable en móviles

    // Asegurarse de que el body tenga overflow visible
    document.body.style.overflow = '' // Resetea cualquier 'hidden'

  }, [location.pathname]) // Se ejecuta en cada cambio de ruta

  // 4. Manejar cierre del menú (sin duplicar scroll)
  const closeMenu = () => {
    setIsMenuOpen(false)
    // No hacemos scroll aquí, ya lo hace el useEffect
  }

  // Items del menú
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
                text-sm md:text-base font-medium px-4 py-2.5 rounded-xl transition-all duration-400
                ${item.isActive
                  ? 'bg-blue-200 shadow-md scale-102'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-inner'
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
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="p-2 active:bg-gray-100 rounded-full transition-transform active:scale-95 flex items-center justify-center"
          style={{ width: '40px', height: '40px' }}
        >
          {/* Ícono sin texto adicional */}
          {isMenuOpen ? (
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true" // ← Clave: evita lectura de texto extra
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
              aria-hidden="true" // ← Evita que lectores lean "hamburger"
            >
              <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          )}
        </NavbarMenuToggle>
      </NavbarContent>

      {/* Menú móvil con overlay integrado visualmente */}
      <NavbarMenu
        open={isMenuOpen}
        onClose={closeMenu}
        className="sm:hidden fixed bg-white shadow-2xl"
        style={{
          top: '64px',
          right: 0,
          width: '100vw', // O '80vw' si prefieres un drawer más pequeño
          maxWidth: '100vw',
          height: 'calc(100dvh - 64px)',
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 45,
          borderLeft: '1px solid #e5e7eb',
        }}
      >
        {/* Fondo oscuro (opcional: si quieres que empuje el contenido) */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* Contenido del menú */}
        <div
          className="flex flex-col h-full bg-white relative z-50"
          style={{ width: '100%' }}
        >
          <div className="flex-1 px-4 py-6 flex flex-col space-y-2">
            {navItems.map((item) => (
              <NavbarMenuItem key={item.href}>
                <RouterLink
                  to={item.href}
                  onClick={closeMenu}
                  className={`
                    block px-6 py-4 text-lg font-medium rounded-xl transition-all duration-200
                    ${item.isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
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