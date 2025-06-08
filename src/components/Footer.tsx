"use client";
import React from 'react';
import Logo from './Logo';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const translations = {
    id: {
      description: 'Platform live streaming 24/7 yang berjalan otomatis di server. Buat live YouTube tanpa harus menyalakan komputer.',
      platform: 'Platform',
      company: 'Perusahaan',
      support: 'Support',
      features: 'Fitur',
      pricing: 'Harga',
      demo: 'Demo',
      api: 'API',
      about: 'Tentang Kami',
      contact: 'Kontak',
      help: 'Pusat Bantuan',
      tutorial: 'Tutorial',
      faq: 'FAQ',
      community: 'Komunitas',
      terms: 'Syarat',
      privacy: 'Privasi',
      cookies: 'Cookies'
    },
    en: {
      description: 'A 24/7 live streaming platform that runs automatically on the server. Create YouTube live streams without turning on your computer.',
      platform: 'Platform',
      company: 'Company',
      support: 'Support',
      features: 'Features',
      pricing: 'Pricing',
      demo: 'Demo',
      api: 'API',
      about: 'About Us',
      contact: 'Contact',
      help: 'Help Center',
      tutorial: 'Tutorial',
      faq: 'FAQ',
      community: 'Community',
      terms: 'Terms',
      privacy: 'Privacy',
      cookies: 'Cookies'
    }
  };

  const t = translations[language] || translations.id;

  return (
    <footer className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-gray-600 mb-4">
              {t.description}
            </p>
            <div className="flex items-center space-x-4">
              <a href="" className="text-gray-500 hover:text-streamhib-blue transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="" className="text-gray-500 hover:text-streamhib-blue transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.5 4.46 9.96 9.96 9.96 5.5 0 9.96-4.46 9.96-9.96 0-5.5-4.46-9.96-9.96-9.96zm4.4 6.81h-1.71c-.27 0-.54.27-.54.62v1.33h2.25l-.34 2.25h-1.91v6.05h-2.25v-6.05h-1.91v-2.25h1.91V9.97c0-1.93 1.47-3.45 3.45-3.45h1.91v2.33z" />
                </svg>
              </a>
              <a href="" className="text-gray-500 hover:text-streamhib-blue transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.053-.059 1.37-.059 4.04 0 2.668.01 2.985.059 4.038.044.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.059 4.04.059 2.668 0 2.985-.01 4.039-.059.976-.044 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.054.059-1.37.059-4.039 0-2.67-.01-2.986-.059-4.04-.044-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.059-4.40-.059zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.469a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                </svg>
              </a>
              <a href="" className="text-gray-500 hover:text-streamhib-blue transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-streamhib-blue mb-4">{t.platform}</h3>
            <ul className="space-y-2">
              <li><a href="#fitur" className="text-gray-600 hover:text-streamhib-red">{t.features}</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-streamhib-red">{t.pricing}</a></li>
              <li><a href="http://46.101.161.249:5000/" className="text-gray-600 hover:text-streamhib-red">{t.demo}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-streamhib-blue mb-4">{t.company}</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-streamhib-red">{t.about}</a></li>
              <li><a href="#cta" className="text-gray-600 hover:text-streamhib-red">{t.contact}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-streamhib-blue mb-4">{t.support}</h3>
            <ul className="space-y-2">
              <li><a href="#cta" className="text-gray-600 hover:text-streamhib-red">{t.help}</a></li>
              <li><a href="/tutorial" className="text-gray-600 hover:text-streamhib-red">{t.tutorial}</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-streamhib-red">{t.faq}</a></li>
              <li><a href="https://t.me/+92sib5XsMM5iNzA1" className="text-gray-600 hover:text-streamhib-red">{t.community}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} StreamHib. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/terms" className="text-gray-500 hover:text-streamhib-blue text-sm">{t.terms}</a>
            <a href="/privacy" className="text-gray-500 hover:text-streamhib-blue text-sm">{t.privacy}</a>
            <a href="/cookies" className="text-gray-500 hover:text-streamhib-blue text-sm">{t.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
