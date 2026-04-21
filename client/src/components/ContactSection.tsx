'use client';

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
    setIsSubmitting(true);

    try {
      // Enviar al backend de Manus
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          vehiculo: formData.vehiculo,
          servicio: formData.servicio,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        toast.success('¡Solicitud enviada exitosamente! Nos contactaremos pronto.', {
          duration: 4000,
        });
        
        // Limpiar formulario
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          vehiculo: '',
          servicio: ''
        });
      } else {
        toast.error('Error al enviar la solicitud. Intenta nuevamente.', {
          duration: 4000,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error de conexión. Por favor intenta de nuevo.', {
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 bg-secondary p-8 rounded-sm border-2 border-accent">
              <h3 className="text-xl font-bold text-white mb-6">Solicita tu Servicio</h3>
              
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Nombre *</label>
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
                <label className="block text-sm font-semibold text-white mb-2">Correo *</label>
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
                <label className="block text-sm font-semibold text-white mb-2">Teléfono *</label>
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
                <label className="block text-sm font-semibold text-white mb-2">Vehículo *</label>
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
                <label className="block text-sm font-semibold text-white mb-2">Servicio Requerido *</label>
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
                className="btn-industrial w-full disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
              </button>

              <p className="text-xs text-gray-400 text-center">
                Nos contactaremos en el menor tiempo posible
              </p>
            </form>
          </div>
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

          <button
            onClick={handleEmailClick}
            className="flex items-center justify-center gap-3 border-2 border-accent text-accent hover:bg-accent hover:text-background font-bold py-4 px-6 rounded-sm transition-colors duration-200"
          >
            <Mail size={20} />
            Enviar Correo
          </button>
        </div>
      </div>
    </section>
  );
}
