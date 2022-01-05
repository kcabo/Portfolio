import { useRouter } from 'next/router';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter();

  return (
    <>
      <Header />
      <main
        // ヘッダーとフッター分の高さを引く
        className={
          'container mx-auto min-h-[calc(100vh-150px-320px)] ' +
          (pathname.startsWith('/works/')
            ? '2xl:max-w-screen-xl'
            : 'xl:max-w-screen-lg')
        }
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
