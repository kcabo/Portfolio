import type { Metadata } from 'next';

import Privacy from '@/components/Privacy';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '当サイトではGoogleアナリティクスを使用しています。',
  openGraph: {
    title: 'プライバシーポリシー',
    description: '当サイトではGoogleアナリティクスを使用しています。',
    url: 'https://kcabo.vercel.app/privacy',
  },
};

export default function Page() {
  return <Privacy />;
}
