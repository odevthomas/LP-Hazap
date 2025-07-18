import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function AtendimentoWhatsapp() {
  const [searchParams] = useSearchParams();
  const [countdown, setCountdown] = useState(5);

  const whatsappNumber = '5519993261388';
  const msg = searchParams.get('msg') || '';
  const encodedMsg = encodeURIComponent(msg);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;

  useEffect(() => {
    if (!msg) return;

    const timerRedirect = setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 3000);

    const timerCountdown = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timerCountdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timerRedirect);
      clearInterval(timerCountdown);
    };
  }, [msg, whatsappUrl]);

  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-neutral-900 text-white px-6 sm:px-12 md:px-24 lg:px-32"
      role="main"
      aria-label="Página de redirecionamento para atendimento via WhatsApp"
    >
      {/* Top Banner */}
      <header className="fixed top-0 left-0 w-full bg-orange-700 text-white text-center py-3 font-semibold z-30 shadow-md">
        Atendimento rápido e personalizado via WhatsApp
      </header>

      {/* Espaço para compensar o header fixo */}
      <div className="h-12 sm:h-14"></div>

      {/* Conteúdo Principal */}
      <section className="flex flex-col items-center text-center max-w-md sm:max-w-lg space-y-6 px-4 sm:px-0">
        <img
          src="/vendas/logo.png"
          alt="Logo de atendimento WhatsApp"
          className="w-20 h-20 animate-bounce"
          loading="lazy"
        />

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-full">
          Estamos preparando seu atendimento exclusivo
        </h1>

        <p className="text-lg text-gray-300 max-w-full">
          Em até <strong>{countdown}</strong> segundos você será direcionado para conversar diretamente com nossos especialistas via WhatsApp.
        </p>

        <p className="text-sm text-gray-400 max-w-full px-2 sm:px-0">
          Caso não seja redirecionado automaticamente, clique no botão abaixo para iniciar o atendimento agora mesmo.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="Abrir WhatsApp para atendimento"
          className="w-full max-w-xs sm:max-w-sm"
        >
          <Button className="flex items-center justify-center gap-3 bg-white hover:bg-orange-500 text-black font-semibold px-6 py-3 rounded-full transition-colors duration-300 w-full">
            <img src="/vendas/wpp.svg" alt="Ícone WhatsApp" className="w-6 h-6" />
            Abrir WhatsApp Agora
          </Button>
        </a>
      </section>

      {/* Rodapé opcional para reforçar confiança */}
      <footer className="fixed bottom-4 left-0 w-full text-center text-xs text-gray-500 z-20 px-4">
        Atendimento 100% seguro e confidencial
      </footer>
    </main>
  );
}
