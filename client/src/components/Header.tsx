import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Marcas', href: '#marcas' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="bg-background border-b-2 border-accent sticky top-0 z-50">
      {/* Top Bar - Contact Info */}
      <div className="bg-secondary border-b border-border">
        <div className="container flex justify-between items-center py-2 text-sm">
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-accent" />
              <span>Carrera 15, Cali</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-accent" />
              <span>+57 (2) XXXX-XXXX</span>
            </div>
          </div>
          <div className="text-muted-foreground text-xs">
            Lunes - Sábado: 7:00 AM - 6:00 PM
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
            <span className="text-background font-bold text-lg">⚙</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-white">Tu Aliado</h1>
            <p className="text-xs text-accent">Automotriz</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-accent transition-colors duration-200 font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="btn-industrial">
            Solicitar Servicio
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-accent hover:text-primary transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-secondary border-t-2 border-accent">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="btn-industrial w-full">
              Solicitar Servicio
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
