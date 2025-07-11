
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import WhatsAppIcon from '../icons/WhatsAppIcon';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá, sou ${formData.name}. Email: ${formData.email}. Mensagem: ${formData.message}`;
    window.open(`https://hazap.com.br/redirect/?msg=${encodeURIComponent(whatsappMessage)}`, "_blank");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-black to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
          Vamos Conversar?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Contatos Rápidos
            </h3>
            
            <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-slate-800/30 to-black/30 rounded-2xl border border-orange-500/20 backdrop-blur-sm">
              <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30">
                <Mail className="text-orange-400" size={24} />
              </div>
              <div>
                <p className="font-semibold text-white text-lg">E-mail</p>
                <p className="text-gray-300">contato@hazap.com.br</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-slate-800/30 to-black/30 rounded-2xl border border-orange-500/20 backdrop-blur-sm">
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30">
                <Phone className="text-green-400" size={24} />
              </div>
              <div>
                <p className="font-semibold text-white text-lg">Telefone</p>
                <p className="text-gray-300">(11) 99999-9999</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-slate-800/30 to-black/30 rounded-2xl border border-orange-500/20 backdrop-blur-sm">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30">
                <MapPin className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="font-semibold text-white text-lg">Localização</p>
                <p className="text-gray-300">São Paulo, Brasil</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/30 to-black/30 border border-orange-500/20 rounded-3xl p-8 backdrop-blur-sm">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-black/50 border-gray-600 text-white placeholder-gray-400 rounded-xl h-12"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-black/50 border-gray-600 text-white placeholder-gray-400 rounded-xl h-12"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Mensagem"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-black/50 border-gray-600 text-white placeholder-gray-400 min-h-32 rounded-xl"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-bold py-4 px-8 rounded-full w-full shadow-lg"
              >
                <WhatsAppIcon />
                ENVIAR MENSAGEM
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
