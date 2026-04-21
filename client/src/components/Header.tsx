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
              <span>Cra 15 # 6-134 San Bosco</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-accent" />
              <span>3173739444 - 3146433367</span>
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
        <div className="flex items-center gap-3">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663455322151/FLskSa64sSEiX3FbGopjSq/taller-marino-perlaza-logo_495bca4a.png"
            alt="Taller Marino Perlaza"
            className="h-12 w-auto"
          />
          <div className="flex flex-col hidden sm:block">
            <h1 className="text-sm font-bold text-white">Taller Marino</h1>
            <p className="text-xs text-accent">Perlaza</p>
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
          <a
            href="https://wa.me/573173739444?text=Hola%20Taller%20Marino%20Perlaza,%20me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios%20automotrices."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-industrial inline-block"
          >
            Solicitar Servicio
          </a>
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
