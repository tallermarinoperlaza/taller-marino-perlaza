import { Award, Zap, Shield, Headphones } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Productos Garantizados',
    description: 'Todos nuestros productos cuentan con garantía de fabricante. Protegemos la vida de tu motor con los mejores estándares de calidad.',
  },
  {
    icon: Zap,
    title: 'Servicio Rápido',
    description: 'Atención ágil y eficiente. Realizamos diagnósticos y servicios en el menor tiempo posible sin comprometer la calidad.',
  },
  {
    icon: Shield,
    title: 'Honestidad Garantizada',
    description: 'Diagnósticos transparentes y sin sorpresas. Te informamos exactamente qué necesita tu vehículo y por qué.',
  },
  {
    icon: Headphones,
    title: 'Soporte Completo',
    description: 'Asesoría profesional en trámites de tránsito, mantenimiento preventivo y recomendaciones personalizadas para tu vehículo.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-background py-20 border-t-2 border-accent">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent"></div>
            <span className="text-accent font-mono text-sm font-semibold">POR QUÉ ELEGIRNOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tu Aliado de Confianza en la Carrera 15
          </h2>
          <p className="text-lg text-gray-400">
            Más de años de experiencia en servicios automotrices profesionales. Somos el centro de referencia para mantenimiento preventivo y reparaciones.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex gap-6 group"
              >
                {/* Icon Container */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-secondary rounded-sm group-hover:bg-accent transition-colors duration-300">
                    <Icon size={32} className="text-accent group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  <div className="mt-3 h-1 w-8 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
