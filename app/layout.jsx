import { Archivo_Black, Inter } from "next/font/google";
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

export const metadata = {
  title: "Meu Portfólio",
  description: "Desenvolvedor & Editor de Vídeo",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-br"
      // Aqui aplicamos as variáveis das fontes na tag HTML
      className={`${archivoBlack.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}