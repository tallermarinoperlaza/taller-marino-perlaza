import { Wrench, Droplet, Zap, Gauge, Paintbrush, FileText, Shield, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Droplet,
    title: 'Cambio de Aceite',
    description: 'Cambio de aceite con las mejores marcas del mercado: ELF, Mobil, Motul, Hyundai, Pure Guard, Chevron, Havoline, Mazda, Total Energies, Petronas, Motorcraft y Kixx. Sintético, semisintético o mineral según tu vehículo.',
    color: 'text-orange-500',
  },
  {
    icon: Wrench,
    title: 'Filtros y Revisión',
    description: 'Cambio de filtros de aceite, aire y cabina. Revisamos los niveles de fluidos y hacemos escaneo del motor para detectar problemas antes de que se conviertan en daños mayores.',
    color: 'text-red-500',
  },
  {
    icon: Gauge,
    title: 'Diagnóstico Técnico',
    description: 'Usamos escáner avanzado para diagnosticar tu motor con precisión. Identificamos cualquier problema para que puedas tomar decisiones informadas sobre tu vehículo.',
    color: 'text-orange-500',
  },
  {
    icon: Zap,
    title: 'Reparación de Motores',
    description: 'Reparamos motores a gasolina y diésel con experiencia de 18 años. Sincronización, revisión interna y restauración completa para que tu motor vuelva a funcionar como nuevo.',
    color: 'text-red-500',
  },
  {
    icon: Paintbrush,
    title: 'Lámina y Pintura',
    description: 'Reparación de lámina y pintura profesional. Restauramos tu vehículo a su condición original con acabado de calidad.',
    color: 'text-orange-500',
  },
  {
    icon: Shield,
    title: 'Frenos y Suspensión',
    description: 'Revisamos y reparamos tu sistema de frenos para garantizar tu seguridad. Mantenimiento de suspensión para una conducción segura y cómoda.',
    color: 'text-red-500',
  },
  {
    icon: Lightbulb,
    title: 'Cajas Automáticas',
    description: 'Especializados en reparación de cajas automáticas. Diagnóstico preciso y reparación con garantía para tu tranquilidad.',
    color: 'text-orange-500',
  },
  {
    icon: FileText,
    title: 'Trámites de Tránsito',
    description: 'Te asesoramos en traspasos nacionales, levantamiento de prenda, licencias de conducción, multas y cursos viales. Simplificamos los trámites para ti.',
    color: 'text-red-500',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-background py-20 border-t-2 border-accent">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent"></div>
            <span className="text-accent font-mono text-sm font-semibold">Nuestros servicios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Todo lo que tu vehículo necesita en un solo lugar
          </h2>
          <p className="text-lg text-gray-400">
            Desde cambios de aceite hasta reparaciones complejas, contamos con la experiencia y tecnología para cuidar tu auto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card-industrial p-6 hover:border-accent hover:shadow-lg transition-all duration-300 group hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-4 inline-block p-3 bg-secondary rounded-sm group-hover:bg-accent transition-colors duration-300">
                  <Icon size={24} className={`${service.color} group-hover:text-white transition-colors`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

                {/* Bottom Accent */}
                <div className="mt-4 h-1 w-8 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
