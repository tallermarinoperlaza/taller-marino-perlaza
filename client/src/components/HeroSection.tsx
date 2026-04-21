import { ArrowRight, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden" style={{
      backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663455322151/FLskSa64sSEiX3FbGopjSq/engine-diagnostic-z70yH2PH.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-accent"></div>
            <span className="text-accent font-mono text-sm font-semibold">CENTRO DE SERVICIOS MULTIMARCA</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Taller Marino Perlaza
            <span className="text-accent block">Servicio Técnico Especializado & Lubriteca</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Nos especializamos en reparación de motores, mecánica general, sincronización, frenos, suspensión, lamina, pintura, cambio de aceite motor, trámites de tránsito y todos los servicios automotrices que necesites, en un solo lugar.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-6">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-accent flex-shrink-0" />
              <span className="text-gray-300 text-sm">Tecnología Multimarca</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-accent flex-shrink-0" />
              <span className="text-gray-300 text-sm">Productos Garantizados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-accent flex-shrink-0" />
              <span className="text-gray-300 text-sm">Servicio Rápido y Honesto</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <a
              href="https://wa.me/573173739444?text=Hola%20Taller%20Marino%20Perlaza,%20me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios%20automotrices."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-industrial flex items-center gap-2 group inline-block"
            >
              Solicitar Servicio
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="px-6 py-3 border-2 border-accent text-accent rounded-sm font-semibold hover:bg-accent hover:text-background transition-all duration-200 inline-block"
            >
              Conocer Más
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
