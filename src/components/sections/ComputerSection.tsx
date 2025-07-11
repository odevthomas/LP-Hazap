
import React from 'react';
import { Gamepad2, Briefcase, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import WhatsAppIcon from '../icons/WhatsAppIcon';

const ComputerSection = () => {
  const computerCategories = [
    {
      title: "Computadores Gamers",
      subtitle: "Jogue Call of Duty, Valorant, CS, LoL e até GTA 6 com desempenho máximo, FPS elevado, gráficos incríveis e estabilidade para longas sessões de jogo sem travamentos.",
      icon: Gamepad2,
      bgGradient: "from-orange-600 via-red-600 to-purple-600",
      video: "https://iyqujwbqfomznelsvebl.supabase.co/storage/v1/object/public/videos-hazap//pcgamer.mp4",
      whatsappMsg: "Gostaria de um orçamento para um PC Gamer."
    },
    {
      title: "Computadores Profissionais",
      subtitle: "Projetados para engenheiros, arquitetos, designers e programadores que exigem alta performance para softwares técnicos e multitarefa pesada.",
      icon: Briefcase,
      bgGradient: "from-blue-600 via-cyan-600 to-teal-600",
      professionals: [
        { name: "Arquitetos", image: "/lovable-uploads/3eb69bd2-b0e2-49ae-a0cf-6ea76ae84a28.png" },
        { name: "Designers", image: "/lovable-uploads/89130593-fb3e-47cb-ab32-63c8a541efd8.png" },
        { name: "Engenheiros", image: "/lovable-uploads/67088cc6-c8fe-433a-b820-b35bed7167ed.png" },
        { name: "Inteligência Artificial", image: "/lovable-uploads/3b011335-bbe4-4cfc-9161-11a5bfe17310.png" }
      ],
      whatsappMsg: "Olá, gostaria de saber mais sobre os computadores voltados para uso profissional."
    },
    {
      title: "Computadores Personalizados",
      subtitle: "Monte seu computador ideal com peças de alta performance, escolhidas sob medida para seu tipo de uso — jogos, trabalho profissional ou estudos exigentes em qualquer área.",
      icon: Wrench,
      bgGradient: "from-yellow-600 via-orange-600 to-red-600",
      video: "https://iyqujwbqfomznelsvebl.supabase.co/storage/v1/object/public/videos-hazap//pccustom.mp4",
      whatsappMsg: "Olá, gostaria de montar uma máquina customizada e totalmente personalizada por mim."
    }
  ];

  return (
    <section id="computers" className="py-24 px-6 bg-gradient-to-br from-black to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
          Nossos Computadores
        </h2>
        
        <div className="space-y-16">
          {computerCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 rounded-3xl backdrop-blur-sm"
            >
              <CardContent className="p-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl mr-4">
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                        {category.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {category.subtitle}
                    </p>
                    
                    {category.professionals && (
                      <div className="grid grid-cols-2 gap-4 my-8">
                        {category.professionals.map((prof, profIndex) => (
                          <div 
                            key={profIndex} 
                            className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-4 text-center backdrop-blur-sm border border-orange-500/20"
                          >
                            <img 
                              src={prof.image} 
                              alt={`PC para ${prof.name}`}
                              className="w-full h-32 object-cover rounded-xl mb-3"
                            />
                            <span className="text-sm font-medium text-gray-300">
                              PC para {prof.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <Button 
                      onClick={() => window.open(`https://hazap.com.br/redirect/?msg=${encodeURIComponent(category.whatsappMsg)}`, "_blank")}
                      className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold py-4 px-8 rounded-full shadow-lg"
                    >
                      <WhatsAppIcon />
                      FALE COM ESPECIALISTA
                    </Button>
                  </div>
                  
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    {category.video ? (
                      <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={category.video} type="video/mp4" />
                      </video>
                    ) : (
                      <div className={`h-full bg-gradient-to-br ${category.bgGradient} rounded-2xl flex items-center justify-center`}>
                        <category.icon className="text-white/80" size={64} />
                      </div>
                    )}
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

export default ComputerSection;
