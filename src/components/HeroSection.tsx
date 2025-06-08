import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';

const HeroSection = () => {
  const { language } = useLanguage();

  const handleTryNowClick = () => {
    window.open("http://46.101.161.249:5000/", "_blank", "noopener,noreferrer");
  };

  const translations = {
    id: {
      liveIndicator: 'LIVE',
      title1: 'Bikin Live Jadi Cuan',
      title2: 'Live YouTube 24/7',
      title3: 'Tanpa Komputer',
      subtitle1: 'StreamHib bantu kamu live video nonstop, langsung dari server.',
      subtitle2: 'Tanpa install, tanpa takut mati sendiri. Setting 1x, live terus!',
      tryNow: 'Coba Trial Gratis',
    },
    en: {
      liveIndicator: 'LIVE',
      title1: 'Turn Live Into Profit',
      title2: '24/7 YouTube Live',
      title3: 'No Computer Needed',
      subtitle1: 'StreamHib helps you stream videos non-stop, directly from the server.',
      subtitle2: 'No installation, no fear of crashing. Set it once, stream forever!',
      tryNow: 'Try Free Trial',
    },
  };

  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center px-4 py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white -z-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-4 border-streamhib-blue/20 animate-pulse-light"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-4 border-streamhib-blue/10 animate-pulse-light" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-4 border-streamhib-red/10 animate-pulse-light" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Enhanced background pattern */}
     <div className="absolute inset-0 bg-pattern opacity-20 -z-5"></div>
      
      {/* Live Indicator */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center gap-2 bg-black/80 text-white py-1 px-3 rounded-full">
        <div className="h-2 w-2 bg-red-500 rounded-full animate-live-dot"></div>
        <span className="text-xs font-semibold">{translations[language].liveIndicator}</span>
      </div>

      <div className="max-w-[800px] mx-auto text-center space-y-6 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          <span className="text-xl md:text-2xl font-semibold block mb-2 text-gradient">{translations[language].title1}</span>
          <span className="text-gradient">{translations[language].title2}</span> <span className="text-streamhib-red">{translations[language].title3}</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
          {translations[language].subtitle1}
          <span className="font-semibold block mt-2">{translations[language].subtitle2}</span>
        </h2>

        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleTryNowClick}
            size="lg"
            className="bg-streamhib-red hover:bg-streamhib-red/90 text-white font-semibold text-lg"
          >
            <Play className="h-5 w-5 mr-2" /> {translations[language].tryNow}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
