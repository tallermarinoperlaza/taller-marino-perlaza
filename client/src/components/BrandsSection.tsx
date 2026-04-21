'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const oilBrands = [
  { name: 'ELF', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Elf_logo.svg/1200px-Elf_logo.svg.png' },
  { name: 'Mobil', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Mobil_logo.svg/1200px-Mobil_logo.svg.png' },
  { name: 'Motul', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Motul_logo.svg/1200px-Motul_logo.svg.png' },
  { name: 'Hyundai', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Hyundai_Motor_Company_logo.svg/1200px-Hyundai_Motor_Company_logo.svg.png' },
  { name: 'Pure Guard', image: 'https://www.pureguard.com/sites/default/files/2021-11/PureGuard-Logo-Horizontal.png' },
  { name: 'Chevron', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chevron_Corporation_logo.svg/1200px-Chevron_Corporation_logo.svg.png' },
  { name: 'Havoline', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Havoline_logo.svg/1200px-Havoline_logo.svg.png' },
  { name: 'Mazda', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mazda_Motor_Corporation_logo.svg/1200px-Mazda_Motor_Corporation_logo.svg.png' },
  { name: 'Total Energies', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/TotalEnergies_logo.svg/1200px-TotalEnergies_logo.svg.png' },
  { name: 'Petronas', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Petronas_logo.svg/1200px-Petronas_logo.svg.png' },
  { name: 'Motorcraft', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Motorcraft_logo.svg/1200px-Motorcraft_logo.svg.png' },
  { name: 'Kixx', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/GS_Caltex_Kixx_logo.svg/1200px-GS_Caltex_Kixx_logo.svg.png' },
];

const carBrands = [
  { name: 'Renault', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Renault_2022_logo.svg/1200px-Renault_2022_logo.svg.png' },
  { name: 'Chevrolet', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Chevrolet_logo.svg/1200px-Chevrolet_logo.svg.png' },
  { name: 'Kia', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kia_logo_%282021%29.svg/1200px-Kia_logo_%282021%29.svg.png' },
  { name: 'Mazda', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mazda_Motor_Corporation_logo.svg/1200px-Mazda_Motor_Corporation_logo.svg.png' },
  { name: 'Toyota', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Toyota_logo_%282019%29.svg/1200px-Toyota_logo_%282019%29.svg.png' },
  { name: 'Hyundai', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Hyundai_Motor_Company_logo.svg/1200px-Hyundai_Motor_Company_logo.svg.png' },
  { name: 'Nissan', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Nissan_logo_and_wordmark.svg/1200px-Nissan_logo_and_wordmark.svg.png' },
  { name: 'Ford', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ford_logo.flat.svg/1200px-Ford_logo.flat.svg.png' },
  { name: 'Volkswagen', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/1200px-Volkswagen_logo_2019.svg.png' },
  { name: 'BMW', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png' },
  { name: 'Mercedes-Benz', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Mercedes-Benz_logo.svg/1200px-Mercedes-Benz_logo.svg.png' },
  { name: 'Audi', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Audi_logo.svg/1200px-Audi_logo.svg.png' },
];

export default function BrandsSection() {
  const [selectedBrand, setSelectedBrand] = useState<{ name: string; image: string } | null>(null);

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
              <button
                key={index}
                onClick={() => setSelectedBrand(brand)}
                className="bg-background border border-border rounded-sm p-4 text-center hover:border-accent hover:shadow-lg hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="h-16 flex items-center justify-center mb-3 overflow-hidden">
                  <img 
                    src={brand.image} 
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23333" width="100" height="100"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" fill="%23fff" font-size="12" font-weight="bold"%3E' + brand.name.substring(0, 3) + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <p className="text-white font-semibold text-sm group-hover:text-accent transition-colors">
                  {brand.name}
                </p>
              </button>
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
              <button
                key={index}
                onClick={() => setSelectedBrand(brand)}
                className="bg-background border border-border rounded-sm p-4 text-center hover:border-accent hover:shadow-lg hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="h-16 flex items-center justify-center mb-3 overflow-hidden">
                  <img 
                    src={brand.image} 
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23333" width="100" height="100"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" fill="%23fff" font-size="12" font-weight="bold"%3E' + brand.name.substring(0, 3) + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <p className="text-white font-semibold text-sm group-hover:text-accent transition-colors">
                  {brand.name}
                </p>
              </button>
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

      {/* Modal */}
      {selectedBrand && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-secondary rounded-sm border-2 border-accent max-w-2xl w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedBrand(null)}
              className="absolute top-4 right-4 bg-accent hover:bg-orange-500 text-white p-2 rounded-sm transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div className="p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                {selectedBrand.name}
              </h3>
              <div className="bg-background p-8 rounded-sm border-2 border-accent mb-6 flex items-center justify-center min-h-64">
                <img 
                  src={selectedBrand.image} 
                  alt={selectedBrand.name}
                  className="max-h-64 max-w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23333" width="100" height="100"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" fill="%23fff" font-size="14" font-weight="bold"%3E' + selectedBrand.name + '%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <p className="text-gray-300 mb-6">
                Trabajamos con {selectedBrand.name} para ofrecerte los mejores productos y servicios automotrices.
              </p>
              <button
                onClick={() => setSelectedBrand(null)}
                className="bg-accent hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-sm transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
