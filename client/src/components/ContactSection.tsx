import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-background py-20 border-t-2 border-accent">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent"></div>
            <span className="text-accent font-mono text-sm font-semibold">CONTÁCTANOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ubicación y Horarios
          </h2>
          <p className="text-lg text-gray-400">
            Visítanos en la Carrera 15 de Cali. Estamos listos para atender tus necesidades automotrices.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Location */}
            <div className="flex gap-4 group">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-sm group-hover:bg-accent transition-colors duration-300">
                  <MapPin size={24} className="text-accent group-hover:text-white transition-colors" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Ubicación</h3>
                <p className="text-gray-400">
                  Cra 15 # 6-134 San Bosco, Cali, Valle del Cauca, Colombia
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 group">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-sm group-hover:bg-accent transition-colors duration-300">
                  <Phone size={24} className="text-accent group-hover:text-white transition-colors" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Teléfono</h3>
                <p className="text-gray-400">
                  3173739444 - 3146433367
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 group">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-sm group-hover:bg-accent transition-colors duration-300">
                  <Mail size={24} className="text-accent group-hover:text-white transition-colors" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Correo</h3>
                <p className="text-gray-400">
                  info@tallermarino.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 group">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-sm group-hover:bg-accent transition-colors duration-300">
                  <Clock size={24} className="text-accent group-hover:text-white transition-colors" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Horarios</h3>
                <p className="text-gray-400">
                  Lunes - Viernes: 7:00 AM - 6:00 PM<br />
                  Sábado: 8:00 AM - 4:00 PM<br />
                  Domingo: Cerrado
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary border border-border rounded-sm p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Solicita un Servicio</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full bg-background border border-border rounded-sm px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Teléfono</label>
                <input
                  type="tel"
                  placeholder="+57 (2) XXXX-XXXX"
                  className="w-full bg-background border border-border rounded-sm px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Vehículo</label>
                <input
                  type="text"
                  placeholder="Marca y modelo"
                  className="w-full bg-background border border-border rounded-sm px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Servicio Requerido</label>
                <textarea
                  placeholder="Describe el servicio que necesitas"
                  rows={3}
                  className="w-full bg-background border border-border rounded-sm px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>
              <button type="submit" className="btn-industrial w-full">
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
