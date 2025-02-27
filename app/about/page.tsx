import type { Metadata } from 'next';

import About from '@/components/About';

export const metadata: Metadata = {
  title: 'About',
  description: 'スキルや資格を示します。',
  openGraph: {
    title: 'About',
    description: 'スキルや資格を示します。',
    url: 'https://kcabo.vercel.app/about',
  },
};

export default function Page() {
  return <About />;
}
