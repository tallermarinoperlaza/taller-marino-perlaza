import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    vehiculo: '',
    servicio: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar campos
    if (!formData.nombre || !formData.email || !formData.telefono) {
      toast.error('Por favor completa los campos requeridos.', { duration: 3000 });
      return;
    }

    setIsSubmitting(true);

    try {
      // Crear mensaje para WhatsApp
      const mensaje = `Hola Taller Marino Perlaza, soy ${formData.nombre}. Mi teléfono es ${formData.telefono}, mi correo es ${formData.email}. Tengo un ${formData.vehiculo || 'vehículo'}. Necesito: ${formData.servicio || 'información sobre servicios'}`;
      
      // Abrir WhatsApp con el mensaje
      const whatsappUrl = `https://wa.me/573173739444?text=${encodeURIComponent(mensaje)}`;
      window.open(whatsappUrl, '_blank');

      toast.success('¡Abriendo WhatsApp! Envía tu mensaje para contactarnos.', {
        duration: 3000,
      });
      
      // Limpiar formulario
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        vehiculo: '',
        servicio: ''
      });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al procesar la solicitud.', {
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:tallermarinoperlaza@gmail.com';
  };

  const handleWhatsAppClick = () => {
    const message = "Hola Taller Marino Perlaza, me gustaría solicitar información sobre sus servicios.";
    const whatsappUrl = `https://wa.me/573173739444?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
            Ponte en contacto con nosotros
          </h2>
          <p className="text-lg text-gray-400">
            Estamos listos para ayudarte. Contáctanos por WhatsApp, teléfono, correo o completa el formulario para que nos comuniquemos contigo.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                <h3 className="text-lg font-bold text-white mb-2">Horario</h3>
                <p className="text-gray-400">
                  Lunes a Sábado: 7:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary p-8 rounded-sm border-2 border-accent">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2 bg-background text-white border-2 border-accent rounded-sm focus:outline-none focus:border-orange-500 transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Correo *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  className="w-full px-4 py-2 bg-background text-white border-2 border-accent rounded-sm focus:outline-none focus:border-orange-500 transition-colors"
                  required
                />
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="3173739444"
                  className="w-full px-4 py-2 bg-background text-white border-2 border-accent rounded-sm focus:outline-none focus:border-orange-500 transition-colors"
                  required
                />
              </div>

              {/* Vehículo */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Vehículo
                </label>
                <input
                  type="text"
                  name="vehiculo"
                  value={formData.vehiculo}
                  onChange={handleChange}
                  placeholder="Ej: Toyota Corolla 2018"
                  className="w-full px-4 py-2 bg-background text-white border-2 border-accent rounded-sm focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              {/* Servicio */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Servicio Requerido
                </label>
                <textarea
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  placeholder="Describe el servicio que necesitas..."
                  rows={3}
                  className="w-full px-4 py-2 bg-background text-white border-2 border-accent rounded-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Solicitud por WhatsApp'}
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16 rounded-sm overflow-hidden border-2 border-accent">
          <div className="flex flex-col gap-4 p-6 bg-secondary">
            <h3 className="text-2xl font-bold text-white mb-2">Ubicación</h3>
            <p className="text-gray-400 mb-4">
              Cra 15 # 6-134 San Bosco, Cali, Valle del Cauca, Colombia
            </p>
            <a
              href="https://maps.app.goo.gl/W8tnoVjvGCebV3nK7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-sm transition-colors duration-200 w-fit"
            >
              Ver en Google Maps →
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.763238!2d-76.53!3d3.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f5c1c1c1c1%3A0x1c1c1c1c1c1c1c1c!2sTaller%20Marino%20Perlaza!5e0!3m2!1ses!2sco!4v1713800000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Taller Marino Perlaza en Google Maps"
          ></iframe>
        </div>

        {/* Quick Contact Buttons */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-sm transition-colors duration-200"
          >
            <MessageCircle size={20} />
            Contactar por WhatsApp
          </button>

          <a
            href="tel:+573173739444"
            className="flex items-center justify-center gap-3 btn-industrial py-4 px-6 transition-colors duration-200"
          >
            <Phone size={20} />
            Llamar Ahora
          </a>

          <a
            href="mailto:tallermarinoperlaza@gmail.com"
            className="flex items-center justify-center gap-3 btn-industrial py-4 px-6 transition-colors duration-200"
          >
            <Mail size={20} />
            Enviar Correo
          </a>
        </div>
      </div>
    </section>
  );
}
