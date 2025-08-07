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
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Efecto para detectar cambios en el tamaño de pantalla (SSR compatible)
  useEffect(() => {
    const checkMobile = () => window.innerWidth < 640;
    setIsMobile(checkMobile());
    
    const handleResize = () => {
      const nowMobile = checkMobile();
      setIsMobile(nowMobile);
      if (!nowMobile) setIsMenuOpen(false);
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

  // Cerrar menú al navegar
  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      maxWidth="xl"
      position="sticky"
      className={`transition-all duration-200 px-4 py-2 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md' 
          : 'bg-white'
      }`}
      style={{ 
        top: 0, 
        zIndex: 50,
        // Asegurar compatibilidad con dispositivos iOS
        position: '-webkit-sticky'
      }}
    >
      {/* Logo optimizado para móviles */}
      <NavbarBrand className="flex items-center flex-shrink-0">
        <RouterLink 
          to="/" 
          aria-label="Inicio" 
          className="focus:outline-none active:opacity-80"
          onClick={handleNavigation}
        >
          <img
            src={logoLab}
            alt="Logotipo Laboratorios"
            className="h-10 sm:h-12 transition-all duration-200"
            loading="eager" // Mejor para el logo principal
            width="auto"
            height="auto"
            decoding="async"
          />
        </RouterLink>
      </NavbarBrand>

      {/* Menú para desktop */}
      <NavbarContent className="hidden sm:flex gap-1 md:gap-3" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.href} isActive={item.isActive}>
            <RouterLink
              to={item.href}
              className={`text-sm md:text-base font-medium px-3 py-2 md:px-4 md:py-2.5 rounded-lg transition-colors ${
                item.isActive 
                  ? 'bg-primary-100 text-primary-700 font-semibold' 
                  : 'hover:bg-gray-50 text-gray-700 active:bg-gray-100'
              }`}
              aria-current={item.isActive ? 'page' : undefined}
            >
              {item.label}
            </RouterLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Toggle para móvil - Mejorado para touch */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 p-2 rounded-lg active:bg-gray-100"
        />
      </NavbarContent>

      {/* Menú móvil - Optimizado para UX táctil */}
      <NavbarMenu
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        className="bg-white/97 backdrop-blur-sm sm:hidden w-full py-3 px-4"
        style={{
          height: 'calc(100dvh - 64px)', // Usa dvh para mejor compatibilidad
          top: '64px',
          left: 0,
          right: 0,
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch' // Scroll suave en iOS
        }}
      >
        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <RouterLink
                to={item.href}
                onClick={handleNavigation}
                className={`block w-full py-3 px-4 rounded-lg text-base font-medium transition-colors active:scale-95 ${
                  item.isActive 
                    ? 'bg-primary-100 text-primary-700 font-semibold' 
                    : 'hover:bg-gray-50 text-gray-700 active:bg-gray-100'
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