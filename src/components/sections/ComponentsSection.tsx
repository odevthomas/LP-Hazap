'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ComponentsSection = () => {
  const basePath = '/vendas';

  const computerComponents = [
    {
      title: "PROCESSADORES CAMPINAS | MÁXIMA PERFORMANCE",
      description: "O coração da sua máquina merece o melhor! Intel e AMD de última geração disponíveis em Campinas. Velocidade extrema para gaming, trabalho pesado e multitarefas sem limites.",
      image: "/vendas/computerComponents/processador.png",
      whatsappMsg: "Olá, gostaria de solicitar um orçamento de processadores, por favor.",
      buttonLabel: "Ver opções de processador"
    },
    {
      title: "PLACAS-MÃE CAMPINAS | BASE SÓLIDA",
      description: "A fundação do seu PC dos sonhos! Placas-mãe premium em Campinas com compatibilidade total, conectividade futura e estabilidade absoluta. Pronto para qualquer upgrade.",
      image: "/vendas/computerComponents/placamae.png",
      whatsappMsg: "Olá, gostaria de solicitar um orçamento de placas-mãe, por favor.",
      buttonLabel: "Escolher placa-mãe"
    },
    {
      title: "PLACAS DE VÍDEO CAMPINAS | GRÁFICOS EXTREMOS",
      description: "Gráficos que impressionam! RTX e Radeon de última geração em Campinas. Gaming 4K, renderização profissional e criação de conteúdo sem limites. Performance que supera expectativas.",
      image: "/vendas/computerComponents/placadevideo.png",
      whatsappMsg: "Olá, gostaria de solicitar um orçamento de placas de vídeo, por favor.",
      buttonLabel: "Explorar placas de vídeo"
    },
    {
      title: "ACESSÓRIOS GAMER CAMPINAS | EXPERIÊNCIA COMPLETA",
      description: "Teclados mecânicos, mouses com alta precisão, headsets com som imersivo e cadeiras ergonômicas. Tudo para melhorar sua gameplay.",
      image: "/vendas/computerComponents/acessorios.png",
      whatsappMsg: "Olá, gostaria de solicitar um orçamento de acessórios gamer, por favor.",
      buttonLabel: "Ver acessórios gamer"
    }
  ];

  return (
    <section id="components" className="py-24 px-6 bg-black from-black to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 px-2 sm:px-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 animate-fade-in">
            Vamos criar algo único para você!
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            Criamos PCs únicos e exclusivos em Campinas há 11 anos. Seja qual for seu projeto especial - gaming extremo, workstation profissional ou setup personalizado - temos a expertise para tornar sua visão realidade.
          </p>
        </div>

        <Card className="bg-black border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 rounded-3xl backdrop-blur-sm shadow-2xl">
          <CardContent className="p-6 sm:p-8">
            <Carousel className="w-full">
              <CarouselContent>
                {computerComponents.map((component, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-3 sm:p-4 h-full">
                      <Card className="bg-black border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 rounded-3xl shadow-md h-full min-h-[500px] group overflow-hidden backdrop-blur-sm flex flex-col">
                        <CardContent className="p-0 flex flex-col flex-grow">
                          <div className="aspect-[4/3] overflow-hidden rounded-t-3xl">
                            <img
                              src={component.image}
                              alt={component.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-5 flex flex-col justify-between flex-grow">
                            <div>
                              <h3 className="text-lg sm:text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                {component.title}
                              </h3>
                              <p className="text-gray-300 mb-6 text-xs sm:text-sm leading-relaxed">
                                {component.description}
                              </p>
                            </div>
                            <a
                              href={`${basePath}/atendimentoWhatsapp?msg=${encodeURIComponent(component.whatsappMsg)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-auto"
                            >
                              <Button
                                className="w-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-semibold text-xs sm:text-sm py-2.5 sm:py-3 px-3 sm:px-4 rounded-full shadow transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                              >
                                <img
                                  src="/vendas/wpp.svg"
                                  alt="WhatsApp"
                                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain"
                                />
                                {component.buttonLabel}
                              </Button>
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-black -left-12" />
              <CarouselNext className="text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-black -right-12" />
            </Carousel>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ComponentsSection;
