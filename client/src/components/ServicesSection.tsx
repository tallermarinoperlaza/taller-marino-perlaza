import { Wrench, Droplet, Zap, Gauge, Paintbrush, FileText, Shield, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Droplet,
    title: 'Cambio de Aceite',
    description: 'Cambio de aceite 100% sintético, semisintético y mineral con las mejores marcas: ELF, Mobil, Motul, Hyundai, Pure Guard, Chevron, Havoline, Mazda, Total Energies, Petronas, Motorcraft, Kixx y más.',
    color: 'text-orange-500',
  },
  {
    icon: Wrench,
    title: 'Filtros y Revisión',
    description: 'Cambio de filtros de aceite, aire y cabina. Revisión de niveles y escaneo básico del motor para asegurar el óptimo funcionamiento.',
    color: 'text-red-500',
  },
  {
    icon: Gauge,
    title: 'Diagnóstico Técnico',
    description: 'Servicio de escáner avanzado para diagnóstico completo del motor. Identificamos problemas antes de que se conviertan en daños mayores.',
    color: 'text-orange-500',
  },
  {
    icon: Zap,
    title: 'Reparación de Motores',
    description: 'Reparación especializada de motores a gasolina y diésel. Sincronización, revisión de componentes internos y restauración completa.',
    color: 'text-red-500',
  },
  {
    icon: Paintbrush,
    title: 'Pintura y Lámina',
    description: 'Servicios profesionales de pintura automotriz y reparación de lámina. Restauramos la apariencia de tu vehículo como nuevo.',
    color: 'text-orange-500',
  },
  {
    icon: Shield,
    title: 'Frenos y Suspensión',
    description: 'Revisión y reparación completa de sistemas de frenos. Mantenimiento de suspensión para una conducción segura y cómoda.',
    color: 'text-red-500',
  },
  {
    icon: Lightbulb,
    title: 'Cajas Automáticas',
    description: 'Servicio especializado en reparación de cajas automáticas. Diagnóstico preciso y reparación con garantía.',
    color: 'text-orange-500',
  },
  {
    icon: FileText,
    title: 'Trámites de Tránsito',
    description: 'Asesoría completa en trámites: traspasos nacionales, levantamiento de prenda, licencias de conducción, multas y cursos viales.',
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
            <span className="text-accent font-mono text-sm font-semibold">SERVICIOS COMPLETOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Todos los Servicios Automotrices en un Solo Lugar
          </h2>
          <p className="text-lg text-gray-400">
            Desde lubricación preventiva hasta reparaciones complejas, somos tu aliado completo en mantenimiento automotriz.
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
