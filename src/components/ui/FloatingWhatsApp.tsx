import React, { useState, useEffect } from "react";
import { X, Bell, Wrench, CreditCard, Package, Star } from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";

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
    const section = document.getElementById("luna");
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
        className="fixed bottom-24 right-8 z-40 cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full shadow-lg hover:shadow-orange-500/25 hover:scale-110 transition-all duration-300 animate-pulse
          sm:bottom-20 sm:right-6
          xs:bottom-16 xs:right-4
        "
        aria-label="Abrir notificação WhatsApp"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") toggleNotification();
        }}
      >
        <Bell className="w-5 h-5 sm:w-4 sm:h-4 xs:w-3 xs:h-3" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping sm:w-2 sm:h-2 xs:w-1.5 xs:h-1.5" />
      </div>

      {/* Card flutuante */}
      {showNotification && (
        <div
          className="fixed bottom-36 right-8 z-50 max-w-sm animate-slide-in-right
            sm:bottom-28 sm:right-6 sm:max-w-xs
            xs:bottom-20 xs:right-4 xs:max-w-[280px]
          "
          role="region"
          aria-live="polite"
          aria-label="Notificação do WhatsApp"
        >
          <div className="relative">
            {/* Mascote */}
            <div
              className="absolute bottom-full right-9 transform translate-y-1/2 z-0 pointer-events-none
                sm:right-7
                xs:right-5 xs:w-36 xs:h-44
              "
            >
              <img
                src="/vendas/mascote.png"
                alt="Mascote Hazap"
                className="w-50 h-60 object-contain animate-bounce-slow
                  sm:w-40 sm:h-48
                  xs:w-36 xs:h-44
                "
                style={{
                  filter: "drop-shadow(0 20px 25px rgba(226, 223, 223, 0.01))",
                }}
              />
              <div className="absolute inset-0 w-40 h-40 rounded-full bg-orange-500/20 blur-2xl sm:w-36 sm:h-36 xs:w-32 xs:h-32" />
            </div>

            {/* Card principal */}
            <div
              className="relative bg-gradient-to-br from-black via-slate-900 to-black border border-orange-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md overflow-hidden z-10
                sm:p-5
                xs:p-4
              "
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl z-0" />

              {/* Fechar */}
              <button
                onClick={hideNotification}
                className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors z-10
                  sm:top-2 sm:right-2
                  xs:top-1 xs:right-1
                "
                aria-label="Fechar notificação"
              >
                <X className="w-4 h-4 sm:w-3 sm:h-3 xs:w-3 xs:h-3" />
              </button>

              {/* Conteúdo */}
              <div className="relative z-10 text-center sm:text-left">
                <h3
                  className="text-lg font-bold mb-3 text-white
                    sm:text-base
                    xs:text-sm
                  "
                >
                  Seu PC Gamer pronto em 24h | Região de Campinas
                </h3>

                <ul className="text-gray-300 text-sm space-y-3 mb-5 sm:text-xs xs:text-xs">
                  <li className="flex items-start gap-2">
                    <Wrench className="w-4 h-4 text-green-400 mt-0.5 sm:w-3 sm:h-3" />
                    <span>Montagem profissional com 1 ano de garantia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CreditCard className="w-4 h-4 text-green-400 mt-0.5 sm:w-3 sm:h-3" />
                    <span>Pagamento facilitado em até 12x</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Package className="w-4 h-4 text-green-400 mt-0.5 sm:w-3 sm:h-3" />
                    <span>+60.000 PCs entregues com aprovação nacional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-green-400 mt-0.5 sm:w-3 sm:h-3" />
                    <span>Avaliação 4.7 no Google e 11 anos em Campinas</span>
                  </li>
                </ul>

                <button
                  onClick={scrollToMachines}
                  className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold py-2 px-4 rounded-lg w-full transform hover:scale-105 transition-all duration-300 flex items-center justify-center border border-green-300/20
                    sm:py-1.5 sm:px-3
                    xs:py-1 xs:px-2
                  "
                  aria-label="Ver máquinas disponíveis"
                >
                  VER CONFIGURAÇÕES DISPONÍVEIS
                </button>

                <p
                  className="text-gray-300 text-sm mt-3
                    sm:text-xs
                    xs:text-xs
                  "
                >
                  Atendimento em até 2 minutos • Orçamento sem compromisso • Suporte especializado
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;
