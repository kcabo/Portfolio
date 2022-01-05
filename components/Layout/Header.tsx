import Link from 'next/link';

import Logo from '@/components/Logo';

export default function Header() {
  return (
    <header className='pt-10 pb-6'>
      <div className='container mx-auto'>
        <Link href='/'>
          <a className='block w-6 mx-auto mb-1' aria-label='Go to top'>
            <Logo width={24} />
          </a>
        </Link>
        <nav className='flex justify-center gap-6 mx-auto'>
          <Link href='/works'>
            <a className='p-3 text-lg font-bold text-gray-600'>Works</a>
          </Link>
          <Link href='/about'>
            <a className='p-3 text-lg font-bold text-gray-600'>About</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
