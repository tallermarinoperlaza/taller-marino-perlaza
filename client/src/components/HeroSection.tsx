import { ArrowRight, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663455322151/FLskSa64sSEiX3FbGopjSq/hero-banner-automotive-RPNHKFHj3PJLteuc6atx3B.webp)',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-start justify-center h-full max-w-4xl">
        <div className="space-y-6 animate-fade-in">
          {/* Accent Line */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-1 bg-accent"></div>
            <span className="text-accent font-mono text-sm font-semibold">CENTRO DE SERVICIOS MULTIMARCA</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Tu Aliado Experto en
            <span className="text-accent block">Lubricación y Mantenimiento</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Servicios técnicos automotrices completos en la Carrera 15 de Cali. Cambio de aceite 100% sintético, reparación de motores, pintura, trámites de tránsito y mucho más.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-6">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-accent flex-shrink-0" />
              <span className="text-sm text-gray-200">Tecnología Multimarca</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-accent flex-shrink-0" />
              <span className="text-sm text-gray-200">Productos Garantizados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-accent flex-shrink-0" />
              <span className="text-sm text-gray-200">Servicio Rápido y Honesto</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <button className="btn-industrial flex items-center gap-2 group">
              Solicitar Servicio
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 border-2 border-accent text-accent rounded-sm font-semibold hover:bg-accent hover:text-background transition-all duration-200">
              Conocer Más
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 font-mono">SCROLL</span>
          <div className="w-1 h-6 border-l-2 border-accent"></div>
        </div>
      </div>
    </section>
  );
}
