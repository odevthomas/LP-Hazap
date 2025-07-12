'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ComponentsSection = () => {
  const computerComponents = [
    {
      title: "Processadores",
      description: "Escolha o cérebro da sua máquina. Com as melhores opções da Intel e AMD, você garante velocidade e eficiência para qualquer tarefa.",
      image: "/vendas/computerComponents/processador.png",
      whatsappMsg: "Gostaria de solicitar um orçamento de processadores, por favor."
    },
    {
      title: "Placas-mãe",
      description: "Compatibilidade total e upgrade garantido. Nossas placas-mãe oferecem estabilidade, conectividade e suporte para os processadores mais atuais.",
      image: "/vendas/computerComponents/placamae.png",
      whatsappMsg: "Gostaria de solicitar um orçamento de placas-mãe, por favor."
    },
    {
      title: "Placas de vídeo",
      description: "Desempenho gráfico de última geração para jogos AAA, renderizações, edição de vídeo e projetos em 3D. RTX e Radeon com garantia e suporte.",
      image: "/vendas/computerComponents/placadevideo.png",
      whatsappMsg: "Gostaria de solicitar um orçamento de placas de vídeo, por favor."
    },
    {
      title: "Acessórios Gamer",
      description: "Teclados mecânicos, mouses com alta precisão, headsets com som imersivo e cadeiras ergonômicas. Tudo para melhorar sua gameplay.",
      image: "/vendas/computerComponents/acessorios.png",
      whatsappMsg: "Gostaria de solicitar um orçamento de acessórios gamer, por favor."
    }
  ];

  return (
    <section id="components" className="py-24 px-6 bg-black from-black to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 animate-fade-in">
Não encontrou o que procura?          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
         Montamos o PC dos seus sonhos sob medida com os melhores componentes do mercado. Fale com nossos especialistas e tenha uma máquina pronta para jogos, trabalho ou estudos intensivos.
          </p>
        </div>

        <Card className="bg-black border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 rounded-3xl backdrop-blur-sm shadow-2xl">
          <CardContent className="p-8">
            <Carousel className="w-full">
              <CarouselContent>
                {computerComponents.map((component, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4 h-full">
                      <Card className="bg-black border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 rounded-3xl shadow-md h-full group overflow-hidden backdrop-blur-sm">
                        <CardContent className="p-0">
                          <div className="aspect-[4/3] overflow-hidden rounded-t-3xl">
                            <img
                              src={component.image}
                              alt={component.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-6 flex flex-col justify-between h-full">
                            <div>
                              <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                {component.title}
                              </h3>
                              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                                {component.description}
                              </p>
                            </div>

                            <a
                              href={`https://wa.me/5519993261388?text=${encodeURIComponent(component.whatsappMsg)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button
                                className="w-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-semibold text-sm py-3 px-4 rounded-full shadow transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                              >
                                <img
                                  src="/vendas/wpp.svg"
                                  alt="WhatsApp"
                                  className="w-4 h-4 object-contain"
                                />
                                Solicitar Orçamento
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
