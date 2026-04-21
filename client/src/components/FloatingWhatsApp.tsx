import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const message = "Hola Taller Marino Perlaza, me gustaría solicitar información sobre sus servicios.";
    const whatsappUrl = `https://wa.me/573173739444?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      title="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:animate-bounce" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 bg-gray-800 text-white text-sm px-3 py-2 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Contactar por WhatsApp
        <div className="absolute top-full right-2 w-2 h-2 bg-gray-800 transform rotate-45"></div>
      </div>
    </button>
  );
}
