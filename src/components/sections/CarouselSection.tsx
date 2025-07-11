"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import WhatsAppIcon from '../icons/WhatsAppIcon';

const CarouselSection = () => {
  const carouselItems = [
    {
      type: "video",
      content: "https://iyqujwbqfomznelsvebl.supabase.co/storage/v1/object/public/videos-hazap//pcgamer.mp4",
      title: "PC Gamer Performance",
      description: "Máxima performance para jogos AAA com FPS elevado e gráficos incríveis",
      featured: false
    },
    {
      type: "images",
      content: [
        "/vendas/seupc/pc-arquitetos.png",
        "/vendas/seupc/pc-designers.png",
        "/vendas/seupc/pc-engenheiros.png",
        "/vendas/seupc/pc-traders.png",
      ],
      title: "Componentes Premium",
      description: "As melhores peças do mercado selecionadas pelos nossos especialistas",
      featured: true
    },
    {
      type: "video",
      content: "https://iyqujwbqfomznelsvebl.supabase.co/storage/v1/object/public/videos-hazap//pccustom.mp4",
      title: "Customização Total",
      description: "Feito sob medida para suas necessidades específicas e preferências",
      featured: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-black via-black to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Veja nossa tecnologia em ação
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore nossa linha completa de soluções tecnológicas através de demonstrações reais
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {carouselItems.map((item, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden transition-all duration-500 transform hover:scale-105 ${
                item.featured
                  ? 'lg:scale-110 bg-black from-orange-500/20 to-red-500/20 border border-orange-500/50 shadow-2xl shadow-orange-500/25'
                  : 'bg-black from-slate-800/30 to-black/30 border border-orange-500/20 hover:border-orange-500/40'
              } rounded-3xl backdrop-blur-sm`}
            >
              <CardContent className="p-0">
                <div className="p-6 pb-4 flex items-center justify-between">
                  {item.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-black text-xs font-bold rounded-full">
                      DESTAQUE
                    </span>
                  )}
                </div>

                <div className={`px-6 ${item.featured ? 'pb-2' : 'pb-4'}`}>
                  <div className="h-[28rem] md:h-[34rem] xl:h-[30rem] mb-6 rounded-2xl overflow-hidden relative">
                    {item.type === "video" ? (
                      <div className="relative group/video h-full">
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/video:scale-105"
                        >
                          <source src={item.content as string} type="video/mp4" />
                        </video>
                      </div>
                    ) : (
                      <div className="h-full">
                        {item.featured ? (
                          <Carousel className="w-full h-[28rem] md:h-[34rem] xl:h-[38rem]">
                            <CarouselContent className="h-full">
                              {(item.content as string[]).map((img, imgIndex) => (
                                <CarouselItem key={imgIndex} className="h-full">
                                  <div className="relative h-full group/image">
                                    <img
                                      src={img}
                                      alt={`Component ${imgIndex + 1}`}
                                      className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover/image:scale-105"
                                    />
                                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-orange-400 px-3 py-1 rounded-full text-sm font-medium border border-orange-500/30">
                                      {imgIndex + 1} / {(item.content as string[]).length}
                                    </div>
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2 bg-black/50 border-orange-500/30 text-orange-400 hover:bg-orange-500/20 hover:text-orange-300" />
                            <CarouselNext className="right-2 bg-black/50 border-orange-500/30 text-orange-400 hover:bg-orange-500/20 hover:text-orange-300" />
                          </Carousel>
                        ) : (
                          <div className="grid grid-cols-2 gap-2 h-[24rem] md:h-[30rem]">
                            {(item.content as string[]).slice(0, 4).map((img, imgIndex) => (
                              <div key={imgIndex} className="relative group/image">
                                <img
                                  src={img}
                                  alt={`Component ${imgIndex + 1}`}
                                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover/image:scale-105"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="text-center">
                    <h3 className={`${item.featured ? 'text-2xl' : 'text-xl'} font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600`}>
                      {item.title}
                    </h3>
                    <p className={`text-gray-300 mb-6 ${item.featured ? 'text-base' : 'text-sm'} leading-relaxed`}>
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <Button
                                                onClick={() =>
                                                  window.open(
                                                    `https://hazap.com.br/redirect/?msg=${encodeURIComponent(
                                                      component.whatsappMsg
                                                    )}`,
                                                    '_blank'
                                                  )
                                                }
                                                className="relative z-10 bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold py-3 px-5 rounded-full w-full shadow-lg text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                                              >
                                                {/* Ícone como imagem */}
                                                <div className="bg-white rounded-full p-1 sm:p-1.5 flex items-center justify-center">
                                                  <img
                                                    src="/vendas/wpp.svg"
                                                    alt="WhatsApp"
                                                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                                  />
                                                </div>
                                               
                                           
                    {item.featured ? 'FALAR COM ESPECIALISTA' : 'SOLICITAR ORÇAMENTO'}
                  </Button>
                  
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">
            Quer ver mais detalhes? Fale com nossos especialistas agora mesmo!
          </p>
          <Button
            onClick={() => window.open("https://hazap.com.br/redirect/?msg=Olá, gostaria de agendar uma demonstração completa dos produtos Hazap.", "_blank")}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-black font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300"
          >
            <WhatsAppIcon />
            AGENDAR DEMONSTRAÇÃO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
