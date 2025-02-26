import Link from 'next/link';

import Logo from '@/components/Logo';

export default function Header() {
  return (
    <header className='pt-10 pb-6'>
      <div className='container mx-auto'>
        <Link href='/' className='mx-auto mb-1 block w-6' aria-label='Go to top'>
          <Logo width={24} />
        </Link>
        <nav className='mx-auto flex justify-center gap-6'>
          <Link href='/works' className='p-3 text-lg font-bold text-gray-600'>
            Works
          </Link>
          <Link href='/about' className='p-3 text-lg font-bold text-gray-600'>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
