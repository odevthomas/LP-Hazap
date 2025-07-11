
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Wrench, Headphones, TrendingUp, CheckCircle, Star, Users, Sparkles, Zap } from 'lucide-react';
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
      glowColor: "shadow-blue-500/25",
      benefits: ["Análise gratuita", "Recomendação personalizada", "Suporte especializado"]
    },
    {
      title: "Montagem Profissional",
      description: "Montamos seu PC com cuidado e precisão, garantindo máximo desempenho e durabilidade.",
      icon: Wrench,
      iconColor: "text-emerald-400",
      bgGradient: "from-emerald-500/20 to-green-500/20",
      hoverColors: "emerald-500, green-500",
      glowColor: "shadow-emerald-500/25",
      benefits: ["Montagem certificada", "Testes de qualidade", "Garantia estendida"]
    },
    {
      title: "Suporte Técnico",
      description: "Oferecemos suporte completo pós-venda com garantia estendida e manutenção preventiva.",
      icon: Headphones,
      iconColor: "text-purple-400",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      hoverColors: "purple-500, pink-500",
      glowColor: "shadow-purple-500/25",
      benefits: ["Suporte 24/7", "Manutenção preventiva", "Assistência remota"]
    },
    {
      title: "Upgrade e Melhorias",
      description: "Atualize seu computador com as peças mais recentes do mercado sem perder dados.",
      icon: TrendingUp,
      iconColor: "text-orange-400",
      bgGradient: "from-orange-500/20 to-red-500/20",
      hoverColors: "orange-500, red-500",
      glowColor: "shadow-orange-500/25",
      benefits: ["Upgrade sem perda de dados", "Peças originais", "Instalação profissional"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-black to-slate-900 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      
      {/* Floating particles */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-40 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
      <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '5s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full px-8 py-4 mb-8 backdrop-blur-sm">
            <Sparkles className="w-6 h-6 text-orange-400 mr-3 animate-pulse" />
            <span className="text-orange-400 font-bold text-lg">SERVIÇOS PREMIUM</span>
            <Zap className="w-6 h-6 text-orange-400 ml-3 animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-orange-600 animate-pulse">
            Muito Além de Vendas
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
            Uma equipe completa de especialistas para te atender em <span className="text-orange-400 font-bold bg-orange-400/10 px-2 py-1 rounded">todas as etapas</span> da sua jornada tecnológica
          </p>

          {/* Enhanced Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-12 mb-16">
            <div className="flex items-center bg-gradient-to-r from-black/50 to-gray-900/50 rounded-full px-8 py-4 border border-green-500/20 shadow-lg hover:shadow-green-500/25 transition-all duration-300 backdrop-blur-sm">
              <Users className="w-6 h-6 text-green-400 mr-3" />
              <span className="text-white font-bold text-xl">+1000</span>
              <span className="text-gray-300 ml-2 text-lg">clientes atendidos</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-black/50 to-gray-900/50 rounded-full px-8 py-4 border border-yellow-500/20 shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 backdrop-blur-sm">
              <Star className="w-6 h-6 text-yellow-400 mr-3" />
              <span className="text-white font-bold text-xl">4.9/5</span>
              <span className="text-gray-300 ml-2 text-lg">avaliação</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {servicesWithIcons.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border-2 border-gray-700/50 hover:border-orange-500/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 rounded-3xl backdrop-blur-lg group relative overflow-hidden shadow-2xl hover:shadow-orange-500/20"
              style={{
                animationDelay: `${index * 0.3}s`
              }}
            >
              <CardContent className="p-10 relative overflow-hidden">
                {/* Enhanced hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${service.hoverColors.split(', ')[0]}/20 to-${service.hoverColors.split(', ')[1]}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}></div>
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-8 mb-8">
                    <div className={`p-6 rounded-3xl bg-gradient-to-r ${service.bgGradient} flex-shrink-0 border-2 border-white/20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg ${service.glowColor} group-hover:shadow-2xl`}>
                      <service.icon className={`w-10 h-10 ${service.iconColor} group-hover:animate-pulse`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 group-hover:from-orange-300 group-hover:to-orange-500 transition-all duration-500">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-500">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Benefits List */}
                  <div className="mb-10">
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      Incluso no serviço:
                    </h4>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${benefitIndex * 100}ms`}}>
                          <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                          <span className="text-gray-300 text-lg group-hover:text-white transition-colors duration-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced CTA Button */}
                  <Button 
                    onClick={() => window.open("https://hazap.com.br/redirect/?msg=Olá, gostaria de saber mais sobre os serviços especializados da Hazap.", "_blank")}
                    className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold py-6 px-10 rounded-2xl shadow-xl w-full transform hover:scale-110 transition-all duration-300 text-lg border-2 border-green-400/20 hover:border-green-300 hover:shadow-green-500/50"
                  >
                    <WhatsAppIcon />
                    Falar com Especialista
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-2 border-orange-500/30 rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                🎯 Atendimento Personalizado Garantido
              </h3>
              <p className="text-gray-300 mb-8 text-xl leading-relaxed">
                Não importa o seu nível técnico - nossos especialistas falam a sua linguagem
              </p>
              <Button 
                onClick={() => window.open("https://hazap.com.br/redirect/?msg=Olá, gostaria de falar com um especialista sobre os serviços da Hazap.", "_blank")}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold py-6 px-12 rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 text-xl border-2 border-orange-400/20 hover:border-orange-300 hover:shadow-orange-500/50"
              >
                <WhatsAppIcon />
                Conversar Agora - Grátis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
