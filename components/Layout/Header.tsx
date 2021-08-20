import Link from 'next/link';

import Logo from '../../public/logo.svg';

export default function Header() {
  return (
    <header className='pt-12 pb-6 md:pb-10'>
      <div className='container mx-auto'>
        <Link href='/'>
          <a className='block w-8 mx-auto mb-2'>
            <Logo width={32} />
          </a>
        </Link>
        <nav className='flex justify-center gap-6 mx-auto'>
          <Link href='/works'>
            <a className='p-3 text-lg font-bold text-gray-600'>Work</a>
          </Link>
          <Link href='/about'>
            <a className='p-3 text-lg font-bold text-gray-600'>About</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
