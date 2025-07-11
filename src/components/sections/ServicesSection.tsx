
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Wrench, Headphones, TrendingUp } from 'lucide-react';
import WhatsAppIcon from '../icons/WhatsAppIcon';

const ServicesSection = () => {
  const servicesWithIcons = [
    {
      title: "Consultoria Técnica",
      description: "Nossos especialistas te ajudam a escolher a configuração ideal para suas necessidades específicas.",
      icon: Brain,
      iconColor: "text-blue-400",
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Montagem Profissional",
      description: "Montamos seu PC com cuidado e precisão, garantindo máximo desempenho e durabilidade.",
      icon: Wrench,
      iconColor: "text-emerald-400",
      bgGradient: "from-emerald-500/20 to-green-500/20"
    },
    {
      title: "Suporte Técnico",
      description: "Oferecemos suporte completo pós-venda com garantia estendida e manutenção preventiva.",
      icon: Headphones,
      iconColor: "text-purple-400",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Upgrade e Melhorias",
      description: "Atualize seu computador com as peças mais recentes do mercado sem perder dados.",
      icon: TrendingUp,
      iconColor: "text-orange-400",
      bgGradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Nossos Serviços Especializados
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Oferecemos muito mais que vendas. Temos uma equipe completa para te atender em todas as etapas da sua jornada tecnológica.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {servicesWithIcons.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-slate-800/30 to-black/30 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 transform hover:scale-105 rounded-3xl backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.bgGradient} flex-shrink-0 border border-white/10`}>
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <Button 
                      onClick={() => window.open("https://hazap.com.br/redirect/?msg=Olá, gostaria de saber mais sobre os serviços especializados da Hazap.", "_blank")}
                      className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold py-3 px-6 rounded-full shadow-lg"
                    >
                      <WhatsAppIcon />
                      Fale com um especialista
                    </Button>
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

export default ServicesSection;
