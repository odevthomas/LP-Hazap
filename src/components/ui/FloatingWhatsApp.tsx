
import React from 'react';
import WhatsAppIcon from '../icons/WhatsAppIcon';

const FloatingWhatsApp = () => {
  const scrollToMachines = () => {
    const componentsSection = document.getElementById('components');
    if (componentsSection) {
      componentsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
  );
};

export default FloatingWhatsApp;
