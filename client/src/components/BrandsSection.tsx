'use client';

import { useState } from 'react';

const initialOilBrands = [
  { name: 'ELF', logo: 'data:image/png;base64,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' },
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

const initialCarBrands = [
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
  const [oilBrands, setOilBrands] = useState(initialOilBrands);
  const [carBrands, setCarBrands] = useState(initialCarBrands);
  const [editingBrand, setEditingBrand] = useState<{ type: 'oil' | 'car'; index: number } | null>(null);
  const [editValue, setEditValue] = useState('');

  const handleEditClick = (type: 'oil' | 'car', index: number, currentLogo: string) => {
    setEditingBrand({ type, index });
    setEditValue(currentLogo);
  };

  const handleSave = () => {
    if (!editingBrand) return;
    
    if (editingBrand.type === 'oil') {
      const newBrands = [...oilBrands];
      newBrands[editingBrand.index].logo = editValue;
      setOilBrands(newBrands);
    } else {
      const newBrands = [...carBrands];
      newBrands[editingBrand.index].logo = editValue;
      setCarBrands(newBrands);
    }
    
    setEditingBrand(null);
    setEditValue('');
  };

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
                className="bg-background border border-border rounded-sm p-4 text-center hover:border-accent hover:shadow-lg transition-all duration-300 group relative"
              >
                {/* Logo Container */}
                <button
                  onClick={() => handleEditClick('oil', index, brand.logo)}
                  className="h-16 bg-gray-800 border-2 border-dashed border-gray-600 rounded-sm mb-3 flex items-center justify-center overflow-hidden w-full hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  {brand.logo ? (
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-gray-500 text-xs text-center px-2">Click para agregar logo</span>
                  )}
                </button>
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
                className="bg-background border border-border rounded-sm p-4 text-center hover:border-accent hover:shadow-lg transition-all duration-300 group relative"
              >
                {/* Logo Container */}
                <button
                  onClick={() => handleEditClick('car', index, brand.logo)}
                  className="h-16 bg-gray-800 border-2 border-dashed border-gray-600 rounded-sm mb-3 flex items-center justify-center overflow-hidden w-full hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  {brand.logo ? (
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-gray-500 text-xs text-center px-2">Click para agregar logo</span>
                  )}
                </button>
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

      {/* Modal de Edición */}
      {editingBrand && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-secondary rounded-sm border-2 border-accent max-w-2xl w-full p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Agregar logo para {editingBrand.type === 'oil' ? oilBrands[editingBrand.index].name : carBrands[editingBrand.index].name}
            </h3>
            
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">
                URL del logo (imagen, base64, o enlace directo):
              </label>
              <textarea
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="w-full h-32 bg-background border-2 border-accent rounded-sm p-3 text-white font-mono text-sm"
                placeholder="Pega aquí la URL del logo o código base64..."
              />
            </div>

            {editValue && (
              <div className="mb-6 p-4 bg-background border-2 border-accent rounded-sm">
                <p className="text-white text-sm mb-2">Vista previa:</p>
                <div className="h-24 flex items-center justify-center">
                  <img 
                    src={editValue} 
                    alt="preview"
                    className="max-h-full max-w-full object-contain"
                    onError={() => <span className="text-red-500">Error al cargar imagen</span>}
                  />
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="flex-1 bg-accent hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-sm transition-colors"
              >
                Guardar
              </button>
              <button
                onClick={() => setEditingBrand(null)}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-sm transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
