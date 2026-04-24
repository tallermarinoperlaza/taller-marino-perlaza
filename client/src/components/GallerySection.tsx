const galleryImages = [
  {
    title: 'Cambio de Aceite',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663455322151/FLskSa64sSEiX3FbGopjSq/oil-change-service-6DnNvHH6aUtbWjF3Th2ApS.webp',
    description: 'Marcas premium de aceite sintético',
  },
  {
    title: 'Lámina y Pintura - Antes',
    image: '/manus-storage/542e4d41-5084-4a75-a457-c92306a5d917_963e03b6.jpg',
    description: 'Vehículo antes del servicio de lámina y pintura',
  },
  {
    title: 'Diagnóstico Técnico',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663455322151/FLskSa64sSEiX3FbGopjSq/engine-diagnostic-LTgT9iQ6SF8qHW7hPFCoqK.webp',
    description: 'Escáner avanzado de diagnóstico',
  },
  {
    title: 'Lámina y Pintura - Después',
    image: '/manus-storage/IMG_3603_76de792d.jpeg',
    description: 'Vehículo restaurado con pintura de calidad profesional',
  },
  {
    title: 'Frenos y Suspensión',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663455322151/FLskSa64sSEiX3FbGopjSq/brake-suspension-service-QZmSoUqvfhszFWTxifDeDt.webp',
    description: 'Reparación profesional de frenos',
  },
  {
    title: 'Herramientas Especializadas',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663455322151/FLskSa64sSEiX3FbGopjSq/automotive-tools-collection-5jYZt8kSYTSpuk4WvfBmYM.webp',
    description: 'Equipamiento de precisión industrial',
  },
];

export default function GallerySection() {
  return (
    <section className="bg-secondary py-20 border-t-2 border-accent">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent"></div>
            <span className="text-accent font-mono text-sm font-semibold">Galería</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestro trabajo en acción
          </h2>
          <p className="text-lg text-gray-400">
            Contamos con equipamiento profesional y técnicos especializados para garantizar calidad en cada servicio.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-sm border border-border hover:border-accent transition-all duration-300"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
