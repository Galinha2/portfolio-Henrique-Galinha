import { Inter_Tight } from 'next/font/google';
import "./globals.css";
import Header from "../components/header/Header";
import { LanguageProvider } from "@/components/LanguageContext";

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
});

export const metadata = {
  title: "Henrique Galinha | Portfolio",
  description: "Welcome to my portfolio! I'm a UI/UX designer creating beautiful, functional, and engaging digital experiences.",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className="bg-white text-black">
      <body className="flex flex-col min-h-screen w-full bg-white text-black">
        <LanguageProvider>
          <div className="w-full min-h-screen bg-white">
            <Header />
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}