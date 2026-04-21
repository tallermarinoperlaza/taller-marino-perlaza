export default function AboutSection() {
  return (
    <section className="bg-background py-20 border-t-2 border-accent">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663455322151/FLskSa64sSEiX3FbGopjSq/taller-marino-foto_a55e8002.jpg"
              alt="Taller Marino Perlaza"
              className="w-full rounded-sm shadow-lg border-2 border-accent"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-accent"></div>
              <span className="text-accent font-mono text-sm font-semibold">Quiénes somos</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Con experiencia en la Cra 15...
            </h2>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Aquí en Taller Marino Perlaza hemos sido el aliado de confianza de cientos de clientes en Cali. Comenzamos con una visión clara: ofrecer servicios automotrices de calidad con honestidad y profesionalismo.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Hoy contamos con equipamiento moderno, tecnología de diagnóstico avanzada y un equipo de técnicos especializados. Cada día trabajamos para que tu vehículo funcione como debe ser.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-sm flex items-center justify-center mt-1">
                  <span className="text-background font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Experiencia comprobada</h3>
                  <p className="text-gray-400">18 años sirviendo a la comunidad de Cali con dedicación.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-sm flex items-center justify-center mt-1">
                  <span className="text-background font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Tecnología moderna</h3>
                  <p className="text-gray-400">Equipamiento de diagnóstico avanzado para precisión en cada servicio.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-sm flex items-center justify-center mt-1">
                  <span className="text-background font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Equipo especializado</h3>
                  <p className="text-gray-400">Técnicos capacitados en todas las marcas y servicios automotrices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
