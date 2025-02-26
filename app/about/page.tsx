import type { Metadata } from 'next';

import About from '@/components/About';

export const metadata: Metadata = {
  title: 'About | Reo Kanzaki',
  description: '私の使用可能言語や経歴について',
  openGraph: {
    title: 'About | Reo Kanzaki',
    description: '私の使用可能言語や経歴について',
    url: 'https://kcabo.vercel.app/about',
  },
};

export default function Page() {
  return <About />;
}
