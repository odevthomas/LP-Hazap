
import React from 'react';
import WhatsAppIcon from '../icons/WhatsAppIcon';

const FloatingWhatsApp = () => (
  <a
    href="https://hazap.com.br/redirect/?msg=Olá, tudo bem? Vim através do site e gostaria de solicitar um orçamento personalizado."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-green-500 to-green-400 text-black font-bold py-4 px-6 rounded-full shadow-2xl hover:shadow-green-500/25 hover:scale-105 transition-all duration-300 flex items-center backdrop-blur-sm"
  >
    <WhatsAppIcon />
    FALE COM ESPECIALISTA
  </a>
);

export default FloatingWhatsApp;
