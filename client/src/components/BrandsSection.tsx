const oilBrands = [
  'ELF',
  'Mobil',
  'Motul',
  'Hyundai',
  'Pure Guard',
  'Chevron',
  'Havoline',
  'Mazda',
  'Total Energies',
  'Petronas',
  'Motorcraft',
  'Kixx',
];

const carBrands = [
  'Renault',
  'Chevrolet',
  'Kia',
  'Mazda',
  'Toyota',
  'Hyundai',
  'Nissan',
  'Ford',
  'Volkswagen',
  'BMW',
  'Mercedes-Benz',
  'Audi',
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
                <p className="text-white font-semibold group-hover:text-accent transition-colors">
                  {brand}
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
                <p className="text-white font-semibold group-hover:text-accent transition-colors">
                  {brand}
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
