import { useRouter } from 'next/dist/client/router';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();

  return (
    <>
      <Header />
      <main
        className={
          'container mx-auto min-h-[calc(100vh-188px-320px)] ' +
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
