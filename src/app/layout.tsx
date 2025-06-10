import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Impor yang sudah ada dan ditambahkan:
import QueryProvider from "@/providers/QueryProvider"; // Sesuaikan path jika perlu
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip"; // <-- Ditambahkan
import { Toaster } from "@/components/ui/toaster"; // <-- Ditambahkan
import { Toaster as Sonner } from "@/components/ui/sonner"; // <-- Ditambahkan
import { LanguageProvider } from "@/context/LanguageContext"; // <-- Ditambahkan
// Kita akan tangani QueryClientProvider secara terpisah jika diperlukan nanti

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StreamHib - 24/7 YouTube Live Tanpa Komputer",
  description: "StreamHib bantu kamu live video nonstop, langsung dari server. Tanpa install, tanpa takut mati sendiri. Setting 1x, live terus!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
	  <QueryProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider> {/* <-- Dibungkus TooltipProvider */}
            <LanguageProvider> {/* <-- Dibungkus LanguageProvider */}
              <Header />
              {children}
              <Footer />
              <Toaster /> {/* <-- Toaster dirender di sini */}
              <Sonner /> {/* <-- Sonner dirender di sini */}
            </LanguageProvider>
          </TooltipProvider>
        </ThemeProvider>
		 </QueryProvider>
      </body>
    </html>
  );
}
