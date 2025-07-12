'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import WhatsAppIcon from '../icons/WhatsAppIcon';

interface HeroSectionProps {
  onShowMascotPopup: () => void;
}

const HeroSection = ({ onShowMascotPopup }: HeroSectionProps) => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden rounded-b-3xl">
    {/* Fundo com vídeo e overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-orange-900/30 rounded-b-3xl">
      <div className="absolute inset-0 bg-black/60 rounded-b-3xl"></div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-40 rounded-b-3xl"
      >
        <source
          src="https://iyqujwbqfomznelsvebl.supabase.co/storage/v1/object/public/videos-hazap//hero-horizontal-videos.mp4"
          type="video/mp4"
        />
      </video>
    </div>

    {/* Conteúdo */}
    <div className="relative z-10 text-center px-4 sm:px-8 md:px-12 max-w-6xl mx-auto">
      <div className="mb-12 animate-fade-in">
        <img
          src="/vendas/logo.png"
          alt="Hazap Logo"
          className="h-36 md:h-44 mx-auto mb-8 drop-shadow-2xl"
        />

          <h1 className="text-5xl md:text-7xl font-black mb-8 text-twhite  from-white via-red-400 to-white ">
          Eleita <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">a melhor loja de informática </span> no
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
 do Interior de São Paulo

          </span>
        </h1>
      </div>

      {/* Botão principal */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <div className="relative max-w-md mx-auto mb-48">
                  <div className="absolute -inset-3 bg-[#25D366] rounded-full blur opacity-75 animate-pulse"></div>
                  <div className="absolute -inset-3 rounded-full border-4 border-[#25D366] animate-ping opacity-30"></div>
                  <div className="absolute -inset-6 rounded-full border-4 border-[#25D366] animate-ping opacity-20" style={{ animationDelay: "300ms" }}></div>
                  <div className="absolute -inset-9 rounded-full border-4 border-[#25D366] animate-ping opacity-10" style={{ animationDelay: "600ms" }}></div>
      
                  <a
                    href="https://wa.me/5519993261388?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20da%20HAZAP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      size="lg"
                      className="relative w-full text-xl font-bold bg-gradient-to-r from-[#25D366] to-[#25D366] hover:from-[#25D366] hover:to-[#25D366] px-8 py-8 rounded-full border-2 border-white shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                    >
                      <div className="bg-white rounded-full p-2 mr-2">
         <img
                                                   src="/vendas/wpp.svg"
                                                   alt="WhatsApp"
                                                   className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                                 />                </div>
                      <div className="flex flex-col items-start">
                        <span className="text-sm  text-black font-normal">Atendimento Imediato</span>
                        <span className="text-lg  text-black font-bold">FALE COM UM ESPECIALISTA</span>
                      </div>
                      <span className="absolute -right-2 -top-2 flex h-6 w-6">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-6 w-6 bg-white text-[#000] flex items-center justify-center text-xs font-bold">1</span>
                      </span>
                    </Button>
                  </a>
                </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
