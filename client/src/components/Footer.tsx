import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t-2 border-accent">
      <div className="container py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663455322151/FLskSa64sSEiX3FbGopjSq/taller-marino-perlaza-logo_495bca4a.png"
              alt="Taller Marino Perlaza"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm">
              Centro de servicios multimarca especializado en lubricación y mantenimiento preventivo en Cali.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#servicios" className="hover:text-accent transition-colors">Cambio de Aceite</a></li>
              <li><a href="#servicios" className="hover:text-accent transition-colors">Diagnóstico Técnico</a></li>
              <li><a href="#servicios" className="hover:text-accent transition-colors">Reparación de Motores</a></li>
              <li><a href="#servicios" className="hover:text-accent transition-colors">Trámites de Tránsito</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#inicio" className="hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#marcas" className="hover:text-accent transition-colors">Marcas</a></li>
              <li><a href="#contacto" className="hover:text-accent transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/tallermarinoperlaza" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background rounded-sm flex items-center justify-center hover:bg-blue-600 transition-colors group" title="Facebook">
                <Facebook size={18} className="text-accent group-hover:text-white transition-colors" />
              </a>
              <a href="https://www.instagram.com/tallermarinoperlaza" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background rounded-sm flex items-center justify-center hover:bg-pink-600 transition-colors group" title="Instagram">
                <Instagram size={18} className="text-accent group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Taller Marino Perlaza. Todos los derechos reservados.</p>
          <p>Cra 15 # 6-134 San Bosco, Cali, Valle del Cauca, Colombia</p>
        </div>
      </div>
    </footer>
  );
}
