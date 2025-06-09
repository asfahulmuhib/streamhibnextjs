import type { Metadata } from "next";
import { Inter } from "next/font/google"; // <-- Mengganti Geist dengan Inter
import "../../styles/global.css";

// Impor yang sudah ada dan ditambahkan:
import QueryProvider from "@/providers/QueryProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { LanguageProvider } from "@/context/LanguageContext";

// Mengganti font Geist dengan Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // Menyiapkan CSS Variable untuk font
});

export const metadata: Metadata = {
  title: "StreamHib - 24/7 YouTube Live Tanpa Komputer",
  description: "StreamHib bantu kamu live nonstop, langsung dari server. Tanpa install, tanpa takut mati sendiri. Setting 1x, live terus!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Menggunakan variabel font dari Inter */}
      <body className={`${inter.variable} font-sans antialiased`}>
        <QueryProvider>
            <TooltipProvider>
              <LanguageProvider>
                <Header />
                {children}
                <Footer />
                <Toaster />
                <Sonner />
              </LanguageProvider>
            </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
