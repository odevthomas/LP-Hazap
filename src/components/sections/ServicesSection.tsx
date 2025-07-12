'use client';

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
<section id="services" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Soluções para todas as necessidades
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Montamos máquinas de alto desempenho sob medida para games, criação de conteúdo, uso profissional e muito mais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {servicesWithIcons.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden transition-all duration-500 transform hover:scale-105 bg-black border border-orange-500/20 hover:border-orange-500/40 rounded-3xl backdrop-blur-sm ${service.glowColor}`}
            >
              <CardContent className="p-6 sm:p-8 md:p-10">
                <div className="flex items-start gap-4 sm:gap-6 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.bgGradient} flex-shrink-0 border border-white/10 shadow-md ${service.glowColor}`}>
                    <service.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${service.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2" /> Por que escolher?
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

                <a
                  href="https://hazap.com.br/redirect/?msg=Olá, gostaria de saber mais sobre os computadores Hazap."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-full shadow transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                    <img
                      src="/vendas/wpp.svg"
                      alt="WhatsApp"
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain"
                    />
                    Falar com Especialista
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center px-4">
          <p className="text-gray-400 mb-6 text-sm sm:text-base max-w-xl mx-auto">
            Ainda com dúvidas? Nossa equipe está pronta para te ajudar a escolher a melhor configuração para seu projeto.
          </p>

          <div className="relative max-w-xs mx-auto">
            <div className="absolute -inset-3 bg-[#25D366] rounded-full blur opacity-75 animate-pulse" />
            <div className="absolute -inset-3 rounded-full border-4 border-[#25D366] animate-ping opacity-30" />
            <div className="absolute -inset-6 rounded-full border-4 border-[#25D366] animate-ping opacity-20" style={{ animationDelay: "300ms" }} />
            <div className="absolute -inset-9 rounded-full border-4 border-[#25D366] animate-ping opacity-10" style={{ animationDelay: "600ms" }} />

            <a
              href="https://wa.me/5519993261388?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20da%20HAZAP"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="relative w-full text-base sm:text-lg font-bold bg-gradient-to-r from-[#25D366] to-[#25D366] hover:from-[#25D366] hover:to-[#25D366] px-6 sm:px-8 py-6 rounded-full border-2 border-white shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3">
                <div className="bg-white rounded-full p-1.5">
                  <img
                    src="/vendas/wpp.svg"
                    alt="WhatsApp"
                    className="w-4 h-4 object-contain"
                  />
                </div>
                <span className="text-black">CONVERSAR AGORA</span>
                <span className="absolute -right-2 -top-2 flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-white text-[#000] flex items-center justify-center text-[10px] font-bold">1</span>
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
