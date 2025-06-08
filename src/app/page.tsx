"use client"; // <-- Ditambahkan di paling atas

import React from 'react';
// import Header from '@/components/Header'; // <-- Dihapus
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
// import Footer from '@/components/Footer'; // <-- Dihapus
import { useLanguage } from '@/context/LanguageContext';
import { Separator } from '@/components/ui/separator';

// Nama komponen diubah (opsional)
const HomePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
const { language } = useLanguage();

  // Div pembungkus luar dihapus karena layout sudah ada di layout.tsx
  // Header dan Footer juga dihapus dari sini
  return (
    <main className="w-full">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="fitur" className="w-full bg-gradient-cool">
        <FeatureSection />
      </section>
      <Separator className="h-px bg-gray-100" />
      <section id="testimoni" className="w-full">
        <TestimonialsSection />
      </section>
      <Separator className="h-px bg-gray-100" />
      <section id="pricing" className="w-full bg-gradient-modern">
        <PricingSection />
      </section>
      <FaqSection />
      <CtaSection />
    </main>
  );
};

export default HomePage; // Nama export disesuaikan

