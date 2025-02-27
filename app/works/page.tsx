import type { Metadata } from 'next';

import Works from '@/components/Works';
import fetchWorks from '@/lib/fetchWorks';

export const metadata: Metadata = {
  title: 'Works',
  description: 'これまで開発したアプリの一覧',
  openGraph: {
    title: 'Works',
    description: 'これまで開発したアプリの一覧',
    url: 'https://kcabo.vercel.app/works',
  },
};

export default async function Page() {
  const works = await fetchWorks();

  return <Works works={works} />;
}
