'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const CarouselSection = () => {
  const basePath = '/vendas';

  const carouselItems = [
    {
      type: 'video',
      content: 'https://iyqujwbqfomznelsvebl.supabase.co/storage/v1/object/public/videos-hazap//pcgamer.mp4',
      title: 'COMPUTADOR GAMER',
      description:
        'Jogue Call of Duty, Valorant, CS, LoL e até GTA 6 com alto desempenho, máxima estabilidade, FPS elevado e visual de respeito.',
      whatsappMsg: 'Olá, gostaria de um orçamento para um PC Gamer.',
    },
    {
      type: 'images',
      content: [
        '/vendas/seupc/pc-arquitetos.png',
        '/vendas/seupc/pc-designers.png',
        '/vendas/seupc/pc-engenheiros.png',
        '/vendas/seupc/pc-programador.png',
        '/vendas/seupc/pc-ia.png',
        '/vendas/seupc/pc-personalizado-1.png',
        '/vendas/seupc/pc-personalizado-2.png',
        '/vendas/seupc/pc-personalizado-3.png',
        '/vendas/seupc/pc-personalizado-4.png',
        '/vendas/seupc/pc-personalizado-5.png',
        '/vendas/seupc/pc-personalizado-6.png',
      ],
      title: 'COMPUTADORES PARA PROFISSIONAIS',
      description:
        'Máquinas desenvolvidas para engenheiros, arquitetos, designers gráficos e outros profissionais que exigem performance, agilidade e confiabilidade no dia a dia.',
      whatsappMsg: 'Olá, gostaria de saber mais sobre os computadores voltados para uso profissional.',
    },
    {
      type: 'video',
      content: 'https://iyqujwbqfomznelsvebl.supabase.co/storage/v1/object/public/videos-hazap//pccustom.mp4',
      title: 'COMPUTADORES PERSONALIZADOS',
      description:
        'Montamos seu PC sob medida, com processadores Ryzen ou Intel e placas de vídeo high-end, escolhidas de acordo com sua necessidade e estilo de uso.',
      whatsappMsg: 'Olá, gostaria de montar uma máquina customizada e totalmente personalizada por mim.',
    },
  ];

  return (
    <section id="luna" className="py-24 px-4 bg-gradient-to-br from-black via-black to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Veja nossa tecnologia em ação
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore nossa linha completa de soluções tecnológicas através de demonstrações reais
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {carouselItems.map((item, index) => (
            <Card
              key={index}
              className={`flex flex-col justify-between overflow-hidden rounded-3xl backdrop-blur-sm transition-all duration-500 transform hover:scale-105 h-full ${
                item.title.includes('PROFISSIONAIS')
                  ? 'bg-black border border-orange-500/50 shadow-2xl shadow-orange-500/25'
                  : 'bg-black border border-orange-500/20 hover:border-orange-500/40'
              }`}
            >
              <CardContent className="flex flex-col flex-grow p-6">
                {item.title.includes('PROFISSIONAIS') && (
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-black text-xs font-bold rounded-full">
                      DESTAQUE
                    </span>
                  </div>
                )}

                {/* Mídia */}
                <div className="mb-6 h-[240px] sm:h-[320px] md:h-[380px] lg:h-[440px] rounded-2xl overflow-hidden">
                  {item.type === 'video' ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    >
                      <source src={item.content as string} type="video/mp4" />
                    </video>
                  ) : (
                    <Carousel className="w-full h-full">
                      <CarouselContent className="h-full">
                        {(item.content as string[]).map((img, imgIndex) => (
                          <CarouselItem key={imgIndex} className="h-full">
                            <div className="relative h-full group">
                              <img
                                src={img}
                                alt={`Imagem ${imgIndex + 1}`}
                                className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute top-4 right-4 bg-black/50 text-orange-400 px-3 py-1 rounded-full text-sm font-medium border border-orange-500/30">
                                {imgIndex + 1} / {(item.content as string[]).length}
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2 bg-black/50 border-orange-500/30 text-orange-400" />
                      <CarouselNext className="right-2 bg-black/50 border-orange-500/30 text-orange-400" />
                    </Carousel>
                  )}
                </div>

                {/* Conteúdo */}
                <div className="text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 min-h-[48px] flex items-center justify-center">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed flex-1 mb-6">
                    {item.description}
                  </p>

                  {/* Botão */}
                  <div className="mt-auto">
                    <a
                      href={`${basePath}/atendimentoWhatsapp?msg=${encodeURIComponent(item.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-semibold text-sm py-3 px-4 rounded-full shadow transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                        <img
                          src="/vendas/wpp.svg"
                          alt="WhatsApp"
                          className="w-4 h-4 object-contain"
                        />
                        {item.title.includes('PROFISSIONAIS') ? 'FALAR COM ESPECIALISTA' : 'SOLICITAR ORÇAMENTO'}
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
