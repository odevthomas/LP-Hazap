
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Wrench, Headphones, TrendingUp, CheckCircle, Star, Users } from 'lucide-react';
import WhatsAppIcon from '../icons/WhatsAppIcon';

const ServicesSection = () => {
  const servicesWithIcons = [
    {
      title: "Consultoria Técnica",
      description: "Nossos especialistas te ajudam a escolher a configuração ideal para suas necessidades específicas.",
      icon: Brain,
      iconColor: "text-blue-400",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      hoverColors: "blue-500, cyan-500",
      benefits: ["Análise gratuita", "Recomendação personalizada", "Suporte especializado"]
    },
    {
      title: "Montagem Profissional",
      description: "Montamos seu PC com cuidado e precisão, garantindo máximo desempenho e durabilidade.",
      icon: Wrench,
      iconColor: "text-emerald-400",
      bgGradient: "from-emerald-500/20 to-green-500/20",
      hoverColors: "emerald-500, green-500",
      benefits: ["Montagem certificada", "Testes de qualidade", "Garantia estendida"]
    },
    {
      title: "Suporte Técnico",
      description: "Oferecemos suporte completo pós-venda com garantia estendida e manutenção preventiva.",
      icon: Headphones,
      iconColor: "text-purple-400",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      hoverColors: "purple-500, pink-500",
      benefits: ["Suporte 24/7", "Manutenção preventiva", "Assistência remota"]
    },
    {
      title: "Upgrade e Melhorias",
      description: "Atualize seu computador com as peças mais recentes do mercado sem perder dados.",
      icon: TrendingUp,
      iconColor: "text-orange-400",
      bgGradient: "from-orange-500/20 to-red-500/20",
      hoverColors: "orange-500, red-500",
      benefits: ["Upgrade sem perda de dados", "Peças originais", "Instalação profissional"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section with Landing Page Style */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-orange-400 font-semibold">SERVIÇOS PREMIUM</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Muito Além de Vendas
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Uma equipe completa de especialistas para te atender em <span className="text-orange-400 font-semibold">todas as etapas</span> da sua jornada tecnológica
          </p>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center bg-black/30 rounded-full px-6 py-3 border border-gray-700">
              <Users className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-white font-semibold">+1000</span>
              <span className="text-gray-300 ml-1">clientes atendidos</span>
            </div>
            <div className="flex items-center bg-black/30 rounded-full px-6 py-3 border border-gray-700">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white font-semibold">4.9/5</span>
              <span className="text-gray-300 ml-1">avaliação</span>
            </div>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {servicesWithIcons.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-slate-800/30 to-black/30 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 transform hover:scale-105 rounded-3xl backdrop-blur-sm group"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <CardContent className="p-8 relative overflow-hidden">
                {/* Hover glow effect - fixed */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${service.hoverColors.split(', ')[0]}/10 to-${service.hoverColors.split(', ')[1]}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.bgGradient} flex-shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Incluso no serviço:</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={() => window.open("https://hazap.com.br/redirect/?msg=Olá, gostaria de saber mais sobre os serviços especializados da Hazap.", "_blank")}
                    className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold py-4 px-8 rounded-full shadow-lg w-full transform hover:scale-105 transition-all duration-300"
                  >
                    <WhatsAppIcon />
                    Falar com Especialista
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              🎯 Atendimento Personalizado Garantido
            </h3>
            <p className="text-gray-300 mb-6">
              Não importa o seu nível técnico - nossos especialistas falam a sua linguagem
            </p>
            <Button 
              onClick={() => window.open("https://hazap.com.br/redirect/?msg=Olá, gostaria de falar com um especialista sobre os serviços da Hazap.", "_blank")}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold py-4 px-8 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <WhatsAppIcon />
              Conversar Agora - Grátis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
