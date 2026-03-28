"use client"

import { motion } from "framer-motion";
import Link from 'next/link'

const ProjectCard = ({ category, title, description, imgSrc, link, bg }) => (
  <section className={`w-full flex items-center justify-center py-10 ${bg}`}>
    <div className="max-w-screen-xl w-full px-10">
      <div className="mx-auto max-w-5xl bg-slate-800/50 p-12 rounded-3xl border border-slate-700 shadow-2xl">
        <div className="flex items-center gap-8">
          <img 
            className="hidden md:block w-1/3 mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-left object-contain" 
            src={imgSrc} 
            alt={title} 
          />
          <div className="font-medium">
            <p className="font-mono text-xs text-blue-500 uppercase tracking-widest">{category}</p>
            <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
            <p className="mt-2 text-base leading-relaxed text-gray-300 text-balance">
              {description}
            </p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
                whileTap={{ scale: 0.95 }}
                className="mt-5 px-8 py-2 bg-blue-500 text-white font-bold rounded-2xl shadow-lg"
              >
                Visitar
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function Projetos(){
    return (
        <main className="bg-white w-full">
            <footer className="w-full h-18 bg-slate-800 backdrop-blur-sm sticky top-0 z-50 items-center justify-center text-center shadow-md border-b drop-shadow-2xl">
              <div className="h-full grid grid-cols-3">
                <div>
                  <Link href="/home">
                    <motion.button  
                      whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-5 px-8 py-2 bg-blue-500 text-white font-bold rounded-2xl shadow-lg">
                      Perfil
                    </motion.button>
                  </Link>  
                </div>

                <div>
                  <Link href="/contato">
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
            
            <ProjectCard 
                category="Saúde"
                title="PlusHealth"
                imgSrc="logo2.svg"
                link="https://github.com/Stx44/TCC_react_native"
                bg="bg-slate-900"
                description="Aplicativo móvel focado na promoção de hábitos saudáveis, desenvolvido como Trabalho de Conclusão de Curso (TCC) em Desenvolvimento de Sistemas. A solução permite que usuários gerenciem metas semanais, monitorem o progresso por meio de indicadores visuais e registrem atividades de alimentação e exercícios. Construído com React Native e Expo."
            />

            <ProjectCard 
                category="Social"
                title="VeriFact"
                imgSrc="verifact.svg"
                link="https://veri-fact-eight.vercel.app/"
                bg="bg-slate-900"
                description="Aplicativo focado na verificação de informações e combate a notícias falsas. Desenvolvido com Next.js e Tailwind CSS, o projeto utiliza uma interface moderna e responsiva para garantir que o usuário tenha acesso a dados confiáveis de forma rápida e eficiente."
            />

        </main>
    );
}