"use client"; // <-- Ditambahkan di paling atas

import React from 'react';
import { useLanguage } from '@/context/LanguageContext'; // Pastikan path impor ini benar

const CookiesPage = () => { // Nama komponen bisa diubah agar lebih deskriptif
  const { language } = useLanguage();

  const translations = {
    id: {
      title: 'Kebijakan Cookies',
      intro: 'StreamHib menggunakan Cookies untuk meningkatkan pengalaman Anda di situs kami:',
      usage: 'Penggunaan Cookies',
      usageText: 'Cookies digunakan untuk mengingat preferensi Anda, seperti pilihan bahasa, dan untuk analitik situs.',
      control: 'Kontrol Cookies',
      controlText: 'Anda dapat mengatur penggunaan Cookies melalui pengaturan browser Anda.'
    },
    en: {
      title: 'Cookies Policy',
      intro: 'StreamHib uses cookies to enhance your experience on our site:',
      usage: 'Cookies Usage',
      usageText: 'Cookies are used to remember your preferences, such as language settings, and for site analytics.',
      control: 'Cookies Control',
      controlText: 'You can manage cookies through your browser settings.'
    }
  };

  const t = translations[language] || translations.id;

  return (
    // Section atau div pembungkus luar ini tidak masalah
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-streamhib-blue mb-6 border-b-2 border-streamhib-blue pb-2">
          {t.title}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {t.intro}
        </p>
        <div className="space-y-6 text-gray-600">
          <div className="p-4 bg-gray-50 rounded-md">
            <h2 className="text-xl font-semibold text-streamhib-blue mb-2">{t.usage}</h2>
            <p>{t.usageText}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-md">
            <h2 className="text-xl font-semibold text-streamhib-blue mb-2">{t.control}</h2>
            <p>{t.controlText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiesPage; // Nama export disesuaikan

