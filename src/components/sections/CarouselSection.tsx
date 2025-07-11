
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Play, Image, Cpu } from 'lucide-react';
import WhatsAppIcon from '../icons/WhatsAppIcon';

const CarouselSection = () => {
  const carouselItems = [
    {
      type: "video",
      content: "https://iyqujwbqfomznelsvebl.supabase.co/storage/v1/object/public/videos-hazap//pcgamer.mp4",
      title: "PC Gamer Performance",
      description: "Máxima performance para jogos AAA com FPS elevado e gráficos incríveis",
      icon: Play,
      featured: false
    },
    {
      type: "images",
      content: [
        "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=800&h=600&fit=crop"
      ],
      title: "Componentes Premium",
      description: "As melhores peças do mercado selecionadas pelos nossos especialistas",
      icon: Cpu,
      featured: true
    },
    {
      type: "video",
      content: "https://iyqujwbqfomznelsvebl.supabase.co/storage/v1/object/public/videos-hazap//pccustom.mp4",
      title: "Customização Total",
      description: "Feito sob medida para suas necessidades específicas e preferências",
      icon: Image,
      featured: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-900 to-black">
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
                  ? 'lg:scale-110 bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-500/50 shadow-2xl shadow-orange-500/25' 
                  : 'bg-gradient-to-br from-slate-800/30 to-black/30 border border-orange-500/20 hover:border-orange-500/40'
              } rounded-3xl backdrop-blur-sm`}
            >
              <CardContent className="p-0">
                {/* Header com ícone */}
                <div className="p-6 pb-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-2xl ${
                      item.featured 
                        ? 'bg-gradient-to-r from-orange-500/30 to-red-500/30' 
                        : 'bg-gradient-to-r from-orange-500/20 to-orange-600/20'
                    } border border-orange-500/20`}>
                      <item.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    {item.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-black text-xs font-bold rounded-full">
                        DESTAQUE
                      </span>
                    )}
                  </div>
                </div>

                {/* Conteúdo principal */}
                <div className={`px-6 ${item.featured ? 'pb-2' : 'pb-4'}`}>
                  <div className={`${item.featured ? 'aspect-[4/3] mb-6' : 'aspect-[4/3] mb-4'} rounded-2xl overflow-hidden relative`}>
                    {item.type === "video" ? (
                      <div className="relative group/video">
                        <video 
                          autoPlay 
                          muted 
                          loop 
                          playsInline
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/video:scale-105"
                        >
                          <source src={item.content as string} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-orange-500/20 backdrop-blur-sm rounded-full p-4 border border-orange-500/30">
                            <Play className="w-8 h-8 text-orange-400" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full">
                        {item.featured ? (
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
                        ) : (
                          <div className="grid grid-cols-2 gap-2 h-full">
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

                {/* Botão de ação */}
                <div className="px-6 pb-6">
                  <Button 
                    onClick={() => window.open("https://hazap.com.br/redirect/?msg=Olá, gostaria de saber mais sobre os computadores mostrados no vídeo.", "_blank")}
                    className={`${
                      item.featured 
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-black font-bold py-4 px-6 text-base' 
                        : 'bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold py-3 px-4 text-sm'
                    } rounded-full w-full shadow-lg transition-all duration-300`}
                  >
                    <WhatsAppIcon />
                    {item.featured ? 'FALAR COM ESPECIALISTA' : 'SOLICITAR ORÇAMENTO'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action adicional */}
        <div className="mt-16 text-center">
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
