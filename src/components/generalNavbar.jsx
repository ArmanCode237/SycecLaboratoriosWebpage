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
import logoLab from '../assets/logoLab.png'
import './generalNavbar.css'

export default function GeneralNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const navItems = [
    { label: 'Inicio', href: '/', isActive: false },
    { label: 'Nosotros', href: '/about', isActive: true },
    { label: 'Contacto', href: '/contact', isActive: false },
  ]

  return (
    <Navbar maxWidth="xl" position="static" className="shadow-xl">
      <NavbarBrand>
        <a href="/">
          <img src={logoLab} alt="LogotypeLaboratorios" style={{ height: 60 }} />
        </a>
      </NavbarBrand>

      {/* Toggle button for mobile */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </NavbarContent>

      {/* Desktop menu */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {navItems.map((item, index) => (
          <NavbarItem key={index} isActive={item.isActive}>
            <div className='responsive-button'>
                          <Link
              color="foreground"
              aria-current={item.isActive ? 'page' : undefined}
              href={item.href}
              class={'bg-white hover:bg-gray-400 font-medium text-sm px-5 py-2.5'}
            >
              {item.label}
            </Link>
            </div>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Optional right side buttons (shown in desktop only) */}
      {/* 
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      */}

      {/* Mobile menu dropdown */}
      <NavbarMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color={item.isActive ? 'primary' : 'foreground'}
              className="w-full"
              href={item.href}
              onClick={() => setIsMenuOpen(false)} // closes menu after click
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
