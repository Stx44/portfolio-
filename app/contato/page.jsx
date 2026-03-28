"use client"

import { motion } from "framer-motion";
import Link from 'next/link';

export default function Contato() {
    
    // Animação em cascata para os botões
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <main className="min-h-screen bg-white w-full flex flex-col relative overflow-hidden">
            <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-20"
                >
                    <source src="/videos/background.webm" type="video/webm" />
                </video>
            </div>

            <section className="flex-grow w-full flex flex-col items-center justify-center py-12">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-black text-slate-800 text-center mb-16 uppercase tracking-tighter"
                >
                    Conecte-se comigo
                </motion.h2>

                <motion.div 
                    className="max-w-6xl w-full px-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">    
                        <motion.div variants={itemVariants} className="w-full max-w-[240px]">
                            <Link href="https://www.instagram.com/44stx_/" target="_blank">
                                <motion.button
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full aspect-square flex flex-col items-center justify-center gap-5 bg-blue-500 text-white font-bold rounded-[2.5rem] shadow-2xl"
                                >
                                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                    <span className="text-xl">Instagram</span>
                                </motion.button>
                            </Link>
                        </motion.div>

                        <motion.div variants={itemVariants} className="w-full max-w-[240px]">
                            <Link href="https://www.linkedin.com/in/jo%C3%A3o-vitor-cassiano-a306383a0/" target="_blank">
                                <motion.button
                                    whileHover={{ scale: 1.05, rotate: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full aspect-square flex flex-col items-center justify-center gap-5 bg-blue-500 text-white font-bold rounded-[2.5rem] shadow-2xl"
                                >
                                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                    <span className="text-xl">Linkedin</span>
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* GitHub - SVG MANUAL */}
                        <motion.div variants={itemVariants} className="w-full max-w-[240px]">
                            <Link href="https://github.com/Stx44" target="_blank">
                                <motion.button
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full aspect-square flex flex-col items-center justify-center gap-5 bg-blue-500 text-white font-bold rounded-[2.5rem] shadow-2xl"
                                >
                                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                                    <span className="text-xl">GitHub</span>
                                </motion.button>
                            </Link>
                        </motion.div>

                        <motion.div variants={itemVariants} className="w-full max-w-[240px]">
                            <Link href="mailto:seuemail@gmail.com">
                                <motion.button
                                    whileHover={{ scale: 1.05, rotate: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full aspect-square flex flex-col items-center justify-center gap-5 bg-blue-500 text-white font-bold rounded-[2.5rem] shadow-2xl"
                                >
                                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                    <span className="text-xl">Gmail</span>
                                </motion.button>
                            </Link>
                        </motion.div>

                    </div>
                </motion.div>
            </section>
        </main>
    );
}