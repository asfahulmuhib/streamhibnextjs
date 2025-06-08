"use client";
import React from 'react';
import Logo from './Logo';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import Link from 'next/link'; // Pastikan impor Link benar

const Header = () => {
  const { language } = useLanguage();

  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="w-full py-4 px-4 md:px-6 flex items-center justify-between z-10 sticky top-0 glass-effect">
      <Logo />
      
      <NavigationMenu>
        <NavigationMenuList className="hidden md:flex">
          {/* Item 1: Home */}
          <NavigationMenuItem>
            <NavigationMenuLink 
              className={navigationMenuTriggerStyle()} 
              onClick={(e) => scrollToSection("hero", e)}
              style={{cursor: "pointer"}}
            >
              {language === 'id' ? 'Home' : 'Home'}
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          {/* Item 2: Fitur */}
          <NavigationMenuItem>
            <NavigationMenuLink 
              className={navigationMenuTriggerStyle()} 
              onClick={(e) => scrollToSection("fitur", e)}
              style={{cursor: "pointer"}}
            >
              {language === 'id' ? 'Fitur' : 'Features'}
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          {/* Item 3: Testimoni - Perbaiki struktur */}
          <NavigationMenuItem>
            <NavigationMenuLink 
              className={navigationMenuTriggerStyle()} 
              onClick={(e) => scrollToSection("testimoni", e)}
              style={{cursor: "pointer"}}
            >
              {language === 'id' ? 'Testimoni' : 'Testimonials'}
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          {/* Item 4: Pricing - Perbaiki struktur */}
          <NavigationMenuItem>
            <NavigationMenuLink 
              className={navigationMenuTriggerStyle()} 
              onClick={(e) => scrollToSection("pricing", e)}
              style={{cursor: "pointer"}}
            >
              {language === 'id' ? 'Paket' : 'Pricing'}
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          {/* Item 5: Tutorial - Pastikan Link href benar */}
          {/* Item 5: Tutorial - Perbaiki struktur Link */}
<NavigationMenuItem>
  <Link href="/tutorial" passHref legacyBehavior> 
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      {language === 'id' ? 'Tutorial Penggunaan' : 'Usage Tutorial'}
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
      
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
