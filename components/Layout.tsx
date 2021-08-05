import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className='container px-8 mx-auto min-h-main xl:max-w-screen-lg'>
        {children}
      </main>
      <Footer />
    </>
  );
}
