
import React from 'react';
import { Button } from '@/components/ui/button';
import WhatsAppIcon from '../icons/WhatsAppIcon';

interface HeroSectionProps {
  onShowMascotPopup: () => void;
}

const HeroSection = ({ onShowMascotPopup }: HeroSectionProps) => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden rounded-b-3xl">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-orange-900/30 rounded-b-3xl">
      <div className="absolute inset-0 bg-black/60 rounded-b-3xl"></div>
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="w-full h-full object-cover opacity-40 rounded-b-3xl"
      >
        <source src="https://iyqujwbqfomznelsvebl.supabase.co/storage/v1/object/public/videos-hazap//hero-horizontal-videos.mp4" type="video/mp4" />
      </video>
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <div className="mb-12 animate-fade-in">
        <img 
          src="/lovable-uploads/3fbca5f5-cb6e-4f54-b24a-4c4f6fb2394e.png" 
          alt="Hazap Logo" 
          className="h-44 mx-auto mb-8 drop-shadow-2xl"
        />
        <h1 className="text-3xl md:text-5xl font-bold mb-8 animate-fade-in animation-delay-300 leading-tight">
          Eleita a melhor loja de informática do<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Interior de São Paulo
          </span>
        </h1>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Button 
          onClick={onShowMascotPopup}
          className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold py-6 px-10 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl shadow-green-500/25 backdrop-blur-sm"
        >
          <WhatsAppIcon />
          FALE COM ESPECIALISTA
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
