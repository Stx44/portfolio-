import { Archivo_Black, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${archivoBlack.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-black">
        
        {/* Header Fixo no Topo */}
        <header className="fixed top-0 left-0 z-50 w-full h-20 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <nav className="flex items-center justify-around h-full max-w-screen-xl mx-auto px-4">
            <Link href="/home" className="px-6 py-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all active:scale-95">
              Perfil
            </Link>
            <Link href="/projetos" className="px-6 py-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all active:scale-95">
              Projetos
            </Link>
            <Link href="/tecnologia" className="px-6 py-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all active:scale-95">
              Tecnologia
            </Link>
            <Link href="/contato" className="px-6 py-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all active:scale-95">
              Contato
            </Link>
          </nav>
        </header>

        {/* O pt-20 (padding-top) serve para o conteúdo começar abaixo do header */}
        <main className="flex-grow pt-20"> 
          {children}
        </main>

      </body>
    </html>
  );
}