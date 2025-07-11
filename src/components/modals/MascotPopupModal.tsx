
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
      <div className="bg-gradient-to-br from-slate-900 to-black border border-orange-500/30 rounded-3xl p-8 max-w-md w-full text-center relative animate-scale-in shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          ×
        </button>
        
        <div className="mb-8">
          <img 
            src="/lovable-uploads/13f250a3-9d22-4535-a3be-9b19c4e05cad.png" 
            alt="Mascote Hazap" 
            className="w-36 h-36 mx-auto rounded-full object-cover animate-bounce border-4 border-orange-500 shadow-xl"
          />
        </div>
        
        <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
          3 especialistas online agora!
        </h3>
        <p className="text-gray-300 mb-2">
          Prontos para te ajudar a encontrar
        </p>
        <p className="text-lg font-semibold text-green-400 mb-8">
          O computador ideal para você
        </p>
        
        <Button 
          onClick={onScrollToComputers}
          className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold py-4 px-8 rounded-full w-full shadow-lg"
        >
          <WhatsAppIcon />
          VEJA NOSSOS COMPUTADORES
        </Button>
      </div>
    </div>
  );
};

export default MascotPopupModal;
