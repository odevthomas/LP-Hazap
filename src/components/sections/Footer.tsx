
import React from 'react';
import { ArrowUp, Building, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

const Footer = ({ onScrollToTop }: FooterProps) => (
  <footer className="bg-gradient-to-br from-black to-slate-900 border-t border-orange-500/20 py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
        <div className="flex flex-wrap gap-8 items-center">
          <button 
            onClick={onScrollToTop}
            className="text-orange-400 hover:text-orange-300 transition-colors flex items-center space-x-2 bg-gradient-to-r from-slate-800/30 to-slate-900/30 px-6 py-3 rounded-full border border-orange-500/20 backdrop-blur-sm"
          >
            <ArrowUp size={16} />
            <span>Voltar ao topo</span>
          </button>
          <a href="#" className="text-gray-400 hover:text-white transition-colors px-6 py-3 rounded-full hover:bg-white/10">
            Política de Privacidade
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors px-6 py-3 rounded-full hover:bg-white/10">
            Termos de uso
          </a>
        </div>
        
        <div className="flex space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
            <Building className="w-5 h-5 text-white" />
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
            <Phone className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12 pt-8 border-t border-gray-800">
        <p className="text-gray-400">
          © 2025 Hazap. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
