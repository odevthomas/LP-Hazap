
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
      description: "Máxima performance para jogos"
    },
    {
      type: "images",
      content: [
        "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&h=600&fit=crop"
      ],
      title: "Componentes Premium",
      description: "As melhores peças do mercado"
    },
    {
      type: "video",
      content: "https://iyqujwbqfomznelsvebl.supabase.co/storage/v1/object/public/videos-hazap//pccustom.mp4",
      title: "Customização Total",
      description: "Feito sob medida para você"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-900 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
          Veja nossa tecnologia em ação
        </h2>
        
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 transform hover:scale-105 rounded-2xl backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="aspect-[4/3] mb-6 rounded-xl overflow-hidden">
                      {item.type === "video" ? (
                        <video 
                          autoPlay 
                          muted 
                          loop 
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={item.content as string} type="video/mp4" />
                        </video>
                      ) : (
                        <div className="grid grid-cols-1 gap-1 h-full">
                          {(item.content as string[]).map((img, imgIndex) => (
                            <img 
                              key={imgIndex}
                              src={img}
                              alt={`Component ${imgIndex + 1}`}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {item.description}
                    </p>
                    
                    <Button 
                      onClick={() => window.open("https://hazap.com.br/redirect/?msg=Olá, gostaria de saber mais sobre os computadores mostrados no vídeo.", "_blank")}
                      className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold py-3 px-6 rounded-full w-full shadow-lg"
                    >
                      <WhatsAppIcon />
                      FALE COM ESPECIALISTA
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-black rounded-full" />
          <CarouselNext className="text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-black rounded-full" />
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselSection;
