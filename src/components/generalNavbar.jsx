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
  const [isAndroid, setIsAndroid] = useState(false);
  const location = useLocation();

  // Detectar dispositivo Android al montar
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsAndroid(/android/.test(userAgent));
    
    const checkMobile = () => window.innerWidth < 640;
    const handleResize = () => {
      if (!checkMobile()) setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Items del menú memoizados
  const navItems = useMemo(() => [
    { label: 'Inicio', href: '/', isActive: location.pathname === '/' },
    { label: 'Nosotros', href: '/about', isActive: location.pathname === '/about' },
    { label: 'Contacto', href: '/contact', isActive: location.pathname === '/contact' },
  ], [location.pathname]);

  // Cerrar menú al navegar
  const handleNavigation = () => setIsMenuOpen(false);

  return (
    <Navbar
      maxWidth="xl"
      position="sticky"
      className={`px-4 py-2 ${scrolled ? 'bg-white/95 shadow-md' : 'bg-white'}`}
      style={{ 
        top: 0, 
        zIndex: 50,
        // Optimización para Android
        WebkitTapHighlightColor: 'transparent'
      }}
    >
      {/* Logo optimizado para Android */}
      <NavbarBrand className="flex items-center">
        <RouterLink 
          to="/" 
          aria-label="Inicio"
          onClick={handleNavigation}
          className="active:opacity-70"
        >
          <img
            src={logoLab}
            alt="Logotipo Laboratorios"
            className="h-10 sm:h-12"
            loading="eager"
            width="auto"
            height="auto"
            // Prevenir zoom en Android
            onTouchStart={(e) => isAndroid && e.preventDefault()}
          />
        </RouterLink>
      </NavbarBrand>

      {/* Menú desktop */}
      <NavbarContent className="hidden sm:flex gap-1 md:gap-3" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.href} isActive={item.isActive}>
            <RouterLink
              to={item.href}
              className={`text-sm md:text-base font-medium px-3 py-2 rounded-lg ${
                item.isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
              }`}
              aria-current={item.isActive ? 'page' : undefined}
            >
              {item.label}
            </RouterLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Botón menú móvil optimizado para Android */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 active:bg-gray-100"
          // Reducir delay en Android
          style={{ touchAction: 'manipulation' }}
        />
      </NavbarContent>

      {/* Menú móvil optimizado para Android */}
      <NavbarMenu
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        className="sm:hidden w-full bg-white"
        style={{
          height: 'calc(var(--vh, 1vh) * 100 - 64px)',
          top: '64px',
          overflowY: 'auto',
          // Scroll más fluido en Android
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain'
        }}
      >
        <div className="flex flex-col py-2">
          {navItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <RouterLink
                to={item.href}
                onClick={handleNavigation}
                className={`block py-3 px-4 text-base active:bg-gray-100 ${
                  item.isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
                aria-current={item.isActive ? 'page' : undefined}
                // Mejorar respuesta táctil
                style={{ touchAction: 'manipulation' }}
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