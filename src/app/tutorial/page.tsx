"use client"; // <-- Ditambahkan
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link'; // <-- Impor diubah

const Tutorial = () => {
  const { language } = useLanguage();

  const tutorials = {
    id: {
      title: '🎥 Panduan Lengkap Penggunaan StreamHib',
      tutorials: [
        { title: 'Tutorial Download dari Google Drive', url: 'https://youtu.be/GPeDOSUOrbU' },
        { title: 'Tutorial Cara Live Banyak YouTube', url: 'https://youtu.be/2O6HJetRfoE' },
        { title: 'Tutorial Cara Live Facebook', url: 'https://youtu.be/GBMkHpmpGkg' },
        { title: 'Tutorial Cara Penjadwalan Live', url: 'https://youtu.be/gIS9L9C90m0' },
        { title: 'Tutorial Cara Live Lagi tanpa atur Stream Key', url: 'https://youtu.be/ku5TlaEWqyU' },
        { title: 'Tutorial Cara Buat Bitrate CBR di Filmora dan Capcut', url: 'https://youtu.be/3Fdl-OwKw8g' },
        { title: 'Tutorial Cara Live Vertikal', url: 'https://youtu.be/ZLdsNlTzOpA' },
        { title: 'Tutorial Menambah Live di 1 Channel', url: 'https://youtu.be/QLe_cFUHSO4' },
      ],
    },
    en: {
      title: '🎥 Comprehensive StreamHib Usage Guide',
      tutorials: [
        { title: 'Tutorial: Download from Google Drive', url: 'https://youtu.be/GPeDOSUOrbU' },
        { title: 'Tutorial: Live Streaming Multiple YouTube Channels', url: 'https://youtu.be/2O6HJetRfoE' },
        { title: 'Tutorial: Live Streaming on Facebook', url: 'https://youtu.be/GBMkHpmpGkg' },
        { title: 'Tutorial: Scheduling Live Streams', url: 'https://youtu.be/gIS9L9C90m0' },
        { title: 'Tutorial: Resume Live without Setting Stream Key', url: 'https://youtu.be/ku5TlaEWqyU' },
        { title: 'Tutorial: Create CBR Bitrate in Filmora and Capcut', url: 'https://youtu.be/3Fdl-OwKw8g' },
        { title: 'Tutorial: Vertical Live Streaming', url: 'https://youtu.be/ZLdsNlTzOpA' },
        { title: 'Tutorial: Add Multiple Lives to One Channel', url: 'https://youtu.be/QLe_cFUHSO4' },
      ],
    },
  };

  const t = tutorials[language] || tutorials.id;

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-streamhib-blue mb-6 border-b-2 border-streamhib-blue pb-2">
          {t.title}
        </h1>
        <div className="space-y-6 text-gray-600">
          {t.tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              <a
                href={tutorial.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-streamhib-blue hover:underline flex items-center space-x-3"
              >
                <span>🎥</span>
                <span>{tutorial.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
