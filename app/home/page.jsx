"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
// Mude de magicui para ui
import { TypingAnimation } from "@/components/ui/typing-animation";
import { TextAnimate } from "@/components/ui/text-animate";



export default function Home() {

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
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

      <section className="w-full py-20 flex items-center justify-center">
        <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 gap-5 p-10 items-center">
          <div className="order-2 md:order-1">
            <TypingAnimation blinkCursor={true} pauseDelay={2000} loop className="font-display text-4xl">Console.log("Hello World")</TypingAnimation>
            <br /><br />
            <textanimate animation="blurIn" as="h1" className="font-sans text-left text-xl leading-relaxed text-gray-800 mt-6">
              Estudante do 1º semestre de Ciência da Computação, com foco no desenvolvimento de soluções modernas e aprendizado contínuo. Possuo conhecimentos básicos em JavaScript, com experiência prática na criação de interfaces dinâmicas utilizando React e React Native, além do desenvolvimento de APIs com Node.js. Complemento minha base técnica com a manipulação de bancos de dados relacionais em PostgreSQL.
              <br /><br />
              Busco minha primeira oportunidade para aplicar esses fundamentos em projetos reais e evoluir na trilha de engenharia de software.
            </textanimate>  
          </div>
          <div className="flex justify-center items-center order-1 md:order-2">
            <img 
              src="/image.jpeg" 
              alt="João Vitor Cassiano" 
              className="h-80 w-80 rounded-full object-cover shadow-2xl border-4 border-gray-100"
            />
          </div>
        </div>
      </section>
    </main>
  );
}