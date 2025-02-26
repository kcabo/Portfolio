import type { Metadata, Viewport } from 'next';

import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Reo Kanzaki - Portfolio',
  description: '神崎伶央の個人サイトです。これまでに開発したソフトウェアや執筆した記事を紹介しています。',
  openGraph: {
    title: 'Reo Kanzaki - Portfolio',
    description: '神崎伶央の個人サイトです。これまでに開発したソフトウェアや執筆した記事を紹介しています。',
    images: ['https://kcabo.vercel.app/OGP-top.webp'],
    type: 'website',
    url: 'https://kcabo.vercel.app',
    siteName: 'Reo Kanzaki - Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://kcabo.vercel.app/OGP-top.webp'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className=''>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
