
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import WhatsAppIcon from '../icons/WhatsAppIcon';

const ComponentsSection = () => {
  const computerComponents = [
    {
      title: "Processadores",
      description: "Escolha o cérebro da sua máquina. Com as melhores opções da Intel e AMD, você garante velocidade e eficiência para qualquer tarefa.",
      image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=300&fit=crop",
      whatsappMsg: "Gostaria de solicitar um orçamento de processadores, por favor."
    },
    {
      title: "Placas-mãe",
      description: "Compatibilidade total e upgrade garantido. Nossas placas-mãe oferecem estabilidade, conectividade e suporte para os processadores mais atuais.",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop",
      whatsappMsg: "Gostaria de solicitar um orçamento de placas-mãe, por favor."
    },
    {
      title: "Placas de vídeo",
      description: "Desempenho gráfico de última geração para jogos AAA, renderizações, edição de vídeo e projetos em 3D. RTX e Radeon com garantia e suporte.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop",
      whatsappMsg: "Gostaria de solicitar um orçamento de placas de vídeo, por favor."
    },
    {
      title: "Acessórios Gamer",
      description: "Teclados mecânicos, mouses com alta precisão, headsets com som imersivo e cadeiras ergonômicas. Tudo para melhorar sua gameplay.",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
      whatsappMsg: "Gostaria de solicitar um orçamento de acessórios gamer, por favor."
    },
    {
      title: "Memórias RAM",
      description: "Memórias de alta performance para multitarefa pesada. DDR4 e DDR5 das melhores marcas com garantia total.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop",
      whatsappMsg: "Gostaria de solicitar um orçamento de memórias RAM, por favor."
    },
    {
      title: "SSDs e Armazenamento",
      description: "Armazenamento ultra-rápido para boot instantâneo e carregamento veloz de aplicações e jogos.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      whatsappMsg: "Gostaria de solicitar um orçamento de SSDs, por favor."
    }
  ];

  return (
    <section id="components" className="py-24 px-6 bg-gradient-to-br from-black to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Componentes Premium
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Montamos o PC dos seus sonhos sob medida com os melhores componentes do mercado. Fale com nossos especialistas e tenha uma máquina pronta para jogos, trabalho ou estudos intensivos.
          </p>
        </div>
        
        <Card className="bg-gradient-to-br from-slate-800/30 to-black/30 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 rounded-3xl backdrop-blur-sm">
          <CardContent className="p-8">
            <Carousel className="w-full">
              <CarouselContent>
                {computerComponents.map((component, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                      <Card className="bg-gradient-to-br from-black/50 to-slate-900/50 border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300 rounded-2xl overflow-hidden h-full">
                        <CardContent className="p-0">
                          <div className="aspect-[4/3] overflow-hidden">
                            <img 
                              src={component.image}
                              alt={component.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                              {component.title}
                            </h3>
                            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                              {component.description}
                            </p>
                            <Button 
                              onClick={() => window.open(`https://hazap.com.br/redirect/?msg=${encodeURIComponent(component.whatsappMsg)}`, "_blank")}
                              className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold py-2 px-4 rounded-full w-full shadow-lg text-sm"
                            >
                              <WhatsAppIcon />
                              Solicitar Orçamento
                            </Button>
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
