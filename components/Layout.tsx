import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className='container mx-auto min-h-[calc(100vh-188px-108px)] xl:max-w-screen-lg'>
        {children}
      </main>
      <Footer />
    </>
  );
}
