import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    const message = "Hola Taller Marino Perlaza, me gustaría solicitar información sobre sus servicios.";
    const whatsappUrl = `https://wa.me/573173739444?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:tallermarinoperlaza@gmail.com?subject=Solicitud%20de%20Servicio";
  };

  return (
    <section id="contacto" className="bg-background py-20 border-t-2 border-accent">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent"></div>
            <span className="text-accent font-mono text-sm font-semibold">Contacto</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Encuéntranos en la Carrera 15
          </h2>
          <p className="text-lg text-gray-400">
            Estamos en San Bosco, listos para atender tus necesidades automotrices. Llámanos o visítanos cuando lo necesites.
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
            <div className="flex gap-4 group cursor-pointer" onClick={() => window.location.href = 'tel:+573173739444'}>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-sm group-hover:bg-accent transition-colors duration-300">
                  <Phone size={24} className="text-accent group-hover:text-white transition-colors" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Teléfono</h3>
                <p className="text-gray-400 group-hover:text-accent transition-colors">
                  3173739444 - 3146433367
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 group cursor-pointer" onClick={handleEmailClick}>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-sm group-hover:bg-accent transition-colors duration-300">
                  <Mail size={24} className="text-accent group-hover:text-white transition-colors" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Correo</h3>
                <p className="text-gray-400 group-hover:text-accent transition-colors">
                  tallermarinoperlaza@gmail.com
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
                  Lunes - Sábado: 7:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact Options */}
          <div className="space-y-4">
            <div className="bg-secondary p-8 rounded-sm border-2 border-accent">
              <h3 className="text-2xl font-bold text-white mb-6">Contacta con nosotros</h3>
              
              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-sm transition-colors duration-200 mb-4"
              >
                <MessageCircle size={20} />
                Enviar por WhatsApp
              </button>

              {/* Email Button */}
              <button
                onClick={handleEmailClick}
                className="w-full flex items-center justify-center gap-3 btn-industrial py-3 px-6 mb-4"
              >
                <Mail size={20} />
                Enviar por Correo
              </button>

              {/* Phone Button */}
              <a
                href="tel:+573173739444"
                className="w-full flex items-center justify-center gap-3 border-2 border-accent text-accent hover:bg-accent hover:text-background font-bold py-3 px-6 rounded-sm transition-colors duration-200"
              >
                <Phone size={20} />
                Llamar Ahora
              </a>
            </div>

            {/* Info Box */}
            <div className="bg-secondary p-6 rounded-sm border-2 border-accent">
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-accent font-bold">Respuesta rápida:</span> Nos comunicaremos contigo en el menor tiempo posible. Puedes contactarnos por WhatsApp, correo o teléfono.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
