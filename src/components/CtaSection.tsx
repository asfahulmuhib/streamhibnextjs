import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CtaSection = () => {
  const { language } = useLanguage();

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6285722165165?text=Saya%20mau%20pesen%2C%20Kak%2C%20Transfer%20kemana%3F", "_blank", "noopener,noreferrer");
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/streamhib", "_blank", "noopener,noreferrer");
  };
  
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-streamhib-blue via-streamhib-blue to-streamhib-light-blue text-white relative overflow-hidden">
      {/* Visual elements in the background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white/10"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 rounded-full bg-white/10"></div>
        
        <div className="absolute top-1/4 left-1/6 h-1 w-16 bg-streamhib-red rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/6 h-1 w-16 bg-streamhib-red -rotate-45"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {language === 'id' ? 'Siap Untuk Live Streaming 24/7?' : 'Ready For 24/7 Live Streaming?'}
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          {language === 'id' ? 
            'Tanpa perlu khawatir tentang koneksi internet atau perangkat yang panas. Biarkan StreamHib yang bekerja untuk kamu.' : 
            'No need to worry about internet connection or overheating devices. Let StreamHib work for you.'}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#128C7E] rounded-full py-6 px-8 font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-white"
          >
            <MessageCircle className="h-5 w-5 mr-2" /> 
            {language === 'id' ? 'Pesan via WhatsApp' : 'Message via WhatsApp'}
          </Button>
          <Button 
            onClick={handleTelegramClick}
            className="bg-[#0088cc] hover:bg-[#0077b5] rounded-full py-6 px-8 font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-white"
          >
            <Send className="h-5 w-5 mr-2" /> 
            {language === 'id' ? 'Pesan via Telegram' : 'Message via Telegram'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
