// app/layout.js
import Navbar from '@/components/Navbar';
import { Noto_Sans_Devanagari, Poppins } from 'next/font/google';
import './globals.css';

const devanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari', 'latin'],
  variable: '--font-devanagari',
  weight: ['400', '700'],
  display: 'swap',
});

const sans = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['100', '400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Music Diary',
  description: 'Your musical journal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${devanagari.variable} ${sans.variable}`}>
      <body className="bg-ivory text-deep-blue">
        {children}
      </body>
    </html>
  );
}