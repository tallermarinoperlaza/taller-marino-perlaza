import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      nombre: "Carlos Mendoza",
      vehiculo: "Toyota Corolla 2018",
      calificacion: 5,
      texto: "Excelente servicio. Llevé mi vehículo para cambio de aceite y revisión general. El equipo es muy profesional y honesto. Recomiendo ampliamente a Taller Marino Perlaza.",
      iniciales: "CM"
    },
    {
      id: 2,
      nombre: "María García",
      vehiculo: "Chevrolet Cruze 2020",
      calificacion: 5,
      texto: "Muy satisfecha con el trabajo realizado. Repararon los frenos de mi auto con excelencia. El personal es atento y explica bien cada procedimiento. Volveré con confianza.",
      iniciales: "MG"
    },
    {
      id: 3,
      nombre: "Juan Rodríguez",
      vehiculo: "Mazda 3 2019",
      calificacion: 5,
      texto: "Después de 18 años en el negocio, se nota la experiencia. Hicieron un trabajo impecable en la sincronización de mi motor. Precio justo y garantía en los productos. ¡Recomendado!",
      iniciales: "JR"
    }
  ];

  return (
    <section id="testimonios" className="bg-secondary py-20 border-t-2 border-accent">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent"></div>
            <span className="text-accent font-mono text-sm font-semibold">Testimonios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-400">
            Más de 18 años ganando la confianza de cientos de clientes satisfechos con nuestro servicio técnico especializado.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background p-8 rounded-sm border-2 border-accent hover:border-accent hover:shadow-lg transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.calificacion }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.texto}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-background font-bold text-lg">
                      {testimonial.iniciales}
                    </span>
                  </div>
                </div>

                {/* Client Details */}
                <div>
                  <h4 className="font-bold text-white">
                    {testimonial.nombre}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.vehiculo}
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 opacity-10 text-accent">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M8 20c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12zm4 0c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8-8 3.582-8 8z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t-2 border-accent pt-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              18+
            </div>
            <p className="text-gray-400 font-semibold">
              Años de Experiencia
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              500+
            </div>
            <p className="text-gray-400 font-semibold">
              Clientes Satisfechos
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              100%
            </div>
            <p className="text-gray-400 font-semibold">
              Garantía en Servicios
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
