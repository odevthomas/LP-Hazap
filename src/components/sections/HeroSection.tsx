
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

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
          className="h-28 sm:h-36 md:h-44 mx-auto mb-8 drop-shadow-2xl"
        />

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-twhite from-white via-red-400 to-white leading-tight">
          Eleita{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            a melhor loja de informática{' '}
          </span>{' '}
          do Interior
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
             de São Paulo
          </span>
        </h1>
      </div>

      {/* Card de especialistas online */}
      <div className="mb-6 flex justify-center">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
          <div className="relative">
            <Users className="w-4 h-4 text-green-400" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          <span className="text-white text-sm font-medium">3 especialistas online</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Botão principal */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <div className="relative max-w-xs sm:max-w-md mx-auto mb-24 sm:mb-48">
          {/* Animações do botão */}
          <div className="absolute -inset-3 bg-[#25D366] rounded-full blur opacity-75 animate-pulse"></div>
          <div className="absolute -inset-3 rounded-full border-4 border-[#25D366] animate-ping opacity-30"></div>
          <div
            className="absolute -inset-6 rounded-full border-4 border-[#25D366] animate-ping opacity-20"
            style={{ animationDelay: '300ms' }}
          ></div>
          <div
            className="absolute -inset-9 rounded-full border-4 border-[#25D366] animate-ping opacity-10"
            style={{ animationDelay: '600ms' }}
          ></div>

          <a
            href="https://wa.me/5519993261388?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20da%20HAZAP"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button
              size="lg"
              className="relative w-full text-lg sm:text-xl font-bold bg-gradient-to-r from-[#25D366] to-[#25D366] hover:from-[#25D366] hover:to-[#25D366] px-6 py-6 sm:px-8 sm:py-8 rounded-full border-2 border-white shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              {/* Ícone com tamanho controlado */}
              <div className="bg-white rounded-full p-1 sm:p-2 mr-2 flex items-center justify-center">
                <img
                  src="/vendas/wpp.svg"
                  alt="WhatsApp"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                />
              </div>

              <div className="flex flex-col items-start">
                <span className="text-xs sm:text-sm text-black font-normal">
                  Atendimento Imediato
                </span>
                <span className="text-base sm:text-lg text-black font-bold">
                  FALE COM UM ESPECIALISTA
                </span>
              </div>

              <span className="absolute -right-2 -top-2 flex h-6 w-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-white text-[#000] flex items-center justify-center text-xs font-bold">
                  1
                </span>
              </span>
            </Button>
          </a>
            <div className="absolute -bottom-9 left-0 right-0 text-center">
              <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium shadow-md">
                <span className="text-green-600 font-bold text-lg">✓</span>
                <span>3 especialistas online agora</span>
              </div>
              </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
