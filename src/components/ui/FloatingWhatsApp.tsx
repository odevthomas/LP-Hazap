import React, { useState, useEffect } from "react";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import { X, Bell } from "lucide-react";

const FloatingWhatsApp = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToMachines = () => {
    const section = document.getElementById("components");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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
      {/* Botão de notificação */}
      <div
        onClick={toggleNotification}
        className="fixed bottom-24 right-8 z-40 cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full shadow-lg hover:shadow-orange-500/25 hover:scale-110 transition-all duration-300 animate-pulse"
      >
        <Bell className="w-5 h-5" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
      </div>

      {/* Card flutuante com mascote */}
      {showNotification && (
        <div className="fixed bottom-36 right-8 z-50 max-w-sm animate-slide-in-right">
          <div className="relative">
            {/* Mascote */}
            <div className="absolute bottom-full right-9 transform translate-y-1/2 z-0 pointer-events-none">
              <img
                src="/vendas/mascote.png"
                alt="Mascote Hazap"
                className="w-100 h-83 object-contain animate-bounce-slow"
                style={{
                  filter: "drop-shadow(0 20px 25px rgba(226, 223, 223, 0.01))",
                }}
              />
              <div className="absolute inset-0 w-40 h-40 rounded-full bg-orange-500/20 blur-2xl" />
            </div>

            {/* Card de notificação */}
            <div className="relative bg-gradient-to-br from-black via-slate-900 to-black border border-orange-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md overflow-hidden z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl z-0" />

              {/* Botão fechar */}
              <button
                onClick={hideNotification}
                className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Conteúdo principal */}
              <div className="relative z-10">
               
                <h3 className="text-lg font-bold mb-2 text-white">
                  Conheça nossas máquinas
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Explore os computadores disponíveis com desempenho de ponta para games, trabalho e produtividade.
                </p>

                <button
                  onClick={scrollToMachines}
                  className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold py-2 px-4 rounded-lg w-full transform hover:scale-105 transition-all duration-300 flex items-center justify-center border border-green-300/20"
                >
                  VER MÁQUINAS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;
