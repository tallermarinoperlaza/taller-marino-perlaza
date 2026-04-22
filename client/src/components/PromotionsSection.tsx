import { Zap, Gift, TrendingUp } from 'lucide-react';

export default function PromotionsSection() {
  const promotions = [
    {
      icon: Zap,
      titulo: "Cambio de Aceite + Filtros",
      descripcion: "10% de descuento en cambio de aceite sintético con filtros incluidos para clientes nuevos.",
      precio: "Desde $100.000",
      color: "text-orange-500"
    },
    {
      icon: Gift,
      titulo: "Revisión Gratis",
      descripcion: "Diagnóstico técnico completo y escaneo del motor sin costo para nuevos clientes.",
      precio: "¡Gratis!",
      color: "text-red-500"
    },
    {
      icon: TrendingUp,
      titulo: "Paquete de Servicios",
      descripcion: "Contrata 3 servicios y obtén 15% de descuento en todos. Válido para clientes nuevos.",
      precio: "Hasta $150.000",
      color: "text-orange-500"
    }
  ];

  return (
    <section id="promociones" className="bg-secondary py-20 border-t-2 border-accent">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent"></div>
            <span className="text-accent font-mono text-sm font-semibold">Ofertas Especiales</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Promociones para clientes nuevos
          </h2>
          <p className="text-lg text-gray-400">
            Aprovecha nuestras ofertas exclusivas diseñadas para que conozcas la calidad de nuestros servicios a precios especiales.
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {promotions.map((promo, index) => {
            const Icon = promo.icon;
            return (
              <div
                key={index}
                className="bg-background p-8 rounded-sm border-2 border-accent hover:border-orange-500 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="mb-6 inline-block p-4 bg-secondary rounded-sm group-hover:bg-accent transition-colors duration-300">
                  <Icon size={32} className={`${promo.color} group-hover:text-white transition-colors`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {promo.titulo}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {promo.descripcion}
                </p>

                {/* Price */}
                <div className="mb-6 p-4 bg-secondary rounded-sm border-2 border-accent">
                  <p className="text-accent font-bold text-lg">
                    {promo.precio}
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href={index === 0 ? "https://wa.me/573173739444?text=Hola%20Taller%20Marino%20Perlaza,%20me%20interesa%20el%20servicio%20de%20Cambio%20de%20Aceite%20%2B%20Filtros%20con%20el%2010%25%20de%20descuento." : index === 2 ? "https://wa.me/573173739444?text=Hola%20Taller%20Marino%20Perlaza,%20me%20interesa%20el%20Paquete%20de%20Servicios%20con%20el%2015%25%20de%20descuento." : "https://wa.me/573173739444?text=Hola%20Taller%20Marino%20Perlaza,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20esta%20promoci%C3%B3n."}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-accent hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-sm transition-colors duration-200"
                >
                  Solicitar Promoción
                </a>
              </div>
            );
          })}
        </div>

        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-accent to-orange-500 p-8 rounded-sm text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¡Primera Visita? Obtén 10% de Descuento
          </h3>
          <p className="text-white text-lg mb-6">
            Presenta este cupón en tu primera visita y disfruta de 10% de descuento en cualquier servicio.
          </p>
          <a
            href="https://wa.me/573173739444?text=Hola%20Taller%20Marino%20Perlaza,%20quiero%20aprovechar%20el%20descuento%20de%20primera%20visita."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-100 text-accent font-bold py-3 px-8 rounded-sm transition-colors duration-200"
          >
            Reservar Ahora
          </a>
        </div>

        {/* Terms */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>
            *Válido solo para clientes nuevos. No acumulable con otras promociones. Válido hasta el 31 de diciembre de 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
