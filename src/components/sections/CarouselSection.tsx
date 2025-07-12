'use client';

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
      title: "COMPUTADOR GAMER",
      description: "Jogue Call of Duty, Valorant, CS, LoL e até GTA 6 com alto desempenho, máxima estabilidade, FPS elevado e visual de respeito.",
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
      title: "COMPUTADORES PARA PROFISSIONAIS",
      description: "Máquinas desenvolvidas para engenheiros, arquitetos, designers gráficos e outros profissionais que exigem performance, agilidade e confiabilidade no dia a dia.",
      featured: true
    },
    {
      type: "video",
      content: "https://iyqujwbqfomznelsvebl.supabase.co/storage/v1/object/public/videos-hazap//pccustom.mp4",
      title: "COMPUTADORES PERSONALIZADOS",
      description: "Montamos seu PC sob medida, com processadores Ryzen ou Intel e placas de vídeo high-end, escolhidas de acordo com sua necessidade e estilo de uso.",
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
                        <Carousel className="w-full h-full">
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
                  <a
                    href={`https://hazap.com.br/redirect/?msg=${encodeURIComponent(
                      item.featured
                        ? 'Gostaria de falar com um especialista sobre a máquina em destaque.'
                        : 'Olá! Gostaria de um orçamento para essa máquina.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-semibold text-sm py-3 px-4 rounded-full shadow transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                      <img
                        src="/vendas/wpp.svg"
                        alt="WhatsApp"
                        className="w-4 h-4 object-contain"
                      />
                      {item.featured ? 'FALAR COM ESPECIALISTA' : 'SOLICITAR ORÇAMENTO'}
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">
            Quer ver mais detalhes? Fale com nossos especialistas agora mesmo!
          </p>

          <div className="relative max-w-xs mx-auto">
                      {/* Efeito vibrante */}
                      <div className="absolute -inset-3 bg-[#25D366] rounded-full blur opacity-75 animate-pulse" />
                      <div className="absolute -inset-3 rounded-full border-4 border-[#25D366] animate-ping opacity-30" />
                      <div className="absolute -inset-6 rounded-full border-4 border-[#25D366] animate-ping opacity-20" style={{ animationDelay: "300ms" }} />
                      <div className="absolute -inset-9 rounded-full border-4 border-[#25D366] animate-ping opacity-10" style={{ animationDelay: "600ms" }} />
          
                      <a
                        href="https://wa.me/5519993261388?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20da%20HAZAP"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button  className="relative w-full text-xl font-bold bg-gradient-to-r from-[#25D366] to-[#25D366] hover:from-[#25D366] hover:to-[#25D366] px-8 py-8 rounded-full border-2 border-white shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                    >
                          <div className="bg-white rounded-full p-1.5">
                            <img
                              src="/vendas/wpp.svg"
                              alt="WhatsApp"
                              className="w-4 h-4 object-contain"
                            />
                          </div>
                          <span class="text-black">CONVERSAR AGORA </span>
                          <span className="absolute -right-2 -top-2 flex h-5 w-5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-5 w-5 bg-white text-[#000] flex items-center justify-center text-xs font-bold">1</span>
                          </span>
                        </Button>
                      </a>
                    </div>
          
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
