import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';

const PricingSection: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    id: {
      title: 'Mulai Streaming 24/7 Hari Ini',
      subtitle: 'Pilih paket yang sesuai dengan kebutuhan Anda. Semua paket dilengkapi dengan fitur yang sama dan dukungan teknis penuh.',
      notice: 'Catatan: Pemesanan yang dilakukan setelah pukul 21.00 WIB akan diproses pada pagi hari berikutnya. Terima kasih atas pengertian Anda!',
      plans: ['Set 1', 'Set 2', 'Set 3'],
      prices: ['Rp200k', 'Rp250k', 'Rp350k'],
      subscribe: 'Mulai Langganan',
      paymentInfo: 'Pemesanan bisa dilakukan dengan transfer sesuai nominal Harga yang tertera ke Rekening Seabank.',
      account: '901872537380 a/n Asfahul Muhib',
      confirmation: 'Kemudian silahkan kirim bukti transfer ke',
      activeToday: 'Bisa langsung aktif hari ini!',
      basicFeatures: [
        "10 Live, 720p, FPS 30, Bit 2500",
        "8 Live, 1080p, FPS 30, Bit 6500",
        "Sewaktu-waktu IP Berubah",
        "Support YouTube & Facebook",
        "Fitur Penjadwalan Youtube",
        "Memakai Server DO",
        "Penyimpanan 60GB",
        "Support Banyak Channel Youtube",
      ],
      proFeatures: [
        "25 Live, 720p, FPS 30, Bit 2500",
        "17 Live, 1080p, FPS 30, Bit 6500",
        "8 Live, 4k, FPS 30, Bit 12000",
        "Support YouTube & Facebook",
        "Fitur Penjadwalan Youtube",
        "Lebih Stabil & IP Tidak Berubah",
        "Penyimpanan 40GB",
        "Support Banyak Channel Youtube",
      ],
      businessFeatures: [
        "52 Live, 720p, FPS 30, Bit 2500",
        "33 Live, 1080p, FPS 30, Bit 6500",
        "14 Live, 4k, FPS 30, Bit 12000",
        "Support YouTube & Facebook",
        "Fitur Penjadwalan Youtube",
        "Lebih Stabil & IP Tidak Berubah",
        "Penyimpanan 80GB",
        "Support Banyak Channel Youtube",
      ],
      popularLabel: "POPULER",
    },
    en: {
      title: 'Start 24/7 Streaming Today',
      subtitle: 'Choose a package that suits your needs. All packages come with the same features and full technical support.',
      notice: 'Note: Orders placed after 9:00 PM WIB will be processed the next morning. Thank you for your understanding!',
      plans: ['Plan 1', 'Plan 2', 'Plan 3'],
      prices: ['$13', '$16', '$22'],
      subscribe: 'Start Subscription',
      paymentInfo: 'You can make a direct transfer according to the listed price to Binance Pay.',
      account: 'Binance ID: 89893460',
      confirmation: 'Then please send the transfer or transaction proof (Binance Pay) to',
      activeToday: 'Can be activated today!',
      basicFeatures: [
        "10 Live, 720p, FPS 30, Bit 2500",
        "8 Live, 1080p, FPS 30, Bit 6500",
        "IP May Change Anytime",
        "Supports YouTube & Facebook",
        "YouTube Scheduling Feature",
        "Uses DO Server",
        "60GB Storage",
        "Supports Multiple YouTube Channels",
      ],
      proFeatures: [
        "25 Live, 720p, FPS 30, Bit 2500",
        "17 Live, 1080p, FPS 30, Bit 6500",
        "8 Live, 4K, FPS 30, Bit 12000",
        "Supports YouTube & Facebook",
        "YouTube Scheduling Feature",
        "More Stable & Fixed IP",
        "40GB Storage",
        "Supports Multiple YouTube Channels",
      ],
      businessFeatures: [
        "52 Live, 720p, FPS 30, Bit 2500",
        "33 Live, 1080p, FPS 30, Bit 6500",
        "14 Live, 4K, FPS 30, Bit 12000",
        "Supports YouTube & Facebook",
        "YouTube Scheduling Feature",
        "More Stable & Fixed IP",
        "80GB Storage",
        "Supports Multiple YouTube Channels",
      ],
      popularLabel: "POPULAR",
    },
  } as const;

  const subscriptionLinks = {
    basic: "https://streamhib.myr.id/pl/set-1-streamhib-lengkap-fitur-jadwal-live",
    pro: "https://streamhib.myr.id/pl/set-2-streamhib-lengkap-fitur-jadwal-live",
    business: "https://streamhib.myr.id/pl/set-3-streamhib-lengkap-fitur-jadwal-live",
  };

  const paypalLinks = {
    basic: "https://www.paypal.com/ncp/payment/DZQPHDLLNMRE4",
    pro: "https://www.paypal.com/ncp/payment/PEGPEHJ6TK7EA",
    business: "https://www.paypal.com/ncp/payment/QLCHTNYT3R2U6",
  };

  const handleSubscribeClick = (type: string) => {
    const link = language === 'en' ? paypalLinks[type] : subscriptionLinks[type];
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="pricing" className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-streamhib-blue mb-4">
          {translations[language].title}
        </h2>
        <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
          {translations[language].subtitle}
        </p>
        <p className="text-sm text-gray-500 italic mb-12 max-w-2xl mx-auto border-l-4 border-streamhib-blue pl-4">
          {translations[language].notice}
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <Card className="border-streamhib-blue/20 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-2">
              <h3 className="text-xl font-bold">{translations[language].plans[0]}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">{translations[language].prices[0]}</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
            </CardHeader>
            <CardContent className="pt-4 pb-6">
              <ul className="text-left space-y-2">
                {translations[language].basicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                onClick={() => handleSubscribeClick('basic')}
                className="w-full max-w-xs bg-streamhib-red hover:bg-streamhib-red/90"
              >
                <Play className="h-5 w-5 mr-2" /> {translations[language].subscribe}
              </Button>
            </CardFooter>
          </Card>
          
          {/* Pro Plan */}
          <Card className="border-streamhib-blue relative overflow-hidden shadow-lg">
            <div className="absolute -right-12 top-6 bg-streamhib-red text-white text-xs font-bold px-12 py-1 transform rotate-45">
              {translations[language].popularLabel}
            </div>
            <CardHeader className="pb-2">
              <h3 className="text-xl font-bold">{translations[language].plans[1]}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">{translations[language].prices[1]}</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
            </CardHeader>
            <CardContent className="pt-4 pb-6">
              <ul className="text-left space-y-2">
                {translations[language].proFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                onClick={() => handleSubscribeClick('pro')}
                className="w-full max-w-xs bg-streamhib-blue hover:bg-streamhib-blue/90"
              >
                <Play className="h-5 w-5 mr-2" /> {translations[language].subscribe}
              </Button>
            </CardFooter>
          </Card>
          
          {/* Business Plan */}
          <Card className="border-streamhib-blue/20 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-2">
              <h3 className="text-xl font-bold">{translations[language].plans[2]}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">{translations[language].prices[2]}</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
            </CardHeader>
            <CardContent className="pt-4 pb-6">
              <ul className="text-left space-y-2">
                {translations[language].businessFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-streamhib-red/10 text-streamhib-red flex items-center justify-center text-xs mr-2">✓</div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                onClick={() => handleSubscribeClick('business')}
                className="w-full max-w-xs bg-streamhib-red hover:bg-streamhib-red/90"
              >
                <Play className="h-5 w-5 mr-2" /> {translations[language].subscribe}
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-8 bg-gray-50 rounded-lg p-6 max-w-3xl mx-auto">
          <p className="text-center text-gray-600">
            {translations[language].paymentInfo}
            <br /> <span className="font-semibold">{translations[language].account}</span>
            <br /> {translations[language].confirmation} <a href="https://wa.me/6285722165165?text=Halo%20kak%2C%20Saya%20mau%20konfirmasi%20pemesanan%20dan%20berikut%20ini%20bukti%20Transfernya.." target="_blank" rel="noopener noreferrer"><span className="font-semibold text-[#128C7E]">Whatsapp</span></a> atau <a href="https://t.me/streamhib" target="_blank" rel="noopener noreferrer"><span className="font-semibold text-[#1E90FF]">Telegram</span></a> StreamHib.
            <br />{translations[language].activeToday}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
