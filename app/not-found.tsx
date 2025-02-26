import type { Metadata } from 'next';

import NotFound from '@/components/NotFound';

export const metadata: Metadata = {
  title: 'Error 404 | Reo Kanzaki',
};

export default function Page() {
  return <NotFound />;
}
