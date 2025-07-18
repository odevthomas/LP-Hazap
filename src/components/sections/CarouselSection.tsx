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
import {
  FiAward,
  FiTarget,
  FiCpu,
  FiZap,
  FiUsers,
  FiCheckCircle,
} from 'react-icons/fi';

const carouselItems = [
  {
    type: 'video',
    content:
      'https://iyqujwbqfomznelsvebl.supabase.co/storage/v1/object/public/videos-hazap//pcgamer.mp4',
    title: 'PC GAMER | DOMINE QUALQUER JOGO',
    descriptionItems: [
      { icon: <FiAward className="mr-2 text-orange-500" />, text: 'Máxima performance em todos os jogos' },
      { icon: <FiTarget className="mr-2 text-orange-500" />, text: 'FPS estável garantido' },
      { icon: <FiCpu className="mr-2 text-orange-500" />, text: 'RGB personalizado' },
      { icon: <FiZap className="mr-2 text-orange-500" />, text: 'Pronto para GTA 6 e títulos AAA' },
      { icon: <FiCheckCircle className="mr-2 text-green-600" />, text: '+60 mil gamers satisfeitos' },
    ],
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
    title: 'PROFISSIONAL OTIMIZADO WORKSTATION | MÁXIMA PRODUTIVIDADE',
    descriptionItems: [
      { icon: <FiZap className="mr-2 text-orange-500" />, text: 'Renderização 3x mais rápida' },
      { icon: <FiCpu className="mr-2 text-orange-500" />, text: 'Fluxo de trabalho otimizado' },
      { icon: <FiUsers className="mr-2 text-orange-500" />, text: 'Estabilidade profissional' },
      { icon: <FiTarget className="mr-2 text-orange-500" />, text: 'ROI garantido no seu negócio' },
      { icon: <FiCheckCircle className="mr-2 text-green-600" />, text: '+38mil escritórios atendidos na região' },
    ],
    whatsappMsg: 'Olá, gostaria de saber mais sobre os computadores voltados para uso profissional.',
  },
  {
    type: 'video',
    content:
      'https://iyqujwbqfomznelsvebl.supabase.co/storage/v1/object/public/videos-hazap//pccustom.mp4',
    title:
      'PERSONALIZADO OTIMIZADO | PC SOB MEDIDA CAMPINAS | SUA VISÃO, NOSSA EXPERTISE',
    descriptionItems: [
      { icon: <FiCheckCircle className="mr-2 text-orange-600" />, text: '100% personalizado para você' },
      { icon: <FiCpu className="mr-2 text-orange-600" />, text: 'Design único' },
      { icon: <FiZap className="mr-2 text-orange-600" />, text: 'Performance sob medida' },
      { icon: <FiUsers className="mr-2 text-orange-600" />, text: 'Consultoria especializada incluída' },
      { icon: <FiCheckCircle className="mr-2 text-green-600" />, text: 'Cada PC é um projeto único.' },
    ],
    whatsappMsg: 'Olá, gostaria de montar uma máquina customizada e totalmente personalizada por mim.',
  },
];

const CarouselSection = () => {
  const basePath = '/vendas';

  return (
    <section id="luna" className="py-24 px-4 bg-gradient-to-br from-black via-black to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            PCs Sob Medida para Campinas e Região
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Tecnologia de Ponta em Campinas | PCs que Superam Expectativas
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {carouselItems.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden rounded-3xl bg-black border border-orange-500/30 hover:border-orange-500/60 shadow-xl transition-transform duration-300 hover:scale-105"
            >
              <CardContent className="flex flex-col flex-grow p-6">
                <div className="mb-6 h-[540px] sm:h-[320px] md:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden">
                  {item.type === 'video' ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={item.content} type="video/mp4" />
                    </video>
                  ) : (
                    <Carousel className="w-full h-full">
                      <CarouselContent className="h-full">
                        {item.content.map((img, imgIndex) => (
                          <CarouselItem key={imgIndex} className="h-full">
                            <div className="relative h-full">
                              <img
                                src={img}
                                alt={`Imagem ${imgIndex + 1}`}
                                className="w-full h-full object-cover rounded-xl"
                              />
                              <div className="absolute top-4 right-4 bg-black/60 text-orange-400 px-3 py-1 rounded-full text-sm">
                                {imgIndex + 1} / {item.content.length}
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  )}
                </div>

                <h3 className="text-lg font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
                  {item.title}
                </h3>

                <ul className="text-gray-300 space-y-2 mb-6">
                  {item.descriptionItems.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      {desc.icon}
                      <span>{desc.text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${basePath}/atendimentoWhatsapp?msg=${encodeURIComponent(item.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-semibold text-sm py-3 px-4 rounded-full shadow-lg flex items-center justify-center gap-2">
                    <img
                      src="/vendas/wpp.svg"
                      alt="WhatsApp"
                      className="w-4 h-4 object-contain"
                    />
                    {item.title.includes('PROFISSIONAL')
                      ? 'FALAR COM ESPECIALISTA'
                      : 'SOLICITAR ORÇAMENTO'}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
