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
  const [deviceType, setDeviceType] = useState('desktop');
  const location = useLocation();

  // Detección completa del dispositivo al montar
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    let detectedDevice = 'desktop';
    
    if (/android/.test(userAgent)) {
      detectedDevice = 'android';
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      detectedDevice = 'ios';
    }

    setDeviceType(detectedDevice);

    const handleResize = () => {
      if (window.innerWidth >= 640) setIsMenuOpen(false);
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

  // Configuraciones específicas por dispositivo
  const deviceSettings = {
    desktop: {
      menuTransition: 'transform 0.3s ease, opacity 0.3s ease',
      tapHighlight: 'transparent'
    },
    ios: {
      menuTransition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      tapHighlight: 'rgba(0,0,0,0.1)'
    },
    android: {
      menuTransition: 'transform 0.25s ease-out',
      tapHighlight: 'transparent'
    }
  };

  const settings = deviceSettings[deviceType] || deviceSettings.desktop;

  return (
    <Navbar
      maxWidth="xl"
      position="sticky"
      className={`px-4 py-2 transition-colors duration-200 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white'
      }`}
      style={{ 
        top: 0, 
        zIndex: 50,
        position: '-webkit-sticky', // Soporte para Safari
        WebkitTapHighlightColor: settings.tapHighlight
      }}
    >
      {/* Logo optimizado universalmente */}
      <NavbarBrand className="flex items-center">
        <RouterLink 
          to="/" 
          aria-label="Inicio"
          onClick={handleNavigation}
          className={`active:opacity-80 ${deviceType === 'ios' ? 'active:scale-95' : ''}`}
        >
          <img
            src={logoLab}
            alt="Logotipo Laboratorios"
            className="h-10 sm:h-12"
            loading="eager"
            width="auto"
            height="auto"
            onTouchStart={(e) => deviceType !== 'desktop' && e.preventDefault()}
          />
        </RouterLink>
      </NavbarBrand>

      {/* Menú desktop */}
      <NavbarContent className="hidden sm:flex gap-1 md:gap-3" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.href} isActive={item.isActive}>
            <RouterLink
              to={item.href}
              className={`text-sm md:text-base font-medium px-3 py-2 rounded-lg transition-colors ${
                item.isActive 
                  ? 'bg-primary-100 text-primary-700 font-semibold' 
                  : 'text-gray-700 hover:bg-gray-50'
              } ${
                deviceType === 'ios' ? 'active:scale-95' : 'active:opacity-80'
              }`}
              aria-current={item.isActive ? 'page' : undefined}
            >
              {item.label}
            </RouterLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Botón menú móvil optimizado universalmente */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-2 rounded-lg ${
            deviceType === 'ios' 
              ? 'active:bg-gray-100 active:scale-95' 
              : 'active:bg-gray-100 active:opacity-80'
          }`}
          style={{ 
            touchAction: 'manipulation',
            transition: deviceType === 'ios' ? 'transform 0.2s' : 'none'
          }}
        />
      </NavbarContent>

      {/* Menú móvil optimizado para todos los dispositivos */}
      <NavbarMenu
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        className="sm:hidden w-full bg-white/97 backdrop-blur-sm"
        style={{
          height: deviceType === 'ios' 
            ? 'calc(100dvh - 64px)' 
            : 'calc(var(--vh, 1vh) * 100 - 64px)',
          top: '64px',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain',
          transition: settings.menuTransition,
          ...(deviceType === 'ios' && { 
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          })
        }}
      >
        <div className="flex flex-col py-2">
          {navItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <RouterLink
                to={item.href}
                onClick={handleNavigation}
                className={`block py-3 px-4 text-base transition-colors ${
                  item.isActive 
                    ? 'bg-primary-50 text-primary-600 font-medium' 
                    : 'text-gray-700'
                } ${
                  deviceType === 'ios' 
                    ? 'active:scale-95 active:bg-gray-100' 
                    : 'active:bg-gray-100'
                }`}
                aria-current={item.isActive ? 'page' : undefined}
                style={{ 
                  touchAction: 'manipulation',
                  transition: deviceType === 'ios' ? 'transform 0.1s' : 'none'
                }}
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