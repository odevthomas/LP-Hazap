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
      title: "PC GAMER CAMPINAS | DOMINE TODOS OS JOGOS",
      description:
        "Máquinas desenvolvidas para gamers exigentes da região de Campinas. Performance extrema, FPS estável e refrigeração silenciosa para sessões longas de jogo.",
      icon: Gamepad2,
      iconColor: "text-white",
      bgGradient: "from-orange-500 to-orange-600",
      glowColor: "shadow-green-500/25",
      benefits: [
        "Zero travamentos: Jogue sem interrupções",
        "FPS máximo garantido: Performance que você merece",
        "Suporte gamer 24h: Especialistas que entendem de jogos"
      ],
      whatsappMsg: "Gostaria de montar meu PC Gamer em Campinas.",
      buttonLabel: "Montar meu PC Gamer"
    },
    {
      title: "WORKSTATION CAMPINAS | MÁXIMA PRODUTIVIDADE",
      description:
        "Workstations de alta performance para profissionais e empresas de Campinas. Estabilidade absoluta, renderização rápida e confiabilidade para seu negócio crescer.",
      icon: Briefcase,
      iconColor: "text-white",
      bgGradient: "from-orange-500 to-orange-600",
      glowColor: "shadow-blue-500/25",
      benefits: [
        "3x mais rápido: Renderização que economiza horas",
        "ROI garantido: Máquina paga por si mesma",
        "Zero downtime: Nunca pare por problema técnico"
      ],
      whatsappMsg: "Gostaria de configurar uma Workstation profissional em Campinas.",
      buttonLabel: "Configurar Workstation"
    },
    {
      title: "PROJETO EXCLUSIVO CAMPINAS | SEU PC ÚNICO NO MUNDO",
      description:
        "Criamos PCs únicos e exclusivos para clientes especiais de Campinas. Cada projeto é uma obra de arte tecnológica, desenvolvida especialmente para você. Apenas 20 projetos únicos por mês.",
      icon: Settings,
      iconColor: "text-white",
      bgGradient: "from-orange-500 to-orange-600",
      glowColor: "shadow-purple-500/25",
      benefits: [
        "Design exclusivo: Único PC do seu tipo na região",
        "Status diferenciado: Projeto assinado por nossos mestres",
        "Lista VIP: Apenas 20 projetos exclusivos/mês"
      ],
      whatsappMsg: "Gostaria de reservar um projeto exclusivo e personalizado em Campinas.",
      buttonLabel: "Reservar Projeto Exclusivo"
    },
    {
      title: "PERFORMANCE EXTREMA CAMPINAS | O TOPO DA TECNOLOGIA",
      description:
        "Para os mais exigentes de Campinas e região. Componentes ultra-premium, performance inigualável e tecnologia de última geração. O máximo que o dinheiro pode comprar.",
      icon: Rocket,
      iconColor: "text-white",
      bgGradient: "from-orange-500 to-orange-600",
      glowColor: "shadow-orange-500/25",
      benefits: [
        "Sem limites: Performance que define novos padrões",
        "Componentes exclusivos: Peças que poucos têm acesso",
        "Zero compromissos: O máximo absoluto em tudo"
      ],
      whatsappMsg: "Quero configurar um computador high-end com máxima performance em Campinas.",
      buttonLabel: "Configurar PC High-End"
    },
  ];

  const benefitIcons = [
    [MonitorSmartphone, BadgeDollarSign, Settings],
    [Rocket, BadgeDollarSign, MonitorSmartphone],
    [Settings, Briefcase, CheckCircle],
    [Rocket, Gamepad2, CheckCircle],
  ];

  return (
    <section id="services" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Computadores Sob Medida em Campinas | Gamers e Profissionais
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            11 anos montando máquinas de alta performance para games, criação de conteúdo, uso profissional e muito mais na região de Campinas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {servicesWithIcons.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden transition-all duration-500 transform hover:scale-105 bg-black border border-orange-500/20 hover:border-orange-500/40 rounded-3xl backdrop-blur-sm ${service.glowColor}`}
            >
              <CardContent className="p-6 sm:p-8 md:p-10">
                <div className="flex flex-col items-center mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.bgGradient} border border-white/10 shadow-md ${service.glowColor}`}>
                    <service.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${service.iconColor}`} />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    {service.title}
                  </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
  {service.description}
</p>

                </div>

                <div className="my-6 text-justify">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2" /> Por que escolher?
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => {
                      const Icon = benefitIcons[index][i] || CheckCircle;
                      return (
                        <li key={i} className="flex items-start">
                          <Icon className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm leading-snug">{benefit}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <a
                  href={`/vendas/atendimentoWhatsapp?msg=${encodeURIComponent(service.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-full shadow transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                    <img
                      src="/vendas/wpp.svg"
                      alt="WhatsApp"
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain"
                    />
                    {service.buttonLabel}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
