import type { Metadata } from 'next';

import Privacy from '@/components/Privacy';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | Reo Kanzaki',
  description: '当サイトのプライバシーポリシーについて',
  openGraph: {
    title: 'プライバシーポリシー | Reo Kanzaki',
    description: '当サイトのプライバシーポリシーについて',
    url: 'https://kcabo.vercel.app/privacy',
  },
};

export default function Page() {
  return <Privacy />;
}
