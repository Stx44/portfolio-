"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

export default function Home() {
  const textoOriginal = 'Console.log("Hello world")';

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

      <footer className="w-full h-18 bg-white/90 backdrop-blur-sm sticky top-0 z-50 items-center justify-center text-center shadow-md border-b border-gray-100">
        <div className="h-full grid grid-cols-3">
          <div>
            <Link href="/projetos">
              <motion.button  
                whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
                whileTap={{ scale: 0.95 }}
                className="mt-5 px-8 py-2 bg-blue-500 text-white font-bold rounded-2xl shadow-lg">
                Projetos
              </motion.button>
            </Link>  
          </div>

          <div>
            <Link href="/projetos">
              <motion.button  
                whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
                whileTap={{ scale: 0.95 }}
                className="mt-5 px-8 py-2 bg-blue-500 text-white font-bold rounded-2xl shadow-lg">
                Contato
              </motion.button>
            </Link>  
          </div>

          <div>
            <Link href="/projetos">
              <motion.button  
                whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
                whileTap={{ scale: 0.95 }}
                className="mt-5 px-8 py-2 bg-blue-500 text-white font-bold rounded-2xl shadow-lg">
                Tecnologias
              </motion.button>
            </Link>  
          </div>
        </div>
      </footer>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <section className="w-full py-20 flex items-center justify-center">
        <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 p-10 items-center">
          <div className="order-2 md:order-1">
            <h1 className="font-display text-3xl flex items-center gap-1 uppercase tracking-tighter text-black">
              {textoOriginal.split("").map((letra, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                  }}
                >
                  {letra}
                </motion.span>
              ))}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 2.0 }}
                className="inline-block w-[3px] h-10 bg-[#1d4ed8] ml-1 align-middle"
              />
            </h1>
            <p className="font-sans text-left text-xl leading-relaxed text-gray-800 mt-6">
              Estudante do 1º semestre de Ciência da Computação, com foco no desenvolvimento de soluções modernas e aprendizado contínuo. Possuo conhecimentos básicos em JavaScript, com experiência prática na criação de interfaces dinâmicas utilizando React e React Native, além do desenvolvimento de APIs com Node.js. Complemento minha base técnica com a manipulação de bancos de dados relacionais em PostgreSQL.
              <br /><br />
              Busco minha primeira oportunidade para aplicar esses fundamentos em projetos reais e evoluir na trilha de engenharia de software.
            </p>  
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