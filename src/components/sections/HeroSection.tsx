'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onShowMascotPopup?: () => void;
}

const HeroSection = ({ onShowMascotPopup }: HeroSectionProps) => {
  const [secondsAgo, setSecondsAgo] = useState(0);

  // Atualiza o contador automaticamente
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsAgo((prev) => prev + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
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

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-twhite from-white via-red-500 to-white leading-tight">
            Eleita{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              a melhor loja de informática{' '}
            </span>{' '}
            do Interior
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              de São Paulo
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Atendimento personalizado • Consultoria especializada • 11 anos atendendo a região de Campinas
          </p>
        </div>

        {/* Bloco do botão com status sobreposto */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="w-full max-w-xs sm:max-w-md mx-auto mb-24 sm:mb-48">
            {/* Container isolado para botão + efeitos */}
            <div className="relative">
              {/* Efeitos visuais do botão */}
              <div className="absolute -inset-3 bg-[#25D366] rounded-full blur opacity-75 animate-pulse" />
              <div className="absolute -inset-3 rounded-full border-4 border-[#25D366] animate-ping opacity-30" />
              <div
                className="absolute -inset-6 rounded-full border-4 border-[#25D366] animate-ping opacity-20"
                style={{ animationDelay: '300ms' }}
              />
              <div
                className="absolute -inset-9 rounded-full border-4 border-[#25D366] animate-ping opacity-10"
                style={{ animationDelay: '600ms' }}
              />

              {/* BOTÃO COM LINK */}
              <a
                href="https://hazap.com.br/vendas/atendimentoWhatsapp?msg=Ol%C3%A1%2C%20tudo%20bem%3F%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20personalizado."
                target="_blank"
                rel="noopener noreferrer"
                className="block relative z-10"
              >
                <Button
                  size="lg"
                  className="w-full text-lg sm:text-xl font-bold bg-gradient-to-r from-[#25D366] to-[#25D366] hover:from-[#25D366] hover:to-[#25D366] px-7 py-7 sm:px-8 sm:py-8 rounded-full border-1 border-[#25D366] shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                >
                  <div className="bg-white rounded-full p-1 sm:p-2 mr-2 flex items-center justify-center">
                    <img
                      src="/vendas/wpp.svg"
                      alt="WhatsApp Hazap"
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    />
                  </div>

                  <div className="flex flex-col items-start">
                    <span className="text-xs sm:text-sm text-black font-normal">
                      Atendimento em 2 minutos
                    </span>
                    <span className="text-base mb-2 sm:text-lg text-black font-bold">
                      FALAR COM ESPECIALISTA
                    </span>
                  </div>
                </Button>
              </a>

              {/* STATUS SOBREPOSTO AO BOTÃO - VERSÃO RESPONSIVA MELHORADA */}
              <div className="absolute top-12 sm:top-10 md:top-12 left-0 right-0 z-20 px-2 sm:px-4 md:px-6">
                <div className="mx-auto w-[85%] sm:w-[75%] md:w-[70%] max-w-xs sm:max-w-sm flex flex-col items-center bg-white text-black px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-md border border-green-300">
                  
                  {/* Linha com bolinha + especialistas */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="relative flex items-center">
                      <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-green-600 shadow-md"></span>
                      </span>
                    </div>
                    <span className="font-semibold text-black text-xs sm:text-sm md:text-base">3 especialistas online</span>
                  </div>

                  <span className="text-neutral-600 text-[10px] sm:text-xs md:text-sm mt-0.5 sm:mt-1">
                    Última resposta: há 60 segundos
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;