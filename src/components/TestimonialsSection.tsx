
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from '@/context/LanguageContext';

const testimonials = [
  {
    quote: "Sudah 3 minggu live nonstop, mantap banget!",
    quoteEn: "It's been live nonstop for 3 weeks, really awesome!",
    author: "Rina.",
    channel: "Banjarmasin, Kalimantan Selatan",
    image: "/lovable-uploads/rina.jpg"
  },
  {
    quote: "Pernah pakai layanan lain, 2 hari mati. Pindah ke StreamHib, lancar!",
    quoteEn: "I used [competitor] before, it died after 2 days. Switched to StreamHib, and it's smooth!",
    author: "Budi S.",
    channel: "Trenggalek, Jawa Timur",
    image: "/lovable-uploads/budi.jpg"
  },
  {
    quote: "Cuma modal HP dan dashboard ini, live terus jalan.",
    quoteEn: "With just a phone and this dashboard, my stream keeps going.",
    author: "Nisa",
    channel: "Depok, Jawa Barat",
    image: "/lovable-uploads/nisa.png"
  }
];

const TestimonialsSection = () => {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 px-4 relative overflow-hidden bg-gradient-to-b from-blue-50/70 to-purple-50/50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwYTNhNWYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiAwaDF2LTZoLTZ2NmgtMXYtN2g4djd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-streamhib-blue mb-4">
          {language === 'id' ? 'Pengguna Sudah Membuktikan' : 'Users Have Proven It'}
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          {language === 'id' ? (
            <>Bergabung dengan <span className="font-semibold">50+ channel YouTube</span> yang sudah menggunakan StreamHib untuk menjaga live streaming mereka tetap online 24/7.</>
          ) : (
            <>Join <span className="font-semibold">50+ YouTube channels</span> that already use StreamHib to keep their live streams online 24/7.</>
          )}
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm">
              <CardContent className="p-6 relative">
                <div className="absolute top-2 right-4 text-7xl text-streamhib-red/30 font-serif">"</div>
                <p className="text-lg font-bold text-gray-800 mb-6 relative z-10 italic">
                  {language === 'id' ? testimonial.quote : testimonial.quoteEn}
                </p>
                <div className="border-t border-gray-100 pt-4 flex items-center">
                  <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback className="bg-streamhib-blue/10 text-streamhib-blue">
                      {testimonial.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-3 text-left">
                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.channel}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
