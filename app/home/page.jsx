"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import { TypingAnimation } from "@/components/ui/typing-animation";
import { TextAnimate } from "@/components/ui/text-animate";
import { useEffect } from "react";

export default function Home() {
  
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <main className="relative w-full h-screen max-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="videos/background.webm" type="video/webm" />
          Seu navegador não suporta vídeos.
        </video>
      </div>

      <section className="w-full h-full flex items-center justify-center p-6 md:p-10">
        <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="order-2 md:order-1">
            <TypingAnimation 
              blinkCursor={true} 
              pauseDelay={2000} 
              loop 
              className="font-display text-3xl md:text-4xl"
            >
              Console.log("Hello World")
            </TypingAnimation>
            
            <div className="mt-6">
              <TextAnimate 
                animation="blurIn" 
                as="h1" 
                className="font-sans text-left text-lg md:text-xl leading-relaxed text-gray-800"
              >
                Estudante do 1º semestre de Ciência da Computação, com foco no desenvolvimento de soluções modernas e aprendizado contínuo. Possuo conhecimentos básicos em JavaScript, com experiência prática na criação de interfaces dinâmicas utilizando React e React Native, além do desenvolvimento de APIs com Node.js. Complemento minha base técnica com a manipulação de bancos de dados relacionais em PostgreSQL.
              </TextAnimate> 
              
              <p className="font-sans text-left text-lg md:text-xl leading-relaxed text-gray-800 mt-4">
                Busco minha primeira oportunidade para aplicar esses fundamentos em projetos reais e evoluir na trilha de engenharia de software.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center order-1 md:order-2">
            <img 
              src="/image.jpeg" 
              alt="João Vitor Cassiano" 
              className="h-60 w-60 md:h-80 md:w-80 rounded-full object-cover shadow-2xl border-4 border-gray-100"
            />
          </div>

        </div>
      </section>
    </main>
  );
}