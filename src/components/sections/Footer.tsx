'use client'

import React from 'react';
import { ArrowUp, Building, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

const Footer = ({ onScrollToTop }: FooterProps) => (
  <footer className="bg-black border-t border-orange-500/20 py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
        {/* Navegação e botão voltar ao topo */}
        <div className="flex flex-wrap gap-6 items-center">
          <button 
            onClick={onScrollToTop}
            className="text-orange-400 hover:text-orange-300 transition-colors flex items-center space-x-2 bg-gradient-to-r from-black/50 to-slate-900/50 px-6 py-3 rounded-full border border-orange-500/30 backdrop-blur-sm hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300"
          >
            <ArrowUp size={16} />
            <span>Voltar ao topo</span>
          </button>

        </div>
        
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 pt-8 border-t border-gray-800">
        <p className="text-gray-400">
          © 2025 Hazap. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
