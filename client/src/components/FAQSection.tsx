'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      pregunta: "¿Qué marcas de aceite utilizan?",
      respuesta: "Utilizamos las mejores marcas del mercado: ELF, Mobil, Motul, Hyundai, Pure Guard, Chevron, Havoline, Mazda, Total Energies, Petronas, Motorcraft y Kixx. Ofrecemos opciones sintéticas, semisintéticas y minerales según las necesidades de tu vehículo."
    },
    {
      pregunta: "¿Atienden todas las marcas de vehículos?",
      respuesta: "Sí, somos un Centro de Servicios Multimarca especializado. Atendemos: Renault, Chevrolet, Kia, Mazda, Toyota, Hyundai, Nissan y muchas más. Contamos con tecnología para diagnosticar y reparar cualquier marca."
    },
    {
      pregunta: "¿Cuál es el tiempo promedio de un cambio de aceite?",
      respuesta: "El cambio de aceite completo (incluyendo filtros de aceite, aire y cabina) toma entre 30 a 45 minutos. Realizamos escaneo básico del motor sin costo adicional para detectar posibles problemas."
    },
    {
      pregunta: "¿Ofrecen garantía en los servicios?",
      respuesta: "Sí, todos nuestros servicios incluyen garantía. Los productos utilizados (aceites, filtros, etc.) son garantizados por el fabricante. En reparaciones mayores ofrecemos garantía de hasta 6 meses según el tipo de servicio."
    },
    {
      pregunta: "¿Realizan servicios de reparación de motores?",
      respuesta: "Sí, realizamos reparación completa de motores a gasolina y diésel. Incluye sincronización, revisión interna, restauración y todas las reparaciones necesarias para que tu motor funcione como nuevo."
    },
    {
      pregunta: "¿Hacen trámites de tránsito?",
      respuesta: "Sí, realizamos asesoría completa en: traspasos a nivel nacional, levantamiento de prenda, licencias de conducción para todas las categorías, multas de tránsito, cursos viales y más. Simplificamos todos los trámites para ti."
    },
    {
      pregunta: "¿Cuál es el horario de atención?",
      respuesta: "Atendemos de lunes a sábado de 7:00 AM a 6:00 PM. Ubicados en Cra 15 # 6-134 San Bosco, Cali. Puedes contactarnos por WhatsApp, teléfono o visitarnos directamente."
    },
    {
      pregunta: "¿Ofrecen servicio de polarizado?",
      respuesta: "Sí, realizamos servicio de polarizado de vidrios. Es uno de nuestros servicios complementarios para proteger tu vehículo y mejorar tu comodidad al conducir."
    }
  ];

  return (
    <section id="faq" className="bg-background py-20 border-t-2 border-accent">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent"></div>
            <span className="text-accent font-mono text-sm font-semibold">Preguntas Frecuentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Respuestas a tus dudas
          </h2>
          <p className="text-lg text-gray-400">
            Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios, garantías y procesos.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-secondary border-2 border-accent rounded-sm overflow-hidden transition-all duration-300 hover:border-orange-500"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-background/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-white text-left">
                  {faq.pregunta}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-accent flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 bg-background/30 border-t-2 border-accent">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.respuesta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-secondary p-8 rounded-sm border-2 border-accent text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿No encontraste tu respuesta?
          </h3>
          <p className="text-gray-400 mb-6">
            Contáctanos directamente por WhatsApp, teléfono o correo. Estamos listos para ayudarte.
          </p>
          <a
            href="https://wa.me/573173739444?text=Hola%20Taller%20Marino%20Perlaza,%20tengo%20una%20pregunta%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-sm transition-colors duration-200"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
