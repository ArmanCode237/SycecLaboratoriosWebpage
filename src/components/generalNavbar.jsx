import { useState, useMemo, useEffect } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react';
import logoLab from '../assets/logoLab_2.png';
import './generalNavbar.css';

export default function GeneralNavbar({ scrolled = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const location = useLocation();

  // Efecto para detectar cambios en el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Memoizar los items del menú
  const navItems = useMemo(() => [
    { label: 'Inicio', href: '/', isActive: location.pathname === '/' },
    { label: 'Nosotros', href: '/about', isActive: location.pathname === '/about' },
    { label: 'Contacto', href: '/contact', isActive: location.pathname === '/contact' },
  ], [location.pathname]);

  // Cerrar menú al navegar (solo en móviles)
  const handleNavigation = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <Navbar
      maxWidth="xl"
      position="sticky"
      className={`transition-all duration-200 px-4 py-2 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-xl' 
          : 'bg-white'
      }`}
      style={{ top: 0, zIndex: 50 }}
    >
      {/* Logo optimizado */}
      <NavbarBrand className="flex items-center">
        <RouterLink 
          to="/" 
          aria-label="Inicio" 
          className=""
          onClick={handleNavigation}
        >
          <img
            src={logoLab}
            alt="Logotipo Laboratorios"
            className="h-10 sm:h-12 transition-all duration-200"
            loading="lazy"
            width="auto"
            height="auto"
          />
        </RouterLink>
      </NavbarBrand>

      {/* Menú para desktop */}
      <NavbarContent className="hidden sm:flex gap-2" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.href} isActive={item.isActive}>
            <RouterLink
              to={item.href}
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                item.isActive 
                  ? 'bg-gray-200 text-black font-semibold' 
                  : 'hover:bg-gray-100 text-gray-800'
              }`}
              aria-current={item.isActive ? 'page' : undefined}
            >
              {item.label}
            </RouterLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Toggle para móvil */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 p-2 rounded-lg"
        />
      </NavbarContent>

      {/* Menú para móvil */}
      <NavbarMenu
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        className="bg-white/95 backdrop-blur-sm sm:hidden w-full py-3 px-4"
        style={{
          height: 'calc(100vh - 64px)',
          top: '64px',
          left: 0,
          right: 0
        }}
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <RouterLink
                to={item.href}
                onClick={handleNavigation}
                className={`block w-full py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                  item.isActive 
                    ? 'bg-gray-200 text-black font-semibold' 
                    : 'hover:bg-gray-100 text-gray-800'
                }`}
                aria-current={item.isActive ? 'page' : undefined}
              >
                {item.label}
              </RouterLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
}