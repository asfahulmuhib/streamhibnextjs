"use client"; // <-- Ditambahkan

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link'; // <-- Impor diubah

const PaymentSuccessfull: React.FC = () => {
  const { language } = useLanguage();
  const [isAgreed, setIsAgreed] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6285722165165?text=Halo%20kak%2C%20saya%20sudah%20order%20paket%20di%20StreamHib%2C%20bisa%20segera%20dibuatkan%20servernya%3F", "_blank", "noopener,noreferrer");
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/streamhib", "_blank", "noopener,noreferrer");
  };

  const translations = {
    id: {
      title: 'Terimakasih Sudah Order!',
      message: 'Permintaan Anda sudah kami terima. Silakan hubungi kami melalui WhatsApp atau Telegram untuk segera dibuatkan server.',
      checkboxLabel: 'Saya setuju dengan ',
      termsLink: 'Syarat dan Ketentuan',
      buttonWhatsApp: 'Hubungi via WhatsApp',
      buttonTelegram: 'Hubungi via Telegram',
    },
    en: {
      title: 'Thank You for Your Order!',
      message: 'We have received your request. Please contact us via WhatsApp or Telegram to have your server set up immediately.',
      checkboxLabel: 'I agree to the ',
      termsLink: 'Terms and Conditions',
      buttonWhatsApp: 'Contact via WhatsApp',
      buttonTelegram: 'Contact via Telegram',
    },
  } as const;

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-8 sm:py-12">
      <div className="max-w-md mx-auto text-center space-y-4 sm:space-y-6">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-streamhib-blue">
          {translations[language].title}
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          {translations[language].message}
        </p>
        <div className="flex items-center justify-center space-x-2">
          <div className="relative">
            <input
              type="checkbox"
              id="terms-agreement"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              className="h-6 w-6 sm:h-5 sm:w-5 text-streamhib-blue border-gray-300 rounded focus:ring-streamhib-blue"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-xs sm:text-sm text-gray-600">✓</span>
            </div>
          </div>
          <label htmlFor="terms-agreement" className="text-base sm:text-sm text-gray-600">
            {translations[language].checkboxLabel}
            <Link href="/terms" className="text-streamhib-blue hover:underline text-base sm:text-sm">
              {translations[language].termsLink}
            </Link>
          </label>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            onClick={handleWhatsAppClick}
            disabled={!isAgreed}
            className={`w-full sm:w-auto ${
              isAgreed ? 'bg-[#25D366] hover:bg-[#128C7E]' : 'bg-gray-300 cursor-not-allowed'
            } text-white font-semibold text-lg py-2 px-4 rounded-lg`}
          >
            {translations[language].buttonWhatsApp}
          </Button>
          <Button
            onClick={handleTelegramClick}
            disabled={!isAgreed}
            className={`w-full sm:w-auto ${
              isAgreed ? 'bg-[#1E90FF] hover:bg-[#147BC9]' : 'bg-gray-300 cursor-not-allowed'
            } text-white font-semibold text-lg py-2 px-4 rounded-lg`}
          >
            {translations[language].buttonTelegram}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccessfull;
