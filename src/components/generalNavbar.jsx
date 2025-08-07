import * as React from 'react'
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react'

import logoLab from '../assets/logoLab_2.png'
import './generalNavbar.css'

export default function GeneralNavbar({ scrolled }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const navItems = [
    { label: 'Inicio', href: '/', isActive: window.location.pathname === '/' },
    { label: 'Nosotros', href: '/about', isActive: window.location.pathname === '/about' },
    { label: 'Contacto', href: '/contact', isActive: window.location.pathname === '/contact' },
  ]

  return (
    <Navbar
      maxWidth="xl"
      position="static"
      className={`shadow-lg transition-all duration-300 px-4 py-2 bg-white/90 backdrop-blur-md`}
    >
      {/* Logo */}
      <NavbarBrand className="flex items-center">
        <a href="/">
          <img src={logoLab} alt="Logotipo Laboratorios" className="h-12" />
        </a>
      </NavbarBrand>

      {/* Botón de menú móvil */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-800"
        />
      </NavbarContent>

      {/* Menú en pantallas grandes */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {navItems.map((item, index) => (
          <NavbarItem key={index} isActive={item.isActive}>
            <Link
              href={item.href}
              aria-current={item.isActive ? 'page' : undefined}
              className={`text-sm font-medium px-5 py-2.5 rounded transition 
                ${item.isActive ? 'bg-gray-300 text-black' : 'hover:bg-gray-100 text-gray-800'}`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Menú desplegable móvil */}
      <NavbarMenu
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        className="bg-white px-6 py-4 sm:hidden w-full"
      >
        {navItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full py-2 px-4 rounded-md text-base font-medium transition 
                ${item.isActive ? 'bg-gray-300 text-black' : 'hover:bg-gray-100 text-gray-800'}`}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
