
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import WhatsAppIcon from '../icons/WhatsAppIcon';

const ComponentsSection = () => {
  const computerComponents = [
    {
      title: "Processadores",
      description: "Escolha o cérebro da sua máquina. Com as melhores opções da Intel e AMD, você garante velocidade e eficiência para qualquer tarefa.",
      image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=300&fit=crop",
      bgGradient: "from-blue-600 to-cyan-600",
      whatsappMsg: "Gostaria de solicitar um orçamento de processadores, por favor."
    },
    {
      title: "Placas-mãe",
      description: "Compatibilidade total e upgrade garantido. Nossas placas-mãe oferecem estabilidade, conectividade e suporte para os processadores mais atuais.",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop",
      bgGradient: "from-green-600 to-emerald-600",
      whatsappMsg: "Gostaria de solicitar um orçamento de placas-mãe, por favor."
    },
    {
      title: "Placas de vídeo",
      description: "Desempenho gráfico de última geração para jogos AAA, renderizações, edição de vídeo e projetos em 3D. RTX e Radeon com garantia e suporte.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop",
      bgGradient: "from-purple-600 to-pink-600",
      whatsappMsg: "Gostaria de solicitar um orçamento de placas de vídeo, por favor."
    },
    {
      title: "Acessórios Gamer",
      description: "Teclados mecânicos, mouses com alta precisão, headsets com som imersivo e cadeiras ergonômicas. Tudo para melhorar sua gameplay.",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
      bgGradient: "from-orange-600 to-red-600",
      whatsappMsg: "Gostaria de solicitar um orçamento de acessórios gamer, por favor."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-black to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Não encontrou o que procura?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Montamos o PC dos seus sonhos sob medida com os melhores componentes do mercado. Fale com nossos especialistas e tenha uma máquina pronta para jogos, trabalho ou estudos intensivos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {computerComponents.map((component, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 transform hover:scale-105 rounded-3xl backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-video rounded-t-3xl overflow-hidden">
                  <img 
                    src={component.image}
                    alt={component.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    {component.title}
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {component.description}
                  </p>
                  <Button 
                    onClick={() => window.open(`https://hazap.com.br/redirect/?msg=${encodeURIComponent(component.whatsappMsg)}`, "_blank")}
                    className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold py-3 px-6 rounded-full w-full shadow-lg"
                  >
                    <WhatsAppIcon />
                    Fale com um especialista agora
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
