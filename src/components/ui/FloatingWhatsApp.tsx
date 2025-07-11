
import React, { useState, useEffect } from 'react';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import { X, Bell } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Mostrar notificação após 3 segundos
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToMachines = () => {
    const componentsSection = document.getElementById('components');
    if (componentsSection) {
      componentsSection.scrollIntoView({ behavior: 'smooth' });
    }
    setShowNotification(false);
  };

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  const hideNotification = () => {
    setShowNotification(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Notification Toggle Button */}
      <div 
        onClick={toggleNotification}
        className="fixed bottom-24 right-8 z-40 cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full shadow-lg hover:shadow-orange-500/25 hover:scale-110 transition-all duration-300 animate-pulse"
      >
        <Bell className="w-5 h-5" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
      </div>

      {/* Notification Popup */}
      {showNotification && (
        <div className="fixed bottom-36 right-8 z-50 max-w-sm animate-slide-in-right">
          <div className="bg-gradient-to-br from-slate-800 to-black border border-orange-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            {/* Close button */}
            <button 
              onClick={hideNotification}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-400 font-semibold text-sm">MÁQUINAS DISPONÍVEIS</span>
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-white">
                🔥 Ofertas Especiais Ativas
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Computadores gamers com desconto especial hoje!
              </p>
              
              <button 
                onClick={scrollToMachines}
                className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold py-2 px-4 rounded-lg w-full transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <WhatsAppIcon />
                VER OFERTAS
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main floating button */}
      <div 
        onClick={scrollToMachines}
        className="fixed bottom-8 right-8 z-50 cursor-pointer bg-gradient-to-r from-green-500 to-green-400 text-black font-bold py-4 px-6 rounded-full shadow-2xl hover:shadow-green-500/25 hover:scale-105 transition-all duration-300 flex items-center backdrop-blur-sm relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center rounded-full"
          style={{
            backgroundImage: 'url(/lovable-uploads/e982f295-d149-4f7b-aa5f-bea6d065af0f.png)'
          }}
        />
        <div className="relative z-10 flex items-center">
          <WhatsAppIcon />
          VER MÁQUINAS
        </div>
      </div>
    </>
  );
};

export default FloatingWhatsApp;
