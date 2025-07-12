'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import MascotPopupModal from '@/components/modals/MascotPopupModal';
import CarouselSection from '@/components/sections/CarouselSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ComponentsSection from '@/components/sections/ComponentsSection';
import Footer from '@/components/sections/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

const Index = () => {
  const [showMascotPopup, setShowMascotPopup] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setShowMascotPopup(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Google Tag Manager e rastreamento de cliques
  useEffect(() => {
    // GTM Script
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-T2Q8J3J5');
    `;
    document.head.appendChild(gtmScript);

    // GTM noscript (visível sem JS)
    const gtmNoScript = document.createElement('noscript');
    gtmNoScript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T2Q8J3J5"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.insertBefore(gtmNoScript, document.body.firstChild);

    // Rastrear cliques em links do WhatsApp
    const trackWhatsAppClicks = () => {
      const buttons = document.querySelectorAll('a[href*="wa.me"], a[href*="hazap.com.br/redirect"]');
      buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'conversion',
            category: 'whatsapp_click',
            action: 'clique_whatsapp',
            label: (btn as HTMLAnchorElement).href
          });
        });
      });
    };

    // Aguardar render da DOM
    setTimeout(trackWhatsAppClicks, 1000);

    return () => {
      document.head.removeChild(gtmScript);
      if (document.body.contains(gtmNoScript)) {
        document.body.removeChild(gtmNoScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-slate-900 text-white overflow-x-hidden">
      <HeroSection onShowMascotPopup={() => setShowMascotPopup(true)} />
      <MascotPopupModal 
        visible={showMascotPopup} 
        onClose={() => setShowMascotPopup(false)} 
        onScrollToComputers={() => scrollToSection('components')} 
      />
      <CarouselSection />
      <ServicesSection />
      <ComponentsSection />
      <FloatingWhatsApp />
      <Footer onScrollToTop={scrollToTop} />
    </div>
  );
};

export default Index;
