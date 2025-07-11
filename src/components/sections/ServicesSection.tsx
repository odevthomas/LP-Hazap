"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  Wrench,
  Headphones,
  TrendingUp,
  CheckCircle,
  Star,
  Users,
} from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const ServicesSection = () => {
  const servicesWithIcons = [
    {
      title: "Consultoria Técnica",
      description:
        "Nossos especialistas te ajudam a escolher a configuração ideal para suas necessidades específicas.",
      icon: Brain,
      iconColor: "text-white",
      bgGradient: "from-orange-500 to-red-500",
      glowColor: "shadow-orange-500/25",
      benefits: [
        "Análise gratuita",
        "Recomendação personalizada",
        "Suporte especializado",
      ],
    },
    {
      title: "Montagem Profissional",
      description:
        "Montamos seu PC com cuidado e precisão, garantindo máximo desempenho e durabilidade.",
      icon: Wrench,
      iconColor: "text-white",
      bgGradient: "from-orange-500 to-red-500",
      glowColor: "shadow-orange-500/25",
      benefits: [
        "Montagem certificada",
        "Testes de qualidade",
        "Garantia estendida",
      ],
    },
    {
      title: "Suporte Técnico",
      description:
        "Oferecemos suporte completo pós-venda com garantia estendida e manutenção preventiva.",
      icon: Headphones,
      iconColor: "text-white",
      bgGradient: "from-orange-500 to-red-500",
      glowColor: "shadow-orange-500/25",
      benefits: [
        "Suporte 24/7",
        "Manutenção preventiva",
        "Assistência remota",
      ],
    },
    {
      title: "Upgrade e Melhorias",
      description:
        "Atualize seu computador com as peças mais recentes do mercado sem perder dados.",
      icon: TrendingUp,
      iconColor: "text-white",
      bgGradient: "from-orange-500 to-red-500",
      glowColor: "shadow-orange-500/25",
      benefits: [
        "Upgrade sem perda de dados",
        "Peças originais",
        "Instalação profissional",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-black from-slate-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Muito além de apenas vender
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Uma equipe completa de especialistas para te atender em todas as etapas da sua jornada tecnológica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {servicesWithIcons.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden transition-all duration-500 transform hover:scale-105 bg-black border border-orange-500/20 hover:border-orange-500/40 rounded-3xl backdrop-blur-sm ${service.glowColor}`}
            >
              <CardContent className="p-8 md:p-10">
                <div className="flex items-start space-x-6 mb-6">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${service.bgGradient} flex-shrink-0 border border-white/10 shadow-md ${service.glowColor}`}
                  >
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" /> Incluso no serviço:
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() =>
                    window.open(
                      "https://hazap.com.br/redirect/?msg=Olá, gostaria de saber mais sobre os serviços especializados da Hazap.",
                      "_blank"
                    )
                  }
                  className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold py-4 px-6 rounded-full shadow-lg w-full transition-all duration-300 text-base border border-green-400/20 hover:border-green-300"
                >
                  <WhatsAppIcon /> Falar com Especialista
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">
            Tem dúvidas sobre como podemos te ajudar? Fale com nossos especialistas.
          </p>
          
          <Button
            onClick={() =>
              window.open(
                "https://hazap.com.br/redirect/?msg=Olá, gostaria de falar com um especialista sobre os serviços da Hazap.",
                "_blank"
              )
            }
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-black font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300"
          >
            <WhatsAppIcon /> Conversar Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
