const oilBrands = [
  { name: 'ELF', logo: '' },
  { name: 'Mobil', logo: '' },
  { name: 'Motul', logo: '' },
  { name: 'Hyundai', logo: '' },
  { name: 'Pure Guard', logo: '' },
  { name: 'Chevron', logo: '' },
  { name: 'Havoline', logo: '' },
  { name: 'Mazda', logo: '' },
  { name: 'Total Energies', logo: '' },
  { name: 'Petronas', logo: '' },
  { name: 'Motorcraft', logo: '' },
  { name: 'Kixx', logo: '' },
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
                {/* Logo Placeholder - Pega aquí tu URL de logo */}
                <div className="h-16 bg-gray-800 border-2 border-dashed border-gray-600 rounded-sm mb-3 flex items-center justify-center overflow-hidden">
                  {brand.logo ? (
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-gray-500 text-xs text-center px-2">Pega URL aquí</span>
                  )}
                </div>
                <p className="text-white font-semibold group-hover:text-accent transition-colors">
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
                {/* Logo Placeholder - Pega aquí tu URL de logo */}
                <div className="h-16 bg-gray-800 border-2 border-dashed border-gray-600 rounded-sm mb-3 flex items-center justify-center overflow-hidden">
                  {brand.logo ? (
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-gray-500 text-xs text-center px-2">Pega URL aquí</span>
                  )}
                </div>
                <p className="text-white font-semibold group-hover:text-accent transition-colors">
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
