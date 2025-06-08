
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-streamhib-blue hover:bg-gradient-to-r from-streamhib-blue/10 to-streamhib-light-blue/5 transition-all duration-300"
    >
      <Globe size={16} className="text-streamhib-blue" />
      <span className="font-medium">{language === 'id' ? 'EN' : 'ID'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
