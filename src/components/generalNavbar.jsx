import * as React from 'react'
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'
import logoLab from '../assets/logoLab.png'

export default function GeneralNavbar() {
  const navItems = [
    { label: 'Inicio', href: '/', isActive: false },
    { label: 'Nosotros', href: '/about', isActive: true },
    { label: 'Contacto', href: '/contact', isActive: false },
  ]

  return (
    <div className='shadow-xs'>
    <Navbar maxWidth="xl" position="static" className="shadow-xl">
     <NavbarBrand>
      <a href="/">
        <img src={logoLab} alt="LogotypeLaboratorios" style={{ height: 40 }} />
      </a>
    </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {navItems.map((item, index) => (
          <NavbarItem key={index} isActive={item.isActive}>
            <Link
              color="foreground"
              aria-current={item.isActive ? 'page' : undefined}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
    </div>
  )
}
