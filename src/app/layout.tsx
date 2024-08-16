import { Header } from '@/components/ui/Header';
import type { ReactNode } from 'react';

import { Inter } from 'next/font/google';

import './globals.css';
import { Footer } from '@/components/ui/Footer';
import type { NextFont } from 'next/dist/compiled/@next/font';

const inter: NextFont = Inter({ subsets: ['latin'] });

export default async function LocaleLayout({
 children,
}: {
 children: ReactNode;
}) {
 return (
  <html lang='es'>
   <body className={inter.className}>
    <Header />
    {children}
    <Footer />
   </body>
  </html>
 );
}
