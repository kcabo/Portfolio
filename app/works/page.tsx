import type { Metadata } from 'next';

import Works from '@/components/Works';
import fetchWorks from '@/lib/fetchWorks';

export const metadata: Metadata = {
  title: 'Works | Reo Kanzaki',
  description: 'これまでに開発したアプリ・ツールの一覧です。時系列順にしてあります。',
  openGraph: {
    title: 'Works | Reo Kanzaki',
    description: 'これまでに開発したアプリ・ツールの一覧です。時系列順にしてあります。',
    url: 'https://kcabo.vercel.app/works',
  },
};

export default async function Page() {
  const works = await fetchWorks();

  return <Works works={works} />;
}
