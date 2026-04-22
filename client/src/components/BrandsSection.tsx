const oilBrands = [
  { name: 'ELF', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1C0OMov_0g3DZlCMrx3fJ3w0tXdA8PzdRklSg9Zc5cucLE3SXnJWUfIJ3-8xioxT5SBKUei2Hj5z1nsYwpOEqR4u5mgng&s&ec=121644704' },
  { name: 'Mobil', logo: '/manus-storage/mobil_db37e24a.png' },
  { name: 'Motul', logo: '/manus-storage/motul_6ed611dc.png' },
  { name: 'Hyundai', logo: '/manus-storage/hyundai_3de9d458.png' },
  { name: 'Pure Guard', logo: 'https://www.pureguard.com/wp-content/uploads/2020/08/PG-GnYel-2014-Logo-Tagline.png' },
  { name: 'Chevron', logo: 'https://static.vecteezy.com/system/resources/previews/073/495/042/non_2x/chevron-logo-rounded-glossy-icon-with-transparent-background-free-png.png' },
  { name: 'Havoline', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Havoline_brand_logo.png' },
  { name: 'Mazda', logo: 'https://dxm.content-center.totalenergies.com/api/wedia/dam/transform/xysh7dg731tah95xpg8jfzbb8e/logo-mazda-totalenergies-jpg.webp?t=resize&width=490&height=342' },
  { name: 'Total Energies', logo: 'https://cdn.worldvectorlogo.com/logos/total-energies-2025-logo.svg' },
  { name: 'Petronas', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxiiX1WK2jOPoQzSlkAkrCZt4NNoNpyngwQ&s' },
  { name: 'Motorcraft', logo: 'https://cdn.worldvectorlogo.com/logos/motorcraft-logo-1.svg' },
  { name: 'Kixx', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCQ3fdCGIAe0quWRbkfKOGOv_QATJ-BO6fw&s' },
];

const carBrands = [
  { name: '', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Le0sw1CkTQjGZd6KquAm6hn79_oVkPNkuQ&s' },
  { name: '', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_7OT4vS5Yq1ADGrTRy6aZn-EkvCW7x8lzw&s' },
  { name: '', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqr1Eh0M2ivKbPfOrcMue28Wumd7pe4r-ATA&s' },
  { name: '', logo: 'https://bucket-periodismodelmotor.s3.eu-west-3.amazonaws.com/wp-content/uploads/2020/12/historia-logo-mazda-.jpg' },
  { name: '', logo: 'https://cdn.worldvectorlogo.com/logos/toyota-car-logo.svg' },
  { name: '', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/1280px-Hyundai_Motor_Company_logo.svg.png' },
  { name: '', logo: 'https://cdn.worldvectorlogo.com/logos/nissan-6.svg' },
  { name: '', logo: 'https://cdn.worldvectorlogo.com/logos/ford-logo-flat.svg' },
  { name: 'Volkswagen', logo: 'https://acnews.blob.core.windows.net/imgnews/paragraph/NPAZ_4a38a3e31f654cfc957ec55b4629a9eb.jpg' },
  { name: '', logo: 'https://www.clipartmax.com/png/middle/183-1837795_bmw-bmw-logo.png' },
  { name: '', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmwXM7RAjs9XvnCGoNZqOKE_KLu6tYcsMEuw&s' },
  { name: 'Audi', logo: 'https://makerworld.bblmw.com/makerworld/model/US8ec7b571d2726d/design/2025-03-23_23aae48e33ffe.png?x-oss-process=image/resize,w_1000/format,webp' },
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
                className="text-center hover:scale-110 transition-transform duration-300 group"
              >
                {/* Logo Container */}
                <div className="h-20 flex items-center justify-center overflow-hidden mb-3">
                  {brand.logo ? (
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain"
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
                className="text-center hover:scale-110 transition-transform duration-300 group"
              >
                {/* Logo Container */}
                <div className="h-20 flex items-center justify-center overflow-hidden mb-3">
                  {brand.logo ? (
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain"
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
