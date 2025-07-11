
import React from 'react';
import { Button } from '@/components/ui/button';
import WhatsAppIcon from '../icons/WhatsAppIcon';

interface MascotPopupModalProps {
  visible: boolean;
  onClose: () => void;
  onScrollToComputers: () => void;
}

const MascotPopupModal = ({ visible, onClose, onScrollToComputers }: MascotPopupModalProps) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-md w-full">
        {/* Mascot floating above the card */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-10">
          <div className="relative">
            <img 
              src="/vendas/mascote.png" 
              alt="Mascote Hazap" 
              className="w-40 h-40 rounded-full object-cover animate-bounce border-6 border-orange-500 shadow-2xl bg-white p-2"
              style={{
                filter: 'drop-shadow(0 20px 25px rgb(0 0 0 / 0.25))',
                animation: 'bounce 2s infinite, pulse 3s infinite'
              }}
            />
            {/* Glow effect behind mascot */}
            <div className="absolute inset-0 w-40 h-40 rounded-full bg-orange-500/30 blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Main card */}
        <div className="bg-gradient-to-br from-slate-900 to-black border border-orange-500/30 rounded-3xl p-8 text-center relative animate-scale-in shadow-2xl mt-16">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            ×
          </button>
          
          {/* Content pushed down to make room for mascot */}
          <div className="mt-8">
            <div className="mb-6">
              <div className="inline-flex items-center bg-green-500/20 border border-green-500/50 rounded-full px-4 py-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-400 font-semibold text-sm">ONLINE AGORA</span>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              3 especialistas prontos!
            </h3>
            <p className="text-gray-300 mb-2 text-lg">
              Encontre o computador ideal
            </p>
            <p className="text-xl font-semibold text-green-400 mb-8">
              💻 Atendimento especializado garantido
            </p>
            
            <Button 
              onClick={onScrollToComputers}
              className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold py-4 px-8 rounded-full w-full shadow-lg transform hover:scale-105 transition-all duration-300"
              style={{
                animation: 'pulse 2s infinite'
              }}
            >
              <WhatsAppIcon />
              VEJA NOSSOS COMPUTADORES
            </Button>

            {/* Trust indicators */}
            <div className="flex justify-center items-center mt-6 space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <span className="text-orange-400 mr-1">⭐</span>
                <span>4.9/5</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-1">✓</span>
                <span>Garantia</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-1">🚚</span>
                <span>Entrega SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements for visual appeal */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500/30 rounded-full animate-ping"></div>
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-500/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default MascotPopupModal;
