'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    vehiculo: '',
    servicio: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Crear el cuerpo del correo con los datos del formulario
    const emailBody = `
Solicitud de Servicio - Taller Marino Perlaza

Datos del Cliente:
- Nombre: ${formData.nombre}
- Email: ${formData.email}
- Teléfono: ${formData.telefono}
- Vehículo: ${formData.vehiculo}

Servicio Requerido:
${formData.servicio}

---
Este correo fue enviado desde el sitio web de Taller Marino Perlaza
    `.trim();

    // Usar mailto para enviar el correo
    const mailtoLink = `mailto:tallermarinoperlaza@gmail.com?subject=Nueva%20Solicitud%20de%20Servicio%20-%20${encodeURIComponent(formData.nombre)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;

    // Mostrar mensaje de éxito
    setSubmitMessage('¡Gracias! Se abrirá tu cliente de correo para enviar la solicitud.');
    
    // Limpiar formulario después de 2 segundos
    setTimeout(() => {
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        vehiculo: '',
        servicio: ''
      });
      setSubmitMessage('');
      setIsSubmitting(false);
    }, 2000);
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

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 bg-secondary p-8 rounded-sm border-2 border-accent">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  required
                  className="w-full bg-background border border-border rounded-sm px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Correo</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="w-full bg-background border border-border rounded-sm px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+57 (2) XXXX-XXXX"
                  required
                  className="w-full bg-background border border-border rounded-sm px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Vehículo</label>
                <input
                  type="text"
                  name="vehiculo"
                  value={formData.vehiculo}
                  onChange={handleChange}
                  placeholder="Marca y modelo"
                  required
                  className="w-full bg-background border border-border rounded-sm px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Servicio Requerido</label>
                <textarea
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  placeholder="Describe el servicio que necesitas"
                  rows={3}
                  required
                  className="w-full bg-background border border-border rounded-sm px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-industrial w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
              </button>
              {submitMessage && (
                <p className="text-accent text-sm text-center font-semibold">
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
