import { Star, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function TestimonialsSection() {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comments, setComments] = useState<Array<{ id: number; nombre: string; comentario: string }>>([]);
  const [formData, setFormData] = useState({ nombre: '', comentario: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const testimonials = [
    {
      id: 1,
      nombre: "Carlos M.",
      vehiculo: "Toyota Corolla 2018",
      calificacion: 5,
      texto: "Ey, llevé mi carro para el cambio de aceite y quedó impecable. Don Marino es muy honesto, no te cobra cosas que no necesitas. Volví varias veces ya.",
      iniciales: "CM"
    },
    {
      id: 2,
      nombre: "María",
      vehiculo: "Chevrolet Cruze 2020",
      calificacion: 5,
      texto: "Me repararon los frenos y la verdad quedó muy bien. El muchacho me explico todo paso a paso. Recomendado, no me arrepiento.",
      iniciales: "MG"
    },
    {
      id: 3,
      nombre: "Juan",
      vehiculo: "Mazda 3 2019",
      calificacion: 5,
      texto: "Sinceramente Don Marino sabe mucho del tema. Me arregló la sincroniación del motor y el carro anda como nuevo. Precio justo, eso es lo que me gusta.",
      iniciales: "JR"
    },
    {
      id: 4,
      nombre: "Patricia",
      vehiculo: "Hyundai Elantra 2021",
      calificacion: 5,
      texto: "Fui porque me dijeron que estaba dañado pero no sabía qué era. Ellos me lo diagnosticaron bien rápido y me lo arreglaron. Otros talleres ni me lo habían visto.",
      iniciales: "PL"
    },
    {
      id: 5,
      nombre: "Roberto",
      vehiculo: "Kia Picanto 2020",
      calificacion: 5,
      texto: "Cambio de aceite y filtros, todo bien. La atención es buena, te explican que le van a hacer al carro. Voy a volver cuando toque el proximo servicio.",
      iniciales: "RS"
    },
    {
      id: 6,
      nombre: "Alejandra",
      vehiculo: "Volkswagen Jetta 2019",
      calificacion: 5,
      texto: "Mi taxi estaba todo rayado y golpeado. Lo llevé y quedó como nuevo, la pintura brilla. Los precios son buenos comparado con otros lados. Muy recomendado!",
      iniciales: "AR"
    }
  ];

  const handleAddComment = async () => {
    if (formData.nombre.trim() && formData.comentario.trim()) {
      setIsSubmitting(true);
      try {
        // Enviar a Formspree
        const response = await fetch('https://formspree.io/f/xyzgqbpq', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: formData.nombre,
            comentario: formData.comentario,
            fecha: new Date().toLocaleString('es-CO'),
          }),
        });

        if (response.ok) {
          // Mostrar en la página también
          setComments([...comments, { ...formData, id: Date.now() }]);
          setFormData({ nombre: '', comentario: '' });
          setShowCommentForm(false);
          setSubmitMessage('¡Comentario enviado! Gracias por tu feedback.');
          setTimeout(() => setSubmitMessage(''), 3000);
        } else {
          setSubmitMessage('Error al enviar. Intenta de nuevo.');
        }
      } catch (error) {
        console.error('Error:', error);
        setSubmitMessage('Error al enviar. Intenta de nuevo.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="testimonios" className="bg-secondary py-20 border-t-2 border-accent">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent"></div>
            <span className="text-accent font-mono text-sm font-semibold">Testimonios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-400">
            Trabajo de calidad, ganando la confianza de cientos de clientes satisfechos con nuestro servicio técnico especializado.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background p-8 rounded-sm border-2 border-accent hover:border-accent hover:shadow-lg transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.calificacion }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.texto}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-background font-bold text-lg">
                      {testimonial.iniciales}
                    </span>
                  </div>
                </div>

                {/* Client Details */}
                <div>
                  <h4 className="font-bold text-white">
                    {testimonial.nombre}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.vehiculo}
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 opacity-10 text-accent">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M8 20c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12zm4 0c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8-8 3.582-8 8z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Comments Section */}
        <div className="mt-16 border-t-2 border-accent pt-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <MessageCircle size={24} className="text-accent" />
              <h3 className="text-xl font-bold text-white">Deja tu comentario</h3>
            </div>
            <button
              onClick={() => setShowCommentForm(!showCommentForm)}
              className="text-sm bg-accent text-background px-4 py-2 rounded-sm hover:bg-orange-600 transition-colors"
            >
              {showCommentForm ? 'Cancelar' : 'Agregar comentario'}
            </button>
          </div>

          {showCommentForm && (
            <div className="bg-background p-6 rounded-sm border border-accent mb-8">
              <input
                type="text"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full bg-secondary text-white px-4 py-2 rounded-sm border border-border mb-4 focus:outline-none focus:border-accent transition-colors"
              />
              <textarea
                placeholder="Tu comentario (máximo 200 caracteres)"
                maxLength={200}
                value={formData.comentario}
                onChange={(e) => setFormData({ ...formData, comentario: e.target.value })}
                className="w-full bg-secondary text-white px-4 py-2 rounded-sm border border-border mb-4 focus:outline-none focus:border-accent transition-colors resize-none h-24"
              />
              <button
                onClick={handleAddComment}
                disabled={isSubmitting}
                className="w-full bg-accent text-background py-2 rounded-sm hover:bg-orange-600 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar comentario'}
              </button>
            </div>
          )}

          {submitMessage && (
            <div className="bg-accent/20 border border-accent text-accent px-4 py-3 rounded-sm mb-8 text-sm">
              {submitMessage}
            </div>
          )}

          {comments.length > 0 && (
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-background p-4 rounded-sm border border-border">
                  <p className="text-sm font-semibold text-accent mb-2">{comment.nombre}</p>
                  <p className="text-gray-300 text-sm">{comment.comentario}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t-2 border-accent pt-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              18+
            </div>
            <p className="text-gray-400 font-semibold">
              Años de Experiencia
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              500+
            </div>
            <p className="text-gray-400 font-semibold">
              Clientes Satisfechos
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              100%
            </div>
            <p className="text-gray-400 font-semibold">
              Garantía en Servicios
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
