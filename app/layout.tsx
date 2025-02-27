import type { Metadata, Viewport } from 'next';

import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Reo Kanzaki / 神崎 伶央 - Portfolio',
    template: '%s | Reo Kanzaki',
  },
  description:
    '神崎伶央のポートフォリオサイト。これまで開発したアプリや執筆した記事を紹介。フリーランスWebエンジニアとして活動中。',
  openGraph: {
    title: {
      default: 'Reo Kanzaki / 神崎 伶央 - Portfolio',
      template: '%s | Reo Kanzaki',
    },
    description:
      '神崎伶央のポートフォリオサイト。これまで開発したアプリや執筆した記事を紹介。フリーランスWebエンジニアとして活動中。',
    images: ['https://kcabo.vercel.app/OGP-top.webp'],
    type: 'website',
    url: 'https://kcabo.vercel.app',
    siteName: 'Reo Kanzaki / 神崎 伶央',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://kcabo.vercel.app/OGP-top.webp'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f5f7f9',
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
