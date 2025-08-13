import { Inter_Tight } from 'next/font/google';
import "./globals.css";
import Header from "../components/header/Header"
import { LanguageProvider } from "@/components/LanguageContext";

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
});

export const metadata = {
  title: "Henrique Galinha | Portfolio",
  description: "Welcome to my portfolio! I'm a UI/UX designer creating beautiful, functional, and engaging digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} flex antialiased`}>
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
