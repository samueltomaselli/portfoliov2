'use client'

import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Header } from "@/components/Header";
import { ServicesSection } from "@/components/ServicesSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { BentoGridThirdDemo } from "@/components/BentoGridThirdDemo";

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  // ... (outros produtos)
];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (

    <main className={`flex min-h-screen flex-col items-center justify-between p-8 ${isDarkMode ? 'dark' : ''} bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-200`}>
      <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="w-full">
        <Header />
        <HeroParallax products={products} />

        <div className="max-w-7xl mx-auto">
          <ServicesSection />
          <BentoGridThirdDemo /> {/* Adicionando o novo componente aqui */}
          <TimelineSection />
          <ContactSection />

        </div>

      </div>

    </main>
  );
}
