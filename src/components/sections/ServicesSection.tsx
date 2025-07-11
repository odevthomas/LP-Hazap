"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Gamepad2,
  Briefcase,
  Settings,
  Rocket,
  BadgeDollarSign,
  MonitorSmartphone,
  CheckCircle,
} from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const ServicesSection = () => {
  const servicesWithIcons = [
    {
      title: "Computadores Gamers",
      description:
        "Equipamentos potentes e otimizados para jogos de última geração, com foco em performance, FPS e refrigeração de alto nível.",
      icon: Gamepad2,
      iconColor: "text-white",
      bgGradient: "from-red-500 to-red-600",
      glowColor: "shadow-green-500/25",
      benefits: ["Placas de vídeo dedicadas", "Máximo desempenho", "Fale com Especialista"],
    },
    {
      title: "Computadores Profissionais",
      description:
        "Desempenho e estabilidade para tarefas como design gráfico, programação, arquitetura e mais.",
      icon: Briefcase,
      iconColor: "text-white",
      bgGradient: "from-red-500 to-red-600",
      glowColor: "shadow-blue-500/25",
      benefits: ["Alta produtividade", "Hardware confiável", "Fale com Especialista"],
    },
    {
      title: "Montagens Personalizadas",
      description:
        "Escolha cada detalhe do seu setup ideal com orientação profissional. Máxima personalização e eficiência.",
      icon: Settings,
      iconColor: "text-white",
      bgGradient: "from-red-500 to-red-600",
      glowColor: "shadow-purple-500/25",
      benefits: ["Montagem sob medida", "Consultoria técnica", "Fale com Especialista"],
    },
    {
      title: "Computadores High-End",
      description:
        "Configurações de ponta para quem busca o que há de mais moderno, veloz e avançado em tecnologia.",
      icon: Rocket,
      iconColor: "text-white",
      bgGradient: "from-red-500 to-red-600",
      glowColor: "shadow-red-500/25",
      benefits: ["Máxima performance", "Componentes premium", "Fale com Especialista"],
    },
    {
      title: "Melhor Custo-benefício",
      description:
        "Máximo aproveitamento do seu investimento. Configurações equilibradas entre qualidade e preço justo.",
      icon: BadgeDollarSign,
      iconColor: "text-white",
      bgGradient: "from-red-500 to-red-600",
      glowColor: "shadow-yellow-500/25",
      benefits: ["Ótimo preço", "Desempenho garantido", "Fale com Especialista"],
    },
    {
      title: "Workstations Profissionais",
      description:
        "Soluções para áreas como engenharia, produção audiovisual, análise de dados e outras demandas pesadas.",
      icon: MonitorSmartphone,
      iconColor: "text-white",
      bgGradient: "from-red-500 to-red-600",
      glowColor: "shadow-indigo-500/25",
      benefits: ["Alta capacidade", "Performance escalável", "Fale com Especialista"],
    },
  ];

  return (
    <section className="py-24 px-6 bg-black from-slate-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Muito mais do que vender computadores
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nós entregamos soluções completas, personalizadas e de alta performance. Seja para jogar, trabalhar ou criar — nossa equipe está pronta para te ajudar em cada etapa.
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
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" /> Por que escolher?
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
                      "https://hazap.com.br/redirect/?msg=Olá, gostaria de saber mais sobre os computadores Hazap.",
                      "_blank"
                    )
                  }
                  className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold py-4 px-6 rounded-full shadow-lg w-full transition-all duration-300 text-base border border-green-400/20 hover:border-green-300"
                >
                  <div className="bg-white rounded-full p-1 sm:p-1.5 flex items-center justify-center">
                    <img
                      src="/vendas/wpp.svg"
                      alt="WhatsApp"
                      className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                    />
                  </div>{" "}
                  Falar com Especialista
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">
            Ainda com dúvidas? Nossa equipe está disponível para te ajudar a encontrar a melhor solução para o seu projeto.
          </p>

          <Button
            onClick={() =>
              window.open(
                "https://hazap.com.br/redirect/?msg=Olá, gostaria de falar com um especialista sobre os computadores Hazap.",
                "_blank"
              )
            }
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-black font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
          >
            <WhatsAppIcon /> Conversar Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
