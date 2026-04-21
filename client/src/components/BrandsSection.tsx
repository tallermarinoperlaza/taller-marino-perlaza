const oilBrands = [
  { name: 'ELF', logo: '/manus-storage/elf_cc91b211.png' },
  { name: 'Mobil', logo: '/manus-storage/mobil_db37e24a.png' },
  { name: 'Motul', logo: '/manus-storage/motul_6ed611dc.png' },
  { name: 'Hyundai', logo: '/manus-storage/hyundai_3de9d458.png' },
  { name: 'Pure Guard', logo: 'https://www.pureguard.com/wp-content/uploads/2020/08/PG-GnYel-2014-Logo-Tagline.png' },
  { name: 'Chevron', logo: 'https://static.vecteezy.com/system/resources/previews/073/495/042/non_2x/chevron-logo-rounded-glossy-icon-with-transparent-background-free-png.png' },
  { name: 'Havoline', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Havoline_brand_logo.png' },
  { name: 'Mazda', logo: 'https://dxm.content-center.totalenergies.com/api/wedia/dam/transform/xysh7dg731tah95xpg8jfzbb8e/logo-mazda-totalenergies-jpg.webp?t=resize&width=490&height=342' },
  { name: 'Total Energies', logo: 'https://cdn.worldvectorlogo.com/logos/total-energies-2025-logo.svg' },
  { name: 'Petronas', logo: 'https://static.vecteezy.com/system/resources/thumbnails/068/842/094/small/petronas-logo-oil-and-gas-company-icon-emblem-transparent-background-free-png.png' },
  { name: 'Motorcraft', logo: 'https://w7.pngwing.com/pngs/1017/507/png-transparent-ford-motor-company-motorcraft-brand-logo-mercury-others-text-label-service.png' },
  { name: 'Kixx', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCQ3fdCGIAe0quWRbkfKOGOv_QATJ-BO6fw&s' },
];

const carBrands = [
  { name: 'Renault', logo: '' },
  { name: 'Chevrolet', logo: '' },
  { name: 'Kia', logo: '' },
  { name: 'Mazda', logo: '' },
  { name: 'Toyota', logo: '' },
  { name: 'Hyundai', logo: '' },
  { name: 'Nissan', logo: '' },
  { name: 'Ford', logo: '' },
  { name: 'Volkswagen', logo: '' },
  { name: 'BMW', logo: '' },
  { name: 'Mercedes-Benz', logo: '' },
  { name: 'Audi', logo: '' },
];

export default function BrandsSection() {
  return (
    <section id="marcas" className="bg-secondary py-20 border-t-2 border-accent">
      <div className="container">
        {/* Oil Brands */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-accent"></div>
            <span className="text-accent font-mono text-sm font-semibold">Marcas de aceite</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-8">
            Trabajamos con las mejores marcas del mercado
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {oilBrands.map((brand, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-sm p-4 text-center hover:border-accent hover:shadow-lg transition-all duration-300 group"
              >
                {/* Logo Container */}
                <div className="h-16 bg-gray-800 border border-gray-600 rounded-sm mb-3 flex items-center justify-center overflow-hidden">
                  {brand.logo ? (
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain p-2"
                    />
                  ) : (
                    <span className="text-gray-500 text-xs text-center px-2">Logo</span>
                  )}
                </div>
                <p className="text-white font-semibold group-hover:text-accent transition-colors text-sm">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="divider-industrial my-12"></div>

        {/* Car Brands */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-accent"></div>
            <span className="text-accent font-mono text-sm font-semibold">Marcas de vehículos</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-8">
            Servicio para todas las marcas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {carBrands.map((brand, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-sm p-4 text-center hover:border-accent hover:shadow-lg transition-all duration-300 group"
              >
                {/* Logo Container */}
                <div className="h-16 bg-gray-800 border border-gray-600 rounded-sm mb-3 flex items-center justify-center overflow-hidden">
                  {brand.logo ? (
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain p-2"
                    />
                  ) : (
                    <span className="text-gray-500 text-xs text-center px-2">Logo</span>
                  )}
                </div>
                <p className="text-white font-semibold group-hover:text-accent transition-colors text-sm">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services Note */}
        <div className="mt-12 bg-background border-2 border-accent rounded-sm p-6">
          <p className="text-white text-center">
            <span className="font-bold text-accent">Y mucho más:</span> Polarizados, cambio de llantas, alineación, balanceo y todos los servicios automotrices que necesites.
          </p>
        </div>
      </div>
    </section>
  );
}
